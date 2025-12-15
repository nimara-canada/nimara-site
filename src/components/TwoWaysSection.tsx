import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const TwoWaysSection = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => navigate(path), 150);
  };

  return (
    <section className="py-24 md:py-36 lg:py-44 bg-background relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-background to-background" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Section header - editorial style */}
        <motion.div
          className="max-w-2xl mb-20 md:mb-28"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
            Choose your starting point
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground leading-[1.1] mb-6">
            Two ways to start
          </h2>
          <p className="text-lg md:text-xl text-body leading-relaxed">
            Fix one urgent problem, or set up your core systems. Both paths lead to a nonprofit that runs smoother.
          </p>
        </motion.div>

        {/* Cards - asymmetric premium layout */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Card 1: Urgent Fix - spans 5 columns */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="group h-full bg-card border border-border/50 rounded-3xl p-8 md:p-10 lg:p-12 transition-all duration-500 hover:border-border hover:shadow-2xl hover:shadow-black/[0.03]">
              
              {/* Minimal label */}
              <span className="text-xs tracking-widest text-muted-foreground uppercase">
                Quick fix
              </span>
              
              <h3 className="text-2xl md:text-3xl font-serif font-medium text-foreground mt-4 mb-2">
                Urgent Fix
              </h3>
              
              <p className="text-sm text-muted-foreground mb-8">
                1–4 weeks · One problem, one clear fix
              </p>

              <p className="text-body leading-relaxed mb-8">
                Fix one urgent issue fast. Grant deadline? Board issue? HR mess? We jump in, solve the problem, and leave you with a simple way to keep it running.
              </p>

              {/* Best if - clean list */}
              <div className="mb-10">
                <p className="text-xs tracking-widest text-muted-foreground uppercase mb-4">Best if</p>
                <ul className="space-y-3">
                  {[
                    "A deadline is coming up",
                    "Something is broken right now",
                    "You need a clear fix this month",
                    "You want help without a long process"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-body text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What you get */}
              <div className="border-t border-border/50 pt-8 mb-10">
                <p className="text-xs tracking-widest text-muted-foreground uppercase mb-3">You get</p>
                <p className="text-body text-sm leading-relaxed">
                  A working fix, the files and templates you need, and a simple way to run it going forward.
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={() => handleNavigate("/book-a-call")}
                className="group/btn inline-flex items-center gap-3 text-foreground font-medium transition-all duration-300"
              >
                <span className="relative">
                  Get urgent help
                  <span className="absolute left-0 -bottom-0.5 w-full h-px bg-foreground/30 group-hover/btn:bg-foreground transition-colors duration-300" />
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: Build My Systems - spans 7 columns, featured */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="group h-full bg-secondary-background text-white rounded-3xl p-8 md:p-10 lg:p-12 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary-background/20">
              
              {/* Label with accent */}
              <span className="inline-block text-xs tracking-widest text-accent uppercase">
                Recommended
              </span>
              
              <h3 className="text-2xl md:text-3xl font-serif font-medium text-white mt-4 mb-2">
                Build My Systems
              </h3>
              
              <p className="text-sm text-white/60 mb-8">
                Start free · Upgrade only if you want us to go deeper
              </p>

              <p className="text-white/80 leading-relaxed mb-10">
                For when things feel messy in more than one area—board, money, people, or programs. Start with a free check and decide from there.
              </p>

              {/* The journey - clean numbered steps */}
              <div className="mb-10">
                <p className="text-xs tracking-widest text-white/50 uppercase mb-6">How it works</p>
                <div className="space-y-6">
                  {[
                    { 
                      num: "01", 
                      title: "Free 4-minute check", 
                      desc: "See what's working, what's missing, and your next step.",
                      tag: "Free"
                    },
                    { 
                      num: "02", 
                      title: "Deep check", 
                      desc: "We review your real documents and give you a clear plan.",
                      tag: "From $2,500"
                    },
                    { 
                      num: "03", 
                      title: "Full setup", 
                      desc: "We set up the systems with you, so it's easier to run day-to-day.",
                      tag: "8–12 weeks"
                    }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-5">
                      <span className="text-2xl font-light text-accent/60 tabular-nums">{step.num}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-medium text-white">{step.title}</span>
                          <span className="text-[10px] tracking-wider text-white/40 uppercase">{step.tag}</span>
                        </div>
                        <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div>
                <button
                  onClick={() => handleNavigate("/check")}
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-accent text-secondary-background font-semibold rounded-full transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
                >
                  Start the free check
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-white/40 mt-4 max-w-xs">
                  No pressure. The free check stands on its own. Upgrade only if it helps.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom helper - minimal */}
        <motion.div
          className="mt-20 md:mt-28 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-muted-foreground">
            Still not sure which path?
          </p>
          <button
            onClick={() => handleNavigate("/book-a-call")}
            className="group inline-flex items-center gap-2 text-foreground font-medium"
          >
            <span className="relative">
              Book a free call
              <span className="absolute left-0 -bottom-0.5 w-full h-px bg-foreground/30 group-hover:bg-foreground transition-colors duration-300" />
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TwoWaysSection;
