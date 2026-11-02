import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Gallery | Hira Maa Group",
  description: "Explore the visual journey of Hira Maa Group across our various divisions including farming, dairy, and solar.",
};

const GALLERY_IMAGES = [
  "20230204_142857-scaled-rfz68mcspe2aw5nvu09h5a55r3u7nueiwlb3dh7thw.jpg",
  "20230204_143116-scaled-rfz69hdgyx8rjaetsvo5xkbdctlbputo0uu47lxtsk.jpg",
  "20230204_142857-1-scaled-rfz6939w4epgp4zb37kre5vgg1itie9oyx1u0giqdw.jpg",
  "6b84340b-6a44-44ab-ae05-d44b052de634-rfz6j7z9s4kptu9jxl809luaxjl8gyhjp2687thzbo.jpg",
  "76f27d9d-b074-4849-a4c1-3c2883280a4e-rfz6jasscmokso5gh4fvz34opp7c41sqpg4onndst0.jpg",
  "97aff52a-9dc9-4b4c-bf9d-4b7edb7992b8-rfz6jdmax4sfri1d0nnrokf2hutfr53xpu353h9mac.jpg",
  "665d0180-83a0-48dd-b3a4-16a16a98b7e4-rfz6jfhzasv0epympoh0tjxzomk66jbee3e4216txw.jpg",
  "bbd1c535-c56d-4c3c-a4d1-ec63cd20e6ce-rgtorarz16hgz5wn09yhltcixzamljz42h5gbcyo0k.jpg",
  "6a12809e-7bb0-4254-804d-4859e277fc38-rfz6j63legi56mca8ker4mbdqrui1ka30sv999kro4.jpg",
  "cf95a112-0583-4d27-95e7-bf2473fc707c-rfz6jrpvrnbqlngvqbr67yuzemvxylnwrrvfamopp0.jpg",
  "8451b42e-a1ac-4991-8b75-60777a07493b-rfz6jgfthmwaqbx9k6vne1pga0fje8f4q81ljb5fro.jpg",
  "5f60eb6d-fac8-443f-8242-b0a9e835fc93-rfz6j55r7mguv0dne204k4jx5dz4tv6coo7rrzm5uc.jpg",
  "d6dbe48d-e532-40ee-96fe-df6b954aefd4-rfz6jtlk5beb8ve5fckfcydwlemodzvdg16e96lxck.jpg",
  "965adacf-2522-413d-85d5-eaec22435575-rgtoqcxs7575d79shvbx41vxk3xewg8rxtnz1ecu8k.jpg",
  "30018bdf-31cf-4607-9954-8c86cbe5814c-rfz6jibhvayvdjuj97owj18dgs69tmmlehckhv2nf8.jpg",
  "635116bf-c74b-4e6f-8d59-c80f2e417b97-rfz6jnyj0b6lb7mcca4nxzt513eh3t8zf99hdiuadw.jpg",
  "af9763c4-61f8-42f7-b800-5f1cf7e34b62-rfz6jpu7dz95yfjm1axx2zc27v57j7gg3ikgc2ri1g.jpg",
  "20230204_142226-1-scaled-rfz67d8jlccjevhf5grdtlj18m0ledfeqdzsc72psk.jpg",
  "20230204_143354-scaled-rfz69wew09tcp1szd2671giquzj750hdex9vw1bj10.jpg",
  "d6dbe48d-e532-40ee-96fe-df6b954aefd4-1-rgtq21b2umgq960o3h8ol0rm9oxnbrin5swlcnnyms.jpg",
  "62067fed-2b99-4112-996c-435495df60e1-rfz6jl50ft2qcdqfsqws8iir8xsdgpxsevb0xoygwk.jpg",
  "f5eef753-a2f4-475c-a34b-6e202e23079c-rfz6jwf2pti67pa1yvsb2foadk8s136kgf4up0hqtw.jpg",
  "77fc8379-dabb-426e-a95a-465c03af7ea2-rfz6jcogqar5fw2q659542nlwgy2jg07dpfnm7b0gk.jpg",
  "20230204_135022-scaled-rfz649dr023f19zwames2vr6jrbwye3cn0d089okd0.jpg",
  "20230204_140923-scaled-rfz65o51940wg7y628cmtiy2mkdqi1outzl857lb10.jpg"
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full pt-32 pb-24 bg-slate-50/60">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 text-brand text-xs font-bold tracking-[0.25em] uppercase mb-3">
              <span className="w-6 h-[2px] bg-brand inline-block" />
              Visual Archive
              <span className="w-6 h-[2px] bg-brand inline-block" />
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-[-0.035em] mb-4">Our Gallery</h1>
            <p className="text-base text-slate-600 leading-relaxed max-w-[55ch] mx-auto">
              Take a visual tour of our facilities, agricultural fields, solar installations, and the dedicated people behind Hira Maa Group.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {GALLERY_IMAGES.map((image, index) => (
              <div 
                key={index} 
                className="break-inside-avoid relative rounded-2xl overflow-hidden card-craft group bg-slate-100"
              >
                <Image 
                  src={`/original-assets/${image}`}
                  alt={`Gallery image ${index + 1}`}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
