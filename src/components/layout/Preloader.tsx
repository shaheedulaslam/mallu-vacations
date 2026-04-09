"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 2.5 seconds to ensure smooth branding impact
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", // Cinematic slide up reveal
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#001d3d] via-[#003566] to-[#014f86] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* 🌊 SVG WAVE ANIMATION (LIGHTWEIGHT) */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <motion.svg 
              viewBox="0 0 1440 320" 
              className="absolute bottom-[-50px] left-0 w-[200%] h-auto preserve-3d"
              initial={{ x: "-50%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <path fill="#00b4d8" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224.2C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </motion.svg>
          </div>

          {/* ☀️ SUNRISE & ISLAND SILHOUETTE */}
          <div className="relative mb-12">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-32 h-32 bg-gradient-to-t from-[#ffb703] to-[#fb8500] rounded-full blur-2xl absolute -top-10 left-1/2 -translate-x-1/2 opacity-30"
            />
            {/* Minimal Island Silhouette */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="relative z-10"
            >
              <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className="text-white/20">
                <path d="M10 70C30 50 60 45 110 70H10Z" fill="currentColor" />
                <path d="M35 50C35 50 25 35 35 20M35 50C35 50 45 35 35 20" stroke="currentColor" strokeWidth="2" />
                <path d="M35 20L20 15M35 20L50 15M35 20L25 10M35 20L45 10" stroke="currentColor" strokeWidth="2" />
              </svg>
            </motion.div>
          </div>

          {/* ✨ BRANDING */}
          <div className="text-center z-20">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Image
                src="/logo.png"
                alt="Mallu Vacations"
                width={200}
                height={80}
                className="brightness-0 invert mx-auto mb-4"
              />
            </motion.div>
            
            <motion.h2 
              initial={{ letterSpacing: "0.2em", opacity: 0 }}
              animate={{ letterSpacing: "0.5em", opacity: 0.6 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="text-white text-xs font-black uppercase tracking-[0.5em] mb-12"
            >
              Your Gateway to Paradise
            </motion.h2>
          </div>
          
          {/* ⏳ PROGRESS BAR */}
          <div className="w-64 h-[2px] bg-white/5 relative overflow-hidden rounded-full">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ 
                duration: 2.5, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00b4d8] to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
