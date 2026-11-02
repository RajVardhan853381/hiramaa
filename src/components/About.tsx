"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Target, Lightbulb, Users } from "lucide-react";

const VALUES = [
  { icon: Target, label: "Vision-Driven", desc: "Every decision rooted in long-term purpose and ethical stewardship." },
  { icon: Lightbulb, label: "Innovation", desc: "Modern biotechnology and renewable tech empowering heritage practices." },
  { icon: Leaf, label: "Sustainability", desc: "Circular, zero-waste agricultural and energy models that regenerate nature." },
  { icon: Users, label: "Community", desc: "Direct market linkage and upliftment for 1000+ farmer families since 2018." },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">

        {/* Top Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-5"
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="w-8 h-[2px] bg-brand" />
          <span className="text-brand text-xs tracking-[0.25em] uppercase font-bold">Who We Are</span>
        </motion.div>

        {/* Main grid: heading left, text right */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-end mb-16 md:mb-20">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-[-0.035em] leading-[1.08]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            Pioneering a{" "}
            <span className="text-brand">
              Greener Future
            </span>{" "}
            for Rural India.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-[54ch] mb-6">
              Founded on <strong className="text-slate-900 font-semibold">21st June 2018</strong>, Hira Maa Group is a diversified organization built on trust, sustainability, and purpose. Across agriculture, horticulture, dairy, solar energy, and manufacturing — every initiative shares one mission: uplift rural communities through self-reliance.
            </p>
            <Link
              href="/about-us"
              className="inline-flex items-center gap-3 text-brand font-semibold text-sm tracking-wide group active:scale-[0.97] transition-transform duration-160"
            >
              <span className="w-9 h-9 rounded-full border border-brand/40 flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors duration-160">
                <ArrowRight size={15} className="transition-transform duration-160 group-hover:translate-x-0.5" />
              </span>
              <span>Read Our Full Story</span>
            </Link>
          </motion.div>
        </div>

        {/* Full-width image with stats overlay */}
        <motion.div
          className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden mb-16 md:mb-20 border border-black/[0.06] shadow-sm"
          style={{ height: "clamp(300px, 45vw, 540px)" }}
          initial={{ opacity: 0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          <Image
            src="/about-village.png"
            alt="Farmland and community development in Chhattisgarh"
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Subtle multi-stop gradient overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />

          {/* Floating stats row at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">
            <div className="flex flex-wrap gap-8 sm:gap-12 md:gap-16">
              {[
                { value: "2018", label: "Founded" },
                { value: "6", label: "Companies" },
                { value: "1000+", label: "Farmer Families" },
                { value: "Bastar", label: "Heartland" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-none tabular-nums tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-xs text-white/60 uppercase tracking-[0.16em] mt-1.5 font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top-right location badge */}
          <div className="absolute top-5 right-5 bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-1.5 flex items-center gap-2 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/90 text-xs font-semibold tracking-wider uppercase">
              Chhattisgarh, India
            </span>
          </div>
        </motion.div>

        {/* Values 4-grid with card-craft styling */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.label}
              className="card-craft rounded-2xl p-6 sm:p-7 bg-white group cursor-default"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-brand flex items-center justify-center mb-5 group-hover:bg-brand group-hover:text-white transition-colors duration-160">
                <v.icon size={20} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-base tracking-tight">{v.label}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
