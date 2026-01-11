import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Clock, RefreshCw } from "lucide-react";

const trustPoints = [
  {
    icon: Shield,
    title: "Money-back guarantee",
    description: "If we don't deliver what we scoped, you get a refund. No fine print.",
  },
  {
    icon: Clock,
    title: "90-day support included",
    description: "Questions after launch? We're here. Support is part of every engagement.",
  },
  {
    icon: RefreshCw,
    title: "You own everything",
    description: "Built on tools you already use. No vendor lock-in. No proprietary software.",
  },
];

export default function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="py-24 md:py-32 bg-nim-cloud"
      aria-labelledby="trust-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="text-center"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white shadow-soft mx-auto mb-5 flex items-center justify-center">
                <point.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {point.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
