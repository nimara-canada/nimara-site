import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Clock, Check } from "lucide-react";

const StartHere = () => {
  return (
    <>
      <Helmet>
        <title>Start Here | Nimara</title>
        <meta
          name="description"
          content="Choose how Nimara can help your nonprofit: fast Grant Setup or a full Organization Check."
        />
      </Helmet>

      <Header activeRoute="/start-here" />

      <main id="main" className="min-h-screen pt-32 pb-24 px-6 lg:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-5">
              Pick a starting point.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We help Canadian nonprofits set up simple systems for money, files, and reporting — so funding is easier to win and manage.
            </p>
          </div>

          {/* Two Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Grant Setup Card - Primary */}
            <div className="group relative flex flex-col p-8 bg-card border-2 border-primary/20 rounded-2xl transition-all duration-200 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  About 2 weeks
                </span>
              </div>
              
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Grant Setup
              </h2>
              <p className="text-muted-foreground mb-6">
                Best if reporting feels stressful or receipts and files are hard to find.
              </p>
              
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Clear folders (easy to find things)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Simple tracking (spending and files)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>A routine your team can follow</span>
                </li>
              </ul>

              <div className="space-y-3">
                <Link
                  to="/grant-setup"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl transition-all hover:bg-primary/90 hover:scale-[1.02]"
                >
                  <span>Book a Grant Setup</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/grant-setup#what-you-get"
                  className="block text-center text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  See what you get →
                </Link>
              </div>
            </div>

            {/* Organization Check Card */}
            <div className="group relative flex flex-col p-8 bg-card border border-border rounded-2xl transition-all duration-200 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  2–4 weeks
                </span>
              </div>
              
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Organization Check
              </h2>
              <p className="text-muted-foreground mb-6">
                Best if you want a clear plan for the whole organization.
              </p>
              
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>What's working and what's missing</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Clear next steps (what to fix first)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>A plan you can use to build capacity</span>
                </li>
              </ul>

              <div className="space-y-3">
                <Link
                  to="/organization-check"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-secondary text-foreground font-medium rounded-xl border border-border transition-all hover:bg-muted hover:scale-[1.02]"
                >
                  <span>Book an Organization Check</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/organization-check#what-happens-next"
                  className="block text-center text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  What happens next? →
                </Link>
              </div>
            </div>
          </div>

          {/* Free Tools Strip */}
          <div className="text-center py-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Not ready yet? Try the free check or use the $0 tracker.
            </p>
            <div className="flex items-center justify-center gap-6">
              <Link
                to="/free-check"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Try the free check →
              </Link>
              <Link
                to="/resources"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Get the $0 tracker →
              </Link>
            </div>
          </div>

          {/* Email Line */}
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Prefer email?{" "}
              <a
                href="mailto:hello@nimara.ca"
                className="text-foreground hover:text-primary transition-colors underline-offset-2 hover:underline"
              >
                hello@nimara.ca
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default StartHere;