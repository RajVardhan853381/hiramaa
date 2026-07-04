import Navbar from"@/components/Navbar";
import Footer from"@/components/Footer";
import ContactForm from"@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from"lucide-react";

export const metadata = {
 title:"Contact Us | Hira Maa Group",
 description:"Get in touch with Hira Maa Group. We're here to answer any questions about our products and services.",
};

export default function ContactUsPage() {
 return (
 <>
 <Navbar />
 <main className="flex-1 w-full pt-32 pb-24 bg-zinc-50">
 <div className="container mx-auto px-6 md:px-12">
 <div className="max-w-3xl mx-auto text-center mb-16">
 <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Contact Us</h1>
 <p className="text-lg text-foreground/70 leading-relaxed">
 We would love to hear from you. Whether you have a question about our products, services, or anything else, our team is ready to answer all your questions.
 </p>
 </div>

 <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
 {/* Contact Information */}
 <div className="space-y-8">
 <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
 <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
 
 <div className="space-y-6">
 <div className="flex items-start gap-4">
 <div className="bg-brand/10 p-3 rounded-full text-brand shrink-0">
 <MapPin size={24} />
 </div>
 <div>
 <h3 className="font-semibold text-lg mb-1">Our Location</h3>
 <p className="text-foreground/70">
 HIRA MAA GROUP OF COMPANY<br />
 C/o Abhishek Mishra, Behind Railway XING,<br />
 Fundhar Road, DUMARTARAI, RAIPUR,<br />
 Chhattisgarh, 492001
 </p>
 </div>
 </div>

 <div className="flex items-start gap-4">
 <div className="bg-brand/10 p-3 rounded-full text-brand shrink-0">
 <Phone size={24} />
 </div>
 <div>
 <h3 className="font-semibold text-lg mb-1">Call Us</h3>
 <p className="text-foreground/70">09999 637919</p>
 </div>
 </div>

 <div className="flex items-start gap-4">
 <div className="bg-brand/10 p-3 rounded-full text-brand shrink-0">
 <Mail size={24} />
 </div>
 <div>
 <h3 className="font-semibold text-lg mb-1">Email Us</h3>
 <p className="text-foreground/70 flex flex-col">
 <a href="mailto:info@hiramaa.com" className="hover:text-brand transition-colors">info@hiramaa.com</a>
 <a href="mailto:sales@hiramaa.com" className="hover:text-brand transition-colors">sales@hiramaa.com</a>
 </p>
 </div>
 </div>
 
 <div className="flex items-start gap-4">
 <div className="bg-brand/10 p-3 rounded-full text-brand shrink-0">
 <Clock size={24} />
 </div>
 <div>
 <h3 className="font-semibold text-lg mb-1">Working Hours</h3>
 <p className="text-foreground/70">Mon - Sat: 9:00 AM - 6:00 PM</p>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Contact Form */}
 <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg shadow-brand/5 border border-slate-100">
 <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
 <ContactForm />
 </div>
 </div>
 
 {/* Map Placeholder */}
 <div className="mt-16 bg-slate-200 w-full h-[400px] rounded-3xl overflow-hidden flex items-center justify-center relative">
 <iframe 
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5532551068223!2d81.6669!3d21.2099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEyJzM1LjYiTiA4McKwNDAnMDAuOCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
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
