import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CompanyHero = () => {
  return (
    <section className="bg-secondary-background relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Text Content */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm tracking-widest text-white/50 uppercase mb-6">
              About Nimara
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white leading-[1.1] mb-8">
              We help nonprofits get the basics working.
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl">
              Simple systems for money, files, and reporting — so funding is easier to win and manage.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/start-here"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-accent text-secondary-background font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <a
                href="mailto:hello@nimara.ca"
                className="group inline-flex items-center gap-2 h-14 px-6 text-white/80 font-medium transition-colors duration-300 hover:text-white"
              >
                <span className="relative">
                  Prefer email? hello@nimara.ca
                  <span className="absolute left-0 -bottom-0.5 w-full h-px bg-white/30 group-hover:bg-white transition-colors duration-300" />
                </span>
              </a>
            </div>

            {/* Small line */}
            <p className="text-sm text-white/40 italic">
              Built once. Used again.
            </p>
          </motion.div>

          {/* Right: Abstract Visual */}
          <motion.div 
            className="lg:col-span-5 hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full max-w-sm aspect-square">
              {/* Grid structure representing systems */}
              <div className="relative w-full h-full grid grid-cols-3 gap-3 p-4">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                    className={`
                      rounded-2xl backdrop-blur-sm border transition-all duration-500 hover:scale-105
                      ${i === 1 || i === 8 
                        ? 'bg-accent/20 border-accent/30' 
                        : i === 4 
                          ? 'bg-primary/20 border-primary/30' 
                          : 'bg-white/10 border-white/20'
                      }
                    `}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
