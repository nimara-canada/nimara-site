import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
const areaOptions = ["Governance", "Finance & Audit", "Program Design", "Digital & Data", "Fundraising", "Research", "Legal & Compliance"];
export const FinalCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    organization: "",
    areas: [] as string[],
    notes: ""
  });
  const scrollToForm = () => {
    const form = document.getElementById("form_3quotes");
    form?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const handleAreaToggle = (area: string) => {
    setFormData(prev => ({
      ...prev,
      areas: prev.areas.includes(area) ? prev.areas.filter(a => a !== area) : [...prev.areas, area]
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.organization) {
      toast.error("Please fill in all required fields");
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
      timestamp: new Date().toISOString()
    };
    console.log("Packages waitlist submission:", payload);
    toast.success("Thanks — we'll notify you when packages launch on Nov 1, 2025.");
    setIsOpen(false);
    setFormData({
      email: "",
      organization: "",
      areas: [],
      notes: ""
    });
  };
  return <>
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Ready to get quotes?</h2>
          
          <Button onClick={scrollToForm} size="lg" variant="outline" className="bg-background text-foreground hover:bg-background/90">
            Get 3 free quotes
          </Button>
        </div>
      </section>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Join the packages waitlist</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="final_email">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input type="email" id="final_email" required value={formData.email} onChange={e => setFormData({
              ...formData,
              email: e.target.value
            })} className="rounded-xl" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="final_org">
                Organization <span className="text-destructive">*</span>
              </Label>
              <Input type="text" id="final_org" required value={formData.organization} onChange={e => setFormData({
              ...formData,
              organization: e.target.value
            })} className="rounded-xl" />
            </div>

            <div className="space-y-2">
              <Label>Areas of interest</Label>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {areaOptions.map(area => <div key={area} className="flex items-center space-x-2">
                    <Checkbox id={`final_area_${area}`} checked={formData.areas.includes(area)} onCheckedChange={() => handleAreaToggle(area)} />
                    <label htmlFor={`final_area_${area}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                      {area}
                    </label>
                  </div>)}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="final_notes">Notes (≤140 characters)</Label>
              <Textarea id="final_notes" maxLength={140} value={formData.notes} onChange={e => setFormData({
              ...formData,
              notes: e.target.value
            })} className="rounded-xl resize-none" rows={3} />
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
    </>;
};