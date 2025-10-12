import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Rocket, BarChart, LineChart } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const packages = [
  {
    icon: Rocket,
    name: "Launch",
    description: "Get your nonprofit off the ground with foundational setup.",
  },
  {
    icon: BarChart,
    name: "Standardize",
    description: "Streamline operations with consistent processes and systems.",
  },
  {
    icon: LineChart,
    name: "Data-Driven",
    description: "Make informed decisions with comprehensive data analysis.",
  },
];

const areaOptions = [
  "Governance",
  "Finance & Audit",
  "Program Design",
  "Digital & Data",
  "Fundraising",
  "Research",
  "Legal & Compliance",
  "Not sure / Other",
];

export const PackagesSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    organization: "",
    areas: [] as string[],
    notes: "",
  });

  const handleAreaToggle = (area: string) => {
    setFormData((prev) => ({
      ...prev,
      areas: prev.areas.includes(area)
        ? prev.areas.filter((a) => a !== area)
        : [...prev.areas, area],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.organization) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (formData.notes.length > 140) {
      toast.error("Notes must be 140 characters or less");
      return;
    }

    const payload = {
      flow: "packages_waitlist",
      email: formData.email,
      org: formData.organization,
      areas: formData.areas,
      notes: formData.notes,
      utm_source: new URLSearchParams(window.location.search).get("utm_source"),
      utm_medium: new URLSearchParams(window.location.search).get("utm_medium"),
      utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign"),
      referrer: document.referrer,
      timestamp: new Date().toISOString(),
    };

    try {
      // Send to webhook
      await fetch("https://example.com/webhook", { 
        method: "POST", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload) 
      });

      // Send email (non-blocking)
      supabase.functions.invoke("send-form-email", {
        body: { formCode: "PKG_WAITLIST", payload }
      }).catch(err => console.error("Email error:", err));

      toast.success("Thanks — we'll notify you when packages launch on Nov 1, 2025.");
      setIsOpen(false);
      setFormData({ email: "", organization: "", areas: [], notes: "" });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Capacity Packages (waitlist)
            </h2>
            <p className="text-muted-foreground text-lg">
              Multi-area work opens Nov 1, 2025.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 space-y-4"
              >
                <div className="flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <pkg.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm">{pkg.description}</p>
              </div>
            ))}
          </div>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="lg">
                Join the packages waitlist
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Join the packages waitlist</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="waitlist_email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    type="email"
                    id="waitlist_email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="waitlist_org">
                    Organization <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="waitlist_org"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Areas of interest</Label>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {areaOptions.map((area) => (
                      <div key={area} className="flex items-center space-x-2">
                        <Checkbox
                          id={`area_${area}`}
                          checked={formData.areas.includes(area)}
                          onCheckedChange={() => handleAreaToggle(area)}
                        />
                        <label
                          htmlFor={`area_${area}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {area}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="waitlist_notes">Notes (≤140 characters)</Label>
                  <Textarea
                    id="waitlist_notes"
                    maxLength={140}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="rounded-xl resize-none"
                    rows={3}
                  />
                  <p className="text-xs text-muted-foreground">
                    {formData.notes.length}/140 characters
                  </p>
                </div>

                <Button type="submit" className="w-full">
                  Join waitlist
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};
