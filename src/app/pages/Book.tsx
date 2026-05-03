import { useEffect } from "react";
import { Section } from "../components/Section";
import { UpwardReveal } from "../components/UpwardReveal";
import { Check } from "lucide-react";

export function Book() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]',
    );

    if (existingScript) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex flex-col">
      <section className="relative px-6 md:px-12 lg:px-24 pt-24 pb-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24">
          <div className="md:w-1/2">
            <UpwardReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold tracking-[-0.03em] mb-6 text-[#F2EFD8]">
                Let's map your creator brand strategy.
              </h1>
              <p className="text-[18px] font-sans text-[#F2EFD8]/65 mb-8">
                Book a 30-minute creator call. We'll audit your positioning and show the exact path to grow authority and revenue.
              </p>
              
              <ul className="flex flex-col gap-4">
                {[
                  "30 minutes. No pitch pressure.",
                  "We audit your creator positioning and offers.",
                  "You leave with a 90-day growth plan."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#F2EFD8]/80 text-[15px]">
                    <div className="w-5 h-5 rounded-full bg-[#F2EFD8]/10 flex items-center justify-center flex-shrink-0">
                      <Check size={12} strokeWidth={3} className="text-[#F2EFD8]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border border-[#F2EFD8]/10 bg-[#F2EFD8]/[0.02] p-4 text-[#F2EFD8]/70 text-[13px] leading-[1.6]">
                Best for creators with an existing audience or a clear niche. If you're starting from zero, we'll point you to the right first step.
              </div>
            </UpwardReveal>
          </div>
          
          <div className="md:w-1/2">
            <UpwardReveal
              delay={0.2}
              className="bg-[#0D0C08] border border-[#F2EFD8]/15 rounded-2xl p-3 h-[620px] flex items-center justify-center relative overflow-hidden"
            >
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.15em] text-[#F2EFD8]/50">
                <span>Live availability</span>
                <span>30 min</span>
              </div>
              <div
                className="calendly-inline-widget w-full h-full"
                data-url="https://calendly.com/pratham-extra-01/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=f2efd8&text_color=0d0c08&primary_color=1e1e18"
                style={{ minWidth: "320px", height: "620px" }}
              />
            </UpwardReveal>
          </div>
        </div>
      </section>

      <Section noTopRule>
        <UpwardReveal className="max-w-4xl mx-auto text-center">
          <p className="text-[20px] md:text-[24px] leading-[1.6] text-[#F2EFD8]/80 font-medium tracking-tight mb-6">
            "We were hesitant about hiring an agency, but Elevative's strategic clarity blew us away on the first call. They just get it."
          </p>
          <div className="font-sans font-semibold text-[14px] text-[#F2EFD8]">John Smith</div>
          <div className="text-[10px] text-[#F2EFD8]/50 font-mono mt-1 uppercase tracking-[0.1em]">Founder & CEO</div>
        </UpwardReveal>
      </Section>
    </div>
  );
}
