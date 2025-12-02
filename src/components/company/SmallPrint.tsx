import { motion } from "framer-motion";

export const SmallPrint = () => {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 border-t border-border">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container max-w-[720px] mx-auto px-4 sm:px-6 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#202654] mb-6">
          Small print – Because it still matters
        </h2>
        
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Nimara is a national capacity-building operator. We connect nonprofits with vetted independent consultants ("Practice Partners") and provide shared tools, templates, and project coordination. We are not a law, accounting, audit, or funding body and do not provide legal, tax, or investment advice. Final decisions always stay with your leadership and board.
        </p>

        <p className="text-sm text-muted-foreground/80">
          Data stored in Canada • Records kept at least 7 years • Built to align with typical Canadian funder requirements •{" "}
          <a 
            href="https://www.notion.so/Nimara-Terms-of-Use-2bd227f1ee3a80a2a3ddd8a5ddb9dcd8?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-primary rounded transition-colors"
          >
            Engagement terms
          </a>
        </p>
      </motion.div>
    </section>
  );
};