import React from "react";
import { Helmet } from "react-helmet";
import { Link, useParams, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getTemplateBySlug } from "@/data/templates";
import { ChevronLeft } from "lucide-react";
import { TYPEFORM_GRANT_TRACKER_URL } from "@/constants/urls";

const brand = {
  navy: "#202654",
  purple: "#7C3AED",
  mint: "#ACFCE3",
  bg: "#F4F6FB",
};

function TemplatePreview() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      {/* Layered slide preview */}
      <div className="relative">
        {/* Back slide */}
        <div 
          className="absolute top-4 left-4 right-4 h-80 rounded-2xl shadow-lg"
          style={{ background: "white", opacity: 0.4 }}
        />
        {/* Middle slide */}
        <div 
          className="absolute top-2 left-2 right-2 h-80 rounded-2xl shadow-lg"
          style={{ background: "white", opacity: 0.7 }}
        />
        {/* Front slide */}
        <div 
          className="relative h-80 rounded-2xl shadow-xl bg-white p-8"
        >
          {/* Grid mockup */}
          <div className="grid grid-cols-3 gap-4 h-full">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="rounded-lg"
                style={{ background: i === 4 ? brand.mint : "#E2E8F0" }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Pager dots */}
      <div className="flex justify-center gap-2 mt-6">
        <div 
          className="w-2 h-2 rounded-full" 
          style={{ background: brand.mint }}
          aria-label="Slide 1 of 3, active"
        />
        <div 
          className="w-2 h-2 rounded-full bg-gray-300"
          aria-label="Slide 2 of 3"
        />
        <div 
          className="w-2 h-2 rounded-full bg-gray-300"
          aria-label="Slide 3 of 3"
        />
      </div>
    </div>
  );
}

export default function ResourceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const template = slug ? getTemplateBySlug(slug) : undefined;

  if (!template) {
    return <Navigate to="/resources" replace />;
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{template.title} - Nimara Templates | Free Nonprofit Resources</title>
        <meta 
          name="description" 
          content={template.description} 
        />
        <meta name="keywords" content={`nonprofit, ${template.title.toLowerCase()}, template, free download`} />
      </Helmet>
      
      <Header />
      
      <div className="min-h-screen" style={{ background: brand.bg }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          {/* Back link */}
          <Link 
            to="/resources" 
            className="inline-flex items-center gap-2 text-sm font-semibold mb-8 hover:underline"
            style={{ color: brand.purple }}
          >
            <ChevronLeft className="w-4 h-4" />
            Back to all templates
          </Link>

          {/* Hero section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left: Content */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: brand.navy }}>
                {template.title}
              </h1>
              <p className="text-lg mb-8" style={{ color: "#334155" }}>
                {template.description}
              </p>
              <div>
                <Button
                  size="lg"
                  className="rounded-xl px-8 py-6 font-semibold text-white text-base"
                  style={{ background: brand.navy }}
                  asChild
                >
                  <a href={TYPEFORM_GRANT_TRACKER_URL}>DOWNLOAD TEMPLATE NOW</a>
                </Button>
              </div>
            </div>

            {/* Right: Preview */}
            <div className="flex items-center justify-center">
              <TemplatePreview />
            </div>
          </div>

          {/* What's Inside section */}
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4" style={{ color: brand.navy }}>
                What's Inside
              </h2>
              <p className="text-lg" style={{ color: "#334155" }}>
                This template gives you a clear, structured path. Open a section to see what you get.
              </p>
            </div>

            {/* Two-column accordion */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              {template.sections.map((section, index) => (
                <Accordion 
                  key={index} 
                  type="single" 
                  collapsible
                  className="w-full"
                >
                  <AccordionItem value={`item-${index}`} className="border-b" style={{ borderColor: "#CBD5E1" }}>
                    <AccordionTrigger 
                      className="text-left font-semibold hover:no-underline py-4"
                      style={{ color: brand.navy }}
                    >
                      {section.title}
                    </AccordionTrigger>
                    <AccordionContent 
                      className="text-sm pb-4 whitespace-pre-line"
                      style={{ color: "#475569" }}
                    >
                      {section.content}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 text-center">
              <Button
                size="lg"
                className="rounded-xl px-8 py-6 font-semibold text-white text-base"
                style={{ background: brand.navy }}
                asChild
              >
                <a href={TYPEFORM_GRANT_TRACKER_URL}>DOWNLOAD TEMPLATE NOW</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
