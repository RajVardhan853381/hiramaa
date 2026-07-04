"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Calendar, Users, Leaf, Zap } from "lucide-react";

const COMPANIES = [
  {
    name: "Matrichhaya Foundation",
    tag: "Dairy & Welfare",
    description: "Dedicated to cow welfare and conservation, focusing on indigenous breeds. Sustains cow care through milk sales and produces organic vermicompost.",
    image: "/business-dairy.png",
    accent: "#0284c7",
  },
  {
    name: "Hiramaa Agriculture & Solution",
    tag: "Manufacturing",
    description: "Manufactures high-durability agricultural machinery: tractor trolleys, ploughs, water tankers, harvester trolleys, and custom farm implements.",
    image: "/business-agri.png",
    accent: "#059669",
  },
  {
    name: "Hiramaa Solar Energy Pvt. Ltd.",
    tag: "Clean Energy",
    description: "Full-spectrum solar EPC services for homes, offices, industries. In-house O&M team ensures maximum system uptime and output.",
    image: "/business-solar.png",
    accent: "#d97706",
  },
  {
    name: "Vishakha Estate Pvt. Ltd.",
    tag: "Horticulture",
    description: "Produces Thai guava, apple ber, custard apple and more through advanced greenhouse farming and precision horticulture techniques.",
    image: "/business-hort.png",
    accent: "#16a34a",
  },
  {
    name: "Vishakha Tissue Culture Lab",
    tag: "Biotech",
    description: "Uses advanced biotechnology to develop high-quality disease-free plantlets from sugar to rooting stage, supplied to farmers and nurseries.",
    image: "/business-hort.png",
    accent: "#7c3aed",
  },
  {
    name: "Hiramaa FPO",
    tag: "Farmer Collective",
    description: "Works with 1000+ farmer families to provide knowledge, technical guidance, and direct market access ensuring fair and profitable prices.",
    image: "/business-fpo.png",
    accent: "#b45309",
  },
];

const MILESTONES = [
  { year: "2018", event: "Hira Maa Group founded on 21st June in Raipur, Chhattisgarh." },
  { year: "2019", event: "Matrichhaya Foundation launched for cow welfare & dairy operations." },
  { year: "2020", event: "Hiramaa FPO registered with 1000+ farmer families from Bastar region." },
  { year: "2021", event: "Hiramaa Solar Energy begins EPC installations across Chhattisgarh." },
  { year: "2022", event: "Vishakha Tissue Culture Lab opens; first high-tech nursery batch deployed." },
  { year: "2023", event: "Barbarik Energy division launches Lithium-Ion battery product line." },
];

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-white">

        {/* ── HERO SECTION ── */}
        <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden flex items-end">
          <Image
            src="/about-village.png"
            alt="Chhattisgarh Village and Farmland"
            fill
            className="object-cover object-center"
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-slate-900/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 to-transparent" />

          <div className="relative z-10 container mx-auto px-6 md:px-12 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                <span className="w-6 h-[2px] bg-emerald-400 inline-block" />
                Est. 2018 · Chhattisgarh, India
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mb-6">
                About <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
                  Hira Maa Group
                </span>
              </h1>
              <p className="text-white/70 text-lg max-w-xl leading-relaxed">
                A diversified conglomerate rooted in sustainability, empowering rural communities across agriculture, energy, dairy, and biotechnology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── STORY SECTION ── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[2px] bg-brand" />
                  <span className="text-brand text-xs tracking-[0.3em] uppercase font-bold">Our Story</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                  Built on Purpose, <br />Grown with <span className="text-brand">People.</span>
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-6">
                  Established on <strong className="text-slate-800">21st June 2018</strong>, Hira Maa Group was born with a clear vision: to contribute to sustainable development across agriculture, energy, social welfare, and technology. What began as a focused effort in Chhattisgarh has grown into a multi-company ecosystem, each entity working with a clear purpose and long-term commitment.
                </p>
                <p className="text-slate-500 text-lg leading-relaxed mb-10">
                  Today, with deep partnerships in LWE-affected Bastar districts, we work directly with over 1000 farmer families, bringing them fair prices, modern technology, and access to national markets.
                </p>

                {/* Key facts row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-100">
                  {[
                    { icon: Calendar, value: "2018", label: "Founded" },
                    { icon: Users, value: "1000+", label: "Families" },
                    { icon: Leaf, value: "6+", label: "Companies" },
                    { icon: Zap, value: "50+ MW", label: "Solar" },
                  ].map((f) => (
                    <div key={f.label} className="text-center">
                      <f.icon size={18} className="text-brand mx-auto mb-2" />
                      <div className="text-2xl font-extrabold text-slate-900">{f.value}</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">{f.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Vision & Mission cards */}
              <motion.div
                className="space-y-5"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative bg-[#0a3d2e] text-white rounded-3xl p-10 overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-2xl" />
                  <span className="text-emerald-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Our Vision</span>
                  <h3 className="text-2xl font-extrabold mb-4">A Sustainable Ecosystem for Every Indian</h3>
                  <p className="text-white/70 leading-relaxed">
                    To create a thriving ecosystem by integrating agriculture, technology, renewable energy, and social responsibility — making India self-sufficient at the grassroots level.
                  </p>
                </div>

                <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-10">
                  <span className="text-brand text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Our Mission</span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-5">Empower. Innovate. Sustain.</h3>
                  <ul className="space-y-3">
                    {[
                      "Empower farmers with fair prices, training, and market access",
                      "Promote clean energy adoption across Chhattisgarh",
                      "Deliver quality-driven products through ethical practices",
                      "Build thriving rural communities through innovation",
                    ].map((m) => (
                      <li key={m} className="flex items-start gap-3 text-slate-600 text-sm">
                        <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section className="py-20 bg-emerald-50/50">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-brand text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Our Journey</span>
              <h2 className="text-4xl font-extrabold text-slate-900">Milestones That Define Us</h2>
            </motion.div>

            <div className="relative max-w-3xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-[11px] md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-[2px] bg-emerald-100" />

              <div className="space-y-10">
                {MILESTONES.map((m, i) => (
                  <motion.div
                    key={m.year}
                    className={`relative flex gap-8 md:gap-0 items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    {/* Dot */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-brand border-4 border-white shadow-md shrink-0 z-10" />

                    {/* Card */}
                    <div className={`ml-12 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
                      <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
                        <span className="text-brand font-extrabold text-sm">{m.year}</span>
                        <p className="text-slate-700 mt-1 text-sm leading-relaxed">{m.event}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── OUR COMPANIES ── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-brand text-xs font-bold tracking-[0.3em] uppercase mb-3 block">The Group</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Companies</h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                Six focused ventures. One shared mission of sustainable rural empowerment.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMPANIES.map((c, i) => (
                <motion.div
                  key={i}
                  className="group rounded-3xl overflow-hidden border border-slate-100 bg-white shadow-sm hover:shadow-[0_16px_40px_rgba(5,150,105,0.12)] hover:-translate-y-2 transition-all duration-300"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <span
                      className="absolute top-4 left-4 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                      style={{ backgroundColor: c.accent }}
                    >
                      {c.tag}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="text-lg font-extrabold text-slate-900 mb-3">{c.name}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{c.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EPC BANNER ── */}
        <section className="py-20 bg-[#0a3d2e] relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <Image src="/about-village.png" alt="" fill className="object-cover" sizes="100vw" />
          </div>
          <div className="relative container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-emerald-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Engineering · O&M</span>
                <h2 className="text-4xl font-extrabold text-white mb-6">Built In-House. <br />Maintained With Pride.</h2>
                <p className="text-white/70 leading-relaxed">
                  Our in-house EPC capabilities allow us to control costs, timelines, and quality. Using proprietary monitoring software and central management systems, we maximise uptime and performance across every installation.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { label: "Engineering", desc: "Full design & system expertise in-house, using top-tier customised modules." },
                  { label: "Procurement", desc: "Direct tie-ups with leading manufacturers for the best technology at best value." },
                  { label: "Construction", desc: "Our own crews handle installation, testing, and commissioning end-to-end." },
                  { label: "O&M", desc: "Forecasting software and central monitoring to maximise utilisation rates." },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <CheckCircle2 size={18} className="text-emerald-400 mb-3" />
                    <h4 className="text-white font-bold mb-2">{s.label}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
