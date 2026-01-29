import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-10">
      <div className="max-w-6xl mx-auto px-8 md:px-10 py-10">
        <div className="border-t border-white/20 mb-8 md:mb-10"></div>

        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 text-left">
          {/* COLUMNA 1: Logo y Redes Sociales */}
          <div className="w-full md:w-1/4 flex flex-col items-start md:items-center">
            {/* Logo */}
            <div className="hidden md:block mb-4">
              <img
                src="/images/logo_alexander.jpg"
                alt="logo"
                width={180}
                className="bg-white p-1 rounded"
              />
            </div>

            {/* HORARIO DE ATENCIÓN (MÓVIL) - Separado de la columna en Desktop */}
            <h3 className="text-lg font-bold mt-5 mb-2 w-full md:hidden">
              Atención
            </h3>
            <p className="text-sm md:hidden">
              De Lunes a Domingo de 8:00 a 20:00 hrs
            </p>
          </div>

          {/* COLUMNA 2: Productos (Oculta en móvil) */}
          <div className="hidden md:block w-1/4">
            <h3 className="text-lg font-bold mb-3">Productos</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white/80 transition"
                >
                  Brocas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white/80 transition"
                >
                  Torneadores
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white/80 transition"
                >
                  Discos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white/80 transition"
                >
                  Lijas
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: Contacto y Atención (Visible en móvil y desktop) */}
          <div className="w-full md:w-1/4">
            {/* Título de Contacto - Visible en todas las pantallas */}
            <h3 className="text-lg font-bold mb-3">
              Contacto
            </h3>


                 
            <p className="text-sm mb-2">
              ventas_alexander.sac@hotmail.com
            </p>
            <p className="text-sm mb-5">
              939 168 247 - 930 600 321
            </p>

            {/* Horario de Atención - Solo en Desktop (ya está en móvil en columna 1) */}
            <h3 className="hidden md:block text-lg font-bold mb-2">
              Atención
            </h3>
            <p className="hidden md:block text-sm">
              De Lunes a Domingo de <br /> 8:00 a 20:00 hrs
            </p>

            {/* Libro de reclamaciones - MÓVIL (Se muestra aquí en móvil) */}
            <div className="pt-4 md:hidden">
              <h3 className="text-lg font-bold mb-2">
                <Link
                  to="/terminos"
                  className="hover:text-white/80 transition"
                >
                  Términos y <br /> Condiciones
                </Link>
              </h3>

              <h3 className="text-lg font-bold mb-2">
                <Link to="/reclamaciones">Libro de Reclamaciones</Link>
              </h3>
              <img
                src="/images/libro.png"
                alt="Libro de reclamaciones"
                width={100}
                height={40}
                className="mb-4"
              />
            </div>

            {/* Métodos de Pago - MÓVIL (Se muestra aquí en móvil) */}
            <div className="pt-4 md:hidden">
              <h3 className="text-lg font-bold mb-2">
                Métodos de pago:
              </h3>
              <div className="flex gap-3">
                <img
                  src="/images/visa.png"
                  alt="Visa"
                  width={100}
                  height={60}
                  className="w-10 h-auto object-contain"
                />
                <img
                  src="/images/master.png"
                  alt="Mastercard"
                  width={100}
                  height={60}
                  className="w-10 h-auto object-contain"
                />
                <img
                  src="/images/yape.png"
                  alt="Yape"
                  width={100}
                  height={60}
                  className="w-10 h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* COLUMNA 4: Documentos y Pago (Solo en Desktop) */}
          <div className="hidden md:block w-1/4">
            <div className="pt-4 md:pt-0">
              <h3 className="text-lg font-bold mb-2">
                <Link
                  to="/terminos"
                  className="hover:text-white/80 transition"
                >
                  Términos y <br /> Condiciones
                </Link>
              </h3>
            </div>
            {/* Libro de Reclamaciones */}
            <div className="pt-4 md:pt-0">
              <h3 className="text-lg font-bold mb-2">
                <Link to="/reclamaciones">Libro de Reclamaciones</Link>
              </h3>
              <img
                src="/images/libro.png"
                alt="Libro de reclamaciones"
                width={100}
                height={40}
                className="mb-4"
              />
            </div>

            {/* Métodos de Pago */}
            <div className="pt-4 md:pt-0">
              <h3 className="text-lg font-bold mb-2">
                Métodos de pago:
              </h3>
              <div className="flex gap-3">
                <img
                  src="/images/visa.png"
                  alt="Visa"
                  width={100}
                  height={60}
                  className="w-10 h-auto object-contain"
                />
                <img
                  src="/images/master.png"
                  alt="Mastercard"
                  width={100}
                  height={60}
                  className="w-10 h-auto object-contain"
                />
                <img
                  src="/images/yape.png"
                  alt="Yape"
                  width={100}
                  height={60}
                  className="w-10 h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* LÍNEA DIVISORIA INFERIOR (Simulando la clase 'linea' con un borde) */}
        <div className="border-t border-white/20 pt-4 pb-2 mt-8 md:mt-12">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between text-xs text-white/80 text-left space-y-1 md:space-y-0">
            <span>Copyright © 2026 INVERSIONES INTERNACIONALES ALEXANDER S.A.C.</span>
            <span className="md:text-right">
              Todos los derechos reservados
            </span>
          </div>
        </div>
      </div>

      {/* Créditos (Fondo oscuro) */}
      <div className="bg-[#1A2E44] text-center text-xs py-2">
        <p>
          Creado por :{' '}
          <span className="font-semibold">
            <a
              target="_blank"
              href="https://portfolio-cesaro.vercel.app/"
            >
              Cesar Ortega
            </a>
          </span>
        </p>
      </div>
    </footer>
  )
}
