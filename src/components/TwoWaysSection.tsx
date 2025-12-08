import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

// Premium animated background orb
const GlowOrb = ({
  className,
  color = "primary",
  size = 600,
  blur = 120,
  style,
}: {
  className?: string;
  color?: "primary" | "accent";
  size?: number;
  blur?: number;
  style?: React.CSSProperties;
}) => (
  <motion.div
    className={`absolute rounded-full pointer-events-none ${className}`}
    style={{
      width: size,
      height: size,
      background:
        color === "primary"
          ? "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, hsl(var(--primary) / 0.05) 40%, transparent 70%)"
          : "radial-gradient(circle, hsl(var(--accent) / 0.2) 0%, hsl(var(--accent) / 0.08) 40%, transparent 70%)",
      filter: `blur(${blur}px)`,
      ...style,
    }}
  />
);

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
  const isPrimary = variant === "featured";
  const accentColor = isPrimary ? "bg-primary/15" : "bg-accent/15";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      <div className="relative h-full rounded-2xl border border-border/60 bg-card overflow-hidden transition-shadow duration-300 hover:shadow-lg">
        {/* Accent stripe on right side */}
        <div className={`absolute top-0 right-0 w-16 h-32 ${accentColor} rounded-bl-[4rem]`} />
        
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
  const bgColor = variant === "primary" ? "bg-primary/10" : "bg-accent/10";
  const textColor = variant === "primary" ? "text-primary" : "text-accent";
  const borderColor = variant === "primary" ? "border-primary/20" : "border-accent/20";
  
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${bgColor} border ${borderColor} text-sm font-medium ${textColor}`}>
      {icon}
      {children}
    </span>
  );
};

// Checkmark list item
const CheckItem = ({ children, variant = "accent" }: { children: React.ReactNode; variant?: "accent" | "primary" }) => {
  const iconColor = variant === "primary" ? "text-primary" : "text-accent";
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
  const textColor = variant === "primary" ? "text-primary" : "text-accent";
  
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
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const orbY1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [-60, 120]);

  const handleNavigate = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => navigate(path), 150);
  };

  return (
    <section ref={sectionRef} className="relative py-28 md:py-40 px-6 bg-background overflow-hidden">
      {/* Premium ambient background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs with parallax */}
        <motion.div style={{ y: orbY1 }}>
          <GlowOrb className="-top-[200px] -right-[200px]" color="primary" size={800} blur={150} />
        </motion.div>
        <motion.div style={{ y: orbY2 }}>
          <GlowOrb className="-bottom-[150px] -left-[200px]" color="accent" size={700} blur={130} />
        </motion.div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating particles - minimal and elegant */}
        {!isMobile &&
          [...Array(6)].map((_, i) => {
            const positions = [
              { left: "12%", top: "20%" },
              { left: "88%", top: "15%" },
              { left: "8%", top: "75%" },
              { left: "92%", top: "70%" },
              { left: "50%", top: "8%" },
              { left: "45%", top: "92%" },
            ];
            const pos = positions[i];
            const delay = i * 0.8;
            const size = 4 + (i % 2) * 2;

            return (
              <motion.div
                key={i}
                className="absolute rounded-full bg-foreground/10"
                style={{
                  width: size,
                  height: size,
                  left: pos.left,
                  top: pos.top,
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 8 + i,
                  delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })}
      </div>

      <div className="relative max-w-6xl mx-auto">
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
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-secondary-background border border-secondary-background shadow-md mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-primary-foreground">
              Choose Your Path
            </span>
          </motion.div>

          <motion.h2
            className="heading-2 text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Two ways to work
            <br />
            <span className="relative inline-block mt-1">
              with{" "}
              <span className="relative">
                <span className="relative z-10">Nimara</span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-accent/40 via-primary/30 to-accent/40 rounded-full -z-0"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  style={{ originX: 0 }}
                />
              </span>
            </span>
          </motion.h2>

          <motion.p
            className="text-subtitle max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Whether you need rapid response or systematic transformation, we meet you where you are.
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

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-4">
              Path A: Rapid Response
            </h3>

            {/* Description */}
            <p className="text-body leading-relaxed mb-6">
              Fix one urgent issue fast. Board crisis? HR mess? Grant deadline? We jump in, solve the problem, and get out. No lengthy assessments required.
            </p>

            {/* Checklist */}
            <div className="space-y-3 mb-8">
              <CheckItem variant="accent">1–4 weeks typical timeline</CheckItem>
              <CheckItem variant="accent">One problem, one solution</CheckItem>
              <CheckItem variant="accent">No Health Check required</CheckItem>
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
                Full Systems
              </PathBadge>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-4">
              Path B: Health Check & Systems
            </h3>

            {/* Description */}
            <p className="text-body leading-relaxed mb-6">
              Build lasting organizational strength. We assess your systems, identify gaps, then install 1–2 complete bundles. This is how you become truly funder-ready.
            </p>

            {/* Checklist */}
            <div className="space-y-3 mb-8">
              <CheckItem variant="primary">8–12 weeks comprehensive process</CheckItem>
              <CheckItem variant="primary">NOHC assessment included</CheckItem>
              <CheckItem variant="primary">1–2 system bundles installed</CheckItem>
            </div>

            {/* CTA */}
            <LinkCTA onClick={() => handleNavigate("/health-score")} variant="primary">
              Start your assessment
            </LinkCTA>
          </PathCard>
        </div>

        {/* Bottom CTA section */}
        <motion.div
          className="mt-16 md:mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 rounded-2xl bg-muted/30 border border-border/50 backdrop-blur-sm">
            <div className="text-center">
              <p className="text-base font-medium text-foreground mb-1">Not sure which path fits?</p>
              <p className="text-sm text-body-muted max-w-md">
                Tell us what's going on and we'll help you choose the right approach.
              </p>
            </div>
            <motion.button
              onClick={() => handleNavigate("/book-a-call")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-secondary-background text-primary-foreground font-medium text-sm transition-all duration-300 hover:opacity-90 shadow-md"
            >
              Talk through options
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TwoWaysSection;
