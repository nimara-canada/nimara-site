export const OurStory = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
          Our Story
        </h2>
        
        <div className="space-y-6 text-lg text-foreground leading-relaxed">
          <p>
            We started on the front lines. We ran programs. We chased receipts. We closed month-end at midnight.
          </p>
          
          <p>
            We sat on the funder side. We read reports that didn't match the work. We saw good projects drag on.
          </p>
          
          <p>
            So we built Nimara. People + simple rules + clear files. Vetted experts, standard templates, and PM oversight—so delivery is faster and close-outs are clean.
          </p>
        </div>

        <div className="mt-8 p-6 bg-[#ACFCE3]/20 border-2 border-[#ACFCE3] rounded-2xl">
          <p className="text-center text-foreground font-medium">
            We keep things human. Short calls. Plain words. One way of working across teams.
          </p>
        </div>
      </div>
    </section>
  );
};
