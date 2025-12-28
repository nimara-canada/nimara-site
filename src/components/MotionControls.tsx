import { useState } from 'react';
import { Settings, X, Eye, EyeOff, ChevronUp, ChevronDown } from 'lucide-react';
import { useMotionPreferences } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';

export function MotionControls() {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    reducedMotion, 
    stickyHeaderAutoHide, 
    setReducedMotion, 
    setStickyHeaderAutoHide 
  } = useMotionPreferences();

  // Only show in development or with ?dev query param
  const showControls = process.env.NODE_ENV === 'development' || 
    (typeof window !== 'undefined' && window.location.search.includes('dev'));

  if (!showControls) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-6 z-50">
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-200',
          isOpen 
            ? 'bg-foreground text-background' 
            : 'bg-background text-foreground border border-border hover:bg-muted'
        )}
        aria-label={isOpen ? 'Close motion controls' : 'Open motion controls'}
      >
        {isOpen ? <X className="w-4 h-4" /> : <Settings className="w-4 h-4" />}
      </button>

      {/* Panel */}
      {isOpen && (
        <div className="absolute bottom-12 right-0 w-64 bg-card border border-border rounded-xl shadow-xl p-4 space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
            <span className="text-sm font-semibold">Motion Settings</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Dev</span>
          </div>

          {/* Reduced Motion Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {reducedMotion ? (
                <EyeOff className="w-4 h-4 text-muted-foreground" />
              ) : (
                <Eye className="w-4 h-4 text-muted-foreground" />
              )}
              <span className="text-sm">Motion</span>
            </div>
            <button
              onClick={() => setReducedMotion(!reducedMotion)}
              className={cn(
                'px-3 py-1 text-xs font-medium rounded-full transition-colors',
                reducedMotion
                  ? 'bg-muted text-muted-foreground'
                  : 'bg-primary text-primary-foreground'
              )}
            >
              {reducedMotion ? 'Reduced' : 'Standard'}
            </button>
          </div>

          {/* Sticky Header Auto-Hide Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {stickyHeaderAutoHide ? (
                <ChevronUp className="w-4 h-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              )}
              <span className="text-sm">Header Auto-hide</span>
            </div>
            <button
              onClick={() => setStickyHeaderAutoHide(!stickyHeaderAutoHide)}
              className={cn(
                'px-3 py-1 text-xs font-medium rounded-full transition-colors',
                stickyHeaderAutoHide
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              )}
            >
              {stickyHeaderAutoHide ? 'On' : 'Off'}
            </button>
          </div>

          <p className="text-[10px] text-muted-foreground pt-2 border-t border-border">
            Add ?dev to URL to show this panel
          </p>
        </div>
      )}
    </div>
  );
}
