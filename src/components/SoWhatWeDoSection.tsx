import { motion } from 'framer-motion';

export const SoWhatWeDoSection = () => {
  return (
    <section className="bg-background">
      <div 
        className="max-w-5xl mx-auto text-center flex items-center justify-center"
        style={{ padding: '140px 24px' }}
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ 
            fontSize: '64px',
            fontWeight: 800,
            color: '#202654',
            lineHeight: 1.1,
          }}
          className="tracking-[-0.03em]"
        >
          So what do we do, <span style={{ color: '#6945D8' }}>exactly?</span>
        </motion.h2>
      </div>
    </section>
  );
};

export default SoWhatWeDoSection;
