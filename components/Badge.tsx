interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export default function Badge({ children, variant = "default" }: BadgeProps) {
  const baseStyles = "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium";
  const variantStyles = variant === "accent" 
    ? "bg-slate-200 text-slate-900" 
    : "bg-slate-100 text-slate-700";

  return (
    <span className={`${baseStyles} ${variantStyles}`}>
      {children}
    </span>
  );
}

