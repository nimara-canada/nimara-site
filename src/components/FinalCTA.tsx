import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
export const FinalCTA = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    support: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    const payload = {
      flow: "get_in_touch",
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      support: formData.support,
      utm_source: new URLSearchParams(window.location.search).get("utm_source"),
      utm_medium: new URLSearchParams(window.location.search).get("utm_medium"),
      utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign"),
      referrer: document.referrer,
      timestamp: new Date().toISOString()
    };

    console.log("Get in touch submission:", payload);
    toast.success("Thanks! We'll be in touch shortly.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      support: ""
    });
  };
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Get in touch!
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're leading a team or growing your own career, we're here to help you take the next step. Share a few details, and we'll be in touch shortly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="sr-only">First Name</Label>
              <Input
                type="text"
                id="firstName"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="h-14 text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName" className="sr-only">Last Name</Label>
              <Input
                type="text"
                id="lastName"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="h-14 text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="sr-only">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-14 text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="sr-only">Phone Number</Label>
              <Input
                type="tel"
                id="phone"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-14 text-base"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="support" className="sr-only">What support are you looking for?</Label>
            <Select value={formData.support} onValueChange={(value) => setFormData({ ...formData, support: value })}>
              <SelectTrigger className="h-14 text-base">
                <SelectValue placeholder="What support are you looking for?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Governance">Governance</SelectItem>
                <SelectItem value="Finance & Audit">Finance & Audit</SelectItem>
                <SelectItem value="Program Design">Program Design</SelectItem>
                <SelectItem value="Digital & Data">Digital & Data</SelectItem>
                <SelectItem value="Fundraising">Fundraising</SelectItem>
                <SelectItem value="Research">Research</SelectItem>
                <SelectItem value="Legal & Compliance">Legal & Compliance</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            size="lg"
            className="w-full h-14 text-base uppercase tracking-wide font-semibold"
          >
            SCHEDULE A CALL
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            By sharing your email, you agree to our{" "}
            <a href="/privacy" className="text-foreground underline hover:no-underline">
              Privacy Policy
            </a>
            {" "}and{" "}
            <a href="/terms" className="text-foreground underline hover:no-underline">
              Terms of Service
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};