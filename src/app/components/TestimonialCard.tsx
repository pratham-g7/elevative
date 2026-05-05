import { UpwardReveal } from "./UpwardReveal";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  imageUrl?: string;
  result?: string;
  bgColor?: string;
}

export function TestimonialCard({
  quote,
  name,
  role,
  imageUrl,
  result,
  bgColor = "bg-[#F2EFD8]/10",
}: TestimonialCardProps) {
  return (
    <UpwardReveal className="flex flex-col bg-[#F2EFD8]/[0.03] hover:bg-[#F2EFD8]/[0.08] border border-[#F2EFD8]/10 rounded-2xl p-8 transition-colors duration-500">
      {result && (
        <div className="mb-6 self-start">
          <span className="inline-block px-3 py-1 bg-[#F2EFD8]/10 text-[#F2EFD8] text-[10px] font-mono uppercase tracking-[0.1em] rounded-full">
            {result}
          </span>
        </div>
      )}
      
      <p className="text-[17px] leading-[1.6] text-[#F2EFD8] mb-8 font-medium">
        "{quote}"
      </p>
      
      <div className="mt-auto flex items-center gap-4">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-12 h-12 rounded-full object-cover grayscale opacity-80" />
        ) : (
          <div className={`w-12 h-12 rounded-full ${bgColor} flex items-center justify-center`}>
            <span className="font-sans font-medium text-[#F2EFD8]/50">{name.charAt(name.length - 1)}</span>
          </div>
        )}
        <div>
          <div className="font-sans font-semibold text-[14px] text-[#F2EFD8]">{name}</div>
          <div className="text-[12px] text-[#F2EFD8]/50 font-mono mt-0.5">{role}</div>
        </div>
      </div>
    </UpwardReveal>
  );
}
