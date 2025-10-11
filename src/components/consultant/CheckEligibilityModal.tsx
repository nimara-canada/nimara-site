import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const focusAreas = [
  "Governance",
  "Finance & Audit",
  "Program Design",
  "Digital & Data",
  "Fundraising",
  "Research",
  "Legal & Compliance"
];
const yearsOptions = ["0–1", "2–4", "5+"];
const availabilityOptions = ["immediate", "<30 days", "30–60 days"];

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  focusArea: z.string().min(1, "Focus area is required"),
  years: z.string().min(1, "Years of experience is required"),
  refs: z.enum(["yes", "no"], { required_error: "Please select an option" }),
  pm_ok: z.enum(["yes", "no"], { required_error: "Please select an option" }),
  availability: z.string().min(1, "Availability is required"),
});

type FormData = z.infer<typeof formSchema>;

interface CheckEligibilityModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CheckEligibilityModal = ({ open, onOpenChange }: CheckEligibilityModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      focusArea: "",
      years: "",
      refs: undefined,
      pm_ok: undefined,
      availability: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const payload = {
        flow: "consultant_eligibility",
        name: data.name,
        email: data.email,
        focusArea: data.focusArea,
        years: data.years,
        refs: data.refs,
        pm_ok: data.pm_ok,
        availability: data.availability,
        utm_source: new URLSearchParams(window.location.search).get("utm_source"),
        utm_medium: new URLSearchParams(window.location.search).get("utm_medium"),
        utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign"),
        referrer: document.referrer,
        timestamp: new Date().toISOString(),
      };

      const response = await fetch("https://example.com/webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Send email (non-blocking)
        supabase.functions.invoke("send-form-email", {
          body: { formCode: "CONSULT_ELIG", payload }
        }).catch(err => console.error("Email error:", err));

        toast({
          title: "Check submitted",
          description: "Thanks — we'll email you within 2 business days about next steps. If you're a close fit, you'll get the full application link.",
        });
        form.reset();
        onOpenChange(false);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Check eligibility</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work email *</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="focusArea"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Focus area *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select focus area" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {focusAreas.map((area) => (
                        <SelectItem key={area} value={area}>
                          {area}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="years"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Years of nonprofit consulting *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select years" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {yearsOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="refs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Do you have 2 Canadian nonprofit references? *</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} value={field.value}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="refs-yes" />
                        <Label htmlFor="refs-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="refs-no" />
                        <Label htmlFor="refs-no">No</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pm_ok"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Are you comfortable with PM-led delivery and plain-English proposals? *</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} value={field.value}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="pm-yes" />
                        <Label htmlFor="pm-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="pm-no" />
                        <Label htmlFor="pm-no">No</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="availability"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Availability *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select availability" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {availabilityOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Submitting..." : "Submit quick-check"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
