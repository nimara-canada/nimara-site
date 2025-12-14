import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowRight, Clock, MousePointerClick, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Check = () => {
  const [searchParams] = useSearchParams();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const email = searchParams.get("email") || "";

  // Build Typeform URL with email and source
  const buildTypeformUrl = () => {
    const baseUrl = "https://form.typeform.com/to/u6fstodH";
    const params = [];
    
    if (email) {
      params.push(`email=${encodeURIComponent(email)}`);
    }
    params.push("source=hero");
    
    return `${baseUrl}#${params.join("&")}`;
  };

  const typeformUrl = buildTypeformUrl();

  // Auto-redirect after 1 second
  useEffect(() => {
    setIsRedirecting(true);
    const timer = setTimeout(() => {
      window.location.href = typeformUrl;
    }, 1000);

    return () => clearTimeout(timer);
  }, [typeformUrl]);

  const handleContinue = () => {
    window.location.href = typeformUrl;
  };

  return (
    <main className="min-h-screen bg-secondary-background flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Card container */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 shadow-xl">
          {/* Step indicator */}
          <p className="text-sm text-white/50 uppercase tracking-wider mb-4">
            Step 1 of 2
          </p>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            You're almost there.
          </h1>

          {/* Body text */}
          <p className="text-lg text-white/70 mb-8 leading-relaxed">
            We'll ask a few quick questions so we can point you to the right next step.
          </p>

          {/* Bullets */}
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3 text-white/80">
              <Clock className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
              <span>Takes about 4 minutes</span>
            </li>
            <li className="flex items-center gap-3 text-white/80">
              <MousePointerClick className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
              <span>Mostly taps (no long typing)</span>
            </li>
            <li className="flex items-center gap-3 text-white/80">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
              <span>You'll get a clear next step at the end</span>
            </li>
          </ul>

          {/* Redirect status */}
          {isRedirecting && (
            <div className="flex items-center gap-2 text-accent mb-6">
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              <span className="text-sm">Sending you there now…</span>
            </div>
          )}

          {/* Primary button */}
          <Button
            onClick={handleContinue}
            size="lg"
            className="w-full h-14 bg-accent text-secondary-background hover:bg-accent/90 font-semibold text-base mb-4"
          >
            Continue to the check
            <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
          </Button>

          {/* Secondary link */}
          {email && (
            <div className="text-center mb-6">
              <Link 
                to="/" 
                className="text-sm text-white/50 hover:text-white/70 underline underline-offset-2 transition-colors"
              >
                Change email
              </Link>
            </div>
          )}

          {/* Trust line */}
          <p className="text-xs text-white/40 text-center leading-relaxed">
            We only use your email to send your results. No spam.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Check;
