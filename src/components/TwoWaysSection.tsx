import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Zap, Layers, Sparkles } from "lucide-react";

const paths = [
  {
    id: "urgent",
    icon: Zap,
    label: "Quick Start",
    title: "Urgent Fix",
    timeline: "1–4 weeks",
    description: "One issue, one clear fix. We solve the problem and leave you a simple way to run it.",
    features: ["Deadline or audit pressure", "Something broken right now", "Need clarity this month"],
    cta: "Get urgent help",
    href: "/book-a-call"
  },
  {
    id: "build",
    icon: Layers,
    label: "Recommended",
    title: "Build My Systems",
    timeline: "Start free",
    featured: true,
    description: "Start with a free check, then we recommend next steps based on what you actually need.",
    features: ["Multiple areas feel messy", "Want repeatable systems", "Need funder-ready basics"],
    cta: "Start the free check",
    href: "/check"
  }
];

export const TwoWaysSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleNavigate = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => navigate(path), 150);
  };

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 bg-background overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.25em] uppercase text-muted-foreground/70 mb-8">
              <span className="w-8 h-px bg-border" />
              Where to start
              <span className="w-8 h-px bg-border" />
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.75rem] sm:text-5xl lg:text-6xl font-light tracking-[-0.03em] leading-[1.1] text-foreground"
          >
            Choose your path
          </motion.h2>
        </div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-2 gap-4 lg:gap-6"
        >
          {paths.map((path) => {
            const Icon = path.icon;
            const isHovered = hoveredCard === path.id;
            const isFeatured = path.featured;
            
            return (
              <motion.div
                key={path.id}
                onMouseEnter={() => setHoveredCard(path.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleNavigate(path.href)}
                className={`
                  group relative cursor-pointer
                  ${isFeatured ? 'md:-mt-4 md:mb-4' : ''}
                `}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Card */}
                <div className={`
                  relative h-full p-8 lg:p-10 rounded-2xl transition-all duration-500
                  ${isFeatured 
                    ? 'bg-foreground text-background shadow-2xl shadow-foreground/10' 
                    : 'bg-background/60 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:bg-background/80 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:border-white/30'
                  }
                `}>
                  {/* Featured indicator */}
                  {isFeatured && (
                    <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-background/30 to-transparent" />
                  )}

                  {/* Top row: Label + Timeline */}
                  <div className="flex items-center justify-between mb-8">
                    <span className={`
                      inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.2em] uppercase
                      ${isFeatured ? 'text-background/50' : 'text-muted-foreground/60'}
                    `}>
                      {isFeatured && <Sparkles className="w-3 h-3" />}
                      {path.label}
                    </span>
                    <span className={`
                      text-xs font-medium tracking-wide px-3 py-1 rounded-full
                      ${isFeatured 
                        ? 'bg-background/10 text-background/70' 
                        : 'bg-muted text-muted-foreground'
                      }
                    `}>
                      {path.timeline}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`
                    w-11 h-11 rounded-xl flex items-center justify-center mb-6 transition-all duration-300
                    ${isFeatured 
                      ? 'bg-background/10 group-hover:bg-background/15' 
                      : 'bg-muted group-hover:bg-primary/10'
                    }
                  `}>
                    <Icon className={`
                      w-5 h-5 transition-colors duration-300
                      ${isFeatured 
                        ? 'text-background/80' 
                        : 'text-muted-foreground group-hover:text-primary'
                      }
                    `} />
                  </div>

                  {/* Title */}
                  <h3 className={`
                    text-2xl lg:text-[1.75rem] font-medium tracking-[-0.02em] mb-3
                    ${isFeatured ? 'text-background' : 'text-foreground'}
                  `}>
                    {path.title}
                  </h3>

                  {/* Description */}
                  <p className={`
                    text-[15px] leading-relaxed mb-8
                    ${isFeatured ? 'text-background/65' : 'text-muted-foreground'}
                  `}>
                    {path.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-10">
                    {path.features.map((feature, i) => (
                      <li key={i} className={`
                        flex items-center gap-3 text-sm
                        ${isFeatured ? 'text-background/55' : 'text-muted-foreground/80'}
                      `}>
                        <span className={`
                          w-1 h-1 rounded-full flex-shrink-0
                          ${isFeatured ? 'bg-background/35' : 'bg-muted-foreground/40'}
                        `} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className={`
                    flex items-center gap-2 text-sm font-medium transition-all duration-300
                    ${isFeatured 
                      ? 'text-background group-hover:gap-4' 
                      : 'text-foreground group-hover:text-primary group-hover:gap-4'
                    }
                  `}>
                    <span>{path.cta}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom helper */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => handleNavigate("/book-a-call")}
            className="text-sm text-muted-foreground/70 hover:text-foreground transition-colors duration-300"
          >
            Not sure which path? <span className="underline underline-offset-4 decoration-muted-foreground/30 hover:decoration-foreground/50">Book a free call</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TwoWaysSection;