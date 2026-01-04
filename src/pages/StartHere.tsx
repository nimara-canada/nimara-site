import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Clock, FileCheck, Building2 } from "lucide-react";

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

      <main id="main" className="min-h-screen pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Pick a starting point.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Two ways to get your nonprofit organized. Choose the one that fits your timeline.
            </p>
          </div>

          {/* Two Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Grant Setup Card */}
            <a
              href="/grant-setup"
              className="group relative flex flex-col p-8 bg-card border border-border rounded-2xl transition-all duration-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                  <FileCheck className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>About 2 weeks</span>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Grant Setup
              </h2>
              <p className="text-muted-foreground mb-6 flex-1">
                We build your grant tracking, reporting, and file systems — so you're ready for your next application or report.
              </p>
              
              <div className="flex items-center gap-2 text-primary font-medium">
                <span>Book a Grant Setup</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>

            {/* Organization Check Card */}
            <a
              href="/organization-check"
              className="group relative flex flex-col p-8 bg-card border border-border rounded-2xl transition-all duration-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/50 text-foreground">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>2–4 weeks</span>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Organization Check
              </h2>
              <p className="text-muted-foreground mb-6 flex-1">
                A full review of your operations — money, people, programs, and systems — with a clear roadmap to fix what matters most.
              </p>
              
              <div className="flex items-center gap-2 text-primary font-medium">
                <span>Book an Organization Check</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          </div>

          {/* Small links to free tools */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-3">
              Not ready to book? Try our free tools first.
            </p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="/free-check"
                className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors"
              >
                <span>Try the free check</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="/resources/tracker"
                className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors"
              >
                <span>$0 tracker</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default StartHere;
