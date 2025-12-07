import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const situations = [
  {
    situation: "One scary email / funder / audit issue",
    path: "Path A – Fast Help",
    nohc: false,
  },
  {
    situation: "We want better systems across domains",
    path: "Path B – System Installs",
    nohc: true,
  },
];

const HealthCheckRule = () => {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Do we always start with a health check?
            </h2>
          </div>

          {/* Answer */}
          <div className="space-y-4 text-foreground/90 text-lg leading-relaxed">
            <p>
              <strong className="text-foreground">No.</strong>
            </p>
            <p>
              If you have one urgent problem, we use <strong>Fast Help (Path A)</strong> – a small, focused project that does not require a full health check.
            </p>
            <p>
              If you want to upgrade your systems (finance, governance, HR, programs), we start with the <strong>Nimara Organizational Health Check (NOHC)</strong>. NOHC shows us your Tiers by domain, and then we design Path B Bundles to move those systems up a Tier.
            </p>
          </div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-8"
          >
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                <div className="px-4 py-3 text-sm font-semibold text-foreground">
                  Situation
                </div>
                <div className="px-4 py-3 text-sm font-semibold text-foreground text-center">
                  Path
                </div>
                <div className="px-4 py-3 text-sm font-semibold text-foreground text-center">
                  NOHC?
                </div>
              </div>

              {/* Table Rows */}
              {situations.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 ${
                    index !== situations.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="px-4 py-4 text-sm text-foreground/80">
                    {row.situation}
                  </div>
                  <div className="px-4 py-4 text-sm text-foreground font-medium text-center">
                    {row.path}
                  </div>
                  <div className="px-4 py-4 flex justify-center">
                    {row.nohc ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HealthCheckRule;
