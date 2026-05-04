import { Section } from "../components/Section";
import { UpwardReveal, StaggerContainer, StaggerItem } from "../components/UpwardReveal";
import { CTASection } from "../components/CTASection";
import { CaseStudyCard } from "../components/CaseStudyCard";
import kriedMain from "../../imports/kried_main.png";
import kriedLogo from "../../imports/kried_logo.jpg";
import abhijitFace from "../../imports/abhijit_face.jpg";

export function Work() {
  const caseStudies = [
    {
      slug: "eat-kried",
      client: "@eat.kried",
      industry: "Food Truck",
      result: "Added +Xk followers in Y months and lifted profile-driven demand by Z%.",
      imageUrl: kriedMain,
      logoUrl: kriedLogo,
    },
    {
      slug: "abhijit-gupta",
      client: "Abhijit Gupta",
      industry: "Popo Ventures",
      result: "Built a creator-led brand engine across 3 restaurants and lifted inbound demand by X%.",
      imageUrl: "",
      logoUrl: abhijitFace,
      badgeClassName: "bg-transparent",
      badgeSizeClassName: "h-14 w-14",
      badgePaddingClassName: "p-0",
      badgeRadiusClassName: "rounded-2xl",
      badgeImageClassName: "h-full w-full object-cover",
    },
    {
      slug: "fintech-creator",
      client: "Rohan Mehta",
      industry: "Tech Educator",
      result: "Launched a paid cohort at ₹8L/month and added 120k followers.",
      imageUrl: "",
    },
    {
      slug: "design-agency",
      client: "Nisha Patel",
      industry: "Lifestyle Creator",
      result: "Repositioned into premium deals: ₹5L/month and +70k followers.",
      imageUrl: "",
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

      <Section noTopRule className="pt-12 lg:pt-16">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {caseStudies.map((study, i) => (
              <StaggerItem key={i} className="h-full">
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
