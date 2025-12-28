import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const situations = [
  {
    situation: "One Scary Email / Funder / Audit Issue",
    path: "Path A – Fast Help",
    nohc: "No",
  },
  {
    situation: "We Want Better Systems Across Domains",
    path: "Path B – System Installs",
    nohc: "Yes",
  },
];

const HealthCheckRule = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 sm:py-40 lg:py-48 bg-muted/30 overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Editorial Header */}
        <div className="mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Starting Point
            </span>
            <div className="h-px flex-1 bg-border" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-8"
          >
            Do We Always Start With
            <br />
            <span className="font-normal italic text-muted-foreground">An NOHC Snapshot?</span>
          </motion.h2>
        </div>

        {/* Answer section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block text-6xl lg:text-7xl font-extralight text-muted-foreground/30 mb-6">
              No.
            </span>
            <p className="text-lg text-muted-foreground leading-relaxed">
              If You Have One Urgent Problem, We Use{" "}
              <span className="text-foreground font-medium">Fast Help (Path A)</span> – A Small, 
              Focused Project That Does Not Require An NOHC Snapshot.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:pt-16"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              If You Want To Upgrade Your Systems Across Any Of Our 7 Domains, We Start With The{" "}
              <span className="text-foreground font-medium">NOHC Snapshot (from $2,500)</span> – A ~2-Week 
              Health Check That Shows Your Tiers By Domain. Then We Design Path B Bundles To 
              Move Those Systems Up A Tier.
            </p>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 lg:gap-8 py-4 border-b border-border">
            <div className="col-span-6 lg:col-span-5">
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground">
                Situation
              </span>
            </div>
            <div className="col-span-4 lg:col-span-5">
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground">
                Path
              </span>
            </div>
            <div className="col-span-2 text-right">
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground">
                NOHC?
              </span>
            </div>
          </div>

          {/* Table Rows */}
          {situations.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="group grid grid-cols-12 gap-4 lg:gap-8 py-6 lg:py-8 border-b border-border hover:bg-background/50 transition-colors duration-300"
            >
              <div className="col-span-6 lg:col-span-5">
                <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {row.situation}
                </p>
              </div>
              <div className="col-span-4 lg:col-span-5">
                <span className="text-muted-foreground">{row.path}</span>
              </div>
              <div className="col-span-2 text-right">
                <span className={`text-sm font-medium ${
                  row.nohc === "Yes" ? "text-foreground" : "text-muted-foreground/60"
                }`}>
                  {row.nohc}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HealthCheckRule;
