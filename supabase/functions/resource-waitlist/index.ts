import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.2";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const allowedOrigins = ['https://nimara.ca', 'https://www.nimara.ca'];

const getCorsHeaders = (req: Request) => {
  const origin = req.headers.get('origin') || '';
  return {
    'Access-Control-Allow-Origin': allowedOrigins.includes(origin) ? origin : allowedOrigins[0],
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  };
};

interface WaitlistRequest {
  email: string;
  source?: string;
}

const handler = async (req: Request): Promise<Response> => {
  const corsHeaders = getCorsHeaders(req);
  
  console.log("Resource waitlist function called");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, source = "resources_page" }: WaitlistRequest = await req.json();
    console.log("Processing waitlist signup for:", email);

    if (!email || !email.includes("@")) {
      console.error("Invalid email provided");
      return new Response(
        JSON.stringify({ error: "Please provide a valid email address" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Create Supabase client with service role for insert
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Check if email already exists
    const { data: existing } = await supabase
      .from("resource_waitlist")
      .select("id")
      .eq("email", email.toLowerCase().trim())
      .maybeSingle();

    if (existing) {
      console.log("Email already on waitlist:", email);
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "You're already on the list!" 
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Insert new signup
    const { error: insertError } = await supabase
      .from("resource_waitlist")
      .insert({
        email: email.toLowerCase().trim(),
        source,
      });

    if (insertError) {
      console.error("Error inserting to waitlist:", insertError);
      throw new Error("Failed to add to waitlist");
    }

    console.log("Successfully added to waitlist:", email);

    // Send confirmation email
    try {
      const emailResponse = await resend.emails.send({
        from: "Nimara <hello@nimara.ca>",
        to: [email],
        subject: "You're on the Nimara resources waitlist!",
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1a1a2e; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <div style="text-align: center; margin-bottom: 32px;">
              <h1 style="font-size: 28px; font-weight: 600; margin: 0; color: #0B1120;">Nimara</h1>
            </div>
            
            <h2 style="font-size: 24px; font-weight: 600; margin-bottom: 16px;">You're on the list!</h2>
            
            <p style="margin-bottom: 16px;">
              Thanks for signing up for Nimara resources. We're working on webinars, toolkits, templates, and guides to help Canadian nonprofits stay fundable, sustainable, and audit-ready.
            </p>
            
            <p style="margin-bottom: 24px;">
              We'll email you when new resources are ready—no spam, just helpful stuff.
            </p>
            
            <div style="background: #f8f9fa; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
              <p style="margin: 0; font-size: 14px; color: #64748b;">
                <strong>What's coming:</strong><br>
                • Free webinars<br>
                • Toolkits & templates<br>
                • Short guides<br>
                • Blog posts
              </p>
            </div>
            
            <p style="color: #64748b; font-size: 14px;">
              Need help now? <a href="https://nimara.ca/book-a-call" style="color: #7C3AED;">Get urgent help →</a>
            </p>
            
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 32px 0;">
            
            <p style="font-size: 12px; color: #94a3b8; text-align: center;">
              Nimara · Capacity building for Canadian nonprofits<br>
              <a href="https://nimara.ca" style="color: #94a3b8;">nimara.ca</a>
            </p>
          </body>
          </html>
        `,
      });

      console.log("Confirmation email sent:", emailResponse);
    } catch (emailError) {
      // Log email error but don't fail the request - signup was successful
      console.error("Error sending confirmation email:", emailError);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Successfully added to waitlist" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in resource-waitlist function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Something went wrong" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);