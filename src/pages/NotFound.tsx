import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main" className="flex items-center justify-center py-16 md:py-24 min-h-[60vh]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Page not found
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Let's get you back on track.
          </p>
          
          <nav aria-label="Quick links" className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
              For Nonprofits
            </a>
            <span className="text-muted-foreground">·</span>
            <a href="/consultants" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
              For Consultants
            </a>
            <span className="text-muted-foreground">·</span>
            <a href="/funders" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
              Funders
            </a>
            <span className="text-muted-foreground">·</span>
            <a href="/company" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
              Company
            </a>
            <span className="text-muted-foreground">·</span>
            <a href="https://calendly.com/hello-nimara/nohc-intake-call" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
              Book a call
            </a>
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
