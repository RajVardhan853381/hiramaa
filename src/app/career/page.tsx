"use client";

import Navbar from"@/components/Navbar";
import Footer from"@/components/Footer";
import { Briefcase, Lightbulb, Users, Shield, Send } from"lucide-react";
import Image from"next/image";
import { FormEvent, useState } from"react";

export default function CareerPage() {
 const [cvName, setCvName] = useState("");
 const [photoName, setPhotoName] = useState("");
 const [formStatus, setFormStatus] = useState("");

 const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
 event.preventDefault();

 const formData = new FormData(event.currentTarget);
 const name = String(formData.get("name") || "").trim();
 const email = String(formData.get("email") || "").trim();
 const phone = String(formData.get("phone") || "").trim();
 const cv = formData.get("cv");

 if (!(cv instanceof File) || !cv.name) {
 setFormStatus("Please upload your CV before preparing the application email.");
 return;
 }

 if (cv.size > 5 * 1024 * 1024) {
 setFormStatus("Please upload a CV smaller than 5MB.");
 return;
 }

 const body = [
 `Name: ${name}`,
 `Email: ${email}`,
 `Phone: ${phone}`,
 `CV selected: ${cv.name}`,
 photoName ? `Photo selected: ${photoName}` : "",
 "",
 "Please attach the selected CV before sending this email.",
 ].filter(Boolean).join("\n");

 window.location.href = `mailto:info@hiramaa.com?subject=${encodeURIComponent(`Career Application - ${name}`)}&body=${encodeURIComponent(body)}`;
 setFormStatus("Your email app is opening. Attach your CV there before sending.");
 };

 return (
 <>
 <Navbar />
 <main className="flex-1 w-full pt-28 md:pt-32 pb-24 bg-zinc-50 relative overflow-hidden">
 {/* Background decorative depths */}
 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />
 <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

 <div className="container mx-auto px-6 md:px-12 relative z-10">
 
 <div className="max-w-4xl mx-auto text-center mb-20">
 <span className="inline-block py-1 px-4 rounded-full bg-brand/10 text-brand font-semibold tracking-widest uppercase mb-6 shadow-sm border border-brand/20">
 Join Our Team
 </span>
 <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
 Change your career. <br/>
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-emerald-400">Change your life.</span>
 </h1>
 <p className="text-xl text-foreground/70 leading-relaxed font-medium">
 A career with Hira Maa Group is full of challenges and learning opportunities. Work with the best. Be the best.
 </p>
 </div>

 <div className="grid xl:grid-cols-5 gap-10 xl:gap-12 items-start max-w-6xl mx-auto">
 
 {/* Values Section */}
 <div className="xl:col-span-2 space-y-8">
 <div className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden">
 <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2" />
 <h2 className="text-2xl font-bold mb-6">Our Core Values</h2>
 <ul className="space-y-6">
 {[
 { icon: Lightbulb, text:"Innovation & Creativity" },
 { icon: Briefcase, text:"Persistence & Passion" },
 { icon: Shield, text:"Transparency" },
 { icon: Users, text:"Team Collaboration" },
 ].map((val, idx) => (
 <li key={idx} className="flex items-center gap-4 group">
 <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all shadow-sm">
 <val.icon size={20} />
 </div>
 <span className="font-semibold text-foreground/80 group-hover:text-foreground transition-colors">{val.text}</span>
 </li>
))}
 </ul>
 </div>

 <div className="rounded-3xl overflow-hidden aspect-video relative shadow-xl">
 <Image 
 src="/original-assets/d6dbe48d-e532-40ee-96fe-df6b954aefd4-1-rgtq21b2umgq960o3h8ol0rm9oxnbrin5swlcnnyms.jpg" 
 alt="Team working" 
 fill
 className="object-cover"
 sizes="(max-width: 1280px) 100vw, 40vw"
 onError={(e) => { e.currentTarget.style.display = 'none'; }}
 />
 </div>
 </div>

 {/* Application Form */}
 <div className="xl:col-span-3 bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100">
 <h2 className="text-3xl font-bold mb-2">Apply Now</h2>
 <p className="text-foreground/60 mb-8">Please fill out the form below or email us your resume directly at <a href="mailto:info@hiramaa.com" className="text-brand hover:underline">info@hiramaa.com</a>.</p>
 
 <form className="space-y-6" onSubmit={handleSubmit}>
 <div className="grid sm:grid-cols-2 gap-6">
 <div className="space-y-2">
 <label className="text-sm font-semibold text-foreground/80">Your Name *</label>
 <input 
 type="text" 
 name="name"
 className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
 placeholder="John Doe"
 autoComplete="name"
 required
 />
 </div>
 <div className="space-y-2">
 <label className="text-sm font-semibold text-foreground/80">Your Email *</label>
 <input 
 type="email" 
 name="email"
 className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
 placeholder="john@example.com"
 autoComplete="email"
 required
 />
 </div>
 </div>

 <div className="space-y-2">
 <label className="text-sm font-semibold text-foreground/80">Your Contact Number *</label>
 <input 
 type="tel" 
 name="phone"
 className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
 placeholder="+91 98765 43210"
 autoComplete="tel"
 required
 />
 </div>

 <div className="space-y-2">
 <label className="text-sm font-semibold text-foreground/80">Submit Your CV (PDF/DOC) *</label>
 <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:border-brand hover:bg-brand/5 transition-colors cursor-pointer bg-slate-50">
 <input
 type="file"
 className="hidden"
 id="cv-upload"
 name="cv"
 accept=".pdf,.doc,.docx"
 required
 onChange={(event) => setCvName(event.currentTarget.files?.[0]?.name || "")}
 />
 <label htmlFor="cv-upload" className="cursor-pointer flex flex-col items-center">
 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand mb-3 shadow-sm">
 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
 </div>
 <span className="font-medium text-foreground/80">{cvName || "Click to upload your CV"}</span>
 <span className="text-xs text-foreground/50 mt-1">PDF, DOC, or DOCX. Maximum file size 5MB.</span>
 </label>
 </div>
 </div>

 <div className="space-y-2">
 <label className="text-sm font-semibold text-foreground/80">Submit Passport Size Photo (Optional)</label>
 <input 
 type="file" 
 name="photo"
 accept="image/*"
 className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand/10 file:text-brand hover:file:bg-brand/20 cursor-pointer"
 onChange={(event) => setPhotoName(event.currentTarget.files?.[0]?.name || "")}
 />
 {photoName && <p className="text-xs text-foreground/50">{photoName}</p>}
 </div>

 {formStatus && (
 <p role="status" className="text-sm font-medium text-brand-dark">
 {formStatus}
 </p>
 )}

 <button 
 type="submit" 
 className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand/25 flex items-center justify-center gap-2"
 >
 <Send size={18} />
 Submit Application
 </button>
 </form>
 </div>

 </div>
 </div>
 </main>
 <Footer />
 </>
);
}
