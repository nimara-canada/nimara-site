import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const callbackSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(10),
});

type CallbackFormData = z.infer<typeof callbackSchema>;

const BookACall = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

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

      // Send email (non-blocking)
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
      <section className="pt-40 md:pt-48 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground mb-6 leading-[1.1]">
            Book a 30-minute call
          </h1>
          <p className="text-lg md:text-xl text-body leading-relaxed mb-10 max-w-2xl mx-auto">
            We'll map your outcome, choose the fastest path (3 free quotes or packages waitlist), and answer
            compliance/data questions. We hold 30 minutes in case you need it—most calls wrap in ~15.
          </p>
          <Button size="lg" onClick={scrollToScheduler} className="mb-6">
            Schedule a 30-minute call
          </Button>
          <p className="text-sm text-muted-foreground">
            Times show in your local timezone. Prefer email?{" "}
            <a href="mailto:hello@nimara.ca" className="text-primary hover:underline">
              hello@nimara.ca
            </a>
          </p>
        </div>
      </section>

      {/* Scheduler */}
      <section id="scheduler" className="py-20 md:py-28 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-widest text-muted-foreground uppercase text-center mb-4">
            Select a time
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-center text-foreground mb-12">
            Pick a time
          </h2>

          <div className="bg-background rounded-3xl shadow-xl border border-border/50 overflow-hidden mb-6">
            <div className="w-full" style={{ minHeight: "700px" }}>
              <iframe
                src="https://calendly.com/hello-nimara/30min"
                width="100%"
                height="700"
                frameBorder="0"
                title="Book a 30-minute call"
                className="w-full"
              />
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://calendly.com/hello-nimara/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-primary font-medium"
            >
              <span className="relative">
                Open in Calendly
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-primary/30 group-hover:bg-primary transition-colors duration-300" />
              </span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Callback Form */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-3">Can't use the scheduler?</h2>
            <p className="text-muted-foreground">Leave your details and we'll send 2–3 time options.</p>
          </div>

          <form
            id="form_callback"
            onSubmit={handleSubmit(onSubmit)}
            className="bg-background border-2 border-muted rounded-2xl p-8 shadow-md space-y-6"
          >
            <div>
              <Label htmlFor="cb_name" className="text-foreground mb-2 block">
                Full name *
              </Label>
              <Input
                id="cb_name"
                type="text"
                autoComplete="name"
                {...register("name")}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <Label htmlFor="cb_email" className="text-foreground mb-2 block">
                Work email *
              </Label>
              <Input
                id="cb_email"
                type="email"
                autoComplete="email"
                {...register("email")}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <Label htmlFor="cb_phone" className="text-foreground mb-2 block">
                Phone *
              </Label>
              <Input
                id="cb_phone"
                type="tel"
                autoComplete="tel"
                placeholder="(###) ###-####"
                {...register("phone")}
                className={errors.phone ? "border-destructive" : ""}
              />
              {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>}
            </div>

            <Button id="cb_submit" type="submit" variant="outline" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Request a callback"}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Data stored in Canada · Records kept 7 years · PM oversight on every engagement
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BookACall;
