import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FileSpreadsheet, ArrowRight, Download } from 'lucide-react';
import { CALENDLY_BOOKING_URL, CONTACT_EMAIL } from '@/constants/urls';

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Thank You Page: /thanks-proof-tracker
 * Shown after user downloads/requests the Proof Tracker via Typeform.
 * 
 * CONVERSION TRACKING:
 * Google Ads conversion "Proof Tracker Downloaded" fires on page view.
 */

const ThanksProofTracker = () => {
  // Fire Google Ads conversion on page load
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17855110713/proof_tracker_downloaded'
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Proof Tracker Sent | Nimara</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <main className="flex-1 flex items-center justify-center py-20 px-6">
        <div className="max-w-lg text-center">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8">
            <FileSpreadsheet className="w-8 h-8 text-accent" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Your Proof Tracker is on the way!
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            Check your inbox — we've sent you the free Proof Tracker template. If you don't see it, check your spam folder.
          </p>

          <div className="bg-muted/50 rounded-xl p-6 mb-8 text-left">
            <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Download className="w-5 h-5 text-primary" />
              Getting started tips:
            </h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>1. Make a copy of the tracker (don't edit the original)</li>
              <li>2. Start with your most recent grant</li>
              <li>3. Add receipts/proofs as you go — don't backlog</li>
            </ul>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
            <h2 className="font-semibold text-foreground mb-2">Need help setting it up?</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Our Capacity Buildout includes full Proof Tracker setup, plus training for your team.
            </p>
            <a
              href={CALENDLY_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors text-sm"
            >
              Book a 20-min Fit Call
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

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
              Questions? Email us
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThanksProofTracker;
