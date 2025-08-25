"use client";

import { useMemo } from "react";
import { FiMessageCircle } from "react-icons/fi";

type Props = {
  /** Número en formato internacional, sin signos. Ej: "5218112345678" */
  phone: string;
  /** Mensaje inicial (se URI-encodea) */
  message?: string;
  /** Esquina donde aparece el botón */
  position?: "bottom-right" | "bottom-left";
  /** Mostrar en desktop (>= md) */
  showDesktop?: boolean;
  /** Mostrar en mobile (< md) */
  showMobile?: boolean;
  /** Separación del borde en px */
  offset?: number;
  /** UTM opcional para analytics */
  utm?: { source?: string; medium?: string; campaign?: string };
};

export default function WhatsAppFAB({
  phone,
  message = "Hola, vengo del sitio de Animalijos y quiero más información.",
  position = "bottom-right",
  showDesktop = true,
  showMobile = true,
  offset = 20,
  utm,
}: Props) {
  const href = useMemo(() => {
    const base = `https://wa.me/${phone}`;
    const params = new URLSearchParams();
    if (message) params.set("text", message);
    if (utm?.source) params.set("utm_source", utm.source);
    if (utm?.medium) params.set("utm_medium", utm.medium);
    if (utm?.campaign) params.set("utm_campaign", utm.campaign);
    return `${base}?${params.toString()}`;
  }, [phone, message, utm]);

  // visibilidad por viewport
  const hiddenClasses = [
    showDesktop ? "" : "md:hidden",
    showMobile ? "" : "hidden md:block",
  ]
    .filter(Boolean)
    .join(" ");

  const pos =
    position === "bottom-left"
      ? { left: `${offset}px`, right: "auto" }
      : { right: `${offset}px`, left: "auto" };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      className={`fixed z-[180] bottom-[${offset}px] ${hiddenClasses}`}
      // Tailwind v4 no genera clases dinámicas para bottom con vars → usamos style:
      style={{ bottom: offset, ...pos }}
    >
      <span
        className="grid place-items-center h-14 w-14 rounded-full shadow-lg border bg-[var(--brand-sun)] border-[var(--brand-sun)]"
        title="Chatea por WhatsApp"
      >
        <FiMessageCircle className="text-2xl text-ink" aria-hidden />
      </span>
    </a>
  );
}
