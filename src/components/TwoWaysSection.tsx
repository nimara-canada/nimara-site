import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Zap, Layers } from "lucide-react";

const paths = [
  {
    id: "urgent",
    icon: Zap,
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
    title: "Build My Systems",
    timeline: "Start free",
    badge: "Recommended",
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
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6"
          >
            Choose Your Path
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6"
          >
            Two ways to start
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-md mx-auto"
          >
            Fix one urgent issue or build your core systems.
          </motion.p>
        </div>

        {/* Two Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {paths.map((path, index) => {
            const Icon = path.icon;
            const isHovered = hoveredCard === path.id;
            
            return (
              <motion.div
                key={path.id}
                onMouseEnter={() => setHoveredCard(path.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`
                  group relative p-8 lg:p-10 rounded-2xl border transition-all duration-500 cursor-pointer
                  ${path.badge 
                    ? 'bg-foreground text-background border-foreground' 
                    : 'bg-background border-border hover:border-foreground/20'
                  }
                `}
                onClick={() => handleNavigate(path.href)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Badge */}
                {path.badge && (
                  <span className="absolute top-6 right-6 text-[10px] font-semibold tracking-[0.2em] uppercase text-background/60">
                    {path.badge}
                  </span>
                )}

                {/* Icon */}
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-colors duration-300
                  ${path.badge 
                    ? 'bg-background/10' 
                    : 'bg-muted group-hover:bg-primary/10'
                  }
                `}>
                  <Icon className={`w-5 h-5 ${path.badge ? 'text-background/80' : 'text-foreground/70 group-hover:text-primary'} transition-colors`} />
                </div>

                {/* Timeline */}
                <span className={`
                  text-xs font-medium tracking-wide mb-3 block
                  ${path.badge ? 'text-background/50' : 'text-muted-foreground'}
                `}>
                  {path.timeline}
                </span>

                {/* Title */}
                <h3 className={`
                  text-2xl lg:text-3xl font-medium mb-4 tracking-tight
                  ${path.badge ? 'text-background' : 'text-foreground'}
                `}>
                  {path.title}
                </h3>

                {/* Description */}
                <p className={`
                  text-sm leading-relaxed mb-6
                  ${path.badge ? 'text-background/70' : 'text-muted-foreground'}
                `}>
                  {path.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-8">
                  {path.features.map((feature, i) => (
                    <li key={i} className={`
                      flex items-center gap-3 text-sm
                      ${path.badge ? 'text-background/60' : 'text-muted-foreground'}
                    `}>
                      <span className={`w-1 h-1 rounded-full ${path.badge ? 'bg-background/40' : 'bg-muted-foreground/40'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className={`
                  flex items-center gap-3 text-sm font-medium transition-all duration-300
                  ${path.badge 
                    ? 'text-background group-hover:gap-4' 
                    : 'text-foreground group-hover:text-primary group-hover:gap-4'
                  }
                `}>
                  <span>{path.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom helper - minimal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => handleNavigate("/book-a-call")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Not sure? <span className="underline underline-offset-4">Book a free call</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TwoWaysSection;