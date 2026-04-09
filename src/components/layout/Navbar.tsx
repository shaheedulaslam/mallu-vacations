"use client";

import { useState, useEffect, useCallback, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Packages", href: "#popular-places" },
  { name: "Activities", href: "#activities" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Optimized scroll listener with passive flag
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 translate-z-0",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-blue-100 py-3 shadow-xl"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Mallu Vacations Logo"
            width={300}
            height={150}
            className={cn(
              "h-10 md:h-12 w-auto object-contain transition-all duration-300",
              !isScrolled && "brightness-0 invert shadow-sm"
            )}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "transition-colors text-sm font-bold uppercase tracking-widest translate-z-0",
                isScrolled ? "text-[#003366] hover:text-[#004aac]" : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/919876543210?text=Hi, I'm interested in booking a trip with Mallu Vacations!"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "px-6 py-2 rounded-full font-bold transition-all shadow-lg text-center",
              isScrolled
                ? "bg-[#004aac] text-white hover:bg-[#003366] shadow-blue-500/20"
                : "bg-white text-[#004aac] hover:bg-blue-50 shadow-white/10"
            )}
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 transition-colors",
            isScrolled ? "text-[#003366]" : "text-white"
          )}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#f0f9ff] backdrop-blur-xl border-b border-blue-100 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#003366] text-lg font-black uppercase tracking-widest"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/919876543210?text=Hi, I'm interested in booking a trip with Mallu Vacations!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#004aac] text-white px-6 py-4 rounded-xl font-bold w-full shadow-xl shadow-blue-500/20 text-center"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default memo(Navbar);
