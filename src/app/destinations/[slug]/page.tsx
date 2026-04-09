"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { destinations } from "@/data/destinations";
import { ArrowLeft, Waves, Palmtree, Compass, MapPin, Hotel, Star, CreditCard, Clock, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function DestinationDetails() {
  const { slug } = useParams();
  const destination = destinations.find((d) => d.slug === slug);
  const containerRef = useRef(null);

  if (!destination) {
    notFound();
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Parallax
      gsap.to(".hero-bg", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Section Fade-ups
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.fromTo(el, 
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [destination]);

  return (
    <main ref={containerRef} className="bg-white">
      {/* 🎬 HERO SECTION */}
      <section className="hero-section relative h-[100vh] w-full overflow-hidden flex items-center justify-center">
        <div className="hero-bg absolute inset-0 z-0">
          <Image
            src={destination.heroImage}
            alt={destination.title}
            fill
            priority
            quality={90}
            className="object-cover brightness-75 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-white" />
        </div>

        <Link 
          href="/#popular-places"
          className="absolute top-32 left-8 md:left-20 z-50 flex items-center gap-3 text-white font-bold hover:text-tropical transition-all group"
        >
          <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-black/20 backdrop-blur-md group-hover:bg-white/20">
            <ArrowLeft size={20} />
          </div>
          <span className="drop-shadow-lg">All Destinations</span>
        </Link>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-tropical font-bold uppercase tracking-[0.6em] text-xs md:text-sm mb-6 block"
          >
            Explore Andaman's Luxury
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-[9rem] font-bold text-white tracking-tighter leading-[0.8] mb-8"
          >
            {destination.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/90 text-lg md:text-2xl max-w-2xl mx-auto font-medium"
          >
            {destination.description}
          </motion.p>
        </div>
      </section>

      {/* 📝 ABOUT SECTION */}
      <section className="py-32 bg-white overlap-section">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal order-2 lg:order-1">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[700px] w-full">
              <Image
                src={destination.gallery[0] || destination.heroImage}
                alt={destination.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="reveal order-1 lg:order-2">
            <span className="text-[#004aac] font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Premium Guide</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#003366] mb-8 leading-[0.9]">
              THE HEART OF <br /> <span className="text-[#0077b6] italic">{destination.title.split(' ')[0]}</span>
            </h2>
            <p className="text-xl text-[#004aac]/60 leading-relaxed font-medium mb-10">
              {destination.fullDescription}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-center gap-4 p-6 rounded-2xl bg-[#f0f9ff] border border-blue-50 hover:border-[#0077b6] transition-colors group">
                <Waves className="text-[#004aac] group-hover:scale-110 transition-transform" />
                <span className="font-bold text-[#003366]">Crystal Clear Bay</span>
              </div>
              <div className="flex items-center gap-4 p-6 rounded-2xl bg-[#f0f9ff] border border-blue-50 hover:border-[#0077b6] transition-colors group">
                <Palmtree className="text-[#004aac] group-hover:scale-110 transition-transform" />
                <span className="font-bold text-[#003366]">Tropical Flora</span>
              </div>
            </div>
            <a 
              href={`https://wa.me/919876543210?text=I'd like a custom itinerary for ${destination.title}`}
              className="bg-[#003366] text-white px-10 py-5 rounded-full font-bold inline-flex items-center gap-3 hover:bg-[#004aac] transition-all shadow-xl shadow-blue-900/10"
            >
              Request Itinerary <ArrowLeft size={18} className="rotate-180" />
            </a>
          </div>
        </div>
      </section>

      {/* 📦 PACKAGES SECTION (NEW) */}
      <section className="py-32 bg-[#e6f2ff]">
        <div className="max-w-7xl mx-auto px-6 reveal">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-[#003366] mb-6 outline-text uppercase">Exclusive</h2>
            <p className="text-xl text-[#004aac] font-bold tracking-widest uppercase">Travel Packages</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {destination.packages.map((pkg, idx) => (
              <div key={idx} className="bg-white rounded-[3rem] p-10 md:p-16 border border-blue-100 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8">
                  <span className="text-4xl font-black text-[#0077b6]">{pkg.price}</span>
                  <span className="block text-[10px] uppercase tracking-widest text-[#004aac]/40 text-right">Starts At</span>
                </div>
                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-[#003366] mb-2">{pkg.name}</h3>
                  <div className="flex items-center gap-2 text-[#0077b6] font-bold text-sm">
                    <Clock size={16} /> {pkg.duration}
                  </div>
                </div>
                <ul className="space-y-4 mb-12">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-[#004aac]/70 font-medium">
                      <CheckCircle2 size={18} className="text-[#25D366]" /> {feat}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-[#004aac] text-white py-5 rounded-2xl font-bold hover:bg-[#003366] transition-all flex items-center justify-center gap-3 group">
                  Select Package <CreditCard size={20} className="transition-transform group-hover:scale-110" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎯 ACTIVITIES SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-20 reveal">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#003366] mb-4">
            ISLAND <span className="text-[#0077b6] italic">ADVENTURES</span>
          </h2>
          <div className="h-1 w-32 bg-tropical/70 rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {destination.activities.map((activity, idx) => (
            <div key={idx} className="reveal group bg-[#f8fbff] rounded-[3rem] overflow-hidden border border-blue-50 h-full">
              <div className="relative h-[400px]">
                <Image
                  src={activity.image}
                  alt={activity.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-6 py-2 rounded-full text-[#004aac] font-black text-xs shadow-xl">
                  {activity.price || "Contact Us"}
                </div>
              </div>
              <div className="p-10">
                <h4 className="text-2xl font-bold text-[#003366] mb-4">{activity.name}</h4>
                <p className="text-[#004aac]/60 text-sm leading-relaxed mb-6">{activity.description}</p>
                <div className="h-[2px] w-12 bg-[#0077b6]/30 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🏨 ACCOMMODATION SECTION (NEW) */}
      <section className="py-32 bg-[#003366] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/hero.png')] opacity-5 object-cover" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal">
            <div>
              <span className="text-tropical font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Stay in Paradise</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">PREMIUM <br /> <span className="italic opacity-50">STAYS</span></h2>
            </div>
            <p className="max-w-sm text-white/50 font-medium">Curated luxury resorts and eco-friendly beachfront villas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {destination.accommodations.map((stay, idx) => (
              <div key={idx} className="reveal group flex flex-col md:flex-row bg-white/5 backdrop-blur-3xl rounded-[3rem] overflow-hidden border border-white/10 hover:bg-white/10 transition-all">
                <div className="relative w-full md:w-2/5 h-[300px]">
                  <Image src={stay.image} alt={stay.name} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex-1 p-10 flex flex-col justify-center">
                  <div className="flex gap-1 mb-4 text-tropical">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < stay.rating ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <h4 className="text-3xl font-bold mb-2">{stay.name}</h4>
                  <p className="text-white/60 mb-6 flex items-center gap-2"><Hotel size={16} /> {stay.type}</p>
                  <button className="text-tropical font-black text-xs uppercase tracking-widest hover:translate-x-3 transition-transform">Explore More →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📍 RELATED DESTINATIONS */}
      <section className="py-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-20 reveal">
          <h2 className="text-5xl font-bold tracking-tighter text-[#003366]">CONTINUE THE <span className="text-[#0077b6]">JOURNEY</span></h2>
        </div>
        
        <div className="flex gap-10 px-6 md:px-20 overflow-x-auto pb-12 snap-x no-scrollbar">
          {destinations.filter(d => d.slug !== destination.slug).map((d) => (
            <Link 
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className="flex-shrink-0 w-[320px] md:w-[480px] aspect-[4/5] relative rounded-[4rem] overflow-hidden snap-center group shadow-2xl shadow-blue-900/10"
            >
              <Image
                src={d.heroImage}
                alt={d.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 text-white">
                <h4 className="text-4xl font-bold tracking-tight mb-2">{d.title}</h4>
                <div className="flex items-center gap-2 text-tropical font-black text-xs uppercase tracking-widest">
                  View Story <ArrowLeft size={16} className="rotate-180" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
