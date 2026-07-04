"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const STATS = [
  { value: "1000+", label: "Acres Farmed" },
  { value: "6", label: "Companies" },
  { value: "500+", label: "Dairy Cows" },
  { value: "50+ MW", label: "Solar Capacity" },
];

export default function Hero() {
  return (
    <div
      className="relative w-full min-h-screen flex overflow-hidden bg-white"
      style={{ paddingTop: 0 }}
    >
      {/* ── LEFT PANEL: Deep Forest Green ── */}
      <div
        className="relative z-10 flex flex-col justify-between w-full md:w-[45%] bg-[#0a3d2e] px-8 md:px-14 pt-32 md:pt-36 pb-60 md:pb-10 shrink-0"
      >
        {/* Vertical SINCE label */}
        <span
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-[60%] rotate-90 text-[10px] tracking-[0.35em] uppercase text-white/30 font-medium whitespace-nowrap select-none"
        >
          Since 2018
        </span>

        {/* Top label */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-[2px] bg-emerald-400" />
            <span className="text-emerald-400 text-xs tracking-[0.3em] uppercase font-semibold">
              Sustainable Future
            </span>
          </div>

          {/* Main headline — big, stacked, editorial */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-white font-extrabold leading-[1.0] tracking-tight mb-8"
            style={{ fontSize: "clamp(2.8rem, 5vw, 5.5rem)" }}
          >
            Empowering
            <br />
            <span className="text-emerald-400">Rural</span>
            <br />
            India.
          </motion.h1>

          {/* Rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="w-full h-[1px] bg-white/10 mb-8 origin-left"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/60 text-base leading-relaxed max-w-xs mb-10"
          >
            A diversified group working across agriculture, dairy, solar energy, and environmental products — rooted in Chhattisgarh since 2018.
          </motion.p>

          {/* CTA — minimal text link style */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex items-center gap-6"
          >
            <Link
              href="/products"
              className="group flex items-center gap-3 text-white font-semibold text-sm tracking-wide"
            >
              <span className="w-10 h-10 rounded-full border border-emerald-400 flex items-center justify-center group-hover:bg-emerald-400 transition-colors duration-300">
                <ArrowRight size={16} className="text-emerald-400 group-hover:text-white transition-colors duration-300" />
              </span>
              Explore Our Products
            </Link>
            <Link
              href="/about-us"
              className="text-white/40 hover:text-white text-sm font-medium tracking-wide transition-colors"
            >
              About Us
            </Link>
          </motion.div>
        </div>

        {/* Bottom stats row — inline editorial style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-8"
        >
          {STATS.map((s, i) => (
            <div key={i}>
              <div className="text-2xl md:text-3xl font-extrabold text-white leading-none mb-1">
                {s.value}
              </div>
              <div className="text-[11px] text-white/40 uppercase tracking-[0.2em] font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── RIGHT PANEL: Full-bleed landscape image ── */}
      <motion.div
        className="relative hidden md:block flex-1 overflow-hidden"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/hero-landscape.png"
          alt="Lush green farmland at golden hour"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 0px, 55vw"
          loading="eager"
          fetchPriority="high"
        />
        {/* Subtle left-edge vignette so it doesn't clash with green panel */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a3d2e]/40 via-transparent to-transparent" />

        {/* Floating year watermark */}
        <div
          className="absolute bottom-8 right-8 text-white/10 font-extrabold select-none pointer-events-none"
          style={{ fontSize: "clamp(4rem, 10vw, 9rem)", lineHeight: 1 }}
        >
          2018
        </div>

        {/* Small caption tag on image — bottom left to avoid navbar overlap */}
        <div className="absolute bottom-8 left-8 bg-black/30 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/80 text-xs font-medium tracking-wider uppercase">
            Chhattisgarh, India
          </span>
        </div>
      </motion.div>

      {/* Mobile: image strip at bottom */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 h-48 overflow-hidden">
        <Image
          src="/hero-landscape.png"
          alt="Lush green farmland"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 0px"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d2e] via-[#0a3d2e]/60 to-transparent" />
      </div>
    </div>
  );
}
