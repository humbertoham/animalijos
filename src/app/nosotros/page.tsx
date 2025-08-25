import Section from "@/components/common/Section";
import BrandStrip from "@/components/common/BrandStrip";
import { FiHeart, FiTarget, FiAward, FiUsers, FiTruck, FiShield } from "react-icons/fi";

export default function NosotrosPage() {
  return (
    <>
      {/* Hero simple */}
      <header className="bg-[var(--brand-sun)]/20">
        <div className="container-max py-14 lg:py-20">
          <h1 className="text-3xl md:text-4xl font-extrabold text-ink">Sobre Animalijos</h1>
          <p className="mt-3 text-ink-600 max-w-2xl">
            Estética para mascotas y catálogo profesional de alimentos, accesorios y snacks. 
            Ayudamos a tutores y clínicas a encontrar productos confiables y al mejor valor.
          </p>
        </div>
      </header>

      {/* Misión / Visión / Valores */}
      <Section className="bg-white">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card p-6">
            <FiTarget className="text-2xl text-ink" aria-hidden />
            <h2 className="mt-3 font-semibold text-ink">Misión</h2>
            <p className="mt-2 text-sm text-ink-600">
              Facilitar el acceso a productos y servicios de cuidado animal con información clara,
              atención cercana y un catálogo curado para cada necesidad.
            </p>
          </div>
          <div className="card p-6">
            <FiAward className="text-2xl text-ink" aria-hidden />
            <h2 className="mt-3 font-semibold text-ink">Visión</h2>
            <p className="mt-2 text-sm text-ink-600">
              Ser el referente local en bienestar animal: una marca confiable para tutores, 
              aliada de clínicas y distribuidores.
            </p>
          </div>
          <div className="card p-6">
            <FiHeart className="text-2xl text-ink" aria-hidden />
            <h2 className="mt-3 font-semibold text-ink">Valores</h2>
            <ul className="mt-2 text-sm text-ink-600 list-disc pl-5 space-y-1">
              <li>Amor y respeto por los animales</li>
              <li>Calidad y transparencia</li>
              <li>Atención honesta y cercana</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Historia breve / Timeline simple */}
      <Section title="Nuestra historia" className="bg-sun-50">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card p-6">
            <h3 className="font-semibold text-ink">Origen</h3>
            <p className="mt-2 text-sm text-ink-600">
              Nacimos como una estética para mascotas orientada al cuidado responsable,
              integrando productos que realmente recomiendan nuestros groomers.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-ink">Catálogo curado</h3>
            <p className="mt-2 text-sm text-ink-600">
              Ampliamos el surtido con alimentos, accesorios y snacks seleccionados por
              calidad, disponibilidad y relación valor-precio.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-ink">Pro para clínicas</h3>
            <p className="mt-2 text-sm text-ink-600">
              Habilitamos catálogos para veterinarios con presentaciones y líneas profesionales
              para su operación diaria.
            </p>
          </div>
        </div>
      </Section>

      {/* Stats / Diferenciadores */}
      <Section title="Lo que nos diferencia" className="bg-white">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat icon={<FiUsers />} label="Atención" value="1 a 1" note="asesoría personalizada" />
          <Stat icon={<FiShield />} label="Confianza" value="100%" note="productos verificados" />
          <Stat icon={<FiTruck />} label="Abasto" value="Constante" note="marcas y presentaciones" />
          <Stat icon={<FiAward />} label="Calidad" value="Curada" note="por nuestro equipo" />
        </div>
      </Section>

  

      {/* Marcas (reutiliza BrandStrip) */}
      <BrandStrip />

      {/* CTA final */}
      <Section center className="bg-white">
        <div className="card p-6 max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-bold text-ink">¿Hablamos?</h3>
          <p className="mt-2 text-ink-600">
            Si buscas un producto específico o quieres una recomendación, estamos para ayudarte.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href="https://wa.me/5210000000000?text=Hola%2C%20vengo%20del%20sitio%20de%20Animalijos%20y%20quiero%20informaci%C3%B3n."
              className="btn bg-[var(--brand-sun)] border-[var(--brand-sun)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribir por WhatsApp
            </a>
            <a href="/contacto" className="btn btn-ghost">Ir a contacto</a>
          </div>
        </div>
      </Section>
    </>
  );
}

/* ===== Subcomponentes locales ===== */

function Stat({
  icon,
  label,
  value,
  note,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="card p-5">
      <div className="flex items-center gap-3">
        <span className="text-xl text-ink">{icon}</span>
        <div>
          <div className="text-sm text-ink-600">{label}</div>
          <div className="text-2xl font-extrabold text-ink leading-tight">{value}</div>
          {note ? <div className="text-xs text-ink-400">{note}</div> : null}
        </div>
      </div>
    </div>
  );
}
