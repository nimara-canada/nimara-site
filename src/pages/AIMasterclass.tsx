import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  Calendar, Clock, Users, Target, Lightbulb, 
  CheckCircle2, Shield, Zap, Heart 
} from "lucide-react";

const AIMasterclass = () => {
  const { toast } = useToast();
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    workEmail: "",
    organization: "",
    role: "",
    province: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const eventDate = new Date("2025-10-30T00:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance < 0) {
        setIsExpired(true);
        clearInterval(timer);
        return;
      }

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToForm = () => {
    const form = document.getElementById("registration-form");
    form?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Consent required",
        description: "Please agree to receive emails about this event.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const urlParams = new URLSearchParams(window.location.search);
      const submissionData = {
        ...formData,
        flow: "ai_masterclass_oct30_2025",
        utm_source: urlParams.get("utm_source") || "",
        utm_medium: urlParams.get("utm_medium") || "",
        utm_campaign: urlParams.get("utm_campaign") || "",
        referrer: document.referrer,
        timestamp: new Date().toISOString(),
      };

      const { error } = await supabase.functions.invoke("send-form-email", {
        body: submissionData,
      });

      if (error) throw error;

      toast({
        title: "Registration successful!",
        description: "Check your email for event details and the calendar invite.",
      });

      setFormData({
        firstName: "",
        workEmail: "",
        organization: "",
        role: "",
        province: "",
        consent: false,
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or email hello@nimara.ca",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>AI for Nonprofit Leaders (Canada) — Responsible AI & Prompting — Free 60-Minute Live Class — Oct 30, 2025</title>
        <meta name="description" content="Learn responsible AI + how to prompt the right way. Free 60-min pilot for Canadian nonprofits on Oct 30, 2025. Seats limited. Replay included." />
        <link rel="canonical" href="https://nimara.ca/ai-masterclass" />
      </Helmet>

      <Header />

      <main id="main" className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#202654] mb-6">
              Make More Impact with AI—in 60 Minutes.
            </h1>
            <p className="text-lg md:text-xl text-[#96A0B5] mb-8 max-w-2xl mx-auto">
              Live on Oct 30, 2025. Pilot edition for Canadian nonprofits. Learn to use AI responsibly and prompt the right way—no jargon, no fluff.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {["EDs", "Fundraising", "Programs", "Comms", "Lean teams"].map((chip) => (
                <span key={chip} className="px-4 py-2 bg-[#ACFCE3] text-[#202654] rounded-full text-sm font-medium">
                  {chip}
                </span>
              ))}
            </div>

            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white mb-4"
            >
              Save your seat
            </Button>

            <p className="text-sm text-[#96A0B5]">
              Free pilot. Seats limited. Replay for registrants.
            </p>

            {/* Countdown */}
            {!isExpired && (
              <div className="mt-12">
                <p className="text-sm text-[#96A0B5] mb-4">Event starts in:</p>
                <div className="flex justify-center gap-4">
                  {[
                    { label: "Days", value: countdown.days },
                    { label: "Hours", value: countdown.hours },
                    { label: "Minutes", value: countdown.minutes },
                    { label: "Seconds", value: countdown.seconds },
                  ].map((item) => (
                    <div key={item.label} className="bg-[#7C3AED] text-white rounded-2xl p-4 min-w-[80px]">
                      <div className="text-3xl font-bold">{String(item.value).padStart(2, "0")}</div>
                      <div className="text-sm">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* What you'll learn */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-[#202654] text-center mb-12">What you'll learn</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Responsible AI basics for nonprofits",
                  desc: "Draft responsible-AI policy starter",
                },
                {
                  icon: Target,
                  title: "Spot/reduce bias and handle hallucinations safely",
                  desc: "",
                },
                {
                  icon: Lightbulb,
                  title: "Prompt Blueprint",
                  desc: "ROLE → TASK → CONTEXT → CONSTRAINTS → EXAMPLES → OUTPUT FORMAT",
                },
                {
                  icon: Zap,
                  title: "Reusable patterns",
                  desc: "Refiner, critic, summarizer, EN/FR translator, checklist-maker",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                  <item.icon className="w-8 h-8 text-[#7C3AED] mb-4" />
                  <h3 className="font-semibold text-[#202654] mb-2">{item.title}</h3>
                  {item.desc && <p className="text-sm text-[#96A0B5]">{item.desc}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How the hour flows */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-[#202654] text-center mb-12">How the hour flows</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { time: "5 min", label: "Why now", color: "bg-[#ACFCE3]" },
                { time: "10 min", label: "Best practices", color: "bg-[#7C3AED] text-white" },
                { time: "20 min", label: "Live demos", color: "bg-[#ACFCE3]" },
                { time: "10 min", label: "Quick wins", color: "bg-[#7C3AED] text-white" },
                { time: "15 min", label: "Q&A", color: "bg-[#ACFCE3]" },
              ].map((item, index) => (
                <div key={index} className={`${item.color} p-6 rounded-2xl text-center`}>
                  <div className="text-2xl font-bold mb-2">{item.time}</div>
                  <div className="text-sm font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-[#202654] text-center mb-8">Who it's for</h2>
            <p className="text-center text-[#96A0B5] mb-12">
              EDs, development, program leads, comms, lean teams, volunteers. No tech background needed.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Users, title: "Leadership teams", desc: "Executive directors and senior staff" },
                { icon: Heart, title: "Program & fundraising", desc: "Front-line staff doing the work" },
                { icon: Target, title: "Communications", desc: "Marketing and outreach teams" },
              ].map((item, index) => (
                <div key={index} className="bg-[#ACFCE3]/30 p-8 rounded-2xl text-center">
                  <item.icon className="w-12 h-12 text-[#7C3AED] mx-auto mb-4" />
                  <h3 className="font-semibold text-[#202654] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#96A0B5]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick answers */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-[#202654] text-center mb-12">Quick answers</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { q: "First time?", a: "Yes—pilot = more access + more bonuses." },
                { q: "Free?", a: "100%." },
                { q: "Replay?", a: "Yes, for registrants." },
                { q: "Note:", a: "We will not cover grant writing." },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#7C3AED] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#202654] mb-1">{item.q}</h3>
                      <p className="text-[#96A0B5]">{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Simple pilot promise */}
        <section className="py-16 px-4 bg-[#7C3AED] text-white">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">Simple pilot promise</h2>
            <p className="text-lg mb-8 opacity-90">
              Leave with 5 tested prompts and a draft responsible-AI policy starter. If not, we'll send a short follow-up recording.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>5 Tested Prompts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Draft AI Policy Starter</span>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section id="registration-form" className="py-16 px-4">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-[#202654] text-center mb-12">Save your seat</h2>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First name *</Label>
                  <Input
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="workEmail">Work email *</Label>
                  <Input
                    id="workEmail"
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="organization">Organization *</Label>
                <Input
                  id="organization"
                  required
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="mt-2"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="role">Role *</Label>
                  <Input
                    id="role"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="mt-2"
                    placeholder="e.g., Executive Director"
                  />
                </div>
                <div>
                  <Label htmlFor="province">Province/Territory *</Label>
                  <Input
                    id="province"
                    required
                    value={formData.province}
                    onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                  className="mt-1"
                />
                <Label htmlFor="consent" className="text-sm cursor-pointer">
                  I agree to receive emails about this event and related resources. Unsubscribe anytime. *
                </Label>
              </div>

              <p className="text-sm text-[#96A0B5] flex items-center gap-2">
                <Shield className="w-4 h-4" />
                We'll never share your info.
              </p>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white"
                size="lg"
              >
                {isSubmitting ? "Saving your seat..." : "Save your seat"}
              </Button>
            </form>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#202654] text-center mb-12">Frequently asked questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "What if I can't attend live?",
                  a: "No problem. You'll get the full replay + slides by email. Registrants get lifetime access. We recommend trying to catch it live for the Q&A, though—that's where the magic happens.",
                },
                {
                  q: "Is this tech-heavy?",
                  a: "Not remotely. We use plain language, no jargon, and real nonprofit examples. If you can send an email or use Google Docs, you're ready to go.",
                },
                {
                  q: "Will levels will we learn about?",
                  a: "We cover ChatGPT, Claude, Gemini, and other text-based AI tools. We'll show which to use when, and how to build responsible processes around them. We won't cover grant writing specifically—this is broader strategic AI literacy.",
                },
                {
                  q: "How full-on is this session?",
                  a: "It's practical but not pushy. 60 minutes of clarity, demos, templates, and frameworks—then you decide how/if to adopt AI in your work. Zero pressure to become a power user overnight.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                  <h3 className="font-semibold text-[#202654] mb-3">{item.q}</h3>
                  <p className="text-[#96A0B5]">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-[#7C3AED] text-white">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to make more impact with AI?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join Canadian nonprofit leaders on October 30th for this free 60-minute pilot session.
            </p>
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-white text-[#7C3AED] hover:bg-gray-100"
            >
              Reserve your seat
            </Button>
            <p className="text-sm mt-4 opacity-75">
              Free. Replay included. No sales—just training.
            </p>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg md:hidden z-50">
          <Button
            onClick={scrollToForm}
            className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white"
          >
            Save your seat
          </Button>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AIMasterclass;
