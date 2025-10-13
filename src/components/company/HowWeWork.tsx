const steps = [
  {
    number: 1,
    title: "Listen",
    description: "You tell us the outcome you want",
  },
  {
    number: 2,
    title: "Scope",
    description: "We scope it into a short, comparable brief",
  },
  {
    number: 3,
    title: "Match",
    description: "You get up to 3 proposals — same format, easy to compare",
  },
  {
    number: 4,
    title: "Deliver",
    description: "We manage delivery with a Nimara PM",
  },
  {
    number: 5,
    title: "Verify",
    description: "You get proof-ready files for boards, funders, and audits",
  },
];

export const HowWeWork = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-[#6945D8] flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#202654]">
            How Nimara works
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#6945D8] text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">
                {step.number}
              </div>
              <h3 className="font-semibold text-[#202654] mb-2">{step.title}</h3>
              <p className="text-sm text-[#96A0B5]">{step.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-[#202654] font-medium">
          No chaos. No bloated decks. Just done.
        </p>
      </div>
    </section>
  );
};
