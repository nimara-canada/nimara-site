import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";

interface OptionalInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: OptionalData) => Promise<void>;
  returnFocusRef?: React.RefObject<HTMLElement>;
  requestId?: string;
}

export interface OptionalData {
  om_note: string;
  om_start: string;
  om_budget: string;
}

export const OptionalInfoModal = ({
  isOpen,
  onClose,
  onSave,
  returnFocusRef,
  requestId,
}: OptionalInfoModalProps) => {
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [formData, setFormData] = useState<OptionalData>({
    om_note: "",
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
      (window as any).gtag('event', 'optional_modal_shown');
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
      (window as any).gtag('event', 'optional_modal_skip');
    }
    onClose();
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveError("");

    const attemptSave = async (attemptNumber: number): Promise<boolean> => {
      try {
        await onSave(formData);
        return true;
      } catch (error) {
        console.error(`Save attempt ${attemptNumber} failed:`, error);
        
        if (attemptNumber < 3) {
          const backoffDelay = attemptNumber === 1 ? 400 : 1000;
          await new Promise(resolve => setTimeout(resolve, backoffDelay));
          return attemptSave(attemptNumber + 1);
        }
        
        return false;
      }
    };

    try {
      const success = await attemptSave(1);
      
      if (success) {
        // Track save event
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'optional_modal_proceed', {
            start: formData.om_start,
            budget: formData.om_budget,
            request_id: requestId,
          });
        }

        // Show success toast
        toast.success("Extra details received — thanks.");
        
        // Close modal
        onClose();
      } else {
        setSaveError("We couldn't save right now. You can try again or skip—your quote request is already in.");
      }
    } catch (error) {
      setSaveError("We couldn't save right now. You can try again or skip—your quote request is already in.");
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
          <Alert variant="destructive" className="mt-4 border-red-200 bg-red-50">
            <AlertDescription className="text-red-800 text-sm">
              <strong className="font-semibold">Couldn't save right now</strong>
              <br />
              You can try again, or skip — your request is already in.
            </AlertDescription>
          </Alert>
        )}

        {/* Form fields */}
        <div className="mt-6 space-y-5">
          <div className="space-y-2">
            <label htmlFor="om_note" className="block text-sm font-medium text-[#202654]">
              Anything else we should know? <span className="text-[#96A0B5] font-normal">(optional)</span>
            </label>
            <input
              type="text"
              id="om_note"
              value={formData.om_note}
              onChange={(e) => setFormData({ ...formData, om_note: e.target.value })}
              className="w-full rounded-xl border border-[#E9ECF4] bg-white px-3 py-3 text-[#202654] focus:outline-none focus:outline-[#6945D8] focus:outline-2 focus:outline-offset-2"
              placeholder="e.g., tight deadline, specific expertise needed"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="om_start" className="block text-sm font-medium text-[#202654]">
              When do you want to start?
            </label>
            <select
              id="om_start"
              value={formData.om_start}
              onChange={(e) => setFormData({ ...formData, om_start: e.target.value })}
              className="w-full rounded-xl border border-[#E9ECF4] bg-white px-3 py-3 text-[#202654] focus:outline-none focus:outline-[#6945D8] focus:outline-2 focus:outline-offset-2"
            >
              <option value="">Select timeline</option>
              <option value="asap">ASAP (within 2 weeks)</option>
              <option value="1month">Within a month</option>
              <option value="flexible">Flexible / just exploring</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="om_budget" className="block text-sm font-medium text-[#202654]">
              Budget range (CAD)
            </label>
            <select
              id="om_budget"
              value={formData.om_budget}
              onChange={(e) => setFormData({ ...formData, om_budget: e.target.value })}
              className="w-full rounded-xl border border-[#E9ECF4] bg-white px-3 py-3 text-[#202654] focus:outline-none focus:outline-[#6945D8] focus:outline-2 focus:outline-offset-2"
            >
              <option value="">Select budget</option>
              <option value="under5k">Under $5,000</option>
              <option value="5k-15k">$5,000 - $15,000</option>
              <option value="15k-30k">$15,000 - $30,000</option>
              <option value="30k+">$30,000+</option>
            </select>
          </div>
        </div>

        {/* Reassurance note */}
        <p className="mt-4 text-xs text-[#96A0B5]">
          We respect your time. Skipping won't affect your request.
        </p>

        {/* Action buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            ref={firstFocusableRef}
            className="inline-flex items-center justify-center rounded-xl bg-[#6945D8] px-5 py-3 font-bold text-white hover:brightness-95 focus:outline-2 focus:outline-[#6945D8] focus:outline-offset-2 disabled:opacity-50"
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? "Submitting..." : "Submit & continue"}
          </button>
          <button
            className="inline-flex items-center justify-center rounded-xl border border-[#E9ECF4] bg-white px-5 py-3 font-semibold text-[#202654] hover:bg-[#F8F9FC] focus:outline-2 focus:outline-[#6945D8] focus:outline-offset-2"
            onClick={handleClose}
          >
            Skip for now
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
