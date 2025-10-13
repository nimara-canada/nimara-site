export const ReadyToWork = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Ready to work together?
        </h2>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-2">
            <span className="text-muted-foreground">→</span>
            <div>
              <span className="text-foreground">For nonprofits: </span>
              <a href="/#form_3quotes" className="text-primary hover:underline">
                Get 3 free quotes
              </a>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-muted-foreground">→</span>
            <div>
              <span className="text-foreground">For funders: </span>
              <a href="/funders" className="text-primary hover:underline">
                Request a briefing
              </a>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground">
          If you prefer a conversation:{" "}
          <a href="/book-a-call" className="text-primary hover:underline">
            Book a call
          </a>{" "}
          (15 minutes; we hold 30 in case you need it).
        </p>
      </div>
    </section>
  );
};
