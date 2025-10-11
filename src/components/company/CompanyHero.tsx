import { Button } from "@/components/ui/button";

export const CompanyHero = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Building the infrastructure for Canada's nonprofit ecosystem
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          We're nonprofit leaders and builders. We've led projects and managed funds. We've worked with 300+ Canadian nonprofits to build capacity and systems. We've seen the problem first-hand—and we're here to fix it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Button 
            size="lg" 
            asChild
            className="w-full sm:w-auto"
          >
            <a href="/trust">View our commitment</a>
          </Button>
        </div>

        <a 
          href="/trust" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          View our commitment →
        </a>
      </div>
    </section>
  );
};
