import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const getTypeformUrl = () => {
  const params = new URLSearchParams({
    utm_source: new URLSearchParams(window.location.search).get('utm_source') || 'direct',
    utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || 'web',
    utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || 'consultants',
    ref: document.referrer || '',
    page: 'consultants'
  });
  return `https://form.typeform.com/to/IeUH5TlU?${params.toString()}`;
};

const trackClick = (eventName: string) => {
  const params = new URLSearchParams(window.location.search);
  console.log(eventName, {
    utm_source: params.get('utm_source') || 'direct',
    utm_medium: params.get('utm_medium') || 'web',
    utm_campaign: params.get('utm_campaign') || 'consultants'
  });
};

export const NewPrimaryCTA = () => {
  const handleCheckEligibility = () => {
    trackClick('consultant_check_eligibility_cta_click');
    window.open(getTypeformUrl(), '_blank');
  };

  return (
    <section className="bg-secondary-background py-24 md:py-32">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/50 uppercase tracking-[0.2em] text-sm mb-6"
          >
            Apply Now
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Ready to see if you're <span className="italic font-normal">eligible?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/70 mb-12"
          >
            Answer a few questions to see if it's a fit. No resume uploads.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button 
              size="lg" 
              onClick={handleCheckEligibility} 
              className="bg-white text-secondary-background hover:bg-white/90 rounded-none px-12 py-6 text-base tracking-wide"
            >
              Check Your Eligibility
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
