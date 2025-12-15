import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const TwoWaysSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleNavigate = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => navigate(path), 150);
  };

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 lg:py-36 bg-background overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mb-14 lg:mb-18">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Choose Your Path
            </span>
            <div className="h-px flex-1 bg-border" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-6"
          >
            Two ways
            <br />
            <span className="font-normal italic text-muted-foreground">to start</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl"
          >
            Fix one urgent problem, or set up your core systems. 
            Both paths lead to a nonprofit that runs smoother.
          </motion.p>
        </div>

        {/* Two Paths - Row Based */}
        <div className="space-y-0">
          {/* Path 1: Urgent Fix */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group"
          >
            <div className="grid grid-cols-12 gap-4 lg:gap-8 py-10 lg:py-14 border-t border-border hover:bg-muted/30 transition-colors duration-300">
              <div className="col-span-12 lg:col-span-4">
                <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                  Quick Fix
                </span>
                <h3 className="text-2xl lg:text-3xl font-medium text-foreground group-hover:text-primary transition-colors">
                  Urgent Fix
                </h3>
                <p className="text-sm text-muted-foreground mt-2">1–4 weeks · One problem, one clear fix</p>
              </div>
              
              <div className="col-span-12 lg:col-span-5">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Fix one urgent issue fast. Grant deadline? Board issue? HR mess? We jump in, solve the problem, and leave you with a simple way to keep it running.
                </p>
                <ul className="space-y-2">
                  {["A deadline is coming up", "Something is broken right now", "You need a clear fix this month"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="col-span-12 lg:col-span-3 lg:text-right lg:self-center">
                <button
                  onClick={() => handleNavigate("/book-a-call")}
                  className="group/btn inline-flex items-center gap-3 text-foreground font-medium"
                >
                  <span className="group-hover/btn:text-primary transition-colors">Get urgent help</span>
                  <span className="w-8 h-px bg-foreground group-hover/btn:w-12 group-hover/btn:bg-primary transition-all duration-300" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Path 2: Build My Systems */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group"
          >
            <div className="grid grid-cols-12 gap-4 lg:gap-8 py-10 lg:py-14 border-t border-border hover:bg-muted/30 transition-colors duration-300">
              <div className="col-span-12 lg:col-span-4">
                <span className="inline-block text-xs font-medium tracking-[0.15em] uppercase text-primary mb-2">
                  Recommended
                </span>
                <h3 className="text-2xl lg:text-3xl font-medium text-foreground group-hover:text-primary transition-colors">
                  Build My Systems
                </h3>
                <p className="text-sm text-muted-foreground mt-2">Start free · Upgrade only if you want us to go deeper</p>
              </div>
              
              <div className="col-span-12 lg:col-span-5">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For when things feel messy in more than one area—board, money, people, or programs. Start with a free check and decide from there.
                </p>
                <div className="space-y-3">
                  {[
                    { num: "01", title: "Free 4-minute check", tag: "Free" },
                    { num: "02", title: "Deep check", tag: "From $2,500" },
                    { num: "03", title: "Full setup", tag: "8–12 weeks" }
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="text-lg font-extralight text-muted-foreground/40">{step.num}</span>
                      <span className="text-sm text-foreground">{step.title}</span>
                      <span className="text-[10px] tracking-wider text-muted-foreground uppercase">{step.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="col-span-12 lg:col-span-3 lg:text-right lg:self-center">
                <button
                  onClick={() => handleNavigate("/book-a-call")}
                  className="group/btn inline-flex items-center gap-3 text-foreground font-medium"
                >
                  <span className="group-hover/btn:text-primary transition-colors">Start the free check</span>
                  <span className="w-8 h-px bg-foreground group-hover/btn:w-12 group-hover/btn:bg-primary transition-all duration-300" />
                </button>
              </div>
            </div>
          </motion.div>
          
          {/* Bottom border */}
          <div className="border-t border-border" />
        </div>

        {/* Bottom helper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <p className="text-muted-foreground">
              Still not sure which path?
            </p>
            <button
              onClick={() => handleNavigate("/book-a-call")}
              className="group inline-flex items-center gap-3 text-foreground font-medium"
            >
              <span className="group-hover:text-primary transition-colors">Book a free call</span>
              <span className="w-8 h-px bg-foreground group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TwoWaysSection;
