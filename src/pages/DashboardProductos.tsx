import { useState, useEffect } from 'react'
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
  agregado_por: string
  categoria: string
}

export default function DashboardProductos() {
  const [productos, setProductos] = useState<Producto[]>([])
  const [busqueda, setBusqueda] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [modoEdicion, setModoEdicion] = useState(false)
  const [productoActual, setProductoActual] =
    useState<Producto | null>(null)
  const [imagenFile, setImagenFile] = useState<File | null>(null)

  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState('')
  const [stock, setStock] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [marca, setMarca] = useState('')
  const [origen, setOrigen] = useState('')
  const [agregadoPor, setAgregadoPor] = useState('')
  const [categoria, setCategoria] = useState('')

  const API_URL = `${
    import.meta.env.VITE_API_URL || 'http://localhost:4000'
  }/api/productos`

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const res = await fetch(API_URL)
        const data = await res.json()
        setProductos(Array.isArray(data) ? data : [])
      } catch {
        setProductos([])
      }
    }

    obtenerProductos()
  }, [API_URL])

  const abrirModalNuevo = () => {
    setModoEdicion(false)
    setNombre('')
    setPrecio('')
    setStock('')
    setDescripcion('')
    setMarca('')
    setOrigen('')
    setAgregadoPor('')
    setCategoria('')
    setProductoActual(null)
    setImagenFile(null)
    setModalOpen(true)
  }

  const abrirModalEditar = (producto: Producto) => {
    setModoEdicion(true)
    setProductoActual(producto)
    setNombre(producto.nombre)
    setPrecio(producto.precio.toString())
    setStock(producto.stock_actual.toString())
    setDescripcion(producto.descripcion || '')
    setMarca(producto.marca || '')
    setOrigen(producto.origen || '')
    setAgregadoPor(producto.agregado_por || '')
    setCategoria(producto.categoria || '')
    setImagenFile(null)
    setModalOpen(true)
  }

  const guardarProducto = async () => {
    try {
      const formData = new FormData()
      formData.append('nombre', nombre)
      formData.append('precio', String(Number(precio)))
      formData.append('stock_actual', String(Number(stock)))
      formData.append('descripcion', descripcion)
      formData.append('marca', marca)
      formData.append('origen', origen)
      formData.append('agregado_por', agregadoPor)
      formData.append('categoria', categoria)

      if (imagenFile) formData.append('imagen', imagenFile)

      const url = modoEdicion
        ? `${API_URL}/${productoActual?.id}`
        : API_URL

      const method = modoEdicion ? 'PUT' : 'POST'

      const res = await fetch(url, {
        method,
        body: formData,
      })

      if (!res.ok) {
        alert('Error al guardar el producto')
        return
      }

      const data = await res.json()

      if (modoEdicion) {
        setProductos((prev) =>
          prev.map((p) => (p.id === productoActual?.id ? data : p))
        )
      } else {
        setProductos((prev) => [...prev, data])
      }

      setModalOpen(false)
      setProductoActual(null)
      setImagenFile(null)
    } catch {
      alert('Error al guardar el producto')
    }
  }

  const confirmarEliminar = (producto: Producto) => {
    setProductoActual(producto)
    setDeleteModalOpen(true)
  }

  const eliminarProducto = async () => {
    if (!productoActual) return

    await fetch(`${API_URL}/${productoActual.id}`, {
      method: 'DELETE',
    })

    setProductos((prev) =>
      prev.filter((p) => p.id !== productoActual.id)
    )

    setDeleteModalOpen(false)
    setProductoActual(null)
  }

  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  const estadoStock = (stock: number) => {
    if (stock === 0)
      return { texto: 'Sin stock', color: '#FDECEA', text: '#C62828' }
    if (stock <= 5)
      return {
        texto: 'Bajo stock',
        color: '#FFF9E6',
        text: '#D17B00',
      }
    return { texto: 'En stock', color: '#E8F5E9', text: '#2E7D32' }
  }

  return (
    <div className="p-8">
      {/* BUSCADOR + BOTÓN */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="🔍 Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="bg-white border border-gray-200 rounded-lg px-4 py-2 w-1/3 shadow-sm"
        />
        <button
          onClick={abrirModalNuevo}
          className="px-4 py-2 rounded-lg font-semibold shadow-md hover:opacity-90 transition"
          style={{ background: 'var(--second-color)', color: '#2B4360' }}
        >
          + Añadir Producto
        </button>
      </div>

      {/* TABLA */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-[var(--second-color)] text-left">
            <tr>
              <th className="p-3">Producto</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Precio</th>
              <th className="p-3">Marca</th>
              <th className="p-3">Origen</th>
              <th className="p-3">Descripción</th>
              <th className="p-3">Estado</th>
              <th className="p-3">Agregado por</th>
              <th className="p-3">Categoría</th>
              <th className="p-3">Última modificación</th>
              <th className="p-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productosFiltrados.map((p) => {
              const estado = estadoStock(p.stock_actual)
              return (
                <tr key={p.id} className="border-t hover:bg-gray-50">
                  <td className="p-3 flex gap-3 items-center">
                    <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                      {p.imagen ? (
                        <img
                          src={p.imagen}
                          alt={p.nombre}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        '📦'
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{p.nombre}</p>
                      <p className="text-xs text-gray-500">
                        ID: #{p.id}
                      </p>
                    </div>
                  </td>
                  <td className="p-3">{p.stock_actual}</td>
                  <td className="p-3">S/. {p.precio}</td>
                  <td className="p-3">{p.marca || '-'}</td>
                  <td className="p-3">{p.origen || '-'}</td>
                  <td className="p-3 truncate max-w-[200px]">
                    {p.descripcion || '-'}
                  </td>
                  <td className="p-3">
                    <span
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        background: estado.color,
                        color: estado.text,
                      }}
                    >
                      {estado.texto}
                    </span>
                  </td>
                  <td className="p-3">{p.agregado_por || '-'}</td>
                  <td className="p-3 font-semibold text-primary">{p.categoria || '-'}</td>
                  <td className="p-3">
                    {new Date(p.ultima_modificacion).toLocaleString(
                      'es-PE'
                    )}
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => abrirModalEditar(p)}
                      className="mx-2"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => confirmarEliminar(p)}
                      className="mx-2 text-red-500"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* MODAL AGREGAR/EDITAR */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl p-6 shadow-xl w-[500px] max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: 'var(--primary-color)' }}
              >
                {modoEdicion ? 'Editar Producto' : 'Nuevo Producto'}
              </h2>
              <label>Nombre:</label>
              <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="border w-full p-2 rounded mb-3"
              />
              <label>Precio:</label>
              <input
                type="number"
                placeholder="Precio"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                className="border w-full p-2 rounded mb-3"
              />
              <label>Stock:</label>
              <input
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="border w-full p-2 rounded mb-3"
              />

              <label>Descripción:</label>
              <textarea
                placeholder="Descripción del producto"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className="border w-full p-2 rounded mb-3 min-h-[80px]"
              />

              <label>Marca:</label>
              <input
                type="text"
                placeholder="Marca"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                className="border w-full p-2 rounded mb-3"
              />

              <label>Origen (País):</label>
              <input
                type="text"
                placeholder="País de origen"
                value={origen}
                onChange={(e) => setOrigen(e.target.value)}
                className="border w-full p-2 rounded mb-3"
              />

              <label>Agregado por:</label>
              <input
                type="text"
                placeholder="Nombre de quien agrega el producto"
                value={agregadoPor}
                onChange={(e) => setAgregadoPor(e.target.value)}
                className="border w-full p-2 rounded mb-3"
              />

              <label>Categoría:</label>
              <input
                type="text"
                placeholder="Ejemplo: Brocas, Discos, etc."
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className="border w-full p-2 rounded mb-3"
              />

              <label>Imagen:</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setImagenFile(e.target.files[0])
                  } else {
                    setImagenFile(null)
                  }
                }}
                className="mb-3"
              />

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-3 py-1 border rounded"
                >
                  Cancelar
                </button>
                <button
                  onClick={guardarProducto}
                  className="px-3 py-1 rounded text-white"
                  style={{ background: 'var(--primary-color)' }}
                >
                  Guardar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL ELIMINAR */}
      <AnimatePresence>
        {deleteModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl p-6 shadow-xl w-80 text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <p>
                ¿Seguro que deseas eliminar{' '}
                <strong>{productoActual?.nombre}</strong>?
              </p>
              <div className="flex justify-center mt-4 gap-3">
                <button
                  onClick={() => setDeleteModalOpen(false)}
                  className="px-3 py-1 border rounded"
                >
                  Cancelar
                </button>
                <button
                  onClick={eliminarProducto}
                  className="px-3 py-1 rounded text-white"
                  style={{ background: 'red' }}
                >
                  Eliminar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
