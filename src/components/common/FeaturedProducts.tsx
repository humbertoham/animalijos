"use client";

import ProductCard from "@/components/catalog/ProductCard";
import Section from "@/components/common/Section";
import data from "../../../data/products.json";

type Props = {
  title?: string;
  subtitle?: string;
  products?: any[]; // puedes tiparlo con tu interfaz Product
  limit?: number;
};

export default function FeaturedProducts({
  title = "Productos destacados",
  subtitle,
  products,
  limit = 4,
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
    </Section>
  );
}
