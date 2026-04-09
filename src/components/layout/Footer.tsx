"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, XIcon, Youtube } from "./SocialIcons";

const socialLinks = [
  { Icon: Instagram, href: "#" },
  { Icon: Facebook, href: "#" },
  { Icon: XIcon, href: "#" },
  { Icon: Youtube, href: "#" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Packages", href: "#popular-places" },
  { name: "Activities", href: "#activities" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#e6f2ff] pt-24 pb-12 border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Mallu Vacations Logo"
                width={300}
                height={150}
                className="h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-[#004aac]/60 leading-relaxed font-medium">
              Crafting unforgettable tropical experiences in the Andaman Islands. Your journey to paradise starts here.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href }, idx) => (
                <Link
                  key={idx}
                  href={href}
                  className="w-12 h-12 rounded-[1rem] bg-white border border-blue-100 flex items-center justify-center text-[#004aac] hover:bg-[#004aac] hover:text-white transition-all shadow-lg shadow-blue-500/5 group"
                >
                  <Icon size={20} className="transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-10 text-[#003366]">Quick Links</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#004aac]/60 hover:text-[#004aac] transition-colors font-bold tracking-tight">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-10 text-[#003366]">Destinations</h4>
            <ul className="space-y-4">
              {destinations.map((link) => (
                <li key={link.slug}>
                  <Link href={`/destinations/${link.slug}`} className="text-[#004aac]/60 hover:text-[#004aac] transition-colors font-bold tracking-tight">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-10 text-[#003366]">Newsletter</h4>
            <p className="text-[#004aac]/60 mb-8 font-medium">Stay updated with our latest offers and island guides.</p>
            <div className="flex bg-white rounded-3xl p-2 border-2 border-transparent focus-within:border-[#004aac] transition-all shadow-xl shadow-blue-500/5">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent px-6 py-3 w-full focus:outline-none text-[#003366] font-bold"
              />
              <button className="bg-[#004aac] text-white p-4 rounded-2xl hover:bg-[#003366] transition-all">
                <Icon size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-blue-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[#004aac]/40 text-sm font-bold tracking-tight uppercase">
            © 2026 Mallu Vacations. All rights reserved.
          </p>
          <div className="flex gap-10 text-xs font-black uppercase tracking-widest text-[#004aac]/40">
            <Link href="#" className="hover:text-[#004aac] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#004aac] transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-[#004aac] transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Small helper to keep the Send icon in the newsletter button
import { Send as Icon } from "lucide-react";
import { destinations } from "@/data/destinations";
