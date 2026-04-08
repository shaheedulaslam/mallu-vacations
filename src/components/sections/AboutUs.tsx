"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import gsap from "gsap";

const features = [
  "Bespoke Island Itineraries",
  "Expert Local Guides",
  "Luxury Sustainable Stays",
  "Exclusive Yacht Experiences"
];

export default function AboutUs() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate image and content separately with staggering
      gsap.from(".about-animate", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-[#f0f9ff] overflow-hidden translate-z-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative about-animate">
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl shadow-blue-900/20 translate-z-0">
              <Image
                src="/images/about_us.png"
                alt="Tropical Island"
                width={800}
                height={1000}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover h-[750px] w-full"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 z-20 bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-blue-900/10 hidden md:block max-w-[320px] border border-blue-50 about-animate translate-z-0">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center">
                  <CheckCircle2 className="text-[#004aac] w-7 h-7" />
                </div>
                <span className="font-black text-xs uppercase tracking-widest text-[#003366]">Trusted By 10k+</span>
              </div>
              <p className="text-lg text-[#004aac]/70 italic font-medium leading-relaxed">
                "The most seamless tropical vacation we've ever experienced."
              </p>
            </div>
          </div>

          <div className="space-y-12 about-animate">
            <div>
              <span className="text-[#004aac] font-bold uppercase tracking-[0.4em] text-sm mb-6 block underline decoration-tropical decoration-4 underline-offset-8">Our Story</span>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-[#003366] leading-[0.85]">
                CRAFTING YOUR <br />
                <span className="text-[#0077b6]">PARADISE TALE</span>
              </h2>
            </div>
            
            <p className="text-xl text-[#004aac]/60 leading-relaxed font-medium">
              At Mallu Vacations, we don't just book trips; we curate soul-stirring experiences across the Andaman archipelago. Since our inception, we've been dedicated to uncovering the hidden gems of these islands while prioritizing sustainable and luxury tourism.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-5 group translate-z-0">
                  <div className="w-8 h-8 rounded-xl bg-[#004aac]/10 flex items-center justify-center group-hover:bg-[#004aac] transition-all">
                    <CheckCircle2 className="text-[#004aac] w-5 h-5 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-bold text-[#003366] tracking-tight">{feature}</span>
                </div>
              ))}
            </div>

            <a 
              href="https://wa.me/919876543210"
              className="inline-flex bg-[#004aac] text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-[#003366] transition-all shadow-xl shadow-blue-500/20 items-center gap-3 group translate-z-0"
            >
              Read Our Full Story
              <span className="transition-transform group-hover:translate-x-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
