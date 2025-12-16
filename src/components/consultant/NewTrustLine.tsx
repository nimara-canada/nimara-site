import { motion } from "framer-motion";

export const NewTrustLine = () => {
  return (
    <section className="bg-background py-20 border-t border-border/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-muted-foreground/50 text-center text-sm tracking-wide font-light"
        >
          We don't share your info without permission. You stay in control of what you pitch, price, and deliver.
        </motion.p>
      </div>
    </section>
  );
};
