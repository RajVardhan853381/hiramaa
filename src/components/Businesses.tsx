"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wheat, Milk, Sun, Tractor, Sprout, Battery, CheckCircle2 } from "lucide-react";

const BUSINESSES = [
  {
    id: "fpo",
    number: "01",
    name: "Hira Maa FPO",
    tagline: "From Farm to Every Table",
    desc: "A powerful collective of over 1000 farmer families from Bastar, Chhattisgarh — sourcing and supplying the finest organic millets, pulses, dry fruits, and honey. Establishing a direct farm-to-consumer supply chain that ensures fair prices for farmers and premium quality for buyers.",
    image: "/business-fpo.png",
    highlights: ["1000+ Farmer Families", "Organic Millets & Pulses", "Direct Farm-to-Market", "Fair Trade Certified"],
    accent: "#059669",
    bg: "#f0fdf4",
    link: "/hiramaa-fpo",
    icon: Wheat,
    imageRight: false,
  },
  {
    id: "dairy",
    number: "02",
    name: "Matra-Chaya Dairy",
    tagline: "Pure. Ethical. Natural.",
    desc: "Rooted in indigenous cow welfare, Matra-Chaya Dairy focuses on ethical, self-sustained Gaushala management. Producing pure A2 milk and dairy products from indigenous breeds, with organic vermicompost as a sustainable by-product supporting circular agriculture.",
    image: "/business-dairy.png",
    highlights: ["500+ Indigenous Cows", "A2 Milk Products", "Organic Vermicompost", "Zero Waste Model"],
    accent: "#0284c7",
    bg: "#f0f9ff",
    link: "/products/dairy",
    icon: Milk,
    imageRight: true,
  },
  {
    id: "solar",
    number: "03",
    name: "Hiramaa Solar Energy",
    tagline: "Powering a Cleaner Tomorrow",
    desc: "Full-spectrum solar EPC (Engineering, Procurement & Construction) services for homes, offices, industries, and petrol pumps across Chhattisgarh. Our in-house O&M team ensures maximum uptime and performance across every installation.",
    image: "/business-solar.png",
    highlights: ["50+ MW Installed", "Rooftop & Ground Mount", "In-House O&M Team", "Net Metering Support"],
    accent: "#d97706",
    bg: "#fffbeb",
    link: "/products/solar",
    icon: Sun,
    imageRight: false,
  },
  {
    id: "agriculture",
    number: "04",
    name: "Hiramaa Agriculture and Solution",
    tagline: "Engineering India's Fields",
    desc: "Manufacturing high-durability farming machinery — tractor trolleys, ploughs, water tankers, harvester trolleys, and custom implements. Supplied to dealers, wholesalers, and directly to farmers, built to perform in the toughest field conditions.",
    image: "/business-agri.png",
    highlights: ["Tractor Trolleys", "Ploughs & Tillers", "Water Tankers", "Custom Farm Equipment"],
    accent: "#059669",
    bg: "#f0fdf4",
    link: "/products/agriculture",
    icon: Tractor,
    imageRight: true,
  },
  {
    id: "horticulture",
    number: "05",
    name: "Vishakha Estate & Tissue Culture Laboratory",
    tagline: "Growing the Future of Horticulture",
    desc: "Operating across agriculture and horticulture with greenhouse farming of Thai guava, apple ber, custard apple, and more. The Vishakha Tissue Culture Lab uses advanced biotechnology to grow high-quality disease-free plantlets supplied to farmers and nurseries.",
    image: "/business-hort.png",
    highlights: ["Greenhouse Farming", "Tissue Culture Lab", "10+ Fruit Varieties", "Farmer Nursery Supply"],
    accent: "#16a34a",
    bg: "#f0fdf4",
    link: "/products/farming",
    icon: Sprout,
    imageRight: false,
  },
  {
    id: "barbarik",
    number: "06",
    name: "Lithium Ion Battery",
    tagline: "The Future of Energy Storage",
    desc: "Advanced Lithium-Ion battery solutions for electric vehicles, solar storage systems, and industrial applications. Barbarik batteries are engineered for high energy density, long cycle life, and safe reliable performance in India's demanding conditions.",
    image: "/business-battery.png",
    highlights: ["EV Battery Packs", "Solar Storage", "Industrial Grade", "BMS Protected"],
    accent: "#7c3aed",
    bg: "#f5f3ff",
    link: "/products/lithium-ion",
    icon: Battery,
    imageRight: true,
  },
];

function BusinessRow({ biz }: { biz: typeof BUSINESSES[0] }) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: biz.bg }}
    >
      {/* Section number watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
        style={{ opacity: 0.04 }}
      >
        <span
          className="font-black text-slate-900"
          style={{ fontSize: "clamp(10rem, 25vw, 22rem)", lineHeight: 1 }}
        >
          {biz.number}
        </span>
      </div>

      <div
        className={`relative z-10 container mx-auto px-6 md:px-12 py-20 md:py-28 grid md:grid-cols-2 gap-12 md:gap-20 items-center ${
          biz.imageRight ? "" : "md:[&>*:first-child]:order-2"
        }`}
      >
        {/* Image side */}
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-[3/2]"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={biz.image}
            alt={biz.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Color tint overlay on hover */}
          <div
            className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-500"
            style={{ backgroundColor: biz.accent }}
          />
          {/* Number tag */}
          <div
            className="absolute top-5 left-5 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg"
            style={{ backgroundColor: biz.accent }}
          >
            <biz.icon size={20} />
          </div>
        </motion.div>

        {/* Content side */}
        <motion.div
          initial={{ opacity: 0, x: biz.imageRight ? -28 : 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: biz.accent }}>
              {biz.number}
            </span>
            <div className="h-[1px] w-10 bg-current opacity-30" style={{ color: biz.accent }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-slate-400">Division</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            {biz.name}
          </h2>
          <p className="text-base font-semibold mb-5" style={{ color: biz.accent }}>
            {biz.tagline}
          </p>
          <div className="w-12 h-1 rounded-full mb-6" style={{ backgroundColor: biz.accent }} />

          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
            {biz.desc}
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-3 mb-10">
            {biz.highlights.map((h) => (
              <div key={h} className="flex items-center gap-2.5">
                <CheckCircle2 size={16} style={{ color: biz.accent }} className="shrink-0" />
                <span className="text-sm font-medium text-slate-700">{h}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href={biz.link}
            className="inline-flex items-center gap-3 font-bold text-sm tracking-wide group"
            style={{ color: biz.accent }}
          >
            <span className="w-10 h-10 rounded-full border-2 flex items-center justify-center group-hover:scale-110 transition-transform"
              style={{ borderColor: biz.accent }}>
              <ArrowRight size={16} />
            </span>
            Learn More About This Division
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default function Businesses() {
  return (
    <section id="businesses" className="bg-white">
      {/* Section Header */}
      <div className="container mx-auto px-6 md:px-12 pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-brand text-xs font-bold tracking-[0.3em] uppercase mb-4">
            <span className="w-8 h-[2px] bg-brand inline-block" />
            Our Companies
            <span className="w-8 h-[2px] bg-brand inline-block" />
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Our Diversified <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-emerald-400">
              Ecosystem
            </span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Six focused companies. One unified mission — to build a sustainable, thriving rural India through agriculture, energy, and innovation.
          </p>
        </motion.div>

        {/* Division quick-nav pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {BUSINESSES.map((b) => (
            <a
              key={b.id}
              href={`#biz-${b.id}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-all hover:scale-105"
              style={{ borderColor: b.accent, color: b.accent, backgroundColor: b.bg }}
            >
              <b.icon size={14} />
              {b.name}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-slate-100" />

      {/* Alternating rows */}
      <div className="divide-y divide-slate-100">
        {BUSINESSES.map((biz) => (
          <div key={biz.id} id={`biz-${biz.id}`}>
            <BusinessRow biz={biz} />
          </div>
        ))}
      </div>
    </section>
  );
}
