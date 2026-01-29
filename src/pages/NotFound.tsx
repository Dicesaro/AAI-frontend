import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
      <h2 className="text-4xl font-bold mb-4">Página no encontrada</h2>
      <p className="text-lg mb-8">Lo sentimos, la página que buscas no existe.</p>
      <Link
        to="/"
        className="bg-[#3B5846] text-white px-6 py-2 rounded hover:bg-[#2f4738] transition"
      >
        Volver al Inicio
      </Link>
    </div>
  )
}
