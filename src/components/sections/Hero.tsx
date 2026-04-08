"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const bgImages = [
  "/images/hero.png",
  "/images/havelock.png",
  "/images/neil_island.png",
  "/images/about_island.png",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.5,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-[110vh] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Animated Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgImages[index]}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={bgImages[index]}
              alt="Paradise Island"
              fill
              priority
              sizes="100vw"
              className="object-cover brightness-75"
            />
          </motion.div>
        </AnimatePresence>
        {/* Coastal Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#003366]/40 via-transparent to-[#ffffff]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hero-text inline-block text-tropical font-bold uppercase tracking-[0.5em] text-sm md:text-base mb-6 drop-shadow-lg"
        >
          Unveil the Paradise
        </motion.span>
        
        <h1 className="hero-text text-6xl md:text-9xl font-bold text-white mb-8 tracking-tighter leading-[0.9] drop-shadow-2xl">
          DIVE INTO THE <br />
          <span className="text-tropical italic">HEART OF ANDAMAN</span>
        </h1>

        <p className="hero-text text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          Explore untouched islands, luxury stays, and thrilling adventures with the premier travel experts in Andaman.
        </p>
        
        <div className="hero-text flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="group relative bg-[#004aac] text-white px-12 py-5 rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
            <span className="relative z-10">Explore Packages</span>
            <div className="absolute inset-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
          </button>
          <button className="group relative border-2 border-white/50 text-white px-12 py-5 rounded-full font-bold overflow-hidden backdrop-blur-md transition-all hover:bg-white/20 hover:border-white">
            Plan Your Trip
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[#004aac] text-xs uppercase tracking-widest font-black">Scroll Down</span>
        <div className="w-[2px] h-16 bg-gradient-to-b from-[#004aac] to-transparent" />
      </motion.div>
    </section>
  );
}
