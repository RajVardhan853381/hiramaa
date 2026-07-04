import Navbar from"@/components/Navbar";
import Footer from"@/components/Footer";
import Image from"next/image";
import Link from"next/link";
import { ArrowLeft } from"lucide-react";
import { notFound } from"next/navigation";

// In Next.js 15, route params in App Router are synchronous but the typing expects a Promise in some strict configurations, 
// however, for page components we can just type it as a Promise or synchronously access depending on setup.
// We'll use the standard Next.js 15 approach where params is a Promise.

const PRODUCT_CATEGORIES = {
"millets": {
 name:"Millets & Products",
 description:"Millet food products is a new super food, offering a range of benefits for your health and diet. We source the finest Kodo, Ragi, and Kutki millets directly from our farmers.",
 image:"FPO.jpg",
 features: ["100% Organic","Direct from Farmers","High in Nutrients","Gluten-Free Options"],
 },
"cottage-handicraft": {
 name:"Cottage & Handicraft",
 description:"Hiramaa offers Handicraft Products online at best-ever prices. Shop for metal crafts items, wooden decorative pieces that support local artisans and rural industries.",
 image:"slide-1.jpg",
 features: ["Handmade","Supports Local Artisans","Eco-Friendly Materials","Unique Designs"],
 },
"agriculture": {
 name:"Agriculture & Solutions",
 description:"High-quality tractor trolleys, ploughs, water tankers, and harvester trolleys to boost your agricultural productivity. Built with durability and efficiency in mind.",
 image:"agicultural.jpg",
 features: ["Durable Build","High Efficiency","Customizable","Expert Support"],
 },
"farming": {
 name:"Farming",
 description:"The progress of green revolution and modern technology of agriculture combined with traditional farming. We utilize advanced techniques like tissue culture and greenhouse farming.",
 image:"vishakha.jpg",
 features: ["Tissue Culture","Greenhouse Farming","High Yield","Sustainable Practices"],
 },
"dairy": {
 name:"Milk & Dairy Product",
 description:"Natural cows milk & products with Improving Economic Viability of Gaushala. We focus on indigenous cow breeds and ethical milk production.",
 image:"matra-chhaya.jpg",
 features: ["A2 Milk","Ethically Sourced","No Preservatives","Organic Vermicompost Byproduct"],
 },
"skin-herbal": {
 name:"Skin & Herbal",
 description:"Herbal medicine and skin treatments harness the power of plants to promote natural healing and balance. Pure, chemical-free wellness products.",
 image:"6b84340b-6a44-44ab-ae05-d44b052de634-rfz6j7z9s4kptu9jxl809luaxjl8gyhjp2687thzbo.jpg",
 features: ["100% Natural","Chemical Free","Ayurvedic Formulation","Cruelty Free"],
 },
"solar": {
 name:"Solar Energy",
 description:"High quality solar panels, inverters, and complete rooftop solutions for sustainable clean energy. EPC services for homes, offices, and industries.",
 image:"solar.jpg",
 features: ["Tier 1 Panels","Complete EPC","Net Metering Support","25 Year Warranty"],
 },
"lithium-ion": {
 name:"Lithium ion Battery",
 description:"Advanced energy storage solutions with Barbarik Lithium-Ion batteries for various applications including EVs, solar storage, and industrial use.",
 image:"barbarik.jpg",
 features: ["High Energy Density","Long Cycle Life","Fast Charging","Safe & Reliable"],
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
 <main className="flex-1 w-full pt-32 pb-24 bg-zinc-50">
 <div className="container mx-auto px-6 md:px-12">
 <Link href="/products" className="inline-flex items-center gap-2 text-foreground/60 hover:text-brand mb-12 transition-colors">
 <ArrowLeft size={20} /> Back to Products
 </Link>

 <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
 <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-white">
 <Image 
 src={`/original-assets/${product.image}`}
 alt={product.name}
 fill
 className="object-cover"
 sizes="(max-width: 1024px) 100vw, 50vw"
 loading="eager"
 fetchPriority="high"
 />
 </div>
 
 <div>
 <span className="inline-block py-1 px-3 rounded-full bg-brand/10 text-brand text-sm font-semibold tracking-wider uppercase mb-6">
 Product Category
 </span>
 <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{product.name}</h1>
 <p className="text-lg text-foreground/70 leading-relaxed mb-10">
 {product.description}
 </p>

 <h2 className="text-2xl font-bold mb-6">Key Features</h2>
 <ul className="grid sm:grid-cols-2 gap-4 mb-12">
 {product.features.map((feature, index) => (
 <li key={index} className="flex items-center gap-3">
 <div className="w-2 h-2 rounded-full bg-brand shrink-0" />
 <span className="font-medium text-foreground/80">{feature}</span>
 </li>
))}
 </ul>

 <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
 <h3 className="text-xl font-bold mb-3">Interested in our {product.name}?</h3>
 <p className="text-foreground/70 mb-6 text-sm">Contact our sales team directly to discuss bulk orders, pricing, or specific requirements.</p>
 <Link 
 href="/contact-us"
 className="inline-block bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-xl font-semibold transition-colors"
 >
 Contact Sales
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
