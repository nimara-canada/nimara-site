import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = {
        flow: "newsletter",
        email: email,
        referrer: document.referrer,
        utm_source: new URLSearchParams(window.location.search).get("utm_source"),
        utm_medium: new URLSearchParams(window.location.search).get("utm_medium"),
        utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign"),
        timestamp: new Date().toISOString(),
      };

      // Send email (non-blocking)
      supabase.functions.invoke("send-form-email", {
        body: { formCode: "NEWSLETTER", payload }
      }).catch(err => console.error("Email error:", err));

      toast.success("Thanks — you're on the list.");
      setEmail("");
    } catch (error) {
      setError("Please enter a valid email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#202654] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px] py-12 sm:py-16 lg:py-20">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Column 1 - Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Nimara</h3>
            <p className="text-[#96A0B5] text-sm leading-relaxed">
              Audit-ready by design. Vetted Canadian nonprofit experts.
            </p>
          </div>

          {/* Column 2 - Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Contact</h4>
            <div className="space-y-2 text-sm text-[#96A0B5]">
              <a
                href="mailto:hello@nimara.ca"
                className="block hover:text-[#6945D8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6945D8] rounded"
              >
                hello@nimara.ca
              </a>
              <address className="not-italic leading-relaxed">
                #1017 - 9580 170th St NW<br />
                Edmonton, AB T5T 5R5<br />
                Canada
              </address>
            </div>
          </div>

          {/* Column 3 - Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Legal</h4>
            <div className="flex flex-wrap gap-2 text-sm text-[#96A0B5]">
              <a
                href="/privacy"
                className="hover:text-[#6945D8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6945D8] rounded"
              >
                Privacy
              </a>
              <span>·</span>
              <a
                href="/terms"
                className="hover:text-[#6945D8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6945D8] rounded"
              >
                Terms
              </a>
              <span>·</span>
              <a
                href="/accessibility"
                className="hover:text-[#6945D8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6945D8] rounded"
              >
                Accessibility
              </a>
            </div>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Newsletter</h4>
            <form onSubmit={handleSubmit} id="newsletter_form" className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="nl_email" className="sr-only">
                  Your email
                </Label>
                <Input
                  type="email"
                  id="nl_email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  aria-invalid={!!error}
                  className="bg-white/10 border-white/20 text-white placeholder:text-[#96A0B5] rounded-xl focus:ring-2 focus:ring-[#6945D8] focus:border-[#6945D8]"
                />
                {error && (
                  <p className="text-xs text-red-400 mt-1">{error}</p>
                )}
              </div>
              <Button
                type="submit"
                variant="outline"
                disabled={isSubmitting}
                className="w-full border-white text-white hover:bg-white hover:text-[#202654] rounded-xl focus:ring-2 focus:ring-[#6945D8]"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E9ECF4]/20 mb-8"></div>

        {/* Trust Pill */}
        <div className="mb-8">
          <div className="inline-block bg-[#ACFCE3] text-[#202654] px-6 py-3 rounded-full text-sm font-medium shadow-[0_8px_24px_rgba(32,38,84,0.08)]">
            Data stored in Canada • Records kept 7 years
          </div>
        </div>

        {/* Footer Bar */}
        <div className="flex justify-end">
          <p className="text-sm text-[#96A0B5]">© Nimara Technology</p>
        </div>
      </div>
    </footer>
  );
};
