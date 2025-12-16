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
  return `https://form.typeform.com/to/I6zHdy6K?${params.toString()}`;
};

const trackClick = (eventName: string) => {
  const params = new URLSearchParams(window.location.search);
  console.log(eventName, {
    utm_source: params.get('utm_source') || 'direct',
    utm_medium: params.get('utm_medium') || 'web',
    utm_campaign: params.get('utm_campaign') || 'consultants'
  });
};

export const NewConsultantHero = () => {
  const handleCheckEligibility = () => {
    trackClick('consultant_check_eligibility_click');
    window.open(getTypeformUrl(), '_blank');
  };

  const scrollToWhyJoin = () => {
    const element = document.getElementById('why-join');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-secondary-background min-h-[85vh] flex items-center">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 py-24 md:py-32">
        <div className="max-w-4xl">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white/50 uppercase tracking-[0.2em] text-sm mb-8"
          >
            For Independent Consultants
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-[1.1]"
          >
            Do meaningful work.
            <br />
            <span className="italic font-normal">Get real projects.</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <p className="text-lg md:text-xl text-white/80 mb-6 leading-relaxed">
              Nimara is building Canada's consulting bench for nonprofits and public-interest organizations. 
              If you have 3–10+ years of experience and a bias for execution—you might be eligible.
            </p>

            <p className="text-lg md:text-xl text-white/60 mb-12 leading-relaxed">
              We match vetted consultants with scoped projects in finance, strategy, systems, compliance, 
              HR, and more. You stay independent. We handle the noise.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 items-start"
          >
            <Button 
              size="lg" 
              onClick={handleCheckEligibility}
              className="bg-white text-secondary-background hover:bg-white/90 rounded-none px-8 py-6 text-base tracking-wide"
            >
              Check Your Eligibility
            </Button>
            <button
              onClick={scrollToWhyJoin}
              className="text-white/70 hover:text-white font-medium tracking-wide transition-colors border-b border-white/30 hover:border-white pb-1"
            >
              Why join the bench
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
