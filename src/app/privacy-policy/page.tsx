import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Hira Maa Group",
  description: "Privacy information for visitors contacting Hira Maa Group through the website.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full pt-28 md:pt-32 pb-20 bg-zinc-50">
        <section className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Privacy Policy</h1>
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                Hira Maa Group uses the information shared through this website only to respond to enquiries, product requests, career applications, and business communication.
              </p>
              <p>
                Contact form and career form details are prepared in your email app before sending. Please review the message and attachments before you send them.
              </p>
              <p>
                We do not sell visitor information. For privacy questions or data correction requests, contact us at info@hiramaa.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
