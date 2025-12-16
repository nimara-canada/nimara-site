import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronDown,
  Sparkles,
  Globe,
  Award
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

// Data
const whatWeDo = [
  { title: "Finances", desc: "From budget to spending to proof" },
  { title: "Governance", desc: "Boards, policies, bylaws" },
  { title: "Operations", desc: "Systems, workflows, documentation" },
  { title: "People & Capacity", desc: "Hiring, HR, team setup" }
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
    description: "You work as an independent contractor, not an employee. You maintain your own business.",
    icon: Briefcase
  },
  {
    title: "Project-Based Work",
    description: "Engagements are project-based with payouts tied to milestones and outcomes delivered.",
    icon: FileText
  },
  {
    title: "Outcome Standards",
    description: "Work must meet Nimara's delivery standards. Clear expectations, clear deliverables.",
    icon: Award
  },
  {
    title: "Payout Adjustments",
    description: "If a client dispute or refund occurs due to quality issues, partner payouts may be adjusted per the Partner Agreement.",
    icon: Shield
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
    icon: Briefcase,
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  { 
    title: "Finance Partner", 
    description: "Budgeting, reconciliation, spending controls, audit readiness.",
    icon: DollarSign,
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  { 
    title: "Governance Partner", 
    description: "Board setup, policies, bylaws, succession planning.",
    icon: Shield,
    gradient: "from-violet-500/20 to-purple-500/20"
  },
  { 
    title: "People & Capacity Partner", 
    description: "HR policies, hiring, team structures, performance management.",
    icon: Users,
    gradient: "from-rose-500/20 to-pink-500/20"
  },
  { 
    title: "Project Delivery Lead", 
    description: "End-to-end project management for multi-domain engagements.",
    icon: Rocket,
    gradient: "from-amber-500/20 to-orange-500/20"
  }
];

const projectTypes = [
  { title: "NOHC Baselines", desc: "Organizational health assessments" },
  { title: "Finance Systems", desc: "Budgets, tracking, compliance" },
  { title: "Governance Foundations", desc: "Boards, policies, structure" },
  { title: "Operations Workflows", desc: "SOPs, documentation, processes" },
  { title: "People & Capacity", desc: "HR, hiring, team development" }
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
        <section className="relative min-h-[90vh] flex items-center bg-secondary-background overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                backgroundSize: '80px 80px'
              }}
            />
          </div>

          {/* Floating decorative elements */}
          <motion.div 
            className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/4 left-[10%] w-48 h-48 rounded-full bg-gradient-to-br from-accent/10 to-transparent blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 md:py-32 w-full">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <motion.div 
                className="lg:col-span-7"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 mb-8"
                >
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm text-white/70">Partner Network</span>
                </motion.div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium text-white leading-[1.05] mb-8 tracking-tight">
                  Join Nimara's
                  <br />
                  <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                    National Team
                  </span>
                  <br />
                  Of Operators
                </h1>

                <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-12 max-w-xl font-light">
                  Canada-wide, remote. Nimara handles the business and delivery system—so you can focus on the work.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <motion.a
                    href={getTypeformUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(124, 58, 237, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex items-center justify-center gap-3 h-16 px-10 bg-gradient-to-r from-primary to-primary/90 text-white font-medium rounded-full transition-all shadow-lg shadow-primary/25"
                  >
                    Check Eligibility
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                  <motion.a
                    href="mailto:partnerships@nimara.ca"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 h-16 px-10 bg-white/[0.05] border border-white/20 text-white font-medium rounded-full transition-all hover:bg-white/10 backdrop-blur-sm"
                  >
                    Ask A Question
                  </motion.a>
                </div>
                
                <p className="text-sm text-white/40">
                  2–3 minutes. If eligible, you'll continue directly to the application.
                </p>
              </motion.div>

              {/* Right side - Stats/Info cards */}
              <motion.div 
                className="lg:col-span-5 hidden lg:block"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative">
                  {/* Main card */}
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Globe className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-white/60 text-sm">Canada-wide Network</span>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <p className="text-4xl font-semibold text-white mb-1">100%</p>
                        <p className="text-white/50 text-sm">Remote Work</p>
                      </div>
                      <div className="h-px bg-white/10" />
                      <div>
                        <p className="text-4xl font-semibold text-white mb-1">Project</p>
                        <p className="text-white/50 text-sm">Based Engagements</p>
                      </div>
                      <div className="h-px bg-white/10" />
                      <div>
                        <p className="text-4xl font-semibold text-white mb-1">5</p>
                        <p className="text-white/50 text-sm">Partner Tracks</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <motion.div 
                    className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-accent text-secondary-background text-sm font-medium shadow-lg"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Now Hiring
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-white/50"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>

        {/* What Nimara Does */}
        <section className="relative py-32 md:py-40 bg-background overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start"
            >
              <motion.div variants={itemVariants} className="lg:col-span-5 lg:sticky lg:top-32">
                <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
                  <span className="w-8 h-px bg-primary" />
                  What We Do
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] mb-8">
                  We Help Canadian Nonprofits Build
                  <span className="text-primary"> Core Systems</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nimara works with small and mid-size nonprofits to set up the foundational systems funders expect. Our partners deliver hands-on work across four domains.
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="lg:col-span-7">
                <div className="grid sm:grid-cols-2 gap-6">
                  {whatWeDo.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="group relative p-8 rounded-3xl bg-gradient-to-br from-muted/50 to-muted/20 border border-border/50 hover:border-primary/30 transition-all duration-300"
                    >
                      <span className="absolute top-6 right-6 text-7xl font-bold text-primary/10 leading-none">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="relative">
                        <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="relative py-32 md:py-40 bg-secondary-background overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/40 mb-6">
                <span className="w-8 h-px bg-primary/60" />
                Process
                <span className="w-8 h-px bg-primary/60" />
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white">
                How It Works
              </h2>
            </motion.div>

            <div className="relative">
              {/* Connection line */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent hidden lg:block" />
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {steps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    variants={itemVariants}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="relative group"
                  >
                    <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-primary/30 transition-all duration-300 h-full backdrop-blur-sm">
                      {/* Step number */}
                      <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold text-sm shadow-lg shadow-primary/30">
                        {step.step}
                      </div>
                      
                      <div className="pt-4">
                        <div className="w-14 h-14 rounded-2xl bg-white/[0.05] flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                          <step.icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                        <p className="text-white/60 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Important Terms */}
        <section className="relative py-32 md:py-40 bg-background overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
                <Shield className="w-4 h-4" />
                Transparency
              </span>
              <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-6">
                Important Terms
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We believe in being upfront about how we work together.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {importantTerms.map((term, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative p-8 rounded-3xl bg-gradient-to-br from-secondary-background to-secondary-background/80 border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient border effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-[1px] rounded-3xl bg-secondary-background" />
                  </div>
                  
                  <div className="relative flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <term.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{term.title}</h3>
                      <p className="text-white/60 leading-relaxed">{term.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Who We're Looking For */}
        <section className="relative py-32 md:py-40 bg-secondary-background overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}
          />
          
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-12 gap-16"
            >
              <motion.div variants={itemVariants} className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/40 mb-6">
                  <span className="w-8 h-px bg-primary/60" />
                  Requirements
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.1] mb-12">
                  Who We're
                  <br />
                  <span className="text-primary">Looking For</span>
                </h2>
                <div className="space-y-4">
                  {lookingFor.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 8, transition: { duration: 0.2 } }}
                      className="group flex items-center gap-5 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-primary/20 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <span className="text-white/80 group-hover:text-white transition-colors font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="lg:col-span-5">
                <div className="lg:sticky lg:top-32">
                  <div className="relative p-10 rounded-[2rem] bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-[100px]" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-[80px]" />
                    
                    <div className="relative">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-8">
                        <UserCheck className="w-4 h-4" />
                        Core Values
                      </div>
                      <h3 className="text-3xl font-semibold text-white mb-10">What We Value</h3>
                      <ul className="space-y-6">
                        {weValue.map((item, index) => (
                          <li key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                              <CheckCircle2 className="w-4 h-4 text-accent" />
                            </div>
                            <span className="text-white/70 text-lg leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Partner Tracks */}
        <section className="relative py-32 md:py-40 bg-background overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
                <span className="w-8 h-px bg-primary" />
                Roles
                <span className="w-8 h-px bg-primary" />
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
                Partner Tracks
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Five specialized tracks for different areas of nonprofit expertise.
              </p>
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
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className={`group relative p-8 rounded-3xl bg-gradient-to-br ${track.gradient} border border-border/50 hover:border-primary/30 transition-all duration-300 ${index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                >
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-background flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                      <track.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{track.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{track.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Where We're Hiring + Project Types */}
        <section className="relative py-32 md:py-40 bg-secondary-background overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-12 gap-8"
            >
              {/* Where card - spans 5 columns */}
              <motion.div variants={itemVariants} className="lg:col-span-5">
                <div className="h-full p-10 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <MapPin className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <span className="text-white/40 text-sm">Location</span>
                      <h3 className="text-2xl font-semibold text-white">Where We're Hiring</h3>
                    </div>
                  </div>
                  
                  <p className="text-4xl md:text-5xl font-semibold text-white mb-8">
                    Canada-wide,
                    <br />
                    <span className="text-primary">Remote</span>
                  </p>
                  
                  <div className="space-y-4 pt-6 border-t border-white/10">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03]">
                      <Languages className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs text-accent font-medium uppercase tracking-wider">Bonus</span>
                        <p className="text-white/70">Bilingual English/French</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03]">
                      <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs text-accent font-medium uppercase tracking-wider">Bonus</span>
                        <p className="text-white/70">Government-funded program reporting & compliance experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Types - spans 7 columns */}
              <motion.div variants={itemVariants} className="lg:col-span-7">
                <div className="h-full p-10 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10">
                  <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/40 mb-4">
                    <span className="w-8 h-px bg-primary/60" />
                    Work Types
                  </span>
                  <h3 className="text-3xl font-semibold text-white mb-10">Project Types</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {projectTypes.map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                        className="group p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-primary/20 hover:bg-white/[0.05] transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-bold text-primary">{index + 1}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                            <p className="text-sm text-white/50">{item.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative py-32 md:py-40 bg-background overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
                <span className="w-8 h-px bg-primary" />
                Questions
                <span className="w-8 h-px bg-primary" />
              </span>
              <h2 className="text-4xl md:text-5xl font-medium text-foreground">
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
                  className="group"
                >
                  <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    openFaq === index 
                      ? 'border-primary/30 bg-muted/30' 
                      : 'border-border/50 hover:border-primary/20'
                  }`}>
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="text-lg font-medium text-foreground pr-4">{faq.question}</span>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openFaq === index ? 'bg-primary text-white rotate-180' : 'bg-muted text-muted-foreground'
                      }`}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <div className="px-6 pb-6">
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-32 md:py-40 bg-secondary-background overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
          
          {/* Floating elements */}
          <motion.div 
            className="absolute top-1/4 left-[10%] w-32 h-32 rounded-full bg-primary/10 blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-[10%] w-48 h-48 rounded-full bg-accent/10 blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 mb-10"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-white/70">Join Our Network</span>
              </motion.div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1] mb-8">
                Ready To Operate With A
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Real Backbone
                </span>
                {" "}Behind You?
              </h2>
              
              <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto">
                Join a national network of senior nonprofit operators. Focus on the work you do best.
              </p>
              
              <motion.a
                href={getTypeformUrl()}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(124, 58, 237, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 h-16 px-12 bg-gradient-to-r from-primary to-primary/90 text-white text-lg font-medium rounded-full transition-all shadow-xl shadow-primary/30"
              >
                Check Eligibility
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.a>
              
              <p className="mt-12 text-white/40">
                Questions? Email us at{" "}
                <a 
                  href="mailto:partnerships@nimara.ca" 
                  className="text-white/60 hover:text-white underline underline-offset-4 transition-colors"
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
