import { StickyNarrative } from '@/components/StickyNarrative';
import { AssessVisual, FixVisual, ProveVisual, ReportVisual } from '@/components/NarrativeVisuals';

const narrativeSteps = [
  {
    id: 'doing-work',
    label: 'Step 1',
    heading: 'You\'re doing the work.',
    description: 'Programs are running. People are being helped. The mission is alive.',
    visual: <AssessVisual />,
  },
  {
    id: 'messy',
    label: 'Step 2',
    heading: 'But the back-end is messy.',
    description: 'Receipts are somewhere. Approvals happen over text. Files live in three different places. Everyone knows what they do — it just isn\'t written down.',
    visual: <FixVisual />,
  },
  {
    id: 'funder-asks',
    label: 'Step 3',
    heading: 'Then a funder asks questions.',
    description: 'Show us the receipts. Show us the approvals. Explain what changed. And suddenly, finding proof becomes a scramble.',
    visual: <ProveVisual />,
  },
  {
    id: 'better-way',
    label: 'Step 4',
    heading: 'There\'s a better way.',
    description: 'Simple systems. Clear rules. Proof that\'s ready before anyone asks. We help you build the basics — so you can focus on what matters.',
    timeNote: 'Built once. Used again.',
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
