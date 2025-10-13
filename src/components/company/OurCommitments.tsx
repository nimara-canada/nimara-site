const commitments = [
  {
    title: "Plain language.",
    description: "Briefs and reports you can skim and act on.",
  },
  {
    title: "Privacy by default.",
    description: "Canada-hosted services; no sensitive pasting into AI tools.",
  },
  {
    title: "Equity & access.",
    description: "Templates and timelines that work for small teams.",
  },
  {
    title: "No lock-in.",
    description: "Export your files anytime.",
  },
  {
    title: "Give back.",
    description: "Free templates, checklists, and short guides (not legal advice).",
  },
];

export const OurCommitments = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-[#6945D8] flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#202654]">
            Our commitments to the sector
          </h2>
        </div>
        
        <div className="space-y-4">
          {commitments.map((commitment, index) => (
            <div key={index} className="bg-[#F8F9FC] border border-[#E5E7EB] rounded-2xl p-6">
              <h3 className="font-semibold text-[#202654] mb-2">
                {commitment.title}
              </h3>
              <p className="text-[#96A0B5]">
                {commitment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
