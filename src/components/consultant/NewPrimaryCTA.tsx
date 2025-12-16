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
    <section className="bg-secondary-background py-32 md:py-40">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white/30 uppercase tracking-[0.25em] text-xs mb-8"
          >
            Apply Now
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8 leading-tight tracking-tight"
          >
            Ready to see if you're <span className="italic font-light">eligible?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base text-white/50 mb-14 font-light"
          >
            Answer a few questions to see if it's a fit. No resume uploads.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button 
              size="lg" 
              onClick={handleCheckEligibility} 
              className="bg-white text-secondary-background hover:bg-white/95 rounded-none px-14 py-7 text-sm tracking-wide font-medium"
            >
              Check Your Eligibility
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
