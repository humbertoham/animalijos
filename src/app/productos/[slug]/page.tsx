import { notFound } from "next/navigation";
import Link from "next/link";
import Section from "@/components/common/Section";
import data from "../../../../data/products.json";
import {
  FiImage,
  FiMessageCircle,
  FiTag,
  FiLayers,
  FiBox,
  FiBookmark,
} from "react-icons/fi";
import ProductCard from "@/components/catalog/ProductCard";

type Product = {
  id: string;
  nombre: string;
  marca?: string;
  categoria?: string;
  presentacion?: string;
  imagen?: string | null;
  sku?: string;
  descripcion?: string;
  especie?: string;
  detalles?: { label: string; value: string }[]; // nuevo: tabla de detalles
};

function getProduct(slug: string) {
  const list = data as Product[];
  return list.find((p) => p.id === slug);
}

export function generateStaticParams() {
  const list = data as Product[];
  return list.map((p) => ({ slug: p.id }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ← clave
  const p = getProduct(slug);
  if (!p) return notFound();

  const message = encodeURIComponent(
    `Hola, vengo del sitio de Animalijos y quiero cotizar:\n\n${p.nombre}\n${p.marca ?? ""} ${p.presentacion ?? ""}\nSKU: ${p.sku ?? "N/A"}`
  );
  const wa = `https://wa.me/524423676804?text=${message}`;

  const related = (data as Product[]).filter(
    (x) => x.id !== p.id && x.categoria === p.categoria
  ).slice(0, 4);

  return (
    <>
      {/* Encabezado */}
      <header className="bg-[var(--brand-sun)]/20">
        <div className="container-max py-10">
          <nav className="text-sm text-ink-400">
            <Link href="/productos" className="hover:underline">
              Productos
            </Link>{" "}
            › <span>{p.nombre}</span>
          </nav>
          <h1 className="mt-2 text-3xl font-extrabold text-ink">{p.nombre}</h1>
          <div className="mt-2 text-sm text-ink-600 flex flex-wrap gap-2">
            {p.marca && <span className="badge">{p.marca}</span>}
            {p.categoria && <span className="badge">{p.categoria}</span>}
            {p.especie && <span className="badge">{p.especie}</span>}
            {p.presentacion && <span className="badge">{p.presentacion}</span>}
          </div>
        </div>
      </header>

      {/* Contenido */}
      <Section className="bg-white">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Imagen */}
          <div className="lg:col-span-5">
            <div className="card overflow-hidden">
              <div className="aspect-square bg-[var(--sun-50)] grid place-items-center">
                {p.imagen ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.imagen}
                    alt={p.nombre}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FiImage className="text-4xl text-ink-400" />
                )}
              </div>
            </div>
          </div>

          {/* Info principal */}
          <div className="lg:col-span-7">
            <div className="card p-5 grid gap-4">
              {p.descripcion && (
                <p className="text-ink-600 leading-relaxed">{p.descripcion}</p>
              )}

              {p.sku && (
                <div className="flex items-center gap-2 text-sm text-ink-600">
                  <FiTag /> <span className="font-medium">SKU:</span> {p.sku}
                </div>
              )}

              {/* Tabla de detalles si existe */}
              {p.detalles && p.detalles.length > 0 && (
                <div className="mt-3">
                  <h3 className="text-sm font-semibold text-ink mb-2 flex items-center gap-2">
                    <FiLayers /> Ficha técnica
                  </h3>
                  <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                    {p.detalles.map((d, i) => (
                      <div key={i} className="flex">
                        <dt className="font-medium text-ink w-28 shrink-0">
                          {d.label}
                        </dt>
                        <dd className="text-ink-600">{d.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-[var(--brand-sun)] border-[var(--brand-sun)] text-ink"
                >
                  <FiMessageCircle /> Solicitar cotización
                </a>
                <Link href="/contacto" className="btn btn-ghost">
                  Contacto
                </Link>
              </div>
            </div>

            {/* Relacionados */}
            {related.length > 0 && (
              <div className="mt-8">
                <h2 className="text-lg font-bold text-ink mb-3 flex items-center gap-2">
                  <FiBox /> También podría interesarte
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {related.map((r) => (
                    <ProductCard key={r.id} {...r} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
