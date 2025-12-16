import React, { useState, useEffect } from "react";

const NimaraHeroPremium = () => {
  const [email, setEmail] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const rotatingWords = ["Fundable", "Efficient", "Scalable"];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] relative overflow-hidden font-['Instrument_Sans',system-ui,sans-serif]">
      {/* Abstract geometric accent - top right */}
      <div className="absolute top-0 right-0 w-[45%] h-full overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] opacity-[0.03]"
          style={{
            background: `conic-gradient(from 180deg at 50% 50%, #2dd4bf 0deg, transparent 60deg, transparent 180deg, #2dd4bf 240deg, transparent 300deg)`,
          }}
        />
      </div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Accent line */}
      <div className="absolute left-[8%] top-0 w-px h-full bg-gradient-to-b from-transparent via-[#2dd4bf]/20 to-transparent" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full px-[8%] py-20">
          {/* Top Label */}
          <div className={`mb-16 transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0 -translate-y-4"}`}>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#2dd4bf]/70 font-medium">
              Capacity Building / Canadian Nonprofits
            </span>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-[1.1fr,1fr] gap-20 xl:gap-32 items-start">
            {/* Left - Headlines */}
            <div
              className={`transition-all duration-1000 delay-100 ${isLoaded ? "opacity-100" : "opacity-0 translate-y-6"}`}
            >
              {/* Main Headline - Editorial Style */}
              <h1 className="mb-10">
                <span className="block text-[clamp(2.5rem,5.5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.03em]">
                  Keep Your
                </span>
                <span className="block text-[clamp(2.5rem,5.5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.03em]">
                  Nonprofit
                </span>
                <span className="relative block mt-2">
                  <span
                    key={currentWord}
                    className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-[#2dd4bf]"
                    style={{
                      fontStyle: "italic",
                      animation: "wordReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    {rotatingWords[currentWord]}
                  </span>
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-[17px] leading-[1.7] text-white/40 max-w-md font-light mb-14">
                Simple systems for your board, finances, staff, and programs. Less time fixing. More time doing.
              </p>

              {/* Inline Stats - Horizontal */}
              <div className="flex items-baseline gap-12 flex-wrap">
                <div className="group">
                  <span className="text-[2.75rem] font-extralight tracking-tight text-white/90 group-hover:text-[#2dd4bf] transition-colors duration-300">
                    1–4
                  </span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-white/30 mt-1">
                    weeks / fast fixes
                  </span>
                </div>
                <div className="group">
                  <span className="text-[2.75rem] font-extralight tracking-tight text-white/90 group-hover:text-[#2dd4bf] transition-colors duration-300">
                    8–12
                  </span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-white/30 mt-1">
                    weeks / full setup
                  </span>
                </div>
                <div className="group">
                  <span className="text-[2.75rem] font-extralight tracking-tight text-[#2dd4bf]">✓</span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-white/30 mt-1">guaranteed</span>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div
              className={`transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100" : "opacity-0 translate-y-6"}`}
            >
              <div
                className="relative"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* Form container */}
                <div
                  className="relative bg-[#0f0f11] border border-white/[0.06] p-10 transition-all duration-500"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)",
                  }}
                >
                  {/* Corner accent */}
                  <div
                    className="absolute bottom-0 right-0 w-6 h-6 border-t border-l border-white/[0.06]"
                    style={{ transform: "translate(0, 0) rotate(45deg)", transformOrigin: "top left" }}
                  />

                  {/* Form header */}
                  <div className="flex items-start justify-between mb-10">
                    <div>
                      <h2 className="text-[22px] font-light tracking-tight mb-2">Free 4-Minute Check</h2>
                      <p className="text-[13px] text-white/35 font-light">See where your systems stand</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-[#2dd4bf]/30 flex items-center justify-center">
                      <div
                        className={`w-2 h-2 rounded-full bg-[#2dd4bf] transition-transform duration-300 ${isHovering ? "scale-150" : "scale-100"}`}
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="mb-6">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@organization.ca"
                      className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/10 text-[15px] text-white placeholder:text-white/20 focus:outline-none focus:border-[#2dd4bf]/50 transition-colors font-light"
                    />
                  </div>

                  {/* Submit Button */}
                  <button className="group w-full py-5 bg-[#2dd4bf] text-[#09090b] text-[13px] font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:bg-[#5eead4] hover:tracking-[0.2em] active:scale-[0.99] mt-8 relative overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Start the Check
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
                    </span>
                  </button>

                  {/* Footer */}
                  <p className="text-[11px] text-white/25 mt-6 text-center font-light">
                    Response within 2 business days · No commitment required
                  </p>
                </div>

                {/* Side accent */}
                <div className="absolute -left-4 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-[#2dd4bf]/40 to-transparent" />
              </div>

              {/* Below card - trust signals */}
              <div className="mt-10 flex items-center gap-6 text-[11px] text-white/25">
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#2dd4bf]/50" />
                  Ready for grants
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#2dd4bf]/50" />
                  Ready for audits
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#2dd4bf]/50" />
                  Ready to scale
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Accent - Urgent CTA */}
          <div
            className={`mt-24 pt-10 border-t border-white/[0.04] transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          >
            <a
              href="#"
              className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] text-white/30 hover:text-[#2dd4bf] transition-colors group"
            >
              <span className="w-8 h-px bg-current transition-all group-hover:w-12" />
              Have an urgent problem?
              <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&display=swap');
        
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
