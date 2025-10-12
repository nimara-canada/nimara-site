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

export const ConsultantHero = () => {
  const handleSubmitInterest = () => {
    trackClick('consultant_submit_interest_click');
    window.open(getTypeformUrl('consultant-interest'), '_blank');
  };

  const handleCheckEligibility = () => {
    trackClick('consultant_check_eligibility_click');
    window.open(getTypeformUrl('consultant-eligibility'), '_blank');
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Join our consultant roster (Canada)
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          We're building a small, high-signal team. You stay independent. If your category isn't active yet, we'll add you to the waitlist and reach out as demand opens.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Button 
            size="lg" 
            onClick={handleSubmitInterest}
            className="w-full sm:w-auto"
          >
            Submit interest
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleCheckEligibility}
            className="w-full sm:w-auto"
          >
            Check eligibility
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mb-2">
          Clear briefs. PM oversight. Net-15 after acceptance.
        </p>
        
        <p className="text-xs text-muted-foreground">
          We don't cut your rate—Nimara's platform & PM fee is a separate client line.
        </p>
      </div>
    </section>
  );
};
