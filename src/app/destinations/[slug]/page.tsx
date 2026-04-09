"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { destinations } from "@/data/destinations";
import { ArrowLeft, CheckCircle2, Waves, Palmtree, Compass, MapPin } from "lucide-react";

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
        yPercent: 30,
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
          { y: 60, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1.2, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
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
      <section className="hero-section relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
        <div className="hero-bg absolute inset-0 z-0 scale-110">
          <Image
            src={destination.heroImage}
            alt={destination.title}
            fill
            priority
            quality={90}
            className="object-cover brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white" />
        </div>

        <Link 
          href="/#popular-places"
          className="absolute top-32 left-8 md:left-20 z-50 flex items-center gap-3 text-white font-bold hover:text-tropical transition-colors group"
        >
          <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white/10">
            <ArrowLeft size={20} />
          </div>
          Back to Destinations
        </Link>

        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-tropical font-bold uppercase tracking-[0.5em] text-sm md:text-base mb-6 block"
          >
            Explore the Archipelago
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-7xl md:text-[10rem] font-bold text-white tracking-tighter leading-[0.8] mb-8"
          >
            {destination.title.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? 'text-tropical italic block md:inline' : ''}>
                {word}{' '}
              </span>
            ))}
          </motion.h1>
        </div>
      </section>

      {/* 📝 ABOUT SECTION */}
      <section className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal">
            <span className="text-[#004aac] font-bold uppercase tracking-[0.3em] text-xs mb-6 block underline decoration-tropical decoration-4 underline-offset-8">Discover</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#003366] mb-8 leading-[0.9]">
              THE ESSENCE OF <br /> <span className="text-[#0077b6]">{destination.title.split(' ')[0]}</span>
            </h2>
            <p className="text-xl text-[#004aac]/60 leading-relaxed font-medium mb-10">
              {destination.fullDescription}
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 rounded-[2rem] bg-[#f0f9ff] border border-blue-50">
                <Waves className="text-[#004aac] mb-4" size={32} />
                <h4 className="font-bold text-[#003366]">Pristine Waters</h4>
              </div>
              <div className="p-8 rounded-[2rem] bg-[#f0f9ff] border border-blue-50">
                <Palmtree className="text-[#004aac] mb-4" size={32} />
                <h4 className="font-bold text-[#003366]">Tropical Flora</h4>
              </div>
            </div>
          </div>
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl reveal h-[600px]">
            <Image
              src={destination.gallery[0] || destination.heroImage}
              alt="Destination View"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 🎯 ACTIVITIES SECTION */}
      <section className="section-padding bg-[#f0f9ff]">
        <div className="max-w-7xl mx-auto px-6 mb-16 reveal">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#003366] text-center mb-4">
            MUST-DO <span className="text-[#0077b6] italic">ADVENTURES</span>
          </h2>
          <p className="text-center text-[#004aac]/60 max-w-2xl mx-auto text-lg">
            Unforgettable experiences curated just for you.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {destination.activities.map((activity, idx) => (
            <div key={idx} className="reveal group relative h-[500px] rounded-[3rem] overflow-hidden shadow-xl shadow-blue-900/5 hover:shadow-2xl transition-all">
              <Image
                src={activity.image}
                alt={activity.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <h4 className="text-3xl font-bold mb-2">{activity.name}</h4>
                <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 HIGHLIGHTS SECTION */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#003366] rounded-[4rem] p-12 md:p-24 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#004aac]/20 rounded-full blur-[100px] -z-1" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="reveal">
                <span className="text-tropical font-bold uppercase tracking-widest text-xs mb-6 block">Island Highlights</span>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
                  STUNNING <br /> ATTRACTIONS
                </h2>
                <div className="space-y-10">
                  {destination.highlights.map((item, idx) => (
                    <div key={idx} className="flex gap-6 items-start">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Compass className="text-tropical" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                        <p className="text-white/60">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="reveal flex flex-col justify-center items-center text-center p-12 md:p-16 bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/10">
                <MapPin className="text-tropical mb-8" size={60} />
                <h4 className="text-4xl font-bold mb-6">Plan Your Visit</h4>
                <p className="text-lg text-white/70 mb-10 leading-relaxed">
                  Ready to experience the magic of {destination.title}? Contact our travel experts today.
                </p>
                <a 
                  href={`https://wa.me/919876543210?text=I'm interested in visiting ${destination.title}`}
                  className="w-full bg-[#004aac] text-white py-6 rounded-2xl font-bold text-lg hover:bg-white hover:text-[#004aac] transition-all flex items-center justify-center gap-3 shadow-2xl"
                >
                  Book with Experts
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📍 RELATED DESTINATIONS */}
      <section className="section-padding overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex items-center justify-between reveal">
          <h2 className="text-5xl font-bold tracking-tighter text-[#003366]">EXPLORE MORE</h2>
          <div className="w-20 h-[2px] bg-blue-100 hidden md:block" />
        </div>
        
        <div className="flex gap-8 px-6 md:px-20 overflow-x-auto pb-12 snap-x no-scrollbar">
          {destinations.filter(d => d.slug !== destination.slug).map((d) => (
            <Link 
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className="flex-shrink-0 w-[300px] md:w-[450px] aspect-[4/5] relative rounded-[3rem] overflow-hidden snap-center group shadow-xl"
            >
              <Image
                src={d.heroImage}
                alt={d.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <h4 className="text-3xl font-bold mb-2">{d.title}</h4>
                <span className="text-xs font-bold uppercase tracking-widest text-tropical">Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
