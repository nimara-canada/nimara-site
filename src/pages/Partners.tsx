import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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

// Data
const whatWeDo = [
  { title: "Finances", desc: "From budget to spending to proof" },
  { title: "Governance", desc: "Boards, policies, bylaws" },
  { title: "Operations", desc: "Systems, workflows, documentation" },
  { title: "People & Capacity", desc: "Hiring, HR, team setup" }
];

const steps = [
  { title: "Check Eligibility", description: "2–3 minutes. Quick questions to see if we're a fit." },
  { title: "Complete Application", description: "If eligible, you'll continue directly into the full application." },
  { title: "Conversation + Screen", description: "Short conversation and operator screen with our team." },
  { title: "Onboarding + Matching", description: "Get onboarded and matched to your first project." }
];

const importantTerms = [
  { title: "Independent Consultant", description: "You work as an independent contractor, not an employee. You maintain your own business." },
  { title: "Project-Based Work", description: "Engagements are project-based with payouts tied to milestones and outcomes delivered." },
  { title: "Outcome Standards", description: "Work must meet Nimara's delivery standards. Clear expectations, clear deliverables." },
  { title: "Payout Adjustments", description: "If a client dispute or refund occurs due to quality issues, partner payouts may be adjusted per the Partner Agreement." }
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
  { title: "Operations Partner", description: "Systems, workflows, SOPs, and documentation for nonprofit operations." },
  { title: "Finance Partner", description: "Budgeting, reconciliation, spending controls, audit readiness." },
  { title: "Governance Partner", description: "Board setup, policies, bylaws, succession planning." },
  { title: "People & Capacity Partner", description: "HR policies, hiring, team structures, performance management." },
  { title: "Project Delivery Lead", description: "End-to-end project management for multi-domain engagements." }
];

const projectTypes = [
  { title: "NOHC Baselines", desc: "Organizational health assessments" },
  { title: "Finance Systems", desc: "Budgets, tracking, compliance" },
  { title: "Governance Foundations", desc: "Boards, policies, structure" },
  { title: "Operations Workflows", desc: "SOPs, documentation, processes" },
  { title: "People & Capacity", desc: "HR, hiring, team development" }
];

const faqs = [
  { question: "Is this a full-time job?", answer: "No. Partners are independent consultants, not employees. Work is project-based and flexible around your other commitments." },
  { question: "Do I need to find my own clients?", answer: "No. Nimara sources all projects and handles client relationships. You focus on delivery." },
  { question: "How does payment work?", answer: "Payouts are project-based, tied to milestones and outcomes. You invoice Nimara directly after each milestone." },
  { question: "What happens if there's a client dispute or refund?", answer: "If work doesn't meet delivery standards and a client dispute or refund occurs, partner payouts may be adjusted (holdback or clawback) per the Partner Agreement. We're transparent about this upfront." }
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
        <section className="bg-secondary-background min-h-[90vh] flex items-center">
          <div className="container mx-auto px-6 sm:px-8 lg:px-16 py-32 md:py-40">
            <div className="max-w-4xl">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-white/40 uppercase tracking-[0.25em] text-xs mb-10"
              >
                Partner Network
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="font-sans text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white mb-10 leading-[1.05] tracking-tight"
              >
                Join Nimara's National Team
                <br />
                <span className="italic font-light">Of Operators.</span>
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="max-w-2xl"
              >
                <p className="text-lg md:text-xl text-white/70 mb-6 leading-relaxed font-light">
                  Canada-wide, remote. Nimara handles the business and delivery system—so you can focus on the work.
                </p>

                <p className="text-base md:text-lg text-white/50 mb-14 leading-relaxed font-light">
                  We're building a bench of senior operators who know nonprofit systems inside and out.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-8 items-start"
              >
                <Button 
                  size="lg" 
                  onClick={() => window.open(getTypeformUrl(), '_blank')}
                  className="bg-white text-secondary-background hover:bg-white/95 rounded-none px-10 py-7 text-sm tracking-wide font-medium"
                >
                  Check Your Eligibility
                </Button>
                <a
                  href="mailto:partnerships@nimara.ca"
                  className="text-white/50 hover:text-white/80 text-sm tracking-wide transition-colors duration-500 border-b border-white/20 hover:border-white/40 pb-1"
                >
                  Ask a question
                </a>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-white/30 text-sm mt-8 font-light"
              >
                2–3 minutes. If eligible, you'll continue directly to the application.
              </motion.p>
            </div>
          </div>
        </section>

        {/* What Nimara Does */}
        <section className="bg-background py-28 md:py-36">
          <div className="container mx-auto px-6 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
              <div className="lg:col-span-5">
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-muted-foreground/60 uppercase tracking-[0.25em] text-xs mb-6"
                >
                  What We Do
                </motion.p>
                <motion.h2 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="font-sans text-3xl md:text-4xl font-semibold text-foreground leading-tight tracking-tight mb-10"
                >
                  We Help Canadian Nonprofits Build <span className="italic font-light">Core Systems.</span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-muted-foreground/70 text-base leading-relaxed font-light"
                >
                  Nimara works with small and mid-size nonprofits to set up the foundational systems funders expect. Our partners deliver hands-on work across four domains.
                </motion.p>
              </div>
              
              <div className="lg:col-span-7">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-10"
                >
                  {whatWeDo.map((item, index) => (
                    <div key={index} className="flex items-baseline gap-5">
                      <span className="text-muted-foreground/25 text-xs font-light tracking-wider w-5 flex-shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="text-foreground/90 font-medium text-base mb-2">{item.title}</h3>
                        <p className="text-muted-foreground/60 text-sm font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-secondary-background py-28 md:py-36">
          <div className="container mx-auto px-6 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
              <div className="lg:col-span-4">
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-white/30 uppercase tracking-[0.25em] text-xs mb-6"
                >
                  Process
                </motion.p>
                <motion.h2 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="font-sans text-3xl md:text-4xl font-semibold text-white leading-tight tracking-tight"
                >
                  How It <span className="italic font-light">Works</span>
                </motion.h2>
              </div>
              
              <div className="lg:col-span-8">
                <div className="space-y-0">
                  {steps.map((step, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.08 }}
                      className="grid grid-cols-12 gap-8 py-8 border-b border-white/10 last:border-b-0"
                    >
                      <div className="col-span-2 md:col-span-1">
                        <span className="text-white/15 text-4xl md:text-5xl font-light">
                          {index + 1}
                        </span>
                      </div>
                      <div className="col-span-10 md:col-span-11 pt-2">
                        <h3 className="text-white/90 font-medium text-base mb-2 tracking-wide">
                          {step.title}
                        </h3>
                        <p className="text-white/50 leading-relaxed font-light text-sm">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Terms */}
        <section className="bg-background py-28 md:py-36 border-t border-border/30">
          <div className="container mx-auto px-6 sm:px-8 lg:px-16">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mb-20"
            >
              <p className="text-muted-foreground/60 uppercase tracking-[0.25em] text-xs mb-6">
                Transparency
              </p>
              <h2 className="font-sans text-3xl md:text-4xl font-semibold text-foreground leading-tight tracking-tight">
                Important Terms—<span className="italic font-light">Upfront.</span>
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
              {importantTerms.map((term, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="flex gap-8"
                >
                  <span className="text-muted-foreground/25 text-xs font-light tracking-wider w-5 flex-shrink-0 pt-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-foreground/90 font-medium text-base mb-3">{term.title}</h3>
                    <p className="text-muted-foreground/60 leading-relaxed font-light text-sm">{term.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We're Looking For */}
        <section className="bg-secondary-background py-28 md:py-36">
          <div className="container mx-auto px-6 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-white/30 uppercase tracking-[0.25em] text-xs mb-6">
                  Requirements
                </p>
                <h2 className="font-sans text-3xl md:text-4xl font-semibold text-white leading-tight tracking-tight mb-12">
                  Who We're <span className="italic font-light">Looking For</span>
                </h2>
                <div className="space-y-6">
                  {lookingFor.map((item, index) => (
                    <div key={index} className="flex gap-8">
                      <span className="text-white/20 text-xs font-light tracking-wider w-5 flex-shrink-0 pt-1">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className="text-white/70 leading-relaxed font-light">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-white/30 uppercase tracking-[0.25em] text-xs mb-6">
                  Values
                </p>
                <h3 className="font-sans text-2xl md:text-3xl font-semibold text-white leading-tight tracking-tight mb-12">
                  What We <span className="italic font-light">Value</span>
                </h3>
                <div className="space-y-6">
                  {weValue.map((item, index) => (
                    <div key={index} className="flex gap-8">
                      <span className="text-white/20 text-xs font-light tracking-wider w-5 flex-shrink-0 pt-1">
                        —
                      </span>
                      <p className="text-white/60 leading-relaxed font-light">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partner Tracks */}
        <section className="bg-background py-28 md:py-36 border-t border-border/30">
          <div className="container mx-auto px-6 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
              <div className="lg:col-span-4">
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-muted-foreground/60 uppercase tracking-[0.25em] text-xs mb-6"
                >
                  Roles
                </motion.p>
                <motion.h2 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="font-sans text-3xl md:text-4xl font-semibold text-foreground leading-tight tracking-tight mb-10"
                >
                  Partner <span className="italic font-light">Tracks</span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-muted-foreground/70 text-base leading-relaxed font-light"
                >
                  Five specialized tracks for different areas of nonprofit expertise.
                </motion.p>
              </div>
              
              <div className="lg:col-span-8">
                <div className="space-y-0">
                  {tracks.map((track, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.08 }}
                      className="border-t border-border/50 py-8 first:border-t-0 first:pt-0"
                    >
                      <div className="flex gap-10 items-baseline">
                        <span className="text-muted-foreground/30 text-xs font-light tracking-wider w-6 flex-shrink-0">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <h3 className="text-foreground/90 font-medium text-lg mb-2">{track.title}</h3>
                          <p className="text-muted-foreground/60 leading-relaxed font-light">{track.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where We're Hiring + Project Types */}
        <section className="bg-secondary-background py-28 md:py-36">
          <div className="container mx-auto px-6 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-white/30 uppercase tracking-[0.25em] text-xs mb-6">
                  Location
                </p>
                <h3 className="font-sans text-3xl md:text-4xl font-semibold text-white leading-tight tracking-tight mb-10">
                  Canada-Wide, <span className="italic font-light">Remote</span>
                </h3>
                
                <div className="space-y-6 mt-12">
                  <div className="flex gap-8">
                    <span className="text-white/20 text-xs font-light tracking-wider w-12 flex-shrink-0 pt-1">
                      Bonus
                    </span>
                    <p className="text-white/60 leading-relaxed font-light">Bilingual English/French</p>
                  </div>
                  <div className="flex gap-8">
                    <span className="text-white/20 text-xs font-light tracking-wider w-12 flex-shrink-0 pt-1">
                      Bonus
                    </span>
                    <p className="text-white/60 leading-relaxed font-light">Government-funded program reporting & compliance experience</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-white/30 uppercase tracking-[0.25em] text-xs mb-6">
                  Work Types
                </p>
                <h3 className="font-sans text-2xl md:text-3xl font-semibold text-white leading-tight tracking-tight mb-10">
                  Project <span className="italic font-light">Types</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
                  {projectTypes.map((item, index) => (
                    <div key={index} className="flex items-baseline gap-5">
                      <span className="text-white/20 text-xs font-light tracking-wider w-5 flex-shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <p className="text-white/80 font-medium text-sm">{item.title}</p>
                        <p className="text-white/40 text-xs font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-background py-28 md:py-36 border-t border-border/30">
          <div className="container mx-auto px-6 sm:px-8 lg:px-16 max-w-4xl">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <p className="text-muted-foreground/60 uppercase tracking-[0.25em] text-xs mb-6">
                Questions
              </p>
              <h2 className="font-sans text-3xl md:text-4xl font-semibold text-foreground leading-tight tracking-tight">
                Frequently <span className="italic font-light">Asked</span>
              </h2>
            </motion.div>

            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="border-t border-border/50 first:border-t-0"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between py-8 text-left"
                  >
                    <span className="text-foreground/80 font-medium pr-8">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground/40 transition-transform duration-300 flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-muted-foreground/60 leading-relaxed font-light pb-8">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-secondary-background py-32 md:py-40">
          <div className="container mx-auto px-6 sm:px-8 lg:px-16">
            <div className="max-w-2xl mx-auto text-center">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-white/30 uppercase tracking-[0.25em] text-xs mb-8"
              >
                Join The Network
              </motion.p>
              
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8 leading-tight tracking-tight"
              >
                Ready To Operate With A Real <span className="italic font-light">Backbone?</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base text-white/50 mb-14 font-light"
              >
                Join a national network of senior nonprofit operators. Focus on the work you do best.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Button 
                  size="lg" 
                  onClick={() => window.open(getTypeformUrl(), '_blank')}
                  className="bg-white text-secondary-background hover:bg-white/95 rounded-none px-14 py-7 text-sm tracking-wide font-medium"
                >
                  Check Your Eligibility
                </Button>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 text-white/30 text-sm font-light"
              >
                Questions? Email us at{" "}
                <a 
                  href="mailto:partnerships@nimara.ca" 
                  className="text-white/50 hover:text-white/70 transition-colors duration-500 border-b border-white/20 hover:border-white/40"
                >
                  partnerships@nimara.ca
                </a>
              </motion.p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Partners;
