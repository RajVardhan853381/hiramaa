"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, Lightbulb, Users, Shield, Send, UploadCloud, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { FormEvent, useState } from "react";

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
      <main className="flex-1 w-full pt-28 md:pt-32 pb-24 bg-slate-50/60 relative overflow-hidden">
        {/* Background ambient depth */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-emerald-50 text-brand font-semibold text-xs tracking-[0.25em] uppercase mb-4 border border-emerald-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Join Our Team
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-[-0.035em] mb-6">
              Change your career. <br/>
              <span className="text-brand">Change your life.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[55ch] mx-auto font-normal">
              A career with Hira Maa Group is full of challenges and learning opportunities. Build sustainable solutions alongside passionate innovators.
            </p>
          </div>

          <div className="grid xl:grid-cols-5 gap-10 xl:gap-12 items-start max-w-6xl mx-auto">
            
            {/* Values Section */}
            <div className="xl:col-span-2 space-y-6">
              <div className="bg-white rounded-3xl p-8 card-craft relative overflow-hidden">
                <h2 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">Our Core Values</h2>
                <ul className="space-y-4">
                  {[
                    { icon: Lightbulb, text: "Innovation & Creativity" },
                    { icon: Briefcase, text: "Persistence & Passion" },
                    { icon: Shield, text: "Transparency & Trust" },
                    { icon: Users, text: "Team Collaboration" },
                  ].map((val, idx) => (
                    <li key={idx} className="flex items-center gap-3.5 group">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-160 shadow-2xs">
                        <val.icon size={18} />
                      </div>
                      <span className="font-semibold text-sm text-slate-700 group-hover:text-slate-950 transition-colors duration-160">
                        {val.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl overflow-hidden aspect-video relative card-craft bg-slate-100">
                <Image 
                  src="/original-assets/d6dbe48d-e532-40ee-96fe-df6b954aefd4-1-rgtq21b2umgq960o3h8ol0rm9oxnbrin5swlcnnyms.jpg" 
                  alt="Team working" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Application Form */}
            <div className="xl:col-span-3 bg-white rounded-3xl p-8 md:p-10 card-craft">
              <h2 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">Apply Now</h2>
              <p className="text-slate-500 mb-8 text-sm leading-relaxed">
                Please fill out the form below or email us your resume directly at{" "}
                <a href="mailto:info@hiramaa.com" className="text-brand font-semibold hover:underline">
                  info@hiramaa.com
                </a>.
              </p>
              
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Your Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white hover:border-slate-300 focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-[border-color,box-shadow] duration-160 ease-[cubic-bezier(0.23,1,0.32,1)] text-slate-900 placeholder:text-slate-400 text-sm"
                      placeholder="John Doe"
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Your Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white hover:border-slate-300 focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-[border-color,box-shadow] duration-160 ease-[cubic-bezier(0.23,1,0.32,1)] text-slate-900 placeholder:text-slate-400 text-sm"
                      placeholder="john@example.com"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Contact Number *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white hover:border-slate-300 focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-[border-color,box-shadow] duration-160 ease-[cubic-bezier(0.23,1,0.32,1)] text-slate-900 placeholder:text-slate-400 text-sm"
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Submit Your CV (PDF/DOC) *</label>
                  <div className="border border-dashed border-slate-300 hover:border-brand rounded-2xl p-6 text-center transition-[border-color,background-color] duration-160 bg-slate-50/50 hover:bg-emerald-50/30 cursor-pointer">
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
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand mb-2 shadow-2xs border border-slate-200">
                        <UploadCloud size={18} />
                      </div>
                      <span className="font-semibold text-sm text-slate-800">{cvName || "Click to upload your CV"}</span>
                      <span className="text-xs text-slate-400 mt-1">PDF, DOC, or DOCX up to 5MB.</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Passport Size Photo (Optional)</label>
                  <input 
                    type="file" 
                    name="photo"
                    accept="image/*"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-600 focus:outline-none focus:border-brand file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-brand hover:file:bg-emerald-100 cursor-pointer transition-[border-color] duration-160"
                    onChange={(event) => setPhotoName(event.currentTarget.files?.[0]?.name || "")}
                  />
                  {photoName && <p className="text-xs text-emerald-600 font-medium">{photoName}</p>}
                </div>

                {formStatus && (
                  <div role="status" className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-medium border border-emerald-200">
                    <CheckCircle2 size={16} />
                    <span>{formStatus}</span>
                  </div>
                )}

                <button 
                  type="submit" 
                  className="w-full bg-brand hover:bg-brand-dark text-white font-semibold py-3.5 rounded-xl transition-[background-color,transform,box-shadow] duration-160 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-sm hover:shadow-md active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={16} />
                  <span>Submit Application</span>
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
