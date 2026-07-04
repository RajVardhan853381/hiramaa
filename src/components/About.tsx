"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Target, Lightbulb, Users } from "lucide-react";

const VALUES = [
  { icon: Target, label: "Vision-Driven", desc: "Every decision rooted in long-term purpose." },
  { icon: Lightbulb, label: "Innovation", desc: "Technology and tradition working together." },
  { icon: Leaf, label: "Sustainability", desc: "Nature-first approach in everything we do." },
  { icon: Users, label: "Community", desc: "Uplifting 1000+ farming families since 2018." },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">

        {/* Top label */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-8 h-[2px] bg-brand" />
          <span className="text-brand text-xs tracking-[0.3em] uppercase font-bold">Who We Are</span>
        </motion.div>

        {/* Main grid: heading left, text right */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-end mb-20">
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Pioneering a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-emerald-400">
              Greener Future
            </span>
            <br />for Rural India.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Founded on <strong className="text-slate-800">21st June 2018</strong>, Hira Maa Group is a diversified organization built on trust, sustainability, and purpose. Across agriculture, horticulture, dairy, solar energy, and manufacturing — every company in our group shares one mission: uplift rural India.
            </p>
            <Link
              href="/about-us"
              className="inline-flex items-center gap-3 text-brand font-bold text-sm tracking-wide group"
            >
              <span className="w-10 h-10 rounded-full border-2 border-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all duration-300">
                <ArrowRight size={16} />
              </span>
              Read Our Full Story
            </Link>
          </motion.div>
        </div>

        {/* Full-width image with stats overlay */}
        <motion.div
          className="relative w-full rounded-3xl overflow-hidden mb-20"
          style={{ height: "clamp(300px, 45vw, 560px)" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/about-village.png"
            alt="Chhattisgarh Village and Farmland"
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark gradient for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

          {/* Floating stats row at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="flex flex-wrap gap-6 md:gap-12">
              {[
                { value: "2018", label: "Founded" },
                { value: "6+", label: "Companies" },
                { value: "1000+", label: "Farmer Families" },
                { value: "Bastar", label: "Heartland" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl md:text-4xl font-extrabold text-white leading-none">
                    {s.value}
                  </div>
                  <div className="text-xs text-white/50 uppercase tracking-widest mt-1 font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top-right location tag */}
          <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/80 text-xs font-semibold tracking-wider uppercase">
              Chhattisgarh, India
            </span>
          </div>
        </motion.div>

        {/* Values 4-grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.label}
              className="group bg-white border border-emerald-100 rounded-2xl p-7 hover:border-brand hover:shadow-[0_12px_40px_rgba(5,150,105,0.10)] hover:-translate-y-1.5 transition-all duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center text-brand mb-5 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                <v.icon size={22} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">{v.label}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
