import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Hira Maa Group",
  description: "Website terms for Hira Maa Group visitors, enquiries, and product information.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full pt-28 md:pt-32 pb-20 bg-zinc-50">
        <section className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Terms of Service</h1>
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                The information on this website is provided for general business, product, and service enquiries related to Hira Maa Group.
              </p>
              <p>
                Product details, availability, specifications, pricing, and service terms may change based on project requirements and direct consultation with our team.
              </p>
              <p>
                By contacting us through this website, you agree that our team may respond using the contact details you provide.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
