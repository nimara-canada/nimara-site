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
    subtitle: "For small community, faith-based, and volunteer-led organizations",
    description: "Use this checklist before and after you spend money. It helps you stay organized, ready for questions, and trusted by funders.",
    sections: [
      {
        title: "1. Purpose and Fit",
        content: "Learn how to verify spending aligns with your mission, approved plans, and funder requirements before you commit."
      },
      {
        title: "2. What You Can and Cannot Buy",
        content: "Clear guidance on eligible vs. ineligible expenses, plus what requires pre-approval from your board or funder."
      },
      {
        title: "3. Before You Buy",
        content: "Step-by-step checklist for getting quotes, recording approvals, and using traceable payment methods."
      },
      {
        title: "4. Paying People",
        content: "Documentation requirements for staff, contractors, volunteers, and honorariums with real examples."
      },
      {
        title: "5. Receipts That Pass Audit",
        content: "What makes a valid receipt, how to label and store them, and what to do when receipts go missing."
      },
      {
        title: "6. Monthly Review",
        content: "Simple reconciliation process to match receipts with bank statements and catch issues early."
      },
      {
        title: "Good Habits",
        content: "Practical tips for organizing financial documents and building sustainable accountability systems."
      },
      {
        title: "Monthly Sign-Off Table",
        content: "Ready-to-use tracking table to document who completed and reviewed each month's spending."
      },
      {
        title: "Why This Checklist Matters",
        content: "Understanding how clear records protect your funding, reputation, and ability to prove proper use of resources."
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
