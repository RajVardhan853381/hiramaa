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
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled || !isHome
          ? "glass py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-16 h-16 transition-all duration-500 group-hover:scale-105 shrink-0">
            <Image 
              src="/original-assets/cropped-logo-2-2-300x300.png" 
              alt="Hira Maa Group Logo" 
              fill
              className="object-contain"
              sizes="64px"
            />
          </div>
          <span className={cn("text-xl font-bold tracking-tight hidden sm:block transition-colors duration-300", (isScrolled || !isHome) ? "text-slate-900" : "text-white drop-shadow-md")}>
            Hira Maa <span className={(isScrolled || !isHome) ? "text-brand" : "text-emerald-400"}>Group</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-emerald-400",
                (isScrolled || !isHome) ? "text-slate-700" : "text-white/90 hover:text-white drop-shadow-sm"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          className={cn("md:hidden p-2 rounded-md transition-colors", (isScrolled || !isHome) ? "text-slate-700" : "text-white")}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/20"
          >
            <div className="flex flex-col py-4 px-6 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/80 font-medium hover:text-brand transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
