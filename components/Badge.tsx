interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export default function Badge({ children, variant = "default" }: BadgeProps) {
  const baseStyles = "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium shadow-sm";
  const variantStyles = variant === "accent" 
    ? "bg-slate-200 text-slate-900 border border-slate-300/50" 
    : "bg-slate-100 text-slate-700 border border-slate-200/50";

  return (
    <span className={`${baseStyles} ${variantStyles}`}>
      {children}
    </span>
  );
}

