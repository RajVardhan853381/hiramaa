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

function BusinessRow({ biz, index }: { biz: typeof BUSINESSES[0]; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div
      className="relative w-full py-16 md:py-24 overflow-hidden border-b border-slate-100 last:border-b-0"
    >
      <div
        className={`container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
          isEven ? "" : "md:[&>*:first-child]:order-2"
        }`}
      >
        {/* Image side */}
        <motion.div
          className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[3/2] border border-black/[0.06] shadow-sm group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
        >
          <Image
            src={biz.image}
            alt={biz.name}
            fill
            className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Subtle vignette on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

          {/* Number & Icon Badge */}
          <div
            className="absolute top-4 left-4 h-10 px-3 rounded-xl flex items-center gap-2 text-white font-bold text-xs shadow-sm backdrop-blur-md"
            style={{ backgroundColor: biz.accent }}
          >
            <biz.icon size={16} />
            <span className="tabular-nums font-mono">{biz.number}</span>
          </div>
        </motion.div>

        {/* Content side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-3.5">
            <span 
              className="text-xs font-bold tracking-[0.25em] uppercase tabular-nums" 
              style={{ color: biz.accent }}
            >
              Division {biz.number}
            </span>
            <div className="h-[1px] w-8 bg-current opacity-25" style={{ color: biz.accent }} />
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">Enterprise</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-[-0.03em] leading-tight mb-2">
            {biz.name}
          </h3>
          <p className="text-sm sm:text-base font-semibold mb-4" style={{ color: biz.accent }}>
            {biz.tagline}
          </p>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-[55ch] mb-6">
            {biz.desc}
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-2.5 mb-8">
            {biz.highlights.map((h) => (
              <div key={h} className="flex items-center gap-2">
                <CheckCircle2 size={15} style={{ color: biz.accent }} className="shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">{h}</span>
              </div>
            ))}
          </div>

          {/* CTA with tactile feedback and division accent hover */}
          <Link
            href={biz.link}
            className="inline-flex items-center gap-2.5 font-semibold text-xs sm:text-sm tracking-wide group active:scale-[0.97] transition-transform duration-160 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ color: biz.accent }}
          >
            <span 
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center transition-[background-color,color,transform] duration-160 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:text-white"
              style={{ borderColor: biz.accent }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = biz.accent;
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = biz.accent;
              }}
            >
              <ArrowRight size={14} className="transition-transform duration-160 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5" />
            </span>
            <span>Explore Division</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default function Businesses() {
  return (
    <section id="businesses" className="bg-slate-50/40">
      {/* Section Header */}
      <div className="container mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="inline-flex items-center gap-2 text-brand text-xs font-bold tracking-[0.25em] uppercase mb-3">
            <span className="w-6 h-[2px] bg-brand inline-block" />
            Our Companies
            <span className="w-6 h-[2px] bg-brand inline-block" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-[-0.035em] mb-4">
            Our Diversified <span className="text-brand">Ecosystem</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-[55ch] mx-auto leading-relaxed">
            Six focused companies. One unified mission — to build a sustainable, thriving rural India through agriculture, renewable energy, and ethical enterprise.
          </p>
        </motion.div>

        {/* Division quick-nav pills with instant press feedback */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mt-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        >
          {BUSINESSES.map((b) => (
            <a
              key={b.id}
              href={`#biz-${b.id}`}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-white hover:border-slate-300 text-xs font-medium text-slate-700 shadow-2xs transition-[border-color,transform,box-shadow] duration-160 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96]"
            >
              <b.icon size={13} style={{ color: b.accent }} />
              <span>{b.name}</span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Alternating rows */}
      <div className="border-t border-slate-100">
        {BUSINESSES.map((biz, idx) => (
          <div key={biz.id} id={`biz-${biz.id}`}>
            <BusinessRow biz={biz} index={idx} />
          </div>
        ))}
      </div>
    </section>
  );
}
