import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, FileText, CheckCircle2, Lock, Users, AlertCircle } from "lucide-react";
import { Helmet } from "react-helmet";
const Trust = () => {
  return <>
      <Helmet>
        <title>Our Commitment | Nimara</title>
        <meta name="description" content="PM oversight, standard templates, evidence-ready files, data stored in Canada, 7-year retention." />
        
        <link rel="canonical" href="https://nimara.ca/trust" />
        
        <meta property="og:site_name" content="Nimara" />
        <meta property="og:title" content="Our Commitment | Nimara" />
        <meta property="og:description" content="PM oversight, standard templates, evidence-ready files, data stored in Canada, 7-year retention." />
        <meta property="og:url" content="https://nimara.ca/trust" />
        <meta property="og:image" content="https://nimara.ca/og.jpg" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Commitment | Nimara" />
        <meta name="twitter:description" content="PM oversight, standard templates, evidence-ready files, data stored in Canada, 7-year retention." />
        <meta name="twitter:image" content="https://nimara.ca/og.jpg" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header activeRoute="/trust" />
        
        <main id="main-content">
          {/* Hero */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Our commitment
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                We keep work simple, safe, and reviewable. Every project runs with PM oversight, clear acceptance, and files ready for review.
              </p>
            </div>
          </section>

          {/* What you get on every project */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                What you get on every project
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">PM oversight</h3>
                  <p className="text-sm text-muted-foreground">
                    A Nimara PM coordinates pace, quality, and acceptance.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border">
                  <FileText className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Standard templates</h3>
                  <p className="text-sm text-muted-foreground">
                    One way to scope, deliver, and hand off.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Evidence-ready</h3>
                  <p className="text-sm text-muted-foreground">
                    Deliverables, approvals, and a simple index.
                  </p>
                </div>
              </div>

              
            </div>
          </section>

          {/* Data & privacy */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Data & privacy (plain)
              </h2>

              <div className="space-y-4 mb-6">
                <p className="text-muted-foreground">
                  • We store project data in <strong className="text-foreground">Canada</strong>.
                </p>
                <p className="text-muted-foreground">
                  • We keep project records for <strong className="text-foreground">7 years</strong> to support audits.
                </p>
                <p className="text-muted-foreground">
                  • We limit what we share with providers and use contracts that protect your data.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <a href="/privacy" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
                  Privacy
                </a>
                <span className="text-muted-foreground">·</span>
                <a href="/accessibility" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
                  Accessibility
                </a>
              </div>
            </div>
          </section>

          {/* Compliance */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Compliance (what this means here)
              </h2>

              <div className="space-y-4 mb-6">
                <p className="text-muted-foreground">
                  • We align delivery and evidence to <strong className="text-foreground">common Canadian funder requirements</strong>.
                </p>
                <p className="text-muted-foreground">
                  • We prepare files so reviewers can trace decisions and spending.
                </p>
                <p className="text-muted-foreground">
                  • We do <strong className="text-foreground">not</strong> give legal, tax, or assurance opinions.
                </p>
              </div>

              <a href="/terms" className="text-sm text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
                Terms
              </a>
            </div>
          </section>

          {/* Roles & independence */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Roles & independence
              </h2>

              <div className="space-y-4 mb-6">
                <p className="text-muted-foreground">
                  • <strong className="text-foreground">You (the organization):</strong> decide goals and accept the work.
                </p>
                <p className="text-muted-foreground">
                  • <strong className="text-foreground">Consultants:</strong> independent experts who deliver the work.
                </p>
                <p className="text-muted-foreground">
                  • <strong className="text-foreground">Nimara:</strong> provides the platform, PM oversight, and standard templates.
                </p>
              </div>

              <p className="text-sm text-muted-foreground italic">
                Consultants are independent. Nimara is not a law, accounting, or audit firm.
              </p>
            </div>
          </section>

          {/* Security basics */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Security basics we follow
              </h2>

              <div className="space-y-3 text-muted-foreground">
                <p>• Encrypted in transit; role-based access; least-privilege accounts</p>
                <p>• Logged changes to scopes and acceptance</p>
                <p>• Vendor review for the tools we use</p>
              </div>
            </div>
          </section>

          {/* If something goes wrong */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                If something goes wrong
              </h2>

              <div className="space-y-4">
                <p className="text-muted-foreground">
                  • <strong className="text-foreground">Report an issue:</strong>{" "}
                  <a href="mailto:hello@nimara.ca" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
                    hello@nimara.ca
                  </a>
                </p>
                <p className="text-muted-foreground">
                  • We confirm within <strong className="text-foreground">2 business days</strong> and outline next steps.
                </p>
              </div>
            </div>
          </section>

          {/* Keep it human */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Keep it human
              </h2>

              <p className="text-muted-foreground">
                Short calls, plain words, one checklist. If you need a different format (tagged PDF, large print, CSV), ask and we'll provide it.
              </p>
            </div>
          </section>

          {/* Final line */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-border">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-muted-foreground">
                Questions?{" "}
                <a href="mailto:hello@nimara.ca" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
                  hello@nimara.ca
                </a>
                {" "}— we'll help.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>;
};
export default Trust;