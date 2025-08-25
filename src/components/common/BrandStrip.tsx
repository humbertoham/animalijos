"use client";

import Section from "@/components/common/Section";

// Lista de marcas (logo en /public/brands/)
const BRANDS = [
  { name: "Pedigree", logo: "/brands/pedigree.png" },
  { name: "Whiskas", logo: "/brands/whiskas.png" },
  { name: "Bayer", logo: "/brands/bayer.png" },
  { name: "AquaPet", logo: "/brands/aquapet.png" },
  { name: "Animalijos", logo: "/brands/animalijos.png" }
];

export default function BrandStrip() {
  return (
    <Section title="Nuestras marcas" center className="bg-sun-50">
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
        {BRANDS.map((b) => (
          <div
            key={b.name}
            className="h-14 sm:h-16 flex items-center grayscale hover:grayscale-0 transition"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={b.logo}
              alt={b.name}
              className="max-h-full w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
