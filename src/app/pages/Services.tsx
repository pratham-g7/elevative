import { type ReactNode } from "react";
import { Section } from "../components/Section";
import { UpwardReveal, StaggerContainer, StaggerItem } from "../components/UpwardReveal";
import { CTASection } from "../components/CTASection";

export function Services() {
  const services = [
    {
      id: "brand",
      title: "Brand Strategy & Positioning",
      desc: (
        <>
          Build a personal brand that pulls inbound demand.
        </>
      ),
      deliverables: ["Positioning scorecard", "Message-to-metric map", "Proof and authority assets", "ICP and buying triggers"]
    },
    {
      id: "content",
      title: "Content & Editorial",
      desc: (
        <>
          Authority content engineered for conversion, tied to a KPI trail.
        </>
      ),
      deliverables: ["Conversion-led content briefs", "Founder ghostwriting", "Lead magnet and capture flows", "Editorial cadence and KPI targets"]
    },
    {
      id: "performance",
      title: "Performance & Audience",
      desc: (
        <>
          Audience growth, tracked to X, Y, and Z with weekly signal checks.
        </>
      ),
      deliverables: ["Paid growth experiments", "Audience segmentation and lookalikes", "Landing page conversion instrumentation", "Weekly growth reporting"]
    },
    {
      id: "conversion",
      title: "Monetization & Conversion",
      desc: (
        <>
          Revenue systems that turn attention into booked calls and sales.
        </>
      ),
      deliverables: ["Funnel architecture and build", "Email and SMS nurture sequences", "Offer testing roadmap", "Pipeline and revenue dashboards"]
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
              Turn attention into <span className="emphasis">revenue</span>
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
        headline="Ready for growth you can measure?" 
        subline="Book a Creator Call and we will map a KPI-first plan with a clear path to revenue."
      />
    </div>
  );
}
