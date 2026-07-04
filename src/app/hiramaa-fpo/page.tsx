"use client";

import Navbar from"@/components/Navbar";
import Footer from"@/components/Footer";
import Image from"next/image";
import { motion } from"framer-motion";
import { ShieldCheck, Target, Heart, Zap, Leaf } from"lucide-react";

export default function HiramaaFPOPage() {
 return (
 <>
 <Navbar />
 <main className="relative flex-1 w-full bg-zinc-50 overflow-hidden">
 {/* Parallax Hero Section */}
 <div className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
 <motion.div className="absolute inset-0 z-0">
 <Image 
 src="/original-assets/FPO.jpg" 
 alt="Hiramaa FPO Fields" 
 fill
 className="object-cover"
 sizes="100vw"
 loading="eager"
 fetchPriority="high"
 onError={(e) => { e.currentTarget.src ="/hero.png"; }}
 />
 {/* Deep Gradient Overlay */}
 <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-zinc-50" />
 </motion.div>

 <motion.div
 className="relative z-10 container mx-auto px-6 text-center text-white"
 >
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, ease:"easeOut" }}
 >
 <span className="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold tracking-widest uppercase mb-6 shadow-2xl">
 Empowering Rural India
 </span>
 <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 drop-shadow-2xl">
 Hiramaa FPO
 </h1>
 <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-xl font-medium">
 A powerful collective of over 1000 farmer families, specializing in the cultivation of nutrient-rich millets, pulses, and traditional medicinal plants.
 </p>
 </motion.div>
 </motion.div>
 </div>

 {/* Content Section with Negative Margin for Depth */}
 <div className="relative z-20 -mt-32 container mx-auto px-6 md:px-12 pb-24">
 <div className="bg-white/80 backdrop-blur-2xl rounded-3xl p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50">
 
 <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
 <div>
 <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
 <Leaf className="text-brand" size={32} /> Our Story
 </h2>
 <p className="text-lg text-foreground/70 leading-relaxed mb-6">
 Established in 2020 in the Bastar Region of Chhattisgarh, we are scripting a story of transformation. Our deep partnerships with thousands of farmers, tribal producers from Left Wing Extremism (LWE) affected districts, and the Chhattisgarh state government ensures them a fair price and assured market for their produce.
 </p>
 <p className="text-lg text-foreground/70 leading-relaxed">
 In addition, it ensures consistent supply of premium, pesticide and chemical free ingredients, allowing us to serve a global market with authentic, high-quality millets and millet-based products.
 </p>
 </div>
 <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group">
 <Image 
 src="/original-assets/635116bf-c74b-4e6f-8d59-c80f2e417b97-rfz6jnyj0b6lb7mcca4nxzt513eh3t8zf99hdiuadw.jpg" 
 alt="Farmers" 
 fill 
 className="object-cover group-hover:scale-105 transition-transform duration-700" 
 sizes="(max-width: 1024px) 100vw, 50vw"
 onError={(e) => { e.currentTarget.style.display = 'none'; }}
 />
 <div className="absolute inset-0 bg-brand/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700" />
 </div>
 </div>

 <div className="grid md:grid-cols-2 gap-8 mb-20">
 <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-inner hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
 <div className="w-14 h-14 bg-brand/10 text-brand rounded-2xl flex items-center justify-center mb-6">
 <Target size={32} />
 </div>
 <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
 <p className="text-foreground/70 leading-relaxed text-lg">
 To become India&apos;s most trusted farmer-producer organization delivering pure, natural, and nutritious food products to every household.
 </p>
 </div>
 <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-inner hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
 <div className="w-14 h-14 bg-brand/10 text-brand rounded-2xl flex items-center justify-center mb-6">
 <ShieldCheck size={32} />
 </div>
 <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
 <ul className="space-y-3 text-foreground/70 text-lg">
 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand rounded-full" /> Support farmers with better prices & training</li>
 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand rounded-full" /> Promote millets and healthy food culture</li>
 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand rounded-full" /> High-quality processing and packaging standards</li>
 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand rounded-full" /> Build strong supply chains from farm to consumer</li>
 </ul>
 </div>
 </div>

 <div className="text-center mb-16">
 <h2 className="text-3xl font-bold mb-12">Our Values</h2>
 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
 {[
 { icon: Leaf, title:"Sustainability", desc:"Promoting eco-friendly farming & renewable energy." },
 { icon: Heart, title:"Integrity & Trust", desc:"Honest practices and transparent processes." },
 { icon: Target, title:"Innovation", desc:"Using advanced technology and high-tech nurseries." },
 { icon: Zap, title:"Future-Focused", desc:"Investing in clean energy and rural development." }
 ].map((val, idx) => (
 <div key={idx} className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:border-brand/30 transition-all duration-300 group">
 <div className="w-12 h-12 bg-slate-50 text-brand rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
 <val.icon size={24} />
 </div>
 <h4 className="font-bold mb-2">{val.title}</h4>
 <p className="text-sm text-foreground/60">{val.desc}</p>
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
