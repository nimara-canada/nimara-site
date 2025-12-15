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
    { icon: Shield, label: "Board & Policies", desc: "Who Decides What", color: "bg-primary/10 text-primary" },
    { icon: Wallet, label: "Money & Tracking", desc: "Budgets, Reports, Receipts", color: "bg-accent/20 text-secondary-background" },
    { icon: Users, label: "People & Roles", desc: "Staff, Contractors, HR Basics", color: "bg-primary/10 text-primary" },
    { icon: FolderOpen, label: "Programs & Files", desc: "Proof Of Work, Tidy Records", color: "bg-amber-100 text-amber-600" },
  ];

  const quickInfo = [
    { icon: Clock, text: "Takes About 4 Minutes", iconClass: "text-muted-foreground" },
    { icon: Sparkles, text: "Mostly Taps (No Long Typing)", iconClass: "text-amber-500" },
    { icon: CheckCircle, text: "You'll Get A Clear Next Step At The End", iconClass: "text-primary" },
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
            Step 1 Of 2
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-white leading-[1.1] mb-6"
        >
          {"You're"}{" "}
          <span className="italic text-accent">Almost There.</span>
        </motion.h1>

        {/* Card container */}
        <motion.div 
          variants={itemVariants}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 mb-8"
        >
          {/* What this check is */}
          <div className="mb-8">
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-white/50 mb-3 block">
              What This Check Is
            </span>
            <p className="text-lg text-white/80 leading-relaxed">
              This <span className="text-accent font-semibold">FREE</span> Quick Check Shows If Your 
              Nonprofit Has The Systems Funders Look For—So Grants Are Easier And Audits Feel Less Stressful.
            </p>
          </div>

          {/* We'll check section */}
          <div className="mb-8">
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-white/50 mb-4 block">
              {"We'll Check"}
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
              <span className="font-semibold text-white">Why It Matters:</span>{" "}
              <span className="italic">{"You'll Get A Clear Next Step At The End: What To Fix Or A Calendar Invite To Learn More About Your Systems For Better Next Steps."}</span>
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
            <span className="text-sm">Sending You There Now…</span>
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
            Continue To The Check
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
                Change Email
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
              Back To Home
              <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-white/60 transition-all duration-300 group-hover:w-full" />
            </span>
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.p variants={itemVariants} className="text-xs text-white/30 text-center">
          We Only Use Your Email To Send Your Results. No Spam.
        </motion.p>
      </motion.div>
    </main>
  );
};

export default Check;
