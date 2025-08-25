import Section from "@/components/common/Section";

export default function AvisoPrivacidadPage() {
  return (
    <>
      <header className="bg-[var(--brand-sun)]/20">
        <div className="container-max py-12 lg:py-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-ink">
            Aviso de Privacidad
          </h1>
          <p className="mt-3 text-ink-600 max-w-2xl">
            Este Aviso de Privacidad describe cómo Animalijos recaba, utiliza y
            protege los datos personales de sus clientes y visitantes, en
            cumplimiento con la Ley Federal de Protección de Datos Personales en
            Posesión de los Particulares (LFPDPPP).
          </p>
        </div>
      </header>

      <Section className="bg-white prose max-w-3xl mx-auto prose-h2:text-ink prose-p:text-ink-600">
        <h2>1. Responsable del tratamiento</h2>
        <p>
          Animalijos, con domicilio en Santiago de Querétaro, Qro., es
          responsable del tratamiento de tus datos personales y se compromete a
          proteger tu privacidad.
        </p>

        <h2>2. Datos que recabamos</h2>
        <p>
          Los datos personales que podemos solicitar incluyen: nombre completo,
          teléfono, correo electrónico, domicilio, y datos de facturación en
          caso de requerirlos. Adicionalmente, podemos recabar preferencias
          relacionadas con productos y servicios para mascotas.
        </p>

        <h2>3. Finalidades del tratamiento</h2>
        <ul>
          <li>Proveer los productos y servicios solicitados.</li>
          <li>Gestionar solicitudes de información, cotizaciones o contacto.</li>
          <li>Enviar comunicaciones comerciales y promocionales.</li>
          <li>Cumplir con obligaciones legales y fiscales.</li>
        </ul>

        <h2>4. Opciones para limitar el uso</h2>
        <p>
          Puedes limitar el uso o divulgación de tus datos enviando un correo a{" "}
          <a href="mailto:contacto@animalijos.mx">contacto@animalijos.mx</a>.
        </p>

        <h2>5. Derechos ARCO</h2>
        <p>
          Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte (ARCO) al
          uso de tus datos personales. Para ejercerlos, envía una solicitud
          formal al correo{" "}
          <a href="mailto:contacto@animalijos.mx">contacto@animalijos.mx</a>.
        </p>

        <h2>6. Transferencia de datos</h2>
        <p>
          Animalijos no compartirá tus datos con terceros sin tu consentimiento,
          salvo que sea requerido por autoridad competente o por obligaciones
          legales.
        </p>

        <h2>7. Cambios al aviso</h2>
        <p>
          Animalijos podrá modificar este aviso de privacidad en cualquier
          momento. Los cambios se publicarán en esta misma sección de nuestro
          sitio web.
        </p>

        <p className="mt-6 text-sm text-ink-400">
          Última actualización: 25 de agosto de 2025
        </p>
      </Section>
    </>
  );
}
