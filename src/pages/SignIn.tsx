import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PortalNotifyModal } from "@/components/signin/PortalNotifyModal";
import { LayoutDashboard, Inbox, CheckSquare, FolderLock, Heart, Building2, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: LayoutDashboard,
      title: "Role-based dashboards",
      description: "Nonprofits & consultants see only what they need",
    },
    {
      icon: Inbox,
      title: "Proposals inbox",
      description: "Compare quotes side-by-side",
    },
    {
      icon: CheckSquare,
      title: "Project checklists",
      description: "One way of working, tracked by your PM",
    },
    {
      icon: FolderLock,
      title: "Evidence locker",
      description: "Deliverables, approvals, receipts index",
    },
  ];

  const startPaths = [
    {
      icon: Heart,
      title: "Nonprofits",
      description: "Use Get up to 3 free quotes for one category, or join the packages waitlist for multi-area work.",
    },
    {
      icon: Users,
      title: "Consultants",
      description: "Apply to join the founding bench.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header activeRoute="/signin" />
      
      <main className="pt-8 pb-16">
        {/* Hero */}
        <section className="container max-w-5xl mx-auto px-6 py-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-8">
            Quotes & onboarding are live now. Sign-in launches Nov 5.
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Portal opens Nov 5, 2025
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're finishing the login experience for nonprofits and consultants. You can start today; your project and files will live in the web app at launch.
          </p>
          
          <Button 
            size="lg" 
            onClick={() => setIsModalOpen(true)}
            className="mb-6"
          >
            Notify me when the portal opens
          </Button>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link to="/" className="text-primary hover:underline font-medium">
              Get up to 3 free quotes
            </Link>
            <Link to="/consultants" className="text-primary hover:underline font-medium">
              Apply to the bench (consultants)
            </Link>
          </div>
        </section>

        {/* What's coming on Nov 5 */}
        <section className="container max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            What's coming on Nov 5
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            Data stored in Canada. Records kept 7 years.
          </p>
        </section>

        {/* Start now */}
        <section className="container max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Start now
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            {startPaths.map((path, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <path.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {path.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {path.description}
                </p>
              </div>
            ))}
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            (All active today; the portal is for sign-in and ongoing work.)
          </p>
        </section>

        {/* FAQ */}
        <section className="container max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            FAQ
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card border border-border rounded-2xl px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Can we begin before Nov 5?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. Quotes, onboarding, and delivery run with your Nimara PM now; your project will appear in the app when sign-in opens.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="bg-card border border-border rounded-2xl px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Will we need new accounts later?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We'll invite you on Nov 5. Google/Microsoft sign-in is on the roadmap.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="bg-card border border-border rounded-2xl px-6 shadow-sm">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Where are files stored?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                In Canada, with records retained 7 years.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Final CTA */}
        <section className="container max-w-5xl mx-auto px-6 py-16 text-center">
          <Button 
            size="lg" 
            onClick={() => setIsModalOpen(true)}
            className="mb-6"
          >
            Notify me when the portal opens
          </Button>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link to="/" className="text-primary hover:underline font-medium">
              Get up to 3 free quotes
            </Link>
            <Link to="/consultants" className="text-primary hover:underline font-medium">
              Apply to the bench
            </Link>
          </div>
        </section>
      </main>

      <PortalNotifyModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Footer />
    </div>
  );
}
