"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Adventure Enthusiast",
    content: "The scuba diving experience in Havelock was life-changing! Mallu Vacations handled everything perfectly.",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Family Traveler",
    content: "Seamless island hopping and child-friendly activities. The best family vacation we've ever had.",
    rating: 5
  },
  {
    name: "Aisha Verma",
    role: "Honeymooner",
    content: "The romantic sunset cruise in Chidiyatapu was magical. Thank you for the unforgettable memories!",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[#004aac] font-bold uppercase tracking-widest text-sm mb-4 block underline decoration-tropical decoration-4 underline-offset-8">Testimonials</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#003366]">
            WHAT OUR <span className="text-[#0077b6]">GUESTS SAY</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#e6f2ff] p-10 rounded-[3rem] shadow-xl shadow-blue-900/5 relative border border-white"
            >
              <div className="absolute -top-6 left-10 w-16 h-16 bg-[#004aac] rounded-2xl flex items-center justify-center text-white shadow-xl">
                <Quote size={32} />
              </div>
              
              <div className="mt-6 mb-8 text-[#004aac]/80 text-lg font-medium leading-relaxed italic">
                "{t.content}"
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#0077b6]/20 flex items-center justify-center text-[#003366] font-bold text-xl">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-[#003366] text-lg leading-tight">{t.name}</h4>
                  <p className="text-[#0077b6] text-sm font-bold uppercase tracking-[0.1em]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
