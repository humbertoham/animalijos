// app/veterinarios/page.tsx
import Section from "@/components/common/Section";
import CatalogCard from "@/components/vets/CatalogCard";
import PriceListRequest from "@/components/vets/PriceListRequest";
import catalogs from "../../../data/catalogos-veterinarios.json";

export default function VeterinariosPage() {
  return (
    <>
      {/* Hero */}
      <header className="bg-[var(--brand-sun)]/20">
        <div className="container-max py-12 lg:py-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-ink">
            Catálogos para veterinarios
          </h1>
          <p className="mt-3 text-ink-600 max-w-2xl">
            Productos y presentaciones pensadas para clínica: líneas profesionales,
            equipamiento y consumibles.
          </p>
        </div>
      </header>

      {/* Listado de catálogos */}
      <Section title="Catálogos disponibles" className="bg-white">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(catalogs as any[]).map((c) => (
            <CatalogCard key={c.slug} {...c} />
          ))}
        </div>
      </Section>

      {/* Solicitud de lista de precios / más info */}
      <Section
        title="¿Necesitas lista de precios?"
        subtitle="Te la enviamos por correo o WhatsApp"
        center
        className="bg-sun-50"
      >
        <PriceListRequest />
      </Section>
    </>
  );
}
