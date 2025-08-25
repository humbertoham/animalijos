"use client";

import { useState } from "react";
import Section from "@/components/common/Section";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 🚀 aquí puedes manejar el submit: enviar a API, email o WhatsApp
    alert("Mensaje enviado (demo)");
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <>
      {/* Encabezado */}
      <header className="bg-[var(--brand-sun)]/20">
        <div className="container-max py-12 lg:py-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-ink">Contacto</h1>
          <p className="mt-3 text-ink-600 max-w-2xl">
            Escríbenos para agendar estética, pedir una cotización o resolver tus dudas.
          </p>
        </div>
      </header>

   

      {/* Formulario */}
      <Section title="Escríbenos" subtitle="Responderemos lo antes posible" center>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto card p-6 grid gap-4"
        >
          <label className="grid gap-1">
            <span className="text-sm font-medium text-ink">Nombre</span>
            <input
              type="text"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              required
              className="border rounded-xl px-3 py-2"
              placeholder="Tu nombre"
            />
          </label>
          <label className="grid gap-1">
            <span className="text-sm font-medium text-ink">Correo</span>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="border rounded-xl px-3 py-2"
              placeholder="tunombre@email.com"
            />
          </label>
          <label className="grid gap-1">
            <span className="text-sm font-medium text-ink">Mensaje</span>
            <textarea
              value={form.mensaje}
              onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
              required
              rows={4}
              className="border rounded-xl px-3 py-2"
              placeholder="Escribe tu mensaje..."
            />
          </label>
          <button type="submit" className="btn btn-primary w-full">
            Enviar mensaje
          </button>
        </form>
      </Section>

   
    </>
  );
}

/* ===== Subcomponente local ===== */
function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card p-5 flex flex-col gap-2">
      <div className="flex items-center gap-2 text-ink">
        <span className="text-xl">{icon}</span>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <div className="text-sm text-ink-600">{children}</div>
    </div>
  );
}
