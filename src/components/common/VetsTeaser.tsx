"use client";

import Link from "next/link";
import Section from "@/components/common/Section";
import { FiBookOpen, FiDownload } from "react-icons/fi";

export default function VetsTeaser() {
  return (
    <Section
      title="Catálogos para veterinarios"
      subtitle="Equipamiento y productos especializados"
      center
      className="bg-white"
    >
      <div className="grid gap-6 lg:grid-cols-2 items-center">
        {/* Texto */}
        <div className="text-ink max-w-prose mx-auto">
          <p className="text-lg text-ink-600">
            Si tienes una clínica o consultorio veterinario, ponemos a tu
            disposición catálogos con productos especializados para tu práctica
            profesional. Consulta presentaciones, equipamiento y materiales
            diseñados para tu día a día.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              href="/veterinarios"
              className="btn btn-primary"
            >
              <FiBookOpen className="text-lg" />
              Ver catálogos
            </Link>
           
          </div>
        </div>

        {/* Imagen/ilustración placeholder */}
        <div className="card bg-sun-50 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="../images/vet.png"
            alt="Catálogo veterinarios"
            className=" rounded-xl w-auto opacity-90"
          />
        </div>
      </div>
    </Section>
  );
}
