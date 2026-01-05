import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const sevenAreas = [
  "Board",
  "Money & Grants",
  "People",
  "Programs",
  "Fundraising",
  "Volunteers",
  "Tools & Files",
];

const BehindTheScenes: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              The Method
            </span>
            <div className="h-px flex-1 bg-border" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] mb-4"
          >
            Behind the scenes
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-muted-foreground"
          >
            How we decide what you need
          </motion.p>
        </div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {/* Step 1 */}
            <AccordionItem value="step-1" className="border border-border rounded-xl overflow-hidden bg-muted/20">
              <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/30 transition-colors [&[data-state=open]>svg]:rotate-180">
                <div className="flex items-center gap-4 text-left">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                    1
                  </span>
                  <span className="text-lg font-medium text-foreground">Health Check (optional)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2">
                <p className="text-muted-foreground leading-relaxed pl-12">
                  A quick check to spot what's shaky. This helps us understand where to focus before we start building.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* Step 2 */}
            <AccordionItem value="step-2" className="border border-border rounded-xl overflow-hidden bg-muted/20">
              <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/30 transition-colors [&[data-state=open]>svg]:rotate-180">
                <div className="flex items-center gap-4 text-left">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                    2
                  </span>
                  <span className="text-lg font-medium text-foreground">We check 7 areas</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2">
                <div className="pl-12">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We look at how things work across your organization:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {sevenAreas.map((area) => (
                      <span 
                        key={area}
                        className="px-3 py-1.5 text-sm bg-background border border-border rounded-full text-foreground"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Step 3 */}
            <AccordionItem value="step-3" className="border border-border rounded-xl overflow-hidden bg-muted/20">
              <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/30 transition-colors [&[data-state=open]>svg]:rotate-180">
                <div className="flex items-center gap-4 text-left">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                    3
                  </span>
                  <span className="text-lg font-medium text-foreground">We recommend a path</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2">
                <div className="pl-12 space-y-4">
                  <div className="p-4 bg-background border border-border rounded-lg">
                    <p className="font-medium text-foreground mb-1">Path A: Fix a specific problem fast</p>
                    <p className="text-sm text-muted-foreground">
                      When you have one area that needs attention right now.
                    </p>
                  </div>
                  <div className="p-4 bg-background border border-border rounded-lg">
                    <p className="font-medium text-foreground mb-1">Path B: Build the system so it sticks</p>
                    <p className="text-sm text-muted-foreground">
                      When you want lasting systems that grow with you.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Step 4 */}
            <AccordionItem value="step-4" className="border border-border rounded-xl overflow-hidden bg-muted/20">
              <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/30 transition-colors [&[data-state=open]>svg]:rotate-180">
                <div className="flex items-center gap-4 text-left">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                    4
                  </span>
                  <span className="text-lg font-medium text-foreground">We place you on a level (0–4)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2">
                <p className="text-muted-foreground leading-relaxed pl-12">
                  This helps us match the right bundle and avoid overbuilding. We start where you are and move you up one step at a time.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default BehindTheScenes;
