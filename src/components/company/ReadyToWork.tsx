import { Button } from "@/components/ui/button";
export const ReadyToWork = () => {
  return <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#202654]">
            Ready to work together?
          </h2>
        </div>
        
        <p className="text-[#96A0B5] text-center mb-8 max-w-3xl mx-auto">
          We'll scope your need, match the right expert, and get you 3 free quotes—fast, clear, pressure-free.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Button size="lg" asChild className="w-full sm:w-auto">
            <a href="/#form_3quotes">Get 3 free quotes</a>
          </Button>
        </div>

        <p className="text-[#96A0B5] text-center">
          Prefer a chat?{" "}
          <a href="/book-a-call" className="text-[#6945D8] hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-[#6945D8] rounded">
            Book a call
          </a>{" "}
          (we hold 30 minutes; most calls take ~15).
        </p>
      </div>
    </section>;
};