import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CalendarCheck, Calendar, FileText, FolderOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CALENDLY_BOOKING_URL } from '@/constants/urls';

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Thank You Page: /thanks-booked
 * Shown after user completes a Calendly booking for Capacity Buildout.
 * 
 * CONVERSION TRACKING:
 * Google Ads conversion "Booked Call" fires on page view.
 */

const ThanksBooked = () => {
  // Fire Google Ads conversion on page load
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17855110713/do02COTvr98bELm8_cFC'
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Booking Confirmed | Nimara</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <main className="flex-1 flex items-center justify-center py-16 sm:py-24 px-6">
        <div className="max-w-lg w-full">
          {/* Success Icon */}
          <div className="w-14 h-14 rounded-2xl bg-nim-mint/20 flex items-center justify-center mx-auto mb-6">
            <CalendarCheck className="w-7 h-7 text-nim-navy" strokeWidth={1.5} />
          </div>

          {/* Eyebrow */}
          <p className="text-sm font-medium text-nim-slate tracking-wide text-center mb-3">
            Booking confirmed
          </p>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
            You're booked.
          </h1>

          {/* Subhead */}
          <p className="text-lg text-muted-foreground text-center mb-10">
            We've received your appointment. Check your email for the calendar invite and meeting link.
          </p>

          {/* Next Steps */}
          <div className="bg-nim-cloud/50 border border-nim-mist rounded-xl p-6 mb-8">
            <h2 className="font-semibold text-foreground mb-4">Next steps</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Calendar className="w-3.5 h-3.5 text-nim-navy" strokeWidth={2} />
                </div>
                <span className="text-sm text-muted-foreground">
                  Add the invite to your calendar (so it doesn't get lost)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FileText className="w-3.5 h-3.5 text-nim-navy" strokeWidth={2} />
                </div>
                <span className="text-sm text-muted-foreground">
                  Bring one example grant (or funder request) if you have one
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FolderOpen className="w-3.5 h-3.5 text-nim-navy" strokeWidth={2} />
                </div>
                <span className="text-sm text-muted-foreground">
                  Have access to your current tracker/files if possible
                </span>
              </li>
            </ul>
          </div>

          {/* What we'll cover */}
          <div className="bg-white border border-nim-mist rounded-xl p-6 mb-8">
            <h2 className="font-semibold text-foreground mb-2">What we'll cover</h2>
            <p className="text-sm text-muted-foreground">
              In 20 minutes, we'll confirm whether you need Core 3, Core 5, or Premium 7 — and what to fix first.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 mb-6">
            <Button asChild size="lg" className="w-full">
              <a
                href="https://mail.google.com/mail/u/0/#search/from%3Acalendly"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open my calendar invite
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              If you can't open the invite, use the fallback button below.
            </p>
            <Button asChild variant="outline" size="lg" className="w-full">
              <a
                href={CALENDLY_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book another time
              </a>
            </Button>
          </div>

          {/* Back link */}
          <div className="text-center mb-8">
            <Link
              to="/capacity-buildout"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              Back to Capacity Buildout
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Footnote */}
          <p className="text-xs text-center text-muted-foreground/70">
            If you don't see the invite, check spam/junk or search your inbox for "Calendly".
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThanksBooked;
