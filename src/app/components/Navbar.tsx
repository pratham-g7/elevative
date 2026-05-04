import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import logo from "../../imports/elevative_logo.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0D0C08]/90 backdrop-blur-md border-b border-[#F2EFD8]/10 py-4"
            : "bg-transparent py-6"
        } px-6 md:px-12 lg:px-24`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-[#F2EFD8]"
          >
            <img
              src={logo}
              alt="Elevative"
              className={`object-contain transition-all duration-300 ${
                isScrolled ? "h-[72px]" : "h-[92px]"
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/work"
              className="text-[13px] font-mono uppercase tracking-[0.1em] text-[#F2EFD8]/70 hover:text-[#F2EFD8] transition-colors"
            >
              Our Work
            </Link>
            <Link
              to="/services"
              className="text-[13px] font-mono uppercase tracking-[0.1em] text-[#F2EFD8]/70 hover:text-[#F2EFD8] transition-colors"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-[13px] font-mono uppercase tracking-[0.1em] text-[#F2EFD8]/70 hover:text-[#F2EFD8] transition-colors"
            >
              About
            </Link>
            <Button
              href="/book"
              variant="filled"
              className="h-10 px-6 text-sm"
            >
              Book a Creator Call
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[#F2EFD8] p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-[#0D0C08] p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-12">
              <Link
                to="/"
                className="flex items-center gap-2 text-[#F2EFD8]"
              >
                <img
                  src={logo}
                  alt="Elevative"
                  className="h-6 object-contain"
                />
              </Link>
              <button
                className="text-[#F2EFD8] p-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex flex-col gap-8 text-center mt-12">
              <Link
                to="/work"
                className="text-2xl font-sans font-medium text-[#F2EFD8]"
              >
                Our Work
              </Link>
              <Link
                to="/services"
                className="text-2xl font-sans font-medium text-[#F2EFD8]"
              >
                Services
              </Link>
              <Link
                to="/about"
                className="text-2xl font-sans font-medium text-[#F2EFD8]"
              >
                About
              </Link>
              <div className="mt-8">
                <Button
                  href="/book"
                  variant="filled"
                  className="w-full"
                >
                  Book a Creator Call
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}