import { Button } from "@/components/ui/button";

export const CompanyFinalCTA = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Let's keep this simple.
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Button 
            size="lg" 
            asChild
            className="w-full sm:w-auto"
          >
            <a href="/book-a-call">Book a call</a>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Get up to 3 free quotes →
          </a>
          <span className="text-muted-foreground">·</span>
          <a href="/consultants" className="text-muted-foreground hover:text-foreground transition-colors">
            Apply to the bench →
          </a>
        </div>
      </div>
    </section>
  );
};
