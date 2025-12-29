import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";

const nextSteps = [
  {
    num: "01",
    heading: "I Run Or Support A Nonprofit",
    description: "I want to see if Nimara is a good fit for our team.",
    buttonText: "Start The Free Check",
    link: TYPEFORM_HEALTH_CHECK_URL,
    external: true
  },
  {
    num: "02",
    heading: "I'm A Consultant Or Operator",
    description: "I want to learn more about Nimara Practice Partner roles.",
    buttonText: "See Consultant Roles",
    link: "https://www.notion.so/Consultant-Hire-2bb227f1ee3a8018b693d47e9610c583"
  },
  {
    num: "03",
    heading: "I'm A Funder Or Ecosystem Partner",
    description: "I want to stay in the loop as you build for funders.",
    buttonText: "Join The Waitlist",
    link: "#funder-waitlist"
  }
];

export const ReadyToWork = () => {
  return (
    <section className="py-24 md:py-36 lg:py-44 bg-background relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-muted/50 via-background to-background" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
            Next Steps
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground leading-[1.1]">
            Choose Your Path
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {nextSteps.map((step, index) => (
            <motion.a
              key={index}
              href={step.link}
              target={step.link.startsWith("http") ? "_blank" : undefined}
              rel={step.link.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group block p-8 rounded-3xl bg-card border border-border/50 transition-all duration-300 hover:border-border hover:shadow-xl hover:shadow-black/[0.03]"
            >
              {/* Number */}
              <span className="text-4xl font-light text-primary/40 tabular-nums group-hover:text-primary transition-colors duration-300">
                {step.num}
              </span>

              {/* Content */}
              <h3 className="text-xl font-serif font-medium text-foreground mt-6 mb-3 group-hover:text-primary transition-colors duration-300">
                {step.heading}
              </h3>

              <p className="text-body text-sm mb-8">
                {step.description}
              </p>

              {/* CTA */}
              <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                {step.buttonText}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
