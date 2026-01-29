import { useState, useEffect } from 'react'
import Card from '@/components/Card'
import { motion, AnimatePresence } from 'framer-motion'

interface Producto {
  id: string
  nombre: string
  precio: number
  stock_actual: number
  ultima_modificacion: string
  imagen?: string
  descripcion: string
  marca: string
  origen: string
  categoria?: string
}

export default function Categorias() {
  const [productos, setProductos] = useState<Producto[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('Todas')

  const API_URL = `${import.meta.env.VITE_API_URL || 'http://localhost:4000'}/api/productos`

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        setLoading(true)
        const res = await fetch(API_URL)
        if (!res.ok) throw new Error('Error al cargar productos')
        const data = await res.json()
        setProductos(Array.isArray(data) ? data : [])
        setError(null)
      } catch (err) {
        console.error('Error fetching products:', err)
        setError('No se pudieron cargar los productos')
      } finally {
        setLoading(false)
      }
    }
    obtenerProductos()
  }, [])

  // Obtener categorías únicas
  const categorias = ['Todas', ...new Set(productos.map((p) => p.categoria || 'Sin categoría').filter(Boolean))]

  const productosFiltrados = categoriaSeleccionada === 'Todas'
    ? productos
    : productos.filter((p) => (p.categoria || 'Sin categoría') === categoriaSeleccionada)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-primary text-xl font-bold animate-pulse">Cargando catálogo...</p>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-black text-primary mb-4">Nuestro Catálogo</h1>
        <p className="text-gray-600">Explora nuestros productos por categoría</p>
      </header>

      {/* Filtros de Categoría */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaSeleccionada(cat)}
            className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
              categoriaSeleccionada === cat
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'bg-white text-primary border border-primary hover:bg-primary hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {error ? (
        <div className="text-center py-20 text-red-500 font-bold">{error}</div>
      ) : (
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {productosFiltrados.map((p) => (
              <motion.div
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  image={p.imagen || '/images/placeholder.png'}
                  title={p.nombre}
                  description={p.descripcion || p.nombre}
                  price={p.precio}
                  marca={p.marca}
                  pais={p.origen}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {productosFiltrados.length === 0 && !error && (
        <div className="text-center py-20 text-gray-400">
          No hay productos en esta categoría por el momento.
        </div>
      )}
    </div>
  )
}
