import { useEffect, useRef, useState } from 'react';

export const TheGap = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const bullets = [
    "Many orgs are asked to be audit-ready while running on volunteer systems.",
    "Funders pay for short pilots and reports, not lasting backbone.",
    "Consultants do great one-off work, but there is no shared install-and-maintain system.",
    "Leaders are burning out trying to manage finance, HR, fundraising, and tech late at night."
  ];

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
    <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 opacity-50" />
      
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" className="text-gray-900" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div ref={sectionRef} className="relative max-w-2xl mx-auto">
        {/* Title with animation */}
        <h2 
          className={`heading-2 text-gray-900 mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="block">The gap</span>
          <span className="block text-gray-600 font-normal">no one is paid to fix</span>
        </h2>
        
        {/* Lead paragraph with fade-in */}
        <p 
          className={`text-subtitle text-gray-700 mb-10 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Small and mid-size nonprofits are asked to do big work with weak systems. 
          Most leaders are trying to keep the mission alive while their basic 
          operations are <span className="text-gray-900 font-medium">shaky</span>.
        </p>
        
        {/* Animated bullet points */}
        <div className="space-y-4 mb-12">
          {bullets.map((bullet, index) => (
            <div 
              key={index} 
              className={`group flex items-start transition-all duration-700 hover:translate-x-1 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{ transitionDelay: isVisible ? `${400 + index * 100}ms` : '0ms' }}
            >
              {/* Modern bullet indicator */}
              <span className="mt-2 mr-4 flex-shrink-0">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75 group-hover:bg-gray-600"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-500"></span>
                </span>
              </span>
              <p className="text-body group-hover:text-gray-900 transition-colors">
                {bullet}
              </p>
            </div>
          ))}
        </div>
        
        {/* Closing statement with special treatment */}
        <div 
          className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: isVisible ? '900ms' : '0ms' }}
        >
          <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-gray-100 to-transparent opacity-50 rounded-lg" />
          <p className="relative text-lg sm:text-xl font-semibold text-gray-900 pl-4 border-l-4 border-gray-900">
            Nimara exists to <span className="text-black">own this gap</span> as our whole job.
          </p>
        </div>
      </div>
    </section>
  );
};
