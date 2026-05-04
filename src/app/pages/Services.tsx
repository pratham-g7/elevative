import { useEffect, useMemo, useRef, useState } from "react";
import { Section } from "../components/Section";
import { UpwardReveal } from "../components/UpwardReveal";
import { CTASection } from "../components/CTASection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../components/ui/carousel";

export function Services() {
  const services = useMemo(() => ([
    {
      id: "brand",
      title: "Brand Strategy & Positioning",
      short: "Clarify your voice so the right people notice and convert.",
      headline: "Positioning that makes you the obvious choice.",
      subline: "We sharpen your point of view, proof, and category so buyers know exactly why you win.",
      focus: [
        "Positioning scorecard",
        "Message-to-metric map",
        "Proof and authority assets",
        "ICP and buying triggers",
      ],
      outcomes: ["Stronger inbound quality", "Clearer pricing narrative", "Higher close rate"],
    },
    {
      id: "content",
      title: "Content & Editorial",
      short: "Publish the right work, consistently, to drive qualified interest.",
      headline: "Editorial that builds trust and drives demand.",
      subline: "We run a conversion-first content system that turns attention into leads, not vanity.",
      focus: [
        "Conversion-led content briefs",
        "Founder ghostwriting",
        "Lead magnet and capture flows",
        "Editorial cadence and KPI targets",
      ],
      outcomes: ["Consistent inbound", "Faster sales cycles", "Higher profile-to-call rate"],
    },
    {
      id: "performance",
      title: "Performance & Audience",
      short: "Scale the right audience and measure what converts.",
      headline: "Audience growth tied to pipeline, not vanity.",
      subline: "We scale distribution and track the signals that map to revenue, week by week.",
      focus: [
        "Paid growth experiments",
        "Audience segmentation and lookalikes",
        "Landing page conversion instrumentation",
        "Weekly growth reporting",
      ],
      outcomes: ["Measured reach lift", "Lower CAC", "Reliable testing loop"],
    },
    {
      id: "conversion",
      title: "Monetization & Conversion",
      short: "Convert attention into predictable revenue and booked calls.",
      headline: "Offers and funnels that close.",
      subline: "We build the path from attention to booked calls, revenue, and retained clients.",
      focus: [
        "Funnel architecture and build",
        "Email and SMS nurture sequences",
        "Offer testing roadmap",
        "Pipeline and revenue dashboards",
      ],
      outcomes: ["Higher booking rate", "Clear sales handoff", "Revenue visibility"],
    }
  ]), []);

  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const carouselSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollToHash = (hash: string) => {
      const id = hash.replace("#", "");
      if (!id) return;
      
      // Find the carousel item element directly by ID
      const element = document.querySelector(`[id="${id}"]`);
      if (element) {
        carouselSectionRef.current?.scrollIntoView({ behavior: "auto", block: "center" });
        setTimeout(() => {
          element.scrollIntoView({ behavior: "auto", block: "center" });
        }, 50);
      }
    };

    scrollToHash(window.location.hash);
    const onHashChange = () => scrollToHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);

    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

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

      {/* Services overview: concise cards that link to section anchors */}
      <section className="px-6 md:px-12 lg:px-24 pb-12">
        <div className="max-w-7xl mx-auto">
          <UpwardReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl">
              {services.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="block border border-[#F2EFD8]/10 bg-[#F2EFD8]/[0.02] p-5 hover:bg-[#F2EFD8]/[0.04] transition-colors">
                  <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#F2EFD8]/50 mb-2">{s.title}</div>
                  <div className="text-[#F2EFD8]/80 text-[15px] leading-[1.4]">{s.short}</div>
                </a>
              ))}
            </div>
          </UpwardReveal>
        </div>
      </section>

      <Section label="Service Modules" number="01">
        <UpwardReveal>
          <div ref={carouselSectionRef}>
            <Carousel setApi={setCarouselApi} opts={{ loop: true }} className="mt-4">
              <CarouselContent className="-ml-6">
              {services.map((service) => (
                <CarouselItem key={service.id} className="pl-6">
                  <div id={service.id} className="rounded-3xl border border-[#F2EFD8]/10 bg-[#F2EFD8]/[0.03] p-6 md:p-10">
                    <div className="flex flex-col gap-6">
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F2EFD8]/45 mb-3">
                          {service.title}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-sans font-semibold tracking-[-0.02em] text-[#F2EFD8] mb-3">
                          {service.headline}
                        </h2>
                        <p className="text-[#F2EFD8]/75 text-[16px] leading-[1.7] max-w-2xl">
                          {service.subline}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6">
                        <div>
                          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F2EFD8]/45 mb-4">Focus</div>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                            {service.focus.map((item) => (
                              <li key={item} className="flex items-center gap-3 text-[#F2EFD8]/80 text-[15px]">
                                <span className="w-1.5 h-1.5 bg-[#F2EFD8]/30 rounded-full"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F2EFD8]/45 mb-4">Outcomes</div>
                          <div className="flex flex-col gap-3">
                            {service.outcomes.map((item) => (
                              <div key={item} className="rounded-xl border border-[#F2EFD8]/10 bg-[#0D0C08]/40 px-4 py-3 text-[#F2EFD8]/80 text-[14px]">
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
              </CarouselContent>
              <CarouselPrevious className="-left-10" />
              <CarouselNext className="-right-10" />
            </Carousel>
          </div>
        </UpwardReveal>
      </Section>

      <CTASection 
        headline="Ready for growth you can measure?" 
        subline="Book a Creator Call and we will map a KPI-first plan with a clear path to revenue."
      />
    </div>
  );
}
