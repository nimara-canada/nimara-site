import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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

// Premium card component with magnetic hover effect
const PathCard = ({
  children,
  isHovered,
  onHover,
  onLeave,
  variant = "default",
  delay = 0,
}: {
  children: React.ReactNode;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  variant?: "default" | "featured";
  delay?: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2, -2]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2, 2]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    onLeave();
  };

  const isPrimary = variant === "featured";
  const borderColor = isPrimary ? "border-primary/20" : "border-border/60";
  const hoverBorderColor = isPrimary ? "hover:border-primary/40" : "hover:border-accent/40";
  const glowColor = isPrimary
    ? "from-primary/20 via-primary/10 to-transparent"
    : "from-accent/25 via-accent/10 to-transparent";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      {/* Ambient glow on hover */}
      <motion.div
        className={`absolute -inset-px rounded-[28px] bg-gradient-to-br ${glowColor} blur-xl`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.95,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={onHover}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1200,
        }}
        className={`
          relative h-full rounded-[24px] border ${borderColor} ${hoverBorderColor}
          bg-gradient-to-b from-card/95 to-card/80
          backdrop-blur-xl
          shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08),0_4px_16px_-4px_rgba(0,0,0,0.04)]
          hover:shadow-[0_24px_64px_-16px_rgba(0,0,0,0.12),0_8px_24px_-8px_rgba(0,0,0,0.06)]
          transition-all duration-500 ease-out
          overflow-hidden
        `}
      >
        {/* Subtle inner glow */}
        <div className="absolute inset-0 rounded-[24px] opacity-50 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative p-8 lg:p-10">{children}</div>
      </motion.div>
    </motion.div>
  );
};

// Refined badge component
const Badge = ({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "popular" }) => {
  if (variant === "popular") {
    return (
      <motion.div
        className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-primary/40 rounded-full blur-lg" />
          <div className="relative px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-[11px] font-semibold tracking-[0.08em] uppercase shadow-lg">
            Most Popular
          </div>
        </div>
      </motion.div>
    );
  }
  return (
    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-muted/60 border border-border/50 text-xs text-muted-foreground">
      {children}
    </span>
  );
};

// Premium button component
const PathButton = ({
  onClick,
  variant = "accent",
  isClicked,
  children,
}: {
  onClick: () => void;
  variant?: "accent" | "primary";
  isClicked: boolean;
  children: React.ReactNode;
}) => {
  const baseClasses =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:shadow-primary/25"
      : "bg-accent text-accent-foreground hover:shadow-accent/25";

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        group/btn relative w-full py-4 px-8 rounded-xl font-medium text-[15px]
        ${baseClasses}
        shadow-lg hover:shadow-2xl
        transition-all duration-300 ease-out
        overflow-hidden
        ${isClicked ? "scale-95 opacity-90" : ""}
      `}
    >
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <span className="relative z-10 inline-flex items-center justify-center gap-2">
        <span>{children}</span>
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </span>
    </motion.button>
  );
};

// Elegant tooltip term
const TermTooltip = ({
  term,
  definition,
  linkTo,
  variant = "accent",
}: {
  term: string;
  definition: string;
  linkTo: string;
  variant?: "accent" | "primary";
}) => {
  const underlineColor = variant === "primary" ? "decoration-primary/40" : "decoration-accent/40";
  const linkColor = variant === "primary" ? "text-primary" : "text-accent";

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span
            className={`underline decoration-dotted ${underlineColor} underline-offset-4 cursor-help transition-colors hover:decoration-solid`}
          >
            {term}
          </span>
        </TooltipTrigger>
        <TooltipContent
          className="max-w-[280px] p-4 rounded-xl bg-popover/95 backdrop-blur-xl border-border/50 shadow-xl"
          sideOffset={8}
        >
          <p className="text-sm text-popover-foreground leading-relaxed mb-2">{definition}</p>
          <Link
            to={linkTo}
            className={`inline-flex items-center gap-1 text-xs ${linkColor} font-medium hover:underline`}
          >
            Learn more
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const TwoWaysSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [clickedButton, setClickedButton] = useState<number | null>(null);
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const orbY1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [-60, 120]);

  const handleNavigate = (path: string, buttonId: number) => {
    setClickedButton(buttonId);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => navigate(path), 150);
    }, 200);
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
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-muted/50 border border-border/50 backdrop-blur-sm mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground">
              Choose Your Path
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-foreground mb-6 tracking-[-0.02em] leading-[1.15]"
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
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed font-light"
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
          <PathCard
            isHovered={hoveredCard === 1}
            onHover={() => setHoveredCard(1)}
            onLeave={() => setHoveredCard(null)}
            variant="default"
            delay={0.1}
          >
            {/* Icon */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/15 border border-accent/20">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.75}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
            </div>

            {/* Title & meta */}
            <div className="mb-6">
              <h3 className="text-2xl lg:text-[1.75rem] font-semibold text-foreground mb-3 tracking-[-0.01em]">
                Fast Help
              </h3>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-sm text-muted-foreground">Path A</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="text-sm text-muted-foreground">One urgent problem</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>1–4 weeks</Badge>
                <Badge>Single issue</Badge>
                <Badge>No NOHC</Badge>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                For when one thing is on fire — a scary email, an audit, a funder deadline, or a policy gap.
              </p>

              <div className="pl-4 border-l-2 border-accent/30 space-y-2">
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  One problem, one{" "}
                  <TermTooltip
                    term="mini-bundle"
                    definition="A bundle is a set of policies, templates, trackers, and steps packaged together to solve a specific problem."
                    linkTo="/how-nimara-works#glossary"
                    variant="accent"
                  />
                  , fast turnaround.
                </p>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  No big diagnostic. No health check required.
                </p>
              </div>
            </div>

            {/* Info note */}
            <div className="mb-8 flex items-start gap-2.5 text-sm text-muted-foreground">
              <svg
                className="w-4 h-4 mt-0.5 text-accent shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>No NOHC needed — we go straight to fixing</span>
            </div>

            {/* CTA */}
            <PathButton onClick={() => handleNavigate("/path-a", 1)} variant="accent" isClicked={clickedButton === 1}>
              Get fast help
            </PathButton>
          </PathCard>

          {/* Card 2: Health Check & Systems */}
          <PathCard
            isHovered={hoveredCard === 2}
            onHover={() => setHoveredCard(2)}
            onLeave={() => setHoveredCard(null)}
            variant="featured"
            delay={0.2}
          >
            <Badge variant="popular">Most Popular</Badge>

            {/* Icon */}
            <div className="mb-8 pt-4">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/15 border border-primary/20">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.75}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>
              </div>
            </div>

            {/* Title & meta */}
            <div className="mb-6">
              <h3 className="text-2xl lg:text-[1.75rem] font-semibold text-foreground mb-3 tracking-[-0.01em]">
                Health Check & Systems
              </h3>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-sm text-muted-foreground">Path B</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="text-sm text-muted-foreground">System installs</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>8–12 weeks</Badge>
                <Badge>NOHC + Bundles</Badge>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                For when one or more core systems feel messy — finance, governance, HR, or delivery.
              </p>

              <div className="pl-4 border-l-2 border-primary/30 space-y-2">
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  We start with the Nimara Organizational Health Check (NOHC) to see where each system is today.
                </p>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  Then we pick 1–2{" "}
                  <TermTooltip
                    term="system bundles"
                    definition="A bundle is a set of policies, templates, trackers, and steps packaged together to install or upgrade a specific system area."
                    linkTo="/how-nimara-works#glossary"
                    variant="primary"
                  />{" "}
                  to move those systems up a{" "}
                  <TermTooltip
                    term="Tier"
                    definition="Tiers (0–4) describe how mature each system is. Tier 0 means 'not yet built' and Tier 4 means 'running smoothly at scale.' We help you move up one Tier at a time."
                    linkTo="/how-nimara-works#glossary"
                    variant="primary"
                  />
                  .
                </p>
              </div>
            </div>

            {/* Info note */}
            <div className="mb-8 flex items-start gap-2.5 text-sm text-muted-foreground">
              <svg
                className="w-4 h-4 mt-0.5 text-primary shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>NOHC required — we build on diagnosis</span>
            </div>

            {/* CTA */}
            <PathButton
              onClick={() => handleNavigate("/health-score", 2)}
              variant="primary"
              isClicked={clickedButton === 2}
            >
              Start with a health check
            </PathButton>
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
              <p className="text-sm text-muted-foreground max-w-md">
                Tell us what's going on and we'll help you choose the right approach.
              </p>
            </div>
            <motion.button
              onClick={() => handleNavigate("/book-a-call", 3)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border bg-background text-foreground font-medium text-sm transition-all duration-300 hover:border-accent/50 hover:bg-accent/5"
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
