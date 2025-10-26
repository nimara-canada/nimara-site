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
        content: `**Does this spending help us reach our goals?**
• Is it part of our approved plan or budget?
• Are we staying within limits, like keeping admin costs under 15%?

**Example:**
If your plan says "buy a laptop for training," that fits.
Buying new office chairs "just because" does not.

**Stop and check:**
If it's not in the plan, pause and get written approval from your board or funder.`
      },
      {
        title: "2. What You Can and Cannot Buy",
        content: `**Check if the item or service follows your funder's or group's rules.**
• Some things are not allowed, like personal gifts, food for staff, or bonuses.
• Some things need pre-approval, like travel or renovations.

**Example:**
It's fine to buy Zoom software for workshops.
It's not okay to buy birthday gifts for team members.

**Stop and check:**
When unsure, ask first. Wrong spending can block future funding.`
      },
      {
        title: "3. Before You Buy",
        content: `**Get at least two price quotes if possible.**
• Record who approved the purchase and when.
• Use traceable payments like e-transfer or card.
• Avoid cash or personal accounts unless your policy allows it.

**Example:**
Two quotes for a printer: $250 from Staples, $210 from Walmart.
Choose one, note the reason, and record approval before buying.

**Stop and check:**
Two people should review and approve each purchase.`
      },
      {
        title: "4. Paying People",
        content: `**Write down what each payment is for (task, rate, total).**
• Use invoices for contractors and timesheets for staff.
• Record volunteer or honorarium payments with name, date, and reason.
• Never pay yourself or board members without written board approval.

**Example:**
"John – Graphic Design, 10 hours at $30/hour = $300."
Save the invoice and approval email.

**Stop and check:**
Every payment needs a record. No record means no pay.`
      },
      {
        title: "5. Receipts That Pass Audit",
        content: `**Keep every receipt or proof of payment.**
• Make sure it shows vendor name, date, total, and item.
• Label files like "2025-03-10_Printer_$210."
• Store them in one shared folder or binder.

**Example:**
Take a photo of the receipt, upload it to Google Drive under "Receipts."
Write "training laptop" next to it.

**Stop and check:**
If a receipt is missing, write a short note explaining what was bought and why.`
      },
      {
        title: "6. Monthly Review",
        content: `**Match your receipts to your bank statement each month.**
• Record every payment in a simple spreadsheet or accounting app.
• Have someone who didn't make the purchase review and sign off.
• Note issues like missing receipts or unspent money.

**Example:**
Check: "We spent $500 in March. Receipts match. One missing – explained."

**Stop and check:**
Reconcile every month, even if you only spent a few dollars.`
      },
      {
        title: "Good Habits",
        content: `**Keep one folder for all money documents:** Budget, Approvals, Receipts, Reports.
• Print this checklist and sign it with your treasurer each month.
• Ask for help early if something feels unclear.
• Keep things simple, clear, and honest.

**Example:**
Create a folder called "2025 Spending."
Inside it: one subfolder for each month.`
      },
      {
        title: "Monthly Sign-Off Table",
        content: `| Month    | Completed By | Reviewed By | Notes |
|----------|--------------|-------------|-------|
| January  | Program Lead | Treasurer   |       |
| February | Program Lead | Treasurer   |       |
| March    | Program Lead | Treasurer   |       |

Track your monthly reviews to stay organized and accountable.`
      },
      {
        title: "Why This Checklist Matters",
        content: `Many small organizations lose funding not because they misuse money, but because they can't prove they used it correctly.

**This checklist helps you:**
• Keep your records clear
• Build trust with funders
• Make audits easy
• Protect your reputation

Simple practices today prevent big problems tomorrow.`
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
