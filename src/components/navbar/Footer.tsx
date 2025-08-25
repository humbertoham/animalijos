"use client";

import Link from "next/link";
import { FiPhone, FiMail, FiMapPin, FiClock, FiMessageCircle } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--ink-50)] bg-white">
      {/* Top */}
      <div className="container-max py-10 grid gap-8 md:gap-10 lg:grid-cols-12">
        {/* Branding + about */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block h-8 w-8 rounded-lg bg-[var(--brand-sun)]" />
            <span className="font-extrabold text-xl text-ink">Animalijos</span>
          </div>
          <p className="text-sm text-ink-400 max-w-prose">
            Estética para mascotas, alimentos, accesorios, snacks y catálogos para veterinarios.
            Consulta el catálogo y solicita tu cotización.
          </p>

          <div className="mt-4 flex gap-2">
            <a
              href="https://wa.me/5210000000000"
              className="btn bg-[var(--brand-sun)] border-[var(--brand-sun)]"
              aria-label="WhatsApp"
            >
              <FiMessageCircle />
              WhatsApp
            </a>
            <a href="tel:+520000000000" className="btn bg-white border-[var(--ink-50)]">
              <FiPhone />
              Llamar
            </a>
          </div>
        </div>

        {/* Links rápidos */}
        <div className="lg:col-span-3 grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-ink">Productos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/productos?categoria=alimento" className="hover:underline">Alimentos</Link></li>
              <li><Link href="/productos?categoria=accesorio" className="hover:underline">Accesorios</Link></li>
              <li><Link href="/productos?categoria=snack" className="hover:underline">Snacks</Link></li>
              <li><Link href="/productos?categoria=higiene" className="hover:underline">Higiene & Cuidado</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-ink">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/estetica" className="hover:underline">Estética</Link></li>
              <li><Link href="/veterinarios" className="hover:underline">Veterinarios</Link></li>
              <li><Link href="/nosotros" className="hover:underline">Nosotros</Link></li>
              <li><Link href="/contacto" className="hover:underline">Contacto</Link></li>
            </ul>
          </div>
        </div>

        {/* Contacto + horario */}
        <div className="lg:col-span-5">
          <div className="grid gap-4 card p-4">
            <div className="flex items-start gap-3">
              <FiMapPin className="mt-1 text-ink-400" />
              <div className="text-sm">
                <div className="font-medium text-ink">Dirección</div>
                <div className="text-ink-400">
                  Senda del Carruaje, 76060 Santiago de Querétaro, Qro.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FiPhone className="mt-1 text-ink-400" />
              <div className="text-sm">
                <div className="font-medium text-ink">Teléfono</div>
                <a href="tel:+520000000000" className="text-ink-400 hover:underline">+52 000 000 0000</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FiMail className="mt-1 text-ink-400" />
              <div className="text-sm">
                <div className="font-medium text-ink">Correo</div>
                <a href="mailto:contacto@animalijos.mx" className="text-ink-400 hover:underline">
                  contacto@animalijos.mx
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FiClock className="mt-1 text-ink-400" />
              <div className="text-sm">
                <div className="font-medium text-ink">Horario</div>
                <div className="text-ink-400">Lun–Sáb 9:00–19:00, Dom 10:00–15:00</div>
              </div>
            </div>
          </div>

          {/* Mapa responsive */}
          <div className="mt-4 card overflow-hidden">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9]">
              <iframe
                title="Ubicación Animalijos"
                className="absolute inset-0 h-full w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.8174687970513!2d-100.36251712403806!3d20.5955105025168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35b51fb809dcb%3A0x5d975c2b9eadc0d3!2sSenda%20del%20Carruaje%2C%2076060%20Santiago%20de%20Quer%C3%A9taro%2C%20Qro.!5e0!3m2!1sen!2smx!4v1756086639296!5m2!1sen!2smx"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--ink-50)] bg-white/90">
        <div className="container-max py-4 text-xs text-ink-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} Animalijos. Todos los derechos reservados.</div>
          <div className="flex items-center gap-4">
            <Link href="/aviso-de-privacidad" className="hover:underline">Aviso de privacidad</Link>
            <Link href="/terminos" className="hover:underline">Términos & Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
