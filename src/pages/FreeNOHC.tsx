import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";

const BENEFITS = [
  { text: "Find out which part of your org is **holding you back**" },
  { text: "Get **tailored next steps** for team, funding, or operations" },
  { text: "Learn how to build systems that **don't depend on one person**" },
];

const FreeNOHC = () => {
  return (
    <>
      <Helmet>
        <title>Free Health Check | Nimara</title>
        <meta
          name="description"
          content="Take Nimara's free 90-second nonprofit health check. Find out what's holding your organization back — and get a clear plan to fix it."
        />
      </Helmet>

      <Header />

      <main
        id="main"
        className="min-h-screen bg-background"
        style={{ paddingTop: "calc(var(--announcement-height, 0px) + 5rem)" }}
      >
        {/* Hero — scannable in < 2 seconds */}
        <section className="py-20 md:py-28 lg:py-36 px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">
              <Clock className="w-3.5 h-3.5" />
              90 seconds · completely free
            </span>

            {/* Headline */}
            <h1 className="text-[clamp(2rem,6.4vw,4.5rem)] font-black uppercase tracking-[-0.04em] leading-[0.95] text-foreground mb-6">
              What's secretly holding your nonprofit back?
            </h1>

            {/* Sub */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
              This quick check reveals what's actually slowing your org down — and shows you exactly how to fix it.
            </p>

            {/* Primary CTA */}
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-10 py-6 text-base font-bold uppercase tracking-wide"
            >
              <a
                href={TYPEFORM_HEALTH_CHECK_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Take the free check
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </section>

        {/* What you get */}
        <section className="py-16 md:py-24 px-6 lg:px-12 border-t border-border">
          <div className="max-w-3xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-start">
            {/* Left — description */}
            <div>
              <p className="text-foreground text-lg leading-relaxed">
                Get a personalized report with concrete steps and tools to help you grow — without burning out, spinning your wheels, or guessing what's next.
              </p>
            </div>

            {/* Right — benefits */}
            <ul className="space-y-5">
              {BENEFITS.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span
                    className="text-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: b.text
                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Minimal bottom CTA */}
        <section className="py-16 md:py-24 px-6 lg:px-12 bg-nim-navy">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready?
            </h2>
            <p className="text-primary-foreground/60 mb-8">
              It takes 90 seconds. No email required to start.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-nim-navy hover:bg-white/90 rounded-full px-10 py-6 text-base font-semibold"
            >
              <a
                href={TYPEFORM_HEALTH_CHECK_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start the free check
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default FreeNOHC;
