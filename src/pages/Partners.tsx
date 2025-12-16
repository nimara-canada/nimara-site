import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  DollarSign, 
  Shield, 
  Briefcase,
  ClipboardCheck,
  MessageSquare,
  UserCheck,
  Rocket,
  MapPin,
  Languages,
  FileText,
  ChevronDown
} from "lucide-react";
import { useState } from "react";

const TYPEFORM_URL = "https://form.typeform.com/to/IeUH5TlU";

const getTypeformUrl = () => {
  const params = new URLSearchParams({
    utm_source: new URLSearchParams(window.location.search).get('utm_source') || 'direct',
    utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || 'web',
    utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || 'partners',
    ref: document.referrer || '',
    page: 'partners'
  });
  return `${TYPEFORM_URL}?${params.toString()}`;
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Data
const whatWeDo = [
  "Finances — from budget to spending to proof",
  "Governance — boards, policies, bylaws",
  "Operations — systems, workflows, documentation",
  "People & capacity — hiring, HR, team setup"
];

const steps = [
  { 
    step: 1, 
    title: "Check Eligibility", 
    description: "2–3 minutes. Quick questions to see if we're a fit.",
    icon: ClipboardCheck
  },
  { 
    step: 2, 
    title: "Complete Application", 
    description: "If eligible, you'll continue directly into the full application.",
    icon: FileText
  },
  { 
    step: 3, 
    title: "Conversation + Screen", 
    description: "Short conversation and operator screen with our team.",
    icon: MessageSquare
  },
  { 
    step: 4, 
    title: "Onboarding + Matching", 
    description: "Get onboarded and matched to your first project.",
    icon: Rocket
  }
];

const importantTerms = [
  {
    title: "Independent Consultant",
    description: "You work as an independent contractor, not an employee. You maintain your own business."
  },
  {
    title: "Project-Based Work",
    description: "Engagements are project-based with payouts tied to milestones and outcomes delivered."
  },
  {
    title: "Outcome Standards",
    description: "Work must meet Nimara's delivery standards. Clear expectations, clear deliverables."
  },
  {
    title: "Payout Adjustments",
    description: "If a client dispute or refund occurs due to quality issues, partner payouts may be adjusted per the Partner Agreement."
  }
];

const lookingFor = [
  "Former ED, COO, Director, or VP-level operators",
  "Program and operations leaders",
  "Finance operators (bookkeeping, compliance, reporting)",
  "Governance and policy specialists",
  "People and capacity builders (HR, team development)",
  "Project delivery leads"
];

const weValue = [
  "Calm execution under pressure",
  "Clear thinking and practical systems",
  "Clean documentation and handoffs",
  "Respect for stretched nonprofit teams"
];

const tracks = [
  { 
    title: "Operations Partner", 
    description: "Systems, workflows, SOPs, and documentation for nonprofit operations.",
    icon: Briefcase
  },
  { 
    title: "Finance Partner", 
    description: "Budgeting, reconciliation, spending controls, audit readiness.",
    icon: DollarSign
  },
  { 
    title: "Governance Partner", 
    description: "Board setup, policies, bylaws, succession planning.",
    icon: Shield
  },
  { 
    title: "People & Capacity Partner", 
    description: "HR policies, hiring, team structures, performance management.",
    icon: Users
  },
  { 
    title: "Project Delivery Lead", 
    description: "End-to-end project management for multi-domain engagements.",
    icon: Rocket
  }
];

const projectTypes = [
  "NOHC Baselines — organizational health assessments",
  "Finance systems — budgets, tracking, compliance",
  "Governance foundations — boards, policies, structure",
  "Operations workflows — SOPs, documentation, processes",
  "People & capacity — HR, hiring, team development"
];

const faqs = [
  {
    question: "Is this a full-time job?",
    answer: "No. Partners are independent consultants, not employees. Work is project-based and flexible around your other commitments."
  },
  {
    question: "Do I need to find my own clients?",
    answer: "No. Nimara sources all projects and handles client relationships. You focus on delivery."
  },
  {
    question: "How does payment work?",
    answer: "Payouts are project-based, tied to milestones and outcomes. You invoice Nimara directly after each milestone."
  },
  {
    question: "What happens if there's a client dispute or refund?",
    answer: "If work doesn't meet delivery standards and a client dispute or refund occurs, partner payouts may be adjusted (holdback or clawback) per the Partner Agreement. We're transparent about this upfront."
  }
];

// Components
const Partners = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Join Nimara's Partner Network | Independent Consulting Opportunities</title>
        <meta 
          name="description" 
          content="Join Nimara's national team of nonprofit operators. Remote, project-based consulting for former EDs, COOs, and senior operators across Canada." 
        />
        <meta name="keywords" content="nonprofit consulting, independent consultant, remote work, Canada, nonprofit operations" />
        <link rel="canonical" href="https://nimara.ca/partners" />
      </Helmet>

      <Header activeRoute="/partners" />

      <main 
        id="main" 
        className="relative z-0"
        style={{ paddingTop: 'calc(var(--announcement-height, 0px) + 5rem)' }}
      >
        {/* Hero Section */}
        <section className="relative bg-secondary-background overflow-hidden">
          {/* Subtle grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
          
          <div className="relative max-w-6xl mx-auto px-6 lg:px-12 py-24 md:py-32 lg:py-40">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-block text-xs tracking-[0.2em] uppercase text-white/50 mb-6">
                Partner Network
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-[1.1] mb-6">
                Join Nimara's National Team Of Operators
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
                Canada-wide, remote. Nimara handles the business and delivery system—so you can focus on the work.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <motion.a
                  href={getTypeformUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-white text-secondary-background font-medium rounded-full transition-all hover:shadow-lg hover:shadow-white/20"
                >
                  Check Eligibility
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
                <a
                  href="mailto:partnerships@nimara.ca"
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 border border-white/20 text-white font-medium rounded-full transition-all hover:bg-white/5"
                >
                  Ask A Question
                </a>
              </div>
              
              <p className="text-sm text-white/40">
                2–3 minutes. If eligible, you'll continue directly to the application.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What Nimara Does */}
        <section className="py-20 md:py-28 lg:py-32 bg-background">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              <motion.div variants={itemVariants}>
                <span className="inline-block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  What We Do
                </span>
                <h2 className="text-3xl md:text-4xl font-medium text-foreground leading-tight mb-6">
                  We Help Canadian Nonprofits Build Core Systems
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nimara works with small and mid-size nonprofits to set up the foundational systems funders expect. Our partners deliver hands-on work across four domains:
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="space-y-4">
                {whatWeDo.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-5 bg-muted/30 rounded-2xl border border-border/50"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">{index + 1}</span>
                    </div>
                    <p className="text-foreground pt-1">{item}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-28 lg:py-32 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Process
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-foreground">
                How It Works
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {steps.map((step) => (
                <motion.div
                  key={step.step}
                  variants={itemVariants}
                  className="relative p-6 bg-background rounded-2xl border border-border/50 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      Step {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Important Terms */}
        <section className="py-20 md:py-28 lg:py-32 bg-background">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 bg-secondary-background rounded-3xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <Shield className="w-6 h-6 text-white/70" />
                <h2 className="text-2xl md:text-3xl font-medium text-white">
                  Important Terms
                </h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {importantTerms.map((term, index) => (
                  <div key={index} className="p-5 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-white font-medium mb-2">{term.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{term.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Who We're Looking For */}
        <section className="py-20 md:py-28 lg:py-32 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-20"
            >
              <motion.div variants={itemVariants}>
                <span className="inline-block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  Requirements
                </span>
                <h2 className="text-3xl md:text-4xl font-medium text-foreground leading-tight mb-8">
                  Who We're Looking For
                </h2>
                <ul className="space-y-3">
                  {lookingFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <div className="p-8 bg-background rounded-2xl border border-border/50">
                  <h3 className="text-lg font-medium text-foreground mb-6">We Value</h3>
                  <ul className="space-y-4">
                    {weValue.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Partner Tracks */}
        <section className="py-20 md:py-28 lg:py-32 bg-background">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Roles
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-foreground">
                Partner Tracks
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {tracks.map((track, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-muted/30 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <track.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">{track.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{track.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Where We're Hiring + Project Types */}
        <section className="py-20 md:py-28 lg:py-32 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-20"
            >
              {/* Where */}
              <motion.div variants={itemVariants}>
                <div className="p-8 bg-background rounded-2xl border border-border/50 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-medium text-foreground">Where We're Hiring</h3>
                  </div>
                  <p className="text-2xl font-medium text-foreground mb-6">Canada-wide, remote</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Languages className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Bonus: Bilingual English/French</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Bonus: Government-funded program reporting & compliance experience</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Types */}
              <motion.div variants={itemVariants}>
                <span className="inline-block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  Work Types
                </span>
                <h3 className="text-xl font-medium text-foreground mb-6">Project Types</h3>
                <ul className="space-y-3">
                  {projectTypes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-primary">{index + 1}</span>
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 lg:py-32 bg-background">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-foreground">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="border border-border/50 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
                  >
                    <span className="font-medium text-foreground pr-4">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28 lg:py-32 bg-secondary-background">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6">
                Ready To Operate With A Real Backbone Behind You?
              </h2>
              <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
                Join a national network of senior nonprofit operators. Focus on the work you do best.
              </p>
              <motion.a
                href={getTypeformUrl()}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 h-14 px-10 bg-white text-secondary-background font-medium rounded-full transition-all hover:shadow-lg hover:shadow-white/20"
              >
                Check Eligibility
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              
              <p className="mt-10 text-sm text-white/40">
                Questions? Email us at{" "}
                <a 
                  href="mailto:partnerships@nimara.ca" 
                  className="text-white/60 hover:text-white underline underline-offset-2"
                >
                  partnerships@nimara.ca
                </a>
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Partners;
