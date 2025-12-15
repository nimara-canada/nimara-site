import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Helmet } from "react-helmet";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ExternalLink, Clock, MessageSquare, Shield } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

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

const callbackSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(20),
});

type CallbackFormData = z.infer<typeof callbackSchema>;

const features = [
  { icon: Clock, text: "30-minute hold, most calls ~15 minutes" },
  { icon: MessageSquare, text: "Map your outcome and pick the fastest path" },
  { icon: Shield, text: "Get answers to compliance and data questions" },
];

const BookACall = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const heroRef = useRef(null);
  const schedulerRef = useRef(null);
  const callbackRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const schedulerInView = useInView(schedulerRef, { once: true, margin: "-100px" });
  const callbackInView = useInView(callbackRef, { once: true, margin: "-100px" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CallbackFormData>({
    resolver: zodResolver(callbackSchema),
  });

  const scrollToScheduler = () => {
    const scheduler = document.getElementById("scheduler");
    scheduler?.scrollIntoView({ behavior: "smooth" });
  };

  const onSubmit = async (data: CallbackFormData) => {
    setIsSubmitting(true);

    const payload = {
      flow: "book_call_callback",
      cb_name: data.name,
      cb_email: data.email,
      cb_phone: data.phone,
      utm_source: new URLSearchParams(window.location.search).get("utm_source") || "",
      utm_medium: new URLSearchParams(window.location.search).get("utm_medium") || "",
      utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign") || "",
      referrer: document.referrer,
      timestamp: new Date().toISOString(),
    };

    try {
      await fetch("https://example.com/webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      supabase.functions
        .invoke("send-form-email", {
          body: { formCode: "CALLBACK", payload },
        })
        .catch((err) => console.error("Email error:", err));

      toast.success("Thanks — we'll send 2–3 time options within one business day.");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Book a Call | Nimara</title>
        <meta name="description" content="30-minute hold, most calls ~15 minutes. Map your outcome and pick the fastest path." />
        <link rel="canonical" href="https://nimara.ca/book-a-call" />
        <meta property="og:site_name" content="Nimara" />
        <meta property="og:title" content="Book a Call | Nimara" />
        <meta property="og:description" content="30-minute hold, most calls ~15 minutes. Map your outcome and pick the fastest path." />
        <meta property="og:url" content="https://nimara.ca/book-a-call" />
        <meta property="og:image" content="https://nimara.ca/og.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book a Call | Nimara" />
        <meta name="twitter:description" content="30-minute hold, most calls ~15 minutes. Map your outcome and pick the fastest path." />
        <meta name="twitter:image" content="https://nimara.ca/og.jpg" />
      </Helmet>
      <Header activeRoute="/book-a-call" />

      {/* Hero */}
      <section ref={heroRef} className="pt-32 sm:pt-40 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <motion.div variants={itemVariants}>
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4 block">
                  Let's Talk
                </span>
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-foreground leading-[1.1] mb-6"
              >
                Book a{" "}
                <span className="italic">30-minute call</span>
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-lg text-body-muted mb-8 max-w-xl leading-relaxed"
              >
                We'll map your outcome, choose the fastest path, and answer any compliance or 
                data questions. We hold 30 minutes in case you need it—most calls wrap in ~15.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-6 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-body-muted">
                    <feature.icon className="w-4 h-4 text-primary" aria-hidden="true" />
                    <span className="text-sm">{feature.text}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
                <Button 
                  size="lg" 
                  onClick={scrollToScheduler} 
                  className="group"
                >
                  Schedule a call
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
                </Button>
                <span className="text-sm text-muted-foreground">
                  Prefer email?{" "}
                  <a 
                    href="mailto:hello@nimara.ca" 
                    className="text-primary hover:text-primary/80 transition-colors group inline-flex items-center gap-1"
                  >
                    <span className="relative">
                      hello@nimara.ca
                      <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                </span>
              </motion.div>
            </div>

            {/* Right Column - Visual */}
            <motion.div variants={itemVariants} className="lg:col-span-5 hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-4 bg-primary/5 rounded-3xl" />
                <div className="relative bg-card border border-border rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-3xl font-serif font-medium text-foreground mb-2">30 min</p>
                  <p className="text-muted-foreground text-sm">Discovery call</p>
                  <div className="h-px bg-border my-6" />
                  <p className="text-xs text-muted-foreground">
                    Times show in your local timezone
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Scheduler */}
      <section ref={schedulerRef} id="scheduler" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <motion.div
          initial="hidden"
          animate={schedulerInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4 block text-center">
              Schedule
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-foreground text-center">
              Pick a <span className="italic">time</span>
            </h2>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden mb-6"
          >
            <div className="w-full" style={{ minHeight: "680px" }}>
              <iframe
                src="https://calendly.com/hello-nimara/30min"
                width="100%"
                height="680"
                frameBorder="0"
                title="Book a 30-minute call"
                className="w-full"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <a
              href="https://calendly.com/hello-nimara/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium group"
            >
              <span className="relative">
                Open in Calendly
                <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Callback Form */}
      <section ref={callbackRef} className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={callbackInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-2xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4 block">
              Alternative
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-foreground mb-4">
              Can't use the <span className="italic">scheduler?</span>
            </h2>
            <p className="text-body-muted">
              Leave your details and we'll send 2–3 time options within one business day.
            </p>
          </motion.div>

          <motion.form
            variants={itemVariants}
            id="form_callback"
            onSubmit={handleSubmit(onSubmit)}
            className="bg-card border border-border rounded-2xl p-8 shadow-sm space-y-6"
          >
            <div>
              <Label htmlFor="cb_name" className="text-foreground mb-2 block text-sm font-medium">
                Full name <span className="text-muted-foreground">*</span>
              </Label>
              <Input
                id="cb_name"
                type="text"
                autoComplete="name"
                {...register("name")}
                className={`h-12 rounded-xl ${errors.name ? "border-destructive" : ""}`}
              />
              {errors.name && <p className="text-destructive text-sm mt-2">{errors.name.message}</p>}
            </div>

            <div>
              <Label htmlFor="cb_email" className="text-foreground mb-2 block text-sm font-medium">
                Work email <span className="text-muted-foreground">*</span>
              </Label>
              <Input
                id="cb_email"
                type="email"
                autoComplete="email"
                {...register("email")}
                className={`h-12 rounded-xl ${errors.email ? "border-destructive" : ""}`}
              />
              {errors.email && <p className="text-destructive text-sm mt-2">{errors.email.message}</p>}
            </div>

            <div>
              <Label htmlFor="cb_phone" className="text-foreground mb-2 block text-sm font-medium">
                Phone <span className="text-muted-foreground">*</span>
              </Label>
              <Input
                id="cb_phone"
                type="tel"
                autoComplete="tel"
                placeholder="(###) ###-####"
                {...register("phone")}
                className={`h-12 rounded-xl ${errors.phone ? "border-destructive" : ""}`}
              />
              {errors.phone && <p className="text-destructive text-sm mt-2">{errors.phone.message}</p>}
            </div>

            <Button 
              id="cb_submit" 
              type="submit" 
              size="lg" 
              className="w-full h-14 rounded-xl group" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Request a callback"}
              {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />}
            </Button>
          </motion.form>

          <motion.p variants={itemVariants} className="text-center text-sm text-muted-foreground mt-8">
            Data stored in Canada · Records kept 7 years · PM oversight on every engagement
          </motion.p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default BookACall;
