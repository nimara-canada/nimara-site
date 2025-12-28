import { StickyNarrative } from '@/components/StickyNarrative';
import { AssessVisual, FixVisual, ProveVisual, ReportVisual } from '@/components/NarrativeVisuals';

const narrativeSteps = [
  {
    id: 'assess',
    label: 'Assess',
    heading: 'See where you stand in 5 minutes',
    description: 'Take our free Health Check to get a clear picture of your nonprofit\'s readiness across governance, finance, programs, and operations. No fluff — just actionable insights.',
    ctaText: 'Start the free check',
    ctaHref: '/health-score',
    visual: <AssessVisual />,
  },
  {
    id: 'fix',
    label: 'Fix',
    heading: 'Close the gaps that matter',
    description: 'We match you with vetted consultants who specialize in exactly what you need — board policies, financial controls, HR systems, or reporting frameworks. Fast, focused, done right.',
    ctaText: 'See how we match',
    ctaHref: '/how-nimara-works',
    visual: <FixVisual />,
  },
  {
    id: 'prove',
    label: 'Prove',
    heading: 'Show funders you\'re ready',
    description: 'Build an evidence vault that speaks for itself. Every policy, process, and document is organized, version-controlled, and ready for due diligence.',
    ctaText: 'Learn about compliance',
    ctaHref: '/how-nimara-works#compliance',
    visual: <ProveVisual />,
  },
  {
    id: 'report',
    label: 'Report',
    heading: 'Tell the story of your impact',
    description: 'Generate funder-ready reports that highlight your outcomes, spending, and governance strength. Less scrambling at reporting time, more time doing good work.',
    ctaText: 'See reporting in action',
    ctaHref: '/how-nimara-works#reporting',
    visual: <ReportVisual />,
  },
];

export function ScrollNarrative() {
  return (
    <section className="py-16 md:py-20 bg-background">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8 lg:mb-0">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">
            How it works
          </span>
        </div>
        <h2 className="heading-2 max-w-2xl">
          From scattered to system-strong in four steps
        </h2>
        <p className="text-body-lg text-body-muted mt-4 max-w-xl">
          A guided path from your first health check to funder-ready confidence.
        </p>
      </div>

      {/* Sticky narrative */}
      <StickyNarrative steps={narrativeSteps} />
    </section>
  );
}
