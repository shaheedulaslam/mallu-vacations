"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Packages", href: "#popular-places" },
  { name: "Activities", href: "#activities" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const lastScrollY = useRef(0);

  // 🖱️ Scroll Logic: Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Background change logic
      setIsScrolled(currentScrollY > 50);

      // Hide/Show logic
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: 1,
          scale: isScrolled ? 0.95 : 1
        }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-6 left-0 w-full z-50 px-6 flex justify-center pointer-events-none"
      >
        <div 
          className={cn(
            "w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 pointer-events-auto",
            isScrolled 
              ? "bg-white/80 backdrop-blur-xl border border-blue-100 shadow-[0_8px_32px_rgba(0,74,172,0.1)]" 
              : "bg-black/10 backdrop-blur-md border border-white/10"
          )}
        >
          {/* 🏷️ LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Mallu Vacations"
              width={160}
              height={60}
              className={cn(
                "h-8 md:h-10 w-auto object-contain transition-all duration-500",
                !isScrolled && "brightness-0 invert"
              )}
              priority
            />
          </Link>

          {/* 🗺️ CENTER NAVIGATION */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setActiveLink(link.name)}
                className={cn(
                  "relative px-5 py-2 text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-full",
                  isScrolled 
                    ? (activeLink === link.name ? "text-[#004aac]" : "text-[#003366]/60 hover:text-[#003366]") 
                    : (activeLink === link.name ? "text-white" : "text-white/50 hover:text-white")
                )}
              >
                {activeLink === link.name && (
                  <motion.div
                    layoutId="nav-pill"
                    className={cn(
                      "absolute inset-0 z-10 rounded-full",
                      isScrolled ? "bg-blue-50/50" : "bg-white/10"
                    )}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-20">{link.name}</span>
              </Link>
            ))}
          </nav>

          {/* 🚀 CTA BUTTON */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden md:flex items-center gap-2 pl-6 pr-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all group overflow-hidden relative",
                isScrolled 
                  ? "bg-[#004aac] text-white shadow-lg shadow-blue-500/20" 
                  : "bg-white text-[#004aac] shadow-xl shadow-white/10"
              )}
            >
              <span className="relative z-10">Plan Trip</span>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight size={14} />
              </div>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={cn(
                "md:hidden p-2 rounded-full transition-colors",
                isScrolled ? "bg-blue-50 text-[#003366]" : "bg-white/10 text-white"
              )}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* 📱 MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[100] bg-[#001d3d]/90 flex flex-col items-center justify-center p-8"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-10 right-10 p-4 rounded-full bg-white/10 text-white"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white text-4xl font-bold tracking-tighter hover:text-tropical transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.a
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                href="https://wa.me/919876543210"
                className="mt-12 bg-white text-[#004aac] px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-lg shadow-2xl"
              >
                Book Your Island Trip
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
