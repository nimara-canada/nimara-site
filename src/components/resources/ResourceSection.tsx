import React from "react";
import { Check, ArrowRight, Sparkles, Clock, ShieldCheck, Mail, HelpCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface ResourceSectionProps {
  title: string;
  subhead: string;
  bullets: string[];
  typeformUrl: string;
  calendlyUrl?: string;
}

// Sample spreadsheet data
const sampleData = [
  { consent: "Yes", org: "Youth Forward Society", email: "admin@youthforward.ca", role: "ED", resourceId: "capacity-grant-tracker", source: "nimara-resource-page", submittedAt: "2024-12-28 09:15", token: "tk_a7x9m2", status: "SENT", processedAt: "2024-12-28 09:16", error: "" },
  { consent: "Yes", org: "Green Roots Foundation", email: "ops@greenroots.org", role: "Finance Lead", resourceId: "capacity-grant-tracker", source: "nimara-resource-page", submittedAt: "2024-12-28 10:42", token: "tk_b3k8p1", status: "SENT", processedAt: "2024-12-28 10:43", error: "" },
  { consent: "No", org: "Community Arts Collective", email: "info@artsco.ca", role: "Program Manager", resourceId: "capacity-grant-tracker", source: "nimara-resource-page", submittedAt: "2024-12-28 11:20", token: "tk_c5n2q7", status: "NO_CONSENT", processedAt: "", error: "" },
  { consent: "Yes", org: "Helping Hands Network", email: "director@@helpinghands.ca", role: "Board Chair", resourceId: "capacity-grant-tracker", source: "nimara-resource-page", submittedAt: "2024-12-28 13:05", token: "tk_d9w4r3", status: "ERROR", processedAt: "2024-12-28 13:06", error: "Invalid email" },
  { consent: "Yes", org: "Northern Outreach", email: "team@northernoutreach.org", role: "Coordinator", resourceId: "capacity-grant-tracker", source: "nimara-resource-page", submittedAt: "2024-12-28 14:30", token: "tk_e2y6t8", status: "SENT", processedAt: "2024-12-28 14:31", error: "" },
  { consent: "No", org: "Seniors Connect BC", email: "hello@seniorsconnect.ca", role: "Volunteer Lead", resourceId: "capacity-grant-tracker", source: "nimara-resource-page", submittedAt: "2024-12-28 15:18", token: "tk_f1z3u5", status: "NO_CONSENT", processedAt: "", error: "" },
  { consent: "Yes", org: "Kids First Initiative", email: "programs@kidsfirst.ca", role: "Director", resourceId: "capacity-grant-tracker", source: "nimara-resource-page", submittedAt: "2024-12-29 08:45", token: "tk_g8v0w2", status: "SENT", processedAt: "2024-12-29 08:46", error: "" },
];

const columns = [
  { key: "consent", label: "Consent", width: "w-20" },
  { key: "org", label: "Organization", width: "w-44" },
  { key: "email", label: "Email", width: "w-48" },
  { key: "role", label: "Role", width: "w-32" },
  { key: "resourceId", label: "resource_id", width: "w-40" },
  { key: "source", label: "source", width: "w-44" },
  { key: "submittedAt", label: "Submitted At", width: "w-36" },
  { key: "token", label: "Token", width: "w-24" },
  { key: "status", label: "Status", width: "w-28" },
  { key: "processedAt", label: "Processed At", width: "w-36" },
  { key: "error", label: "Error", width: "w-28" },
];

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    SENT: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    NO_CONSENT: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    ERROR: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };
  
  return (
    <span className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded ${styles[status] || "bg-muted text-muted-foreground"}`}>
      {status}
    </span>
  );
}

export function ResourceSection({
  title,
  subhead,
  bullets,
  typeformUrl,
  calendlyUrl,
}: ResourceSectionProps) {
  const scrollToPreview = () => {
    document.getElementById("template-preview")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* LEFT: Template Preview (60%) */}
          <div className="lg:col-span-3 space-y-6" id="template-preview">
            <div className="bg-card rounded-2xl border border-border/50 shadow-soft overflow-hidden">
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-border/50">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  What you'll get
                </h2>
                <p className="text-muted-foreground text-base">
                  A simple tracker to prove your grant spending and deliverables.
                </p>
              </div>
              
              {/* Spreadsheet Preview */}
              <div className="overflow-x-auto">
                <div className="min-w-[900px]">
                  {/* Column Headers */}
                  <div className="flex bg-secondary/80 border-b border-border/50 sticky top-0">
                    {columns.map((col) => (
                      <div
                        key={col.key}
                        className={`${col.width} flex-shrink-0 px-3 py-3 text-xs font-semibold text-foreground/80 uppercase tracking-wide border-r border-border/30 last:border-r-0`}
                      >
                        {col.label}
                      </div>
                    ))}
                  </div>
                  
                  {/* Data Rows */}
                  {sampleData.map((row, idx) => (
                    <div
                      key={idx}
                      className={`flex border-b border-border/30 last:border-b-0 ${
                        idx % 2 === 0 ? "bg-background" : "bg-secondary/30"
                      } hover:bg-primary/5 transition-colors`}
                    >
                      <div className="w-20 flex-shrink-0 px-3 py-2.5 text-sm border-r border-border/20">
                        <span className={row.consent === "Yes" ? "text-emerald-600 dark:text-emerald-400 font-medium" : "text-muted-foreground"}>
                          {row.consent}
                        </span>
                      </div>
                      <div className="w-44 flex-shrink-0 px-3 py-2.5 text-sm text-foreground/90 border-r border-border/20 truncate">
                        {row.org}
                      </div>
                      <div className="w-48 flex-shrink-0 px-3 py-2.5 text-sm text-foreground/80 border-r border-border/20 truncate font-mono text-xs">
                        {row.email}
                      </div>
                      <div className="w-32 flex-shrink-0 px-3 py-2.5 text-sm text-foreground/80 border-r border-border/20 truncate">
                        {row.role}
                      </div>
                      <div className="w-40 flex-shrink-0 px-3 py-2.5 text-xs text-muted-foreground border-r border-border/20 font-mono truncate">
                        {row.resourceId}
                      </div>
                      <div className="w-44 flex-shrink-0 px-3 py-2.5 text-xs text-muted-foreground border-r border-border/20 font-mono truncate">
                        {row.source}
                      </div>
                      <div className="w-36 flex-shrink-0 px-3 py-2.5 text-xs text-muted-foreground border-r border-border/20 font-mono">
                        {row.submittedAt}
                      </div>
                      <div className="w-24 flex-shrink-0 px-3 py-2.5 text-xs text-primary/70 border-r border-border/20 font-mono">
                        {row.token}
                      </div>
                      <div className="w-28 flex-shrink-0 px-3 py-2.5 border-r border-border/20">
                        <StatusBadge status={row.status} />
                      </div>
                      <div className="w-36 flex-shrink-0 px-3 py-2.5 text-xs text-muted-foreground border-r border-border/20 font-mono">
                        {row.processedAt || "—"}
                      </div>
                      <div className="w-28 flex-shrink-0 px-3 py-2.5 text-xs text-red-500 dark:text-red-400 truncate">
                        {row.error || "—"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bullet points under preview */}
              <div className="p-6 md:p-8 bg-secondary/30 border-t border-border/50">
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <li className="flex items-center gap-3 text-sm text-foreground/80">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    Track who requested the tool
                  </li>
                  <li className="flex items-center gap-3 text-sm text-foreground/80">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    Send only if they said yes
                  </li>
                  <li className="flex items-center gap-3 text-sm text-foreground/80">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    See what was sent, and what failed
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT: Get the Tracker Card (40%) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-2xl border border-border/50 shadow-soft p-6 md:p-8 sticky top-28">
              {/* Tag */}
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full bg-gradient-to-r from-primary/15 to-primary/5 text-primary border border-primary/10">
                  <Sparkles className="w-3.5 h-3.5" />
                  Free template
                </span>
              </div>

              {/* Heading */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-3">
                Get the free tracker
              </h3>
              <p className="text-muted-foreground text-center text-sm mb-6">
                Fill this out and we'll email you the tracker.
              </p>

              {/* Primary CTA */}
              <Button
                asChild
                className="w-full h-14 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn mb-4"
                size="lg"
              >
                <a href={typeformUrl} className="flex items-center justify-center gap-2">
                  Get the free tracker
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>

              {/* Secondary CTA */}
              <button
                onClick={scrollToPreview}
                className="w-full text-sm text-primary hover:text-primary/80 font-medium transition-colors flex items-center justify-center gap-1 mb-6 lg:hidden"
              >
                See how it works
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Consent note */}
              <p className="text-xs text-muted-foreground text-center mb-6 leading-relaxed">
                If you say "No" to email updates, we'll still send the tracker.
              </p>

              {/* Trust block */}
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground border-t border-border/50 pt-5 mb-6">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  Takes 30 seconds
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  No spam
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  Unsubscribe anytime
                </span>
              </div>

              {/* "What's inside?" Accordion */}
              <Accordion type="single" collapsible className="border-t border-border/50 pt-4">
                <AccordionItem value="what-for" className="border-b-0">
                  <AccordionTrigger className="text-sm font-medium text-foreground/90 hover:no-underline py-3">
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-muted-foreground" />
                      What is this tool for?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-4">
                    This tracker helps you prove how you spent capacity grant funds. You can log expenses, link to receipts, and stay ready for funder reporting.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="who-for" className="border-b-0">
                  <AccordionTrigger className="text-sm font-medium text-foreground/90 hover:no-underline py-3">
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-muted-foreground" />
                      Who is it for?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-4">
                    Any Canadian nonprofit that received a capacity-building grant and needs to track spending and deliverables. Works great for small teams.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="how-use" className="border-b-0">
                  <AccordionTrigger className="text-sm font-medium text-foreground/90 hover:no-underline py-3">
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-muted-foreground" />
                      How do I use it?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-4">
                    Download the Excel file, open it in Excel or Google Sheets, and start logging your expenses. There's a short guide and video to help you get started.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="after-submit" className="border-b-0">
                  <AccordionTrigger className="text-sm font-medium text-foreground/90 hover:no-underline py-3">
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-muted-foreground" />
                      What happens after I submit?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-4">
                    We'll email you the download links right away. If you opted in for updates, you'll also get tips on nonprofit operations — no spam, ever.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Need help? */}
              {calendlyUrl && (
                <div className="mt-6 pt-4 border-t border-border/50 text-center">
                  <p className="text-xs text-muted-foreground mb-2">Need help?</p>
                  <a
                    href={calendlyUrl}
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                  >
                    Book a 15-min call
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
            
            {/* Info note */}
            <p className="text-xs text-muted-foreground text-center leading-relaxed px-4">
              We use this info only to send the tool.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
