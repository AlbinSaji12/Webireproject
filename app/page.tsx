import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ServiceCTA from "@/components/ServiceCTA";
import Works from "@/components/Works";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#181918] text-white flex flex-col selection:bg-[#9EFF00] selection:text-black">
      <Header />
      <Hero />
      <Services />
      <ServiceCTA />
      <Works />
      <Process />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
