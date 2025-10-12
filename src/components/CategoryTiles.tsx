import { Button } from "@/components/ui/button";
import { 
  Scale, 
  Calculator, 
  Target, 
  Database, 
  DollarSign, 
  Search, 
  FileCheck,
  HelpCircle
} from "lucide-react";

const categories = [
  { name: "Governance", icon: Scale },
  { name: "Finance & Audit", icon: Calculator },
  { name: "Program Design", icon: Target },
  { name: "Digital & Data", icon: Database },
  { name: "Fundraising", icon: DollarSign },
  { name: "Research", icon: Search },
  { name: "Legal & Compliance", icon: FileCheck },
  { name: "Not sure", icon: HelpCircle, value: "not_sure", description: "Tell us the outcome and we'll route it to the right experts." },
];

export const CategoryTiles = () => {
  const handleCategoryClick = (categoryName: string, categoryValue?: string) => {
    const valueToSet = categoryValue || categoryName;
    
    // Prefill the category in the form using a custom event
    const categorySelect = document.getElementById("q_category");
    if (categorySelect) {
      // Dispatch custom event with the category value
      const event = new CustomEvent("categoryPrefill", { detail: { value: valueToSet } });
      window.dispatchEvent(event);
    }
    
    // Scroll to form
    const form = document.getElementById("form_3quotes");
    form?.scrollIntoView({ behavior: "smooth" });
    
    // Focus logic
    setTimeout(() => {
      const emailField = document.getElementById("q_email") as HTMLInputElement;
      const orgField = document.getElementById("q_org") as HTMLInputElement;
      const outcomeField = document.getElementById("q_outcome") as HTMLTextAreaElement;
      
      // If "not_sure", focus outcome if email/org are filled
      if (valueToSet === "not_sure") {
        if (emailField?.value && orgField?.value) {
          outcomeField?.focus();
        } else if (!emailField?.value) {
          emailField?.focus();
        } else if (!orgField?.value) {
          orgField?.focus();
        }
      } else {
        // Normal flow
        if (!emailField?.value) {
          emailField?.focus();
        } else if (!orgField?.value) {
          orgField?.focus();
        }
      }
    }, 500);
    
    // Track click
    console.log("category_not_sure_tile_click", { category: categoryName, source: "tile" });
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Pick a category</h2>
          <p className="text-muted-foreground text-lg">
            Choose your area of need to get started.
          </p>
          
          <p className="text-sm text-muted-foreground">
            Don't see your area—or not sure what to pick?{" "}
            <a 
              href="mailto:hello@nimara.ca?subject=Help%20choosing%20a%20category" 
              className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              onClick={() => console.log("email_help_choose_click", { source: "helper_text" })}
            >
              Email us at hello@nimara.ca
            </a>{" "}
            and we'll help you choose.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => {
              const isNotSure = category.name === "Not sure";
              return (
                <button
                  key={category.name}
                  onClick={() => handleCategoryClick(category.name, category.value)}
                  className="group p-6 bg-card border border-border rounded-2xl hover:border-primary hover:shadow-md transition-all text-center space-y-3"
                >
                  <div className="flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <category.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm">{category.name}</h3>
                  {category.description && (
                    <p className="text-xs text-muted-foreground">{category.description}</p>
                  )}
                  <p className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    {isNotSure ? "Help me choose →" : "Get 3 quotes →"}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
