import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";

export const ReadyToWork = () => {
  return (
    <section className="py-24 md:py-36 lg:py-44 bg-muted/30 relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-background via-muted/30 to-muted/30" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
            Next Steps
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground leading-[1.1] mb-6">
            Ready to get unstuck?
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Pick a starting point. We'll help you build working basics.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button size="lg" asChild className="group">
              <Link to="/start-here" className="gap-2">
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <a
              href={TYPEFORM_HEALTH_CHECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground font-medium group"
            >
              <span className="relative">
                Try the free check
                <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Email line */}
          <a 
            href="mailto:hello@nimara.ca"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Prefer email? <span className="underline underline-offset-4">hello@nimara.ca</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
