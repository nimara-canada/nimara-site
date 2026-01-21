import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, Handshake } from "lucide-react";

// Premium floating visual
const PartnerVisual = ({ isInView }: { isInView: boolean }) => (
  <div className="relative h-full w-full flex items-center justify-center p-6 lg:p-8">
    {/* Large rounded panel - light purple with texture */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative w-full h-full min-h-[320px] lg:min-h-[380px] rounded-[2rem] overflow-hidden"
      style={{ backgroundColor: 'hsl(262, 60%, 88%)' }}
    >
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Geometric lines */}
      <svg className="absolute inset-0 w-full h-full opacity-25" preserveAspectRatio="none">
        <line x1="100%" y1="20%" x2="0%" y2="80%" stroke="hsl(262, 50%, 50%)" strokeWidth="1" />
        <line x1="70%" y1="0%" x2="30%" y2="100%" stroke="hsl(262, 50%, 50%)" strokeWidth="1" />
        <line x1="30%" y1="0%" x2="0%" y2="30%" stroke="hsl(262, 50%, 50%)" strokeWidth="1" />
      </svg>
      
      {/* Floating white card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-5 lg:p-6 w-[75%] sm:w-[70%] max-w-[280px]"
      >
        {/* Header */}
        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-nim-purple/15 flex items-center justify-center flex-shrink-0">
            <Handshake className="w-4 h-4 text-nim-purple" />
          </div>
          <span className="text-sm sm:text-base font-semibold text-nim-navy">Partners:</span>
        </div>
        
        {/* Message */}
        <p className="text-nim-navy text-sm sm:text-base font-medium mb-3 sm:mb-4 leading-snug">
          Capacity dollars → real, reusable systems.
        </p>
        
        {/* Chips */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-nim-purple/10 text-nim-purple text-xs font-medium">Funders</span>
          <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-nim-purple/10 text-nim-purple text-xs font-medium">Capacity builders</span>
        </div>
      </motion.div>
    </motion.div>
  </div>
);

export const FunderWaitlist = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      id="funder-waitlist"
      className="py-24 lg:py-32"
      style={{ backgroundColor: '#faf8f5' }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4"
            >
              For Partners
            </motion.p>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.05] tracking-[-0.03em] mb-6"
            >
              For partners <span className="text-primary">and funders</span>
            </motion.h2>

            {/* Body */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-4 mb-10"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're building a simple way for capacity-building dollars to turn into real, reusable systems — not one-off fixes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                If you fund capacity building and want to learn how we support nonprofits, we'd love to connect.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <a 
                href="mailto:hello@nimara.ca"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-nim-purple text-white font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              >
                <Mail className="w-5 h-5" />
                Email us
              </a>
              
              <a 
                href="#newsletter"
                className="inline-flex items-center gap-2 text-primary font-medium group px-4 py-4"
              >
                <span className="relative">
                  Join updates
                  <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Right: Premium Visual */}
          <div className="hidden lg:block">
            <PartnerVisual isInView={isInView} />
          </div>
        </div>
      </div>
    </section>
  );
};
