import { cn } from '@/lib/utils';
import { ClipboardCheck, Wrench, Shield, FileText, Check, AlertTriangle, TrendingUp } from 'lucide-react';

interface NarrativeVisualProps {
  className?: string;
}

// Assess Visual - Health score dashboard mockup
export function AssessVisual({ className }: NarrativeVisualProps) {
  return (
    <div className={cn('w-full h-full flex items-center justify-center p-8', className)}>
      <div className="w-full max-w-sm bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-muted/30 border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-border" />
            <div className="w-2.5 h-2.5 rounded-full bg-border" />
            <div className="w-2.5 h-2.5 rounded-full bg-border" />
          </div>
          <span className="text-xs text-muted-foreground font-medium ml-auto">Health Assessment</span>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Score */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Overall Score</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">67</span>
                <span className="text-lg text-muted-foreground">/100</span>
              </div>
            </div>
            <div className="px-3 py-1.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full flex items-center gap-1.5">
              <AlertTriangle className="w-3 h-3" />
              Tier 2
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            {[
              { label: 'Governance', value: 72, color: 'bg-primary' },
              { label: 'Finance', value: 58, color: 'bg-amber-500' },
              { label: 'Programs', value: 75, color: 'bg-primary' },
              { label: 'Operations', value: 62, color: 'bg-amber-500' },
            ].map((item) => (
              <div key={item.label} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-medium text-foreground">{item.value}%</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={cn('h-full rounded-full transition-all duration-1000', item.color)}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Gaps found */}
          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground mb-2">Gaps identified</p>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">12</span>
              <span className="text-xs text-muted-foreground">areas need attention</span>
            </div>
          </div>

          {/* Instant results badge */}
          <div className="text-center pt-2">
            <span className="text-xs text-primary font-medium">Instant results • Free Quick Check</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fix Visual - Action items checklist
export function FixVisual({ className }: NarrativeVisualProps) {
  return (
    <div className={cn('w-full h-full flex items-center justify-center p-8', className)}>
      <div className="w-full max-w-sm bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-muted/30 border-b border-border">
          <Wrench className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Remediation Plan</span>
        </div>
        
        {/* Content */}
        <div className="p-4 space-y-3">
          {[
            { title: 'Create board manual', status: 'done', effort: 'S' },
            { title: 'Implement monthly reviews', status: 'done', effort: 'M' },
            { title: 'Document HR policies', status: 'in-progress', effort: 'M' },
            { title: 'Set up financial controls', status: 'pending', effort: 'L' },
            { title: 'Create risk register', status: 'pending', effort: 'S' },
          ].map((item, i) => (
            <div 
              key={i}
              className={cn(
                'flex items-center gap-3 p-3 rounded-xl transition-colors',
                item.status === 'done' && 'bg-green-50',
                item.status === 'in-progress' && 'bg-primary/5 border border-primary/20',
                item.status === 'pending' && 'bg-muted/30'
              )}
            >
              <div className={cn(
                'w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0',
                item.status === 'done' && 'bg-green-500 text-white',
                item.status === 'in-progress' && 'border-2 border-primary',
                item.status === 'pending' && 'border-2 border-border'
              )}>
                {item.status === 'done' && <Check className="w-3 h-3" />}
              </div>
              <span className={cn(
                'flex-1 text-sm',
                item.status === 'done' && 'text-muted-foreground line-through',
                item.status === 'in-progress' && 'text-foreground font-medium',
                item.status === 'pending' && 'text-muted-foreground'
              )}>
                {item.title}
              </span>
              <span className={cn(
                'text-[10px] font-medium px-2 py-0.5 rounded',
                item.effort === 'S' && 'bg-green-100 text-green-700',
                item.effort === 'M' && 'bg-amber-100 text-amber-700',
                item.effort === 'L' && 'bg-red-100 text-red-700'
              )}>
                {item.effort}
              </span>
            </div>
          ))}
        </div>

        {/* Progress footer */}
        <div className="px-4 py-3 bg-muted/30 border-t border-border">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium text-foreground">2 of 5 complete</span>
          </div>
          <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-[40%] bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Prove Visual - Compliance dashboard
export function ProveVisual({ className }: NarrativeVisualProps) {
  return (
    <div className={cn('w-full h-full flex items-center justify-center p-8', className)}>
      <div className="w-full max-w-sm bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-muted/30 border-b border-border">
          <Shield className="w-4 h-4 text-green-600" />
          <span className="text-sm font-medium">Evidence Vault</span>
          <div className="ml-auto flex items-center gap-1 text-green-600">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium">Verified</span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Compliance score */}
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
            <div>
              <p className="text-xs text-green-700 uppercase tracking-wider mb-1">Funder Ready</p>
              <p className="text-2xl font-bold text-green-700">92%</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center">
              <Check className="w-6 h-6" />
            </div>
          </div>

          {/* Documents */}
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Documentation</p>
            {[
              { name: 'Board Manual', date: 'Dec 15' },
              { name: 'Financial Policies', date: 'Dec 12' },
              { name: 'Bylaws (Signed)', date: 'Dec 10' },
              { name: 'Conflict of Interest', date: 'Dec 8' },
            ].map((doc, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{doc.name}</p>
                  <p className="text-xs text-muted-foreground">{doc.date}</p>
                </div>
                <Check className="w-4 h-4 text-green-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Report Visual - Funder Report / Funder Pack
export function ReportVisual({ className }: NarrativeVisualProps) {
  const sections = [
    { name: 'Summary', included: true },
    { name: 'What we did', included: true },
    { name: 'Spending', included: true },
    { name: 'Proof', included: true },
    { name: 'Next steps', included: true },
  ];

  return (
    <div className={cn('w-full h-full flex items-center justify-center p-8', className)}>
      <div className="w-full max-w-sm bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-muted/30 border-b border-border">
          <FileText className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Funder Report</span>
          <span className="ml-auto text-xs text-muted-foreground">Ready to share</span>
        </div>
        
        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Sections list */}
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Included in Report</p>
            {sections.map((section, i) => (
              <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-muted/30">
                <div className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-sm text-foreground">{section.name}</span>
              </div>
            ))}
          </div>

          {/* Export button */}
          <button className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
            <FileText className="w-4 h-4" />
            Export PDF
          </button>

          {/* Attached items */}
          <div className="pt-2 border-t border-border">
            <p className="text-xs text-muted-foreground mb-2">Attached documents</p>
            <div className="flex flex-wrap gap-2">
              {['Budget.xlsx', 'Photos.zip', 'Outcomes.pdf'].map((file, i) => (
                <span key={i} className="inline-flex items-center gap-1 text-xs bg-muted/50 px-2 py-1 rounded-md text-muted-foreground">
                  <Check className="w-3 h-3 text-green-500" />
                  {file}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
