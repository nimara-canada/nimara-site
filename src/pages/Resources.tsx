import React from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { templates } from "@/data/templates";
import { TemplateCard } from "@/components/TemplateCard";
import { SubscribeForm } from "@/components/SubscribeForm";

export default function Resources() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Free Resources - Nimara Templates | Nonprofit Management Tools</title>
        <meta 
          name="description" 
          content="Access free Nimara templates to streamline nonprofit operations. Download checklists, AI prompts, and grant management tools designed for audit-ready teams." 
        />
        <meta name="keywords" content="nonprofit templates, grant management, audit checklist, nonprofit resources" />
        <link rel="canonical" href="https://yourdomain.com/resources" />
      </Helmet>
      
      <Header />
      
      {/* Skip to main content link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:ring-2 focus:ring-[hsl(var(--nimara-purple))]"
        style={{ backgroundColor: "hsl(var(--nimara-navy))", color: "white" }}
      >
        Skip to main content
      </a>

      <div 
        className="min-h-screen"
        style={{ backgroundColor: "hsl(var(--nimara-bg))" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <main id="main-content" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left column - Main content */}
            <section className="lg:col-span-7">
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight max-w-[16ch]"
                style={{ color: "hsl(var(--nimara-navy))" }}
              >
                Nimara Templates
              </h1>
              
              <p className="mt-8 text-lg md:text-xl leading-relaxed max-w-[65ch]" style={{ color: "hsl(220 15% 30%)" }}>
                Our templates remove repetitive prep so your team can focus on what matters: running programs and staying audit-ready.
                Subscribe to get new Nimara templates in your inbox.
              </p>

              <SubscribeForm />
            </section>

            {/* Right column - Featured templates */}
            <aside 
              className="lg:col-span-5"
              aria-labelledby="featured-heading"
            >
              <div className="mb-3">
                <span 
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "hsl(var(--nimara-purple))" }}
                  aria-hidden="true"
                >
                  Featured
                </span>
                <h2 
                  id="featured-heading"
                  className="text-2xl font-bold mt-1"
                  style={{ color: "hsl(var(--nimara-navy))" }}
                >
                  Popular Templates
                </h2>
              </div>
              
              <div className="flex flex-col gap-5 mt-6">
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
            </aside>
          </main>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
