import React, { useState, useEffect } from "react";

const NimaraHero = () => {
  const [email, setEmail] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);

  const rotatingWords = ["Fundable", "Efficient", "Audit-Ready", "Sustainable"];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#2dd4bf]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#2dd4bf]/3 rounded-full blur-[100px]" />
      </div>

      {/* Minimal grid accent - very subtle */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Navigation */}
      <nav
        className={`relative z-10 px-6 lg:px-16 py-6 flex items-center justify-between transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2dd4bf] to-[#14b8a6] flex items-center justify-center">
            <span className="text-[#0a0a0b] font-bold text-sm">N</span>
          </div>
          <span className="text-lg font-medium tracking-tight">Nimara</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <a href="#" className="hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#" className="hover:text-white transition-colors">
            About
          </a>
        </div>

        <a href="#" className="text-sm text-[#2dd4bf] hover:text-[#5eead4] transition-colors">
          Have an urgent problem? →
        </a>
      </nav>

      {/* Main Hero Content */}
      <div className="relative z-10 px-6 lg:px-16 pt-16 lg:pt-24 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr,420px] gap-16 lg:gap-24 items-start">
            {/* Left Content */}
            <div
              className={`transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              {/* Tagline */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] animate-pulse" />
                <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Capacity Building for Canadian Nonprofits
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-8">
                Keep Your
                <br />
                Nonprofit{" "}
                <span className="relative inline-block">
                  <span
                    key={currentWord}
                    className="text-[#2dd4bf] italic font-normal animate-fade-in"
                    style={{
                      animation: "fadeSlide 0.5s ease-out",
                    }}
                  >
                    {rotatingWords[currentWord]}
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-[#2dd4bf] to-transparent" />
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg lg:text-xl text-white/50 font-light leading-relaxed max-w-xl mb-12">
                We help you set up simple systems for your board, finances, staff, and programs—so your team spends less
                time fixing problems and more time doing the work.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-12">
                {["Ready for Grants", "Ready to Scale", "Ready for Audits"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/40">
                    <svg className="w-4 h-4 text-[#2dd4bf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl lg:text-4xl font-light text-white mb-1">1–4</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-white/40">Weeks for Fast Fixes</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-light text-white mb-1">8–12</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-white/40">Weeks Full Setup</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-light text-[#2dd4bf] mb-1">100%</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-white/40">Satisfaction Guaranteed</div>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div
              className={`transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="relative">
                {/* Card glow effect */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/20 to-white/0 opacity-50" />

                {/* Main card */}
                <div className="relative bg-[#111113] rounded-2xl p-8 border border-white/10">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#2dd4bf]/10 mb-6">
                    <span className="text-xs font-medium text-[#2dd4bf]">Free Assessment</span>
                  </div>

                  <h2 className="text-2xl font-light tracking-tight mb-2">Start the 4-Minute Check</h2>
                  <p className="text-sm text-white/40 mb-8">See where your systems stand—no commitment required.</p>

                  {/* Form */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.15em] text-white/40 mb-2">Your Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@yourorg.ca"
                        className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/25 focus:outline-none focus:border-[#2dd4bf]/50 focus:bg-white/[0.07] transition-all"
                      />
                      <p className="text-xs text-white/30 mt-2">No domain email? Use your best contact email.</p>
                    </div>

                    <button className="w-full py-4 bg-[#2dd4bf] hover:bg-[#5eead4] text-[#0a0a0b] font-medium rounded-lg transition-all hover:translate-y-[-1px] hover:shadow-lg hover:shadow-[#2dd4bf]/20 active:translate-y-0">
                      Start the Check
                      <span className="ml-2">→</span>
                    </button>
                  </div>

                  {/* Footer note */}
                  <p className="text-center text-xs text-white/30 mt-6">We'll reach out within 2 business days</p>

                  {/* Decorative element */}
                  <div className="absolute -bottom-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#2dd4bf]/30 to-transparent" />
                </div>
              </div>

              {/* Social proof hint */}
              <div className="mt-6 flex items-center justify-center gap-3 text-xs text-white/30">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/10"
                    />
                  ))}
                </div>
                <span>Join 50+ nonprofits we've helped</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes fadeSlide {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeSlide 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default NimaraHero;
