import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const NewConsultantHero = () => {
  const scrollToWhyJoin = () => {
    const element = document.getElementById('why-join');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-secondary-background min-h-[90vh] flex items-center">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 py-32 md:py-40">
        <div className="max-w-4xl">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white/40 uppercase tracking-[0.25em] text-xs mb-10"
          >
            For Consultants
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white mb-10 leading-[1.05] tracking-tight font-sans"
          >
            Build working basics
            <br />
            <span className="italic font-light">for nonprofits.</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-lg md:text-xl text-white/70 mb-14 leading-relaxed font-light">
              Nimara partners with operators to set up simple systems for money, files, and reporting — so nonprofits can run smoothly and manage funding with confidence.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-8 items-start"
          >
            <Button 
              asChild
              size="lg" 
              className="bg-white text-secondary-background hover:bg-white/95 rounded-none px-10 py-7 text-sm tracking-wide font-medium"
            >
              <Link to="/consultants/apply">
                Apply to Join Nimara
              </Link>
            </Button>
            <a
              href="mailto:hello@nimara.ca"
              className="text-white/50 hover:text-white/80 text-sm tracking-wide transition-colors duration-500 border-b border-white/20 hover:border-white/40 pb-1"
            >
              Questions? Email hello@nimara.ca
            </a>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-white/30 text-sm mt-14 font-light"
          >
            Remote-first • Project-based • Clear scope
          </motion.p>
        </div>
      </div>
    </section>
  );
};
