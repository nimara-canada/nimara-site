import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export const CompanyHero = () => {
  return (
    <section className="bg-secondary-background px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="flex flex-col gap-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Nimara is a national operator for nonprofit capacity-building.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              We help small and mid-size nonprofits install strong systems so they can pass audits, keep staff, and keep the lights on.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="shadow-xl shadow-indigo-900/30 text-base px-8"
                asChild
              >
                <a href="#nohc">Start the Organizational Health Check</a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 bg-transparent border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <a href="/how-nimara-works">How Nimara works</a>
              </Button>
            </div>

            {/* Text link */}
            <a 
              href="#founding-story"
              className="text-[hsl(var(--nimara-mint))] hover:text-white transition-colors text-sm underline decoration-1 underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--nimara-mint))] rounded px-1"
            >
              Read our founding story
            </a>
          </div>

          {/* Right: Abstract Visual */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square">
              
              {/* Background glow */}
              <div className="absolute inset-0 bg-[hsl(var(--nimara-purple))]/10 rounded-full blur-3xl" />

              {/* Grid structure representing systems/infrastructure */}
              <div className="relative w-full h-full flex flex-col gap-4 p-8">
                
                {/* Top row - 3 blocks */}
                <div className="flex gap-4 flex-1">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg"
                  />
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex-1 bg-[hsl(var(--nimara-mint))]/20 backdrop-blur-sm rounded-2xl border border-[hsl(var(--nimara-mint))]/30 shadow-lg"
                  />
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg"
                  />
                </div>

                {/* Middle row - 2 blocks */}
                <div className="flex gap-4 flex-1">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex-1 bg-[hsl(var(--nimara-purple))]/20 backdrop-blur-sm rounded-2xl border border-[hsl(var(--nimara-purple))]/30 shadow-lg"
                  />
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg"
                  />
                </div>

                {/* Bottom row - 3 blocks */}
                <div className="flex gap-4 flex-1">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg"
                  />
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg"
                  />
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="flex-1 bg-[hsl(var(--nimara-mint))]/20 backdrop-blur-sm rounded-2xl border border-[hsl(var(--nimara-mint))]/30 shadow-lg"
                  />
                </div>

                {/* Connecting lines overlay (subtle) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" aria-hidden="true">
                  <motion.line
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.9, duration: 1 }}
                    x1="25%" y1="25%" x2="50%" y2="50%" 
                    stroke="hsl(var(--nimara-mint))" 
                    strokeWidth="2"
                  />
                  <motion.line
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    x1="50%" y1="25%" x2="50%" y2="75%" 
                    stroke="hsl(var(--nimara-purple))" 
                    strokeWidth="2"
                  />
                  <motion.line
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.1, duration: 1 }}
                    x1="75%" y1="25%" x2="50%" y2="50%" 
                    stroke="hsl(var(--nimara-mint))" 
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};