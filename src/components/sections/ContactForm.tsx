"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative Bubbles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-tropical/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-[#004aac] font-bold uppercase tracking-widest text-sm mb-4 block underline decoration-tropical decoration-4 underline-offset-8">Get In Touch</span>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-[#003366] leading-[0.9] mb-8">
              LET'S PLAN <br />
              <span className="text-[#0077b6]">YOUR TRIP</span>
            </h2>
            
            <p className="text-xl text-[#004aac]/60 mb-12 max-w-md font-medium">
              Ready to explore the islands? Drop us a message or visit our office in Port Blair.
            </p>

            <div className="space-y-8">
              {[
                { icon: MapPin, label: "Visit Us", text: "Airport Road, Port Blair, Andaman" },
                { icon: Phone, label: "Call Us", text: "+91 98765 43210" },
                { icon: Mail, label: "Email Us", text: "hello@malluvacations.com" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-[#e6f2ff] flex items-center justify-center text-[#004aac] group-hover:bg-[#004aac] group-hover:text-white transition-all shadow-lg shadow-blue-500/5">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-tropical block mb-1">{item.label}</span>
                    <span className="text-xl font-bold text-[#003366]">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#e6f2ff] p-10 md:p-16 rounded-[4rem] shadow-2xl shadow-blue-900/10 border border-white relative overflow-hidden"
          >
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white text-[#003366] px-8 py-5 rounded-[2rem] border-2 border-transparent focus:border-[#004aac] outline-none transition-all placeholder:text-[#004aac]/30 font-bold"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white text-[#003366] px-8 py-5 rounded-[2rem] border-2 border-transparent focus:border-[#004aac] outline-none transition-all placeholder:text-[#004aac]/30 font-bold"
                />
              </div>
              <input
                type="text"
                placeholder="Travel Destination"
                className="w-full bg-white text-[#003366] px-8 py-5 rounded-[2rem] border-2 border-transparent focus:border-[#004aac] outline-none transition-all placeholder:text-[#004aac]/30 font-bold"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-white text-[#003366] px-8 py-6 rounded-[2.5rem] border-2 border-transparent focus:border-[#004aac] outline-none transition-all placeholder:text-[#004aac]/30 font-bold"
              />
              <a 
                href="https://wa.me/919876543210?text=Hi, I have an inquiry about Mallu Vacations trip packages!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#004aac] text-white py-6 rounded-full font-bold text-lg hover:bg-[#003366] transition-all flex items-center justify-center gap-3 group shadow-xl shadow-blue-500/20"
              >
                Send Inquiry
                <Send className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" size={20} />
              </a>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
