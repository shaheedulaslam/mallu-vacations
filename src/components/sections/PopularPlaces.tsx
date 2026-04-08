"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const places = [
  { name: "Havelock Island", image: "/images/havelock.png", desc: "Pristine beaches and blue waters" },
  { name: "Neil Island", image: "/images/neil_island.png", desc: "Natural coral bridges and tranquility" },
  { name: "Cellular Jail", image: "/images/cellular_jail.png", desc: "A journey through India's history" },
  { name: "Ross Island", image: "/images/ross_island.png", desc: "Mystical ruins and deer trails" },
  { name: "Chidiyatapu", image: "/images/chidiyatapu.png", desc: "The sunset point of Andaman" },
  { name: "Barren Island", image: "/images/barren_island.png", desc: "Asia's only active volcano" },
];

export default function PopularPlaces() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { x: 0 },
        {
          x: "-300vw",
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
            preventOverlaps: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="overflow-hidden bg-[#e6f2ff]">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-screen w-[400vw] flex items-center px-[5vw] will-change-transform">
          <div className="w-[80vw] flex flex-col justify-center pr-20">
            <span className="text-[#004aac] font-bold uppercase tracking-widest mb-4">Discovery</span>
            <h2 className="text-6xl md:text-8xl font-bold text-[#003366] leading-none">
              POPULAR <br /> <span className="text-[#0077b6]">DESTINATIONS</span>
            </h2>
            <p className="text-[#004aac]/60 mt-8 max-w-md text-lg">
              Swipe through the most breathtaking locations in the Andaman archipelago.
            </p>
          </div>

          <div className="flex gap-10">
            {places.map((place, index) => (
              <div key={index} className="relative group w-[45vw] h-[60vh] overflow-hidden rounded-[3rem] shadow-2xl shadow-blue-900/10">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  sizes="45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 via-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-10 left-10 text-white">
                  <h3 className="text-3xl font-bold mb-2 group-hover:translate-x-2 transition-transform">{place.name}</h3>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                    {place.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
