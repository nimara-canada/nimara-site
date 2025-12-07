import { useState } from 'react';
import { Link } from 'react-router-dom';

export const TwoWaysSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Sophisticated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large soft gradient orbs */}
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-gradient-to-br from-violet-100/60 via-indigo-50/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-amber-50/60 via-orange-50/30 to-transparent rounded-full blur-3xl" />
        
        {/* Subtle dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(203 213 225 / 0.4) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
        
        {/* Decorative line elements */}
        <svg className="absolute top-20 left-10 w-64 h-64 text-slate-200 opacity-60" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        
        <svg className="absolute bottom-20 right-10 w-48 h-48 text-slate-200 opacity-60" viewBox="0 0 200 200" fill="none">
          <rect x="40" y="40" width="120" height="120" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" transform="rotate(15 100 100)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-20">
          {/* Refined pill badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-200/80 shadow-sm shadow-slate-200/50 mb-10">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
              Choose Your Path
            </span>
          </div>
          
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-8 tracking-tight leading-[1.1]">
            Two ways to work
            <br />
            <span className="relative">
              with{' '}
              <span className="relative inline-block">
                Nimara
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-violet-400/30" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0 9 Q50 0 100 6 T200 3" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </span>
          </h2>
          
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Whether you need rapid response or systematic transformation, 
            we meet you where you are.
          </p>
        </div>

        {/* Cards container */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Fast Help */}
          <div
            className="group relative"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Hover glow */}
            <div className={`absolute -inset-4 bg-gradient-to-br from-amber-200/40 via-orange-100/30 to-transparent rounded-[2rem] blur-2xl transition-all duration-700 ${hoveredCard === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} />
            
            <div className="relative h-full bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 p-10 lg:p-12 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-300/50 hover:border-slate-300/80 hover:-translate-y-1">
              
              {/* Top accent line */}
              <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
              
              {/* Icon */}
              <div className="relative mb-10 inline-block">
                <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/50 flex items-center justify-center p-4 shadow-inner">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-300/50">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Title block */}
              <div className="mb-8">
                <h3 className="font-serif text-3xl lg:text-4xl font-light text-slate-900 mb-2 tracking-tight">
                  Fast Help
                </h3>
                <p className="text-amber-600 text-sm uppercase tracking-[0.2em] font-semibold">
                  Fix One Urgent Problem
                </p>
              </div>

              {/* Content */}
              <div className="space-y-6 mb-10">
                <p className="text-slate-600 text-lg leading-relaxed">
                  For when one thing is on fire — a scary email, an audit, 
                  a funder deadline, a policy gap.
                </p>
                
                <div className="pl-6 border-l-2 border-amber-200 space-y-4">
                  <p className="text-slate-500 leading-relaxed">
                    We keep it small and clear: one problem, one mini-bundle, 
                    fast turnaround.
                  </p>
                  <p className="text-slate-500 leading-relaxed">
                    No big diagnostic. No health check required.
                  </p>
                </div>
              </div>

              {/* Info badge */}
              <div className="mb-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200">
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-slate-500">No NOHC needed — we go straight to fixing</span>
              </div>

              {/* CTA Button */}
              <Link 
                to="/path-a"
                className="group/btn relative w-full py-5 px-8 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-amber-300/40 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-3">
                  Get fast help
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Card 2: Health Check & System Installs */}
          <div
            className="group relative"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Hover glow */}
            <div className={`absolute -inset-4 bg-gradient-to-br from-violet-200/40 via-indigo-100/30 to-transparent rounded-[2rem] blur-2xl transition-all duration-700 ${hoveredCard === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} />
            
            <div className="relative h-full bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 p-10 lg:p-12 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-300/50 hover:border-slate-300/80 hover:-translate-y-1">
              
              {/* Top accent line */}
              <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-violet-300/60 to-transparent" />
              
              {/* Most Popular Badge - Premium styled */}
              <div className="absolute -top-4 right-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur-md opacity-40" />
                  <div className="relative px-5 py-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold tracking-wider uppercase shadow-lg">
                    Most Popular
                  </div>
                </div>
              </div>

              {/* Icon */}
              <div className="relative mb-10 inline-block">
                <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-200/50 flex items-center justify-center p-4 shadow-inner">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-300/50">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Title block */}
              <div className="mb-8">
                <h3 className="font-serif text-3xl lg:text-4xl font-light text-slate-900 mb-2 tracking-tight">
                  Health Check & System Installs
                </h3>
                <p className="text-violet-600 text-sm uppercase tracking-[0.2em] font-semibold">
                  Comprehensive Transformation
                </p>
              </div>

              {/* Content */}
              <div className="space-y-6 mb-10">
                <p className="text-slate-600 text-lg leading-relaxed">
                  For when the whole system feels messy — finance, 
                  governance, HR, or delivery.
                </p>
                
                <div className="pl-6 border-l-2 border-violet-200 space-y-4">
                  <p className="text-slate-500 leading-relaxed">
                    We start with the Nimara Organizational Health Check (NOHC) 
                    to see where each system is.
                  </p>
                  <p className="text-slate-500 leading-relaxed">
                    Then we pick 1–2 Bundles to move those systems up a Tier.
                  </p>
                </div>
              </div>

              {/* Info badge */}
              <div className="mb-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 border border-violet-200">
                <svg className="w-4 h-4 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-violet-700">NOHC required — we build on diagnosis</span>
              </div>

              {/* CTA Button */}
              <Link 
                to="/health-score"
                className="group/btn relative w-full py-5 px-8 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-violet-300/40 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-3">
                  Start with a health check
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom section - social proof */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white shadow-sm" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-slate-900">50+ organizations</p>
              <p className="text-xs text-slate-500">became funder-ready with Nimara</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3 text-slate-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoWaysSection;
