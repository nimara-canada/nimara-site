import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Heart, Users, Sparkles, DollarSign, RefreshCw } from "lucide-react";

const commitments = [
  {
    title: "Simple over fancy",
    description: "We build what works, not what looks impressive.",
    icon: Sparkles,
    color: "bg-nim-purple/10",
    iconColor: "text-nim-purple"
  },
  {
    title: "Build it so your team can run it",
    description: "We set up systems people will actually use.",
    icon: Users,
    color: "bg-nim-mint/30",
    iconColor: "text-nim-navy"
  },
  {
    title: "No shame, no blame",
    description: "We meet you where you are, not where you should be.",
    icon: Heart,
    color: "bg-nim-purple/10",
    iconColor: "text-nim-purple"
  },
  {
    title: "Clear scope and clear pricing",
    description: "You know what you're getting before we start.",
    icon: DollarSign,
    color: "bg-nim-mint/30",
    iconColor: "text-nim-navy"
  },
  {
    title: "Reusable systems you can keep using",
    description: "What we build works for the next grant too.",
    icon: RefreshCw,
    color: "bg-nim-purple/10",
    iconColor: "text-nim-purple"
  }
];

export const OurCommitments = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="py-24 lg:py-32"
      style={{ backgroundColor: '#faf8f5' }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4"
          >
            Our Values
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight"
          >
            What we <span className="text-primary">stand for</span>
          </motion.h2>
        </div>

        {/* Commitment cards - 3 column grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {commitments.map((commitment, index) => {
            const Icon = commitment.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-white border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl ${commitment.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${commitment.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {commitment.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {commitment.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Small note */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-muted-foreground italic"
        >
          If we can't help, we'll tell you early.
        </motion.p>
      </div>
    </section>
  );
};
