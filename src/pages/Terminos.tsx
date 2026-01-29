import { Link } from "react-router-dom"

export default function TerminosPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold mb-8 text-[#2B4360] border-b pb-4">
        Términos y Condiciones
      </h1>

      <p className="mb-6 text-lg">
        Bienvenido a nuestra tienda. Al acceder y utilizar este sitio web, usted acepta estar sujeto a los siguientes términos y condiciones. Por favor, léalos cuidadosamente antes de continuar. Si no está de acuerdo con alguna parte de estos términos, le recomendamos no utilizar nuestros servicios.
      </p>
      
      {/* Content from original file, sections 1-7 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#2B4360]">
          1. Información General
        </h2>
        <p className="mb-4">
          Este sitio web es operado por nuestra empresa. En todo el sitio, los términos &quot;nosotros&quot;, &quot;nos&quot; y &quot;nuestro&quot; se refieren a nuestra empresa. Ofrecemos este sitio web, incluyendo toda la información, herramientas y servicios disponibles para usted, el usuario, condicionado a la aceptación de todos los términos, condiciones, políticas y notificaciones aquí establecidos.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#2B4360]">
          2. Uso del Sitio Web
        </h2>
        <p className="mb-4">
          Al utilizar nuestro sitio, usted garantiza que tiene al menos la mayoría de edad en su estado o provincia de residencia, o que tiene la mayoría de edad y nos ha dado su consentimiento para permitir que cualquiera de sus dependientes menores use este sitio.
        </p>
        <p className="mb-4">
          No puede usar nuestros productos para ningún propósito ilegal o no autorizado ni puede, en el uso del Servicio, violar cualquier ley en su jurisdicción (incluyendo pero no limitado a las leyes de derechos de autor).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#2B4360]">
          3. Productos y Servicios
        </h2>
        <p className="mb-4">
          Ciertos productos o servicios pueden estar disponibles exclusivamente en línea a través del sitio web. Estos productos o servicios pueden tener cantidades limitadas y están sujetos a devolución o cambio de acuerdo con nuestra Política de Devolución.
        </p>
        <p className="mb-4">
          Hemos hecho todo lo posible para mostrar con la mayor precisión posible los colores e imágenes de nuestros productos que aparecen en la tienda. No podemos garantizar que la visualización de cualquier color en el monitor de su computadora sea precisa.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#2B4360]">
          4. Exactitud de la Facturación y de la Cuenta
        </h2>
        <p className="mb-4">
          Nos reservamos el derecho de rechazar cualquier pedido que realice con nosotros. Podemos, a nuestra discreción, limitar o cancelar las cantidades compradas por persona, por hogar o por pedido. Estas restricciones pueden incluir pedidos realizados por o bajo la misma cuenta de cliente, la misma tarjeta de crédito, y/o pedidos que utilizan la misma dirección de facturación y/o envío.
        </p>
        <p className="mb-4">
          Usted acepta proporcionar información actual, completa y precisa de la compra y cuenta para todas las compras realizadas en nuestra tienda.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#2B4360]">
          5. Enlaces de Terceras Partes
        </h2>
        <p className="mb-4">
          Cierto contenido, productos y servicios disponibles a través de nuestro Servicio pueden incluir material de terceros. Los enlaces de terceros en este sitio pueden direccionarlo a sitios web de terceros que no están afiliados con nosotros. No somos responsables de examinar o evaluar el contenido o exactitud y no garantizamos ni tendremos ninguna obligación o responsabilidad por cualquier material o sitio web de terceros.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#2B4360]">
          6. Cambios en los Términos de Servicio
        </h2>
        <p className="mb-4">
          Puede revisar la versión más actual de los Términos de Servicio en cualquier momento en esta página. Nos reservamos el derecho, a nuestra sola discreción, de actualizar, modificar o reemplazar cualquier parte de estos Términos de Servicio mediante la publicación de las actualizaciones y los cambios en nuestro sitio web. Es su responsabilidad revisar nuestro sitio web periódicamente para verificar los cambios.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#2B4360]">
          7. Información de Contacto
        </h2>
        <p className="mb-4">
          Preguntas acerca de los Términos de Servicio deben ser enviadas a nosotros a través de nuestro formulario de contacto o al correo electrónico de atención al cliente.
        </p>
      </section>

      <div className="mt-10 text-center">
        <Link
          to="/"
          className="inline-block border border-[#2B4360] text-[#2B4360] px-6 py-2 rounded hover:bg-[#2B4360] hover:text-white transition duration-300"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  )
}
