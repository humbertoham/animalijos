"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-sun-50">
      {/* Banda amarilla inclinada */}
      <div className="absolute -z-10 inset-x-0 top-0 h-[380px] bg-[var(--brand-sun)] rotate-1" />

      <div className="container-max py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Texto */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight text-ink"
          >
            Estética & Catálogo profesional{" "}
            <span className="text-[var(--brand-sun)]">para tu mejor amigo</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 text-lg text-ink-600 max-w-prose"
          >
            Alimentos, accesorios, snacks y servicios de estética. Descubre
            nuestro catálogo de productos y agenda la mejor experiencia para tu
            mascota.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link href="/productos" className="btn btn-primary">
              Ver productos
            </Link>
            <Link href="/estetica" className="btn btn-ghost">
              Agendar estética
            </Link>
          </motion.div>
        </div>

        {/* Imagen/ilustración */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className=" rounded-2xl overflow-hidden card bg-sun-100 grid place-items-center">
            {/* Aquí pones tu imagen */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="../images/herosec.png"
              alt="Animalijos"
              className=" h-auto object-contain opacity-90"
            />
          </div>
          {/* Decoración */}
          <span className="absolute -top-4 -left-4 w-20 h-20 bg-[var(--brand-sun)] rounded-full blur-2xl opacity-40" />
          <span className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--brand-ink)] rounded-full blur-3xl opacity-20" />
        </motion.div>
      </div>
    </section>
  );
}
