import React, { useState, useId } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Resources() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const emailInputId = useId();
  const shouldReduceMotion = useReducedMotion();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please add a valid email.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please add a valid email.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setEmail("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const comingItems = [
    "Free webinars",
    "Toolkits & templates",
    "Short guides",
    "Blog posts",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Resources - Coming Soon | Nimara</title>
        <meta
          name="description"
          content="Free webinars, toolkits, templates, and guides for Canadian nonprofits. Sign up to be notified when Nimara resources launch."
        />
        <link rel="canonical" href="https://nimara.ca/resources" />
      </Helmet>

      <Header />

      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-3 focus:rounded-lg focus:bg-primary focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      <main
        id="main-content"
        className="flex flex-col items-center justify-center px-6 lg:px-12"
        style={{ paddingTop: "calc(var(--announcement-height, 0px) + 6rem)" }}
      >
        <div className="w-full max-w-2xl py-16 md:py-24 lg:py-32">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            {/* Eyebrow */}
            <p className="text-xs tracking-widest text-muted-foreground uppercase mb-6">
              Resources (Coming Soon)
            </p>

            {/* H1 */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-[1.15] mb-6">
              Free tools and guides for nonprofits—coming soon.
            </h1>

            {/* Subhead */}
            <p className="text-body text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto">
              Webinars, toolkits, simple templates, and short guides to help you
              stay fundable, sustainable, and audit-ready.
            </p>

            {/* Coming soon chips */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {comingItems.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Email signup card */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm"
          >
            {isSuccess ? (
              <div className="text-center py-4">
                <p className="text-foreground font-medium text-lg">
                  You're on the list.
                </p>
                <p className="text-muted-foreground mt-2">
                  We'll email you when resources are ready.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <label
                    htmlFor={emailInputId}
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    id={emailInputId}
                    type="email"
                    placeholder="name@nonprofit.ca"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    className={`w-full px-4 h-12 bg-background border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 transition-colors ${
                      error
                        ? "border-destructive focus:ring-destructive/30"
                        : "border-border focus:border-accent"
                    }`}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${emailInputId}-error` : undefined}
                  />
                  {error && (
                    <p
                      id={`${emailInputId}-error`}
                      className="mt-2 text-sm text-destructive"
                      role="alert"
                    >
                      {error}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 h-12 px-6 bg-accent text-secondary-background font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Notify me when it launches
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Trust text */}
                <p className="text-center text-sm text-muted-foreground pt-2">
                  No spam. We'll email you when new resources are ready.
                </p>
                <p className="text-center text-xs text-muted-foreground">
                  You can unsubscribe anytime.
                </p>
              </form>
            )}
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            animate={shouldReduceMotion ? {} : { opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-8"
          >
            <a
              href="/book-a-call"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              Need urgent help?{" "}
              <span className="text-primary font-medium group-hover:underline">
                Get urgent help →
              </span>
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
