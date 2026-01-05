import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { CALENDLY_BOOKING_URL } from "@/constants/urls";

const Accessibility = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Accessibility | Nimara</title>
        <meta name="description" content="WCAG 2.1 AA with plain language, keyboard access, captions, and accessible documents. Need a different format? Email hello@nimara.ca." />
        
        <link rel="canonical" href="https://nimara.ca/accessibility" />
        
        <meta property="og:site_name" content="Nimara" />
        <meta property="og:title" content="Accessibility | Nimara" />
        <meta property="og:description" content="WCAG 2.1 AA with plain language, keyboard access, captions, and accessible documents. Need a different format? Email hello@nimara.ca." />
        <meta property="og:url" content="https://nimara.ca/accessibility" />
        <meta property="og:image" content="https://nimara.ca/og.jpg" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Accessibility | Nimara" />
        <meta name="twitter:description" content="WCAG 2.1 AA with plain language, keyboard access, captions, and accessible documents. Need a different format? Email hello@nimara.ca." />
        <meta name="twitter:image" content="https://nimara.ca/og.jpg" />
      </Helmet>
      
      <Header activeRoute="/accessibility" />
      
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Skip to content
      </a>

      <main id="main" className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-[1280px]">
          
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Accessibility at Nimara
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              We want everyone to use Nimara. That includes people who use screen readers, keyboards, captions, larger text, or other assistive tech.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            
            {/* The standard we follow */}
            <section className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                The standard we follow
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <p>We build to WCAG 2.1 Level AA and are moving toward WCAG 2.2 AA.</p>
                <p>We write in plain English and keep pages simple.</p>
              </div>
            </section>

            {/* What we do today */}
            <section className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                What we do today
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                <li><strong className="text-foreground">Keyboard friendly:</strong> you can tab through links, buttons, and forms in a clear order.</li>
                <li><strong className="text-foreground">Visible focus:</strong> every interactive element has a clear focus ring.</li>
                <li><strong className="text-foreground">Contrast:</strong> text and icons meet AA contrast.</li>
                <li><strong className="text-foreground">Headings & landmarks:</strong> proper HTML structure; ARIA only when needed.</li>
                <li><strong className="text-foreground">Skip to content</strong> at the top of each page.</li>
                <li><strong className="text-foreground">Forms:</strong> labels, hints, and inline errors—no placeholder-only fields.</li>
                <li><strong className="text-foreground">Images:</strong> useful images have alt text; decorative images are hidden from screen readers.</li>
                <li><strong className="text-foreground">Video & audio:</strong> captions and transcripts are provided.</li>
                <li><strong className="text-foreground">Motion:</strong> we respect your reduced-motion setting.</li>
                <li><strong className="text-foreground">Resize & zoom:</strong> works at 200% without side-scrolling.</li>
                <li><strong className="text-foreground">Documents:</strong> new PDFs are tagged and accessible; we provide another format on request.</li>
                <li><strong className="text-foreground">Testing:</strong> keyboard-only runs, NVDA/JAWS/VoiceOver checks, and automated scans (axe) before releases.</li>
              </ul>
            </section>

            {/* Browsers and assistive tech */}
            <section className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Browsers and assistive tech we support
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <p><strong className="text-foreground">Desktop:</strong> Chrome, Edge, Firefox, Safari (current + previous).</p>
                <p><strong className="text-foreground">Mobile:</strong> iOS Safari, Android Chrome.</p>
                <p><strong className="text-foreground">Screen readers:</strong> NVDA/JAWS (Windows), VoiceOver (macOS/iOS).</p>
                <p>If you use something else and find a problem, tell us.</p>
              </div>
            </section>

            {/* Third-party tools */}
            <section className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Third-party tools
              </h2>
              <p className="text-muted-foreground">
                We embed some services (for example, Calendly). If an embed is hard to use, email us and we'll provide another way to complete the task.
              </p>
            </section>

            {/* Request an accessible format */}
            <section className="bg-accent/10 rounded-2xl p-8 border border-accent/20">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Request an accessible format
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Need information in another format (large print, tagged PDF, Word, plain text, captions, transcript)? Email{" "}
                  <a 
                    href="mailto:hello@nimara.ca" 
                    className="text-primary hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                  >
                    hello@nimara.ca
                  </a>.
                </p>
                <p>We respond within 2 business days.</p>
                <p>We provide the format at no cost as quickly as we can (usually within 10 business days).</p>
              </div>
            </section>

            {/* Feedback and support */}
            <section className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Feedback and support
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <p>If you find an accessibility issue or have a suggestion:</p>
                <p>
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a 
                    href="mailto:hello@nimara.ca" 
                    className="text-primary hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                  >
                    hello@nimara.ca
                  </a>
                </p>
                <p>
                  <strong className="text-foreground">Prefer a call?</strong> Book a call at{" "}
                  <a 
                    href={CALENDLY_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                  >
                    our booking page
                  </a>{" "}
                  and note "accessibility".
                </p>
                <p>We log every report, confirm we received it, and keep you posted on fixes.</p>
              </div>
            </section>

            {/* Known limitations */}
            <section className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Known limitations at launch
              </h2>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Some older PDFs may not be fully tagged—ask for another format.</li>
                <li>Some charts may not yet include data tables—request a CSV.</li>
                <li>External embeds may have limits—we'll offer an email or upload alternative.</li>
              </ul>
            </section>

            {/* Our process */}
            <section className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Our process
              </h2>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Shared checklist for WCAG 2.1 AA in design and build.</li>
                <li>Automated + manual screen-reader testing each sprint.</li>
                <li>Quarterly internal review and yearly third-party audit planned.</li>
              </ul>
            </section>

            {/* Language */}
            <section className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Language
              </h2>
              <p className="text-muted-foreground">
                A French version of this statement is coming. Need it now? Email{" "}
                <a 
                  href="mailto:hello@nimara.ca" 
                  className="text-primary hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                >
                  hello@nimara.ca
                </a>{" "}
                and we'll send it.
              </p>
            </section>

            {/* Dates */}
            <section className="bg-muted/50 rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Dates
              </h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Last updated:</strong> October 2025</p>
                <p><strong className="text-foreground">Next review:</strong> January 2026</p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Accessibility;
