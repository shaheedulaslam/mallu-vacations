"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is the best time to visit Andaman?",
    answer: "The best time to visit the Andaman & Nicobar Islands is from October to May. This period covers the winter and summer seasons, offering perfect weather for water activities and island hopping."
  },
  {
    question: "Do I need a passport to visit Andaman?",
    answer: "No, Indian citizens do not need a passport or visa to visit the Andaman Islands. However, a valid government ID is required. Foreign nationals do require a passport with a valid Indian visa."
  },
  {
    question: "Are water sports safe for non-swimmers?",
    answer: "Yes! Many water sports like Sea Walk, Parasailing, and even introductory Scuba Diving are perfectly safe and designed for non-swimmers under expert supervision."
  },
  {
    question: "Which islands are a must-visit?",
    answer: "Havelock Island (Swaraj Dweep), Neil Island (Shaheed Dweep), and Port Blair are the essential trio. If you have more time, Baratang and Ross Island are highly recommended."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-[#e6f2ff]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#004aac] font-bold uppercase tracking-widest text-sm mb-4 block">Information</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#003366]">
            FREQUENTLY <br /> <span className="text-[#0077b6]">ASKED QUESTIONS</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="rounded-[2rem] overflow-hidden border border-blue-100 bg-white shadow-lg shadow-blue-500/5"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-8 text-left transition-colors hover:bg-blue-50/50"
              >
                <span className="text-xl font-bold text-[#003366]">{faq.question}</span>
                <div className={`p-2 rounded-full transition-all ${openIndex === index ? 'bg-[#004aac] text-white' : 'bg-blue-100 text-[#004aac]'}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-[#004aac]/70 leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
