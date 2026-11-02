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
    <div className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden bg-[#0a3d2e]">
      {/* ── LEFT PANEL: Deep Forest Green ── */}
      <div className="relative z-10 flex flex-col justify-between w-full md:w-[48%] lg:w-[44%] bg-[#0a3d2e] px-6 sm:px-10 md:px-14 pt-28 sm:pt-32 md:pt-36 pb-12 md:pb-12 shrink-0">
        {/* Vertical SINCE label */}
        <span
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-[60%] rotate-90 text-[10px] tracking-[0.35em] uppercase text-white/30 font-semibold whitespace-nowrap select-none"
        >
          Since 2018
        </span>

        {/* Top content block */}
        <div>
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="w-8 h-[2px] bg-emerald-400" />
            <span className="text-emerald-400 text-xs tracking-[0.25em] uppercase font-semibold">
              Sustainable Future
            </span>
          </div>

          {/* Main headline — editorial typography with tight letter spacing */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
            className="text-white font-extrabold leading-[1.02] tracking-[-0.035em] mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5.2rem)" }}
          >
            Empowering
            <br />
            <span className="text-emerald-400">Rural</span>
            <br />
            India.
          </motion.h1>

          {/* Rule line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.35, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="w-full h-[1px] bg-white/10 mb-6 origin-left"
          />

          {/* Description — capped line length for readability */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="text-white/70 text-base md:text-lg leading-relaxed max-w-[42ch] mb-8"
          >
            A diversified group working across agriculture, dairy, solar energy, and environmental products — rooted in Chhattisgarh since 2018.
          </motion.p>

          {/* Call to action with physical press feedback */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.28, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <Link
              href="/products"
              className="group inline-flex items-center gap-3 px-5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm tracking-wide shadow-sm hover:shadow-md transition-[transform,background-color,box-shadow] duration-160 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]"
            >
              <span>Explore Products</span>
              <ArrowRight size={16} className="transition-transform duration-160 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/about-us"
              className="px-4 py-3 rounded-full text-white/70 hover:text-white text-sm font-medium tracking-wide transition-[color,transform] duration-160 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]"
            >
              About Our Group
            </Link>
          </motion.div>
        </div>

        {/* Bottom stats row — tabular numbers to avoid layout jitter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="mt-10 md:mt-14 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-6"
        >
          {STATS.map((s, i) => (
            <div key={i} className="group">
              <div className="text-2xl md:text-3xl font-extrabold text-white leading-none mb-1 tabular-nums tracking-tight">
                {s.value}
              </div>
              <div className="text-xs text-white/50 uppercase tracking-[0.18em] font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── RIGHT PANEL: Landscape photography with balanced vignette ── */}
      <motion.div
        className="relative flex-1 min-h-[320px] md:min-h-full overflow-hidden"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        <Image
          src="/hero-landscape.png"
          alt="Lush green farmland at golden hour in Chhattisgarh"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 56vw"
          priority
        />
        {/* Multi-stop eased gradient vignette for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a3d2e] via-[#0a3d2e]/30 to-transparent" />

        {/* Floating year watermark */}
        <div
          className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-white/[0.08] font-black select-none pointer-events-none tabular-nums"
          style={{ fontSize: "clamp(4.5rem, 11vw, 9.5rem)", lineHeight: 0.85 }}
        >
          2018
        </div>

        {/* Small badge */}
        <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-md border border-white/15 rounded-full px-4 py-1.5 flex items-center gap-2.5 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/90 text-xs font-semibold tracking-wider uppercase">
            Chhattisgarh, India
          </span>
        </div>
      </motion.div>
    </div>
  );
}
