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
import { Calendar, Send, Check, Phone } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  organization: z.string().trim().max(200).optional(),
  helpType: z.string().min(1, "Please select what you need help with"),
  deadline: z.string().optional(),
  details: z.string().trim().min(1, "Please tell us what's going on").max(2000),
});

type FormData = z.infer<typeof formSchema>;

const BookACall = () => {
  const [activeOption, setActiveOption] = useState<"call" | "form" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    { value: "grant", label: "Grant deadline" },
    { value: "board", label: "Board issue" },
    { value: "finance", label: "Finance clean-up" },
    { value: "hr", label: "HR/staff issue" },
    { value: "other", label: "Other" },
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
      // Send email notification
      await supabase.functions.invoke("send-form-email", {
        body: { formCode: "URGENT_HELP", payload },
      });

      setIsSubmitted(true);
      reset();
      toast.success("Thanks — we'll reply by email within 1 business day.");
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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

      {/* Hero */}
      <section className="pt-40 md:pt-48 pb-12 md:pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4 leading-tight">
            Urgent help
          </h1>
          <p className="text-lg md:text-xl text-body leading-relaxed mb-10">
            Choose one: book a call now, or send details and we'll reply by email.
          </p>

          {/* What we'll do bullets */}
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
                  ? "border-primary bg-primary/5" 
                  : "border-border hover:border-primary/50"
              }`}
              onClick={() => handleOptionClick("call")}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mx-auto mb-4">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Book a call</h3>
              <p className="text-sm text-muted-foreground mb-4">
                15–30 minutes • Fastest way to get unstuck
              </p>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
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
                  ? "border-primary bg-primary/5" 
                  : "border-border hover:border-primary/50"
              }`}
              onClick={() => handleOptionClick("form")}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted mx-auto mb-4">
                <Send className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Send details instead</h3>
              <p className="text-sm text-muted-foreground mb-4">
                2–3 minutes • Best if you're not ready to meet yet
              </p>
              <Button 
                variant="outline"
                className="w-full"
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

            <div className="bg-background rounded-2xl border border-border overflow-hidden">
              <div className="w-full" style={{ minHeight: "680px" }}>
                <iframe
                  src="https://calendly.com/hello-nimara/30min"
                  width="100%"
                  height="680"
                  frameBorder="0"
                  title="Book an urgent help call"
                  className="w-full"
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
              <div className="text-center p-8 rounded-2xl border border-border bg-muted/30">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mx-auto mb-4">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Thanks!</h3>
                <p className="text-body mb-4">
                  We'll reply by email within 1 business day.
                </p>
                <p className="text-sm text-muted-foreground">
                  If this is urgent,{" "}
                  <button 
                    onClick={() => {
                      setActiveOption("call");
                      setIsSubmitted(false);
                    }}
                    className="text-primary hover:underline"
                  >
                    book a call above
                  </button>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground mb-2 block">
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      autoComplete="name"
                      {...register("name")}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground mb-2 block">
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      autoComplete="email"
                      {...register("email")}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="organization" className="text-foreground mb-2 block">
                    Organization name <span className="text-muted-foreground">(optional)</span>
                  </Label>
                  <Input
                    id="organization"
                    type="text"
                    autoComplete="organization"
                    {...register("organization")}
                  />
                </div>

                <div>
                  <Label htmlFor="helpType" className="text-foreground mb-2 block">
                    What do you need help with? <span className="text-destructive">*</span>
                  </Label>
                  <Select onValueChange={(value) => setValue("helpType", value)}>
                    <SelectTrigger className={errors.helpType ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      {helpOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.helpType && <p className="text-destructive text-sm mt-1">{errors.helpType.message}</p>}
                </div>

                <div>
                  <Label htmlFor="deadline" className="text-foreground mb-2 block">
                    Deadline <span className="text-muted-foreground">(optional)</span>
                  </Label>
                  <Input
                    id="deadline"
                    type="date"
                    {...register("deadline")}
                  />
                </div>

                <div>
                  <Label htmlFor="details" className="text-foreground mb-2 block">
                    Tell us what's going on <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="details"
                    rows={4}
                    placeholder="3–5 sentences about your urgent problem..."
                    {...register("details")}
                    className={errors.details ? "border-destructive" : ""}
                  />
                  {errors.details && <p className="text-destructive text-sm mt-1">{errors.details.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send my details →"}
                </Button>
              </form>
            )}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BookACall;
