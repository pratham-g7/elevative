import { Section } from "../components/Section";
import { Button } from "../components/Button";
import { UpwardReveal, StaggerContainer, StaggerItem } from "../components/UpwardReveal";
import { CTASection } from "../components/CTASection";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { ChevronUp } from "lucide-react";

export function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero */}
      <section className="relative px-6 md:px-12 lg:px-24 pt-10 md:pt-12 lg:pt-16 pb-20 md:pb-24 lg:pb-28 flex flex-col">
        <div className="max-w-7xl mx-auto w-full">
          <StaggerContainer className="max-w-4xl">
            <StaggerItem>
              <h1 className="text-[40px] leading-[1.1] md:text-[60px] lg:text-[74px] font-sans font-semibold tracking-[-0.03em] mb-6 text-[#F2EFD8]">
                Own your niche with a<br />personal brand that wins.
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-[20px] font-sans font-medium tracking-[-0.01em] text-[#F2EFD8]/90 max-w-2xl mb-8">
                We build creator brands that turn attention into revenue, premium offers, and predictable demand.
              </p>
            </StaggerItem>
            <StaggerItem className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button href="/book" variant="filled" className="px-8 py-4 text-[16px]">
                Book a Creator Call
              </Button>
              <div className="flex items-center gap-3 text-[#F2EFD8]/50 font-mono text-[10px] tracking-[0.1em] uppercase">
                <span className="w-[30px] h-[1px] bg-[#F2EFD8]/20"></span>
                Built for serious creator-led businesses
              </div>
            </StaggerItem>
            <StaggerItem>
              <p className="text-[12px] md:text-[13px] text-[#F2EFD8]/45 max-w-2xl mt-6">
                Best for creators with an existing audience or a clear niche to scale.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl">
                {[
                    {
                      title: "Positioning",
                      desc: "Audience clarity that shortens the path to conversion.",
                      href: "/services#brand",
                    },
                    {
                      title: "Authority content",
                      desc: "Consistent, conversion-first editorial that builds trust.",
                      href: "/services#content",
                    },
                    {
                      title: "Performance & Audience",
                      desc: "Targeted scaling with measurable, revenue-aligned metrics.",
                      href: "/services#performance",
                    },
                    {
                      title: "Monetization",
                      desc: "Offer and funnel design that converts attention into revenue.",
                      href: "/services#conversion",
                    },
                  ].map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="group block border border-[#F2EFD8]/10 bg-[#F2EFD8]/[0.02] p-5 hover:bg-[#F2EFD8]/[0.04] transition-colors"
                    >
                      <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#F2EFD8]/50 mb-2">
                        {item.title}
                      </div>
                      <p className="text-[13px] text-[#F2EFD8]/70 leading-[1.6]">{item.desc}</p>
                    </a>
                  ))}
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 2. Social Proof Bar */}
      <div className="border-y border-[#F2EFD8]/20 bg-[#F2EFD8]/[0.02]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-8 overflow-hidden">
          <StaggerContainer className="flex flex-wrap md:flex-nowrap items-center justify-between gap-8 text-[#F2EFD8]">
            <StaggerItem className="flex flex-col gap-1 w-1/2 md:w-auto">
              <span className="font-sans font-semibold text-3xl">X+</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#F2EFD8]/50">Brands Built</span>
            </StaggerItem>
            <StaggerItem className="flex flex-col gap-1 w-1/2 md:w-auto">
              <span className="font-sans font-semibold text-3xl">Y</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#F2EFD8]/50">Countries</span>
            </StaggerItem>
            <StaggerItem className="flex flex-col gap-1 w-full md:w-auto mt-4 md:mt-0">
              <span className="font-sans font-semibold text-3xl">₹Z+ Cr</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#F2EFD8]/50">Audience Value Created</span>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
      {/* 7. Testimonials */}
      <Section label="Testimonials" number="01" id="testimonials">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard 
            quote="I was posting every day but nobody gave a shit. Turns out I had no point of view. Working with them made people actually care what I was saying."
            name="Client A"
            role="Content Creator"
            result="50k→250k Followers"
            bgColor="bg-amber-700/40"
          />
          <TestimonialCard 
            quote="Built a SaaS that was solid but had zero visibility. They helped me position myself as someone worth paying attention to in my space. Now advisors are reaching out and we're getting partnership inbound."
            name="Client B"
            role="SaaS Founder"
            result="$8k→$35k MRR"
            bgColor="bg-cyan-700/40"
          />
          <TestimonialCard 
            quote="My content was all over the place. They made me pick a lane and actually commit to something. Now brands approach me instead of me chasing them down."
            name="Client C"
            role="Content Creator"
            result="$3k→$15k Per Brand Deal"
            bgColor="bg-fuchsia-700/40"
          />
        </StaggerContainer>
      </Section>
      

      {/* 4. Services overview */}
      <Section label="Services" number="02" id="services">
        <UpwardReveal className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-sans font-semibold tracking-[-0.03em] mb-6">
            Four levers that turn <span className="emphasis">attention</span> into <span className="emphasis">revenue</span>.
          </h2>
        </UpwardReveal>

        <StaggerContainer className="flex flex-col gap-6">
          {[
            {
              name: "Brand Building",
              outcome: "Be instantly clear on who you are and why you win.",
              href: "/services#brand"
            },
            {
              name: "Content & Social",
              outcome: "Publish with a system that drives inbound, not likes.",
              href: "/services#content"
            },
            {
              name: "Performance & Audience",
              outcome: "Put your best work in front of the right people.",
              href: "/services#performance"
            },
            {
              name: "Monetization & Conversion",
              outcome: "Turn followers into paid offers and clients.",
              href: "/services#conversion"
            }
          ].map((service, i) => (
            <StaggerItem key={i}>
              <a href={service.href} className="group block flex flex-col md:flex-row md:items-center justify-between border border-[#F2EFD8]/10 bg-[#F2EFD8]/[0.02] hover:bg-[#F2EFD8]/[0.05] p-8 md:p-10 transition-colors">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl md:text-2xl font-sans font-medium tracking-tight group-hover:text-[#F2EFD8] transition-colors text-[#F2EFD8]/90">
                    {service.name}
                  </h3>
                  <p className="text-[#F2EFD8]/50 text-sm">{service.outcome}</p>
                </div>
                <div className="mt-6 md:mt-0 flex items-center gap-3 text-[#F2EFD8]/40 group-hover:text-[#F2EFD8] transition-colors">
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em]">Explore</span>
                  <ChevronUp className="w-4 h-4 rotate-90" />
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* 5. Featured case study */}
      <Section label="Featured Work" number="03" id="featured-work">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <UpwardReveal className="order-2 md:order-1">
            <h2>[SAMPLE TESTIMONIAL]</h2>
            <h2 className="text-3xl md:text-4xl font-sans font-semibold tracking-[-0.03em] mb-6">
              From local trainer to a premium fitness brand.
            </h2>
            <p className="text-[#F2EFD8]/65 text-[15px] leading-[1.7] mb-10">
              We repositioned a gym trainer with a clear POV, rebuilt his content system, and packaged his offer. Within months, he was booking higher-ticket clients and scaling beyond 1:1 sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="border border-[#F2EFD8]/10 bg-[#F2EFD8]/[0.02] p-6">
                <div className="font-sans font-semibold text-2xl mb-1">₹6L</div>
                <div className="font-mono text-[10px] text-[#F2EFD8]/50 uppercase tracking-[0.1em]">Monthly Revenue</div>
              </div>
              <div className="border border-[#F2EFD8]/10 bg-[#F2EFD8]/[0.02] p-6">
                <div className="font-sans font-semibold text-2xl mb-1">+120k</div>
                <div className="font-mono text-[10px] text-[#F2EFD8]/50 uppercase tracking-[0.1em]">Followers Added</div>
              </div>
            </div>
            <Button href="/work/case-study-1" variant="outline" className="px-6 py-3">
              See the Full Breakdown
            </Button>
          </UpwardReveal>
          
          <UpwardReveal className="order-1 md:order-2 relative aspect-[4/5] bg-[#F2EFD8]/5 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1599388164599-f05e48fe9004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyZSUyMHRleHR1cmV8ZW58MXx8fHwxNzc3ODEzNTUxfDA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Case study" 
              className="w-full h-full object-cover grayscale opacity-80"
            />
          </UpwardReveal>
        </div>
      </Section>
      {/* 3. Who this is for */}
      <Section label="Who We Help" number="04" id="who-we-help">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Creators",
              desc: "You have an audience. We build a premium creator business that converts attention into revenue."
            },
            {
              title: "Founders",
              desc: "You’ve built something great. Now become the face of your industry so talent, capital, and clients come to you."
            },
            {
              title: "Executives",
              desc: "You have decades of expertise. We turn that knowledge into thought leadership that opens board seats and advisory roles."
            }
          ].map((item, i) => (
            <StaggerItem key={i} className="flex flex-col">
              <div className="text-[#F2EFD8]/40 mb-4">
                <ChevronUp className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-sans font-semibold tracking-[-0.01em] mb-4">{item.title}</h3>
              <p className="text-[#F2EFD8]/65 text-[15px] leading-[1.7]">{item.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>
      

      {/* 8. Final CTA */}
      <CTASection />
    </div>
  );
}
