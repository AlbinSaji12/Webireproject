import type { Metadata } from "next";
import { FolderKanban } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/inner/PageHero";
import ProjectsGrid from "@/components/inner/ProjectsGrid";
import CtaBanner from "@/components/inner/CtaBanner";

export const metadata: Metadata = {
  title: "Our Projects | Webire",
  description: "A showcase of ideas we’ve brought to life through design and development.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col selection:bg-[#9EFF00] selection:text-black">
      <Header />
      <PageHero
        crumb="Projects"
        title="Our Projects"
        subtitle="A showcase of ideas we’ve brought to life through design and development."
        icon={FolderKanban}
        image="/banners/projects.png"
      />

      <section className="w-full bg-white py-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <ProjectsGrid />
        </div>
      </section>

      <CtaBanner
        variant="lime"
        title="Have a project in mind?"
        subtitle="Let’s create something amazing together."
        cta="Get in Touch"
        href="/contact"
        image="/works/image-1.png"
      />
      <Footer />
    </main>
  );
}
