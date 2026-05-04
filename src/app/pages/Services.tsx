import { type ReactNode } from "react";
import { Section } from "../components/Section";
import { UpwardReveal, StaggerContainer, StaggerItem } from "../components/UpwardReveal";
import { CTASection } from "../components/CTASection";

export function Services() {
  const services = [
    {
      id: "brand",
      title: "Brand Strategy & Positioning",
      desc: "We don't do fluffy branding. We find the white space in your market and position you as the definitive voice.",
      deliverables: ["Core messaging pillars", "Visual identity & guidelines", "Content operating system", "Audience persona mapping"]
    },
    {
      id: "content",
      title: "Content & Editorial",
      desc: "High-leverage writing that builds authority. We extract your insights and frame them with the sharpness of a high-end magazine.",
      deliverables: ["LinkedIn & Twitter ghostwriting", "Long-form essays/newsletters", "Video scriptwriting", "PR & media bylines"]
    },
    {
      id: "performance",
      title: "Performance & Audience",
      desc: "We don't rely on hope. We use targeted strategies to ensure the right people—investors, talent, clients—see your content.",
      deliverables: ["Paid amplification", "Network engagement", "Profile optimization", "Growth analytics"]
    },
    {
      id: "conversion",
      title: "Monetization & Conversion",
      desc: "Followers are vanity metrics. We build the backend systems that turn your newfound attention into actual revenue.",
      deliverables: ["Lead magnet creation", "Funnel design & build", "Email automation", "Offer strategy"]
    }
  ];

  const serviceLabels: Record<string, ReactNode> = {
    brand: (
      <>
        Brand Strategy
        <br />
        & Positioning
      </>
    ),
    content: (
      <>
        Content
        <br />
        & Editorial
      </>
    ),
    performance: (
      <>
        Performance
        <br />
        & Audience
      </>
    ),
    conversion: (
      <>
        Monetization
        <br />
        & Conversion
      </>
    ),
  };

  return (
    <div className="flex flex-col">
      <section className="relative px-6 md:px-12 lg:px-24 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <UpwardReveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-semibold tracking-[-0.03em] mb-6 text-[#F2EFD8] max-w-4xl">
              We build your entire attention ecosystem.
            </h1>
          </UpwardReveal>
        </div>
      </section>

      {services.map((service, i) => (
        <Section
          key={service.id}
          label={serviceLabels[service.id] ?? service.title}
          number={`0${i + 1}`}
        >
          <UpwardReveal className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-sans font-medium tracking-[-0.02em] mb-6 text-[#F2EFD8]">
              {service.desc}
            </h2>
            
            <div className="mt-12">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F2EFD8]/40 mb-6">What you get</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#F2EFD8]/80 text-[15px]">
                    <span className="w-1.5 h-1.5 bg-[#F2EFD8]/30 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </UpwardReveal>
        </Section>
      ))}

      <CTASection 
        headline="Not sure which creator service you need?" 
        subline="Book a Creator Call and we'll map a custom strategy for your audience and offers."
      />
    </div>
  );
}
