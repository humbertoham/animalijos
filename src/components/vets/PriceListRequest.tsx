"use client";

import { useState } from "react";
import { FiMail, FiMessageCircle } from "react-icons/fi";

export default function PriceListRequest() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "Hola, soy veterinario y me interesa su lista de precios.",
  });

  const waLink = `https://wa.me/5210000000000?text=${encodeURIComponent(
    `${form.mensaje}\n\nNombre: ${form.nombre}\nTel: ${form.telefono}\nEmail: ${form.email}`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Por ahora abre WhatsApp directamente
    window.open(waLink, "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card p-6 max-w-2xl mx-auto grid gap-4"
    >
      <p className="text-sm text-ink-600">
        Déjanos tus datos y te compartimos la lista de precios completa para
        clínica.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-sm font-medium text-ink">Nombre</span>
          <input
            required
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            className="border rounded-xl px-3 py-2"
            placeholder="Nombre completo"
          />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium text-ink">Teléfono</span>
          <input
            value={form.telefono}
            onChange={(e) => setForm({ ...form, telefono: e.target.value })}
            className="border rounded-xl px-3 py-2"
            placeholder="+52 ..."
          />
        </label>
      </div>

      <label className="grid gap-1">
        <span className="text-sm font-medium text-ink">Email</span>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border rounded-xl px-3 py-2"
          placeholder="tucorreo@clinica.mx"
        />
      </label>

      <label className="grid gap-1">
        <span className="text-sm font-medium text-ink">Mensaje</span>
        <textarea
          rows={3}
          value={form.mensaje}
          onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
          className="border rounded-xl px-3 py-2"
        />
      </label>

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          className="btn bg-[var(--brand-sun)] border-[var(--brand-sun)] text-ink"
        >
          <FiMessageCircle /> Pedir por WhatsApp
        </button>
        <a
          href={`mailto:contacto@animalijos.mx?subject=Lista%20de%20precios%20veterinarios&body=${encodeURIComponent(
            `${form.mensaje}\n\nNombre: ${form.nombre}\nTel: ${form.telefono}\nEmail: ${form.email}`
          )}`}
          className="btn btn-ghost"
        >
          <FiMail /> Solicitar por correo
        </a>
      </div>
    </form>
  );
}
