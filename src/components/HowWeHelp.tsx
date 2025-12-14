import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Check what's really going on",
    text: "For urgent fixes, we start with a short intake around one problem. For bigger projects, we run a health check across your core systems so we know where each one stands."
  },
  {
    number: "02",
    title: "Clear, small workplan",
    text: "We turn what we learn into a short workplan with clear jobs, owners, and dates. No 50-page reports—just what you need to move forward."
  },
  {
    number: "03",
    title: "Real tools you can use",
    text: "We build real things with you: plain-language policies, checklists, templates, and simple systems your team can use every week."
  },
  {
    number: "04",
    title: "Support and a safety net",
    text: "When the main build is done, we stay long enough to help you use the new tools in real life. Bigger projects come with up to 3 months of support and a money-back guarantee."
  }
];

const promises = [
  "Money-back guarantee on system builds",
  "Support while you start using the new tools",
  "Optional 12-month follow-up available"
];

export const HowWeHelp = () => {
  return (
    <section
      className="py-24 md:py-36 lg:py-44 bg-muted/30 relative overflow-hidden"
      id="how-we-help"
    >
      {/* Subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-background via-muted/30 to-muted/30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT COLUMN - Editorial intro */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
              Our process
            </p>

            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground leading-[1.1] mb-6">
              One simple loop behind every project
            </h2>

            <p className="text-lg text-body leading-relaxed mb-12">
              We don't guess. Behind every project we run the same clear loop: check what's going on, plan, build, support. The only thing that changes is how deep we go.
            </p>

            {/* Promises */}
            <div className="mb-12">
              <p className="text-xs tracking-widest text-muted-foreground uppercase mb-5">
                What you can count on
              </p>
              <ul className="space-y-4">
                {promises.map((promise, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-body text-sm">{promise}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a
              href="https://www.notion.so/Nimara-Refund-Policy-2bc227f1ee3a80f299fbc42501d338ac?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-foreground font-medium"
            >
              <span className="relative">
                Read our refund policy
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-foreground/30 group-hover:bg-foreground transition-colors duration-300" />
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* RIGHT COLUMN - Steps */}
          <div className="lg:col-span-7">
            <div className="space-y-0">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group"
                >
                  <div className={`flex gap-6 py-8 ${
                    index !== steps.length - 1 ? 'border-b border-border/50' : ''
                  }`}>
                    {/* Number */}
                    <span className="text-4xl md:text-5xl font-light text-border group-hover:text-accent transition-colors duration-500 tabular-nums">
                      {step.number}
                    </span>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl md:text-2xl font-serif font-medium text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-body leading-relaxed max-w-lg">
                        {step.text}
                      </p>

                      {/* Guarantee badge on last step */}
                      {index === steps.length - 1 && (
                        <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-xs font-medium text-foreground">
                            Money-back guarantee included
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom summary */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-border/50"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <p className="text-lg font-medium text-foreground mb-1">
                    Check → Plan → Build → Support
                  </p>
                  <p className="text-sm text-muted-foreground">
                    The simple Nimara loop behind every project
                  </p>
                </div>
                <a
                  href="/organizational-health-check"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-secondary-background text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-secondary-background/20"
                >
                  Start the free check
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
