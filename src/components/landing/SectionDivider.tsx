interface SectionDividerProps {
  variant?: "light" | "dark";
}

export default function SectionDivider({ variant = "light" }: SectionDividerProps) {
  return (
    <div 
      className={`w-full h-px ${
        variant === "dark" ? "bg-white/[0.06]" : "bg-nim-mist"
      }`}
      role="separator"
      aria-hidden="true"
    />
  );
}
