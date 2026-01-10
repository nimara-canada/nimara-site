import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useStaggeredReveal } from "@/hooks/use-scroll-reveal";
import { CALENDLY_BOOKING_URL, TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";

const StartHereSection = () => {
  const { ref, getItemStyle } = useStaggeredReveal<HTMLElement>(8, { staggerDelay: 100, baseDelay: 150 });

  const cards = [
    {
      id: "quick-fix",
      title: "Quick Fix",
      subtitle: "When something is broken",
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
      ref={ref}
      className="py-24 md:py-32 bg-gradient-to-b from-white to-[#F8F9FC] relative overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #202654 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            style={getItemStyle(0)}
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-nim-purple mb-4"
          >
            Choose Your Path
          </motion.span>
          <motion.h2
            style={getItemStyle(1)}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-nim-navy tracking-tight mb-5"
          >
            Start here
          </motion.h2>
          <motion.p
            style={getItemStyle(2)}
            className="text-lg md:text-xl text-nim-slate max-w-lg mx-auto leading-relaxed"
          >
            Pick the option that matches your situation.
          </motion.p>
        </div>

        {/* Cards grid */}
        <motion.div 
          style={getItemStyle(3)}
          className="grid md:grid-cols-3 gap-5 lg:gap-6 mb-12"
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl p-8 lg:p-9 flex flex-col h-full transition-shadow duration-300 ${
                card.highlighted 
                  ? 'bg-nim-navy text-white shadow-xl shadow-nim-navy/10' 
                  : 'bg-white border border-nim-mist/80 hover:border-nim-slate/20 hover:shadow-lg hover:shadow-nim-navy/5'
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
          style={getItemStyle(4)}
          className="text-center text-sm text-nim-slate/50 max-w-xl mx-auto"
        >
          Not an audit firm. No funding guarantees. Built for Canadian nonprofits (0–25 staff).
        </motion.p>
      </div>
    </section>
  );
};

export default StartHereSection;
