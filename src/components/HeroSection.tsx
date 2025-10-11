import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const categories = [
  "Governance",
  "Finance & Audit",
  "Program Design",
  "Digital & Data",
  "Fundraising",
  "Research",
  "Legal & Compliance",
];

const provinces = [
  { code: "AB", name: "Alberta" },
  { code: "BC", name: "British Columbia" },
  { code: "MB", name: "Manitoba" },
  { code: "NB", name: "New Brunswick" },
  { code: "NL", name: "Newfoundland and Labrador" },
  { code: "NS", name: "Nova Scotia" },
  { code: "NT", name: "Northwest Territories" },
  { code: "NU", name: "Nunavut" },
  { code: "ON", name: "Ontario" },
  { code: "PE", name: "Prince Edward Island" },
  { code: "QC", name: "Quebec" },
  { code: "SK", name: "Saskatchewan" },
  { code: "YT", name: "Yukon" },
];

interface HeroFormProps {
  prefillCategory?: string;
}

export const HeroSection = ({ prefillCategory }: HeroFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    organization: "",
    region: "",
    category: prefillCategory || "",
    outcome: "",
  });

  const scrollToForm = () => {
    const form = document.getElementById("form_3quotes");
    form?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.email || !formData.organization || !formData.category) {
      toast.error("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    if (formData.outcome.length > 140) {
      toast.error("Outcome must be 140 characters or less");
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    try {
      const payload = {
        flow: "3quotes",
        ...formData,
        utm_source: new URLSearchParams(window.location.search).get("utm_source"),
        utm_medium: new URLSearchParams(window.location.search).get("utm_medium"),
        utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign"),
        referrer: document.referrer,
        timestamp: new Date().toISOString(),
      };

      // In production: await fetch("https://example.com/webhook", { method: "POST", body: JSON.stringify(payload) });
      console.log("Form submission:", payload);

      toast.success(
        "Thanks — expect a project scoping call in the next 48 hours to understand your needs better before matching you with a consultant."
      );

      // Reset form
      setFormData({
        email: "",
        organization: "",
        region: "",
        category: "",
        outcome: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setTimeout(() => setIsSubmitting(false), 2000);
    }
  };

  return (
    <section className="py-16 lg:py-24" id="main-content">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Hero Content */}
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground font-medium">Audit-ready by design</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Get 3 free nonprofit consulting quotes in 72 hours
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
              We turn your outcome into a simple brief, request up to 3 comparable proposals from vetted Canadian experts, and a Nimara PM manages delivery.
            </p>
            <div className="space-y-4">
              <Button onClick={scrollToForm} size="lg">
                Get 3 free quotes
              </Button>
              <p className="text-sm text-muted-foreground">
                If we deliver fewer than 2 proposals in 72 hours, you get a $500 credit.
              </p>
              <Button variant="link" asChild className="p-0 h-auto">
                <a href="/book-a-call">Prefer a call? Book a 15-minute chat</a>
              </Button>
            </div>
            
            {/* Micro-benefits */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-4">
              <span>Plain brief</span>
              <span>·</span>
              <span>Comparable proposals</span>
              <span>·</span>
              <span>PM oversight</span>
            </div>
          </div>

          {/* Right: Quote Form */}
          <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-md" id="form_3quotes">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="q_email">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  type="email"
                  id="q_email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="q_org">
                  Organization <span className="text-destructive">*</span>
                </Label>
                <Input
                  type="text"
                  id="q_org"
                  required
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="q_region">Province/Territory</Label>
                <Select value={formData.region} onValueChange={(value) => setFormData({ ...formData, region: value })}>
                  <SelectTrigger id="q_region" className="rounded-xl">
                    <SelectValue placeholder="Select a province" />
                  </SelectTrigger>
                  <SelectContent>
                    {provinces.map((province) => (
                      <SelectItem key={province.code} value={province.code}>
                        {province.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="q_category">
                  Category <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                  required
                >
                  <SelectTrigger id="q_category" className="rounded-xl">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="q_outcome">What outcome do you want?</Label>
                <Textarea
                  id="q_outcome"
                  maxLength={140}
                  placeholder="Reconcile funds and be audit-ready by April 31."
                  value={formData.outcome}
                  onChange={(e) => setFormData({ ...formData, outcome: e.target.value })}
                  className="rounded-xl resize-none"
                  rows={3}
                />
                <p className="text-xs text-muted-foreground">
                  One sentence. {formData.outcome.length}/140 characters.
                </p>
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Get 3 free quotes"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
