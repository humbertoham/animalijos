"use client";

import { FiDownload, FiExternalLink, FiBookOpen } from "react-icons/fi";

type Props = {
  slug: string;
  titulo: string;
  marca?: string;
  descripcion?: string;
  portada?: string; // ruta en /public/catalogos/portadas/...
  pdfUrl: string;   // ruta al PDF en /public/catalogos/
  pagina?: string;  // opcional: link externo
};

export default function CatalogCard({
  titulo,
  marca,
  descripcion,
  portada,
  pdfUrl,
  pagina,
}: Props) {
  return (
    <article className="card overflow-hidden flex flex-col hover:shadow-md transition">
      {/* Imagen / portada */}
      <div className="aspect-[16/9] bg-[var(--sun-50)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {portada ? (
          <img
            src={portada}
            alt={titulo}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full grid place-items-center text-ink-400 text-sm">
            Sin portada
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="text-xs text-ink-400">{marca || "Veterinario"}</div>
        <h3 className="mt-1 font-semibold text-ink">{titulo}</h3>
        {descripcion && (
          <p className="mt-1 text-sm text-ink-600 ">{descripcion}</p>
        )}

        {/* Acciones */}
        <div className="mt-auto pt-3 grid grid-cols-2 gap-2">
          <a
            href={pdfUrl}
            download // fuerza la descarga
            className="btn bg-[var(--brand-sun)] border-[var(--brand-sun)] text-ink"
            aria-label={`Descargar ${titulo}`}
          >
            <FiDownload /> PDF
          </a>
        </div>
      </div>
    </article>
  );
}
