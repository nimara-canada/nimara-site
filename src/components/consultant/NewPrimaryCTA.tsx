import { Button } from "@/components/ui/button";

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

export const NewPrimaryCTA = () => {
  const handleCheckEligibility = () => {
    trackClick('consultant_check_eligibility_cta_click');
    window.open(getTypeformUrl(), '_blank');
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Ready to see if you're eligible?
        </h2>
        
        <p className="text-lg text-foreground mb-8">
          Answer a few questions to see if it's a fit. No resume uploads. No fluff.
        </p>

        <Button 
          size="lg" 
          onClick={handleCheckEligibility}
          className="text-lg px-8"
        >
          Check Your Eligibility
        </Button>
      </div>
    </section>
  );
};
