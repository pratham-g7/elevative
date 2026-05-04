import { useParams, Link } from "react-router";
import { Section } from "../components/Section";
import { UpwardReveal, StaggerContainer, StaggerItem } from "../components/UpwardReveal";
import { CTASection } from "../components/CTASection";
import kriedMain from "../../imports/kried_main.png";
import kriedLogo from "../../imports/kried_logo.jpg";
import abhijitFace from "../../imports/abhijit_face.jpg";
import smashGuysLogo from "../../imports/smash_guys_logo.jpg";
import smashGuysImage from "../../imports/smash_guys.png";
import parisPaniniImage from "../../imports/paris_panini.png";
import pizzaBakeryImage from "../../imports/pizza_bakery.png";

export function WorkDetail() {
  const { slug } = useParams();
  const caseStudies: Record<string, {
    title: string;
    tag: string;
    summary: string;
    problem: string;
    approach: string[];
    results: { value: string; label: string }[];
    quote: string;
    quoteName: string;
    quoteTitle: string;
    imageUrl?: string;
    logoUrl?: string;
    avatarUrl?: string;
    collageImages?: string[];
  }> = {
    "eat-kried": {
      title: "@eat.kried",
      tag: "Food Truck",
      summary: "Added +Xk followers in Y months and lifted profile-driven demand by Z%.",
      problem:
        "They had a product people loved, but no consistent demand engine. Content was sporadic, the brand story was unclear, and there was no system to turn attention into bookings.",
      approach: [
        "Clarified the brand voice and signature food narrative so every post had a consistent POV.",
        "Built a weekly content system around menu drops, location updates, and behind-the-scenes hooks.",
        "Mapped posts to a simple conversion path: profile -> location -> order."
      ],
      results: [
        { value: "+Xk", label: "Followers Added" },
        { value: "Y months", label: "Growth Window" },
        { value: "+Z%", label: "Profile-Driven Demand" },
      ],
      quote: "We finally have a system. We post with purpose, and people show up with intent.",
      quoteName: "Kried Team",
      quoteTitle: "Founders",
      imageUrl: kriedMain,
      logoUrl: kriedLogo,
      avatarUrl: undefined,
      collageImages: undefined,
    },
    "abhijit-gupta": {
      title: "Abhijit Gupta",
      tag: "Popo Ventures",
      summary: "Built a creator-led brand engine across 3 restaurants and lifted inbound demand by X%.",
      problem:
        "Three strong restaurant brands, but no unified founder story and no consistent inbound system. Growth depended on ad hoc promos and platform trends.",
      approach: [
        "Positioned Abhijit as the public face behind Paris Panini, Smash Guys, and Pizza Bakery.",
        "Built a content system that rotates each brand while reinforcing a single founder narrative.",
        "Mapped content to local discovery: profile -> brand pages -> footfall and delivery."
      ],
      results: [
        { value: "+X%", label: "Inbound Demand" },
        { value: "3", label: "Brands Activated" },
        { value: "Y months", label: "Build Window" },
      ],
      quote: "We stopped relying on luck. The founder story now drives awareness across all three brands.",
      quoteName: "Abhijit Gupta",
      quoteTitle: "Owner, Paris Panini • Smash Guys • Pizza Bakery",
      imageUrl: undefined,
      logoUrl: smashGuysLogo,
      avatarUrl: abhijitFace,
      collageImages: [smashGuysImage, parisPaniniImage, pizzaBakeryImage],
    },
  };

  const data = (slug && caseStudies[slug]) || {
    title: slug?.replace("-", " ") ?? "Case Study",
    tag: "Creator",
    summary: "Results coming soon.",
    problem: "",
    approach: [],
    results: [],
    quote: "",
    quoteName: "",
    quoteTitle: "",
    imageUrl: undefined,
    logoUrl: undefined,
    avatarUrl: undefined,
    collageImages: undefined,
  };

  return (
    <div className="flex flex-col">
      <section className="relative px-6 md:px-12 lg:px-24 pt-24 pb-10">
        <div className="max-w-7xl mx-auto">
          <Link to="/work" className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.1em] text-[#F2EFD8]/40 hover:text-[#F2EFD8] transition-colors mb-12">
            ← Back to Testimonials
          </Link>
          <UpwardReveal>
            <div className="flex items-center gap-4 mb-6">
              {data.avatarUrl && (
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg bg-transparent">
                  <img
                    src={data.avatarUrl}
                    alt={`${data.title} portrait`}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <h1 className="text-4xl md:text-6xl font-sans font-semibold tracking-[-0.03em] text-[#F2EFD8] capitalize">
                {data.title}
              </h1>
              <span className="px-3 py-1 bg-[#F2EFD8]/10 text-[#F2EFD8] text-[10px] font-mono uppercase tracking-[0.1em] rounded-full">
                {data.tag}
              </span>
            </div>
            <p className="text-[24px] font-sans text-[#F2EFD8]/90 max-w-3xl">
              {data.summary}
            </p>
          </UpwardReveal>
          {data.imageUrl && data.logoUrl && (
            <div className="mt-8 flex items-center gap-3 text-[#F2EFD8]/80">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg border border-[#F2EFD8]/10 bg-[#6b0a0a] p-1">
                <img
                  src={data.logoUrl}
                  alt={`${data.title} logo`}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em]">Case study</span>
            </div>
          )}
        </div>
      </section>

      <Section className="pt-10 pb-2 lg:pt-14 lg:pb-4">
        <UpwardReveal>
          <div className="rounded-3xl border border-[#F2EFD8]/15 bg-[#F2EFD8]/[0.02] p-6 md:p-10 lg:p-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-[#F2EFD8]/10 bg-[#F2EFD8]/5 lg:max-w-5xl lg:mx-auto">
              {data.collageImages && data.collageImages.length === 3 ? (
                <>
                  <div className="grid h-full w-full grid-cols-3">
                    {data.collageImages.map((img, idx) => (
                      <div key={idx} className="relative overflow-hidden">
                        <img
                          src={img}
                          alt={`${data.title} collage ${idx + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="absolute left-[32.5%] top-[-25%] h-[150%] w-[14px] -translate-x-1/2 rotate-[-12deg] bg-[#0D0C08]/35" />
                  <div className="absolute left-[67.5%] top-[-25%] h-[150%] w-[14px] -translate-x-1/2 rotate-[-12deg] bg-[#0D0C08]/35" />
                  <div className="absolute inset-0 bg-[#0D0C08]/10" />
                </>
              ) : data.imageUrl ? (
                <>
                  <img
                    src={data.imageUrl}
                    alt={data.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0D0C08]/10" />
                </>
              ) : (
                <div className="relative h-full w-full bg-[repeating-linear-gradient(115deg,rgba(242,239,216,0.08)_0px,rgba(242,239,216,0.08)_12px,rgba(13,12,8,0.08)_12px,rgba(13,12,8,0.08)_24px)]">
                  <div className="absolute left-[32.5%] top-[-25%] h-[150%] w-[14px] -translate-x-1/2 rotate-[-12deg] bg-[#F2EFD8]/35" />
                  <div className="absolute left-[67.5%] top-[-25%] h-[150%] w-[14px] -translate-x-1/2 rotate-[-12deg] bg-[#F2EFD8]/35" />
                </div>
              )}
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:max-w-5xl lg:mx-auto">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F2EFD8]/45 mb-3">
                  The Problem
                </div>
                {data.problem && (
                  <p className="text-[#F2EFD8]/75 text-[16px] leading-[1.7]">
                    {data.problem}
                  </p>
                )}

                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F2EFD8]/45 mt-8 mb-3">
                  The Approach
                </div>
                <div className="space-y-3">
                  {data.approach.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-[#F2EFD8]/75 text-[15px]">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#F2EFD8]/30"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F2EFD8]/45 mb-4">
                  Results
                </div>
                <div className="space-y-3">
                  {data.results.map((result) => (
                    <div key={result.label} className="flex items-center justify-between rounded-xl border border-[#F2EFD8]/10 bg-[#0D0C08]/40 px-4 py-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#F2EFD8]/60">
                        {result.label}
                      </span>
                      <span className="font-sans text-lg text-[#F2EFD8]">
                        {result.value}
                      </span>
                    </div>
                  ))}
                </div>

                {data.quote && (
                  <div className="mt-8 rounded-2xl border border-[#F2EFD8]/10 bg-[#F2EFD8]/[0.02] p-5">
                    <p className="text-[18px] leading-[1.6] text-[#F2EFD8] mb-4">
                      "{data.quote}"
                    </p>
                    <div className="font-sans font-semibold text-[14px] text-[#F2EFD8]">{data.quoteName}</div>
                    <div className="text-[11px] text-[#F2EFD8]/50 font-mono mt-1">{data.quoteTitle}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </UpwardReveal>
      </Section>

      <CTASection 
        headline="Want results like this?" 
        buttonText="Book a Call"
        className="mt-10"
      />
    </div>
  );
}
