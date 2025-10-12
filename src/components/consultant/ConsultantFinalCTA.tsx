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

export const ConsultantFinalCTA = () => {
  const handleSubmitInterest = () => {
    trackClick('consultant_submit_interest_click');
    window.open(getTypeformUrl('consultant-interest'), '_blank');
  };

  const handleCheckEligibility = () => {
    trackClick('consultant_check_eligibility_click');
    window.open(getTypeformUrl('consultant-eligibility'), '_blank');
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Ready to join our consultant roster?
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8">
          Submit your interest and we'll reach out when there's a fit.
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

        <p className="text-sm text-muted-foreground">
          Questions?{" "}
          <a href="mailto:hello@nimara.ca" className="text-primary hover:underline focus:underline">
            hello@nimara.ca
          </a>
        </p>
      </div>
    </section>
  );
};
