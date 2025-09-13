"use client";

import Link from "next/link";
import ProductCard from "@/components/catalog/ProductCard";
import Section from "@/components/common/Section";
import data from "../../../data/products.json";

type Props = {
  title?: string;
  subtitle?: string;
  products?: any[]; // puedes tiparlo con tu interfaz Product
  limit?: number;
  seeMoreHref?: string; // ruta del catálogo completo
};

export default function FeaturedProducts({
  title = "Productos destacados",
  subtitle,
  products,
  limit = 4,
  seeMoreHref = "/productos",
}: Props) {
  // fallback: agarra los primeros X productos del JSON
  const list = products ?? (data as any[]).slice(0, limit);

  return (
    <Section title={title} subtitle={subtitle} center>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {list.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>

      {/* Botón de ver más */}
      <div className="mt-8 flex justify-center">
        <Link
          href={seeMoreHref}
          className="btn bg-[var(--brand-sun)] border-[var(--brand-sun)] text-ink px-6 py-2 rounded-md font-medium hover:opacity-90 transition"
        >
          Ver más
        </Link>
      </div>
    </Section>
  );
}
