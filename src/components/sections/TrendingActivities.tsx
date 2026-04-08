"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const activities = [
  { name: "Scuba Diving", image: "/images/scuba_diving.png", category: "Underwater" },
  { name: "Snorkeling", image: "/images/snorkeling.png", category: "Water Sport" },
  { name: "Jet Skiing", image: "/images/jet_skiing.png", category: "Adventure" },
  { name: "Parasailing", image: "/images/parasailing.png", category: "Air Adventure" },
  { name: "Sea Walk", image: "/images/sea_walk.png", category: "Leisure" },
  { name: "Trekking", image: "/images/trekking.png", category: "Nature" },
];

export default function TrendingActivities() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Batch animate activity cards for high performance
      ScrollTrigger.batch(".activity-card", {
        start: "top 85%",
        onEnter: (elements) => {
          gsap.fromTo(elements, 
            { opacity: 0, y: 50, scale: 0.95 },
            { 
              opacity: 1, 
              y: 0, 
              scale: 1, 
              stagger: 0.1, 
              duration: 0.8, 
              ease: "power3.out",
              overwrite: true 
            }
          );
        },
        once: true
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="activities" className="section-padding bg-white relative overflow-hidden translate-z-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-[#004aac] font-bold uppercase tracking-widest text-sm mb-4 block underline decoration-tropical decoration-4 underline-offset-8">Trending Now</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#003366]">
              THRILL <span className="text-[#0077b6] italic">&</span> ADVENTURE
            </h2>
          </div>
          <p className="max-w-md text-[#004aac]/60 text-lg font-medium">
            Push your limits with our curated selection of high-octane water sports and nature trails.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="activity-card group relative h-[500px] rounded-[3rem] overflow-hidden cursor-pointer shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-500/20 transition-all border border-blue-50 translate-z-0"
            >
              <Image
                src={activity.image}
                alt={activity.name}
                fill
                priority={index < 3}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 via-[#003366]/20 to-transparent transition-all duration-500 z-10" />
              
              <div className="absolute bottom-10 left-10 right-10 text-white z-20 transition-all duration-500">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-tropical mb-3 block translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  {activity.category}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-bold tracking-tight mb-0">{activity.name}</h3>
                  <div className="w-14 h-14 rounded-full bg-white text-[#004aac] flex items-center justify-center opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-xl">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
