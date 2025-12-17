import React, { useState, useEffect, useId } from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

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

const NimaraHeroPremium = () => {
  const [email, setEmail] = useState("");
  const [orgName, setOrgName] = useState("");
  const [province, setProvince] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const navigate = useNavigate();
  
  // Generate unique IDs for form accessibility
  const formId = useId();
  const orgNameId = `${formId}-org-name`;
  const provinceId = `${formId}-province`;
  const emailId = `${formId}-email`;
  const formDescId = `${formId}-desc`;

  const rotatingWords = ["grant-ready", "audit-ready", "board-ready", "compliant", "organized", "fundable"];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const word = rotatingWords[currentWord];
    let charIndex = 0;
    setDisplayedText("");
    setIsTyping(true);
    setIsFadingOut(false);

    const typingInterval = setInterval(() => {
      if (charIndex < word.length) {
        setDisplayedText(word.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
          }, 400);
        }, 1800);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [currentWord]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      const params = new URLSearchParams({ email });
      if (orgName) params.append("org", orgName);
      if (province) params.append("province", province);
      navigate(`/check?${params.toString()}`);
    }
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
                For Canadian Nonprofits
              </p>
              
              {/* Main Headline - First line (static) */}
              <h1 className="mb-0 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.05] tracking-tight font-sans">
                We Set Up Your Nonprofit To Be
              </h1>
              
              {/* Second line - Typing animation */}
              <div 
                className="mb-10 text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight font-sans"
                style={{ height: '1.4em' }}
              >
                <motion.span 
                  className="flex items-center whitespace-nowrap"
                  style={{ width: '14ch', height: '100%' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isFadingOut ? 0 : 1 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <span
                    aria-live="polite"
                    aria-atomic="true"
                    className="text-accent italic font-light"
                  >
                    {displayedText}
                  </span>
                  <span 
                    className={`inline-block w-[3px] h-[0.7em] bg-accent ml-1 ${isTyping ? 'animate-pulse' : 'animate-blink'}`}
                    aria-hidden="true"
                  />
                  <span className="text-white font-semibold">.</span>
                </motion.span>
              </div>

              {/* Subheadline - improved contrast */}
              <p className="text-base md:text-lg leading-[1.7] text-white/90 max-w-lg mb-6">
                Board, money, staff, and reporting systems—so you can manage grants and audits without the scramble.
              </p>

              {/* Quote - improved contrast */}
              <blockquote className="border-l-2 border-white/30 pl-4 mb-8">
                <p className="text-sm md:text-base text-white/80 italic">
                  We don't run your payroll or replace your team—we set up the system your team can run.
                </p>
              </blockquote>

              {/* Checkmark Items - as a list for screen readers */}
              <ul 
                className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8 list-none"
                aria-label="What we help you become"
              >
                <li className="flex items-center gap-2 text-sm text-white">
                  <Check className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span>GRANT-READY</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-white">
                  <Check className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span>AUDIT-READY</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-white">
                  <Check className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span>BOARD-READY</span>
                </li>
              </ul>

              {/* CTA Link - improved contrast and focus */}
              <a
                href="/book-a-call"
                className="group inline-flex items-center gap-2 text-sm text-white hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary-background rounded-sm"
              >
                Have an urgent problem? Book a call.
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>
            </div>

            {/* Right - Form Card */}
            <div className={`transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100" : "opacity-0 translate-y-6"}`}>
              <div 
                className="relative bg-[#0d1117] border border-white/10 rounded-lg p-6 lg:p-8"
                role="region"
                aria-labelledby="form-title"
              >
                
                {/* Form Header */}
                <h2 id="form-title" className="text-xl font-semibold mb-2 text-white">
                  Start the free 4-minute check
                </h2>
                <p id={formDescId} className="text-sm text-white/80 mb-6">
                  Answer a few questions. We email your systems score in <strong className="text-white">2 business days</strong>.
                </p>

                {/* Form with proper accessibility */}
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-4"
                  aria-describedby={formDescId}
                >
                  {/* Organization Name */}
                  <div>
                    <label htmlFor={orgNameId} className="sr-only">
                      Organization name (optional)
                    </label>
                    <input
                      id={orgNameId}
                      type="text"
                      value={orgName}
                      onChange={(e) => setOrgName(e.target.value)}
                      placeholder="Organization name (optional)"
                      aria-describedby={`${orgNameId}-hint`}
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/20 rounded-md text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    />
                    <span id={`${orgNameId}-hint`} className="sr-only">Optional field for your organization name</span>
                  </div>

                  {/* Province Dropdown */}
                  <div className="relative">
                    <label htmlFor={provinceId} className="sr-only">
                      Province (optional)
                    </label>
                    <select
                      id={provinceId}
                      value={province}
                      onChange={(e) => setProvince(e.target.value)}
                      aria-describedby={`${provinceId}-hint`}
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/20 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors appearance-none cursor-pointer"
                      style={{ color: province ? 'white' : 'rgba(255,255,255,0.6)' }}
                    >
                      <option value="" className="bg-secondary-background">Province (optional)</option>
                      {PROVINCES.map((p) => (
                        <option key={p} value={p} className="bg-secondary-background text-white">{p}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true">
                      <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <span id={`${provinceId}-hint`} className="sr-only">Optional field for your Canadian province or territory</span>
                  </div>

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
                        <span>A score across: Board • Money • Staff • Reporting</span>
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

                  {/* Submit Button - improved focus state */}
                  <button 
                    type="submit"
                    className="group w-full py-4 bg-accent text-secondary-background text-sm font-semibold rounded-md transition-all duration-300 hover:bg-accent/90 active:scale-[0.99] flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#0d1117]"
                  >
                    Start the check
                    <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </button>
                </form>

                {/* Footer Text */}
                <p className="text-xs text-white/60 mt-4 text-center">
                  No spam. We only use your email to send your results.
                </p>
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

      {/* Keyframes for blink animation */}
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 0.8s infinite;
        }
      `}</style>
    </section>
  );
};

export default NimaraHeroPremium;
