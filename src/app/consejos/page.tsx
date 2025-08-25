"use client";

import { useMemo, useState } from "react";
import Section from "@/components/common/Section";
import Link from "next/link";
import { FiSearch, FiChevronRight } from "react-icons/fi";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Alimentos" | "Accesorios" | "Snacks" | "Higiene" | "Estética" | "General";
  cover?: string; // opcional /public/covers/...
  date?: string;  // ISO
};

const ALL_POSTS: Post[] = [
  {
    slug: "como-elegir-alimento-por-etapa",
    title: "Cómo elegir alimento por etapa (cachorro, adulto, senior)",
    excerpt: "Guía rápida para escoger el alimento correcto según la edad, tamaño y necesidades de tu mascota.",
    category: "Alimentos",
    cover: "/covers/food-stage.jpg",
    date: "2025-07-15"
  },
  {
    slug: "checklist-bano-en-casa",
    title: "Checklist para baño en casa sin estrés",
    excerpt: "Preparación, herramientas y pasos para un baño seguro y cómodo.",
    category: "Estética",
    cover: "/covers/home-bath.jpg",
    date: "2025-06-20"
  },
  {
    slug: "snacks-saludables-recompensa",
    title: "Snacks saludables para recompensa",
    excerpt: "Qué buscar en un premio y cómo evitar el exceso de calorías.",
    category: "Snacks",
    cover: "/covers/snacks.jpg",
    date: "2025-05-02"
  },
  {
    slug: "higiene-dental-basica",
    title: "Higiene dental básica: tips y frecuencia",
    excerpt: "Rutinas simples para evitar sarro y mal aliento.",
    category: "Higiene",
    cover: "/covers/dental.jpg",
    date: "2025-04-10"
  },
  {
    slug: "paseo-seguro-arnes-o-collar",
    title: "Paseo seguro: ¿arnés o collar?",
    excerpt: "Pros y contras de cada opción según temperamento y tamaño.",
    category: "Accesorios",
    cover: "/covers/harness.jpg",
    date: "2025-03-18"
  },
  {
    slug: "lista-basica-para-nuevo-tutor",
    title: "Lista básica para nuevos tutores",
    excerpt: "Todo lo esencial para recibir a tu nuevo compañero.",
    category: "General",
    cover: "/covers/starter-kit.jpg",
    date: "2025-01-28"
  }
];

const CATEGORIES: Array<Post["category"] | "Todas"> = [
  "Todas",
  "Alimentos",
  "Accesorios",
  "Snacks",
  "Higiene",
  "Estética",
  "General"
];

export default function ConsejosPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("Todas");

  const posts = useMemo(() => {
    const byCat =
      cat === "Todas" ? ALL_POSTS : ALL_POSTS.filter((p) => p.category === cat);
    const term = q.trim().toLowerCase();
    if (!term) return byCat;
    return byCat.filter(
      (p) =>
        p.title.toLowerCase().includes(term) ||
        p.excerpt.toLowerCase().includes(term)
    );
  }, [q, cat]);

  return (
    <>
      {/* Encabezado de sección */}
      <header className="bg-[var(--brand-sun)]/20">
        <div className="container-max py-12 lg:py-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-ink">Consejos y guías</h1>
          <p className="mt-3 text-ink-600 max-w-2xl">
            Recomendaciones rápidas sobre alimentos, accesorios, estética e higiene para el
            bienestar de tu mascota.
          </p>
        </div>
      </header>

      {/* Barra de búsqueda + categorías */}
      <Section className="bg-white">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Buscador */}
          <label className="relative w-full lg:max-w-md">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar consejos (ej. baño, dental, snacks)"
              className="w-full pl-10 pr-3 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-[var(--brand-sun)]"
            />
          </label>

          {/* Categorías */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-3 py-1.5 rounded-xl border text-sm ${
                  cat === c
                    ? "bg-[var(--brand-sun)] border-[var(--brand-sun)] text-ink"
                    : "bg-white border-[var(--ink-50)] hover:bg-[var(--sun-50)]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de artículos */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <ArticleCard key={p.slug} post={p} />
          ))}
        </div>

        {/* Estado vacío */}
        {posts.length === 0 && (
          <div className="mt-10 text-center text-ink-400">
            No encontramos artículos para tu búsqueda. Prueba con otra palabra.
          </div>
        )}
      </Section>
    </>
  );
}

/* ===== Subcomponente local ===== */

function ArticleCard({ post }: { post: Post }) {
  return (
    <article className="card overflow-hidden flex flex-col">
      <Link href={`/consejos/${post.slug}`} className="block aspect-[16/9] bg-[var(--sun-50)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {post.cover ? (
          <img
            src={post.cover}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full grid place-items-center text-ink-400 text-sm">
            Sin imagen
          </div>
        )}
      </Link>

      <div className="p-4 flex flex-col gap-2">
        <div className="text-xs text-ink-400">{post.category}</div>
        <Link href={`/consejos/${post.slug}`} className="font-semibold text-ink hover:underline">
          {post.title}
        </Link>
        <p className="text-sm text-ink-600 line-clamp-3">{post.excerpt}</p>

        <div className="mt-2">
          <Link
            href={`/consejos/${post.slug}`}
            className="inline-flex items-center gap-1 text-sm text-ink hover:underline"
          >
            Leer más
            <FiChevronRight aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
