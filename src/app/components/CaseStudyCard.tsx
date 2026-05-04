import { Link } from "react-router";
import { UpwardReveal } from "./UpwardReveal";
import { ArrowUpRight } from "lucide-react";

interface CaseStudyCardProps {
  slug: string;
  client: string;
  industry: string;
  result: string;
  imageUrl?: string;
  logoUrl?: string;
  badgeClassName?: string;
  badgeSizeClassName?: string;
  badgePaddingClassName?: string;
  badgeRadiusClassName?: string;
  badgeImageClassName?: string;
}

export function CaseStudyCard({
  slug,
  client,
  industry,
  result,
  imageUrl,
  logoUrl,
  badgeClassName = "bg-[#6b0a0a]",
  badgeSizeClassName = "h-12 w-12",
  badgePaddingClassName = "p-1",
  badgeRadiusClassName = "rounded-xl",
  badgeImageClassName = "h-full w-full object-contain",
}: CaseStudyCardProps) {
  return (
    <UpwardReveal>
      <Link
        to={`/work/${slug}`}
        className="group block h-full min-h-[260px] rounded-2xl border border-[#F2EFD8]/10 bg-[#F2EFD8]/[0.02] hover:bg-[#F2EFD8]/[0.05] transition-colors"
      >
        <div className="flex h-full flex-col md:flex-row gap-6 md:items-stretch p-6 md:p-8">
          <div className="flex-1 flex flex-col md:self-stretch h-full">
            <div className="flex items-center gap-3 mb-4">
              {logoUrl ? (
                <div className={`flex items-center justify-center overflow-hidden border border-[#F2EFD8]/15 ring-1 ring-[#F2EFD8]/10 ${badgeRadiusClassName} ${badgePaddingClassName} ${badgeClassName} ${badgeSizeClassName}`}>
                  <img
                    src={logoUrl}
                    alt={`${client} logo`}
                    className={badgeImageClassName}
                  />
                </div>
              ) : (
                <div className={`flex items-center justify-center overflow-hidden rounded-lg border border-[#F2EFD8]/20 bg-[#0D0C08]/40 ${badgeSizeClassName}`}>
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#F2EFD8]/50">
                    Icon
                  </span>
                </div>
              )}
              <h3 className="font-sans font-semibold text-2xl tracking-tight text-[#F2EFD8]">
                {client}
              </h3>
              <span className="w-1 h-1 rounded-full bg-[#F2EFD8]/30"></span>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#F2EFD8]/50">
                {industry}
              </span>
            </div>
            <p className="text-[15px] text-[#F2EFD8]/75 leading-relaxed font-medium mb-6 line-clamp-2 min-h-[48px]">
              {result}
            </p>
            <div className="mt-auto inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#F2EFD8]/45 group-hover:text-[#F2EFD8] transition-colors">
              View case study
              <ArrowUpRight size={14} strokeWidth={2} />
            </div>
          </div>
          <div className="relative w-full md:w-[40%] aspect-[4/3] overflow-hidden rounded-2xl bg-[#F2EFD8]/5 md:self-stretch">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={client}
                className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105 opacity-90"
              />
            ) : (
              <div className="h-full w-full bg-[linear-gradient(135deg,rgba(242,239,216,0.08)_0%,rgba(13,12,8,0.1)_35%,rgba(242,239,216,0.04)_70%,rgba(13,12,8,0.12)_100%)]" />
            )}
            <div className="absolute inset-0 bg-[#0D0C08]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </Link>
    </UpwardReveal>
  );
}
