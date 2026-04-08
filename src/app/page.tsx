import Hero from "@/components/sections/Hero";
import PopularPlaces from "@/components/sections/PopularPlaces";
import TrendingActivities from "@/components/sections/TrendingActivities";
import AboutUs from "@/components/sections/AboutUs";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PopularPlaces />
      <TrendingActivities />
      <AboutUs />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
