import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const tiers = [
  { label: 'Tier 0', description: 'Too early / DIY support' },
  { label: 'Tier 1', description: 'Basic stability' },
  { label: 'Tier 2', description: 'Audit-ready' },
  { label: 'Tier 3', description: 'Growth-ready' },
  { label: 'Tier 4', description: 'Complex or multi-site' }
];

export const HowWeWork = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-accent/5 to-background overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
            How the Nimara system works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We use a simple but strict model so we can match each organization to the right kind of support.
          </p>
        </div>

        {/* Five tiers section */}
        <div 
          className={`mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h3 className="text-2xl font-bold text-foreground mb-3 text-center">
            Five tiers of organizational health
          </h3>
          <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
            We sort organizations into five tiers, from "too early" to "ready for complex work."
          </p>
          
          <div className="grid gap-3 max-w-2xl mx-auto">
            {tiers.map((tier, index) => (
              <div
                key={tier.label}
                className={`flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: isVisible ? `${400 + index * 100}ms` : '0ms' }}
              >
                <Badge variant="secondary" className="text-sm font-semibold shrink-0">
                  {tier.label}
                </Badge>
                <span className="text-foreground">{tier.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Two paths section */}
        <div 
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Two ways to work with Nimara
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Path A */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge className="bg-accent text-foreground">Path A</Badge>
                  <span className="text-xl">Fast fixes</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Fast, clearly scoped modules for one main problem, like cash flow, board basics, or simple HR setup. 
                  We match orgs into these modules within about 72 hours when possible.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Path B */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="default">Path B</Badge>
                  <span className="text-xl">Tiered packages</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Deeper, pre-built bundles for orgs that need a full install across more than one area, 
                  like finance + HR + governance for a Tier 2 or Tier 3 team.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link 
              to="/how-nimara-works"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-lg transition-colors"
            >
              See the full Nimara model
              <svg 
                className="w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};