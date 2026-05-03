import { Link } from "react-router";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outline" | "ghost";
  href?: string;
}

export function Button({
  className,
  variant = "filled",
  href,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-sans font-medium text-[15px] transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    filled: "bg-[#1E1E18] text-[#F2EFD8] hover:bg-[#2A2A22]",
    outline: "border border-[#F2EFD8] text-[#F2EFD8] hover:bg-[#F2EFD8]/10",
    ghost: "text-[#F2EFD8] hover:bg-[#F2EFD8]/10",
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
