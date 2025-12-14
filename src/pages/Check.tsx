import React, { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowRight, Clock, Sparkles, CheckCircle, Loader2, Shield, Wallet, Users, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Check = () => {
  const [searchParams] = useSearchParams();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const email = searchParams.get("email") || "";

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
    { icon: Shield, label: "Board & policies", desc: "who decides what", color: "bg-primary/20 text-primary" },
    { icon: Wallet, label: "Money & tracking", desc: "budgets, reports, receipts", color: "bg-accent/20 text-accent" },
    { icon: Users, label: "People & roles", desc: "staff, contractors, HR basics", color: "bg-primary/20 text-primary" },
    { icon: FolderOpen, label: "Programs & files", desc: "proof of work, tidy records", color: "bg-amber-500/20 text-amber-400" },
  ];

  return (
    <main className="min-h-screen bg-secondary-background flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="w-full max-w-xl">
        {/* Step indicator badge */}
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
          <span className="text-xs font-medium text-accent uppercase tracking-wider">Step 1 of 2</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
          You're almost there.
        </h1>

        {/* Intro paragraph */}
        <p className="text-base sm:text-lg text-white/70 mb-8 leading-relaxed">
          This check is a quick way to see if your nonprofit's behind-the-scenes systems are strong enough for grants, growth, and audits.
        </p>

        {/* We'll check section */}
        <div className="mb-6">
          <h2 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
            We'll check:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {checkItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center flex-shrink-0`}>
                  <item.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{item.label}</p>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why this matters - blockquote style */}
        <div className="bg-white/5 rounded-xl p-4 mb-6 border-l-4 border-accent/50">
          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            <span className="font-semibold text-white">Why this matters:</span>{" "}
            <span className="italic">At the end, you'll get a clear next step—a fast fix or a full setup plan.</span>
          </p>
        </div>

        {/* Quick info bullets */}
        <ul className="space-y-3 mb-8">
          <li className="flex items-center gap-3 text-white">
            <Clock className="w-5 h-5 text-white/50 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm sm:text-base">Takes about 4 minutes</span>
          </li>
          <li className="flex items-center gap-3 text-white">
            <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm sm:text-base">Mostly taps (no long typing)</span>
          </li>
          <li className="flex items-center gap-3 text-white">
            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
            <span className="text-sm sm:text-base">You'll get a clear next step at the end</span>
          </li>
        </ul>

        {/* Redirect status */}
        {isRedirecting && (
          <div className="flex items-center justify-center gap-2 text-accent mb-4">
            <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
            <span className="text-sm">Sending you there now…</span>
          </div>
        )}

        {/* Primary button */}
        <Button
          onClick={handleContinue}
          disabled={isRedirecting}
          size="lg"
          className="w-full h-14 bg-accent text-secondary-background hover:bg-accent/90 font-semibold text-base rounded-xl mb-4"
        >
          Continue to the check
          <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
        </Button>

        {/* Secondary link */}
        {email && (
          <div className="text-center mb-6">
            <Link 
              to="/" 
              className="text-sm text-white/40 hover:text-white/60 underline underline-offset-4 transition-colors"
            >
              Change email
            </Link>
          </div>
        )}

        {/* Trust line */}
        <p className="text-xs text-white/30 text-center leading-relaxed">
          We only use your email to send your results. No spam.
        </p>
      </div>
    </main>
  );
};

export default Check;
