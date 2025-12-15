import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";
import teamBenard from "@/assets/team-benard-new.png";
import teamThabani from "@/assets/team-thabani-new.jpg";
import teamDarryl from "@/assets/team-darryl-new.jpg";
import teamDavid from "@/assets/team-david.jpg";

const operators = [
  {
    name: "Benard Serunyigo",
    role: "Founder & CEO",
    image: teamBenard,
    alt: "Portrait of Benard Serunyigo, Founder of Nimara",
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export const OperatorsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Editorial Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4 block">
              The Team
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-[1.1] mb-6">
              The Operators{" "}
              <span className="italic">Behind Nimara</span>
            </h2>
            <p className="text-lg text-body-muted max-w-3xl leading-relaxed">
              Nimara is built by operators who have served as fund managers, board members, 
              and backbone roles across nonprofits and public-interest work. We care more 
              about working systems than glossy reports.
            </p>
          </motion.div>

          {/* Team Grid */}
          <motion.div 
            variants={containerVariants} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {operators.map((operator) => (
              <motion.div
                key={operator.name}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center">
                  <Avatar className="w-28 h-28 mx-auto mb-6 ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all">
                    <AvatarImage 
                      src={operator.image} 
                      alt={operator.alt} 
                      className="object-cover" 
                    />
                    <AvatarFallback className="bg-primary/10 text-primary text-2xl font-serif">
                      {operator.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {operator.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {operator.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-body-muted mb-6 max-w-2xl mx-auto">
              We also work with a cross-Canada bench of Nimara Practice Partners in finance, 
              HR, governance, fundraising, technology, and operations.
            </p>
            
            <a 
              href="https://www.notion.so/Consultant-Hire-2bb227f1ee3a8018b693d47e9610c583" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-primary font-medium group"
            >
              <span className="relative">
                Learn About Nimara Practice Partners
                <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
