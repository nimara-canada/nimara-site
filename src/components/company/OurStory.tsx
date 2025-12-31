import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export const OurStory = () => {
  return <section id="founding-story" className="py-24 md:py-36 lg:py-44 bg-background relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-muted/50 via-background to-background" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.p className="text-sm tracking-widest text-muted-foreground uppercase mb-8" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.6
      }}>
          Our Story
        </motion.p>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Big statement */}
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium text-foreground leading-[1.1] tracking-tight">
              I kept seeing the{' '}
              <span className="italic text-muted-foreground">same thing.</span>
            </h2>
          </motion.div>

          {/* Right column - Details + CTA */}
          <motion.div className="flex flex-col justify-between lg:pt-4" initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.8,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1]
        }}>
            <div className="space-y-8">
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
                Nimara was founded by <span className="font-medium text-foreground">Ben Serunyigo</span> — a former fund manager for one of Canada's largest capacity-building funds for nonprofits.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                He helped distribute millions of dollars to organizations across the country. And he watched the same patterns break them: passionate leaders with no systems, good work with no proof, and funders who couldn't tell the difference between confusion and corruption.
              </p>
              
              <div className="border-l-2 border-foreground/20 pl-6 py-2">
                <p className="text-base md:text-lg text-foreground/70 leading-relaxed italic">
                  Most nonprofits don't fail because they don't care. They fail because no one showed them what to build.
                </p>
              </div>
              
              <p className="text-xl md:text-2xl font-serif font-medium text-foreground tracking-tight">
                That's why Nimara exists.
              </p>
            </div>

            <a href="/how-nimara-works" className="group inline-flex items-center gap-3 text-foreground font-medium mt-12 text-sm uppercase tracking-widest">
              <span className="relative">
                Read our full story
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-foreground/20 group-hover:bg-foreground transition-colors duration-300" />
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>;
};