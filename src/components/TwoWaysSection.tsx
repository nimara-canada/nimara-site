import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Clean card with accent stripe
const PathCard = ({
  children,
  variant = "default",
  delay = 0,
}: {
  children: React.ReactNode;
  variant?: "default" | "featured";
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      <div className="relative h-full rounded-2xl border border-border/40 bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-border/60">
        {/* Accent stripe on right side - navy for consistency */}
        <div 
          className="absolute -top-4 -right-4 w-28 h-40 bg-secondary-background/10"
          style={{ 
            borderRadius: '0 0 0 100%',
          }} 
        />
        
        {/* Content */}
        <div className="relative p-8 lg:p-10">{children}</div>
      </div>
    </motion.div>
  );
};

// Simple pill badge at top of card
const PathBadge = ({ 
  icon, 
  children, 
  variant = "accent" 
}: { 
  icon: React.ReactNode;
  children: React.ReactNode; 
  variant?: "accent" | "primary";
}) => {
  // Use darker teal for accent text to meet WCAG AA contrast on white bg
  const bgColor = variant === "primary" ? "bg-primary/10" : "bg-teal-50";
  const textColor = variant === "primary" ? "text-primary" : "text-teal-700";
  const borderColor = variant === "primary" ? "border-primary/20" : "border-teal-200";
  
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${bgColor} border ${borderColor} text-sm font-medium ${textColor}`}>
      {icon}
      {children}
    </span>
  );
};

// Checkmark list item
const CheckItem = ({ children, variant = "accent" }: { children: React.ReactNode; variant?: "accent" | "primary" }) => {
  // Use darker teal for accent checkmarks to meet accessibility
  const iconColor = variant === "primary" ? "text-primary" : "text-teal-600";
  return (
    <div className="flex items-center gap-3">
      <svg className={`w-5 h-5 ${iconColor} shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-body">{children}</span>
    </div>
  );
};

// Link-style CTA button
const LinkCTA = ({ 
  onClick, 
  variant = "accent", 
  children 
}: { 
  onClick: () => void; 
  variant?: "accent" | "primary"; 
  children: React.ReactNode;
}) => {
  // Use darker teal for accent links to meet accessibility
  const textColor = variant === "primary" ? "text-primary" : "text-teal-700";
  
  return (
    <button
      onClick={onClick}
      className={`group/link inline-flex items-center gap-2 font-medium ${textColor} hover:opacity-80 transition-opacity`}
    >
      <span>{children}</span>
      <svg
        className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </button>
  );
};

export const TwoWaysSection = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => navigate(path), 150);
  };

  return (
    <section className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header section */}
        <motion.div
          className="text-center mb-20 md:mb-28"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Refined pill badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-background mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-sm font-medium text-white">
              Two paths forward
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Two Ways We Work
          </motion.h2>

          <motion.p
            className="text-subtitle max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Choose what fits your situation: quick fixes or full system installation.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Fast Help */}
          <PathCard variant="default" delay={0.1}>
            {/* Badge */}
            <div className="mb-6">
              <PathBadge 
                variant="accent"
                icon={
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                }
              >
                Fast Help
              </PathBadge>
            </div>

            {/* Title & Sub-label */}
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-1">
              Fast Help
            </h3>
            <p className="text-sm text-muted-foreground mb-2">Path A – rapid response</p>
            <p className="text-sm text-teal-700 font-medium mb-5">1–4 weeks • One problem, one solution</p>

            {/* Description */}
            <p className="text-body leading-relaxed mb-5">
              Fix one urgent issue fast. Board crisis? HR mess? Grant deadline? We jump in, solve the problem, and get out.
            </p>

            {/* Explanatory block */}
            <div className="bg-teal-50 border-l-2 border-teal-300 pl-4 py-3 mb-8 rounded-r-lg">
              <p className="text-body-muted text-sm leading-relaxed">
                No lengthy assessments required. We scope your problem, match you with the right expertise, and deliver a focused fix you can run with.
              </p>
            </div>

            {/* CTA */}
            <LinkCTA onClick={() => handleNavigate("/path-a")} variant="accent">
              Get urgent help
            </LinkCTA>
          </PathCard>

          {/* Card 2: Health Check & Systems */}
          <PathCard variant="featured" delay={0.2}>
            {/* Badge */}
            <div className="mb-6">
              <PathBadge 
                variant="primary"
                icon={
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                  </svg>
                }
              >
                NOHC Snapshot & Systems
              </PathBadge>
            </div>

            {/* Title & Sub-label */}
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-1">
              NOHC Snapshot & Systems
            </h3>
            <p className="text-sm text-muted-foreground mb-2">Path B – system installs</p>
            <p className="text-sm text-primary font-medium mb-5">NOHC Snapshot ($2,500) + 8–12 weeks per system bundle</p>

            {/* Description */}
            <p className="text-body leading-relaxed mb-5">
              For when one or more core systems feel messy – finance, governance, HR, programs, or delivery.
            </p>

            {/* Explanatory block */}
            <div className="bg-primary/5 border-l-2 border-primary/30 pl-4 py-3 mb-8 rounded-r-lg">
              <p className="text-body-muted text-sm leading-relaxed">
                We start with a <strong className="text-foreground">NOHC Snapshot ($2,500 fixed fee)</strong> – a ~2-week health check that shows where each system sits on our Tier ladder. Then we design a System Phase using 1–2 bundles to move those systems up a Tier.
              </p>
            </div>

            {/* CTA */}
            <LinkCTA onClick={() => handleNavigate("/health-score")} variant="primary">
              Learn about NOHC Snapshot
            </LinkCTA>
          </PathCard>
        </div>

        {/* Bottom CTA section */}
        <motion.div
          className="mt-16 md:mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-foreground font-medium mb-1">Not sure where you fit?</p>
          <p className="text-body-muted text-sm max-w-lg mx-auto mb-4">
            Tell us what's going on and we'll help you decide between Fast Help (Path A) and an NOHC Snapshot + System Phase (Path B) on a short call.
          </p>
          <button
            onClick={() => handleNavigate("/book-a-call")}
            className="inline-flex items-center gap-2 text-primary font-medium hover:opacity-80 transition-opacity"
          >
            Talk through options
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TwoWaysSection;
