const problems = ["Our month-end process is a mess", "We have no system to track grants or donors", "We need a budget that makes sense to funders", "We're doing everything in spreadsheets — and it's failing", "We don't know if we're CRA compliant", "We need to write a plan… but we don't know where to start"];
export const ExpertsSection = () => {
  return <section className="py-16 lg:py-24" aria-labelledby="experts-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 id="experts-heading" className="text-3xl sm:text-4xl font-bold">
            Problems We Can Quote On
          </h2>
          <p className="text-lg text-foreground/80">
            Most <strong>Canadian nonprofit organizations</strong> come to us when they need <strong>financial management solutions</strong>, <strong>governance framework support</strong>, or <strong>compliance audit preparation</strong>…
          </p>
          <div className="space-y-3">
            {problems.map((problem, index) => <article key={index} className="bg-card rounded-xl p-4 shadow-sm text-left border border-border">
                <p className="text-foreground font-medium">"{problem}"</p>
              </article>)}
          </div>
          <p className="text-lg text-foreground/90 pt-4">If any of these sound familiar — <strong>let's quote it out.</strong></p>
        </div>
      </div>
    </section>;
};