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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, Phone, Send } from "lucide-react";
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
    "Listen to what's happening (the one urgent problem)",
    "Ask a few quick questions so we don't guess",
    "Tell you the best next step (and timing)",
    "Leave you with a clear plan for the next 7 days",
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
        <title>Urgent Help | Nimara</title>
        <meta name="description" content="Choose one: book a call now, or send details and we'll reply by email." />
        <link rel="canonical" href="https://nimara.ca/book-a-call" />
        <meta property="og:site_name" content="Nimara" />
        <meta property="og:title" content="Urgent Help | Nimara" />
        <meta property="og:description" content="Choose one: book a call now, or send details and we'll reply by email." />
        <meta property="og:url" content="https://nimara.ca/book-a-call" />
        <meta property="og:image" content="https://nimara.ca/og.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Urgent Help | Nimara" />
        <meta name="twitter:description" content="Choose one: book a call now, or send details and we'll reply by email." />
        <meta name="twitter:image" content="https://nimara.ca/og.jpg" />
      </Helmet>
      <Header activeRoute="/book-a-call" />
      
      <main id="main" style={{ paddingTop: 'calc(var(--announcement-height, 0px) + 5rem)' }}>
        {/* Hero */}
        <section className="pt-8 md:pt-12 pb-12 md:pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4 leading-tight">
            Urgent help
          </h1>
          <p className="text-lg md:text-xl text-body leading-relaxed mb-10">
            Choose one: book a call now, or send details and we'll reply by email.
          </p>

          {/* What we'll do */}
          <div className="text-left mb-12">
            <h2 className="text-sm tracking-widest text-muted-foreground uppercase mb-5 text-center">
              What we'll do
            </h2>
            <ul className="space-y-3 max-w-md mx-auto">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-accent" />
                  </span>
                  <span className="text-body text-sm leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Two Options */}
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {/* Option A: Book a call */}
            <div 
              className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                activeOption === "call" 
                  ? "border-primary bg-primary/5 shadow-md" 
                  : "border-border hover:border-primary/50 hover:shadow-sm"
              }`}
              onClick={() => handleOptionClick("call")}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Book a call</h3>
              <p className="text-sm text-muted-foreground mb-5">
                15–30 minutes • Fastest way to get unstuck
              </p>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                onClick={(e) => {
                  e.stopPropagation();
                  handleOptionClick("call");
                }}
              >
                Book a call →
              </Button>
            </div>

            {/* Option B: Send details */}
            <div 
              className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                activeOption === "form" 
                  ? "border-primary bg-primary/5 shadow-md" 
                  : "border-border hover:border-muted-foreground/50 hover:shadow-sm"
              }`}
              onClick={() => handleOptionClick("form")}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted mx-auto mb-4">
                <Send className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Send details instead</h3>
              <p className="text-sm text-muted-foreground mb-5">
                2–3 minutes • Best if you're not ready to meet yet
              </p>
              <Button 
                variant="outline"
                className="w-full font-medium"
                onClick={(e) => {
                  e.stopPropagation();
                  handleOptionClick("form");
                }}
              >
                Send details →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      {activeOption === "call" && (
        <section id="scheduler" className="py-12 md:py-16 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-foreground mb-8">
              Pick a time
            </h2>

            <div className="bg-background rounded-2xl border border-border overflow-hidden shadow-sm relative">
              <div className="w-full" style={{ minHeight: "680px" }}>
                {/* Loading skeleton */}
                {isCalendlyLoading && (
                  <div className="absolute inset-0 bg-muted/30 animate-pulse flex flex-col items-center justify-center gap-4 z-10">
                    <div className="w-16 h-16 rounded-full bg-muted animate-pulse" />
                    <div className="h-4 w-48 bg-muted rounded animate-pulse" />
                    <div className="h-3 w-32 bg-muted rounded animate-pulse" />
                    <div className="mt-6 grid grid-cols-7 gap-2">
                      {Array.from({ length: 35 }).map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-muted rounded animate-pulse" />
                      ))}
                    </div>
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

            <p className="text-center text-sm text-muted-foreground mt-6">
              Times show in your local timezone
            </p>
          </div>
        </section>
      )}

      {/* Form Section */}
      {activeOption === "form" && (
        <section id="details-form" className="py-12 md:py-16 px-6 bg-background">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-foreground mb-8">
              Send details
            </h2>

            {isSubmitted ? (
              <div className="text-center p-8 rounded-2xl border border-border bg-muted/30 shadow-sm">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent/20 mx-auto mb-5">
                  <Check className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Got it — we received your note.
                </h3>
                <p className="text-body mb-5">
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
                  className="text-primary hover:underline font-medium"
                >
                  Need help sooner? Book a call above →
                </button>
              </div>
            ) : (
              <div className="rounded-2xl border border-border p-6 md:p-8 bg-background shadow-sm">
                {formError && Object.keys(errors).length > 0 && (
                  <div className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                    <p className="text-sm text-destructive font-medium">
                      One more step: please fix the highlighted fields.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-5">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className="text-foreground mb-1.5 block font-medium">
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      autoComplete="name"
                      {...register("name")}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    <p className="text-xs text-muted-foreground mt-1.5">
                      So we know what to call you.
                    </p>
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-foreground mb-1.5 block font-medium">
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      autoComplete="email"
                      {...register("email")}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    <p className="text-xs text-muted-foreground mt-1.5">
                      We'll reply here. No spam.
                    </p>
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Organization */}
                  <div>
                    <Label htmlFor="organization" className="text-foreground mb-1.5 block font-medium">
                      Organization name <span className="text-muted-foreground font-normal">(optional)</span>
                    </Label>
                    <Input
                      id="organization"
                      type="text"
                      autoComplete="organization"
                      {...register("organization")}
                    />
                    <p className="text-xs text-muted-foreground mt-1.5">
                      If you have one.
                    </p>
                  </div>

                  {/* Help Type Dropdown */}
                  <div>
                    <Label htmlFor="helpType" className="text-foreground mb-1.5 block font-medium">
                      What do you need help with? <span className="text-destructive">*</span>
                    </Label>
                    <Select onValueChange={(value) => setValue("helpType", value)}>
                      <SelectTrigger className={errors.helpType ? "border-destructive" : ""}>
                        <SelectValue placeholder="Choose one…" />
                      </SelectTrigger>
                      <SelectContent className="bg-background z-50">
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
                    <Label htmlFor="deadline" className="text-foreground mb-1.5 block font-medium">
                      Deadline <span className="text-muted-foreground font-normal">(optional)</span>
                    </Label>
                    <Input
                      id="deadline"
                      type="date"
                      {...register("deadline")}
                      className={errors.deadline ? "border-destructive" : ""}
                    />
                    <p className="text-xs text-muted-foreground mt-1.5">
                      If there's a date we should know about.
                    </p>
                    {errors.deadline && (
                      <p className="text-destructive text-sm mt-1">{errors.deadline.message}</p>
                    )}
                  </div>

                  {/* Details Textarea */}
                  <div>
                    <Label htmlFor="details" className="text-foreground mb-1.5 block font-medium">
                      Tell us what's going on <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="details"
                      rows={4}
                      {...register("details")}
                      className={errors.details ? "border-destructive" : ""}
                    />
                    <p className="text-xs text-muted-foreground mt-1.5">
                      3–5 sentences is perfect. What happened, what's the deadline, and what do you need?
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-2 italic">
                      Example: "We have a grant due Friday. Our budget doesn't match our spending. We need help fixing it and making it easy to track."
                    </p>
                    {errors.details && (
                      <p className="text-destructive text-sm mt-1">{errors.details.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending…" : "Send my details →"}
                  </Button>

                  {/* Safety Line */}
                  <p className="text-xs text-muted-foreground text-center pt-2">
                    Please don't include private health info or anything very sensitive.
                  </p>
                </form>
              </div>
            )}
          </div>
        </section>
      )}
      </main>

      <Footer />
    </div>
  );
};

export default BookACall;
