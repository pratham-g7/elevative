import { useRef, useEffect, useState, Children, isValidElement, ReactElement } from "react";

type Props = {
  children: any;
  visible?: number;
};

export function InfiniteCarousel({ children, visible = 3 }: Props) {
  const items = Children.toArray(children);
  const len = items.length;
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    // Equalize slide heights so boxes appear consistent
    const vp = viewportRef.current;
    if (!vp) return;
    const slides = Array.from(vp.querySelectorAll<HTMLDivElement>(".carousel-slide"));
    if (!slides.length) return;
    const heights = slides.map((s) => s.getBoundingClientRect().height);
    const max = Math.max(...heights);
    setMaxHeight(max);
  }, [children]);

  const scrollBySlide = (direction: "next" | "prev") => {
    const vp = viewportRef.current;
    if (!vp) return;
    const step = vp.clientWidth / visible;
    if (direction === "next") {
      // if at (or near) end, wrap to start
      if (Math.abs(vp.scrollLeft + vp.clientWidth - vp.scrollWidth) < 2) {
        vp.scrollTo({ left: 0, behavior: "instant" as any });
      }
      vp.scrollBy({ left: step, behavior: "smooth" });
    } else {
      if (vp.scrollLeft < 2) {
        vp.scrollTo({ left: vp.scrollWidth, behavior: "instant" as any });
      }
      vp.scrollBy({ left: -step, behavior: "smooth" });
    }
  };

  if (len === 0) return null;

  return (
    <div className="relative">
      <div className="hidden lg:flex items-center">
        <button
          aria-label="Prev"
          onClick={() => scrollBySlide("prev")}
          className="mr-3 p-2 rounded border border-[#F2EFD8]/10 text-[#F2EFD8]/70 hover:text-[#F2EFD8]"
        >
          ‹
        </button>

        <div
          ref={viewportRef}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth w-full"
          style={{ gap: "0.5rem", scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {items.map((child, i) => (
            <div
              key={i}
              className="carousel-slide snap-start flex-none"
              style={{ flex: `0 0 ${100 / visible}%`, paddingLeft: "0.5rem", paddingRight: "0.5rem", minHeight: maxHeight ? `${maxHeight}px` : undefined }}
            >
              {isValidElement(child) ? (child as ReactElement) : child}
            </div>
          ))}
        </div>

        <button
          aria-label="Next"
          onClick={() => scrollBySlide("next")}
          className="ml-3 p-2 rounded border border-[#F2EFD8]/10 text-[#F2EFD8]/70 hover:text-[#F2EFD8]"
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default InfiniteCarousel;

