import Navbar from"@/components/Navbar";
import Footer from"@/components/Footer";
import Image from"next/image";
import Link from"next/link";
import { ArrowRight } from"lucide-react";

export const metadata = {
 title:"Products | Hira Maa Group",
 description:"Explore our wide range of products including Millets, Handicrafts, Farming Solutions, Dairy, Herbal Products, and Solar Energy.",
};

const PRODUCT_CATEGORIES = [
 {
 id:"millets",
 name:"Millets & Products",
 description:"Millet food products is a new super food, offering a range of benefits for your health and diet.",
 image:"FPO.jpg", // Using a relevant downloaded image
 },
 {
 id:"cottage-handicraft",
 name:"Cottage & Handicraft",
 description:"Hiramaa offers Handicraft Products online at best-ever prices. Shop for metal crafts items, wooden decorative pieces.",
 image:"slide-1.jpg",
 },
 {
 id:"agriculture",
 name:"Agriculture & Solutions",
 description:"High-quality tractor trolleys and farming equipment to boost your agricultural productivity.",
 image:"agicultural.jpg",
 },
 {
 id:"farming",
 name:"Farming",
 description:"The progress of green revolution and modern technology of agriculture combined with traditional farming.",
 image:"vishakha.jpg",
 },
 {
 id:"dairy",
 name:"Milk & Dairy Product",
 description:"Natural cows milk & products with Improving Economic Viability of Gaushala.",
 image:"matra-chhaya.jpg",
 },
 {
 id:"skin-herbal",
 name:"Skin & Herbal",
 description:"Herbal medicine and skin treatments harness the power of plants to promote natural healing and balance.",
 image:"6b84340b-6a44-44ab-ae05-d44b052de634-rfz6j7z9s4kptu9jxl809luaxjl8gyhjp2687thzbo.jpg",
 },
 {
 id:"solar",
 name:"Solar Energy",
 description:"High quality solar panels, inverters, and complete rooftop solutions for sustainable clean energy.",
 image:"solar.jpg",
 },
 {
 id:"lithium-ion",
 name:"Lithium ion Battery",
 description:"Advanced energy storage solutions with Barbarik Lithium-Ion batteries for various applications.",
 image:"barbarik.jpg",
 }
];

export default function ProductsPage() {
 return (
 <>
 <Navbar />
 <main className="flex-1 w-full pt-32 pb-24 bg-zinc-50">
 <div className="container mx-auto px-6 md:px-12">
 <div className="max-w-3xl mx-auto text-center mb-16">
 <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Products</h1>
 <p className="text-lg text-foreground/70 leading-relaxed">
 Discover our diverse range of high-quality products spanning from organic superfoods and natural dairy to advanced agricultural machinery and clean energy solutions.
 </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
 {PRODUCT_CATEGORIES.map((category) => (
 <div key={category.id} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
 <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
 <Image 
 src={`/original-assets/${category.image}`}
 alt={category.name}
 fill
 className="object-cover group-hover:scale-110 transition-transform duration-500"
 sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
 />
 </div>
 <div className="p-6 flex flex-col flex-1">
 <h2 className="text-xl font-bold mb-3 group-hover:text-brand transition-colors">{category.name}</h2>
 <p className="text-foreground/70 text-sm leading-relaxed mb-6 flex-1">
 {category.description}
 </p>
 <Link 
 href={`/products/${category.id}`} 
 className="inline-flex items-center gap-2 text-brand font-medium group-hover:text-brand-dark transition-colors mt-auto"
 >
 View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
 </Link>
 </div>
 </div>
))}
 </div>
 </div>
 </main>
 <Footer />
 </>
);
}
