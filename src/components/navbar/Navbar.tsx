"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronDown,
  FiChevronRight,
  FiMenu,
  FiX,
  FiHome,
  FiPackage,
  FiScissors,
  FiBriefcase,
  FiBookOpen,
  FiInfo,
  FiPhone,
  FiMessageCircle,
} from "react-icons/fi";
import { usePathname } from "next/navigation"; // ⬅️ NUEVO
import { NAV_ITEMS } from "./config";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false); // menú móvil
  const [openIdx, setOpenIdx] = useState<number | null>(null); // dropdown desktop
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname(); // ⬅️ NUEVO

  // ==== Cerrar todo al cambiar de ruta (móvil/desktop) ====
  useEffect(() => {
    // Cada vez que cambie la ruta, se cierra el drawer y dropdowns
    setDrawerOpen(false);
    setOpenIdx(null);
  }, [pathname]);

  // ==== Desktop dropdown helpers ====
  const closeWithDelay = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenIdx(null), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  // Cerrar dropdown con ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIdx(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Bloquear scroll del body cuando el drawer está abierto
  useEffect(() => {
    if (drawerOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [drawerOpen]);

  return (
    <header className="sticky top-0 z-[200] bg-white/90 backdrop-blur border-b border-[var(--ink-50)]">
      <nav className="container-max flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-7 w-7 rounded-lg bg-[var(--brand-sun)]" />
          <span className="font-extrabold text-xl text-ink">Animalijos</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item, idx) => {
            const hasChildren = !!item.children?.length;
            const isOpen = openIdx === idx;

            return (
              <li key={item.label} className="relative" onMouseLeave={closeWithDelay}>
                {hasChildren ? (
                  <>
                    <button
                      className="nav-link inline-flex items-center gap-1"
                      aria-expanded={isOpen}
                      aria-haspopup="menu"
                      onMouseEnter={() => {
                        cancelClose();
                        setOpenIdx(idx);
                      }}
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                    >
                      {item.label}
                      <FiChevronDown
                        className={`mt-0.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          onMouseEnter={cancelClose}
                          onMouseLeave={closeWithDelay}
                          role="menu"
                          className="absolute left-0 mt-2 min-w-72 card p-2 grid grid-cols-2 gap-1"
                        >
                          {item.children!.map((c) => (
                            <Link
                              key={c.href}
                              href={c.href}
                              className="rounded-xl px-3 py-2 text-sm hover:bg-[var(--sun-50)]"
                              onClick={() => setOpenIdx(null)}
                              role="menuitem"
                            >
                              {c.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className={item.cta ? "btn btn-primary nav-cta" : "nav-link"}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile trigger */}
        <button
          className="md:hidden"
          onClick={() => setDrawerOpen(true)}
          aria-label="Abrir menú"
        >
          <FiMenu size={22} />
        </button>
      </nav>

      {/* ======= MENÚ MÓVIL FULL SCREEN ======= */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-white"
            onClick={() => setDrawerOpen(false)}
          >
            {/* Panel a pantalla completa */}
            <motion.aside
              key="mobile-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed inset-0 z-[350] bg-white"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              {/* Header del panel */}
              <div className="relative h-20 bg-[var(--brand-sun)]/90 border-b border-[var(--ink-50)]">
                <div className="container-max h-full flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-block h-8 w-8 rounded-lg bg-white" />
                    <span className="font-extrabold text-lg text-ink">Animalijos</span>
                  </div>
                  <button
                    onClick={() => setDrawerOpen(false)}
                    aria-label="Cerrar menú"
                    className="p-2 rounded-lg bg-white/70"
                  >
                    <FiX size={22} />
                  </button>
                </div>
              </div>

              {/* Contenido scrollable */}
              <div className="h-[calc(100dvh-5rem-4.25rem)] overflow-y-auto bg-white">
                <nav className="container-max py-4">
                  {/* Atajos principales */}
                  <ul className="space-y-1">
                    <MobileLink href="/" icon={<FiHome />}>
                      Inicio
                    </MobileLink>

                    {/* Productos con submenú elegante */}
                    <MobileDisclosure label="Productos" icon={<FiPackage />}>
                      <div className="mt-2 grid grid-cols-1">
                        {NAV_ITEMS.find((i) => i.label === "Productos")?.children?.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="flex items-center justify-between rounded-xl px-4 py-3 bg-[var(--sun-50)] mb-2"
                            onClick={() => setDrawerOpen(false)}
                          >
                            <span className="font-medium">{c.label}</span>
                            <FiChevronRight aria-hidden />
                          </Link>
                        ))}
                      </div>
                    </MobileDisclosure>

                    <MobileLink href="/estetica" icon={<FiScissors />}>
                      Estética
                    </MobileLink>
                    <MobileLink href="/veterinarios" icon={<FiBriefcase />}>
                      Veterinarios
                    </MobileLink>
                    <MobileLink href="/consejos" icon={<FiBookOpen />}>
                      Consejos
                    </MobileLink>
                    <MobileLink href="/nosotros" icon={<FiInfo />}>
                      Nosotros
                    </MobileLink>
                    <MobileLink href="/contacto" icon={<FiPhone />}>
                      Contacto
                    </MobileLink>
                  </ul>

                  {/* Separador visual */}
                  <div className="my-6 h-px bg-[var(--ink-50)]" />

                  {/* Información rápida (opcional) */}
                  <div className="grid gap-3">
                    <div className="text-sm text-ink-400">
                      Estética para mascotas, alimentos, accesorios, snacks y catálogos para veterinarios.
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href="https://wa.me/5210000000000"
                        className="btn bg-[var(--brand-sun)] border-[var(--brand-sun)]"
                        onClick={() => setDrawerOpen(false)}
                      >
                        <FiMessageCircle /> WhatsApp
                      </a>
                    </div>
                  </div>
                </nav>
              </div>

              {/* CTA sticky inferior */}
              <div className="h-17 border-t border-[var(--ink-50)] bg-white">
                <div className="container-max py-3 flex gap-2">
                  <Link
                    href="/contacto?intent=cotizar"
                    className="btn btn-primary flex-1"
                    onClick={() => setDrawerOpen(false)}
                  >
                    Solicitar cotización
                  </Link>
                  <a
                    href="tel:+520000000000"
                    className="btn bg-white border-[var(--ink-50)] flex-0"
                    onClick={() => setDrawerOpen(false)}
                  >
                    <FiPhone />
                  </a>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ========= Subcomponentes Mobile ========= */

function MobileLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center justify-between rounded-xl px-4 py-3 border border-[var(--ink-50)]"
      >
        <span className="flex items-center gap-3">
          {icon ? <span className="text-xl">{icon}</span> : null}
          <span className="font-medium">{children}</span>
        </span>
        <FiChevronRight aria-hidden />
      </Link>
    </li>
  );
}

function MobileDisclosure({
  label,
  icon,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full flex items-center justify-between rounded-xl px-4 py-3 border border-[var(--ink-50)]"
        aria-expanded={open}
      >
        <span className="flex items-center gap-3">
          {icon ? <span className="text-xl">{icon}</span> : null}
          <span className="font-semibold">{label}</span>
        </span>
        <FiChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="pl-1 pr-1"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
