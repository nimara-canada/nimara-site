import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Check, Calendar, Mail, Clock, Shield, Phone } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  name: z.string().trim().min(1, "Please add your name.").max(100),
  email: z.string().trim().email("Please add a valid email.").max(255),
  organization: z.string().trim().max(200).optional(),
  helpType: z.string().min(1, "Please choose one option."),
  deadline: z.string().optional().refine((val) => {
    if (!val) return true;
    const date = new Date(val);
    return !isNaN(date.getTime());
  }, "Please pick a real date (or leave it blank)."),
  details: z.string().trim().min(1, "Please add a few sentences so we can help.").max(2000),
});

type FormData = z.infer<typeof formSchema>;

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

const BookACall = () => {
  const [activeOption, setActiveOption] = useState<"call" | "form" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isCalendlyLoading, setIsCalendlyLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const bullets = [
    { icon: "01", text: "Listen to what's happening (the one urgent problem)" },
    { icon: "02", text: "Ask a few quick questions so we don't guess" },
    { icon: "03", text: "Tell you the best next step (and timing)" },
    { icon: "04", text: "Leave you with a clear plan for the next 7 days" },
  ];

  const helpOptions = [
    { value: "grant", label: "Grant deadline (proposal, budget, reporting)" },
    { value: "board", label: "Board issue (meeting, decision, conflict)" },
    { value: "money", label: "Money mess (tracking, receipts, reports)" },
    { value: "people", label: "People issue (staff, contractor, role problems)" },
    { value: "program", label: "Program paperwork (proof, files, records)" },
    { value: "other", label: "Other (tell us below)" },
  ];

  const handleOptionClick = (option: "call" | "form") => {
    setActiveOption(option);
    setTimeout(() => {
      const target = document.getElementById(option === "call" ? "scheduler" : "details-form");
      target?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setFormError(false);

    const payload = {
      flow: "urgent_help_form",
      name: data.name,
      email: data.email,
      organization: data.organization || "",
      help_type: data.helpType,
      deadline: data.deadline || "",
      details: data.details,
      utm_source: new URLSearchParams(window.location.search).get("utm_source") || "",
      utm_medium: new URLSearchParams(window.location.search).get("utm_medium") || "",
      utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign") || "",
      referrer: document.referrer,
      timestamp: new Date().toISOString(),
    };

    try {
      await supabase.functions.invoke("send-form-email", {
        body: { formCode: "URGENT_HELP", payload },
      });

      setIsSubmitted(true);
      reset();
      toast.success("Got it — we received your note.");
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onError = () => {
    setFormError(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Start the Free Check | Nimara</title>
        <meta name="description" content="Step 1 of 2: Book a call or send details. We'll help you figure out which path fits your nonprofit." />
        <link rel="canonical" href="https://nimara.ca/book-a-call" />
        <meta property="og:site_name" content="Nimara" />
        <meta property="og:title" content="Start the Free Check | Nimara" />
        <meta property="og:description" content="Step 1 of 2: Book a call or send details. We'll help you figure out which path fits your nonprofit." />
        <meta property="og:url" content="https://nimara.ca/book-a-call" />
        <meta property="og:image" content="https://nimara.ca/og.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Start the Free Check | Nimara" />
        <meta name="twitter:description" content="Step 1 of 2: Book a call or send details. We'll help you figure out which path fits your nonprofit." />
        <meta name="twitter:image" content="https://nimara.ca/og.jpg" />
      </Helmet>
      <Header activeRoute="/book-a-call" />
      
      <main id="main" className="relative z-0" style={{ paddingTop: 'calc(var(--announcement-height, 0px) + 5rem)' }}>
        {/* Hero Section - Navy Background */}
        <section className="relative z-0 bg-secondary-background overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-0 max-w-6xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="max-w-3xl"
            >
              {/* Step indicator with enhanced animation */}
              <motion.div variants={itemVariants} className="mb-6">
                <motion.span 
                  className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-accent/15 border border-accent/30 backdrop-blur-sm relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {/* Animated shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Step dots */}
                  <div className="relative flex items-center gap-1.5">
                    <motion.span 
                      className="w-2.5 h-2.5 rounded-full bg-accent"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <span className="w-2 h-2 rounded-full bg-accent/30" />
                  </div>
                  
                  <span className="relative text-xs font-medium tracking-widest text-accent uppercase">
                    Step 1 of 2
                  </span>
                </motion.span>
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-white leading-[1.1] mb-6"
              >
                Let's figure out what you need
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-white/70 leading-relaxed mb-12 max-w-2xl"
              >
                Book a quick call or send us details—either way, we'll help you find the right path forward. No pressure, no pitch.
              </motion.p>

              {/* Trust badges */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-6"
              >
                {[
                  { icon: Clock, text: "15–30 min" },
                  { icon: Shield, text: "No commitment" },
                  { icon: Check, text: "Clear next step" },
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/60 text-sm">
                    <badge.icon className="w-4 h-4 text-accent" />
                    <span>{badge.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Options Section */}
        <section className="py-20 md:py-28 lg:py-32 bg-background relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-50 via-background to-background" />
          
          <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl mb-16"
            >
              <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
                Choose your path
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-[1.1] mb-6">
                How would you like to connect?
              </h2>
            </motion.div>

            {/* Two Options - Asymmetric Grid */}
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
              {/* Option A: Book a call */}
              <motion.div
                className="lg:col-span-7"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <motion.div 
                  onClick={() => handleOptionClick("call")}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  className={`
                    group h-full rounded-3xl p-8 md:p-10 lg:p-12 cursor-pointer transition-all duration-500 relative overflow-hidden
                    ${activeOption === "call" 
                      ? "bg-secondary-background text-white shadow-2xl shadow-secondary-background/30" 
                      : "bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
                    }
                  `}
                >
                  {/* Glow effect on hover */}
                  <div className={`
                    absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
                    ${activeOption === "call" 
                      ? "bg-gradient-to-br from-accent/10 via-transparent to-transparent" 
                      : "bg-gradient-to-br from-primary/5 via-transparent to-transparent"
                    }
                  `} />
                  
                  {/* Animated border glow */}
                  <div className={`
                    absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
                    ${activeOption === "call" ? "" : "bg-gradient-to-r from-primary/20 via-primary/10 to-transparent"}
                  `} />

                  <div className="relative">
                    <span className={`
                      inline-block text-xs tracking-widest uppercase mb-4
                      ${activeOption === "call" ? "text-accent" : "text-muted-foreground"}
                    `}>
                      Recommended
                    </span>

                    <div className="flex items-start gap-5 mb-6">
                      <motion.div 
                        className={`
                          flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300
                          ${activeOption === "call" ? "bg-accent/20" : "bg-primary/10 group-hover:bg-primary/15 group-hover:shadow-lg group-hover:shadow-primary/20"}
                        `}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        <Calendar className={`w-6 h-6 ${activeOption === "call" ? "text-accent" : "text-primary"}`} />
                      </motion.div>
                      <div>
                        <h3 className={`
                          text-2xl md:text-3xl font-serif font-medium mb-2
                          ${activeOption === "call" ? "text-white" : "text-foreground"}
                        `}>
                          Book a call
                        </h3>
                        <p className={`text-sm ${activeOption === "call" ? "text-white/60" : "text-muted-foreground"}`}>
                          15–30 minutes · Fastest way to get unstuck
                        </p>
                      </div>
                    </div>

                    <p className={`leading-relaxed mb-8 ${activeOption === "call" ? "text-white/80" : "text-body"}`}>
                      Jump on a quick call and we'll help you figure out what's going on, what to prioritize, and what comes next.
                    </p>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOptionClick("call");
                        }}
                        className={`
                          h-12 px-6 rounded-full font-medium transition-all duration-300
                          ${activeOption === "call" 
                            ? "bg-accent text-secondary-background hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/30" 
                            : "bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
                          }
                        `}
                      >
                        Book a call
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Option B: Send details */}
              <motion.div
                className="lg:col-span-5"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <motion.div 
                  onClick={() => handleOptionClick("form")}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  className={`
                    group h-full rounded-3xl p-8 md:p-10 cursor-pointer transition-all duration-500 relative overflow-hidden
                    ${activeOption === "form" 
                      ? "bg-secondary-background text-white shadow-2xl shadow-secondary-background/30" 
                      : "bg-card border border-border/50 hover:border-muted-foreground/30 hover:shadow-xl hover:shadow-black/5"
                    }
                  `}
                >
                  {/* Subtle glow effect */}
                  <div className={`
                    absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
                    ${activeOption === "form" 
                      ? "bg-gradient-to-br from-white/5 via-transparent to-transparent" 
                      : "bg-gradient-to-br from-muted-foreground/5 via-transparent to-transparent"
                    }
                  `} />

                  <div className="relative">
                    <span className={`
                      inline-block text-xs tracking-widest uppercase mb-4
                      ${activeOption === "form" ? "text-white/50" : "text-muted-foreground"}
                    `}>
                      Alternative
                    </span>

                    <div className="flex items-start gap-5 mb-6">
                      <motion.div 
                        className={`
                          flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300
                          ${activeOption === "form" ? "bg-white/10" : "bg-muted group-hover:bg-muted/80"}
                        `}
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        <Mail className={`w-6 h-6 ${activeOption === "form" ? "text-white" : "text-muted-foreground"}`} />
                      </motion.div>
                      <div>
                        <h3 className={`
                          text-xl md:text-2xl font-serif font-medium mb-2
                          ${activeOption === "form" ? "text-white" : "text-foreground"}
                        `}>
                          Send details instead
                        </h3>
                        <p className={`text-sm ${activeOption === "form" ? "text-white/60" : "text-muted-foreground"}`}>
                          2–3 minutes · We'll reply by email
                        </p>
                      </div>
                    </div>

                    <p className={`leading-relaxed mb-8 ${activeOption === "form" ? "text-white/80" : "text-body"}`}>
                      Not ready to meet yet? Send us your details and we'll get back to you.
                    </p>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOptionClick("form");
                        }}
                        className={`
                          h-12 px-6 rounded-full font-medium transition-all duration-300
                          ${activeOption === "form" 
                            ? "border-white/30 text-white hover:bg-white/10" 
                            : "border-border hover:border-foreground/30 hover:shadow-md"
                          }
                        `}
                      >
                        Send details
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* What we'll do section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-20 md:mt-28"
            >
              <div className="max-w-3xl mx-auto">
                <p className="text-sm tracking-widest text-muted-foreground uppercase mb-8 text-center">
                  What we'll do on the call
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {bullets.map((bullet, index) => (
                    <div 
                      key={index}
                      className="flex gap-4 p-5 rounded-2xl bg-card border border-border/50"
                    >
                      <span className="text-2xl font-light text-primary/50 tabular-nums">
                        {bullet.icon}
                      </span>
                      <p className="text-body text-sm leading-relaxed">
                        {bullet.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Alternative contact options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 md:mt-20"
            >
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  {/* Divider with text */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex-1 h-px bg-border/50" />
                    <span className="text-xs tracking-widest text-muted-foreground uppercase">
                      Or reach us directly
                    </span>
                    <div className="flex-1 h-px bg-border/50" />
                  </div>

                  {/* Contact options */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
                    {/* Phone */}
                    <motion.a
                      href="tel:+15874931018"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                        <Phone className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-left">
                        <p className="text-xs text-muted-foreground">Call us</p>
                        <p className="text-sm font-medium text-foreground">587-493-1018</p>
                      </div>
                    </motion.a>

                    {/* Email */}
                    <motion.a
                      href="mailto:hello@nimara.ca"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-left">
                        <p className="text-xs text-muted-foreground">Email us</p>
                        <p className="text-sm font-medium text-foreground">hello@nimara.ca</p>
                      </div>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Calendar Section */}
        <AnimatePresence>
          {activeOption === "call" && (
            <motion.section 
              id="scheduler" 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-secondary-background overflow-hidden"
            >
              <div className="py-20 md:py-28 px-6">
                <div className="max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-12"
                  >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-xs font-medium tracking-widest text-accent uppercase">
                        Pick a time
                      </span>
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-4">
                      When works for you?
                    </h2>
                    <p className="text-white/60">
                      Times show in your local timezone
                    </p>
                  </motion.div>

                  <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-black/20 relative">
                    <div className="w-full" style={{ minHeight: "680px" }}>
                      {isCalendlyLoading && (
                        <div className="absolute inset-0 bg-muted/30 animate-pulse flex flex-col items-center justify-center gap-4 z-10">
                          <div className="w-16 h-16 rounded-full bg-muted animate-pulse" />
                          <div className="h-4 w-48 bg-muted rounded animate-pulse" />
                          <div className="h-3 w-32 bg-muted rounded animate-pulse" />
                        </div>
                      )}
                      <iframe
                        src="https://calendly.com/hello-nimara/30min"
                        width="100%"
                        height="680"
                        frameBorder="0"
                        title="Book an urgent help call"
                        className={`w-full transition-opacity duration-300 ${isCalendlyLoading ? 'opacity-0' : 'opacity-100'}`}
                        onLoad={() => setIsCalendlyLoading(false)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Form Section */}
        <AnimatePresence>
          {activeOption === "form" && (
            <motion.section 
              id="details-form"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-muted/30 overflow-hidden"
            >
              <div className="py-20 md:py-28 px-6">
                <div className="max-w-xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-12"
                  >
                    <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">
                      Tell us what's happening
                    </p>
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground">
                      Send details
                    </h2>
                  </motion.div>

                  {isSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center p-10 rounded-3xl border border-border bg-card shadow-lg"
                    >
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mx-auto mb-6">
                        <Check className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-2xl font-serif font-medium text-foreground mb-3">
                        Got it — we received your note.
                      </h3>
                      <p className="text-body mb-6">
                        We'll reply by email as soon as we can.
                      </p>
                      <button 
                        onClick={() => {
                          setActiveOption("call");
                          setIsSubmitted(false);
                          setTimeout(() => {
                            document.getElementById("scheduler")?.scrollIntoView({ behavior: "smooth" });
                          }, 100);
                        }}
                        className="group inline-flex items-center gap-2 text-primary font-medium"
                      >
                        <span className="relative">
                          Need help sooner? Book a call instead
                          <span className="absolute left-0 -bottom-0.5 w-full h-px bg-primary/30 group-hover:bg-primary transition-colors duration-300" />
                        </span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="rounded-3xl border border-border p-8 md:p-10 bg-card shadow-lg"
                    >
                      {formError && Object.keys(errors).length > 0 && (
                        <div className="mb-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                          <p className="text-sm text-destructive font-medium">
                            One more step: please fix the highlighted fields.
                          </p>
                        </div>
                      )}

                      <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-6">
                        {/* Name */}
                        <div>
                          <Label htmlFor="name" className="text-foreground mb-2 block font-medium">
                            Name <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="name"
                            type="text"
                            autoComplete="name"
                            {...register("name")}
                            className={`h-12 rounded-xl ${errors.name ? "border-destructive" : ""}`}
                          />
                          <p className="text-xs text-muted-foreground mt-2">
                            So we know what to call you.
                          </p>
                          {errors.name && (
                            <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <Label htmlFor="email" className="text-foreground mb-2 block font-medium">
                            Email <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            autoComplete="email"
                            {...register("email")}
                            className={`h-12 rounded-xl ${errors.email ? "border-destructive" : ""}`}
                          />
                          <p className="text-xs text-muted-foreground mt-2">
                            We'll reply here. No spam.
                          </p>
                          {errors.email && (
                            <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                          )}
                        </div>

                        {/* Organization */}
                        <div>
                          <Label htmlFor="organization" className="text-foreground mb-2 block font-medium">
                            Organization name <span className="text-muted-foreground font-normal">(optional)</span>
                          </Label>
                          <Input
                            id="organization"
                            type="text"
                            autoComplete="organization"
                            {...register("organization")}
                            className="h-12 rounded-xl"
                          />
                          <p className="text-xs text-muted-foreground mt-2">
                            If you have one.
                          </p>
                        </div>

                        {/* Help Type Dropdown */}
                        <div>
                          <Label htmlFor="helpType" className="text-foreground mb-2 block font-medium">
                            What do you need help with? <span className="text-destructive">*</span>
                          </Label>
                          <Select onValueChange={(value) => setValue("helpType", value)}>
                            <SelectTrigger className={`h-12 rounded-xl ${errors.helpType ? "border-destructive" : ""}`}>
                              <SelectValue placeholder="Choose one…" />
                            </SelectTrigger>
                            <SelectContent className="bg-background z-50 rounded-xl">
                              {helpOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.helpType && (
                            <p className="text-destructive text-sm mt-1">{errors.helpType.message}</p>
                          )}
                        </div>

                        {/* Deadline */}
                        <div>
                          <Label htmlFor="deadline" className="text-foreground mb-2 block font-medium">
                            Deadline <span className="text-muted-foreground font-normal">(optional)</span>
                          </Label>
                          <Input
                            id="deadline"
                            type="date"
                            {...register("deadline")}
                            className={`h-12 rounded-xl ${errors.deadline ? "border-destructive" : ""}`}
                          />
                          <p className="text-xs text-muted-foreground mt-2">
                            If there's a date we should know about.
                          </p>
                          {errors.deadline && (
                            <p className="text-destructive text-sm mt-1">{errors.deadline.message}</p>
                          )}
                        </div>

                        {/* Details Textarea */}
                        <div>
                          <Label htmlFor="details" className="text-foreground mb-2 block font-medium">
                            Tell us what's going on <span className="text-destructive">*</span>
                          </Label>
                          <Textarea
                            id="details"
                            rows={4}
                            {...register("details")}
                            className={`rounded-xl ${errors.details ? "border-destructive" : ""}`}
                          />
                          <p className="text-xs text-muted-foreground mt-2">
                            3–5 sentences is perfect. What happened, what's the deadline, and what do you need?
                          </p>
                          {errors.details && (
                            <p className="text-destructive text-sm mt-1">{errors.details.message}</p>
                          )}
                        </div>

                        {/* Submit Button */}
                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full h-14 rounded-full bg-primary hover:bg-primary/90 text-white font-medium"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending…" : "Send my details"}
                          {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
                        </Button>

                        {/* Safety Line */}
                        <p className="text-xs text-muted-foreground text-center pt-2">
                          Please don't include private health info or anything very sensitive.
                        </p>
                      </form>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default BookACall;
