'use client'
import Section from "@/components/common/Section";
import { FiScissors, FiDroplet, FiFeather, FiShield, FiStar, FiClock } from "react-icons/fi";

export default function EsteticaPage() {
  return (
    <>
      {/* Hero */}
      <header className="bg-[var(--brand-sun)]/20">
        <div className="container-max py-12 lg:py-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-ink">Estética para mascotas</h1>
          <p className="mt-3 text-ink-600 max-w-2xl">
            Cuidado profesional con productos seguros y protocolos amables. Agenda baño, corte, deslanado y más.
          </p>
        </div>
      </header>

      {/* Servicios */}
      <Section title="Servicios" subtitle="Selecciona el que necesitas" className="bg-white">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<FiDroplet />}
            title="Baño higiénico"
            desc="Limpieza completa con shampoo adecuado al tipo de piel, orejas y secado."
            time="60–90 min"
            includes={["Shampoo adecuado", "Limpieza de orejas", "Secado"]}
          />
          <ServiceCard
            icon={<FiScissors />}
            title="Corte estético"
            desc="Corte según raza o a medida, con acabado pulcro y sin estrés."
            time="90–120 min"
            includes={["Asesoría de estilo", "Corte y contorno", "Baño ligero"]}
          />
          <ServiceCard
            icon={<FiFeather />}
            title="Deslanado"
            desc="Eliminación de pelo muerto y nudos para mejorar ventilación y brillo."
            time="60–90 min"
            includes={["Cepillado profundo", "Desenredo suave", "Final con acondicionador"]}
          />
          <ServiceCard
            icon={<FiShield />}
            title="Baño medicado"
            desc="Apoyo en casos dermatológicos con productos profesionales (según indicación)."
            time="Seg. receta"
            includes={["Aplicación de shampoo/loción", "Enjuague controlado", "Secado cuidadoso"]}
          />
          <ServiceCard
            icon={<FiStar />}
            title="SPA (opcional)"
            desc="Masaje, mascarilla hidratante y colonia suave. Ideal para consentir."
            time="30–45 min"
            includes={["Masaje relajante", "Mascarilla", "Colonia hipoalergénica"]}
          />
          <ServiceCard
            icon={<FiClock />}
            title="Corte de uñas"
            desc="Corte y limado rápido con manejo cuidadoso."
            time="15–20 min"
            includes={["Corte seguro", "Lijado suave"]}
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://wa.me/5210000000000?text=Hola%2C%20quiero%20agendar%20est%C3%A9tica%20para%20mi%20mascota."
            className="btn bg-[var(--brand-sun)] border-[var(--brand-sun)] text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar por WhatsApp
          </a>
          <a href="/contacto" className="btn btn-ghost">Solicitar información</a>
        </div>
      </Section>

      {/* Paquetes */}
      <Section title="Paquetes sugeridos" subtitle="Combinaciones populares" className="bg-sun-50">
        <div className="grid gap-6 lg:grid-cols-3">
          <PackageCard
            title="Básico limpio"
            desc="Baño higiénico + corte de uñas + limpieza de orejas."
            ideal="Mantenimiento regular"
            items={["Baño higiénico", "Uñas", "Orejas"]}
          />
          <PackageCard
            title="Look completo"
            desc="Corte estético + baño + deslanado (si aplica)."
            ideal="Cambio de estilo / muda"
            items={["Corte estético", "Baño", "Deslanado"]}
          />
          <PackageCard
            title="Piel sensible"
            desc="Baño medicado + secado controlado + seguimiento."
            ideal="Apoyo dermatológico"
            items={["Baño medicado", "Secado suave", "Recomendaciones"]}
          />
        </div>
      </Section>

      {/* Galería (placeholder) */}
      <Section title="Antes y después" subtitle="Resultados reales" className="bg-white">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="card overflow-hidden">
              <div className="aspect-[4/3] bg-[var(--sun-50)] grid place-items-center text-ink-400">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/gallery/sample-${(i % 3) + 1}.jpg`}
                  alt="Antes y después"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // si no tienes imágenes aún, deja un placeholder de texto
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                    (e.currentTarget.parentElement as HTMLElement).textContent = "Foto próximamente";
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Preguntas frecuentes */}
      <Section title="Preguntas frecuentes" className="bg-sun-50">
        <div className="grid gap-3 max-w-3xl">
          <FAQ
            q="¿Requieren cita previa?"
            a="Sí, para asegurar disponibilidad y evitar esperas. Escríbenos por WhatsApp para agendar."
          />
          <FAQ
            q="¿Usan productos hipoalergénicos?"
            a="Trabajamos con líneas profesionales y optamos por fórmulas suaves; si tu mascota tiene indicación del veterinario, podemos aplicar su shampoo."
          />
          <FAQ
            q="¿Cómo manejan mascotas nerviosas?"
            a="Priorizamos un trato amable y pausado. Si detectamos estrés alto, proponemos pausas o reprogramación."
          />
          <FAQ
            q="¿Ofrecen servicio a domicilio?"
            a="Por ahora el servicio se realiza en nuestro local para garantizar equipo y condiciones adecuadas."
          />
        </div>

        <div className="mt-8">
          <a
            href="https://wa.me/5210000000000?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20est%C3%A9tica%20para%20mi%20mascota."
            className="btn bg-[var(--brand-sun)] border-[var(--brand-sun)] text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Más dudas por WhatsApp
          </a>
        </div>
      </Section>
    </>
  );
}

/* ========= Subcomponentes locales (sin cliente) ========= */

function ServiceCard({
  icon,
  title,
  desc,
  time,
  includes,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  time?: string;
  includes?: string[];
}) {
  return (
    <div className="card p-6 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="text-xl text-ink">{icon}</span>
        <h3 className="font-semibold text-ink">{title}</h3>
      </div>
      <p className="text-sm text-ink-600">{desc}</p>
      {includes && includes.length > 0 && (
        <ul className="text-sm text-ink-600 list-disc pl-5 space-y-1">
          {includes.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      )}
      {time && <div className="text-xs text-ink-400 mt-auto">Duración aprox.: {time}</div>}
    </div>
  );
}

function PackageCard({
  title,
  desc,
  ideal,
  items,
}: {
  title: string;
  desc: string;
  ideal?: string;
  items: string[];
}) {
  return (
    <div className="card p-6">
      <h3 className="font-semibold text-ink">{title}</h3>
      <p className="text-sm text-ink-600 mt-2">{desc}</p>
      {ideal && <div className="text-xs text-ink-400 mt-1">Ideal para: {ideal}</div>}
      <ul className="text-sm text-ink-600 list-disc pl-5 mt-3 space-y-1">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <a
        href={`https://wa.me/5210000000000?text=${encodeURIComponent(
          `Hola, quiero agendar el paquete: ${title}`
        )}`}
        className="btn bg-[var(--brand-sun)] border-[var(--brand-sun)] text-ink mt-4 inline-flex"
        target="_blank"
        rel="noopener noreferrer"
      >
        Agendar este paquete
      </a>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <details className="card p-5">
      <summary className="font-medium cursor-pointer">{q}</summary>
      <p className="mt-2 text-sm text-ink-600">{a}</p>
    </details>
  );
}
