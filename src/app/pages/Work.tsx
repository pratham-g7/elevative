import { Section } from "../components/Section";
import { UpwardReveal, StaggerContainer, StaggerItem } from "../components/UpwardReveal";
import { CTASection } from "../components/CTASection";
import { CaseStudyCard } from "../components/CaseStudyCard";

export function Work() {
  const caseStudies = [
    {
      slug: "tech-founder",
      client: "Aarav Singh",
      industry: "Fitness Coach",
      result: "Grew from 12k to 180k followers and now earns ₹6L/month.",
      imageUrl:
        "https://images.unsplash.com/photo-1599388164599-f05e48fe9004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyZSUyMHRleHR1cmV8ZW58MXx8fHwxNzc3ODEzNTUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      slug: "healthcare-exec",
      client: "Meera Iyer",
      industry: "Finance Creator",
      result: "Scaled to 90k followers and ₹4.5L/month in advisory retainers.",
      imageUrl:
        "https://images.unsplash.com/photo-1633286382418-4181cb81a6d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtaW5pbWFsaXN0JTIwZGVzayUyMGFyY2hpdGVjdHxlbnwxfHx8fDE3Nzc4MTM1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      slug: "fintech-creator",
      client: "Rohan Mehta",
      industry: "Tech Educator",
      result: "Launched a paid cohort at ₹8L/month and added 120k followers.",
      imageUrl:
        "https://images.unsplash.com/photo-1684607776189-24a70a10a804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxwb3J0cmFpdCUyMGZvdW5kZXIlMjBibGFjayUyMHdoaXRlfGVufDF8fHx8MTc3NzgxMzU1MXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      slug: "design-agency",
      client: "Nisha Patel",
      industry: "Lifestyle Creator",
      result: "Repositioned into premium deals: ₹5L/month and +70k followers.",
      imageUrl:
        "https://images.unsplash.com/photo-1718184310601-eb098434ea99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxwb3J0cmFpdCUyMGV4ZWN1dGl2ZSUyMGJsYWNrJTIwd2hpdGV8ZW58MXx8fHwxNzc3ODEzNTUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative px-6 md:px-12 lg:px-24 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <UpwardReveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-semibold tracking-[-0.03em] mb-6 text-[#F2EFD8]">
              Proof over promise.
            </h1>
            <p className="text-[20px] font-sans text-[#F2EFD8]/65 max-w-2xl">
              We let our clients' outcomes speak for themselves. Here's what happens when you treat a personal brand like a business asset.
            </p>
          </UpwardReveal>
        </div>
      </section>

      <Section noTopRule>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {caseStudies.map((study, i) => (
            <StaggerItem key={i}>
              <CaseStudyCard {...study} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <CTASection
        headline="Don't just build an audience. Build a business."
        subline="Book a Creator Call and we'll map the path to your next growth milestone."
      />
    </div>
  );
}
