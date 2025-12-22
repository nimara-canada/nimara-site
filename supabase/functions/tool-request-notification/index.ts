import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ToolRequestNotification {
  name: string;
  email: string;
  tool_name: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, tool_name, message }: ToolRequestNotification = await req.json();

    console.log("Sending tool request notification for:", { name, email, tool_name });

    // Email to Nimara team
    const adminEmailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #202654; margin-bottom: 24px;">New Integration Request</h2>
        
        <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
          <p style="margin: 0 0 12px 0;"><strong>Tool Requested:</strong> ${tool_name}</p>
          <p style="margin: 0 0 12px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #7C3AED;">${email}</a></p>
        </div>
        
        ${message ? `
          <div style="margin-bottom: 20px;">
            <p style="margin: 0 0 8px 0;"><strong>Additional Details:</strong></p>
            <p style="margin: 0; color: #666; white-space: pre-wrap;">${message}</p>
          </div>
        ` : ''}
        
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
        
        <p style="color: #888; font-size: 12px; margin: 0;">
          This notification was sent from the Nimara integrations page.
        </p>
      </div>
    `;

    // Confirmation email to requester
    const confirmationEmailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #202654; margin-bottom: 24px;">We received your request!</h2>
        
        <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          Hi ${name},
        </p>
        
        <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          Thank you for requesting support for <strong>${tool_name}</strong>. We've added your request to our integration roadmap and will prioritize based on demand.
        </p>
        
        <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
          <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;"><strong>Your request:</strong></p>
          <p style="margin: 0; color: #333;">${tool_name}</p>
          ${message ? `<p style="margin: 12px 0 0 0; color: #666; font-size: 14px;">${message}</p>` : ''}
        </div>
        
        <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
          If this integration moves forward, we'll reach out to let you know. In the meantime, feel free to <a href="https://calendly.com/hello-nimara/30min" style="color: #7C3AED;">schedule a call</a> if you'd like to discuss your needs further.
        </p>
        
        <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 8px;">
          Best,
        </p>
        <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0;">
          The Nimara Team
        </p>
        
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
        
        <p style="color: #888; font-size: 12px; margin: 0;">
          You're receiving this email because you submitted an integration request on nimara.ca
        </p>
      </div>
    `;

    // Send both emails in parallel
    const [adminRes, userRes] = await Promise.all([
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Nimara <onboarding@resend.dev>",
          to: ["hello@nimara.ca"],
          subject: `New Tool Request: ${tool_name}`,
          html: adminEmailHtml,
        }),
      }),
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Nimara <onboarding@resend.dev>",
          to: [email],
          subject: "We received your integration request",
          html: confirmationEmailHtml,
        }),
      }),
    ]);

    const adminData = await adminRes.json();
    const userData = await userRes.json();

    if (!adminRes.ok) {
      console.error("Resend API error (admin):", adminData);
    }
    if (!userRes.ok) {
      console.error("Resend API error (user):", userData);
    }

    console.log("Emails sent successfully:", { admin: adminData, user: userData });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending tool request notification:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
