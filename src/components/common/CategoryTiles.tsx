"use client";

import Link from "next/link";
import {
  GiDogBowl,
  GiCat,
  GiParrotHead,
  GiFishEggs,
  GiSittingDog,
  GiSoap,
} from "react-icons/gi";
import Section from "@/components/common/Section";

const CATS = [
  {
    label: "Alimentos",
    icon: GiDogBowl,
    href: "/productos?categoria=alimento",
  },
  {
    label: "Accesorios",
    icon: GiSittingDog,
    href: "/productos?categoria=accesorio",
  },
  {
    label: "Snacks",
    icon: GiDogBowl,
    href: "/productos?categoria=snack",
  },
  {
    label: "Higiene & Cuidado",
    icon: GiSoap,
    href: "/productos?categoria=higiene",
  },
  {
    label: "Perros",
    icon: GiSittingDog,
    href: "/productos?especie=perro",
  },
  {
    label: "Gatos",
    icon: GiCat,
    href: "/productos?especie=gato",
  },
  {
    label: "Aves",
    icon: GiParrotHead,
    href: "/productos?especie=aves",
  },
  {
    label: "Peces",
    icon: GiFishEggs,
    href: "/productos?especie=peces",
  },
];

export default function CategoryTiles() {
  return (
    <Section title="Explora categorías" center>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {CATS.map(({ label, icon: Icon, href }) => (
          <Link
            key={label}
            href={href}
            className="card p-6 flex flex-col items-center justify-center hover:shadow-md transition group"
          >
            <Icon className="text-4xl text-ink group-hover:scale-110 transition-transform" />
            <div className="mt-3 font-medium text-ink group-hover:underline text-center">
              {label}
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
