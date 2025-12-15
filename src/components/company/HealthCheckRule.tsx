import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Zap, Layers } from "lucide-react";

const situations = [
  {
    situation: "One scary email / funder / audit issue",
    path: "Path A – Fast Help",
    nohc: false,
    icon: Zap,
    iconColor: "text-accent",
  },
  {
    situation: "We want better systems across domains",
    path: "Path B – System Installs",
    nohc: true,
    icon: Layers,
    iconColor: "text-primary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

const HealthCheckRule = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Editorial Header */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4 block">
                Starting Point
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-[1.1]">
                Do we always start with an{" "}
                <span className="italic text-primary">NOHC Snapshot?</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-7 lg:pt-8">
              <div className="space-y-5 text-body-muted text-lg leading-relaxed">
                <p>
                  <strong className="text-foreground font-semibold">No.</strong>
                </p>
                <p>
                  If you have one urgent problem, we use{" "}
                  <strong className="text-foreground">Fast Help (Path A)</strong> – a small, 
                  focused project that does not require an NOHC Snapshot.
                </p>
                <p>
                  If you want to upgrade your systems across any of our 7 domains, we start with the{" "}
                  <strong className="text-foreground">NOHC Snapshot ($2,500)</strong> – a ~2-week 
                  health check that shows your Tiers by domain. Then we design Path B Bundles to 
                  move those systems up a Tier.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Comparison Table */}
          <motion.div variants={itemVariants}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-muted border-b border-border">
                <div className="px-6 py-4">
                  <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground">
                    Situation
                  </span>
                </div>
                <div className="px-6 py-4 text-center">
                  <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground">
                    Path
                  </span>
                </div>
                <div className="px-6 py-4 text-center">
                  <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground">
                    NOHC Snapshot?
                  </span>
                </div>
              </div>

              {/* Table Rows */}
              {situations.map((row, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ backgroundColor: "hsl(var(--muted) / 0.5)" }}
                  className={`grid grid-cols-3 transition-colors duration-200 ${
                    index !== situations.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="px-6 py-5 flex items-center">
                    <p className="text-foreground font-medium">{row.situation}</p>
                  </div>
                  <div className="px-6 py-5 flex items-center justify-center gap-3">
                    <row.icon className={`w-4 h-4 ${row.iconColor}`} />
                    <span className="text-foreground font-semibold">{row.path}</span>
                  </div>
                  <div className="px-6 py-5 flex justify-center items-center">
                    {row.nohc ? (
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        <span className="text-sm text-emerald-600 font-medium">Yes</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground font-medium">No</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HealthCheckRule;
