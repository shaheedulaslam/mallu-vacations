"use client";

import { useLayoutEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const bgImages = [
  "/images/hero1-jpg.webp",
  "/images/about_us.png",
  "/images/neil_island.png",
  "/images/hero.png",
  "/images/havelock.png",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 4500);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Tagline Reveal
      tl.from(".hero-tagline", {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.5
      });

      // 2. Line 1: "DIVE INTO THE"
      tl.from(".line-1-word", {
        y: 100,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1.2,
        stagger: 0.1,
      }, "-=0.8");

      // 3. Line 2: "HEART OF ANDAMAN"
      tl.from(".line-2-word", {
        y: 100,
        opacity: 0,
        scale: 0.8,
        filter: "blur(15px)",
        duration: 1.5,
        stagger: 0.15,
      }, "-=1");

      // 4. Subtext & Buttons
      tl.from(".hero-fade-up", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1
      }, "-=0.8");

      // Floating animation for overall content
      gsap.to(".hero-float", {
        y: 15,
        duration: 2.5,
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
      className="relative h-[110vh] w-full flex items-center justify-center overflow-hidden bg-[#e6f2ff]"
    >
      {/* Background Animated Carousel */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence initial={false}>
          <motion.div
            key={bgImages[index]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={bgImages[index]}
              alt="Paradise Island"
              fill
              priority
              sizes="100vw"
              className="object-cover brightness-75 transition-transform duration-[4500ms] ease-linear scale-110"
            />
          </motion.div>
        </AnimatePresence>
        {/* Coastal Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#003366]/60 via-transparent to-[#f0f9ff] z-10" />
      </div>

      {/* Content */}
      <div className="hero-float relative z-20 text-center px-6 max-w-7xl will-change-transform">
        <span
          className="hero-tagline inline-block text-tropical font-bold uppercase tracking-[0.5em] text-xs md:text-sm mb-6 drop-shadow-lg"
        >
          Unveil the Paradise
        </span>

        <h1 className="text-5xl md:text-[8.5rem] font-bold text-white mb-8 tracking-tighter leading-[0.9] flex flex-col items-center">
          <div className="overflow-hidden flex gap-x-4 md:gap-x-8">
            {"DIVE INTO THE".split(" ").map((word, i) => (
              <span key={i} className="line-1-word inline-block drop-shadow-2xl">{word}</span>
            ))}
          </div>
          <div className="overflow-hidden flex gap-x-4 md:gap-x-8 mt-2 md:mt-4">
            {"HEART OF ANDAMAN".split(" ").map((word, i) => (
              <span
                key={i}
                className="line-2-word inline-block bg-gradient-to-r from-white via-white to-[#004aac] bg-clip-text text-transparent drop-shadow-2xl italic"
              >
                {word}
              </span>
            ))}
          </div>
        </h1>

        <p className="hero-fade-up text-lg md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium tracking-tight">
          Explore untouched islands, luxury stays, and thrilling adventures with the premier travel experts in Andaman.
        </p>

        <div className="hero-fade-up flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="https://wa.me/919876543210?text=Hi, I want to explore the vacation packages in Andaman!"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#004aac] text-white px-12 py-5 rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl flex items-center justify-center translate-z-0"
          >
            <span className="relative z-10">Explore Packages</span>
            <div className="absolute inset-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
          </a>
          <button className="group relative border-2 border-white/50 text-white px-12 py-5 rounded-full font-bold overflow-hidden backdrop-blur-md transition-all hover:bg-white/20 hover:border-white translate-z-0">
            Plan Your Trip
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
      >
        <span className="text-[#004aac] text-xs uppercase tracking-widest font-black opacity-60">Scroll Down</span>
        <div className="w-[1.5px] h-12 bg-gradient-to-b from-[#004aac] to-transparent shadow-lg" />
      </motion.div>
    </section>
  );
}