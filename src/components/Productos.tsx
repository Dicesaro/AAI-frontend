import { useState, useEffect } from 'react'
import Card from '@/components/Card'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'

// Interfaz para los productos de la API
interface Producto {
  id: string
  nombre: string
  precio: number
  stock_actual: number
  ultima_modificacion: string
  imagen?: string
  descripcion?: string
  marca?: string
  origen?: string
}

function SlideNextButton() {
  const swiper = useSwiper()

  return (
    <button
      onClick={() => swiper.slideNext()}
      className="absolute right-3 top-1/2 -translate-y-1/2 z-9999 bg-primary text-white p-2 rounded-full shadow-md hover:opacity-90 active:scale-95 transition-all duration-200"
    >
      <ChevronRight size={20} />
    </button>
  )
}

function SlidePrevButton() {
  const swiper = useSwiper()
  return (
    <button
      onClick={() => swiper.slidePrev()}
      className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-lg hover:opacity-90 transition z-9999"
    >
      <ChevronLeft size={20} />
    </button>
  )
}

export default function Productos() {
  const [productos, setProductos] = useState<Producto[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const API_URL = `${import.meta.env.VITE_API_URL || 'http://localhost:4000'}/api/productos`

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        setLoading(true)
        const res = await fetch(API_URL)
        
        if (!res.ok) {
          throw new Error('Error al cargar productos')
        }
        
        const data = await res.json()
        setProductos(Array.isArray(data) ? data : [])
        setError(null)
      } catch (err) {
        console.error('Error fetching products:', err)
        setError('No se pudieron cargar los productos')
        setProductos([])
      } finally {
        setLoading(false)
      }
    }
    
    obtenerProductos()
  }, [API_URL])

  // Mostrar estado de carga
  if (loading) {
    return (
      <div className="pt-10 pb-5 md:pb-10 rounded-xl mx-5">
        <article
          id="productos"
          className="flex items-center gap-3 px-5 mb-5 md:mb-8"
        >
          <img
            src="/icons/sale.svg"
            alt="ico-sale"
            width={30}
            height={30}
            className="mt-5"
          />
          <h2 className="text-xl md:text-3xl font-black text-primary mt-5">
            Catálogo de productos
          </h2>
        </article>
        <div className="flex justify-center items-center py-20">
          <p className="text-gray-500 text-lg">Cargando productos...</p>
        </div>
      </div>
    )
  }

  // Mostrar error si hay
  if (error) {
    return (
      <div className="pt-10 pb-5 md:pb-10 rounded-xl mx-5">
        <article
          id="productos"
          className="flex items-center gap-3 px-5 mb-5 md:mb-8"
        >
          <img
            src="/icons/sale.svg"
            alt="ico-sale"
            width={30}
            height={30}
            className="mt-5"
          />
          <h2 className="text-xl md:text-3xl font-black text-primary mt-5">
            Catálogo de productos
          </h2>
        </article>
        <div className="flex justify-center items-center py-20">
          <p className="text-red-500 text-lg">{error}</p>
        </div>
      </div>
    )
  }

  // Mostrar mensaje si no hay productos
  if (productos.length === 0) {
    return (
      <div className="pt-10 pb-5 md:pb-10 rounded-xl mx-5">
        <article
          id="productos"
          className="flex items-center gap-3 px-5 mb-5 md:mb-8"
        >
          <img
            src="/icons/sale.svg"
            alt="ico-sale"
            width={30}
            height={30}
            className="mt-5"
          />
          <h2 className="text-xl md:text-3xl font-black text-primary mt-5">
            Catálogo de productos
          </h2>
        </article>
        <div className="flex justify-center items-center py-20">
          <p className="text-gray-500 text-lg">No hay productos disponibles</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-10 pb-5 md:pb-10 rounded-xl mx-5 ">
      <article
        id="productos"
        className="flex items-center gap-3 px-5 mb-5 md:mb-8"
      >
        <img
          src="/icons/sale.svg"
          alt="ico-sale"
          width={30}
          height={30}
          className="mt-5"
        />
        <h2 className="text-xl md:text-3xl font-black text-primary mt-5">
          Productos más vendidos
        </h2>
      </article>

      {/* Carrusel con Swiper para móviles */}
      <div className="block md:hidden px-5 pb-16 relative">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          slidesPerView={1.2}
          centeredSlides={false}
          grabCursor={true}
          className="pb-10"
        >
          {productos.slice(0, 8).map((p) => (
            <SwiperSlide key={p.id}>
              <div className="max-w-[280px] mx-auto relative">
                <Card
                  image={p.imagen || '/images/placeholder.png'}
                  title={p.nombre}
                  description={p.descripcion || p.nombre}
                  price={p.precio}
                  marca={p.marca}
                  pais={p.origen}
                  isBestSeller={true}
                />
              </div>
            </SwiperSlide>
          ))}

          {/* Botones personalizados */}
          <SlidePrevButton />
          <SlideNextButton />
        </Swiper>
      </div>

      {/* Grilla para pantallas medianas y grandes */}
      <section className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-5 pb-10 ">
        {productos.slice(0, 8).map((p) => (
           <Card
            key={p.id}
            image={p.imagen || '/images/placeholder.png'}
            title={p.nombre}
            description={p.descripcion || p.nombre}
            price={p.precio}
            marca={p.marca}
            pais={p.origen}
            isBestSeller={true}
          />
        ))}
      </section>
    </div>
  )
}
