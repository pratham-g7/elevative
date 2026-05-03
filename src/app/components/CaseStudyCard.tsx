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
      <Link to={`/work/${slug}`} className="group block relative overflow-hidden rounded-2xl">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2EFD8]/5 rounded-2xl mb-6">
          <img 
            src={imageUrl} 
            alt={client} 
            className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105 group-hover:opacity-80 opacity-90" 
          />
          <div className="absolute inset-0 bg-[#0D0C08]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-4 right-4 w-10 h-10 bg-[#F2EFD8] rounded-full flex items-center justify-center text-[#0D0C08] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]">
            <ArrowUpRight size={20} strokeWidth={2} />
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <h3 className="font-sans font-semibold text-xl tracking-tight text-[#F2EFD8]">{client}</h3>
            <span className="w-1 h-1 rounded-full bg-[#F2EFD8]/30"></span>
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#F2EFD8]/50">{industry}</span>
          </div>
          <p className="text-[15px] text-[#F2EFD8]/70 leading-relaxed font-medium">
            {result}
          </p>
        </div>
      </Link>
    </UpwardReveal>
  );
}
