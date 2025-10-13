import { Button } from "@/components/ui/button";

const getTypeformUrl = (formId: string) => {
  const params = new URLSearchParams({
    utm_source: new URLSearchParams(window.location.search).get('utm_source') || 'direct',
    utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || 'web',
    utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || 'consultants',
    ref: document.referrer || '',
    page: 'consultants'
  });
  return `https://nimara.typeform.com/${formId}?${params.toString()}`;
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
    window.open(getTypeformUrl('consultant-eligibility'), '_blank');
  };

  const scrollToWhyJoin = () => {
    const element = document.getElementById('why-join');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Do meaningful work.<br />Get real projects.<br />No fluff.
        </h1>
        
        <p className="text-lg md:text-xl text-foreground mb-6 max-w-3xl mx-auto">
          Nimara is building Canada's consulting bench for nonprofits and public-interest orgs. 
          If you have 3–10+ years of experience and a bias for execution — you might be eligible.
        </p>

        <p className="text-lg md:text-xl text-foreground mb-8 max-w-3xl mx-auto">
          We match vetted consultants with scoped projects in finance, strategy, systems, compliance, 
          HR, and more. You stay independent. We handle the noise.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={handleCheckEligibility}
            className="w-full sm:w-auto"
          >
            Check Your Eligibility
          </Button>
          <button
            onClick={scrollToWhyJoin}
            className="text-primary hover:underline font-medium"
          >
            Why join the bench
          </button>
        </div>
      </div>
    </section>
  );
};
