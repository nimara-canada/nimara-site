const problems = [
  "Scopes took weeks; work started late",
  "Proposals were incomparable",
  "Files lived everywhere; evidence was hard to find",
  "Funder rules surfaced on close-out day",
];

export const OurStory = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-[#6945D8] flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#202654]">
            The recurring problems we saw
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-[#F8F9FC] border border-[#E5E7EB] rounded-2xl p-6 text-[#202654]"
            >
              {problem}
            </div>
          ))}
        </div>

        <p className="text-center text-[#96A0B5] text-sm">
          No one had time to fix it.
        </p>
      </div>
    </section>
  );
};
