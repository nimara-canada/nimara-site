import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-50 via-white to-white" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm tracking-widest text-slate-500 uppercase mb-6">
              Ready to start?
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-slate-900 leading-[1.1] mb-6">
              Ready to get{" "}
              <span className="italic text-purple-600">system-strong</span>?
            </h2>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 max-w-xl mx-auto">
              Book a free 15-minute discovery call. We'll figure out if Nimara is the right fit—no pressure, no pitch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/book-a-call"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-[#ACFCE3] text-slate-900 font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-200 hover:scale-[1.02]"
              >
                Book a Discovery Call
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="mailto:hello@nimara.ca"
                className="group inline-flex items-center gap-2 h-14 px-6 text-slate-500 font-medium transition-colors duration-300 hover:text-slate-900"
              >
                <span className="relative">
                  Email us instead
                  <span className="absolute left-0 -bottom-0.5 w-full h-px bg-slate-300 group-hover:bg-slate-900 transition-colors duration-300" />
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
            className="mt-16 text-sm text-slate-400"
          >
            Trusted by nonprofits across Canada · Money-back guarantee on system builds
          </motion.p>
        </div>
      </div>
    </section>
  );
};
