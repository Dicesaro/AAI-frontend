import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Beneficios from '@/components/Beneficios'
import Productos from '@/components/Productos'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  const banners = [
    '/banners/banner_1.png',
    '/banners/banner_4.png',
    '/banners/banner_3.png',
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [banners.length])

  return (
    <div className="max-w-6xl mx-auto">
      {/* Banner con transiciones */}
      <section className="py-5 relative w-full flex flex-col items-center text-center px-5 mt-3">
        <div className="relative w-full h-56 sm:h-64 md:h-96 overflow-hidden rounded-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: 5, opacity: 0 }} // entra desde la derecha
              animate={{ x: 0, opacity: 1 }} // queda en su sitio
              exit={{ x: -5, opacity: 0 }} // sale hacia la izquierda
              transition={{ duration: 0.7 }}
              className="absolute inset-0 blur-xsn"
            >
              <img
                src={banners[index]}
                alt="banner principal"
                className="object-cover w-full h-60 md:h-96"
              />
            </motion.div>
          </AnimatePresence>

          {/* Overlay con texto */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 bg-black/30 rounded-xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">
              Encuentra lo mejor
            </h1>
            <span className="text-sm md:text-lg italic mb-4 drop-shadow-lg">
              aquí encontrarás productos útiles
              <br /> para la metal mecánica
            </span>
            <button className="bg-primary hover:opacity-90 text-white font-bold py-2 px-5 rounded-full transition-colors text-xs md:text-base cursor-pointer">
              <a href="/catalogo.pdf" target="_blank" rel="noopener noreferrer">
                Ver Presentación
              </a>
            </button>
          </div>
        </div>
      </section>

      <Beneficios />
        <Productos />
        <Testimonials />

      {/* Banner inferior sin cambios */}
      <section
        id="cotizacion"
        className="py-5 relative w-full flex flex-col items-center text-center px-5 mt-3"
      >
        <div className="relative w-full">
          <img
            src="/banners/banner_3.png"
            alt="banner consulta"
            className="rounded-xl object-cover w-full h-52 md:h-72"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 bg-black/30 rounded-xl">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 drop-shadow-lg">
              Consulta y cotiza precios
            </h1>
            <span className="text-sm md:text-lg italic mb-4 drop-shadow-lg">
              conversa con nosotros y lleguemos
              <br /> a un acuerdo
            </span>
            <button className="bg-primary hover:opacity-90 text-white font-medium py-2 px-5 rounded-full transition-colors text-xs md:text-base cursor-pointer flex gap-2 items-center">
              <img
                src="/icons/wasap-ligh.svg"
                alt="whatsapp"
                width={26}
                height={26}
              />
              <a
                href="https://api.whatsapp.com/send?phone=51939168247&text=Hola, quiero cotizar un producto"
                target="_blank"
                rel="noopener noreferrer"
              >
                Escribenos
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
