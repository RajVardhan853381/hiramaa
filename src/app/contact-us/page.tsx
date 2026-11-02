import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Hira Maa Group",
  description: "Get in touch with Hira Maa Group. We're here to answer any questions about our products, agro-solutions, and solar EPC services.",
};

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full pt-32 pb-24 bg-slate-50/60">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 text-brand text-xs font-bold tracking-[0.25em] uppercase mb-3">
              <span className="w-6 h-[2px] bg-brand inline-block" />
              Direct Communication
              <span className="w-6 h-[2px] bg-brand inline-block" />
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-[-0.035em] mb-4">Contact Us</h1>
            <p className="text-base text-slate-600 leading-relaxed max-w-[55ch] mx-auto">
              We would love to hear from you. Whether you have a question about our products, renewable energy EPC, or partnership opportunities, our team is ready to connect.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white p-8 sm:p-10 rounded-3xl card-craft">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-emerald-50 text-brand rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm mb-1 uppercase tracking-wider">Our Location</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        HIRA MAA GROUP OF COMPANY<br />
                        5P5P+777, Dhamtari Rd, Mana,<br />
                        Raipur, Chhattisgarh 492018
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-emerald-50 text-brand rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm mb-1 uppercase tracking-wider">Call Us</h3>
                      <div className="flex flex-col gap-0.5 text-sm">
                        <a href="tel:+919183380301" className="text-slate-600 font-semibold hover:text-brand transition-colors duration-160">
                          +91 9183380301
                        </a>
                        <span className="text-xs text-slate-400">Available Mon - Sat (9:00 AM - 6:00 PM)</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-emerald-50 text-brand rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm mb-1 uppercase tracking-wider">Email Us</h3>
                      <div className="flex flex-col gap-0.5 text-sm">
                        <a href="mailto:info@hiramaa.com" className="text-slate-600 hover:text-brand transition-colors duration-160">
                          info@hiramaa.com
                        </a>
                        <a href="mailto:sales@hiramaa.com" className="text-slate-600 hover:text-brand transition-colors duration-160">
                          sales@hiramaa.com
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-emerald-50 text-brand rounded-xl flex items-center justify-center shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm mb-1 uppercase tracking-wider">Working Hours</h3>
                      <p className="text-slate-600 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <h3 className="font-bold text-slate-900 text-xs mb-3 uppercase tracking-wider">Follow & Connect</h3>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <a
                        href="https://www.facebook.com/profile.php?id=61589092186650"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-brand hover:text-white text-slate-700 text-xs font-semibold transition-[background-color,color,transform] duration-160 active:scale-95 border border-slate-200/80"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                        <span>Facebook</span>
                      </a>
                      <a
                        href="https://www.instagram.com/hira_maa_group?xtok=MXV1ZjMwd2prMWQ3NQ=="
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-brand hover:text-white text-slate-700 text-xs font-semibold transition-[background-color,color,transform] duration-160 active:scale-95 border border-slate-200/80"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        <span>Instagram</span>
                      </a>
                      <a
                        href="https://wa.me/919183380301"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-[#25D366] hover:text-white text-emerald-800 text-xs font-semibold transition-[background-color,color,transform] duration-160 active:scale-95 border border-emerald-200/80"
                      >
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl card-craft">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
          
          {/* Map Section */}
          <div className="mt-16 bg-slate-200 w-full h-[380px] rounded-3xl overflow-hidden card-craft relative max-w-6xl mx-auto">
            <iframe 
              src="https://maps.google.com/maps?q=5P5P%2B777,+Dhamtari+Rd,+Mana,+Chhattisgarh+492018&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              className="absolute inset-0"
              title="Hira Maa Group Location"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
