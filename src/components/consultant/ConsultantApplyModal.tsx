import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";

const provinces = ["AB", "BC", "MB", "NB", "NL", "NS", "NT", "NU", "ON", "PE", "QC", "SK", "YT"];
const focusAreas = [
  "Governance",
  "Finance & Audit",
  "Program Design",
  "Digital & Data",
  "Fundraising",
  "Research",
  "Legal & Compliance"
];
const availabilityOptions = ["immediate", "<30 days", "30–60 days"];

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  orgType: z.string().min(1, "Organization type is required"),
  provinces: z.array(z.string()).min(1, "Select at least one province"),
  focusAreas: z.array(z.string()).min(1, "Select at least one focus area"),
  availability: z.string().min(1, "Availability is required"),
  range: z.string().optional(),
  link1: z.string().url("Valid URL required").optional().or(z.literal("")),
  link2: z.string().url("Valid URL required").optional().or(z.literal("")),
  ref1Name: z.string().min(2, "Reference 1 name is required"),
  ref1Email: z.string().email("Valid email is required"),
  ref2Name: z.string().min(2, "Reference 2 name is required"),
  ref2Email: z.string().email("Valid email is required"),
  notes: z.string().max(200, "Notes must be 200 characters or less").optional(),
});

type FormData = z.infer<typeof formSchema>;

interface ConsultantApplyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ConsultantApplyModal = ({ open, onOpenChange }: ConsultantApplyModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProvinces, setSelectedProvinces] = useState<string[]>([]);
  const [selectedFocusAreas, setSelectedFocusAreas] = useState<string[]>([]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      orgType: "",
      provinces: [],
      focusAreas: [],
      availability: "",
      range: "",
      link1: "",
      link2: "",
      ref1Name: "",
      ref1Email: "",
      ref2Name: "",
      ref2Email: "",
      notes: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const payload = {
        flow: "consultant_apply",
        name: data.name,
        email: data.email,
        orgType: data.orgType,
        provinces: data.provinces,
        focusAreas: data.focusAreas,
        availability: data.availability,
        range: data.range,
        links: [data.link1, data.link2].filter(Boolean),
        refs: [
          { name: data.ref1Name, email: data.ref1Email },
          { name: data.ref2Name, email: data.ref2Email }
        ],
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
          body: { formCode: "CONSULT_APPLY", payload }
        }).catch(err => console.error("Email error:", err));

        toast({
          title: "Application submitted",
          description: "Thanks — we'll review your work and follow up if your focus areas match upcoming briefs.",
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

  const toggleProvince = (province: string) => {
    const newSelection = selectedProvinces.includes(province)
      ? selectedProvinces.filter(p => p !== province)
      : [...selectedProvinces, province];
    setSelectedProvinces(newSelection);
    form.setValue("provinces", newSelection);
  };

  const toggleFocusArea = (area: string) => {
    const newSelection = selectedFocusAreas.includes(area)
      ? selectedFocusAreas.filter(a => a !== area)
      : [...selectedFocusAreas, area];
    setSelectedFocusAreas(newSelection);
    form.setValue("focusAreas", newSelection);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Apply to join</DialogTitle>
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
              name="orgType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization / Independent *</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Independent consultant" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="provinces"
              render={() => (
                <FormItem>
                  <FormLabel>Provinces you serve *</FormLabel>
                  <div className="flex flex-wrap gap-2">
                    {provinces.map((province) => (
                      <Badge
                        key={province}
                        variant={selectedProvinces.includes(province) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => toggleProvince(province)}
                      >
                        {province}
                      </Badge>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="focusAreas"
              render={() => (
                <FormItem>
                  <FormLabel>Focus areas *</FormLabel>
                  <div className="flex flex-wrap gap-2">
                    {focusAreas.map((area) => (
                      <Badge
                        key={area}
                        variant={selectedFocusAreas.includes(area) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => toggleFocusArea(area)}
                      >
                        {area}
                      </Badge>
                    ))}
                  </div>
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

            <FormField
              control={form.control}
              name="range"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Typical project range (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., $5,000 - $15,000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <FormLabel>Links to 1–2 recent projects *</FormLabel>
              <FormField
                control={form.control}
                name="link1"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Project link 1" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="link2"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Project link 2 (optional)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <FormLabel>References (2 names + emails) *</FormLabel>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="ref1Name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Reference 1 name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ref1Email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="email" placeholder="Reference 1 email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ref2Name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Reference 2 name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ref2Email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="email" placeholder="Reference 2 email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes (optional, 200 chars max)</FormLabel>
                  <FormControl>
                    <Textarea {...field} maxLength={200} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Submitting..." : "Submit application"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
