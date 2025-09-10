"use client";

import Section from "@/components/common/Section";

// Lista de marcas (logo en /public/brands/)
const BRANDS = [
  { name: "Pedigree", logo: "../brands/1.png" },
  { name: "Whiskas", logo: "../brands/2.jpg" },
  { name: "Bayer", logo: "../brands/3.jpg" },
  { name: "AquaPet", logo: "../brands/4.jpg" },
  { name: "Animalijos", logo: "../brands/5.png" },
  { name: "brand", logo: "../brands/6.png" }
];

export default function BrandStrip() {
  return (
    <Section title="Nuestras marcas" center className="bg-sun-50">
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
        {BRANDS.map((b) => (
          <div
            key={b.name}
            className=" h-60 flex items-center  "
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
