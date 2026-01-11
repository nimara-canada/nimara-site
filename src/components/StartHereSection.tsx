import { motion, useInView } from "framer-motion";
import { ArrowRight, Check, FileCheck, Clock, AlertTriangle } from "lucide-react";
import { useRef } from "react";
import { CALENDLY_BOOKING_URL, TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";

const StartHereSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const otherCards = [
    {
      id: "nohc",
      title: "Free NOHC",
      subtitle: "6-minute self-check",
      body: "Use this if you're not sure what the problem is.",
      bullets: [
        "6 minutes",
        "You answer honestly",
        "No document review in this version"
      ],
      cta: "Take the Free NOHC",
      link: TYPEFORM_HEALTH_CHECK_URL,
      isExternal: true,
      note: "You'll get a clear next step."
    },
    {
      id: "buildout",
      title: "Full Buildout",
      subtitle: "3, 5, or 7 areas",
      body: "Use this if you have capacity funding and want a clean setup.",
      bullets: [
        "We install the system with you",
        "Training + handoff",
        "90-day support after setup"
      ],
      cta: "See Buildout Levels",
      link: "#pick-your-buildout",
      isExternal: false,
      note: null,
      highlighted: true
    }
  ];

  return (
    <section 
      id="start-here"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-nim-purple mb-4"
          >
            Choose Your Path
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-nim-navy tracking-tight mb-5"
          >
            Start here
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg md:text-xl text-nim-slate max-w-lg mx-auto leading-relaxed"
          >
            Pick the option that matches your situation.
          </motion.p>
        </div>

        {/* Premium First Card - "I Know What I Want" / Quick Fix */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8"
        >
          <div className="rounded-3xl bg-nim-cloud overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-0">
              {/* Left Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <motion.h3
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-nim-navy tracking-tight mb-4"
                >
                  I know what I want
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="text-base lg:text-lg text-nim-slate mb-8 max-w-md"
                >
                  Use this if you already know what needs help. We'll jump straight into fixing the problem.
                </motion.p>

                {/* Bullet points */}
                <ul className="space-y-4 mb-8">
                  {[
                    "A funder asked for proof you can't find",
                    "Board governance is unclear or stalled",
                    "Tracking, folders, or files are a mess"
                  ].map((bullet, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-nim-mint flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-nim-navy" strokeWidth={3} />
                      </div>
                      <span className="text-nim-slate-dark text-sm lg:text-base">{bullet}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                  href={CALENDLY_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 w-fit px-6 py-3.5 bg-nim-navy text-white font-semibold rounded-full hover:bg-nim-navy/90 transition-colors group text-sm"
                >
                  Book a Quick Fix Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </motion.a>
              </div>

              {/* Right Visual Composition */}
              <div className="relative p-8 lg:p-12 flex items-center justify-center min-h-[320px] lg:min-h-[400px]">
                {/* Decorative circle */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute top-8 right-8 w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-nim-mint/40"
                />
                
                {/* Main visual container */}
                <div className="relative z-10 w-full max-w-[320px]">
                  {/* Background shape */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="w-full h-[240px] lg:h-[280px] bg-nim-mist rounded-2xl"
                  />

                  {/* Floating UI Card - Top */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, x: 20 }}
                    animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="absolute -top-4 right-4 lg:right-0 bg-white rounded-xl p-4 w-[160px]"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <FileCheck className="w-4 h-4 text-nim-purple" />
                      <span className="text-xs font-semibold text-nim-navy">Quick Check</span>
                    </div>
                    <div className="w-full h-1.5 bg-nim-mist rounded-full overflow-hidden mb-1">
                      <motion.div
                        className="h-full bg-nim-mint rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "66%" } : {}}
                        transition={{ duration: 0.8, delay: 1.0 }}
                      />
                    </div>
                    <span className="text-[10px] text-nim-slate">2/3 complete</span>
                  </motion.div>

                  {/* Floating UI Card - Bottom */}
                  <motion.div
                    initial={{ opacity: 0, y: -20, x: -20 }}
                    animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.85 }}
                    className="absolute -bottom-4 left-0 lg:-left-4 bg-white rounded-xl p-4 w-[200px]"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-nim-navy">Fix Details</span>
                      <span className="text-nim-slate">•••</span>
                    </div>
                    <div className="flex items-center gap-4 text-[10px]">
                      <div>
                        <p className="text-nim-slate uppercase tracking-wide mb-0.5">Area</p>
                        <p className="font-medium text-nim-navy flex items-center gap-1">
                          <Clock className="w-3 h-3 text-nim-purple" />
                          Board
                        </p>
                      </div>
                      <div>
                        <p className="text-nim-slate uppercase tracking-wide mb-0.5">Status</p>
                        <p className="font-medium text-nim-navy">In Progress</p>
                      </div>
                      <div>
                        <p className="text-nim-slate uppercase tracking-wide mb-0.5">Timeline</p>
                        <p className="font-medium text-nim-navy">2 weeks</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Small alert badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 1.0, type: "spring", stiffness: 300 }}
                    className="absolute top-1/3 -left-2 bg-nim-purple text-white rounded-lg px-3 py-1.5 flex items-center gap-1.5"
                  >
                    <AlertTriangle className="w-3 h-3" />
                    <span className="text-[10px] font-medium">1 urgent item</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other two cards in a row */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-5 lg:gap-6 mb-12"
        >
          {otherCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl p-8 lg:p-9 flex flex-col h-full transition-shadow duration-300 ${
                card.highlighted 
                  ? 'bg-nim-navy text-white' 
                  : 'bg-white border border-nim-mist/80 hover:border-nim-slate/20'
              }`}
            >
              {/* Title block */}
              <div className="mb-5">
                <h3 className={`text-xl font-bold mb-1 tracking-tight ${
                  card.highlighted ? 'text-white' : 'text-nim-navy'
                }`}>
                  {card.title}
                </h3>
                <p className={`text-sm font-medium ${
                  card.highlighted ? 'text-nim-mint' : 'text-nim-purple'
                }`}>
                  {card.subtitle}
                </p>
              </div>

              {/* Body */}
              <p className={`text-[15px] leading-relaxed mb-6 ${
                card.highlighted ? 'text-white/80' : 'text-nim-slate'
              }`}>
                {card.body}
              </p>

              {/* Bullets */}
              <ul className="space-y-3 mb-8 flex-grow">
                {card.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      card.highlighted ? 'bg-nim-mint/20' : 'bg-nim-purple/10'
                    }`}>
                      <Check className={`w-3 h-3 ${
                        card.highlighted ? 'text-nim-mint' : 'text-nim-purple'
                      }`} strokeWidth={3} />
                    </div>
                    <span className={`text-sm ${
                      card.highlighted ? 'text-white/90' : 'text-nim-slate-dark'
                    }`}>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {card.isExternal ? (
                <motion.a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-nim-navy text-white font-semibold rounded-xl hover:bg-nim-navy/90 transition-colors group text-sm"
                >
                  {card.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </motion.a>
              ) : (
                <motion.a
                  href={card.link}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-nim-mint text-nim-navy font-semibold rounded-xl hover:bg-nim-mint/90 transition-colors group text-sm"
                >
                  {card.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </motion.a>
              )}

              {/* Note */}
              {card.note && (
                <p className={`text-xs text-center mt-4 ${
                  card.highlighted ? 'text-white/50' : 'text-nim-slate/60'
                }`}>
                  {card.note}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom microcopy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-sm text-nim-slate/50 max-w-xl mx-auto"
        >
          Not an audit firm. No funding guarantees. Built for Canadian nonprofits (0–25 staff).
        </motion.p>
      </div>
    </section>
  );
};

export default StartHereSection;
