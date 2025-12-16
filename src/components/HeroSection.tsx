import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NimaraHeroPremium = () => {
  const [email, setEmail] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const navigate = useNavigate();

  const rotatingWords = ["Fundable", "Efficient", "Scalable", "Compliant"];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      navigate(`/check?email=${encodeURIComponent(email)}`);
    }
  };

  return (
    <div className="min-h-screen bg-secondary-background text-white relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28 flex flex-col">
          
          {/* Two Column Layout */}
          <div className="flex-1 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left - Headlines */}
            <div className={`transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0 translate-y-6"}`}>
              
              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-10">
                <span className="text-[11px] uppercase tracking-[0.25em] text-white/50 font-medium">
                  Capacity Building For Canadian Nonprofits
                </span>
                <div className="flex-1 h-px bg-white/20 max-w-[80px]" />
              </div>

              {/* Main Headline */}
              <h1 className="mb-8">
                <span className="block text-[clamp(2.25rem,5vw,3.75rem)] font-normal leading-[1.1] tracking-[-0.02em]">
                  Keep Your Nonprofit
                </span>
                <span className="relative block mt-1">
                  <span
                    key={currentWord}
                    className="text-[clamp(2.25rem,5vw,3.75rem)] font-normal leading-[1.1] tracking-[-0.02em] text-accent italic"
                    style={{
                      animation: "wordReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    {rotatingWords[currentWord]}
                  </span>
                  <span className="inline-block w-[3px] h-[0.9em] bg-accent ml-1 animate-pulse align-middle" />
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base md:text-lg leading-[1.7] text-white/60 max-w-lg mb-8">
                Nimara Helps You Set Up Simple Systems For Your Board, Money, Staff, And Programs—So Your Team Spends Less Time Fixing Problems And More Time Doing The Work.
              </p>

              {/* Bullet Points */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-10 text-sm text-white/50">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  Ready For Grants
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  Ready To Grow
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  Ready For Audits
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="/check"
                  className="group inline-flex items-center gap-3 text-sm font-medium text-white hover:text-accent transition-colors"
                >
                  Start The Free Check
                  <span className="w-12 h-px bg-current transition-all group-hover:w-16" />
                </a>
                <a
                  href="/book-a-call"
                  className="group inline-flex items-center gap-3 text-sm font-medium text-white/60 hover:text-accent transition-colors"
                >
                  Have An Urgent Problem?
                  <span className="w-12 h-px bg-current transition-all group-hover:w-16" />
                </a>
              </div>
            </div>

            {/* Right - Form Card */}
            <div className={`transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100" : "opacity-0 translate-y-6"}`}>
              <div className="relative bg-[#0d1117] border border-white/10 rounded-lg p-8 lg:p-10">
                
                {/* Form Header */}
                <h2 className="text-xl font-semibold mb-2">Start The Free 4-Minute Check</h2>
                <p className="text-sm text-white/50 mb-8">
                  See Where Your Systems Stand—No Commitment Required.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                  {/* Email Label */}
                  <label className="block text-sm text-white/70 mb-3">
                    Email (where we can reach you)
                  </label>
                  
                  {/* Email Input */}
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@gmail.com or name@yourorg.ca"
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-md text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 transition-colors mb-3"
                    required
                  />

                  {/* Helper Text */}
                  <p className="text-xs text-white/40 mb-6">
                    No domain email yet? That's okay — use your best contact email.
                  </p>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="group w-full py-4 bg-accent text-secondary-background text-sm font-semibold rounded-md transition-all duration-300 hover:bg-accent/90 active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    Start The Check
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </form>

                {/* Footer Text */}
                <p className="text-xs text-white/40 mt-6 text-center">
                  We'll Reach Out By Email Within 2 Business Days.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Stats Section */}
          <div className={`mt-16 pt-12 border-t border-white/10 transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <span className="block text-2xl md:text-3xl font-light text-white/90 mb-1">1–4 weeks</span>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-white/40">Fast Fixes</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-light text-white/90 mb-1">8–12 weeks</span>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-white/40">Full Setup</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-light text-white/90 mb-1">Guaranteed</span>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-white/40">If We Can't Help, You Don't Pay</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes wordReveal {
          0% {
            opacity: 0;
            transform: translateY(20px) rotateX(-20deg);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0);
            filter: blur(0);
          }
        }
      `}</style>
    </div>
  );
};

export default NimaraHeroPremium;
