export const TeamSection = () => {
  return <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          The team (small on purpose)
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Benard Serunyigo - Founder </h3>
            <p className="text-muted-foreground">Builds the backbone of Nimara — turning messy nonprofit workflows into seamless systems that run fast, stay secure, and never break under pressure.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Thabani Conrad Bhala - Head of Delivery</h3>
            <p className="text-muted-foreground">Owns execution from start to finish. Translates strategy into measurable outcomes, keeps delivery on time and funders happy, and ensures no project slips through the cracks.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Darryl De Dios -Impact & Research Lead</h3>
            <p className="text-muted-foreground">
              Connects data to meaning. Tracks progress, measures real impact, and turns program learnings into insights that strengthen every future grant and partnership.
            </p>
          </div>

          
        </div>
      </div>
    </section>;
};