import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const domains = [
  {
    index: "01",
    title: "Governance & Strategy",
    description: "Clear roles, decisions, and a board that can operate without chaos.",
    tier: "Tier 0–2",
    whatWeInstall: [
      "Board calendar with meeting cadence and agenda templates",
      "Decision log and motion tracker",
      "Governance policy manual (roles, terms, conflict of interest)"
    ],
    artifacts: [
      "Board minutes template",
      "Annual governance checklist",
      "Director onboarding package",
      "Strategic plan tracker"
    ]
  },
  {
    index: "02",
    title: "Finance & Compliance",
    description: "Budgeting, approvals, receipts, and a clean audit trail.",
    tier: "Tier 0–2",
    whatWeInstall: [
      "Chart of accounts aligned with CRA requirements",
      "Expense approval workflow with documentation",
      "Monthly close checklist and reconciliation process"
    ],
    artifacts: [
      "Budget vs. actuals template",
      "Receipt filing system",
      "Financial controls policy",
      "Audit-ready folder structure",
      "Funder allocation tracker"
    ]
  },
  {
    index: "03",
    title: "HR / People",
    description: "Hiring, onboarding, policies, and performance basics that protect the org.",
    tier: "Tier 0–2",
    whatWeInstall: [
      "Employee handbook with core policies",
      "Onboarding checklist and 30-60-90 plan",
      "Performance review framework"
    ],
    artifacts: [
      "Job description templates",
      "Offer letter templates",
      "Exit interview form",
      "Personnel file checklist"
    ]
  },
  {
    index: "04",
    title: "Data & Systems",
    description: "Files, tools, access, and reporting you can actually trust.",
    tier: "Tier 1–3",
    whatWeInstall: [
      "Folder structure with naming conventions",
      "Access control matrix (who sees what)",
      "Tool inventory with ownership and renewal dates"
    ],
    artifacts: [
      "File naming guide",
      "Software stack map",
      "Data backup protocol",
      "Password management policy"
    ]
  },
  {
    index: "05",
    title: "Fundraising & Donor Standards",
    description: "Donor data, receipting, and compliant fundraising practice.",
    tier: "Tier 0–2",
    whatWeInstall: [
      "Donor CRM setup with required fields",
      "Gift processing and receipting workflow",
      "Stewardship calendar and touchpoint tracker"
    ],
    artifacts: [
      "Donation acknowledgment templates",
      "Major donor pipeline tracker",
      "Annual giving report template",
      "Receipting compliance checklist"
    ]
  },
  {
    index: "06",
    title: "Volunteer Management",
    description: "Screening, onboarding, supervision, and retention.",
    tier: "Tier 1–2",
    whatWeInstall: [
      "Volunteer application and screening process",
      "Role descriptions with expectations",
      "Scheduling and communication system"
    ],
    artifacts: [
      "Volunteer handbook",
      "Background check protocol",
      "Hour tracking sheet",
      "Recognition program outline"
    ]
  },
  {
    index: "07",
    title: "Program & Evaluation",
    description: "Delivery backbone, outcomes, and simple measurement loops.",
    tier: "Tier 1–3",
    whatWeInstall: [
      "Logic model or theory of change document",
      "Outcome indicators with data collection plan",
      "Quarterly review rhythm and reporting template"
    ],
    artifacts: [
      "Program manual template",
      "Participant intake form",
      "Outcomes dashboard",
      "Funder report template",
      "Case study format"
    ]
  }
];

export default function WhatWeHelpWith() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-36 bg-background"
      aria-labelledby="domains-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header - Left aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2
            id="domains-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4"
          >
            The 7 Domains
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
            Pick a domain. See what "funder-ready" looks like.
          </p>
        </motion.div>

        {/* Ledger List */}
        <div className="border-t border-border">
          {domains.map((domain, idx) => (
            <DomainRow
              key={domain.index}
              domain={domain}
              isOpen={openIndex === domain.index}
              onToggle={() => setOpenIndex(openIndex === domain.index ? null : domain.index)}
              isInView={isInView}
              delay={0.1 + idx * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function DomainRow({
  domain,
  isOpen,
  onToggle,
  isInView,
  delay
}: {
  domain: typeof domains[0];
  isOpen: boolean;
  onToggle: () => void;
  isInView: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
    >
      <Collapsible open={isOpen} onOpenChange={onToggle}>
        <CollapsibleTrigger asChild>
          <button
            className="w-full text-left group border-b border-border transition-colors duration-200 hover:bg-muted/50 hover:border-foreground/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <div className="py-5 md:py-6 flex items-start md:items-center gap-4 md:gap-6">
              {/* Index */}
              <span className="font-mono text-sm text-muted-foreground/60 pt-1 md:pt-0 w-8 flex-shrink-0">
                {domain.index}
              </span>

              {/* Title + Description */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                  <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {domain.title}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {domain.description}
                  </span>
                </div>
              </div>

              {/* Right side: Badge + Explore */}
              <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
                <span className="hidden sm:inline-flex px-2.5 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground border border-border">
                  {domain.tier}
                </span>
                <span className="flex items-center gap-1 text-sm font-medium text-primary transition-all duration-200 group-hover:gap-2">
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </span>
                <ChevronDown 
                  className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                />
              </div>
            </div>
          </button>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
          <div className="py-6 md:py-8 pl-12 md:pl-14 pr-4 border-b border-border bg-muted/30">
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
              {/* What we install */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
                  What we install
                </h4>
                <ul className="space-y-2.5">
                  {domain.whatWeInstall.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Typical artifacts */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
                  Typical artifacts
                </h4>
                <ul className="space-y-2.5">
                  {domain.artifacts.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </motion.div>
  );
}
