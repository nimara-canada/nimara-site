import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IntegrationsGrid } from "@/components/IntegrationsGrid";
import { ToolRequestForm } from "@/components/ToolRequestForm";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Integrations() {
  return (
    <>
      <Helmet>
        <title>Supported Tools Map - Nimara</title>
        <meta
          name="description"
          content="Nimara fits around the tools you already use. See how we connect to QuickBooks, Salesforce, Keela, Google Workspace, Microsoft 365, and dozens more nonprofit tools."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-24 pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            {/* Back Link */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Page Header */}
            <div className="mb-16 text-center">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/50" />
                <span className="text-xs font-medium tracking-[0.25em] uppercase text-primary">
                  Integrations
                </span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/50" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-6">
                Tools that work with Nimara
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                We connect to your existing tools. No rip and replace needed—we make what you have work better.
              </p>
            </div>

            {/* Tools Grid by Category */}
            <IntegrationsGrid />

            {/* CTA Section */}
            <section className="mt-20">
              <div className="bg-[#202654] rounded-2xl p-12 text-center text-white relative overflow-hidden">
                {/* Subtle background glow */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
                </div>
                
                <div className="relative">
                  <h2 className="text-3xl sm:text-4xl font-light mb-4 text-white">Don't see your tool?</h2>
                  <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                    That's okay. We work with what you have. Tell us about your tools and we'll find a way to connect
                    them.
                  </p>

                  <a
                    href="https://calendly.com/hello-nimara/nohc-intake-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#ACFCE3] text-[#202654] hover:bg-[#9EEBD4] font-semibold px-8 py-3 rounded-lg transition-colors"
                  >
                    Schedule a Call
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </section>

            {/* Tool Request Form Section */}
            <section className="mt-20">
              <div className="bg-card border border-border rounded-2xl p-8 sm:p-12">
                <div className="text-center mb-10">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3">
                    Request an Integration
                  </h2>
                  <p className="text-muted-foreground max-w-xl mx-auto">
                    Let us know which tool you'd like to see supported. We review every request and prioritize based on demand.
                  </p>
                </div>
                
                <div className="max-w-2xl mx-auto">
                  <ToolRequestForm />
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
