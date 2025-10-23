const categories = [{
  title: "Finance & Compliance",
  description: "Budgeting, CRA-ready processes, month-end close, audits"
}, {
  title: "Data & Systems",
  description: "Grant trackers, Airtable/Notion builds, CRM & tool setups"
}, {
  title: "Governance & Strategy",
  description: "Strategic planning, board support, risk management"
}, {
  title: "Fundraising Support",
  description: "Donor systems, grant planning, funding data tools"
}, {
  title: "HR & People Ops",
  description: "Hiring systems, staff handbooks, role clarity"
}, {
  title: "Program Design & Evaluation",
  description: "Logic models, metrics dashboards, evaluation planning"
}, {
  title: "Operations & Admin",
  description: "Internal workflows, policies, procurement tools"
}];
export const CategoryTiles = () => {
  return <section className="py-16 lg:py-24" aria-labelledby="categories-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 id="categories-heading" className="text-3xl sm:text-4xl font-bold">What We Support</h2>
          <p className="text-lg text-foreground/80">
            We send <strong>expert help for Canadian nonprofits</strong> in these areas:
          </p>
          
          <div className="text-left max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-6">Core Categories:</h3>
            <div className="space-y-4">
              {categories.map((category, index) => <article key={index} className="bg-card rounded-xl p-5 shadow-sm border border-border">
                  <h4 className="font-semibold text-foreground mb-1">
                    {category.title}
                  </h4>
                  <p className="text-sm text-foreground/80">
                    {category.description}
                  </p>
                </article>)}
            </div>
          </div>

          <p className="text-lg text-foreground/90 pt-4">
            We'll scope your request, match you with experts, and return <strong>3 real quote options.</strong>
          </p>
        </div>
      </div>
    </section>;
};