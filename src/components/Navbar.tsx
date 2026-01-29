import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-primary shadow-sm scroll-smooth">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              src="/images/IIA_logo_sinfondo.png"
              alt="logo"
              width={180}
              className="cursor-pointer bg-white p-1 rounded"
            />
          </Link>
        </div>

        {/* Menu links (desktop) */}
        <nav className="hidden sm:flex space-x-10 text-white text-lg font-black">
          <Link
            to="/"
            className="hover:opacity-80 transition-opacity"
          >
            Inicio
          </Link>
          <Link
            to="/categorias"
            className="hover:opacity-80 transition-opacity"
          >
            Categorías
          </Link>
          <a
            href="#productos"
            className="hover:opacity-80 transition-opacity"
          >
            Productos
          </a>
          <a
            href="#cotizacion"
            className="hover:opacity-80 transition-opacity"
          >
            Cotización
          </a>
        </nav>

        {/* Botón hamburguesa (mobile) */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img
            src="/icons/hamburguer.svg"
            alt="menu"
            width={35}
            height={35}
            className="invert"
          />
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="sm:hidden bg-primary border-t border-white/10">
          <nav className="flex flex-col items-center space-y-4 py-4 font-medium text-white text-base">
            <Link
              to="/"
              className="hover:opacity-80 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/categorias"
              className="hover:opacity-80 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              Categorías
            </Link>
            <a
              href="#productos"
              className="hover:opacity-80 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              Productos
            </a>
            <a
              href="#cotizacion"
              className="hover:opacity-80 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              Cotización
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
