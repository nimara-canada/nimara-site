export const TeamSection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          The team (small on purpose)
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Founder / Technology & Infrastructure
            </h3>
            <p className="text-muted-foreground">
              Builds the rails and keeps them fast, secure, and boring (the good kind).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Evaluation & Learning Lead
            </h3>
            <p className="text-muted-foreground">
              Turns outcomes into simple measures and honest insights.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Delivery Lead (PM)
            </h3>
            <p className="text-muted-foreground">
              Runs the weekly cadence, keeps scope tight, and lands acceptance.
            </p>
          </div>

          <p className="text-muted-foreground pt-4">
            We're growing slowly and carefully. If you're the right fit,{" "}
            <a href="mailto:hello@nimara.ca" className="text-primary hover:underline">
              hello@nimara.ca
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};
