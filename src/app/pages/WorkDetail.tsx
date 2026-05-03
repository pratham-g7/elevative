import { useParams, Link } from "react-router";
import { Section } from "../components/Section";
import { UpwardReveal, StaggerContainer, StaggerItem } from "../components/UpwardReveal";
import { CTASection } from "../components/CTASection";

export function WorkDetail() {
  const { slug } = useParams();

  return (
    <div className="flex flex-col">
      <section className="relative px-6 md:px-12 lg:px-24 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <Link to="/work" className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.1em] text-[#F2EFD8]/40 hover:text-[#F2EFD8] transition-colors mb-12">
            ← Back to Work
          </Link>
          <UpwardReveal>
            <div className="flex items-center gap-4 mb-6">
              <h1 className="text-4xl md:text-6xl font-sans font-semibold tracking-[-0.03em] text-[#F2EFD8] capitalize">
                {slug?.replace("-", " ")}
              </h1>
              <span className="px-3 py-1 bg-[#F2EFD8]/10 text-[#F2EFD8] text-[10px] font-mono uppercase tracking-[0.1em] rounded-full">
                B2B SaaS
              </span>
            </div>
            <p className="text-[24px] font-sans text-[#F2EFD8]/90 max-w-3xl">
              From 2k to 50k engaged founders in 6 months, generating $4M in inbound pipeline.
            </p>
          </UpwardReveal>
        </div>
      </section>

      <Section label="The Problem" number="01">
        <UpwardReveal>
          <div className="prose prose-invert prose-lg max-w-3xl">
            <p className="text-[#F2EFD8]/65">
              They were building incredible software, but no one knew who they were. The founder had profound insights on the industry but zero distribution. They were relying entirely on outbound sales, which was expensive and slow.
            </p>
          </div>
        </UpwardReveal>
      </Section>

      <Section label="The Approach" number="02">
        <UpwardReveal>
          <div className="prose prose-invert prose-lg max-w-3xl">
            <p className="text-[#F2EFD8]/65 mb-6">
              We started by extracting the founder's core beliefs—the controversial opinions that separated them from legacy competitors. We mapped out a 90-day content sprint across LinkedIn and Twitter.
            </p>
            <p className="text-[#F2EFD8]/65">
              Instead of generic business advice, we published highly technical tear-downs of how the industry was broken. We turned the founder into the "enemy of the status quo."
            </p>
          </div>
        </UpwardReveal>
      </Section>

      <Section label="Results" number="03">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <StaggerItem className="border border-[#F2EFD8]/10 bg-[#F2EFD8]/[0.02] p-8 rounded-2xl">
            <div className="font-sans font-semibold text-4xl mb-2 text-[#F2EFD8]">25x</div>
            <div className="font-mono text-[10px] text-[#F2EFD8]/50 uppercase tracking-[0.1em]">Audience Growth</div>
          </StaggerItem>
          <StaggerItem className="border border-[#F2EFD8]/10 bg-[#F2EFD8]/[0.02] p-8 rounded-2xl">
            <div className="font-sans font-semibold text-4xl mb-2 text-[#F2EFD8]">$4M+</div>
            <div className="font-mono text-[10px] text-[#F2EFD8]/50 uppercase tracking-[0.1em]">Pipeline Generated</div>
          </StaggerItem>
          <StaggerItem className="border border-[#F2EFD8]/10 bg-[#F2EFD8]/[0.02] p-8 rounded-2xl">
            <div className="font-sans font-semibold text-4xl mb-2 text-[#F2EFD8]">12</div>
            <div className="font-mono text-[10px] text-[#F2EFD8]/50 uppercase tracking-[0.1em]">Media Features</div>
          </StaggerItem>
        </StaggerContainer>

        <UpwardReveal className="max-w-4xl mx-auto text-center mt-12">
          <p className="text-[24px] md:text-[32px] leading-[1.4] text-[#F2EFD8] font-medium tracking-tight mb-8">
            "Elevative didn't just grow my following. They completely re-positioned how the market views our entire company. The ROI has been exponential."
          </p>
          <div className="font-sans font-semibold text-[16px] text-[#F2EFD8]">Alex Mercer</div>
          <div className="text-[12px] text-[#F2EFD8]/50 font-mono mt-1">Founder, Nexus AI</div>
        </UpwardReveal>
      </Section>

      <CTASection 
        headline="Want results like this?" 
        buttonText="Book a Call"
      />
    </div>
  );
}
