export const WhatWeBuilt = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-[#6945D8] flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#202654]">
            What we built instead
          </h2>
        </div>
        
        <div className="bg-[#ACFCE3]/10 border border-[#ACFCE3]/30 rounded-2xl p-6">
          <p className="text-lg text-[#202654] font-semibold mb-3">
            Nimara = vetted Canadian experts + discipline.
          </p>
          <p className="text-[#96A0B5]">
            Every project comes with outcome-first scoping, PM oversight, and clean documentation.
          </p>
        </div>
      </div>
    </section>
  );
};
