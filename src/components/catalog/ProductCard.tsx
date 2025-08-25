"use client";

import Link from "next/link";
import { FiImage, FiShoppingCart } from "react-icons/fi";

type Product = {
  id: string;
  nombre: string;
  marca?: string;
  categoria?: string;
  presentacion?: string;
  imagen?: string | null;
  sku?: string;
};

export default function ProductCard({
  id,
  nombre,
  marca,
  categoria,
  presentacion,
  imagen,
  sku,
}: Product) {
  // Mensaje para WhatsApp
  const message = encodeURIComponent(
    `Hola, me interesa el producto:\n\n${nombre}\n${marca ?? ""} ${
      presentacion ?? ""
    }\nSKU: ${sku ?? "N/A"}`
  );

  const waLink = `https://wa.me/5210000000000?text=${message}`;

  return (
    <article className="card flex flex-col overflow-hidden hover:shadow-md transition">
      {/* Imagen o placeholder */}
      <Link
        href={`/productos/${id}`}
        className="aspect-square bg-sun-50 flex items-center justify-center overflow-hidden"
      >
        {imagen ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imagen}
            alt={nombre}
            className="w-full h-full object-cover"
          />
        ) : (
          <FiImage className="text-4xl text-ink-400" />
        )}
      </Link>

      {/* Contenido */}
      <div className="p-3 flex flex-col flex-1">
        <Link href={`/productos/${id}`}>
          <h3 className="font-semibold text-sm text-ink line-clamp-2">
            {nombre}
          </h3>
        </Link>
        <p className="text-xs text-ink-400 mt-1">
          {[marca, presentacion].filter(Boolean).join(" · ")}
        </p>

        <div className="mt-auto pt-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn w-full bg-[var(--brand-sun)] border-[var(--brand-sun)] text-ink hover:opacity-90"
          >
            <FiShoppingCart className="text-lg" /> Cotizar
          </a>
        </div>
      </div>
    </article>
  );
}
