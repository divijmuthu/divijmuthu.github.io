interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "subtitle";
}

export default function Badge({ children, variant = "default" }: BadgeProps) {
  if (variant === "subtitle") {
    return (
      <span className="inline-flex items-center px-3 py-1 rounded bg-slate-200 text-slate-700 text-sm font-medium shadow-sm">
        {children}
      </span>
    );
  }
  
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

