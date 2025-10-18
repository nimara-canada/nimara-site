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
  } else {
    // Fallback for other forms
    for (const [key, value] of Object.entries(payload)) {
      body += `${key}: ${formatFieldValue(value)}\n`;
    }
  }
  
  return body;
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
    
    const emailResponse = await resend.emails.send({
      from: "no-reply@nimara.ca",
      to: ["hello@nimara.ca"],
      replyTo: replyTo || undefined,
      subject: subject,
      text: body,
    });

    console.log("Email sent successfully:", emailResponse);

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
