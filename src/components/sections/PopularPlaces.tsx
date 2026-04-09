"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { destinations } from "@/data/destinations";

gsap.registerPlugin(ScrollTrigger);

export default function PopularPlaces() {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const horizontalSection = horizontalRef.current;
      if (!horizontalSection) return;

      const totalWidth = horizontalSection.scrollWidth;
      const amountToScroll = totalWidth - window.innerWidth;


      gsap.to(horizontalSection, {
        x: -amountToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${amountToScroll}`,
          pin: true,
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="popular-places"
      className="relative bg-[#e6f2ff] overflow-hidden"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div
          ref={horizontalRef}
          className="flex h-[80vh] w-max items-center justify-start translate-z-0"
        >
          {/* Welcome Card */}
          <div className="flex h-full w-[100vw] md:w-[70vw] flex-shrink-0 flex-col justify-center px-10 md:px-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="mb-4 block text-sm font-black uppercase tracking-[0.4em] text-[#004aac] underline decoration-tropical decoration-4 underline-offset-8">
                Discovery
              </span>
              <h2 className="text-7xl md:text-9xl font-bold tracking-tighter text-[#003366] leading-[0.85]">
                POPULAR <br />
                <span className="text-[#0077b6]">DESTINATIONS</span>
              </h2>
              <p className="mt-10 max-w-lg text-lg md:text-xl font-medium text-[#004aac]/60">
                A cinematic journey through the most breathtaking islands. Explore detailed guides by clicking on any island.
              </p>
            </motion.div>
          </div>

          {/* Destination Cards */}
          {destinations.map((place, index) => (
            <Link
              href={`/destinations/${place.slug}`}
              key={place.slug}
              className="relative h-[80vh] w-[85vw] md:w-[70vw] flex-shrink-0 group overflow-hidden first:ml-0 px-4 md:px-6 cursor-pointer"
            >
              <div className="relative h-full w-full rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl shadow-blue-900/10 translate-z-0 will-change-transform">
                <div className="absolute inset-0 translate-z-0">
                  <Image
                    src={place.heroImage}
                    alt={place.title}
                    fill
                    quality={75}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index < 2}
                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-105 transform translate-z-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/40 via-transparent to-transparent z-20" />
                </div>

                <div className="relative z-30 h-full flex flex-col justify-end p-10 md:p-16 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="mb-2 block text-[10px] font-black uppercase tracking-[0.5em] text-tropical">
                      Explore Island
                    </span>
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                      {place.title}
                    </h3>
                    <p className="max-w-xs text-sm md:text-base text-white/70 font-medium leading-relaxed">
                      {place.description}
                    </p>
                  </motion.div>
                  <div className="mt-8 h-[2px] w-24 bg-tropical/50" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
