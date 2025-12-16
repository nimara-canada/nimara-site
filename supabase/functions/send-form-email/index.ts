import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface FormEmailRequest {
  formCode: string;
  payload: Record<string, any>;
}

const formatFieldValue = (value: any): string => {
  if (Array.isArray(value)) {
    return value.join(", ");
  }
  if (typeof value === "object" && value !== null) {
    return JSON.stringify(value);
  }
  return String(value || "");
};

const getHelpTypeLabel = (value: string): string => {
  const labels: Record<string, string> = {
    grant: "Grant deadline (proposal, budget, reporting)",
    board: "Board issue (meeting, decision, conflict)",
    money: "Money mess (tracking, receipts, reports)",
    people: "People issue (staff, contractor, role problems)",
    program: "Program paperwork (proof, files, records)",
    other: "Other",
  };
  return labels[value] || value;
};

const buildEmailSubject = (formCode: string, payload: Record<string, any>): string => {
  let orgOrName = "";
  let region = "";
  
  // Determine orgOrName and region based on form
  switch (formCode) {
    case "3QUOTES":
      orgOrName = payload.q_org || "";
      region = payload.q_region || "";
      return `Nimara — New quotes request: ${orgOrName} (${region})`;
    case "3QUOTES_MORE":
      orgOrName = payload.q_org || "";
      return `Nimara — Extra details added: ${orgOrName}`;
    case "PKG_WAITLIST":
      orgOrName = payload.org || "";
      return `[NIMARA:PKG_WAITLIST] ${orgOrName}`;
    case "CALLBACK":
      orgOrName = payload.cb_name || "";
      return `[NIMARA:CALLBACK] ${orgOrName}`;
    case "CONSULT_APPLY":
      orgOrName = payload.name || "";
      return `[NIMARA:CONSULT_APPLY] ${orgOrName}`;
    case "CONSULT_ELIG":
      orgOrName = payload.name || "";
      return `[NIMARA:CONSULT_ELIG] ${orgOrName}`;
    case "PORTAL_NOTIFY":
      orgOrName = payload.org || "";
      return `[NIMARA:PORTAL_NOTIFY] ${orgOrName}`;
    case "NEWSLETTER":
      return `[NIMARA:NEWSLETTER] ${payload.email || ""}`;
    case "URGENT_HELP":
      orgOrName = payload.organization || payload.name || "";
      const helpType = getHelpTypeLabel(payload.help_type || "");
      return `🚨 [NIMARA:URGENT] ${orgOrName} — ${helpType}`;
    default:
      return `[NIMARA:${formCode}] ${payload.email || payload.name || ""}`;
  }
};

const buildEmailBody = (formCode: string, payload: Record<string, any>): string => {
  let body = "";
  
  // Add request ID at the top if present
  if (payload.request_id) {
    body += `Request ID: ${payload.request_id}\n`;
    body += `---\n\n`;
  }
  
  // Format based on form type for better readability
  if (formCode === "3QUOTES") {
    body += `Main Quote Request\n\n`;
    body += `Timestamp: ${payload.timestamp || ""}\n`;
    body += `Email: ${payload.q_email || ""}\n`;
    body += `Organization: ${payload.q_org || ""}\n`;
    body += `Province/Territory: ${payload.q_region || ""}\n`;
    body += `Category: ${payload.q_category || ""}\n`;
    body += `What result do you want?: ${payload.q_outcome || ""}\n\n`;
    body += `UTM Source: ${payload.utm_source || ""}\n`;
    body += `UTM Medium: ${payload.utm_medium || ""}\n`;
    body += `UTM Campaign: ${payload.utm_campaign || ""}\n`;
    body += `Referrer: ${payload.referrer || ""}\n`;
  } else if (formCode === "3QUOTES_MORE") {
    body += `Extra Details Added\n\n`;
    body += `Timestamp: ${payload.timestamp || ""}\n`;
    body += `Anything else we should know?: ${payload.om_note || "(not provided)"}\n`;
    body += `When do you want to start?: ${payload.om_start || "(not provided)"}\n`;
    body += `Budget range (CAD): ${payload.om_budget || "(not provided)"}\n\n`;
    body += `UTM Source: ${payload.utm_source || ""}\n`;
    body += `UTM Medium: ${payload.utm_medium || ""}\n`;
    body += `UTM Campaign: ${payload.utm_campaign || ""}\n`;
    body += `Referrer: ${payload.referrer || ""}\n`;
  } else if (formCode === "URGENT_HELP") {
    body += `🚨 URGENT HELP REQUEST\n`;
    body += `${"=".repeat(40)}\n\n`;
    
    body += `CONTACT INFO\n`;
    body += `${"-".repeat(20)}\n`;
    body += `Name: ${payload.name || ""}\n`;
    body += `Email: ${payload.email || ""}\n`;
    body += `Organization: ${payload.organization || "(not provided)"}\n\n`;
    
    body += `PROBLEM DETAILS\n`;
    body += `${"-".repeat(20)}\n`;
    body += `Type: ${getHelpTypeLabel(payload.help_type || "")}\n`;
    body += `Deadline: ${payload.deadline || "(no deadline specified)"}\n\n`;
    
    body += `DESCRIPTION\n`;
    body += `${"-".repeat(20)}\n`;
    body += `${payload.details || ""}\n\n`;
    
    body += `${"=".repeat(40)}\n`;
    body += `TRACKING\n`;
    body += `${"-".repeat(20)}\n`;
    body += `Timestamp: ${payload.timestamp || ""}\n`;
    body += `UTM Source: ${payload.utm_source || ""}\n`;
    body += `UTM Medium: ${payload.utm_medium || ""}\n`;
    body += `UTM Campaign: ${payload.utm_campaign || ""}\n`;
    body += `Referrer: ${payload.referrer || ""}\n`;
  } else {
    // Fallback for other forms
    for (const [key, value] of Object.entries(payload)) {
      body += `${key}: ${formatFieldValue(value)}\n`;
    }
  }
  
  return body;
};

const buildUserConfirmationEmail = (formCode: string, payload: Record<string, any>): { subject: string; html: string } | null => {
  if (formCode === "URGENT_HELP") {
    const firstName = (payload.name || "").split(" ")[0] || "there";
    const helpType = getHelpTypeLabel(payload.help_type || "");
    
    return {
      subject: "We got your message — Nimara",
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1a1a2e; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background-color: #f8f9fc; border-radius: 12px; padding: 32px; margin-bottom: 24px;">
    <h1 style="margin: 0 0 16px 0; font-size: 24px; font-weight: 600; color: #1a1a2e;">
      Hi ${firstName},
    </h1>
    <p style="margin: 0 0 16px 0; font-size: 16px; color: #4a5568;">
      We received your message about: <strong>${helpType}</strong>
    </p>
    <p style="margin: 0; font-size: 16px; color: #4a5568;">
      We'll reply by email as soon as we can.
    </p>
  </div>
  
  <div style="background-color: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
    <h2 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #718096; text-transform: uppercase; letter-spacing: 0.5px;">
      What you told us
    </h2>
    <p style="margin: 0; font-size: 15px; color: #4a5568; white-space: pre-wrap;">${payload.details || ""}</p>
    ${payload.deadline ? `<p style="margin: 16px 0 0 0; font-size: 14px; color: #718096;">Deadline: ${payload.deadline}</p>` : ""}
  </div>
  
  <div style="text-align: center; padding: 16px 0;">
    <p style="margin: 0 0 16px 0; font-size: 15px; color: #4a5568;">
      Need help sooner?
    </p>
    <a href="https://nimara.ca/book-a-call" style="display: inline-block; background-color: #7C3AED; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 500; font-size: 15px;">
      Book a call →
    </a>
  </div>
  
  <div style="border-top: 1px solid #e2e8f0; padding-top: 24px; margin-top: 24px; text-align: center;">
    <p style="margin: 0; font-size: 13px; color: #a0aec0;">
      Nimara · Capacity building for Canadian nonprofits
    </p>
  </div>
</body>
</html>
      `.trim(),
    };
  }
  
  return null;
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { formCode, payload }: FormEmailRequest = await req.json();
    
    console.log(`Processing form email for ${formCode} | Request ID: ${payload.request_id || "N/A"}`);
    
    const subject = buildEmailSubject(formCode, payload);
    const body = buildEmailBody(formCode, payload);
    
    // Determine reply-to from payload
    const replyTo = payload.email || payload.q_email || payload.cb_email || "";
    
    // Send internal notification email
    const emailResponse = await resend.emails.send({
      from: "no-reply@nimara.ca",
      to: ["hello@nimara.ca"],
      replyTo: replyTo || undefined,
      subject: subject,
      text: body,
    });

    console.log("Internal email sent successfully:", emailResponse);

    // Send user confirmation email if applicable
    const userConfirmation = buildUserConfirmationEmail(formCode, payload);
    if (userConfirmation && replyTo) {
      try {
        const confirmationResponse = await resend.emails.send({
          from: "Nimara <no-reply@nimara.ca>",
          to: [replyTo],
          subject: userConfirmation.subject,
          html: userConfirmation.html,
        });
        console.log("User confirmation email sent successfully:", confirmationResponse);
      } catch (confirmError: any) {
        console.error("Error sending user confirmation email:", confirmError);
        // Don't fail the request if confirmation email fails
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending form email:", error);
    
    // Return success to avoid blocking the UI
    return new Response(
      JSON.stringify({ success: true, error: error.message }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
