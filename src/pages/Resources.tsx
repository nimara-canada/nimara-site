import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { templates } from "@/data/templates";
import { ChevronRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const brand = {
  navy: "#202654",
  purple: "#6945D8",
  mint: "#ACFCE3",
  bg: "#F4F6FB",
};

function Thumb({ label }: { label: string }) {
  return (
    <div 
      className="w-28 h-28 rounded-xl flex items-center justify-center flex-shrink-0" 
      style={{ background: brand.mint }}
      role="img"
      aria-label={label}
    >
      <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true">
        <circle cx="36" cy="36" r="30" fill="white" />
        <rect x="18" y="28" width="36" height="6" rx="3" fill={brand.purple} />
        <rect x="18" y="38" width="26" height="6" rx="3" fill={brand.navy} />
      </svg>
    </div>
  );
}

function TemplateCard({
  slug,
  badge,
  title,
  subtitle,
}: {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
}) {
  return (
    <Link to={`/resources/${slug}`}>
      <Card className="flex gap-4 p-4 hover:shadow-lg transition-shadow cursor-pointer">
        <Thumb label={title} />
        <div className="flex-1">
          <div className="mb-2">
            <Badge variant="outline" className="text-xs font-semibold tracking-wide" style={{ color: brand.navy, borderColor: brand.navy + "33" }}>
              {badge}
            </Badge>
          </div>
          <h3 className="text-base font-semibold mb-1" style={{ color: brand.navy }}>
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            {subtitle}
          </p>
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
            style={{ color: brand.purple }}
          >
            Get template
            <ChevronRight className="w-4 h-4" />
          </span>
        </div>
      </Card>
    </Link>
  );
}

export default function Resources() {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    
    toast({
      title: "Thanks for subscribing!",
      description: "We'll email you new templates as they're released.",
    });
    
    form.reset();
  };

  return (
    <>
      <Helmet>
        <title>Free Resources - Nimara Templates | Nonprofit Management Tools</title>
        <meta 
          name="description" 
          content="Access free Nimara templates to streamline nonprofit operations. Download checklists, AI prompts, and grant management tools designed for audit-ready teams." 
        />
        <meta name="keywords" content="nonprofit templates, grant management, audit checklist, nonprofit resources" />
      </Helmet>
      
      <div className="min-h-screen" style={{ background: brand.bg }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Left column */}
            <div className="md:col-span-7">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: brand.navy }}>
                Nimara Templates
              </h1>
              <p className="mt-6 text-lg max-w-2xl" style={{ color: "#334155" }}>
                Our templates remove repetitive prep so your team can focus on what matters: running programs and staying audit-ready.
                Subscribe to get new Nimara templates in your inbox.
              </p>

              {/* Email subscribe */}
              <form
                className="mt-8"
                onSubmit={handleSubscribe}
                aria-label="Subscribe to Nimara templates"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <label htmlFor="email" className="sr-only">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Your Email"
                    className="flex-1 rounded-xl px-4 py-3 bg-white ring-1 ring-black/10 focus:outline-none focus:ring-2"
                    style={{ color: brand.navy }}
                  />
                  <Button
                    type="submit"
                    className="rounded-xl px-6 py-3 font-semibold text-white"
                    style={{ background: brand.navy }}
                  >
                    SUBSCRIBE
                  </Button>
                </div>
                <p className="mt-3 text-xs" style={{ color: "#64748b" }}>
                  By sharing your email, you agree to Nimara's
                  {" "}
                  <Link to="/privacy" className="underline" style={{ color: brand.purple }}>
                    Privacy Policy
                  </Link>
                  {" "}
                  and
                  {" "}
                  <Link to="/terms" className="underline" style={{ color: brand.purple }}>
                    Terms of Service
                  </Link>
                  .
                </p>
              </form>
            </div>

            {/* Right column */}
            <div className="md:col-span-5">
              <h2 className="text-xl font-semibold mb-4" style={{ color: brand.navy }}>
                Featured
              </h2>
              <div className="flex flex-col gap-5">
                {templates.map((template) => (
                  <TemplateCard
                    key={template.slug}
                    slug={template.slug}
                    badge={template.badge}
                    title={template.title}
                    subtitle={template.subtitle}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
