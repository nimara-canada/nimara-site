import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

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
    initials: "BS"
  },
  {
    name: "Thabani Conrad Bhala",
    role: "Head of Delivery",
    image: teamThabani,
    alt: "Portrait of Thabani Conrad Bhala, Head of Delivery at Nimara",
    initials: "TB"
  },
  {
    name: "Darryl De Dios",
    role: "Impact & Research Lead",
    image: teamDarryl,
    alt: "Portrait of Darryl De Dios, Impact & Research Lead at Nimara",
    initials: "DD"
  },
  {
    name: "David Ton-Lai",
    role: "Technology Lead",
    image: teamDavid,
    alt: "Portrait of David Ton-Lai, Technology Lead at Nimara",
    initials: "DT"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4
    }
  }
};

export const OperatorsSection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            The operators behind Nimara
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nimara is built by operators who have sat in executive director, director, and backbone roles across nonprofits and public-interest work. We care more about working systems than glossy reports.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {operators.map((operator) => (
            <motion.div
              key={operator.name}
              variants={cardVariants}
            >
              <Card className="p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-card border-border">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage 
                    src={operator.image} 
                    alt={operator.alt}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-primary/10 text-primary text-xl">
                    {operator.initials}
                  </AvatarFallback>
                </Avatar>
                
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {operator.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {operator.role}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4 max-w-3xl mx-auto">
            We also work with a cross-Canada bench of Nimara Practice Partners in finance, HR, governance, fundraising, technology, and operations.
          </p>
          
          <a 
            href="https://www.notion.so/Consultant-Hire-2bb227f1ee3a8018b693d47e9610c583"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors group"
          >
            Learn about Nimara Practice Partners
            <svg 
              className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
