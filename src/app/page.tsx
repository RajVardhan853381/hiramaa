import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Businesses from "@/components/Businesses";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Businesses />
      </main>
      <Footer />
    </>
  );
}
