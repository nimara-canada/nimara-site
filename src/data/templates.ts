export interface TemplateSection {
  title: string;
  content: string;
}

export interface Template {
  slug: string;
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  sections: TemplateSection[];
}

export const templates: Template[] = [
  {
    slug: "spending-checklist",
    title: "Nonprofit Spending Checklist",
    badge: "NEWEST",
    subtitle: "Step-by-step checks to keep spending clean, compliant, and easy to reconcile.",
    description: "Use this free checklist to plan, buy, and record expenses the right way. It helps small teams avoid ineligible costs, collect the right backup, and stay audit-ready.",
    sections: [
      {
        title: "Vision & Strategy (Budget Fit)",
        content: "Check the purchase supports the funded scope and fits caps like Admin 10–15% and Small Equipment limits."
      },
      {
        title: "Allowed vs Not Allowed",
        content: "Quick table of eligible items, common red flags, and what needs pre-approval."
      },
      {
        title: "Before You Buy",
        content: "Three checks: right vendor, quote/receipt needs, and payment method (no cash unless policy allows)."
      },
      {
        title: "Paying People",
        content: "Rules for honoraria, contractors, and staff time; sample agreement + timesheet basics."
      },
      {
        title: "Receipts that Pass Audit",
        content: "What every receipt needs, plus file-naming and photo tips."
      },
      {
        title: "Reconciliation Steps",
        content: "End-of-month flow: export, tag, variance notes, and ready-to-send folder."
      }
    ]
  },
  {
    slug: "ai-prompting-starter-kit",
    title: "AI Prompting Starter Kit",
    badge: "RECOMMENDED",
    subtitle: "Plain-language prompts for email, scopes, board updates, and grant close-outs.",
    description: "Copy-and-paste prompts that help you draft emails, scopes, budgets, and close-out reports fast—while keeping facts and tone accurate.",
    sections: [
      {
        title: "Email Prompts",
        content: "Outreach to partners, funder updates, and friendly deadline nudges with variables you can swap."
      },
      {
        title: "Scope & Budget",
        content: "Turn ideas into tasks, timelines, and cost lines with guardrails on eligibility."
      },
      {
        title: "Board & ED Updates",
        content: "One-page summaries with risks, decisions, and asks in plain language."
      },
      {
        title: "Close-Out & Reconciliation",
        content: "Variance notes, outcomes roll-up, and lessons learned drafts."
      },
      {
        title: "Quality & Safety",
        content: "A short checklist to fact-check, cite, and protect privacy when using AI."
      },
      {
        title: "Cheat-Sheet",
        content: "20 quick prompts for common nonprofit tasks."
      }
    ]
  },
  {
    slug: "grant-close-out-binder",
    title: "Grant Close-Out Binder Template",
    badge: "RECOMMENDED",
    subtitle: "Collect receipts, variance notes, and outcomes in one export.",
    description: "A simple structure for receipts, reconciliations, outcomes, and photos—organized so a reviewer can find anything in seconds.",
    sections: [
      {
        title: "Folder Map",
        content: "Pre-built folders: 01-Agreements, 02-Disbursements, 03-Receipts, 04-Reports, 05-Photos."
      },
      {
        title: "Reconciliation Tabs",
        content: "GL import, variance notes, and returned funds tracker."
      },
      {
        title: "Evidence Checklist",
        content: "What to keep for equipment, renovations, trainings, and events (incl. before/after photos)."
      },
      {
        title: "Export Pack",
        content: "Auto-named ZIP ready to share with funders."
      },
      {
        title: "QA Review",
        content: "A final pass so your binder is audit-ready by design."
      },
      {
        title: "Handover Notes",
        content: "What next year's coordinator should know."
      }
    ]
  }
];

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find(t => t.slug === slug);
}
