import { useParams, Link } from "react-router";
import { Section } from "../components/Section";
import { UpwardReveal, StaggerContainer, StaggerItem } from "../components/UpwardReveal";
import { CTASection } from "../components/CTASection";
import kriedMain from "../../imports/kried_main.png";
import kriedLogo from "../../imports/kried_logo.jpg";
import abhijitFace from "../../imports/abhijit_face.jpg";
import adamMain from "../../imports/adam_yu_main.png";
import adamFace from "../../imports/adam_yu_photo.png";
import chalantsMain from "../../imports/cu_chalants.png";
import chalantsFace from "../../imports/cu_chalants_photo.png";
import smashGuysLogo from "../../imports/smash_guys_logo.jpg";
import smashGuysImage from "../../imports/smash_guys.png";
import parisPaniniImage from "../../imports/paris_panini.png";
import pizzaBakeryImage from "../../imports/pizza_bakery.png";
import danielCaseStudy from "../../imports/daniel_case_study.png";
import danielIcon from "../../imports/daniel_icon.png";

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
    logoBadgeClassName?: string;
    logoBadgePaddingClassName?: string;
    logoBadgeRadiusClassName?: string;
    logoBadgeImageClassName?: string;
    avatarUrl?: string;
    collageImages?: string[];
  }> = {
    "eat-kried": {
      title: "@eat.kried",
      tag: "Food Truck",
      summary: "Grew the profile by +Xk in Y months and lifted profile-driven bookings by Z%.",
      problem:
        "Strong product but no repeatable demand engine — posting was inconsistent, the brand story was fragmented, and attention rarely converted to orders.",
      approach: [
        "Rewrote the brand voice and crafted a signature food narrative so every post landed with clarity.",
        "Launched a weekly content calendar focused on menu drops, location updates, and behind-the-scenes hooks.",
        "Optimized CTAs and profile landing to reliably convert attention into orders."
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
      avatarUrl: kriedLogo,
      logoBadgeClassName: undefined,
      logoBadgePaddingClassName: undefined,
      logoBadgeRadiusClassName: undefined,
      logoBadgeImageClassName: undefined,
      collageImages: undefined,
    },
    "abhijit-gupta": {
      title: "Abhijit Gupta",
      tag: "Popo Ventures",
      summary: "Built a founder-led content engine across three restaurants and increased inbound visits by X%.",
      problem:
        "Each restaurant had its own identity but no single thread to pull audiences through the portfolio; growth relied on sporadic promos and platform luck.",
      approach: [
        "Led founder positioning so Abhijit became the narrative bridge across all three brands.",
        "Rolled out a rotating content calendar that kept each concept visible while reinforcing the founder story.",
        "Applied local discovery tactics to drive profile visitors into footfall and delivery conversions."
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
      logoBadgeClassName: undefined,
      logoBadgePaddingClassName: undefined,
      logoBadgeRadiusClassName: undefined,
      logoBadgeImageClassName: undefined,
      avatarUrl: abhijitFace,
      collageImages: [smashGuysImage, parisPaniniImage, pizzaBakeryImage],
    },
    "gym-influencer": {
      title: "Adam Yu",
      tag: "Fitness Creator",
      summary: "Converted audience attention into Xk coaching leads and introduced a higher-ticket offer aligned to his audience.",
      problem:
        "Good reach, weak conversion — content attracted views but not a consistent lead flow for coaching revenue.",
      approach: [
        "Refocused content on client outcomes and transformation-led proof rather than generic tips.",
        "Built an offer ladder and landing experience that moved casual viewers into coaching leads.",
        "Implemented clear, repeatable CTAs and a tested follow-up flow to capture inbound interest."
      ],
      results: [
        { value: "Xk", label: "Inbound Leads" },
        { value: "1:1 Coaching", label: "Offer Model" },
        { value: "Y months", label: "Build Window" },
      ],
      quote: "The content finally has a job now. People don’t just watch it—they reach out.",
      quoteName: "Adam Yu",
      quoteTitle: "Fitness Creator",
      imageUrl: adamMain,
      logoUrl: adamFace,
      logoBadgeClassName: "bg-transparent",
      logoBadgePaddingClassName: "p-0",
      logoBadgeRadiusClassName: "rounded-2xl",
      logoBadgeImageClassName: "h-full w-full object-cover",
      avatarUrl: adamFace,
      collageImages: undefined,
    },
    "meme-influencer": {
      title: "CU Chalants",
      tag: "Creator",
      summary: "Turned sporadic virality into repeatable reach and steady brand interest.",
      problem:
        "Spikes in reach weren’t translating to durable growth — posting was ad-hoc, and there wasn’t a reliable way to turn hits into followers or DMs.",
      approach: [
        "Built a small set of repeatable post structures and quick-edit workflows so winning ideas scale without extra effort.",
        "Launched a lightweight publishing rhythm and templates to remove friction from creation.",
        "Wrote caption hooks and CTAs designed to convert viral reach into follows and brand inquiries."
      ],
      results: [
        { value: "0 → Xk", label: "Followers" },
        { value: "3", label: "Months" },
        { value: "Z%", label: "Reach Lift" },
      ],
      quote: "We stopped guessing — the page now repeats hits instead of waiting for them.",
      quoteName: "CU Chalants",
      quoteTitle: "Creator",
      imageUrl: chalantsMain,
      logoUrl: chalantsFace,
      logoBadgeClassName: "bg-transparent",
      logoBadgePaddingClassName: "p-0",
      logoBadgeRadiusClassName: "rounded-2xl",
      logoBadgeImageClassName: "h-full w-full object-cover",
      avatarUrl: chalantsFace,
      collageImages: undefined,
    },
    "case-study-1": {
      title: "Daniel J Samuel",
      tag: "Fitness Creator",
      summary: "We repositioned a gym trainer with a clear POV, rebuilt his content system, and packaged his offer. Within months, he was booking higher-ticket clients and scaling beyond 1:1 sessions.",
      problem:
        "Good work, scattered content. No clear positioning meant engagement didn’t convert to paid offers and client bookings were inconsistent.",
      approach: [
        "Clarified brand positioning and a signature POV that made content memorable.",
        "Built a repeatable content system and weekly calendar focused on transformation-led proof.",
        "Packaged offers and optimized CTAs to turn followers into paid clients."
      ],
      results: [
        { value: "₹6L", label: "Monthly Revenue" },
        { value: "+120k", label: "Followers Added" },
        { value: "3 months", label: "Build Window" },
      ],
      quote: "They turned my content into a business — I started booking higher-ticket clients consistently.",
      quoteName: "Daniel J Samuel",
      quoteTitle: "Fitness Creator",
      imageUrl: danielCaseStudy,
      logoUrl: undefined,
      logoBadgeClassName: undefined,
      logoBadgePaddingClassName: undefined,
      logoBadgeRadiusClassName: undefined,
      logoBadgeImageClassName: undefined,
      avatarUrl: danielIcon,
      collageImages: undefined,
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
    logoBadgeClassName: undefined,
    logoBadgePaddingClassName: undefined,
    logoBadgeRadiusClassName: undefined,
    logoBadgeImageClassName: undefined,
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
          <div className="mt-8 flex items-center gap-3 text-[#F2EFD8]/80">
            <span className="font-mono text-[10px] uppercase tracking-[0.12em]">Case study</span>
          </div>
        </div>
      </section>

      <Section className="pt-10 pb-2 lg:pt-14 lg:pb-4">
        <UpwardReveal>
          <div className="rounded-3xl border border-[#F2EFD8]/15 bg-[#F2EFD8]/[0.02] p-6 md:p-10 lg:p-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-[#F2EFD8]/10 bg-[#F2EFD8]/5 lg:max-w-5xl lg:mx-auto">
              {data.collageImages && data.collageImages.length === 3 ? (
                <>
                  <div className="grid h-full w-full grid-cols-3 overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={data.collageImages[0]}
                        alt={`${data.title} collage 1`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="relative overflow-hidden">
                      <img
                        src={data.collageImages[1]}
                        alt={`${data.title} collage 2`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="relative overflow-hidden">
                      <img
                        src={data.collageImages[2]}
                        alt={`${data.title} collage 3`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="pointer-events-none absolute left-[33.333%] top-[-20%] z-10 h-[145%] w-[24px] -translate-x-1/2 rotate-[14deg] bg-[#0D0C08] shadow-[0_0_0_1px_rgba(242,239,216,0.18)]" />
                  <div className="pointer-events-none absolute left-[66.666%] top-[-20%] z-10 h-[145%] w-[24px] -translate-x-1/2 rotate-[14deg] bg-[#0D0C08] shadow-[0_0_0_1px_rgba(242,239,216,0.18)]" />
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
