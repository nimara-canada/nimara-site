import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface OneMoreThingModalProps {
  isOpen: boolean;
  onClose: () => void;
  leadEmail: string;
  leadId?: string;
}

const roles = [
  "ED/CEO",
  "Operations",
  "Finance",
  "Program",
  "Fundraising",
  "Other",
];

const budgets = [
  "<$5k",
  "$5–10k",
  "$10–20k",
  "$20–40k",
  ">$40k",
  "Not sure",
];

const startOptions = [
  { value: "immediately", label: "Immediately" },
  { value: "few_weeks", label: "In a few weeks" },
  { value: "not_sure", label: "Not sure yet" },
];

export const OneMoreThingModal = ({ isOpen, onClose, leadEmail, leadId }: OneMoreThingModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    start: "",
    budget: "",
  });

  const handleSkip = () => {
    // Track skip event
    console.log("Tracking: one_more_skip");
    onClose();
  };

  const handleSave = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      const payload = {
        flow: "3quotes_more",
        lead_id: leadId || undefined,
        email: leadEmail,
        om_name: formData.name || undefined,
        om_role: formData.role || undefined,
        om_start: formData.start || undefined,
        om_budget: formData.budget || undefined,
        utm_source: new URLSearchParams(window.location.search).get("utm_source") || undefined,
        utm_medium: new URLSearchParams(window.location.search).get("utm_medium") || undefined,
        utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign") || undefined,
        referrer: document.referrer || undefined,
        timestamp: new Date().toISOString(),
      };

      // Track save event
      console.log("Tracking: one_more_save", {
        role: formData.role,
        start: formData.start,
        budget: formData.budget,
      });

      // Send to webhook
      await fetch("https://example.com/webhook", { 
        method: "POST", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload) 
      });

      // Send email (non-blocking)
      supabase.functions.invoke("send-form-email", {
        body: { formCode: "3QUOTES_MORE", payload }
      }).catch(err => console.error("Email error:", err));

      toast.success("Thanks — we've added this to your request.");
      onClose();
    } catch (err) {
      setError("Couldn't save right now — you can skip or try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      handleSkip();
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetContent 
        className="sm:max-w-md"
        onOpenAutoFocus={(e) => {
          // Track open event
          console.log("Tracking: one_more_open", { source: "3quotes_success" });
        }}
      >
        <SheetHeader>
          <SheetTitle>One more thing...</SheetTitle>
          <SheetDescription>
            Help us match you even better (all optional)
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-5 mt-6">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="om_name">Your name</Label>
            <Input
              id="om_name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="om_role">Your role</Label>
            <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
              <SelectTrigger id="om_role" className="rounded-xl">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((role) => (
                  <SelectItem key={role} value={role}>
                    {role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>When would you like to start?</Label>
            <RadioGroup value={formData.start} onValueChange={(value) => setFormData({ ...formData, start: value })}>
              {startOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={`start_${option.value}`} />
                  <Label htmlFor={`start_${option.value}`} className="font-normal cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="om_budget">Estimated budget</Label>
            <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
              <SelectTrigger id="om_budget" className="rounded-xl">
                <SelectValue placeholder="Select a range" />
              </SelectTrigger>
              <SelectContent>
                {budgets.map((budget) => (
                  <SelectItem key={budget} value={budget}>
                    {budget}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <Button onClick={handleSave} disabled={isSubmitting} size="lg" className="w-full">
              {isSubmitting ? "Saving..." : "Save details"}
            </Button>
            <Button variant="link" onClick={handleSkip} className="p-0 h-auto">
              Skip for now
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
