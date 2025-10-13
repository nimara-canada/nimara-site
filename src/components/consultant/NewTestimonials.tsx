import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Best onboarding call I've ever had.",
    note: "Placeholder testimonial"
  },
  {
    quote: "I didn't know consulting could be this well-supported.",
    note: "Placeholder testimonial"
  },
  {
    quote: "Finally — a platform that understands nonprofits and execution.",
    note: "Placeholder testimonial"
  }
];

export const NewTestimonials = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border rounded-[20px] shadow-sm bg-accent/40">
              <CardContent className="p-6">
                <p className="text-foreground text-lg font-medium mb-2">
                  "{testimonial.quote}"
                </p>
                <p className="text-sm text-muted-foreground italic">
                  {testimonial.note}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
