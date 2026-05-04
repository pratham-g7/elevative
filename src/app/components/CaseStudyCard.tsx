import { Link } from "react-router";
import { UpwardReveal } from "./UpwardReveal";
import { ArrowUpRight } from "lucide-react";

interface CaseStudyCardProps {
  slug: string;
  client: string;
  industry: string;
  result: string;
  imageUrl: string;
}

export function CaseStudyCard({
  slug,
  client,
  industry,
  result,
  imageUrl,
}: CaseStudyCardProps) {
  return (
    <UpwardReveal>
      <Link
        to={`/work/${slug}`}
        className="group block rounded-2xl border border-[#F2EFD8]/10 bg-[#F2EFD8]/[0.02] hover:bg-[#F2EFD8]/[0.05] transition-colors"
      >
        <div className="flex flex-col md:flex-row gap-6 md:items-center p-6 md:p-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="font-sans font-semibold text-2xl tracking-tight text-[#F2EFD8]">
                {client}
              </h3>
              <span className="w-1 h-1 rounded-full bg-[#F2EFD8]/30"></span>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#F2EFD8]/50">
                {industry}
              </span>
            </div>
            <p className="text-[15px] text-[#F2EFD8]/75 leading-relaxed font-medium mb-6">
              {result}
            </p>
            <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#F2EFD8]/45 group-hover:text-[#F2EFD8] transition-colors">
              View case study
              <ArrowUpRight size={14} strokeWidth={2} />
            </div>
          </div>
          <div className="relative w-full md:w-[40%] aspect-[4/3] overflow-hidden rounded-2xl bg-[#F2EFD8]/5">
            <img
              src={imageUrl}
              alt={client}
              className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105 opacity-90"
            />
            <div className="absolute inset-0 bg-[#0D0C08]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </Link>
    </UpwardReveal>
  );
}
