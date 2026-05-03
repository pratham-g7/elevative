import { Section } from "./Section";
import { Button } from "./Button";
import { UpwardReveal } from "./UpwardReveal";

interface CTASectionProps {
  headline?: string;
  subline?: string;
  buttonText?: string;
}

export function CTASection({
  headline = "Don't just build an audience. Build a business.",
  subline = "Book a 30-minute creator call to map your positioning, content, and revenue path.",
  buttonText = "Book a Creator Call",
}: CTASectionProps) {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto py-12">
        <UpwardReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-semibold tracking-[-0.03em] mb-6">
            {headline}
          </h2>
        </UpwardReveal>
        
        <UpwardReveal delay={0.1}>
          <p className="text-[15px] leading-[1.7] text-[#F2EFD8]/65 mb-10 max-w-xl mx-auto">
            {subline}
          </p>
        </UpwardReveal>
        
        <UpwardReveal delay={0.2}>
          <Button href="/book" variant="filled" className="px-8 py-4 text-base">
            {buttonText}
          </Button>
        </UpwardReveal>
        <UpwardReveal delay={0.25}>
          <p className="text-[11px] md:text-[12px] text-[#F2EFD8]/45 mt-4">
            Best for creators with an existing audience or a clear niche.
          </p>
        </UpwardReveal>
      </div>
    </Section>
  );
}
