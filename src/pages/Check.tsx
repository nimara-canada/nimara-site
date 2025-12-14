import React, { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowRight, Clock, MousePointerClick, CheckCircle, Loader2, Users, DollarSign, UserCheck, FolderOpen } from "lucide-react";
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

  const handleContinue = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      window.location.href = typeformUrl;
    }, 800);
  };

  const checkItems = [
    { icon: Users, label: "Board & policies", desc: "(who decides what)" },
    { icon: DollarSign, label: "Money & tracking", desc: "(budgets, reports, receipts)" },
    { icon: UserCheck, label: "People & roles", desc: "(staff, contractors, HR basics)" },
    { icon: FolderOpen, label: "Programs & files", desc: "(proof of work, tidy records)" },
  ];

  return (
    <main className="min-h-screen bg-secondary-background flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-lg">
        {/* Card container */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
          {/* Step indicator */}
          <p className="text-sm text-white/50 uppercase tracking-wider mb-3">
            Step 1 of 2
          </p>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
            You're almost there.
          </h1>

          {/* Intro paragraph */}
          <p className="text-base text-white/70 mb-6 leading-relaxed">
            This check is a quick way to see if your nonprofit's behind-the-scenes systems are strong enough for grants, growth, and audits.
          </p>

          {/* We'll check section */}
          <div className="mb-5">
            <h2 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-3">
              We'll check:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {checkItems.map((item, index) => (
                <div key={index} className="flex items-start gap-2 text-white/80">
                  <item.icon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm">
                    <span className="font-medium">{item.label}</span>{" "}
                    <span className="text-white/60">{item.desc}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Why this matters */}
          <p className="text-sm text-white/60 mb-5 italic">
            Why this matters: At the end, you'll get a clear next step—a fast fix or a full setup plan.
          </p>

          {/* Quick info bullets */}
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2 text-white/80 text-sm">
              <Clock className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true" />
              <span>Takes about 4 minutes</span>
            </li>
            <li className="flex items-center gap-2 text-white/80 text-sm">
              <MousePointerClick className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true" />
              <span>Mostly taps (no long typing)</span>
            </li>
            <li className="flex items-center gap-2 text-white/80 text-sm">
              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true" />
              <span>You'll get a clear next step at the end</span>
            </li>
          </ul>

          {/* Redirect status */}
          {isRedirecting && (
            <div className="flex items-center gap-2 text-accent mb-4">
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              <span className="text-sm">Sending you there now…</span>
            </div>
          )}

          {/* Primary button */}
          <Button
            onClick={handleContinue}
            disabled={isRedirecting}
            size="lg"
            className="w-full h-12 bg-accent text-secondary-background hover:bg-accent/90 font-semibold text-base mb-3"
          >
            Continue to the check
            <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
          </Button>

          {/* Secondary link */}
          {email && (
            <div className="text-center mb-4">
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
