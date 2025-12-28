import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  org: z.string().trim().nonempty({ message: "Organization is required" }).max(200),
  roleType: z.enum(["Nonprofit", "Consultant", "Funder", "Other"], {
    required_error: "Please select your role",
  }),
  notes: z.string().max(140).optional(),
  tipsOptIn: z.boolean().default(false),
});

type FormData = z.infer<typeof formSchema>;

interface PortalNotifyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PortalNotifyModal({ isOpen, onClose }: PortalNotifyModalProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      org: "",
      roleType: undefined,
      notes: "",
      tipsOptIn: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const payload = {
        flow: "portal_notify",
        email: data.email,
        org: data.org,
        roleType: data.roleType,
        notes: data.notes,
        tips_opt_in: data.tipsOptIn,
        utm_source: new URLSearchParams(window.location.search).get("utm_source"),
        utm_medium: new URLSearchParams(window.location.search).get("utm_medium"),
        utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign"),
        referrer: document.referrer,
        timestamp: new Date().toISOString(),
      };

      // Send email notification
      await supabase.functions.invoke("send-form-email", {
        body: { formCode: "PORTAL_NOTIFY", payload }
      });

      toast.success("Thanks — we'll send your invite on Nov 5, 2025 and a short setup note beforehand.");
      form.reset();
      onClose();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Portal notify error:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Notify me when the portal opens</DialogTitle>
          <DialogDescription>
            We'll send you an invite on Nov 5, 2025.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work email*</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@organization.ca"
                      autoComplete="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="org"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization*</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Your organization"
                      autoComplete="organization"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="roleType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>I'm a…*</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Nonprofit">Nonprofit</SelectItem>
                      <SelectItem value="Consultant">Consultant</SelectItem>
                      <SelectItem value="Funder">Funder</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes (optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any questions or notes..."
                      maxLength={140}
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tipsOptIn"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="font-normal">
                      Send me setup tips before launch.
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
              Notify me
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
