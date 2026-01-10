import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useStaggeredReveal } from "@/hooks/use-scroll-reveal";
import { CALENDLY_BOOKING_URL, TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";

const StartHereSection = () => {
  const { ref, getItemStyle } = useStaggeredReveal<HTMLElement>(8, { staggerDelay: 80, baseDelay: 100 });

  const cards = [
    {
      id: "quick-fix",
      title: "Quick Fix (when something is broken)",
      body: "Use this if you already know what needs help.",
      bullets: [
        "A funder asked for proof",
        "Board is not working well",
        "Tracking or files are messy"
      ],
      cta: "Book a Quick Fix Call",
      link: CALENDLY_BOOKING_URL,
      isExternal: true,
      note: "Fast help for urgent problems."
    },
    {
      id: "nohc",
      title: "Free NOHC (6-minute self-check)",
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
      title: "Full Buildout (3, 5, or 7 areas)",
      body: "Use this if you have capacity funding and want a clean setup.",
      bullets: [
        "We install the system with you",
        "Training + handoff",
        "90-day support after setup"
      ],
      cta: "See Buildout Levels",
      link: "#pick-your-buildout",
      isExternal: false,
      note: null
    }
  ];

  return (
    <section 
      id="start-here"
      ref={ref}
      className="py-20 md:py-28 bg-white relative"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <motion.h2
            style={getItemStyle(0)}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-nim-navy tracking-tight mb-4"
          >
            Start here
          </motion.h2>
          <motion.p
            style={getItemStyle(1)}
            className="text-lg text-nim-slate max-w-xl mx-auto"
          >
            Pick the option that matches your situation.
          </motion.p>
        </div>

        {/* Cards grid */}
        <motion.div 
          style={getItemStyle(2)}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10"
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-nim-cloud/50 rounded-2xl p-7 lg:p-8 border border-nim-mist hover:border-nim-slate/30 transition-all duration-200 flex flex-col"
            >
              {/* Title */}
              <h3 className="text-lg font-semibold text-nim-navy mb-3 leading-snug">
                {card.title}
              </h3>

              {/* Body */}
              <p className="text-sm text-nim-slate mb-5">
                {card.body}
              </p>

              {/* Bullets */}
              <ul className="space-y-2.5 mb-6 flex-grow">
                {card.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-nim-purple mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-sm text-nim-slate-dark">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {card.isExternal ? (
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-nim-navy text-white font-medium rounded-xl hover:bg-nim-navy/90 transition-colors group text-sm"
                >
                  {card.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              ) : (
                <a
                  href={card.link}
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-nim-mint text-nim-navy font-medium rounded-xl hover:bg-nim-mint/90 transition-colors group text-sm"
                >
                  {card.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              )}

              {/* Note */}
              {card.note && (
                <p className="text-xs text-nim-slate/70 text-center mt-3">
                  {card.note}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom microcopy */}
        <motion.p
          style={getItemStyle(3)}
          className="text-center text-xs text-nim-slate/60 max-w-xl mx-auto"
        >
          Not an audit firm. No funding guarantees. Built for Canadian nonprofits (0–25 staff).
        </motion.p>
      </div>
    </section>
  );
};

export default StartHereSection;
