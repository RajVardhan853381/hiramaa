"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Hiramaa FPO", href: "/hiramaa-fpo" },
  { name: "Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolid = isScrolled || !isHome;

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-[background-color,padding,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]",
        isSolid
          ? "glass py-2.5 shadow-sm border-b border-black/[0.06]"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-3 group active:scale-[0.98] transition-transform duration-160"
        >
          <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-200 group-hover:scale-105 shrink-0">
            <Image 
              src="/original-assets/cropped-logo-2-2-300x300.png" 
              alt="Hira Maa Group Logo" 
              fill
              className="object-contain"
              sizes="56px"
              priority
            />
          </div>
          <span 
            className={cn(
              "text-lg md:text-xl font-bold tracking-tight hidden sm:block transition-colors duration-200", 
              isSolid ? "text-slate-900" : "text-white drop-shadow-sm"
            )}
          >
            Hira Maa <span className={isSolid ? "text-brand" : "text-emerald-400"}>Group</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1.5 bg-black/[0.03] backdrop-blur-md p-1 rounded-full border border-black/[0.04]">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-[color,background-color,transform] duration-160 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96]",
                  isActive
                    ? isSolid
                      ? "bg-brand text-white shadow-xs"
                      : "bg-white/20 text-white backdrop-blur-md"
                    : isSolid
                      ? "text-slate-600 hover:text-slate-950 hover:bg-black/[0.04]"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          className={cn(
            "md:hidden p-2 rounded-xl transition-[transform,background-color] duration-140 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-90", 
            isSolid ? "text-slate-800 hover:bg-black/5" : "text-white hover:bg-white/10"
          )}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, scale: 0.98, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -8 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden glass border-t border-black/[0.06] shadow-lg mt-2 mx-4 rounded-2xl overflow-hidden origin-top"
          >
            <div className="flex flex-col py-3 px-4 gap-1">
              {NAV_LINKS.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.16, delay: idx * 0.03, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block px-3 py-2.5 rounded-xl font-medium text-sm transition-[color,background-color,transform] duration-140 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.98]",
                        isActive 
                          ? "bg-brand text-white font-semibold" 
                          : "text-slate-700 hover:bg-black/5"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
