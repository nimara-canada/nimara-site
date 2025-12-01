import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const audiences = [
  {
    title: 'Nonprofits & community orgs',
    bullets: [
      'Small and mid-size orgs (about 1–100 staff)',
      'Community-led and equity-seeking organizations',
      'Teams that want working systems, not just another training'
    ],
    ctaText: 'Explore support options',
    ctaLink: '/'
  },
  {
    title: 'Consultants & operators',
    bullets: [
      'Senior nonprofit or public-interest operators',
      'Former EDs, directors, and specialist leads',
      'People who like fixing systems more than selling work'
    ],
    ctaText: 'See Practice Partner roles',
    ctaLink: '/consultants'
  },
  {
    title: 'Funders & ecosystem partners',
    bullets: [
      'Funders who want one shared operator instead of 20 pilots',
      'Backbones, networks, and intermediaries',
      'Partners who care about real org health, not only outputs'
    ],
    ctaText: 'Join the funder waitlist',
    ctaLink: '#funder-waitlist'
  }
];

export const WhoWeAreFor = () => {
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
      className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-secondary-background/5 to-background overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div 
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Who we are building Nimara for
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nimara is a shared system that only works if it serves all three sides of the table.
          </p>
        </div>

        {/* Three audience cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {audiences.map((audience, index) => (
            <Card
              key={audience.title}
              className={`group hover:shadow-lg hover:border-primary/40 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isVisible ? `${200 + index * 150}ms` : '0ms' }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  {audience.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <ul className="space-y-3 mb-6 flex-grow">
                  {audience.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start">
                      <span className="mr-3 mt-1.5 flex-shrink-0">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-primary"></span>
                      </span>
                      <span className="text-muted-foreground leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:border-primary/60 transition-colors"
                >
                  <Link to={audience.ctaLink}>
                    {audience.ctaText}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
