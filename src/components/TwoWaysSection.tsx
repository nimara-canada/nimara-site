import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

export const TwoWaysSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Two ways to work with Nimara
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Path A - Fast Help */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Fast Help – Fix One Urgent Problem
              </h3>
            </div>

            <ul className="space-y-4 mb-6 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span>For when one thing is on fire – a scary email, an audit, a funder deadline, a policy gap.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span>We keep it small and clear: one problem, one mini-bundle, fast turnaround.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span>No big diagnostic. No health check required.</span>
              </li>
            </ul>

            <p className="text-sm text-muted-foreground border-t border-border pt-4 mb-6">
              No NOHC needed. We go straight to fixing the urgent thing.
            </p>

            <Button asChild className="w-full group">
              <Link to="/path-a">
                Get fast help
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Path B - Health Check & System Installs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 border border-primary/30 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                Most Popular
              </span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Health Check & System Installs
              </h3>
            </div>

            <ul className="space-y-4 mb-6 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>For when the whole system feels messy – finance, governance, HR, or delivery.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>We start with the Nimara Organizational Health Check (NOHC) to see where each system is.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>Then we pick 1–2 Bundles to move those systems up a Tier.</span>
              </li>
            </ul>

            <p className="text-sm text-muted-foreground border-t border-border pt-4 mb-6">
              NOHC is required for system installs, so we know what we're building and why.
            </p>

            <Button asChild variant="default" className="w-full group bg-primary hover:bg-primary/90">
              <Link to="/health-score">
                Start with a health check
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
