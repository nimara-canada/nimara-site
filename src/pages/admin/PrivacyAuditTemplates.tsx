import { useState } from "react";
import { AuditAuthGate } from "@/components/audit/AuditAuthGate";
import { AuditLayout } from "@/components/audit/AuditLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Copy, 
  Check,
  FileText,
  Cookie,
  Scale,
  Mail,
  AlertTriangle,
  ClipboardList
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Template {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
}

const templates: Template[] = [
  // Just-in-time notices
  {
    id: "jit-contact",
    title: "Contact Form Notice",
    category: "Just-in-Time Notices",
    description: "Privacy notice for contact forms",
    content: `By submitting this form, you consent to Nimara collecting and using your name and email address to respond to your inquiry. We will not share your information with third parties except as necessary to respond to your request. You can withdraw consent at any time by contacting privacy@nimara.ca.

For more information, see our [Privacy Policy](/privacy).`
  },
  {
    id: "jit-newsletter",
    title: "Newsletter Signup Notice",
    category: "Just-in-Time Notices",
    description: "Privacy notice for newsletter subscriptions",
    content: `By subscribing, you consent to receiving periodic emails from Nimara about our services, resources, and updates. We will not share your email with third parties. You can unsubscribe at any time using the link in any email or by contacting privacy@nimara.ca.

For more information, see our [Privacy Policy](/privacy).`
  },
  {
    id: "jit-booking",
    title: "Booking/Scheduling Notice",
    category: "Just-in-Time Notices",
    description: "Privacy notice for appointment booking",
    content: `To schedule this appointment, we collect your name, email, and phone number. This information is used solely to confirm and manage your booking. We use [Calendly/Cal.com] to process bookings—your data may be stored in [country].

You can cancel or modify your booking at any time. For more information, see our [Privacy Policy](/privacy).`
  },
  {
    id: "jit-download",
    title: "Resource Download Notice",
    category: "Just-in-Time Notices",
    description: "Privacy notice for gated content downloads",
    content: `To access this resource, we collect your name and email address. We will use this to send you the requested resource and may follow up with related information about our services.

You can opt out of future communications at any time. Your data is stored in Canada. For more information, see our [Privacy Policy](/privacy).`
  },

  // Cookie banner
  {
    id: "cookie-banner",
    title: "Cookie Banner Copy",
    category: "Cookie Consent",
    description: "PIPEDA-compliant cookie consent banner",
    content: `We use cookies to improve your experience on our site.

**Essential cookies** are required for the site to function and cannot be disabled.

**Analytics cookies** help us understand how visitors use our site. These are optional.

You can change your preferences at any time in our Cookie Settings.

[Accept All] [Essential Only] [Cookie Settings]`
  },
  {
    id: "cookie-settings",
    title: "Cookie Settings Modal",
    category: "Cookie Consent",
    description: "Detailed cookie preference center",
    content: `## Cookie Preferences

### Essential Cookies (Required)
These cookies are necessary for the website to function and cannot be disabled. They include cookies for security, session management, and accessibility preferences.

### Analytics Cookies (Optional)
We use analytics cookies to understand how visitors interact with our website. This helps us improve our services. These cookies are provided by [Google Analytics/Plausible/etc.].

Data collected: pages visited, time on site, referral source
Data is processed in: [Country]
Retention: [X months]

### Marketing Cookies (Optional)
[Only include if applicable]
These cookies are used to deliver relevant advertisements and track campaign effectiveness.

[Save Preferences] [Accept All]`
  },

  // Privacy Policy clauses
  {
    id: "policy-collection",
    title: "Information Collection Clause",
    category: "Privacy Policy",
    description: "What information is collected",
    content: `## Information We Collect

We collect personal information that you voluntarily provide to us when you:
- Submit a contact form (name, email, message)
- Subscribe to our newsletter (email)
- Book a consultation (name, email, phone, organization)
- Download resources (name, email)
- Apply to work with us (name, email, resume, work history)

We also automatically collect certain information when you visit our website:
- IP address (anonymized)
- Browser type and version
- Pages visited and time spent
- Referral source

We collect this information through cookies and similar technologies. See our Cookie Policy for details.`
  },
  {
    id: "policy-purposes",
    title: "Purposes Clause",
    category: "Privacy Policy",
    description: "Why information is collected",
    content: `## How We Use Your Information

We use your personal information for the following purposes:

**To provide our services:**
- Respond to your inquiries
- Process bookings and appointments
- Deliver requested resources

**To communicate with you:**
- Send service-related updates
- Share newsletters and marketing content (with your consent)
- Follow up on applications

**To improve our services:**
- Analyze website usage and performance
- Understand how visitors find and use our site

We only collect information necessary for these stated purposes (Principle 4: Limiting Collection).`
  },
  {
    id: "policy-sharing",
    title: "Third-Party Sharing Clause",
    category: "Privacy Policy",
    description: "Who information is shared with",
    content: `## How We Share Your Information

We share your personal information with the following categories of third parties:

**Service Providers:**
- [Typeform/HubSpot] - form processing
- [Calendly/Cal.com] - appointment scheduling
- [Mailchimp/ConvertKit] - email communications
- [Google Analytics/Plausible] - website analytics
- [Vercel/Netlify] - website hosting

These providers process data on our behalf and are contractually obligated to protect your information.

**Cross-Border Processing:**
Some of our service providers process data outside of Canada, including in the United States. When this occurs, your data may be subject to the laws of those jurisdictions. We take steps to ensure adequate protection, including using providers with appropriate data protection certifications.

We do not sell your personal information.`
  },
  {
    id: "policy-access",
    title: "Access Rights Clause",
    category: "Privacy Policy",
    description: "How to access/correct personal information",
    content: `## Your Privacy Rights

Under PIPEDA, you have the right to:

**Access your information:** Request a copy of the personal information we hold about you.

**Correct your information:** Request corrections to inaccurate or incomplete information.

**Withdraw consent:** Withdraw your consent for any processing based on consent.

**Delete your information:** Request deletion of your personal information, subject to legal retention requirements.

**To exercise these rights, contact us at:**
Email: privacy@nimara.ca
Response time: Within 30 days

We may need to verify your identity before processing your request. If we cannot comply with your request, we will explain why.`
  },
  {
    id: "policy-retention",
    title: "Retention Clause",
    category: "Privacy Policy",
    description: "How long information is kept",
    content: `## Data Retention

We retain your personal information only as long as necessary for the purposes for which it was collected:

| Data Type | Retention Period |
|-----------|------------------|
| Contact form submissions | 2 years after last contact |
| Newsletter subscribers | Until unsubscribe |
| Client records | 7 years after engagement ends |
| Job applicants | 1 year after application |
| Website analytics | 26 months (anonymized) |

After these periods, we securely delete or anonymize your information.`
  },

  // SOPs
  {
    id: "sop-access",
    title: "Access Request SOP",
    category: "Standard Operating Procedures",
    description: "Process for handling access requests",
    content: `# Access Request Standard Operating Procedure

## 1. Receiving Requests
- Accept requests via email to privacy@nimara.ca
- Log request in tracking spreadsheet with date received
- Send acknowledgment within 2 business days

## 2. Verify Identity
- Request government ID or two forms of identification
- For email-based requests, confirm from known email address
- Document verification method used

## 3. Search for Records
- Check all data systems: CRM, email, forms, spreadsheets
- Document all sources searched
- Compile records into single file

## 4. Prepare Response
- Review records for third-party information to redact
- Format in clear, accessible manner
- Prepare cover letter explaining what is included

## 5. Deliver Response
- Respond within 30 calendar days of verified request
- Use secure delivery method (encrypted email or portal)
- Log completion date and method

## 6. Handle Extensions
- If more time needed, notify requester within 30 days
- Maximum extension: 30 additional days
- Document reason for extension

## 7. Handle Refusals
- Document reason for any refusal
- Cite specific PIPEDA exception if applicable
- Inform requester of right to complain to OPC`
  },
  {
    id: "sop-consent",
    title: "Consent Withdrawal SOP",
    category: "Standard Operating Procedures",
    description: "Process for handling consent withdrawals",
    content: `# Consent Withdrawal Standard Operating Procedure

## 1. Receiving Withdrawal
- Accept via email, form, or unsubscribe link
- Log request immediately with timestamp
- Send acknowledgment within 1 business day

## 2. Process Withdrawal
For newsletter/marketing:
- Remove from mailing list within 10 business days
- Retain record that they withdrew consent
- Do not add to any future marketing lists

For all services:
- Identify all processing based on consent
- Stop processing for withdrawn purposes
- Continue processing required for legal/contract obligations

## 3. Communicate Implications
- Explain what processing will stop
- Explain what we must retain for legal reasons
- Confirm effective date

## 4. Documentation
- Update CRM/database with consent status
- Note date and scope of withdrawal
- Retain proof of withdrawal for 2 years`
  },
  {
    id: "sop-breach",
    title: "Breach Response Playbook",
    category: "Standard Operating Procedures",
    description: "Mini-playbook for privacy breach response",
    content: `# Privacy Breach Response Playbook

## Immediate Actions (First 24 Hours)

### 1. Contain the Breach
- [ ] Stop ongoing unauthorized access
- [ ] Secure affected systems
- [ ] Preserve evidence (logs, screenshots)
- [ ] Do not delete anything

### 2. Assemble Response Team
- Privacy lead: [Name]
- IT/Technical: [Name]
- Legal (if needed): [Contact]
- Communications: [Name]

### 3. Document Everything
- What happened and when
- What data was affected
- How many individuals affected
- Current status of containment

## Assessment (24-72 Hours)

### 4. Determine Scope
- What personal information was involved?
- How many individuals affected?
- Was data accessed, disclosed, or lost?
- Who is responsible for the breach?

### 5. Risk Assessment
Assess risk of significant harm based on:
- Sensitivity of information
- Likelihood of misuse
- Potential consequences to individuals

**High risk indicators:**
- Financial information
- Health information
- Government ID numbers
- Passwords/credentials
- Information about minors

## Notification (If Required)

### 6. Notify Privacy Commissioner
If real risk of significant harm:
- Report to OPC as soon as feasible
- Use OPC breach report form
- Include all required information

### 7. Notify Affected Individuals
If real risk of significant harm:
- Notify directly (email, letter, phone)
- Include: what happened, what data, what we're doing, what they can do
- Provide contact for questions

## Post-Incident

### 8. Remediate
- Fix vulnerability that caused breach
- Update security measures
- Review and update policies

### 9. Document & Learn
- Complete incident report
- Conduct post-mortem
- Update breach register
- Implement lessons learned

## Key Contacts
- OPC Breach Report: breachreport@priv.gc.ca
- Privacy Lead: [email]
- Legal: [email]`
  }
];

const categories = [
  { id: "jit", label: "Just-in-Time Notices", icon: FileText },
  { id: "cookie", label: "Cookie Consent", icon: Cookie },
  { id: "policy", label: "Privacy Policy", icon: Scale },
  { id: "sop", label: "SOPs", icon: ClipboardList },
];

export default function PrivacyAuditTemplates() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { toast } = useToast();

  const copyToClipboard = async (template: Template) => {
    await navigator.clipboard.writeText(template.content);
    setCopiedId(template.id);
    toast({ title: "Copied to clipboard" });
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getTemplatesByCategory = (categoryLabel: string) => {
    return templates.filter(t => t.category === categoryLabel);
  };

  return (
    <AuditAuthGate>
      <AuditLayout>
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Templates Library</h2>
            <p className="text-muted-foreground">
              Pre-built copy blocks for PIPEDA compliance. Click to copy.
            </p>
          </div>

          <Tabs defaultValue="jit">
            <TabsList className="flex-wrap">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <TabsTrigger key={cat.id} value={cat.id} className="gap-2">
                    <Icon className="h-4 w-4" />
                    {cat.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="mt-6">
                <div className="grid gap-4 md:grid-cols-2">
                  {getTemplatesByCategory(cat.label).map((template) => (
                    <Card key={template.id} className="flex flex-col">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-base">{template.title}</CardTitle>
                            <CardDescription>{template.description}</CardDescription>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => copyToClipboard(template)}
                          >
                            {copiedId === template.id ? (
                              <Check className="h-4 w-4 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="bg-muted/50 rounded-lg p-4 max-h-64 overflow-y-auto">
                          <pre className="text-xs whitespace-pre-wrap font-mono">
                            {template.content}
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* PIPEDA Reference */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Scale className="h-4 w-4" />
                PIPEDA Fair Information Principles
              </CardTitle>
              <CardDescription>
                The 10 principles that guide Canadian privacy law
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-5">
                {[
                  { num: 1, name: "Accountability", desc: "Organization is responsible for PI under its control" },
                  { num: 2, name: "Identifying Purposes", desc: "Purposes must be identified before/at collection" },
                  { num: 3, name: "Consent", desc: "Knowledge and consent required for collection/use" },
                  { num: 4, name: "Limiting Collection", desc: "Only collect what's necessary for purposes" },
                  { num: 5, name: "Limiting Use/Disclosure", desc: "Only use for stated purposes" },
                  { num: 6, name: "Accuracy", desc: "PI must be accurate, complete, up-to-date" },
                  { num: 7, name: "Safeguards", desc: "Protect PI with appropriate security" },
                  { num: 8, name: "Openness", desc: "Be open about policies and practices" },
                  { num: 9, name: "Individual Access", desc: "Provide access to their own PI" },
                  { num: 10, name: "Challenging Compliance", desc: "Enable complaints about compliance" },
                ].map((principle) => (
                  <div key={principle.num} className="p-3 rounded-lg border bg-card">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="h-5 w-5 p-0 flex items-center justify-center text-xs">
                        {principle.num}
                      </Badge>
                      <span className="font-medium text-sm">{principle.name}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{principle.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </AuditLayout>
    </AuditAuthGate>
  );
}
