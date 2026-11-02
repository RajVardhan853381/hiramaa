import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";

const PRODUCT_CATEGORIES = {
  "millets": {
    name: "Millets & Products",
    description: "Millet food products is a new super food, offering a range of benefits for your health and diet. We source the finest Kodo, Ragi, and Kutki millets directly from our farmers.",
    image: "FPO.jpg",
    features: ["100% Organic", "Direct from Farmers", "High in Nutrients", "Gluten-Free Options"],
  },
  "cottage-handicraft": {
    name: "Cottage & Handicraft",
    description: "Hiramaa offers Handicraft Products online at best-ever prices. Shop for metal crafts items, wooden decorative pieces that support local artisans and rural industries.",
    image: "slide-1.jpg",
    features: ["Handmade", "Supports Local Artisans", "Eco-Friendly Materials", "Unique Designs"],
  },
  "agriculture": {
    name: "Agriculture & Solutions",
    description: "High-quality tractor trolleys, ploughs, water tankers, and harvester trolleys to boost your agricultural productivity. Built with durability and efficiency in mind.",
    image: "agicultural.jpg",
    features: ["Durable Build", "High Efficiency", "Customizable", "Expert Support"],
  },
  "farming": {
    name: "Farming",
    description: "The progress of green revolution and modern technology of agriculture combined with traditional farming. We utilize advanced techniques like tissue culture and greenhouse farming.",
    image: "vishakha.jpg",
    features: ["Tissue Culture", "Greenhouse Farming", "High Yield", "Sustainable Practices"],
  },
  "dairy": {
    name: "Milk & Dairy Product",
    description: "Natural cows milk & products with Improving Economic Viability of Gaushala. We focus on indigenous cow breeds and ethical milk production.",
    image: "matra-chhaya.jpg",
    features: ["A2 Milk", "Ethically Sourced", "No Preservatives", "Organic Vermicompost Byproduct"],
  },
  "skin-herbal": {
    name: "Skin & Herbal",
    description: "Herbal medicine and skin treatments harness the power of plants to promote natural healing and balance. Pure, chemical-free wellness products.",
    image: "6b84340b-6a44-44ab-ae05-d44b052de634-rfz6j7z9s4kptu9jxl809luaxjl8gyhjp2687thzbo.jpg",
    features: ["100% Natural", "Chemical Free", "Ayurvedic Formulation", "Cruelty Free"],
  },
  "solar": {
    name: "Solar Energy",
    description: "High quality solar panels, inverters, and complete rooftop solutions for sustainable clean energy. EPC services for homes, offices, and industries.",
    image: "solar.jpg",
    features: ["Tier 1 Panels", "Complete EPC", "Net Metering Support", "25 Year Warranty"],
  },
  "lithium-ion": {
    name: "Lithium ion Battery",
    description: "Advanced energy storage solutions with Barbarik Lithium-Ion batteries for various applications including EVs, solar storage, and industrial use.",
    image: "barbarik.jpg",
    features: ["High Energy Density", "Long Cycle Life", "Fast Charging", "Safe & Reliable"],
  }
};

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const product = PRODUCT_CATEGORIES[category as keyof typeof PRODUCT_CATEGORIES];
  
  if (!product) {
    return { title: 'Product Not Found | Hira Maa Group' };
  }

  return {
    title: `${product.name} | Hira Maa Group`,
    description: product.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const product = PRODUCT_CATEGORIES[category as keyof typeof PRODUCT_CATEGORIES];

  if (!product) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full pt-32 pb-24 bg-slate-50/60">
        <div className="container mx-auto px-6 md:px-12">
          {/* Back button with tactile feedback */}
          <Link 
            href="/products" 
            className="group inline-flex items-center gap-2 text-slate-500 hover:text-brand mb-10 transition-[color,transform] duration-160 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] text-sm font-semibold"
          >
            <ArrowLeft size={16} className="transition-transform duration-160 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-x-1" />
            <span>Back to Products</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Visual preview */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden card-craft bg-white">
              <Image 
                src={`/original-assets/${product.image}`}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Product description & highlights */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-brand text-xs font-bold tracking-[0.2em] uppercase mb-4 border border-emerald-100">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Product Overview
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-[-0.035em] mb-4">
                {product.name}
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-[55ch]">
                {product.description}
              </p>

              <h2 className="text-base font-bold text-slate-900 tracking-tight uppercase tracking-wider mb-4">
                Key Features
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {product.features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs"
                  >
                    <CheckCircle2 size={16} className="text-brand shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Inquiry card */}
              <div className="card-craft p-6 sm:p-8 rounded-3xl bg-white">
                <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                  Interested in our {product.name}?
                </h3>
                <p className="text-slate-500 mb-6 text-sm leading-relaxed max-w-[45ch]">
                  Contact our sales and supply chain team directly to discuss bulk orders, custom specifications, or distribution partnerships.
                </p>
                <Link 
                  href="/contact-us"
                  className="group inline-flex items-center gap-2.5 bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-full font-semibold text-sm transition-[background-color,transform,box-shadow] duration-160 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-sm hover:shadow-md active:scale-[0.97]"
                >
                  <span>Contact Sales</span>
                  <ArrowRight size={15} className="transition-transform duration-160 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
