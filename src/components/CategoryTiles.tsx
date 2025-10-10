import { Button } from "@/components/ui/button";
import { 
  Scale, 
  Calculator, 
  Target, 
  Database, 
  DollarSign, 
  Search, 
  FileCheck 
} from "lucide-react";

const categories = [
  { name: "Governance", icon: Scale },
  { name: "Finance & Audit", icon: Calculator },
  { name: "Program Design", icon: Target },
  { name: "Digital & Data", icon: Database },
  { name: "Fundraising", icon: DollarSign },
  { name: "Research", icon: Search },
  { name: "Legal & Compliance", icon: FileCheck },
];

export const CategoryTiles = () => {
  const handleCategoryClick = (categoryName: string) => {
    // Prefill the category in the form
    const categorySelect = document.getElementById("q_category");
    if (categorySelect) {
      // Trigger the select to open with the value
      const event = new Event("change", { bubbles: true });
      categorySelect.dispatchEvent(event);
    }
    
    // Scroll to form
    const form = document.getElementById("form_3quotes");
    form?.scrollIntoView({ behavior: "smooth" });
    
    // Focus first empty required field
    setTimeout(() => {
      const emailField = document.getElementById("q_email") as HTMLInputElement;
      const orgField = document.getElementById("q_org") as HTMLInputElement;
      
      if (!emailField?.value) {
        emailField?.focus();
      } else if (!orgField?.value) {
        orgField?.focus();
      }
    }, 500);
    
    // Track click
    console.log("Category tile clicked:", categoryName, "source: category_tile");
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Pick a category</h2>
          <p className="text-muted-foreground text-lg">
            Choose your area of need to get started.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => handleCategoryClick(category.name)}
                className="group p-6 bg-card border border-border rounded-2xl hover:border-primary hover:shadow-md transition-all text-center space-y-3"
              >
                <div className="flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-sm">{category.name}</h3>
                <p className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Get 3 quotes →
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
