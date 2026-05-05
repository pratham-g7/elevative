import { StaggerContainer, StaggerItem } from "./UpwardReveal";

const services = [
  {
    number: 1,
    name: "Brand Building",
    outcome: "Be instantly clear on who you are and why you win.",
    href: "/services#brand",
  },
  {
    number: 2,
    name: "Content & Social",
    outcome: "Publish with a system that drives inbound, not likes.",
    href: "/services#content",
  },
  {
    number: 3,
    name: "Performance & Audience",
    outcome: "Put your best work in front of the right people.",
    href: "/services#performance",
  },
  {
    number: 4,
    name: "Monetization & Conversion",
    outcome: "Turn followers into paid offers and clients.",
    href: "/services#conversion",
  },
];

export function ServicesFlow() {
  const desktopNodes = [
    { x: 8, y: 27 },
    { x: 33, y: 61 },
    { x: 59, y: 27 },
    { x: 84, y: 61 },
  ];

  return (
    <div className="w-full">
      <div className="hidden lg:block w-full">
        <div className="relative px-2" style={{ minHeight: "410px" }}>
            <svg
            className="absolute inset-0 z-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F2EFD8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#F2EFD8" stopOpacity="0.85" />
              </linearGradient>
              <marker
                id="arrowMarker"
                markerWidth="8"
                markerHeight="8"
                refX="0"
                refY="4"
                orient="auto"
              >
                <polyline points="0,0.5 4,4 0,7.5" stroke="#F2EFD8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
              </marker>
            </defs>
            <path
              d="M 8 39 C 18 39 22 67 35 67 C 49 67 53 39 61 39 C 73 39 77 67 92 67"
              stroke="url(#arrowGradient)"
              strokeWidth="1.8"
              strokeDasharray="4 6"
              strokeLinecap="round"
              fill="none"
              markerEnd="url(#arrowMarker)"
            />
          </svg>

          <div className="relative z-10 h-[410px]">
            {services.map((service, index) => (
              <a
                key={service.number}
                href={service.href}
                className="group absolute flex w-[20%] -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                style={{ left: `${desktopNodes[index].x}%`, top: `${desktopNodes[index].y}%`, transform: index === 2 ? "translate(38px, -2px)" : undefined }}
              >
                <div
                  className="mb-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#F2EFD8]/40 transition-all group-hover:border-[#F2EFD8] group-hover:bg-[#F2EFD8]/5"
                   style={index === 0 ? { transform: "translateY(40px)" } : index === 1 ? { transform: "translateY(8px)" } : index === 2 ? { transform: "translateY(48px)" } : undefined}
                >
                  <span className="text-2xl font-semibold text-[#F2EFD8]/60 transition-colors group-hover:text-[#F2EFD8]">
                    {service.number}
                  </span>
                </div>
                <div style={index === 0 ? { transform: "translateY(32px)" } : index === 1 ? { transform: "translateY(4px)" } : index === 2 ? { transform: "translateY(48px)" } : undefined}>
                  <h3 className="mb-2 text-sm font-semibold text-[#F2EFD8] text-center transition-colors group-hover:text-[#F2EFD8]">
                    {service.name}
                  </h3>
                  <p className="max-w-[150px] text-center text-xs text-[#F2EFD8]/50 transition-colors group-hover:text-[#F2EFD8]/70">
                    {service.outcome}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:hidden w-full px-6">
        <svg
          className="mb-8 h-auto w-full"
          viewBox="0 0 100 620"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="arrowGradientVertical" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F2EFD8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#F2EFD8" stopOpacity="0.85" />
            </linearGradient>
            <marker
              id="arrowMarkerVertical"
              markerWidth="8"
              markerHeight="8"
              refX="4"
              refY="1.5"
              orient="auto"
            >
              <polyline points="0.5,0 4,4 7.5,0" stroke="#F2EFD8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
            </marker>
          </defs>
          <path
            d="M 50 55 Q 30 135 50 205 Q 70 275 50 345 Q 30 415 50 485 Q 70 555 50 600"
            stroke="url(#arrowGradientVertical)"
            strokeWidth="1.8"
            strokeDasharray="4 5"
            strokeLinecap="round"
            fill="none"
            markerEnd="url(#arrowMarkerVertical)"
          />
        </svg>

        <StaggerContainer className="space-y-12">
          {services.map((service) => (
            <StaggerItem key={service.number}>
              <a href={service.href} className="flex items-start gap-4 group">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#F2EFD8]/40 transition-all group-hover:border-[#F2EFD8] group-hover:bg-[#F2EFD8]/5">
                  <span className="text-2xl font-semibold text-[#F2EFD8]/60 transition-colors group-hover:text-[#F2EFD8]">
                    {service.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold text-[#F2EFD8] transition-colors group-hover:text-[#F2EFD8]">
                    {service.name}
                  </h3>
                  <p className="text-sm text-[#F2EFD8]/50 transition-colors group-hover:text-[#F2EFD8]/70">
                    {service.outcome}
                  </p>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
