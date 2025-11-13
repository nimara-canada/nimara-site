import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface TypeformAnswer {
  field: {
    id: string;
    ref?: string;
    type: string;
  };
  type: string;
  [key: string]: any;
}

interface TypeformWebhook {
  event_id: string;
  event_type: string;
  form_response: {
    form_id: string;
    token: string;
    landed_at: string;
    submitted_at: string;
    answers: TypeformAnswer[];
  };
}

const extractAnswerValue = (answer: TypeformAnswer): string => {
  // Handle different answer types
  if (answer.type === 'email') return answer.email || '';
  if (answer.type === 'text' || answer.type === 'short_text') return answer.text || '';
  if (answer.type === 'choice') return answer.choice?.label || '';
  if (answer.type === 'choices') return answer.choices?.labels?.join(', ') || '';
  if (answer.type === 'number') return answer.number?.toString() || '';
  if (answer.type === 'boolean') return answer.boolean ? 'Yes' : 'No';
  if (answer.type === 'date') return answer.date || '';
  if (answer.type === 'url') return answer.url || '';
  if (answer.type === 'phone_number') return answer.phone_number || '';
  
  return JSON.stringify(answer);
};

const getFormCode = (formId: string): string => {
  // Map Typeform form IDs to internal form codes
  if (formId === 'I6zHdy6K') return 'CONSULT_ELIG';
  return 'TYPEFORM_SUBMISSION';
};

const buildEmailSubject = (formCode: string, answers: Record<string, string>): string => {
  switch (formCode) {
    case 'CONSULT_ELIG':
      return `New Consultant Eligibility Check - ${answers.email || 'No email'}`;
    default:
      return `New Typeform Submission - ${formCode}`;
  }
};

const buildEmailBody = (formCode: string, answers: Record<string, string>): string => {
  let body = `<h2>New Form Submission: ${formCode}</h2>\n\n`;
  
  for (const [fieldRef, value] of Object.entries(answers)) {
    if (value) {
      body += `<p><strong>${fieldRef}:</strong> ${value}</p>\n`;
    }
  }
  
  return body;
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const webhook: TypeformWebhook = await req.json();
    
    console.log('Received Typeform webhook:', {
      event_type: webhook.event_type,
      form_id: webhook.form_response?.form_id,
      answers_count: webhook.form_response?.answers?.length
    });

    // Extract answers into a flat object
    const answers: Record<string, string> = {};
    if (webhook.form_response?.answers) {
      webhook.form_response.answers.forEach((answer) => {
        const fieldRef = answer.field.ref || answer.field.id;
        answers[fieldRef] = extractAnswerValue(answer);
      });
    }

    // Determine form code
    const formCode = getFormCode(webhook.form_response?.form_id || '');
    
    // Find email in answers
    const replyToEmail = answers.email || answers.Email || answers.email_address || 'noreply@nimara.ca';

    // Build email content
    const subject = buildEmailSubject(formCode, answers);
    const htmlBody = buildEmailBody(formCode, answers);

    // Send email
    const emailResponse = await resend.emails.send({
      from: "Nimara Forms <onboarding@resend.dev>",
      to: ["hello@nimara.ca"],
      replyTo: replyToEmail,
      subject: subject,
      html: htmlBody,
    });

    console.log('Email sent successfully:', emailResponse);

    return new Response(
      JSON.stringify({ success: true, message: 'Webhook processed successfully' }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error processing Typeform webhook:", error);
    
    // Return success to Typeform even on error to avoid retries
    return new Response(
      JSON.stringify({ success: true, message: 'Webhook received' }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
