import { motion } from "framer-motion";
import { Receipt, CheckCircle, CreditCard, FileSpreadsheet, FileText } from "lucide-react";

const proofSteps = [
  { icon: Receipt, label: "Receipt" },
  { icon: CheckCircle, label: "Approval" },
  { icon: CreditCard, label: "Payment" },
  { icon: FileSpreadsheet, label: "Budget" },
  { icon: FileText, label: "Report" },
];

interface ProofTrailStripProps {
  variant?: "light" | "dark" | "muted";
  highlightStep?: number;
  size?: "sm" | "md";
  className?: string;
}

export default function ProofTrailStrip({ 
  variant = "dark", 
  highlightStep,
  size = "sm",
  className = "" 
}: ProofTrailStripProps) {
  const baseTextClass = variant === "light" 
    ? "text-nim-navy/50" 
    : variant === "muted" 
    ? "text-white/30" 
    : "text-white/40";
  
  const highlightClass = variant === "light"
    ? "text-nim-navy"
    : "text-accent";

  const arrowClass = variant === "light"
    ? "text-nim-navy/20"
    : "text-white/20";

  const iconSize = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";
  const textSize = size === "sm" ? "text-[10px]" : "text-xs";
  const gap = size === "sm" ? "gap-2" : "gap-3";

  return (
    <div 
      className={`flex items-center justify-center ${gap} ${textSize} uppercase tracking-[0.1em] ${className}`}
      aria-label="Proof trail: Receipt to Approval to Payment to Budget to Report"
    >
      {proofSteps.map((step, index) => (
        <div key={step.label} className="flex items-center gap-2">
          <motion.div 
            className={`flex items-center gap-1.5 ${
              highlightStep === index ? highlightClass : baseTextClass
            }`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
          >
            <step.icon className={iconSize} aria-hidden="true" />
            <span className="hidden sm:inline">{step.label}</span>
          </motion.div>
          {index < proofSteps.length - 1 && (
            <span className={arrowClass} aria-hidden="true">→</span>
          )}
        </div>
      ))}
    </div>
  );
}
