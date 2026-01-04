import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const NewPrimaryCTA = () => {
  return (
    <section className="bg-secondary-background py-32 md:py-40">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white/30 uppercase tracking-[0.25em] text-xs mb-8"
          >
            Apply Now
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8 leading-tight tracking-tight"
          >
            Ready To <span className="italic font-light">Join?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base text-white/50 mb-14 font-light"
          >
            If you're an operator who can build working basics, we want to meet you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 items-center justify-center"
          >
            <Button 
              asChild
              size="lg" 
              className="bg-white text-secondary-background hover:bg-white/95 rounded-none px-14 py-7 text-sm tracking-wide font-medium"
            >
              <Link to="/consultants/apply">
                Apply to Join Nimara
              </Link>
            </Button>
            
            <a
              href="mailto:hello@nimara.ca"
              className="text-white/50 hover:text-white/80 text-sm tracking-wide transition-colors duration-500 border-b border-white/20 hover:border-white/40 pb-1"
            >
              Email us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
