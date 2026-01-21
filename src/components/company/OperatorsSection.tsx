import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import teamBenard from "@/assets/team-benard-new.png";
import teamThabani from "@/assets/team-thabani-new.jpg";
import teamDarryl from "@/assets/team-darryl-new.jpg";
import teamDavid from "@/assets/team-david.jpg";

const operators = [
  {
    name: "Ben Serunyigo",
    role: "Founder & CEO",
    image: teamBenard,
    alt: "Portrait of Ben Serunyigo, Founder of Nimara",
    initials: "BS",
  },
  {
    name: "Thabani Conrad Bhala",
    role: "Head of Delivery",
    image: teamThabani,
    alt: "Portrait of Thabani Conrad Bhala, Head of Delivery at Nimara",
    initials: "TB",
  },
  {
    name: "Darryl De Dios",
    role: "Impact & Research Lead",
    image: teamDarryl,
    alt: "Portrait of Darryl De Dios, Impact & Research Lead at Nimara",
    initials: "DD",
  },
  {
    name: "David Ton-Lai",
    role: "Technology Lead",
    image: teamDavid,
    alt: "Portrait of David Ton-Lai, Technology Lead at Nimara",
    initials: "DT",
  },
];

export const OperatorsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4"
          >
            The Team
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.05] tracking-[-0.03em] mb-6"
          >
            We're operators, <span className="text-primary">not just advisors</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Our team has worked inside nonprofits and funding programs. We know how messy it gets — and what actually helps.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {operators.map((operator, index) => (
            <motion.div
              key={operator.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="h-full rounded-2xl bg-muted/30 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src={operator.image} 
                    alt={operator.alt} 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    style={{ filter: 'grayscale(100%)' }}
                  />
                  <div className="absolute inset-0 bg-nim-purple/0 group-hover:bg-nim-purple/10 transition-colors duration-300" />
                </div>
                
                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {operator.name}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {operator.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Link 
            to="/start-here"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-nim-purple text-white font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
          >
            Start here
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
