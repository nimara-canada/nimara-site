import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { CONTACT_EMAIL } from '@/constants/urls';

// Declare gtag and dataLayer for TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Thank You Page: /cohort/apply/thank-you
 * Shown after user completes the Cohort Application via Typeform.
 * 
 * CONVERSION TRACKING:
 * Google Ads conversion fires ONCE per session using sessionStorage guard.
 */

const CohortApplyThankYou = () => {
  // Fire Google Ads conversion on page load (once per session)
  useEffect(() => {
    const storageKey = 'nimara_apply_conversion_fired';
    
    // Check if already fired this session
    if (sessionStorage.getItem(storageKey)) {
      return;
    }

    // Fire Google Ads conversion if gtag exists
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17855110713/cohort_apply'
      });
    }

    // Push dataLayer event for debugging
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'nimara_application_submitted' });

    // Mark as fired
    sessionStorage.setItem(storageKey, '1');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Application Submitted | Nimara</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <main 
        className="flex-1 flex items-center justify-center py-20 px-6"
        style={{ paddingTop: 'calc(var(--announcement-height, 0px) + 5rem)' }}
      >
        <div className="max-w-lg text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Application submitted.
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            Thanks for applying to the Capacity Building Cohort. We'll review your application and email you within 2 business days.
          </p>

          <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
            <h2 className="font-semibold text-foreground mb-2">What happens next?</h2>
            <p className="text-sm text-muted-foreground">
              We'll review your submission to confirm fit. If approved, you'll receive onboarding details and payment instructions before the cohort starts.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Link
              to="/smart-team-cohort"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Back to Cohort Details
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <div className="flex items-center justify-center gap-4 text-sm">
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Back to homepage
              </Link>
              <span className="text-border">|</span>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Email us
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CohortApplyThankYou;
