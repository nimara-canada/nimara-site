import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface TemplateCardProps {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
}

export function TemplateCard({ slug, badge, title, subtitle }: TemplateCardProps) {
  // Generate accessible badge label
  const getBadgeLabel = (badgeText: string) => {
    const lowered = badgeText.toLowerCase();
    if (lowered === "newest") return "Newest template";
    if (lowered === "recommended") return "Recommended template";
    if (lowered === "popular") return "Popular template";
    return `${badgeText} template`;
  };

  return (
    <Link
      to={`/resources/${slug}`}
      className="group block rounded-2xl bg-card p-5 shadow-soft ring-1 ring-black/5 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      aria-label={`${title} - ${subtitle}. ${getBadgeLabel(badge)}. Get template.`}
    >
      <article className="flex gap-4" aria-hidden="true">
        {/* Thumbnail - decorative */}
        <div 
          className="w-32 h-32 flex-shrink-0 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: "hsl(var(--nimara-mint))" }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true" focusable="false">
            <circle cx="40" cy="40" r="32" fill="white" />
            <rect x="20" y="30" width="40" height="7" rx="3.5" fill="hsl(var(--nimara-purple))" />
            <rect x="20" y="42" width="28" height="7" rx="3.5" fill="hsl(var(--nimara-navy))" />
          </svg>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="mb-2">
            <span 
              className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide rounded-full border"
              style={{ 
                color: "hsl(var(--nimara-navy))", 
                borderColor: "hsl(var(--nimara-navy) / 0.2)",
                backgroundColor: "hsl(var(--nimara-navy) / 0.05)"
              }}
            >
              {badge}
            </span>
          </div>
          
          <h3 
            className="text-base font-semibold mb-2 leading-snug"
            style={{ color: "hsl(var(--nimara-navy))" }}
          >
            {title}
          </h3>
          
          <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex-1">
            {subtitle}
          </p>

          <span
            className="inline-flex items-center gap-2 text-sm font-semibold self-start min-h-[44px] min-w-[44px] -mx-2 px-2 py-2 rounded-lg transition-colors group-hover:bg-black/5"
            style={{ color: "hsl(var(--nimara-purple))" }}
          >
            Get template
            <ChevronRight 
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
              aria-hidden="true"
            />
          </span>
        </div>
      </article>
    </Link>
  );
}
