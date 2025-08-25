import Section from "@/components/common/Section";

export default function TerminosPage() {
  return (
    <>
      <header className="bg-[var(--brand-sun)]/20">
        <div className="container-max py-12 lg:py-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-ink">
            Términos & Condiciones
          </h1>
          <p className="mt-3 text-ink-600 max-w-2xl">
            El acceso y uso del sitio web de Animalijos implica la aceptación de
            los presentes términos y condiciones. Te invitamos a leerlos
            detenidamente.
          </p>
        </div>
      </header>

      <Section className="bg-white prose max-w-3xl mx-auto prose-h2:text-ink prose-p:text-ink-600">
        <h2>1. Uso del sitio</h2>
        <p>
          El contenido de este sitio tiene fines informativos y de referencia.
          Animalijos se reserva el derecho de actualizar, modificar o
          descontinuar contenidos en cualquier momento sin previo aviso.
        </p>

        <h2>2. Productos y servicios</h2>
        <p>
          Los productos y catálogos mostrados en este sitio son ilustrativos y
          no constituyen una oferta comercial vinculante. Los precios y
          condiciones deberán confirmarse directamente con nuestro personal de
          ventas.
        </p>

        <h2>3. Propiedad intelectual</h2>
        <p>
          Todos los derechos de propiedad intelectual sobre el contenido del
          sitio (logotipos, imágenes, textos, catálogos) corresponden a
          Animalijos o a sus legítimos titulares, y están protegidos por la
          legislación aplicable.
        </p>

        <h2>4. Limitación de responsabilidad</h2>
        <p>
          Animalijos no se hace responsable de daños derivados del uso del sitio
          ni garantiza la disponibilidad continua del mismo. El uso de la
          información es responsabilidad exclusiva del usuario.
        </p>

        <h2>5. Enlaces a terceros</h2>
        <p>
          Este sitio puede incluir enlaces a sitios web de terceros. Animalijos
          no asume responsabilidad alguna por el contenido ni por las políticas
          de privacidad de dichos sitios.
        </p>

        <h2>6. Privacidad</h2>
        <p>
          El manejo de los datos personales proporcionados por los usuarios se
          rige por nuestro{" "}
          <a href="/aviso-de-privacidad">Aviso de Privacidad</a>.
        </p>

        <h2>7. Modificaciones</h2>
        <p>
          Animalijos se reserva el derecho de modificar estos términos en
          cualquier momento. Los cambios entrarán en vigor al ser publicados en
          esta sección.
        </p>

        <h2>8. Legislación aplicable</h2>
        <p>
          Estos términos se regirán e interpretarán conforme a las leyes
          mexicanas. Cualquier controversia será sometida a la jurisdicción de
          los tribunales competentes en Querétaro, México.
        </p>

        <p className="mt-6 text-sm text-ink-400">
          Última actualización: 25 de agosto de 2025
        </p>
      </Section>
    </>
  );
}
