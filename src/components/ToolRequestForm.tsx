import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  tool_name: z.string().trim().min(1, "Tool name is required").max(100, "Tool name must be less than 100 characters"),
  message: z.string().trim().max(500, "Message must be less than 500 characters").optional(),
});

type FormData = z.infer<typeof formSchema>;

export const ToolRequestForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      tool_name: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("tool_requests").insert({
        name: data.name,
        email: data.email,
        tool_name: data.tool_name,
        message: data.message || null,
      });

      if (error) throw error;

      // Send email notification (fire and forget - don't block on this)
      supabase.functions.invoke("tool-request-notification", {
        body: {
          name: data.name,
          email: data.email,
          tool_name: data.tool_name,
          message: data.message || null,
        },
      }).catch((err) => console.error("Failed to send notification:", err));

      setIsSubmitted(true);
      toast({
        title: "Request submitted!",
        description: "We'll review your tool request and get back to you.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold text-foreground mb-2">Thank you!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          We've received your tool request. Our team will review it and reach out if we need more information.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            setIsSubmitted(false);
            form.reset();
          }}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Your name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Jane Doe" 
                    className="h-12 bg-muted/30 border-border/50"
                    {...field} 
                  />
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
                <FormLabel className="text-foreground">Email address</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="jane@nonprofit.org" 
                    className="h-12 bg-muted/30 border-border/50"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="tool_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Tool you'd like us to support</FormLabel>
              <FormControl>
                <Input 
                  placeholder="e.g., Raiser's Edge, DonorPerfect, Givebutter" 
                  className="h-12 bg-muted/30 border-border/50"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">
                Additional details <span className="text-muted-foreground font-normal">(optional)</span>
              </FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us how you use this tool and what integrations would help you most..."
                  className="min-h-[100px] bg-muted/30 border-border/50 resize-none"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          size="lg" 
          className="w-full sm:w-auto h-12 px-8"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Submit Request
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};
