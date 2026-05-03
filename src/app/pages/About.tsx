import { Section } from "../components/Section";
import { UpwardReveal, StaggerContainer, StaggerItem } from "../components/UpwardReveal";
import { CTASection } from "../components/CTASection";

export function About() {
  const team = [
    {
      name: "Dhir Kumar",
      role: "Founder & Head of Content",
      image: "",
      bio: ""
    },
    {
      name: "Sourish",
      role: "Co-founder & Head of Strategy",
      image: "",
      bio: ""
    }
  ];

  return (
    <div className="flex flex-col">
      <section className="relative px-6 md:px-12 lg:px-24 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <UpwardReveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-semibold tracking-[-0.03em] mb-6 text-[#F2EFD8] max-w-4xl">
              We believe attention is the new equity.
            </h1>
          </UpwardReveal>
        </div>
      </section>

      <Section label="The Story" number="01">
        <UpwardReveal>
          <div className="prose prose-invert prose-lg max-w-3xl">
            <p className="text-[#F2EFD8]/65 mb-6">
              Elevative was born from a frustration with traditional PR. We saw brilliant founders and executives doing incredible things, but their public presence was either non-existent or handled by agencies that didn't understand their business.
            </p>
            <p className="text-[#F2EFD8]/65">
              We decided to build an agency that treats a personal brand like a product. We combine elite editorial standards with ruthless performance marketing.
            </p>
          </div>
        </UpwardReveal>
      </Section>

      <Section label="The Team" number="02">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {team.map((member, i) => (
            <StaggerItem key={i} className="group">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F2EFD8]/5 rounded-2xl mb-6 flex items-center justify-center">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 group-hover:scale-105" 
                  />
                ) : (
                  <div className="w-28 h-28 rounded-full border border-[#F2EFD8]/25 bg-[#0D0C08] flex items-center justify-center">
                    <span className="font-sans text-2xl text-[#F2EFD8]/50">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="font-sans font-semibold text-2xl tracking-tight text-[#F2EFD8] mb-1">{member.name}</h3>
              <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#F2EFD8]/50 mb-3">{member.role}</div>
              {member.bio && (
                <p className="text-[#F2EFD8]/65 text-[15px]">{member.bio}</p>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section label="Way of Working" number="03">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { title: "No Vanilla Advice", desc: "If it can be Googled, we don't post it." },
            { title: "Data Wins", desc: "We track everything. Impressions are cute, but pipeline is what matters." },
            { title: "Radical Candor", desc: "We will tell you if your idea is boring." }
          ].map((val, i) => (
            <StaggerItem key={i}>
              <h3 className="text-xl font-sans font-medium tracking-tight mb-2 text-[#F2EFD8]">{val.title}</h3>
              <p className="text-[#F2EFD8]/65 text-[15px] leading-[1.7] max-w-md">{val.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <CTASection />
    </div>
  );
}
