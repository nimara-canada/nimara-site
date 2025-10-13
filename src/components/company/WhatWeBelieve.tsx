const features = [
  {
    title: "Outcome first.",
    description: "We define \"what done looks like\" up front.",
  },
  {
    title: "Vetted experts.",
    description: "Canadian nonprofit specialists only.",
  },
  {
    title: "PM on every project.",
    description: "A Nimara PM keeps pace and removes blockers.",
  },
  {
    title: "Comparable proposals.",
    description: "Same format, easy to choose.",
  },
  {
    title: "Evidence, not chaos.",
    description: "Artifacts stay organized for review.",
  },
  {
    title: "Canada-hosted data.",
    description: "Records kept 7 years.",
  },
];

export const WhatWeBelieve = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          What makes us different
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
