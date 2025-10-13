export const OurStory = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Our story (why we started)
        </h2>
        
        <p className="text-lg text-foreground mb-4">
          We kept seeing the same problems:
        </p>

        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3 text-lg text-foreground">
            <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
            <span>Scopes took weeks. Work started late.</span>
          </li>
          <li className="flex items-start gap-3 text-lg text-foreground">
            <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
            <span>Proposals were apples vs. oranges.</span>
          </li>
          <li className="flex items-start gap-3 text-lg text-foreground">
            <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
            <span>Files lived everywhere; evidence was hard to find.</span>
          </li>
          <li className="flex items-start gap-3 text-lg text-foreground">
            <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
            <span>Funder rules were unclear until close-out day.</span>
          </li>
        </ul>

        <p className="text-lg text-foreground">
          So we built Nimara: outcome-first scoping, vetted Canadian experts, <strong>PM oversight on every project</strong>, and a simple way to keep proof tidy.
        </p>
      </div>
    </section>
  );
};
