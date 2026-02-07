import { Helmet } from 'react-helmet';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { MotionPreferencesProvider } from '@/hooks/use-scroll-reveal';
import { CALENDLY_BOOKING_URL, CONTACT_EMAIL } from '@/constants/urls';
import { Check } from 'lucide-react';

const benefits = [
  {
    title: "Get funder-ready operations",
    description: "We install the systems, templates, and routines your funders expect to see — across 7 operational domains."
  },
  {
    title: "Stop losing time to manual tracking",
    description: "Replace scattered spreadsheets with clean, repeatable processes your team can actually maintain."
  },
  {
    title: "Leave with a clear scope and price",
    description: "No guesswork. After one call, you'll know exactly what we'll build, how long it takes, and what it costs."
  }
];

const CapacityBuildout = () => {
  return (
    <MotionPreferencesProvider>
      <div className="min-h-screen bg-background">
        <ScrollToTop />
        
        <Helmet>
          <title>Book a Call | Capacity Buildout | Nimara</title>
          <meta name="description" content="Book a call to get a clear scope and price for strengthening your nonprofit's operations. From $6,950 CAD. Canada-only." />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://nimara.ca/capacity-buildout" />
          
          <meta property="og:title" content="Book a Call | Capacity Buildout | Nimara" />
          <meta property="og:description" content="Tell us what you need help with. We'll give you a clear scope and price for your nonprofit." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://nimara.ca/capacity-buildout" />
          <meta property="og:image" content="https://nimara.ca/og-image.png" />
          
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Book a Call | Capacity Buildout | Nimara" />
          <meta name="twitter:description" content="Tell us what you need help with. We'll give you a clear scope and price." />
        </Helmet>
        
        <Header />
        
        <main id="main" style={{ paddingTop: 'calc(var(--announcement-height, 0px) + 5rem)' }}>
          <section className="bg-muted py-16 sm:py-20 md:py-28 lg:py-32">
            <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                
                {/* LEFT: Messaging */}
                <div className="max-w-[520px]">
                  <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-6">
                    Build funder-ready operations with Nimara
                  </h1>
                  
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                    We help Canadian nonprofits install the systems funders expect. Book a 30-minute call to get a clear scope, timeline, and price.
                  </p>

                  <p className="text-sm text-muted-foreground/70 mb-10">
                    Google Workspace / Microsoft 365 · QuickBooks / Xero · 100% virtual
                  </p>

                  <p className="text-sm font-semibold text-foreground mb-5">
                    With Nimara, you get:
                  </p>

                  <div className="space-y-6">
                    {benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground mb-1">{benefit.title}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Backup contact */}
                  <p className="text-sm text-muted-foreground mt-10">
                    Prefer email?{' '}
                    <a 
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-foreground font-medium underline underline-offset-4 hover:text-primary transition-colors"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                </div>

                {/* RIGHT: Calendly Embed */}
                <div className="w-full">
                  <div className="bg-primary rounded-2xl overflow-hidden shadow-xl">
                    <div className="px-6 pt-6 pb-2">
                      <p className="text-lg font-semibold text-primary-foreground">
                        Book a scope call with Nimara
                      </p>
                    </div>
                    <div className="bg-white rounded-t-xl overflow-hidden" style={{ height: '580px' }}>
                      <iframe
                        src={CALENDLY_BOOKING_URL}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        title="Book a call with Nimara"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </MotionPreferencesProvider>
  );
};

export default CapacityBuildout;
