import React, { useState, useEffect, useId } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PROVINCES = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Northwest Territories",
  "Nova Scotia",
  "Nunavut",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
  "Yukon"
];

// Mock tier data for the instant result
const TIER_DATA = {
  tier: 2,
  name: "Building",
  description: "You have some basics in place, but key systems need strengthening.",
  topFixes: [
    "Create a board governance manual with clear roles and meeting procedures",
    "Set up a monthly financial review process with your treasurer",
    "Document your volunteer onboarding and training process"
  ]
};

const NimaraHeroPremium = () => {
  const [email, setEmail] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  
  // Generate unique IDs for form accessibility
  const formId = useId();
  const emailId = `${formId}-email`;
  const formDescId = `${formId}-desc`;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Show instant results on this page
      setIsSubmitted(true);
      // Also store in localStorage for the /check page if they want to continue
      localStorage.setItem('nimara_check_email', email);
    }
  };

  const handleContinueToFullCheck = () => {
    const params = new URLSearchParams({ email });
    navigate(`/check?${params.toString()}`);
  };

  return (
    <section 
      aria-label="Hero section - Get your nonprofit systems ready"
      className="min-h-screen bg-secondary-background text-white relative overflow-hidden"
    >
      {/* Subtle grid pattern - decorative */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28 flex flex-col">
          
          {/* Two Column Layout */}
          <div className="flex-1 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left - Headlines */}
            <div className={`transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0 translate-y-6"}`}>
              
              {/* Eyebrow - simple uppercase style */}
              <p className="text-white/40 uppercase tracking-[0.25em] text-xs mb-10">
                Capacity Building For Canadian Nonprofits
              </p>
              
              {/* Main Headline */}
              <h1 className="mb-8 text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight font-sans">
                Build systems that make your nonprofit funder-ready.
              </h1>

              {/* Subheadline */}
              <p className="text-base md:text-lg leading-[1.7] text-white/90 max-w-lg mb-6">
                We help Canadian nonprofits set up clear systems for board, money, people, and reporting so funding is easier to win and manage.
              </p>

              {/* Support line */}
              <p className="text-sm md:text-base text-white/70 mb-8 max-w-lg">
                When funders ask for policies, reports, or an audit, you can send them fast.
              </p>

              {/* Mini-proof tags */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <span className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-white/90">
                  Funder-ready
                </span>
                <span className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-white/90">
                  Audit-ready
                </span>
                <span className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-white/90">
                  Report-ready
                </span>
              </div>

              {/* Secondary CTA - text link */}
              <a
                href="/book-a-call"
                className="group inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary-background rounded"
              >
                Need urgent help? Book a call.
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>
            </div>

            {/* Right - Form Card */}
            <div id="hero-form" className={`transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100" : "opacity-0 translate-y-6"}`}>
              <div 
                className="relative bg-[#0d1117] border border-white/10 rounded-lg p-6 lg:p-8"
                role="region"
                aria-labelledby="form-title"
              >
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Form Header */}
                      <h2 id="form-title" className="text-xl font-semibold mb-2 text-white">
                        Start the free 4-minute check
                      </h2>
                      <p id={formDescId} className="text-sm text-white/80 mb-6">
                        Answer a few questions and get your quick Tier and top 3 fixes right away. We will email your full scorecard in <strong className="text-white">2 business days</strong>.
                      </p>

                      {/* Form with proper accessibility */}
                      <form 
                        onSubmit={handleSubmit} 
                        className="space-y-4"
                        aria-describedby={formDescId}
                      >
                        {/* Email */}
                        <div>
                          <label htmlFor={emailId} className="sr-only">
                            Email (required)
                          </label>
                          <input
                            id={emailId}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email (required)"
                            required
                            aria-required="true"
                            aria-describedby={`${emailId}-hint`}
                            className="w-full px-4 py-3.5 bg-white/5 border border-white/20 rounded-md text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                          />
                          <span id={`${emailId}-hint`} className="sr-only">Required. We will send your results to this email address.</span>
                        </div>

                        {/* You'll Get Section */}
                        <div className="bg-white/5 rounded-md p-4 mt-2" role="region" aria-labelledby="benefits-title">
                          <p id="benefits-title" className="text-xs font-semibold text-white uppercase tracking-wide mb-3">
                            You'll Get:
                          </p>
                          <ul className="space-y-2" aria-label="Benefits of the check">
                            <li className="flex items-start gap-2 text-sm text-white/90">
                              <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                              <span>Your Tier and quick score right after you submit</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-white/90">
                              <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                              <span>A score across 7 domains (Board, Money, People, Programs, Fundraising, Volunteers, Records)</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-white/90">
                              <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                              <span>Top 3 fixes for the next 30 days</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-white/90">
                              <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                              <span>A simple roadmap (if you want help)</span>
                            </li>
                          </ul>
                        </div>

                        {/* Submit Button */}
                        <button 
                          type="submit"
                          className="group w-full py-4 bg-accent text-secondary-background text-sm font-semibold rounded-md transition-all duration-300 hover:bg-accent/90 active:scale-[0.99] flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#0d1117]"
                        >
                          Get my score
                          <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                        </button>
                      </form>

                      {/* Footer Text */}
                      <p className="text-xs text-white/60 mt-4 text-center">
                        No spam. We only use your email to send your results.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="results"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-6"
                    >
                      {/* Results Header */}
                      <div className="text-center pb-4 border-b border-white/10">
                        <p className="text-xs uppercase tracking-widest text-accent mb-2">Your Quick Result</p>
                        <h2 className="text-2xl font-semibold text-white mb-1">
                          Your Tier: {TIER_DATA.tier}
                        </h2>
                        <p className="text-lg text-accent font-medium">{TIER_DATA.name}</p>
                        <p className="text-sm text-white/70 mt-2">{TIER_DATA.description}</p>
                      </div>

                      {/* Top 3 Fixes */}
                      <div>
                        <p className="text-xs font-semibold text-white uppercase tracking-wide mb-3">
                          Your top 3 fixes for the next 30 days:
                        </p>
                        <ul className="space-y-3">
                          {TIER_DATA.topFixes.map((fix, index) => (
                            <li key={index} className="flex items-start gap-3 text-sm text-white/90">
                              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 text-accent text-xs font-semibold flex items-center justify-center">
                                {index + 1}
                              </span>
                              <span>{fix}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Email follow-up note */}
                      <p className="text-sm text-white/70 text-center py-3 bg-white/5 rounded-md">
                        We will email your full scorecard in 2 business days.
                      </p>

                      {/* CTA Section */}
                      <div className="space-y-3 pt-2">
                        <p className="text-sm text-white/80 text-center">Want help implementing this?</p>
                        <a
                          href="/book-a-call"
                          className="group w-full py-4 bg-accent text-secondary-background text-sm font-semibold rounded-md transition-all duration-300 hover:bg-accent/90 active:scale-[0.99] flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#0d1117]"
                        >
                          <Calendar className="w-4 h-4" aria-hidden="true" />
                          Schedule a call
                        </a>
                        <button
                          onClick={handleContinueToFullCheck}
                          className="w-full py-3 text-sm text-white/70 hover:text-white transition-colors"
                        >
                          Continue to full check →
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Bottom Stats Section */}
          <div 
            className={`mt-16 pt-12 border-t border-white/10 transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            role="region"
            aria-label="Service timelines"
          >
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <span className="block text-2xl md:text-3xl font-bold text-white mb-1">1–4 weeks</span>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-white/60">Fast Fixes</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-bold text-white mb-1">8–12 weeks</span>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-white/60">Full Setup</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-bold text-white mb-1">Guaranteed</span>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-white/60">If We Can't Help, You Don't Pay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NimaraHeroPremium;