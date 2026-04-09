"use client";

import { useLayoutEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const bgImages = [
  "/images/hero.png",
  "/images/hero1-jpg.webp",
  "/images/havelock.png",
  "/images/neil_island.png",
  "/images/about_us.png",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Tagline Reveal
      tl.from(".hero-tagline", {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.5
      });

      // 2. Cinematic Text Reveal (Letters popping up)
      tl.from(".hero-title-word", {
        y: 80,
        opacity: 0,
        rotateX: -45,
        stagger: 0.08,
        duration: 1.2,
      }, "-=0.8");

      // 3. Subtext & Buttons
      tl.from(".hero-fade-up", {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.1
      }, "-=0.6");

      // Soft breathing animation for the content
      gsap.to(".hero-float", {
        y: 10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);

    return () => {
      clearInterval(interval);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[110vh] w-full flex items-center justify-center overflow-hidden bg-white"
    >
      {/* 🏝️ BRIGHT & VIBRANT BACKGROUND CAROUSEL */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence initial={false}>
          <motion.div
            key={bgImages[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={bgImages[index]}
              alt="Paradise Island"
              fill
              priority
              sizes="100vw"
              className="object-cover brightness-[1.05] contrast-[1.05]"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Soft Tropical Overlay (Brighter) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60 z-10" />
        <div className="absolute inset-0 bg-black/10 z-[11]" /> {/* Very subtle dim to make white text pop */}
      </div>

      {/* Content */}
      <div className="hero-float relative z-20 text-center px-6 max-w-6xl">
        <span className="hero-tagline inline-block px-6 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[#003366] font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-8 shadow-sm">
          Welcome to the Heart of Andaman
        </span>

        <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-bold text-white mb-10 tracking-tighter leading-[0.85] flex flex-wrap justify-center drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          <div className="overflow-hidden py-2 inline-flex gap-x-4 md:gap-x-8">
            {"DIVE".split("").map((char, i) => (
              <span key={i} className="hero-title-word inline-block">{char}</span>
            ))}
            {"INTO".split("").map((char, i) => (
              <span key={i} className="hero-title-word inline-block">{char}</span>
            ))}
          </div>
          <div className="overflow-hidden py-2 w-full">
             <span className="hero-title-word block text-[#00e5ff] italic font-black drop-shadow-[0_5px_15px_rgba(0,163,255,0.4)]">PARADISE</span>
          </div>
        </h1>

        <p className="hero-fade-up text-white text-lg md:text-2xl max-w-3xl mx-auto mb-14 leading-relaxed font-semibold drop-shadow-md">
          Explore white sand beaches, hidden lagoons, and <span className="text-white border-b-2 border-white/40">unmissable adventures</span> in the Indian Ocean.
        </p>

        <div className="hero-fade-up flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="#popular-places"
            className="group relative bg-[#00e5ff] text-[#003366] px-16 py-6 rounded-full font-black overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_15px_40px_rgba(0,229,255,0.3)] flex items-center justify-center uppercase tracking-[0.2em] text-sm"
          >
            Explore Island
          </a>
          <a
            href="https://wa.me/919876543210"
            className="group relative bg-white/20 hover:bg-white text-white hover:text-[#004aac] px-12 py-6 rounded-full font-black backdrop-blur-md border border-white/40 transition-all uppercase tracking-[0.2em] text-sm"
          >
            Custom Trip
          </a>
        </div>
      </div>

      {/* Modern Wave-like Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-3">
            <span className="text-white text-[10px] uppercase font-black tracking-widest opacity-80">Scroll</span>
            <div className="w-1 h-12 bg-white/30 rounded-full relative overflow-hidden">
                <motion.div 
                    animate={{ y: [0, 48, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-full h-1/3 bg-[#00e5ff] rounded-full"
                />
            </div>
        </div>
      </motion.div>

      {/* Decorative Tropical Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}