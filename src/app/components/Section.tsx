import { ReactNode } from "react";
import { UpwardReveal } from "./UpwardReveal";

interface SectionProps {
  id?: string;
  label?: string;
  number?: string;
  children: ReactNode;
  className?: string;
  noTopRule?: boolean;
}

export function Section({
  id,
  label,
  number,
  children,
  className = "",
  noTopRule = false,
}: SectionProps) {
  return (
    <section id={id} className={`relative px-6 md:px-12 lg:px-24 py-24 lg:py-32 ${className}`}>
      {!noTopRule && (
        <div className="absolute top-0 left-6 right-6 md:left-12 md:right-12 lg:left-24 lg:right-24 h-[1px] bg-[#F2EFD8]/20" />
      )}
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24">
        {/* Vertical Sidebar */}
        <div className="md:w-12 flex-shrink-0 flex md:flex-col items-start gap-4">
          {(number || label) && (
            <UpwardReveal className="flex items-center md:items-start md:flex-col gap-4 text-[#F2EFD8]/40 font-mono text-[10px] uppercase tracking-[0.2em] whitespace-nowrap" style={{ writingMode: 'horizontal-tb' }}>
              {number && <span>{number}</span>}
              {number && label && <span>—</span>}
              {label && <span>{label}</span>}
            </UpwardReveal>
          )}
        </div>
        
        <div className="flex-grow">
          {children}
        </div>
      </div>
    </section>
  );
}
