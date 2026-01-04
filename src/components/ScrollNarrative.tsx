import { StickyNarrative } from '@/components/StickyNarrative';
import { AssessVisual, FixVisual, ProveVisual, ReportVisual } from '@/components/NarrativeVisuals';

const narrativeSteps = [
  {
    id: 'start',
    label: 'Start',
    heading: 'Start Here',
    description: 'Pick what fits: a quick Grant Setup or a full Organization Check.',
    timeNote: 'You choose the pace.',
    visual: <AssessVisual />,
  },
  {
    id: 'build',
    label: 'Build',
    heading: 'Build What Works',
    description: 'We set up simple systems for money, files, and reporting.',
    timeNote: 'Keep it simple.',
    visual: <FixVisual />,
  },
  {
    id: 'run',
    label: 'Run',
    heading: 'Run It Smoothly',
    description: 'Your team can follow it. Your board can trust it. It\'s easy to show when someone asks.',
    timeNote: 'Easy to keep up.',
    visual: <ProveVisual />,
  },
  {
    id: 'grow',
    label: 'Grow',
    heading: 'Grow When Ready',
    description: 'Add more when it makes sense. We can help with the next step.',
    timeNote: 'At your pace.',
    ctaText: 'Get Started',
    ctaHref: '/start-here',
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
