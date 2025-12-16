import { motion } from "framer-motion";

export const NewTrustLine = () => {
  return (
    <section className="bg-background py-16 border-t border-border">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center text-sm tracking-wide"
        >
          We don't share your info without permission. You stay in control of what you pitch, price, and deliver.
        </motion.p>
      </div>
    </section>
  );
};
