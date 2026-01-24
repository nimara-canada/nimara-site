import { motion } from 'framer-motion';

export const SoWhatWeDoSection = () => {
  return (
    <section className="bg-background min-h-screen flex items-center justify-center snap-start">
      <div 
        className="max-w-5xl mx-auto text-center px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase"
          style={{ 
            color: '#000000',
            lineHeight: 1.1,
            fontStretch: 'condensed',
          }}
        >
          SO WHAT DO WE DO, EXACTLY?
        </motion.h2>
      </div>
    </section>
  );
};

export default SoWhatWeDoSection;
