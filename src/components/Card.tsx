import { Check, Flame } from 'lucide-react'

interface CardProps {
  image: string
  title: string
  description: string
  price: number
  marca?: string
  pais?: string
  isBestSeller?: boolean
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
//   price,
  marca,
  pais,
  isBestSeller,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full max-w-md relative">
      {isBestSeller && (
        <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-orange-500 to-red-600 text-white px-2 py-1 rounded-lg flex items-center gap-1 shadow-md animate-pulse">
          <span className="text-[10px] font-bold uppercase tracking-wider">Los más vendidos</span>
          <Flame size={14} className="fill-current" />
        </div>
      )}

      {/* Imagen del producto */}
      <div className="bg-gray-40 p-4 flex items-center justify-center h-50">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="p-6 flex flex-col grow">
        {/* Marca y País - Solo mostrar si hay datos */}
        {(marca || pais) && (
          <div className="flex items-center gap-2 mb-3">
            {marca && (
              <span className="text-sm text-gray-700 font-medium flex items-center gap-1">
                {marca}
                <Check className="w-4 h-4 text-white bg-green-600 rounded-full p-0.5" />
              </span>
            )}
            {marca && pais && (
              <span className="text-sm text-gray-500">|</span>
            )}
            {pais && (
              <span className="text-sm text-gray-500">{pais}</span>
            )}
          </div>
        )}

        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
          {title}
        </h3>

        <p className="text-sm text-gray-500 mb-2 grow">
          {description}
        </p>

        {/* El precio ha sido ocultado por solicitud del cliente */}
        {/* <span className="text-3xl font-black text-[#5A7A5A] mb-2">
          S/. {price.toFixed(2)}
        </span> */}

        {/* Botón de cotización */}
        <a
          href={`https://api.whatsapp.com/send?phone=51939168247&text=${encodeURIComponent(
            `Hola, quiero cotizar este producto:\n\n🛍️ *${title}*\n\n${
              image.startsWith('http') ? image : window.location.origin + image
            }`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <button className="w-full bg-primary text-white font-semibold py-2.5 px-2 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-200 shadow-md">
            Cotizar
          </button>
        </a>
      </div>
    </div>
  )
}

export default Card
