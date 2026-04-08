"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

// Dynamically import heavy sections to improve initial LCP and interactivity
const PopularPlaces = dynamic(() => import("@/components/sections/PopularPlaces"), { ssr: false });
const TrendingActivities = dynamic(() => import("@/components/sections/TrendingActivities"), { ssr: false });
const AboutUs = dynamic(() => import("@/components/sections/AboutUs"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { ssr: false });
const FAQ = dynamic(() => import("@/components/sections/FAQ"), { ssr: false });
const ContactForm = dynamic(() => import("@/components/sections/ContactForm"), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <PopularPlaces />
      <TrendingActivities />
      <AboutUs />
      <Testimonials />
      <FAQ />
      <ContactForm />
    </main>
  );
}
