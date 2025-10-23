import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

const emailSchema = z.string().trim().email({ message: "Please enter a valid email address" }).max(255);

export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    
    // Validate email
    const result = emailSchema.safeParse(email);
    
    if (!result.success) {
      const errorMessage = result.error.errors[0]?.message || "Invalid email";
      setError(errorMessage);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    toast({
      title: "Subscribed successfully!",
      description: "Check your inbox for new templates.",
      style: {
        backgroundColor: "hsl(var(--nimara-mint) / 0.2)",
        borderColor: "hsl(var(--nimara-mint))",
      }
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Subscribe to Nimara templates"
      className="mt-8"
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label htmlFor="subscribe-email" className="sr-only">
            Your Email Address
          </label>
          <span id="email-description" className="sr-only">
            Subscribe to receive new templates monthly. We never sell your email.
          </span>
          <input
            id="subscribe-email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            placeholder="Your Email"
            aria-describedby="email-description email-error"
            aria-invalid={!!error}
            className="w-full h-12 rounded-2xl px-5 py-3 bg-white ring-1 ring-black/10 transition-all focus:outline-none focus:ring-2 focus:ring-[hsl(var(--nimara-purple))] focus:ring-offset-2 disabled:opacity-50"
            style={{ color: "hsl(var(--nimara-navy))" }}
            disabled={isSubmitting}
          />
          {error && (
            <p 
              id="email-error"
              className="mt-2 text-sm text-red-600"
              role="alert"
              aria-live="polite"
            >
              {error}
            </p>
          )}
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 rounded-2xl px-8 font-semibold text-white transition-colors hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[hsl(var(--nimara-purple))] focus-visible:ring-offset-2"
          style={{ 
            backgroundColor: "hsl(var(--nimara-navy))",
          }}
        >
          {isSubmitting ? "SUBSCRIBING..." : "SUBSCRIBE"}
        </Button>
      </div>
      
      <p className="mt-4 text-xs leading-relaxed" style={{ color: "hsl(220 20% 45%)" }}>
        By sharing your email, you agree to Nimara's{" "}
        <Link 
          to="/privacy" 
          className="underline hover:no-underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nimara-purple))] focus-visible:ring-offset-1 rounded"
          style={{ color: "hsl(var(--nimara-purple))" }}
        >
          Privacy Policy
        </Link>
        {" "}and{" "}
        <Link 
          to="/terms" 
          className="underline hover:no-underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--nimara-purple))] focus-visible:ring-offset-1 rounded"
          style={{ color: "hsl(var(--nimara-purple))" }}
        >
          Terms of Service
        </Link>.
      </p>
    </form>
  );
}
