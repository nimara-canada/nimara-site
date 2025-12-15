import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-24 md:py-36 lg:py-44 bg-secondary-background relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm tracking-widest text-white/50 uppercase mb-6">
              Ready to start?
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white leading-[1.1] mb-6">
              Ready to get{" "}
              <span className="italic text-accent">system-strong</span>?
            </h2>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-12 max-w-xl mx-auto">
              Book a free 15-minute discovery call. We'll figure out if Nimara is the right fit—no pressure, no pitch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/book-a-call"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-accent text-secondary-background font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-[1.02]"
              >
                Book a Discovery Call
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="mailto:hello@nimara.ca"
                className="group inline-flex items-center gap-2 h-14 px-6 text-white/80 font-medium transition-colors duration-300 hover:text-white"
              >
                <span className="relative">
                  Email us instead
                  <span className="absolute left-0 -bottom-0.5 w-full h-px bg-white/30 group-hover:bg-white transition-colors duration-300" />
                </span>
              </a>
            </div>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-sm text-white/40"
          >
            Trusted by nonprofits across Canada · Money-back guarantee on system builds
          </motion.p>
        </div>
      </div>
    </section>
  );
};
