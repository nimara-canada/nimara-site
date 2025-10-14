import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
const packages = [{
  name: "Launch",
  whoItsFor: "New or small orgs",
  whatsIncluded: "Grant-ready basics are in place"
}, {
  name: "Standard",
  whoItsFor: "Growing orgs",
  whatsIncluded: "Operations run without hand-holding"
}, {
  name: "Data-Driven",
  whoItsFor: "Scaling orgs",
  whatsIncluded: "Full data tools + funding pipeline design"
}];
const areaOptions = ["Governance", "Finance & Audit", "Program Design", "Digital & Data", "Fundraising", "Research", "Legal & Compliance", "Not sure / Other"];
interface PackagesSectionProps {
  isOpen?: boolean;
  onClose?: () => void;
}
export const PackagesSection = ({
  isOpen: externalIsOpen,
  onClose
}: PackagesSectionProps = {}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = onClose ? (value: boolean) => {
    if (!value) onClose();
  } : setInternalIsOpen;
  const [formData, setFormData] = useState({
    email: "",
    organization: "",
    areas: [] as string[],
    notes: ""
  });
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
      timestamp: new Date().toISOString()
    };
    try {
      // Send to webhook
      await fetch("https://example.com/webhook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      // Send email (non-blocking)
      supabase.functions.invoke("send-form-email", {
        body: {
          formCode: "PKG_WAITLIST",
          payload
        }
      }).catch(err => console.error("Email error:", err));
      toast.success("Thanks — we'll notify you when packages launch on Nov 1, 2025.");
      setIsOpen(false);
      setFormData({
        email: "",
        organization: "",
        areas: [],
        notes: ""
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };
  return <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Coming Nov 5, 2025: Capacity Building Packages</h2>
            <p className="text-lg text-muted-foreground">
              Launching Nov 5, 2025 — Nimara's Fundability Packages:
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold text-base">Package</TableHead>
                  <TableHead className="font-bold text-base">Who it's for</TableHead>
                  <TableHead className="font-bold text-base">Core outcome</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {packages.map((pkg, index) => <TableRow key={index}>
                    <TableCell className="font-semibold">{pkg.name}</TableCell>
                    <TableCell>{pkg.whoItsFor}</TableCell>
                    <TableCell>{pkg.whatsIncluded}</TableCell>
                  </TableRow>)}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-start gap-2 text-lg">
            <span className="text-xl">→</span>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <button className="text-left hover:underline underline-offset-4">
                  <span className="font-semibold">Join the waitlist now</span> to get early access and discounted pricing.
                </button>
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
                  <Input type="email" id="waitlist_email" required value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} className="rounded-xl" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="waitlist_org">
                    Organization <span className="text-destructive">*</span>
                  </Label>
                  <Input type="text" id="waitlist_org" required value={formData.organization} onChange={e => setFormData({
                    ...formData,
                    organization: e.target.value
                  })} className="rounded-xl" />
                </div>

                <div className="space-y-2">
                  <Label>Areas of interest</Label>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {areaOptions.map(area => <div key={area} className="flex items-center space-x-2">
                        <Checkbox id={`area_${area}`} checked={formData.areas.includes(area)} onCheckedChange={() => handleAreaToggle(area)} />
                        <label htmlFor={`area_${area}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                          {area}
                        </label>
                      </div>)}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="waitlist_notes">Notes (≤140 characters)</Label>
                  <Textarea id="waitlist_notes" maxLength={140} value={formData.notes} onChange={e => setFormData({
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
          </div>
        </div>
      </div>
    </section>;
};