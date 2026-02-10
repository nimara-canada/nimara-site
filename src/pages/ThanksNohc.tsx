import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ClipboardCheck, ArrowRight } from 'lucide-react';
import { CALENDLY_BOOKING_URL, CONTACT_EMAIL } from '@/constants/urls';

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Thank You Page: /thanks-nohc
 * Shown after user completes the Free NOHC (Nonprofit Organizational Health Check).
 * 
 * CONVERSION TRACKING:
 * Google Ads conversion "NOHC Completed" fires on page view.
 */

const ThanksNohc = () => {
  // Fire Google Ads conversion on page load
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17855110713/nohc_completed'
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>NOHC Complete | Nimara</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <main className="flex-1 flex items-center justify-center py-20 px-6">
        <div className="max-w-lg text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <ClipboardCheck className="w-8 h-8 text-primary" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Your NOHC is complete!
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            Thanks for taking the Nonprofit Organizational Health Check. We'll review your answers and get back to you with insights.
          </p>

          <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
            <h2 className="font-semibold text-foreground mb-2">What happens next?</h2>
            <p className="text-sm text-muted-foreground">
              Based on your responses, we'll send you a brief summary with our recommendations. If you'd like to discuss a Capacity Buildout, you can book a call anytime.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="/capacity-buildout"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Book a 20-min Fit Call
              <ArrowRight className="w-4 h-4" />
            </a>
            
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

export default ThanksNohc;
