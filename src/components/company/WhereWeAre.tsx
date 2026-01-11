import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Laptop, FileSpreadsheet, MapPin } from "lucide-react";

const features = [
  { icon: Globe, label: "Canada-wide" },
  { icon: Laptop, label: "Remote-first" },
  { icon: FileSpreadsheet, label: "Works in Google tools" },
];

// Premium floating visual
const LocationVisual = ({ isInView }: { isInView: boolean }) => (
  <div className="relative h-full w-full flex items-center justify-center p-6 lg:p-8">
    {/* Large rounded panel - light blue with texture */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative w-full h-full min-h-[320px] lg:min-h-[380px] rounded-[2rem] overflow-hidden"
      style={{ backgroundColor: 'hsl(210, 60%, 85%)' }}
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
        <line x1="0%" y1="20%" x2="100%" y2="60%" stroke="hsl(210, 50%, 50%)" strokeWidth="1" />
        <line x1="20%" y1="0%" x2="80%" y2="100%" stroke="hsl(210, 50%, 50%)" strokeWidth="1" />
        <line x1="60%" y1="0%" x2="100%" y2="40%" stroke="hsl(210, 50%, 50%)" strokeWidth="1" />
      </svg>
      
      {/* Floating white card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-6 w-[85%] max-w-[260px]"
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-blue-600" />
          </div>
          <span className="text-base font-semibold text-nim-navy">Location:</span>
        </div>
        
        {/* Message */}
        <p className="text-nim-navy text-lg font-medium mb-4 leading-snug">
          Coast to coast, 100% remote.
        </p>
        
        {/* Chips */}
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">Canada-wide</span>
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">Remote</span>
        </div>
      </motion.div>
    </motion.div>
  </div>
);

export const WhereWeAre = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef} 
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
              Location
            </motion.p>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] tracking-tight mb-6"
            >
              Where we <span className="text-primary">work</span>
            </motion.h2>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-lg text-muted-foreground leading-relaxed mb-10"
            >
              We support Canadian nonprofits across the country. Most work is done remotely, with clear handover and simple training.
            </motion.p>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-3 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white border border-border hover:border-primary/30 transition-colors"
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">{feature.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Email link */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a 
                href="mailto:hello@nimara.ca"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Prefer email? <span className="underline underline-offset-4">hello@nimara.ca</span>
              </a>
            </motion.div>
          </div>

          {/* Right: Premium Visual */}
          <div className="hidden lg:block">
            <LocationVisual isInView={isInView} />
          </div>
        </div>
      </div>
    </section>
  );
};
