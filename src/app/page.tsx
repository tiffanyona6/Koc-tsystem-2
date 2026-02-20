import { Hero } from "@/components/sections/Hero";
import { ClientsCarousel } from "@/components/sections/ClientsCarousel";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ProjectsOverview } from "@/components/sections/ProjectsOverview";
import { CaeSection } from "@/components/sections/CaeSection";
import { HomeMetrics } from "@/components/sections/HomeMetrics";
import { HomeOasysFeatured } from "@/components/sections/HomeOasysFeatured";
import { HomeGalleryCarousel } from "@/components/sections/HomeGalleryCarousel";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesOverview />
      <HomeGalleryCarousel />
      <HomeMetrics />
      <HomeOasysFeatured />
      <ProjectsOverview />
      <ClientsCarousel />
      <CaeSection />

      {/* Quick Contact CTA */}
      <section className="section-padding bg-primary text-white text-center">
        <div className="container-custom">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">¿Hablamos de su proyecto?</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contacte con nuestro equipo para una valoración inicial sin compromiso.
          </p>
          <Link href="/contacto">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 h-auto">
              Solicitar reunión
            </Button>
          </Link>
        </div>
      </section>
    </main >
  );
}
