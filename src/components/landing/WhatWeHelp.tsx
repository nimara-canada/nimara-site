import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  ClipboardList, 
  DollarSign, 
  Users, 
  BarChart3, 
  Heart, 
  HandHelping, 
  FolderOpen 
} from "lucide-react";

const areas = [
  {
    icon: ClipboardList,
    title: "Board & Governance",
    description: "Meetings, minutes, decisions, approvals",
  },
  {
    icon: DollarSign,
    title: "Money & Grants",
    description: "Receipts, payments, budgets, grant tracking",
  },
  {
    icon: Users,
    title: "People",
    description: "Contracts, onboarding, roles, records",
  },
  {
    icon: BarChart3,
    title: "Programs",
    description: "Services, outcomes, impact tracking",
  },
  {
    icon: Heart,
    title: "Fundraising",
    description: "Donors, gifts, acknowledgments",
  },
  {
    icon: HandHelping,
    title: "Volunteers",
    description: "Recruitment, hours, recognition",
  },
  {
    icon: FolderOpen,
    title: "Tools & Files",
    description: "Templates, folders, routines",
  },
];

export default function WhatWeHelp() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="py-24 md:py-32 lg:py-40 bg-background"
      aria-labelledby="areas-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-6"
          >
            What We Help With
          </motion.p>

          <motion.h2
            id="areas-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-foreground mb-4"
          >
            Pick 1 area. Or more.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Most teams start with Money & Grants or Board. Build from there.
          </motion.p>
        </div>

        {/* Areas Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
              className="group p-6 rounded-2xl bg-nim-cloud hover:bg-white hover:shadow-soft transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <area.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {area.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground">
                {area.description}
              </p>
            </motion.div>
          ))}

          {/* "All Connected" Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="p-6 rounded-2xl bg-primary text-primary-foreground flex flex-col justify-center"
          >
            <p className="text-sm uppercase tracking-wider opacity-70 mb-2">
              The best part
            </p>
            <p className="text-xl font-semibold">
              Everything connects to the proof trail.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
