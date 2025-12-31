import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const OurStory = () => {
  return (
    <section
      id="founding-story"
      className="py-24 md:py-36 lg:py-44 bg-background relative overflow-hidden"
    >
      {/* Subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-muted/50 via-background to-background" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.p
          className="text-sm tracking-widest text-muted-foreground uppercase mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Our Story
        </motion.p>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Big statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-[1.15]">
              Nimara was founded by Ben Serunyigo — a former fund manager for one of Canada's largest capacity-building funds for nonprofits.
            </h2>
          </motion.div>

          {/* Right column - Details + CTA */}
          <motion.div
            className="flex flex-col justify-between"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-6">
              <p className="text-lg text-body leading-relaxed">
                He helped distribute millions of dollars to organizations across the country. And he watched the same patterns break them: passionate leaders with no systems, good work with no proof, and funders who couldn't tell the difference between confusion and corruption.
              </p>
              
              <p className="text-lg text-body leading-relaxed">
                Most nonprofits don't fail because they don't care. They fail because no one showed them what to build.
              </p>
              
              <p className="text-xl font-serif font-medium text-foreground">
                That's why Nimara exists.
              </p>
            </div>

            <a
              href="/how-nimara-works"
              className="group inline-flex items-center gap-2 text-foreground font-medium mt-10"
            >
              <span className="relative">
                Read our full story
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-foreground/30 group-hover:bg-foreground transition-colors duration-300" />
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
