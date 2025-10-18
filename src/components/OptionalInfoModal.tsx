import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface OptionalInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: OptionalData) => Promise<void>;
  returnFocusRef?: React.RefObject<HTMLElement>;
}

export interface OptionalData {
  om_name: string;
  om_role: string;
  om_start: string;
  om_budget: string;
}

export const OptionalInfoModal = ({
  isOpen,
  onClose,
  onSave,
  returnFocusRef,
}: OptionalInfoModalProps) => {
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [formData, setFormData] = useState<OptionalData>({
    om_name: "",
    om_role: "",
    om_start: "",
    om_budget: "",
  });

  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);
  const lastFocusableRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Track analytics on open
  useEffect(() => {
    if (isOpen && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'quotes_optional_modal_shown');
    }
  }, [isOpen]);

  // Body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Focus management
  useEffect(() => {
    if (!isOpen) return;

    // Store the previously focused element
    previousActiveElement.current = document.activeElement as HTMLElement;

    // Focus the first button after a short delay
    const timer = setTimeout(() => {
      firstFocusableRef.current?.focus();
    }, 100);

    return () => {
      clearTimeout(timer);
      // Return focus to the original element or the provided ref
      if (returnFocusRef?.current) {
        returnFocusRef.current.focus();
      } else if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [isOpen, returnFocusRef]);

  // Keyboard handling
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // ESC to close
      if (e.key === "Escape") {
        handleClose();
        return;
      }

      // Tab focus trap
      if (e.key === "Tab") {
        const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusableElements || focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    // Track skip event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'quotes_optional_modal_skip');
    }
    onClose();
  };

  const handleProceed = () => {
    // Track proceed event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'quotes_optional_modal_proceed');
    }
    // Close modal and let parent handle navigation if needed
    onClose();
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveError("");

    try {
      await onSave(formData);
      
      // Track save event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'quotes_optional_modal_save', {
          role: formData.om_role,
          start: formData.om_start,
          budget: formData.om_budget,
        });
      }

      // Close after successful save
      setTimeout(() => {
        onClose();
      }, 500);
    } catch (error) {
      setSaveError("Couldn't save right now — you can skip or try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="optional-title"
      aria-describedby="optional-desc"
    >
      <div
        ref={dialogRef}
        className="w-full max-w-[640px] rounded-2xl bg-white text-[#202654] border border-[#E9ECF4] shadow-[0_8px_24px_rgba(32,38,84,0.12)] p-6 sm:p-8 relative focus:outline-none"
        style={{
          animation: "modalFadeIn 150ms ease-out",
        }}
      >
        {/* Close button */}
        <button
          ref={lastFocusableRef}
          aria-label="Close"
          className="absolute top-3 right-3 rounded-lg p-2 text-[#96A0B5] hover:text-[#202654] focus:outline-2 focus:outline-[#6945D8] focus:outline-offset-2"
          onClick={handleClose}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Title and description */}
        <h2 id="optional-title" className="text-xl sm:text-2xl font-bold text-[#202654] pr-8">
          One more thing (optional)
        </h2>
        <p id="optional-desc" className="mt-2 text-sm text-[#96A0B5]">
          Help us match you better. Takes ~30 seconds.
        </p>

        {/* Error alert */}
        {saveError && (
          <Alert variant="destructive" className="mt-4">
            <AlertDescription>{saveError}</AlertDescription>
          </Alert>
        )}

        {/* Form fields */}
        <div className="mt-6 space-y-5">
          <div className="space-y-2">
            <label htmlFor="om_name" className="block text-sm font-medium text-[#202654]">
              Your name
            </label>
            <input
              type="text"
              id="om_name"
              value={formData.om_name}
              onChange={(e) => setFormData({ ...formData, om_name: e.target.value })}
              className="w-full rounded-xl border border-[#E9ECF4] bg-white px-3 py-3 text-[#202654] focus:outline-none focus:outline-[#6945D8] focus:outline-2 focus:outline-offset-2"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="om_role" className="block text-sm font-medium text-[#202654]">
              Your role
            </label>
            <input
              type="text"
              id="om_role"
              value={formData.om_role}
              onChange={(e) => setFormData({ ...formData, om_role: e.target.value })}
              className="w-full rounded-xl border border-[#E9ECF4] bg-white px-3 py-3 text-[#202654] focus:outline-none focus:outline-[#6945D8] focus:outline-2 focus:outline-offset-2"
              placeholder="e.g., Executive Director"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#202654]">
              When do you want to start?
            </label>
            <RadioGroup
              value={formData.om_start}
              onValueChange={(value) => setFormData({ ...formData, om_start: value })}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="asap" id="start_asap" className="border-[#E9ECF4] text-[#6945D8]" />
                <label htmlFor="start_asap" className="text-sm text-[#202654] cursor-pointer">
                  ASAP (within 2 weeks)
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1month" id="start_1month" className="border-[#E9ECF4] text-[#6945D8]" />
                <label htmlFor="start_1month" className="text-sm text-[#202654] cursor-pointer">
                  Within a month
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="flexible" id="start_flexible" className="border-[#E9ECF4] text-[#6945D8]" />
                <label htmlFor="start_flexible" className="text-sm text-[#202654] cursor-pointer">
                  Flexible / just exploring
                </label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#202654]">
              Budget range (CAD)
            </label>
            <RadioGroup
              value={formData.om_budget}
              onValueChange={(value) => setFormData({ ...formData, om_budget: value })}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="under5k" id="budget_under5k" className="border-[#E9ECF4] text-[#6945D8]" />
                <label htmlFor="budget_under5k" className="text-sm text-[#202654] cursor-pointer">
                  Under $5,000
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="5k-15k" id="budget_5k15k" className="border-[#E9ECF4] text-[#6945D8]" />
                <label htmlFor="budget_5k15k" className="text-sm text-[#202654] cursor-pointer">
                  $5,000 - $15,000
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="15k-30k" id="budget_15k30k" className="border-[#E9ECF4] text-[#6945D8]" />
                <label htmlFor="budget_15k30k" className="text-sm text-[#202654] cursor-pointer">
                  $15,000 - $30,000
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="30k+" id="budget_30kplus" className="border-[#E9ECF4] text-[#6945D8]" />
                <label htmlFor="budget_30kplus" className="text-sm text-[#202654] cursor-pointer">
                  $30,000+
                </label>
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            ref={firstFocusableRef}
            className="inline-flex items-center justify-center rounded-xl bg-[#6945D8] px-5 py-3 font-bold text-white hover:brightness-95 focus:outline-2 focus:outline-[#6945D8] focus:outline-offset-2 disabled:opacity-50"
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save details"}
          </button>
          <button
            className="inline-flex items-center justify-center rounded-xl border border-[#E9ECF4] bg-white px-5 py-3 font-semibold text-[#202654] hover:bg-[#F8F9FC] focus:outline-2 focus:outline-[#6945D8] focus:outline-offset-2"
            onClick={handleClose}
          >
            Skip
          </button>
        </div>
      </div>

      <style>{`
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          @keyframes modalFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        }
      `}</style>
    </div>
  );

  return createPortal(modalContent, document.body);
};
