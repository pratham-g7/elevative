import { Link } from "react-router";
import { ChevronUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#F2EFD8]/20 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-6">
        <div className="flex items-center gap-2 text-[#F2EFD8] md:justify-start justify-center">
          <span className="font-sans font-semibold text-lg tracking-tight">Elevative.</span>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#F2EFD8]/40">
          <Link to="/work" className="hover:text-[#F2EFD8]/80 transition-colors">Testimonials</Link>
          <Link to="/services" className="hover:text-[#F2EFD8]/80 transition-colors">Services</Link>
          <Link to="/about" className="hover:text-[#F2EFD8]/80 transition-colors">About</Link>
          <a href="#" className="hover:text-[#F2EFD8]/80 transition-colors">LinkedIn</a>
          <a href="https://www.instagram.com/elevative.in/" className="hover:text-[#F2EFD8]/80 transition-colors">Instagram</a>
        </div>
        
        <div className="flex items-center gap-6 md:justify-end justify-center">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#F2EFD8]/40">
            © {new Date().getFullYear()} Elevative
          </span>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#F2EFD8]/20 hover:bg-[#F2EFD8]/5 text-[#F2EFD8] transition-colors"
          >
            <ChevronUp size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </footer>
  );
}
