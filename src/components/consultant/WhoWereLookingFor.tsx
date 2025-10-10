import { Badge } from "@/components/ui/badge";

const categories = [
  "Governance",
  "Finance & Audit",
  "Program Design",
  "Digital & Data",
  "Fundraising",
  "Research",
  "Legal & Compliance"
];

export const WhoWereLookingFor = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Who we're looking for
        </h2>
        
        <p className="text-muted-foreground mb-8">
          Real nonprofit wins in Canada, recent references, and clear proposal writing.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {categories.map((category) => (
            <Badge 
              key={category} 
              variant="outline" 
              className="text-sm py-2 px-4 cursor-default hover:bg-primary/10 transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          Not sure which category applies to you?{" "}
          <a href="mailto:hello@nimara.ca" className="text-primary hover:underline">
            Email us at hello@nimara.ca
          </a>{" "}
          and we'll figure it out together.
        </p>
      </div>
    </section>
  );
};
