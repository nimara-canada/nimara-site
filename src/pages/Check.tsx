import React, { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Clock, Sparkles, CheckCircle, Loader2, Shield, Wallet, Users, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

const Check = () => {
  const [searchParams] = useSearchParams();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const email = searchParams.get("email") || "";

  const buildTypeformUrl = () => {
    const baseUrl = "https://form.typeform.com/to/u6fstodH";
    const params = [];
    if (email) {
      params.push(`email=${encodeURIComponent(email)}`);
    }
    params.push("source=hero");
    return `${baseUrl}#${params.join("&")}`;
  };

  const typeformUrl = buildTypeformUrl();

  const handleContinue = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      window.location.href = typeformUrl;
    }, 800);
  };

  const checkItems = [
    { icon: Shield, label: "Board & policies", desc: "who decides what", color: "bg-primary/10 text-primary" },
    { icon: Wallet, label: "Money & tracking", desc: "budgets, reports, receipts", color: "bg-accent/20 text-secondary-background" },
    { icon: Users, label: "People & roles", desc: "staff, contractors, HR basics", color: "bg-primary/10 text-primary" },
    { icon: FolderOpen, label: "Programs & files", desc: "proof of work, tidy records", color: "bg-amber-100 text-amber-600" },
  ];

  const quickInfo = [
    { icon: Clock, text: "Takes about 4 minutes", iconClass: "text-muted-foreground" },
    { icon: Sparkles, text: "Mostly taps (no long typing)", iconClass: "text-amber-500" },
    { icon: CheckCircle, text: "You'll get a clear next step at the end", iconClass: "text-primary" },
  ];

  return (
    <main className="min-h-screen bg-secondary-background flex items-center justify-center px-4 py-12 sm:py-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-2xl"
      >
        {/* Step indicator */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent">
            Step 1 of 2
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-white leading-[1.1] mb-6"
        >
          You're{" "}
          <span className="italic text-accent">almost there.</span>
        </motion.h1>

        {/* Card container */}
        <motion.div 
          variants={itemVariants}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 mb-8"
        >
          {/* What this check is */}
          <div className="mb-8">
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-white/50 mb-3 block">
              What this check is
            </span>
            <p className="text-lg text-white/80 leading-relaxed">
              This <span className="text-accent font-semibold">FREE</span> quick check shows if your 
              nonprofit has the systems funders look for—so grants are easier and audits feel less stressful.
            </p>
          </div>

          {/* We'll check section */}
          <div className="mb-8">
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-white/50 mb-4 block">
              We'll check
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {checkItems.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm mb-0.5">{item.label}</p>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why it matters */}
          <div className="p-4 rounded-xl bg-accent/10 border-l-4 border-accent">
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              <span className="font-semibold text-white">Why it matters:</span>{" "}
              <span className="italic">You'll get a clear next step at the end: What to fix or a calendar 
              invite to learn more about your systems for better next steps.</span>
            </p>
          </div>
        </motion.div>

        {/* Quick info */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-6 mb-8">
          {quickInfo.map((info, index) => (
            <div key={index} className="flex items-center gap-2 text-white/70">
              <info.icon className={`w-4 h-4 ${info.iconClass}`} aria-hidden="true" />
              <span className="text-sm">{info.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Redirect status */}
        {isRedirecting && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 text-accent mb-4"
          >
            <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
            <span className="text-sm">Sending you there now…</span>
          </motion.div>
        )}

        {/* Primary button */}
        <motion.div variants={itemVariants}>
          <Button
            onClick={handleContinue}
            disabled={isRedirecting}
            size="lg"
            className="w-full h-14 bg-accent text-secondary-background hover:bg-accent/90 font-semibold text-base rounded-xl group"
          >
            Continue to the check
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Button>
        </motion.div>

        {/* Secondary links */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-6 mt-6 mb-8">
          {email && (
            <Link 
              to="/" 
              className="text-sm text-white/40 hover:text-white/60 transition-colors group"
            >
              <span className="relative">
                Change email
                <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-white/60 transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
          )}
          <Link 
            to="/" 
            className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white/60 transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span className="relative">
              Back to home
              <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-white/60 transition-all duration-300 group-hover:w-full" />
            </span>
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.p variants={itemVariants} className="text-xs text-white/30 text-center">
          We only use your email to send your results. No spam.
        </motion.p>
      </motion.div>
    </main>
  );
};

export default Check;
