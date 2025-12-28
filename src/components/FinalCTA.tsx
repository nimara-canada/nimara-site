import { useRef } from "react";
import { useScrollReveal, useMotionPreferences, TIMING, DROPBOX_EASING_CSS } from "@/hooks/use-scroll-reveal";

export const FinalCTA = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const { reducedMotion } = useMotionPreferences();

  const getStyle = (delay: number = 0): React.CSSProperties => 
    reducedMotion ? {} : {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
      transition: `opacity ${TIMING.reveal}ms ${DROPBOX_EASING_CSS} ${delay}ms, transform ${TIMING.reveal}ms ${DROPBOX_EASING_CSS} ${delay}ms`,
    };

  return (
    <section 
      ref={ref}
      className="relative py-20 md:py-28 lg:py-36 bg-secondary-background text-white overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Gradient overlay for depth */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div
            style={getStyle(0)}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/50">
              Ready to Start?
            </span>
            <div className="h-px w-16 bg-white/20" />
          </div>

          <h2 
            style={getStyle(80)}
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-6"
          >
            Ready To Get
            <br />
            <span className="font-normal italic text-white/70">System-Strong?</span>
          </h2>

          <p 
            style={getStyle(160)}
            className="text-lg text-white/60 leading-relaxed mb-12 max-w-xl"
          >
            Book A Free 15-Minute Discovery Call. We'll Figure Out If Nimara Is The Right Fit—No Pressure, No Pitch.
          </p>

          <div 
            style={getStyle(240)}
            className="flex flex-col sm:flex-row items-start gap-8"
          >
            <a
              href="/book-a-call"
              className="group inline-flex items-center gap-3 text-white font-medium"
            >
              <span className="group-hover:text-accent transition-colors">Book a Discovery Call</span>
              <span 
                className="w-8 h-px bg-white group-hover:w-12 group-hover:bg-accent" 
                style={{ transition: `width 200ms ${DROPBOX_EASING_CSS}, background-color 200ms ${DROPBOX_EASING_CSS}` }}
              />
            </a>

            <a
              href="mailto:hello@nimara.ca"
              className="group inline-flex items-center gap-3 text-white/60 font-medium"
            >
              <span className="group-hover:text-accent transition-colors">Email us instead</span>
              <span 
                className="w-8 h-px bg-white/40 group-hover:w-12 group-hover:bg-accent" 
                style={{ transition: `width 200ms ${DROPBOX_EASING_CSS}, background-color 200ms ${DROPBOX_EASING_CSS}` }}
              />
            </a>
          </div>

          {/* Trust line */}
          <p
            style={getStyle(400)}
            className="mt-20 pt-8 border-t border-white/10 text-sm text-white/40"
          >
            Trusted by nonprofits across Canada · Money-back guarantee on system builds
          </p>
        </div>
      </div>
    </section>
  );
};
