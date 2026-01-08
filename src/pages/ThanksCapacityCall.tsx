import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Check, ArrowRight, Calendar } from 'lucide-react';
import { CONTACT_EMAIL } from '@/constants/urls';

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Thank You Page: /thanks-capacity-call
 * Shown after user books a Calendly call for Capacity Buildout.
 * 
 * CONVERSION TRACKING:
 * Google Ads conversion "Capacity Call Booked" fires on page view.
 */

const ThanksCapacityCall = () => {
  // Fire Google Ads conversion on page load
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17855110713/capacity_call_booked'
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Call Booked | Nimara</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <main className="flex-1 flex items-center justify-center py-20 px-6">
        <div className="max-w-lg text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <Calendar className="w-8 h-8 text-primary" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Your call is booked!
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            We'll meet soon to discuss your Capacity Buildout. Check your email for the calendar invite.
          </p>

          <div className="bg-muted/50 rounded-xl p-6 mb-8 text-left">
            <h2 className="font-semibold text-foreground mb-4">Before the call:</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Make a quick list of your current grants</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Note your biggest reporting headache</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Think about who on your team would champion this</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to homepage
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Questions? Email us
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThanksCapacityCall;
