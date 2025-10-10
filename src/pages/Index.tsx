import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ThreeColumnSection } from "@/components/ThreeColumnSection";
import { ExpertsSection } from "@/components/ExpertsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { CategoryTiles } from "@/components/CategoryTiles";
import { BenefitsSection } from "@/components/BenefitsSection";
import { PackagesSection } from "@/components/PackagesSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ThreeColumnSection />
        <ExpertsSection />
        <HowItWorksSection />
        <CategoryTiles />
        <BenefitsSection />
        <PackagesSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Nimara</h3>
              <p className="text-sm opacity-80">
                Audit-ready by design. Vetted Canadian nonprofit experts.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Users</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="/nonprofits" className="hover:opacity-100">Nonprofits</a></li>
                <li><a href="/funders" className="hover:opacity-100">Funders</a></li>
                <li><a href="/consultants" className="hover:opacity-100">Consultants</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Learn</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="/resources" className="hover:opacity-100">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="/company" className="hover:opacity-100">About</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-background/20 text-center text-sm opacity-60">
            <p>&copy; {new Date().getFullYear()} Nimara. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
