import { StickyNarrative } from '@/components/StickyNarrative';
import { AssessVisual, FixVisual, ProveVisual, ReportVisual } from '@/components/NarrativeVisuals';
import { TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";

const narrativeSteps = [
  {
    id: 'assess',
    label: 'Assess',
    heading: 'See where you stand in 5 minutes',
    description: 'Take our free Quick Check (about 20–30 questions). You\'ll get your score right away, and we\'ll email your report instantly.',
    ctaText: 'Start the free check →',
    ctaHref: TYPEFORM_HEALTH_CHECK_URL,
    ctaExternal: true,
    visual: <AssessVisual />,
  },
  {
    id: 'fix',
    label: 'Fix',
    heading: 'Close the gaps that matter',
    description: 'We show you the top gaps to fix first. You get a simple plan with clear steps.',
    ctaText: 'See your fix plan →',
    ctaHref: '/how-nimara-works',
    visual: <FixVisual />,
  },
  {
    id: 'prove',
    label: 'Prove',
    heading: 'Show funders you\'re ready',
    description: 'Want to go deeper? Choose the Deep Check. We review your evidence and help you organize what funders need to see.',
    ctaText: 'Learn about the Deep Check →',
    ctaHref: '/how-nimara-works#deep-check',
    timeNote: 'Deep Check takes 2–4 weeks.',
    visual: <ProveVisual />,
  },
  {
    id: 'report',
    label: 'Report',
    heading: 'Tell the story of your impact',
    description: 'Turn your work into a clear report that shows: what you did, what you spent, and what changed.',
    ctaText: 'See reporting in action →',
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
