import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CALENDLY_BOOKING_URL } from "@/constants/urls";

const steps = [
  {
    number: 1,
    title: "Start The Health Check",
    description: "You Complete A Short Online Check About Your Team, Money, Systems, And Risks. This Gives Us A Clear Picture Of What Is Strong And What Is Fragile.",
  },
  {
    number: 2,
    title: "Confirm Your Tier And Path",
    description: "Together We Confirm Your Tier (0–4) And Decide Whether You Need A Fast Fix (Path A) Or A Deeper Package (Path B). This Keeps The Work At The Right Size And Price.",
  },
  {
    number: 3,
    title: "Match With A Practice Partner",
    description: "We Match You With A Nimara Practice Partner Who Has The Right Skills And Context. We Agree On Scope, Timelines, And Deliverables In A Simple Statement Of Work (SOW).",
  },
  {
    number: 4,
    title: "Delivery With Check-Ins",
    description: "The Practice Partner Runs The Work Using Nimara Tools And Templates. Your Team Stays Involved. We Check Progress Against The SOW, Not Vague Goals.",
  },
  {
    number: 5,
    title: "Handover, Support, And Learning",
    description: "We Close Out The Project With A Handover And Next Steps. For About Three Months, We Are Available For Light Support And Questions.",
  },
];

const addOns = [
  {
    title: "12-Month Evaluation & Support",
    description: "Our Team Stays Close For Up To 12 Months. We Check In At Agreed Points, Help You See What Is Working, And Adjust Tools Or Processes Where Needed.",
  },
  {
    title: "Fractional Partner (Ongoing)",
    description: "For Organizations That Need More Hands-On Help, Hire A Nimara Fractional Partner On An Ongoing Basis To Manage And Update The Systems We Installed.",
  },
];

const YourJourney: React.FC = () => {
  const sectionRef = useRef(null);
  const addOnsRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const addOnsInView = useInView(addOnsRef, { once: true, margin: "-50px" });

  return (
    <section className="relative py-32 sm:py-40 lg:py-48 bg-background overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Editorial Header */}
        <div className="mb-24 lg:mb-32">
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              The Process
            </span>
            <div className="h-px flex-1 bg-border" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-8"
          >
            Your Journey
            <br />
            <span className="font-normal italic text-muted-foreground">with Nimara</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl"
          >
            Most Projects Follow The Same Basic Path. These Are The Main Steps 
            From 'We Need Help' To 'This Is Working In Real Life.'
          </motion.p>
        </div>

        {/* Timeline Steps */}
        <div className="mb-32 lg:mb-40">
          <div className="space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="grid grid-cols-12 gap-4 lg:gap-8 py-8 lg:py-12 border-t border-border hover:bg-muted/30 transition-colors duration-300">
                  {/* Number */}
                  <div className="col-span-2 lg:col-span-1">
                    <span className="text-4xl lg:text-5xl font-extralight text-muted-foreground/40 group-hover:text-foreground/60 transition-colors">
                      {String(step.number).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <div className="col-span-10 lg:col-span-4">
                    <h3 className="text-lg lg:text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <div className="col-span-12 lg:col-span-7 mt-4 lg:mt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Bottom border */}
            <div className="border-t border-border" />
          </div>
        </div>

        {/* Add-ons Section */}
        <div ref={addOnsRef}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={addOnsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Optional
            </span>
            <div className="h-px flex-1 bg-border" />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={addOnsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-light tracking-tight mb-6"
          >
            Add-ons
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={addOnsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-xl mb-12"
          >
            Some Organizations Want Deeper Follow-Up. These Add-Ons Are Optional 
            And Come With A Separate Simple Fee.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.title}
                initial={{ opacity: 0, y: 20 }}
                animate={addOnsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group bg-background p-8 lg:p-12 hover:bg-muted/30 transition-colors duration-300"
              >
                <span className="inline-block text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground mb-6">
                  {index === 0 ? 'Extended Support' : 'Ongoing Partnership'}
                </span>
                
                <h4 className="text-xl lg:text-2xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors">
                  {addon.title}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed">
                  {addon.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={addOnsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 lg:mt-32 pt-12 border-t border-border"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <p className="text-muted-foreground">
              Ready To Start Your Journey?
            </p>
            <a
              href={CALENDLY_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-foreground font-medium group"
            >
              <span className="group-hover:text-primary transition-colors">Book A Discovery Call</span>
              <span className="w-8 h-px bg-foreground group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YourJourney;
