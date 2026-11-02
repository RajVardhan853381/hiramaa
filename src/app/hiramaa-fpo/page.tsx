"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Heart, Zap, Leaf } from "lucide-react";

export default function HiramaaFPOPage() {
  return (
    <>
      <Navbar />
      <main className="relative flex-1 w-full bg-slate-50/60 overflow-hidden">
        {/* Parallax Hero Section */}
        <div className="relative h-[75vh] min-h-[540px] w-full flex items-center justify-center overflow-hidden bg-slate-950">
          <motion.div className="absolute inset-0 z-0">
            <Image 
              src="/original-assets/FPO.jpg" 
              alt="Hiramaa FPO Fields" 
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            {/* Multi-stop Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/30" />
          </motion.div>

          <div className="relative z-10 container mx-auto px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
            >
              <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-[0.25em] uppercase mb-6 shadow-sm">
                Empowering Rural India
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.035em] mb-6">
                Hiramaa FPO
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-normal">
                A powerful collective of over 1000 farmer families, specializing in the cultivation of nutrient-rich millets, pulses, and traditional medicinal plants.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Content Section with Negative Margin for Depth */}
        <div className="relative z-20 -mt-24 container mx-auto px-6 md:px-12 pb-24">
          <div className="glass-card rounded-3xl p-8 md:p-14 border border-white/60 shadow-lg">
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
              <div>
                <div className="flex items-center gap-2 text-brand text-xs font-bold tracking-[0.25em] uppercase mb-4">
                  <Leaf size={16} />
                  <span>Our Heritage</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-[-0.03em] leading-tight mb-6">
                  Transforming Agriculture in Bastar
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-5">
                  Established in 2020 in the Bastar Region of Chhattisgarh, we are scripting a story of transformation. Our deep partnerships with thousands of farmers and tribal producers from Left Wing Extremism (LWE) affected districts ensure fair prices and guaranteed market linkages.
                </p>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  We maintain a strictly verified, chemical-free supply chain of premium superfoods — connecting traditional farmer knowledge with national food security and sustainable economic independence.
                </p>
              </div>
              <div className="relative aspect-video rounded-3xl overflow-hidden card-craft group bg-slate-100">
                <Image 
                  src="/original-assets/635116bf-c74b-4e6f-8d59-c80f2e417b97-rfz6jnyj0b6lb7mcca4nxzt513eh3t8zf99hdiuadw.jpg" 
                  alt="Farmers" 
                  fill 
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-slate-50/80 p-8 sm:p-10 rounded-3xl border border-slate-200/80 card-craft">
                <div className="w-12 h-12 bg-brand/10 text-brand rounded-2xl flex items-center justify-center mb-6">
                  <Target size={26} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  To become India&apos;s most trusted farmer-producer organization delivering pure, natural, and nutritious food products to every household.
                </p>
              </div>

              <div className="bg-slate-50/80 p-8 sm:p-10 rounded-3xl border border-slate-200/80 card-craft">
                <div className="w-12 h-12 bg-brand/10 text-brand rounded-2xl flex items-center justify-center mb-6">
                  <ShieldCheck size={26} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Our Mission</h3>
                <ul className="space-y-3 text-slate-600 text-sm sm:text-base">
                  <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 bg-brand rounded-full shrink-0" /> Support farmers with direct fair pricing & modern training</li>
                  <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 bg-brand rounded-full shrink-0" /> Promote traditional millet cultivation and wellness culture</li>
                  <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 bg-brand rounded-full shrink-0" /> High-quality grading, processing, and packaging standards</li>
                  <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 bg-brand rounded-full shrink-0" /> Build resilient supply chains directly from farm gate to consumer</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <span className="text-brand text-xs font-bold tracking-[0.25em] uppercase mb-3 inline-block">Values in Action</span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-[-0.03em] mb-10">Our Guiding Pillars</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { icon: Leaf, title: "Sustainability", desc: "Promoting eco-friendly farming & organic soil replenishment." },
                  { icon: Heart, title: "Integrity & Trust", desc: "Transparent producer linkages and fair community margins." },
                  { icon: Target, title: "Innovation", desc: "Using advanced bio-testing and climate-resilient crop varieties." },
                  { icon: Zap, title: "Future-Focused", desc: "Investing in sustainable energy and generational rural livelihoods." }
                ].map((val, idx) => (
                  <div key={idx} className="card-craft p-6 rounded-2xl bg-white text-left group">
                    <div className="w-11 h-11 bg-emerald-50 text-brand rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand group-hover:text-white transition-colors duration-160">
                      <val.icon size={20} />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2 text-base tracking-tight">{val.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
