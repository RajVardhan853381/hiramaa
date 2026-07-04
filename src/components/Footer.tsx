"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Decorative background element for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-brand/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group inline-block">
              <div className="relative w-16 h-16 shrink-0 group-hover:scale-105 transition-transform duration-500">
                <Image 
                  src="/original-assets/cropped-logo-2-2-300x300.png" 
                  alt="Hira Maa Group Logo" 
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                Hira Maa <span className="text-brand">Group</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering agriculture, promoting clean energy, and delivering quality-driven solutions through innovation and ethical business practices.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/profile.php?id=100068523613814" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand hover:text-white transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://twitter.com/GreatSolarEner1" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand hover:text-white transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="https://www.instagram.com/greatsolarenergy/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand hover:text-white transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.linkedin.com/in/great-solar-energy-54925b213/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand hover:text-white transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about-us" },
                { name: "Hiramaa FPO", href: "/hiramaa-fpo" },
                { name: "Products", href: "/products" },
                { name: "Gallery", href: "/gallery" },
                { name: "Career", href: "/career" },
                { name: "Contact", href: "/contact-us" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-400 hover:text-brand hover:translate-x-1 inline-block transition-all text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Our Businesses</h4>
            <ul className="space-y-3">
              {["Hira Maa FPO", "Matra-Chaya Dairy", "Hira Maa Solar", "Agriculture Solutions", "Balaji Venkatesh", "Barbarik Batteries"].map((item) => (
                <li key={item}>
                  <Link href="/#businesses" className="text-slate-400 hover:text-brand transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin size={18} className="text-brand shrink-0 mt-0.5" />
                <span>
                  Hira Maa Group of Company<br />
                  C/o Abhishek Mishra, Behind Railway XING,<br />
                  Fundhar Road, DUMARTARAI, RAIPUR,<br />
                  Chhattisgarh, 492001
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone size={18} className="text-brand shrink-0" />
                <span>09999 637919</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail size={18} className="text-brand shrink-0" />
                <div className="flex flex-col">
                  <a href="mailto:info@hiramaa.com" className="hover:text-brand transition-colors">info@hiramaa.com</a>
                  <a href="mailto:sales@hiramaa.com" className="hover:text-brand transition-colors">sales@hiramaa.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} All rights reserved by HIRA MAA group.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
