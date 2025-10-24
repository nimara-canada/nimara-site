import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Helmet } from "react-helmet-async";
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
    <>
      <Helmet>
        <title>Book a call — Nimara</title>
        <meta
          name="description"
          content="Book a call with Nimara to discuss nonprofit consulting, scopes, and timelines. Edmonton-based; serving Alberta and Canada."
        />
        <link rel="canonical" href="https://nimara.ca/book-a-call" />
      </Helmet>

      <Header activeRoute="/book-a-call" />

      <main id="main" className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Book a call</h1>
        <p className="text-muted-foreground">
          Use this page to schedule a short discovery call with a Nimara representative.
        </p>

        {/* Hero */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Book a 30-minute call</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              We'll map your outcome, choose the fastest path (3 free quotes or packages waitlist), and answer
              compliance/data questions. We hold 30 minutes in case you need it—most calls wrap in ~15.
            </p>
            <Button size="lg" onClick={scrollToScheduler} className="mb-4">
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
        <section id="scheduler" className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Pick a time</h2>

            <div className="bg-background rounded-2xl shadow-lg overflow-hidden mb-4">
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
            </div>

            <div className="text-center">
              <a
                href="https://calendly.com/hello-nimara/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-2"
              >
                Open in Calendly
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      </main>

      <Footer />
    </>
  );
};

export default BookACall;
