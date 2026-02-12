import { Hero } from "@/components/sections/Hero";
import { ClientsCarousel } from "@/components/sections/ClientsCarousel";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ProjectsOverview } from "@/components/sections/ProjectsOverview";
import { CaeSection } from "@/components/sections/CaeSection";
import { HomeMetrics } from "@/components/sections/HomeMetrics";
import { HomeOasysFeatured } from "@/components/sections/HomeOasysFeatured";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesOverview />
      <HomeMetrics />
      <HomeOasysFeatured />
      <ProjectsOverview />
      <ClientsCarousel />
      <CaeSection />

      {/* Quick Contact CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Hablamos de su proyecto?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contacte con nuestro equipo técnico para una valoración inicial sin compromiso.
          </p>
          <Link href="/contacto">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8">
              Solicitar reunión
            </Button>
          </Link>
        </div>
      </section>
    </main >
  );
}
