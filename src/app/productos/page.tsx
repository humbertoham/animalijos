import Section from "@/components/common/Section";
import ProductCard from "@/components/catalog/ProductCard";
import data from "../../../data/products.json"; // ✅ alias estable

type SearchParams = {
  q?: string;
  categoria?: string;
  marca?: string;
  especie?: string;
  order?: "relevancia" | "az" | "marca";
  page?: string;
};

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
};

const PER_PAGE = 12;

function deriveFacets(list: Product[]) {
  const cats = new Set<string>();
  const brands = new Set<string>();
  const species = new Set<string>();
  for (const p of list) {
    if (p.categoria) cats.add(p.categoria);
    if (p.marca) brands.add(p.marca);
    if (p.especie) species.add(p.especie);
  }
  return {
    categorias: Array.from(cats).sort((a, b) => a.localeCompare(b)),
    marcas: Array.from(brands).sort((a, b) => a.localeCompare(b)),
    especies: Array.from(species).sort((a, b) => a.localeCompare(b)),
  };
}

function relevanceScore(p: Product, term: string) {
  const t = term.toLowerCase();
  const haystack = [
    p.nombre,
    p.marca ?? "",
    p.categoria ?? "",
    p.presentacion ?? "",
    p.descripcion ?? "",
    p.especie ?? "",
  ]
    .join(" ")
    .toLowerCase();
  let score = 0;
  if (haystack.includes(t)) score += 10;
  if ((p.nombre ?? "").toLowerCase().includes(t)) score += 5;
  if ((p.marca ?? "").toLowerCase().includes(t)) score += 2;
  return score;
}

function buildQuery(
  original: URLSearchParams,
  overrides: Record<string, string | undefined | null>
) {
  const next = new URLSearchParams(original.toString());
  Object.entries(overrides).forEach(([k, v]) => {
    if (v === undefined || v === null || v === "") next.delete(k);
    else next.set(k, String(v));
  });
  return `?${next.toString()}`;
}

/** Hace match entre el param (lowercase) y el valor canónico de las facets */
function facetDefault(paramLower: string, facets: string[]) {
  if (!paramLower) return "";
  return facets.find((f) => f.toLowerCase() === paramLower) ?? "";
}

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>; // ✅ Promise<SearchParams>
}) {
  const sp = await searchParams; // ✅ await

  const products = data as Product[];
  const { categorias, marcas, especies } = deriveFacets(products);

  const q = (sp.q ?? "").trim();

  // normalizamos params a lowercase para comparar
  const categoriaParam = (sp.categoria ?? "").trim().toLowerCase();
  const marcaParam = (sp.marca ?? "").trim().toLowerCase();
  const especieParam = (sp.especie ?? "").trim().toLowerCase();

  const order = (sp.order ?? "relevancia") as "relevancia" | "az" | "marca";
  const page = Math.max(1, Number(sp.page ?? "1"));

  // Filtrado case-insensitive
  let filtered = products.filter((p) => {
    const pCat = (p.categoria ?? "").toLowerCase();
    const pBrand = (p.marca ?? "").toLowerCase();
    const pSpec = (p.especie ?? "").toLowerCase();

    if (categoriaParam && pCat !== categoriaParam) return false;
    if (marcaParam && pBrand !== marcaParam) return false;
    if (especieParam && pSpec !== especieParam) return false;

    if (q) {
      const s = relevanceScore(p, q);
      if (s <= 0) return false;
    }
    return true;
  });

  // Orden
  if (order === "az") {
    filtered = filtered.sort((a, b) => a.nombre.localeCompare(b.nombre));
  } else if (order === "marca") {
    filtered = filtered.sort(
      (a, b) =>
        (a.marca ?? "").localeCompare(b.marca ?? "") ||
        a.nombre.localeCompare(b.nombre)
    );
  } else if (order === "relevancia" && q) {
    filtered = filtered
      .map((p) => ({ p, s: relevanceScore(p, q) }))
      .sort((a, b) => b.s - a.s)
      .map(({ p }) => p);
  }

  // Paginación
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  const start = (page - 1) * PER_PAGE;
  const paged = filtered.slice(start, start + PER_PAGE);

  const qs = new URLSearchParams(Object.entries(sp as any)); // ✅ usa sp

  return (
    <>
      <header className="bg-[var(--brand-sun)]/20">
        <div className="container-max py-10">
          <h1 className="text-3xl font-extrabold text-ink">
            Catálogo de productos
          </h1>
          <p className="mt-2 text-ink-600 max-w-2xl">
            Filtra por especie, categoría o marca y solicita tu cotización.
          </p>
        </div>
      </header>

      <Section className="bg-white">
        <form method="get" className="card p-4 grid gap-3 lg:grid-cols-12">
          {/* Búsqueda */}
          <label className="lg:col-span-4 grid gap-1">
            <span className="text-sm font-medium text-ink">Buscar</span>
            <input
              type="search"
              name="q"
              defaultValue={q}
              placeholder="Ej. Pedigree, shampoo, collar…"
              className="border rounded-xl px-3 py-2"
            />
          </label>

          {/* Categoría */}
          <label className="lg:col-span-2 grid gap-1">
            <span className="text-sm font-medium text-ink">Categoría</span>
            <select
              name="categoria"
              defaultValue={facetDefault(categoriaParam, categorias)}
              className="border rounded-xl px-3 py-2"
            >
              <option value="">Todas</option>
              {categorias.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>

          {/* Marca */}
          <label className="lg:col-span-2 grid gap-1">
            <span className="text-sm font-medium text-ink">Marca</span>
            <select
              name="marca"
              defaultValue={facetDefault(marcaParam, marcas)}
              className="border rounded-xl px-3 py-2"
            >
              <option value="">Todas</option>
              {marcas.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </label>

          {/* Especie */}
          <label className="lg:col-span-2 grid gap-1">
            <span className="text-sm font-medium text-ink">Especie</span>
            <select
              name="especie"
              defaultValue={facetDefault(especieParam, especies)}
              className="border rounded-xl px-3 py-2"
            >
              <option value="">Todas</option>
              {especies.map((e) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </select>
          </label>

          {/* Orden */}
          <label className="lg:col-span-2 grid gap-1">
            <span className="text-sm font-medium text-ink">Ordenar por</span>
            <select
              name="order"
              defaultValue={order}
              className="border rounded-xl px-3 py-2"
            >
              <option value="relevancia">Relevancia</option>
              <option value="az">Nombre (A–Z)</option>
              <option value="marca">Marca</option>
            </select>
          </label>

          {/* Acciones */}
          <div className="lg:col-span-12 flex items-center gap-3 pt-1">
            <button type="submit" className="btn btn-primary">
              Aplicar filtros
            </button>
            <a
              href={buildQuery(qs, {
                q: "",
                categoria: "",
                marca: "",
                especie: "",
                order: "",
                page: "",
              })}
              className="btn btn-ghost"
            >
              Limpiar
            </a>
            <div className="ml-auto text-sm text-ink-400">
              Mostrando {paged.length} de {total} resultado
              {total === 1 ? "" : "s"}
            </div>
          </div>
        </form>

        {/* Grid */}
        {paged.length > 0 ? (
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {paged.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        ) : (
          <EmptyState q={q} />
        )}

        {/* Paginación */}
        {totalPages > 1 && (
          <nav className="mt-8 flex items-center justify-center gap-2">
            <a
              className={`btn bg-white border-[var(--ink-50)] ${
                page <= 1 ? "opacity-50 pointer-events-none" : ""
              }`}
              href={buildQuery(qs, { page: String(page - 1) })}
            >
              ← Anterior
            </a>
            <span className="text-sm text-ink-600">
              Página {page} de {totalPages}
            </span>
            <a
              className={`btn bg-white border-[var(--ink-50)] ${
                page >= totalPages ? "opacity-50 pointer-events-none" : ""
              }`}
              href={buildQuery(qs, { page: String(page + 1) })}
            >
              Siguiente →
            </a>
          </nav>
        )}
      </Section>
    </>
  );
}

/* ===== Estado vacío ===== */
function EmptyState({ q }: { q?: string }) {
  return (
    <div className="mt-10 card p-8 text-center">
      <h3 className="text-lg font-semibold text-ink">Sin resultados</h3>
      <p className="text-sm text-ink-600 mt-1">
        {q
          ? `No encontramos productos para “${q}”. Intenta con otro término o limpia los filtros.`
          : "No hay productos para los filtros seleccionados."}
      </p>
      <div className="mt-4">
        <a href="?" className="btn btn-ghost">
          Quitar filtros
        </a>
      </div>
    </div>
  );
}
