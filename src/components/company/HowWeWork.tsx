export const HowWeWork = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          How we work (simple)
        </h2>

        <div className="bg-accent/10 rounded-2xl p-6 mb-6">
          <p className="text-center text-lg font-semibold text-foreground">
            Listen → Scope → Match → Deliver → Verify
          </p>
        </div>

        <p className="text-lg text-muted-foreground">
          You share the outcome. We draft a short brief, line up the right expert(s), manage delivery, and make sure the files are ready for audit or board review.
        </p>
      </div>
    </section>
  );
};
