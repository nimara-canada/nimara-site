import { useState, useEffect } from "react";
import { ArrowRight, Check, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    question: "When does it start?",
    answer: "February 11, 2026. The cohort runs for 6 weeks and ends March 25, 2026."
  },
  {
    question: "How much time do I need each week?",
    answer: "About 4 hours: one 90-minute group call, one 90-minute build session, and about an hour of prep. All online."
  },
  {
    question: "Do I need to buy new software?",
    answer: "No. We build everything in the tools you already have — Google Workspace or Microsoft 365."
  },
  {
    question: "Is this just training?",
    answer: "No. Training gives you knowledge and leaves. We build the actual systems in your actual tools. When we leave, the systems work."
  },
  {
    question: "Why only 15 spots?",
    answer: "We give each organization personal attention. More than 15 means less attention for you."
  },
  {
    question: "What's the refund policy?",
    answer: "We offer a full refund if systems aren't successfully installed by Week 6, provided you meet our attendance and document-sharing requirements."
  }
];

const ROTATING_WORDS = ["Clarity", "Confidence", "Proof", "Control"];

const SmartTeamCohort = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1629]">
      {/* Sticky Mobile CTA */}
      <StickyMobileCTA href="https://form.typeform.com/to/Dsi3pXkx" label="Apply Now" />

      {/* ========== SECTION 1: HERO ========== */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#0f1629] px-6 py-20">
        <div className="max-w-[1000px] mx-auto text-center">
          {/* Label */}
          <p className="text-sm font-semibold uppercase tracking-[2px] text-[#96A0B5] mb-8">
            For Canadian Nonprofits • 1–15 Staff
          </p>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(48px,8vw,80px)] font-extrabold text-white leading-[1.05] tracking-[-0.02em] mb-8"
          >
            Stop running your
            <br />
            nonprofit from your — <span className="text-[#ACFCE3]">head.</span>
          </motion.h1>

          {/* Subtitle */}
          <p className="text-[clamp(18px,3vw,20px)] font-medium text-white/70 max-w-[500px] mx-auto mb-12 leading-[1.5]">
            When funders ask for proof, you need to find it fast.
            <br />
            We build systems that make that possible.
          </p>

          {/* Bullets */}
          <ul className="space-y-4 mb-12">
            {[
              "Find any document in under 2 minutes",
              "Track grant spending without guesswork",
              "Pull reports when funders ask"
            ].map((item, i) => (
              <li key={i} className="flex items-center justify-center gap-3 text-lg text-white/85">
                <Check className="w-5 h-5 text-[#ACFCE3]" />
                {item}
              </li>
            ))}
          </ul>

          {/* Process Flow */}
          <p className="text-[13px] font-semibold uppercase tracking-[2px] text-[#96A0B5] mb-12">
            Diagnostic <span className="mx-3">→</span> Build <span className="mx-3">→</span> Test <span className="mx-3">→</span> Launch
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button 
              size="lg" 
              className="bg-[#6945D8] hover:bg-[#5835C0] text-white rounded-lg px-10 py-5 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5" 
              asChild
            >
              <a href="https://form.typeform.com/to/Dsi3pXkx" target="_blank" rel="noopener noreferrer">
                Apply for February Cohort
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <a 
              href="#how-it-works" 
              className="text-base font-medium text-white hover:text-[#ACFCE3] transition-colors"
            >
              See how it works →
            </a>
          </div>

          {/* Bottom Text */}
          <p className="text-sm text-[#96A0B5]">
            Starts Feb 11, 2026 • 15 spots • $9,450 CAD
          </p>
        </div>
      </section>

      {/* ========== SECTION 2: SOUND FAMILIAR? (PROBLEM) ========== */}
      <section className="bg-[#0f1629] py-20 md:py-28 lg:py-36 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Headline - Large, left-aligned like homepage FAQ */}
          <h2 className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-[-0.03em] leading-[1.05]">
            Sound familiar?
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/60 mb-12 md:mb-16 max-w-xl">
            Everything lives in your head. <span className="text-[#ACFCE3]">And funders can tell.</span>
          </p>

          {/* Pain Points - Numbered list like editorial style */}
          <div className="space-y-0">
            {[
              { 
                quote: "Where's that receipt?", 
                pain: "When funders ask for proof and you can't find it fast — they notice."
              },
              { 
                quote: "I can't take a vacation.", 
                pain: "If you step away, nobody can answer funder questions. That's a red flag."
              },
              { 
                quote: "What if we get audited?", 
                pain: "Messy records lead to audit findings. Audit findings mean funders don't come back."
              },
              { 
                quote: "We do good work, but...", 
                pain: "You can't prove it. No proof = no trust. No trust = no second grant."
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="border-b border-white/10 py-6 sm:py-8 flex gap-6 items-start group"
              >
                {/* Number */}
                <span className="text-sm font-semibold text-[#ACFCE3] tabular-nums shrink-0 pt-1">
                  0{i + 1}
                </span>
                
                {/* Content */}
                <div className="flex-1">
                  <p className="text-base sm:text-lg font-medium text-white mb-2">
                    <span className="italic">"{item.quote}"</span>
                  </p>
                  <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                    {item.pain}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Line */}
          <div className="mt-12 md:mt-16 pt-8 border-t border-white/10">
            <p className="text-xl sm:text-2xl font-semibold text-white leading-snug">
              Organized nonprofits get funded.
              <br />
              <span className="text-white/50">Messy ones get passed over.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: VALUE STATEMENT ========== */}
      <section className="bg-white py-[140px] md:py-[180px] px-6 text-center">
        <div className="max-w-[1000px] mx-auto">
          {/* Label */}
          <p className="text-sm font-semibold uppercase tracking-[2px] text-[#96A0B5] mb-6">
            With the Nonprofit Machine, you get
          </p>

          {/* Big Rotating Word */}
          <motion.h2 
            key={wordIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-[clamp(64px,12vw,120px)] font-extrabold text-[#202654] leading-[1] mb-8"
          >
            {ROTATING_WORDS[wordIndex]}
          </motion.h2>

          {/* Subheadline */}
          <p className="text-[clamp(24px,4vw,28px)] font-medium text-[#202654] mb-4">
            A shared system everyone follows.
          </p>

          {/* Description */}
          <p className="text-lg text-[#96A0B5]">
            Decisions, files, and spending — documented and ready.
          </p>
        </div>
      </section>

      {/* ========== SECTION 3: THE 4 SYSTEMS ========== */}
      <section className="bg-[#0f1629] py-[140px] px-6">
        <div className="max-w-[1000px] mx-auto">
          {/* Label */}
          <p className="text-center text-sm font-semibold uppercase tracking-[2px] text-[#ACFCE3] mb-6">
            What We Build
          </p>

          {/* Headline */}
          <h2 className="text-center text-[clamp(36px,5vw,56px)] font-extrabold text-white leading-[1.1] mb-20">
            4 systems. 6 weeks.
            <br />
            Built in your tools.
          </h2>

          {/* 2x2 Grid */}
          <div className="grid sm:grid-cols-2 gap-12 max-w-[800px] mx-auto">
            {[
              { emoji: "💰", title: "Money System", desc: "Every dollar tracked. Audit-ready." },
              { emoji: "👥", title: "Board System", desc: "Every decision logged. Clear rules." },
              { emoji: "📁", title: "File System", desc: "Find anything in 2 minutes." },
              { emoji: "📊", title: "Impact System", desc: "Your results in 3 clicks." }
            ].map((item, i) => (
              <div key={i} className="text-left">
                <span className="text-[32px] mb-4 block">{item.emoji}</span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-base text-white/70 leading-[1.5]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: HOW IT WORKS ========== */}
      <section id="how-it-works" className="bg-white py-[140px] px-6">
        <div className="max-w-[1000px] mx-auto">
          {/* Label */}
          <p className="text-center text-sm font-semibold uppercase tracking-[2px] text-[#6945D8] mb-6">
            How It Works
          </p>

          {/* Headline */}
          <h2 className="text-center text-[clamp(36px,5vw,56px)] font-extrabold text-[#202654] leading-[1.1] mb-20">
            6 weeks. Done with you.
          </h2>

          {/* 3 Steps */}
          <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-20 max-w-[900px] mx-auto">
            {[
              { num: "1", title: "We find the gaps", desc: "Week 1: Diagnostic" },
              { num: "2", title: "We build together", desc: "Weeks 2–5: One system per week" },
              { num: "3", title: "We test everything", desc: "Week 6: Stress test" }
            ].map((step, i) => (
              <div key={i} className="flex-1 text-center">
                <p className="text-5xl font-extrabold text-[#6945D8] mb-4">{step.num}</p>
                <h3 className="text-xl font-bold text-[#202654] mb-2">{step.title}</h3>
                <p className="text-base text-[#96A0B5]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: TIME COMMITMENT ========== */}
      <section className="bg-[#0f1629] py-[100px] px-6 text-center">
        <div className="max-w-[1000px] mx-auto">
          {/* Headline */}
          <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold text-white mb-16">
            4 hours a week. — <span className="text-[#ACFCE3]">100% online.</span>
          </h2>

          {/* 3 Stats */}
          <div className="flex flex-col sm:flex-row justify-center gap-16 sm:gap-20">
            {[
              { value: "90 min", label: "Group Call" },
              { value: "90 min", label: "Build Session" },
              { value: "1 hour", label: "Your Prep" }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-[32px] font-bold text-[#ACFCE3] mb-2">{stat.value}</p>
                <p className="text-base text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 6: PRICING ========== */}
      <section className="bg-white py-[140px] px-6 text-center">
        <div className="max-w-[1000px] mx-auto">
          {/* Label */}
          <p className="text-sm font-semibold uppercase tracking-[2px] text-[#6945D8] mb-6">
            Investment
          </p>

          {/* Headline */}
          <h2 className="text-[clamp(36px,5vw,48px)] font-extrabold text-[#202654] mb-16">
            One price. Everything included.
          </h2>

          {/* Pricing Card */}
          <div className="max-w-[480px] mx-auto bg-white border-2 border-[#E8E8E8] rounded-3xl p-12 md:p-16">
            <p className="text-6xl font-extrabold text-[#202654] leading-[1]">$9,450</p>
            <p className="text-base text-[#96A0B5] mb-10">CAD per organization</p>

            <ul className="text-left space-y-0 mb-10">
              {[
                "Full diagnostic",
                "4 systems built in your tools",
                "6 weeks of live sessions",
                "Week 6 stress test",
                "12-month support"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 py-3 border-b border-[#F0F0F0] last:border-b-0 text-base text-[#202654]">
                  <Check className="w-5 h-5 text-[#6945D8]" />
                  {item}
                </li>
              ))}
            </ul>

            <Button 
              size="lg" 
              className="w-full bg-[#6945D8] hover:bg-[#5835C0] text-white rounded-lg py-5 text-base font-semibold transition-all duration-300" 
              asChild
            >
              <a href="https://form.typeform.com/to/Dsi3pXkx" target="_blank" rel="noopener noreferrer">
                Apply for February Cohort
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Sub-text */}
          <p className="mt-6 text-sm text-[#96A0B5]">
            15 spots only • Capacity building grant eligible
          </p>
        </div>
      </section>

      {/* ========== SECTION 7: FAQ ========== */}
      <section className="bg-white py-[140px] px-6">
        <div className="max-w-[700px] mx-auto">
          {/* Label */}
          <p className="text-center text-sm font-semibold uppercase tracking-[2px] text-[#6945D8] mb-6">
            Questions
          </p>

          {/* Headline */}
          <h2 className="text-center text-[clamp(36px,5vw,56px)] font-extrabold text-[#202654] leading-[1.1] mb-16">
            Before you apply
          </h2>

          {/* FAQ Items */}
          <div className="space-y-0">
            {FAQS.map((faq, index) => (
              <div key={index} className="border-b border-[#E8E8E8]">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-lg font-semibold text-[#202654] group-hover:text-[#6945D8] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#202654] flex items-center justify-center shrink-0 transition-transform duration-200" style={{ transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    {openFaq === index ? (
                      <Minus className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-white" />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-base text-[#96A0B5] leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 8: FINAL CTA ========== */}
      <section className="bg-[#0f1629] py-[140px] px-6 text-center">
        <div className="max-w-[1000px] mx-auto">
          {/* Headline */}
          <h2 className="text-[clamp(40px,6vw,64px)] font-extrabold text-white mb-12">
            Ready to get — <span className="text-[#ACFCE3]">organized?</span>
          </h2>

          <Button 
            size="lg" 
            className="bg-[#6945D8] hover:bg-[#5835C0] text-white rounded-lg px-14 py-6 text-lg font-semibold transition-all duration-300 hover:-translate-y-0.5" 
            asChild
          >
            <a href="https://form.typeform.com/to/Dsi3pXkx" target="_blank" rel="noopener noreferrer">
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>

          {/* Sub-text */}
          <p className="mt-6 text-sm text-[#96A0B5]">
            Applications reviewed within 48 hours.
          </p>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-[#0f1629] border-t border-white/10 py-12 px-6 text-center">
        <p className="text-sm text-[#96A0B5]">
          © {new Date().getFullYear()} Nimara. All rights reserved.
        </p>
        <div className="flex items-center justify-center gap-6 mt-4">
          <a href="/privacy" className="text-sm text-[#96A0B5] hover:text-white transition-colors">Privacy</a>
          <a href="/terms" className="text-sm text-[#96A0B5] hover:text-white transition-colors">Terms</a>
          <a href="mailto:hello@nimara.ca" className="text-sm text-[#96A0B5] hover:text-white transition-colors">hello@nimara.ca</a>
        </div>
      </footer>
    </div>
  );
};

export default SmartTeamCohort;
