import { notFound } from "next/navigation";
import Section from "@/components/common/Section";
import consejos from "../../../../data/consejos.json";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  cover?: string;
  date?: string;
  content: string;
};

export function generateStaticParams() {
  return (consejos as Post[]).map((p) => ({ slug: p.slug }));
}

export default function ConsejosSlugPage({ params }: { params: { slug: string } }) {
  const post = (consejos as Post[]).find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <>
      <header className="bg-[var(--brand-sun)]/20">
        <div className="container-max py-12 lg:py-16">
          <p className="text-sm text-ink-400">{post.category}</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-ink">{post.title}</h1>
          {post.date && (
            <p className="mt-2 text-xs text-ink-400">
              {new Date(post.date).toLocaleDateString("es-MX", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
          )}
        </div>
      </header>

      <Section className="bg-white">
        <article className="prose max-w-3xl mx-auto prose-h2:text-ink prose-p:text-ink-600">
          {post.cover && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.cover}
              alt={post.title}
              className="rounded-xl mb-6 w-full object-cover"
            />
          )}

          {/* Render básico del contenido (divide por saltos de línea) */}
          {post.content.split("\n").map((line, idx) =>
            line.startsWith("###") ? (
              <h2 key={idx}>{line.replace("###", "").trim()}</h2>
            ) : line.trim() ? (
              <p key={idx}>{line}</p>
            ) : null
          )}
        </article>
      </Section>
    </>
  );
}
