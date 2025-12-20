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
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-6"
          >
            Choose Your Path
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.1] mb-6"
          >
            Two ways to start
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-body max-w-md mx-auto"
          >
            Fix one urgent issue or build your core systems.
          </motion.p>
        </div>

        {/* Two Cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {paths.map((path) => {
            const Icon = path.icon;
            const isRecommended = !!path.badge;
            
            return (
              <motion.div
                key={path.id}
                onMouseEnter={() => setHoveredCard(path.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`
                  group relative p-8 lg:p-10 rounded-xl border cursor-pointer transition-all duration-300
                  ${isRecommended 
                    ? 'bg-foreground text-background border-foreground shadow-lg' 
                    : 'bg-card border-border hover:border-foreground/20 hover:shadow-md'
                  }
                `}
                onClick={() => handleNavigate(path.href)}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                {/* Badge */}
                {path.badge && (
                  <span className="absolute top-6 right-6 text-[10px] font-semibold tracking-[0.1em] uppercase text-background/50">
                    {path.badge}
                  </span>
                )}

                {/* Icon */}
                <div className={`
                  w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors duration-200
                  ${isRecommended 
                    ? 'bg-background/10' 
                    : 'bg-muted group-hover:bg-primary/10'
                  }
                `}>
                  <Icon className={`w-5 h-5 ${isRecommended ? 'text-background/80' : 'text-foreground/70 group-hover:text-primary'} transition-colors`} />
                </div>

                {/* Timeline */}
                <span className={`
                  text-xs font-semibold tracking-wide mb-3 block
                  ${isRecommended ? 'text-background/50' : 'text-body-muted'}
                `}>
                  {path.timeline}
                </span>

                {/* Title */}
                <h3 className={`
                  text-2xl lg:text-[1.75rem] font-bold mb-4 tracking-tight
                  ${isRecommended ? 'text-background' : 'text-foreground'}
                `}>
                  {path.title}
                </h3>

                {/* Description */}
                <p className={`
                  text-base leading-relaxed mb-6
                  ${isRecommended ? 'text-background/70' : 'text-body'}
                `}>
                  {path.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {path.features.map((feature, i) => (
                    <li key={i} className={`
                      flex items-center gap-3 text-sm
                      ${isRecommended ? 'text-background/60' : 'text-body-muted'}
                    `}>
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isRecommended ? 'bg-background/40' : 'bg-primary/50'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className={`
                  inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200
                  ${isRecommended 
                    ? 'text-background group-hover:gap-3' 
                    : 'text-primary group-hover:gap-3'
                  }
                `}>
                  <span>{path.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom helper */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <button
            onClick={() => handleNavigate("/book-a-call")}
            className="text-sm text-body-muted hover:text-foreground transition-colors duration-200"
          >
            Not sure? <span className="underline underline-offset-4">Book a free call</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TwoWaysSection;