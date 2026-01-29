import { useState } from "react"
import { Link } from "react-router-dom"

export default function ReclamacionesPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    motivo: "Queja",
    descripcion: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  )
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000'
      const response = await fetch(`${apiUrl}/api/reclamaciones`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Error al enviar el reclamo")
      }

      setStatus("success")
      setFormData({
        nombre: "",
        correo: "",
        telefono: "",
        motivo: "Queja",
        descripcion: "",
      })
    } catch (error) {
      console.error(error)
      setStatus("error")
      if (error instanceof Error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage("Ocurrió un error desconocido")
      }
    }
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-5 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Libro de Reclamaciones</h1>
      <p className="mb-6">
        Según la Ley N° 29571, ponemos a tu disposición nuestro Libro de
        Reclamaciones virtual.
      </p>

      {status === "success" ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          <p className="font-bold">¡Enviado!</p>
          <p>
            Tu reclamo ha sido registrado correctamente. Te contactaremos pronto.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-2 text-sm underline hover:text-green-900"
          >
            Enviar otro reclamo
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-white p-6 rounded-lg shadow"
        >
          {status === "error" && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <p>Error: {errorMessage}</p>
            </div>
          )}

          <div>
            <label className="block font-semibold mb-1" htmlFor="nombre">
              Nombre completo
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1" htmlFor="correo">
              Correo
            </label>
            <input
              id="correo"
              name="correo"
              type="email"
              value={formData.correo}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1" htmlFor="telefono">
              Teléfono
            </label>
            <input
              id="telefono"
              name="telefono"
              type="text"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1" htmlFor="motivo">
              Motivo
            </label>
            <select
              id="motivo"
              name="motivo"
              value={formData.motivo}
              onChange={handleChange}
              className="w-full border rounded p-2"
            >
              <option value="Queja">Queja</option>
              <option value="Reclamo">Reclamo</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1" htmlFor="descripcion">
              Descripción
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              className="w-full border rounded p-2 h-32"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-[#2B4360] text-white px-5 py-2 rounded hover:bg-[#2f4738] transition disabled:opacity-50"
          >
            {status === "loading" ? "Enviando..." : "Enviar reclamo"}
          </button>
        </form>
      )}

      <div className="mt-8 text-center">
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
