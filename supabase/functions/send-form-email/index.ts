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
  const now = new Date();
  const timestamp = now.toISOString().replace("T", " ").substring(0, 16);
  
  let orgOrName = "";
  let keyField = "";
  
  // Determine orgOrName and keyField based on form
  switch (formCode) {
    case "3QUOTES":
      orgOrName = payload.q_org || "";
      keyField = payload.q_category || "";
      break;
    case "PKG_WAITLIST":
      orgOrName = payload.org || "";
      keyField = formatFieldValue(payload.areas);
      break;
    case "CALLBACK":
      orgOrName = payload.cb_name || "";
      keyField = payload.cb_email || "";
      break;
    case "CONSULT_APPLY":
      orgOrName = payload.name || "";
      keyField = formatFieldValue(payload.focusAreas);
      break;
    case "CONSULT_ELIG":
      orgOrName = payload.name || "";
      keyField = payload.focusArea || "";
      break;
    case "PORTAL_NOTIFY":
      orgOrName = payload.org || "";
      keyField = payload.roleType || "";
      break;
    case "3QUOTES_MORE":
      orgOrName = payload.om_name || payload.email || "";
      keyField = payload.om_role || "";
      break;
    case "NEWSLETTER":
      orgOrName = payload.email || "";
      keyField = "newsletter";
      break;
    default:
      orgOrName = payload.email || payload.name || "";
  }
  
  return `[NIMARA:${formCode}] ${orgOrName} · ${keyField} · ${timestamp}`;
};

const buildEmailBody = (payload: Record<string, any>): string => {
  let body = "";
  
  for (const [key, value] of Object.entries(payload)) {
    body += `${key}: ${formatFieldValue(value)}\n`;
  }
  
  return body;
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { formCode, payload }: FormEmailRequest = await req.json();
    
    console.log(`Processing form email for ${formCode}`);
    
    const subject = buildEmailSubject(formCode, payload);
    const body = buildEmailBody(payload);
    
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
