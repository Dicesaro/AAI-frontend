import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'

const testimonials = [
{
    id: 1,
    text: 'Ofrecen suministros de alta precisión con una relación calidad-precio excepcional son nuestra primera opción .',
    name: 'Carlos Mora',
    image: '/icons/client_1.jpg',
    occupation: 'Dueño de Promart',
  },
{
    id: 2,
    text: 'La durabilidad de sus herramientas ha optimizado nuestros procesos de producción de manera notable.',
    name: 'Elena Rodríguez',
    image: '/icons/client_2.jpg',
    occupation: 'Gerente de Planta en Soldex',
  },
  {
    id: 3,
    text: 'Excelente tiempo de respuesta y asesoría técnica personalizada. Realmente entienden a sus clientes.',
    name: 'Ricardo Espinoza',
    image: '/icons/client_3.jpg',
    occupation: 'Director de Compras en Aceros Perú',
  },
  {
    id: 4,
    text: 'Logramos reducir costos operativos gracias a la excelente relación calidad-precio de sus suministros. Totalmente recomendados.',
    name: 'Sofía Martínez',
    image: '/icons/client_4.jpg',
    occupation: 'Jefa de Logística en Indumetal',
  },
  {
    id: 5,
    text: 'Su catálogo es el más completo del mercado. Siempre encontramos soluciones precisas para grandes proyectos.',
    name: 'Andrés Villalta',
    image: '/icons/client_5.jpg',
    occupation: 'Ingeniero de Proyectos en ConstruMetal',
  },
  {
    id: 6,
    text: 'Confianza y puntualidad en cada entrega, es uno de nuestros mejores proveedores con una excelente calidad-precio.',
    name: 'Lucía Fernández',
    image: '/icons/client_6.jpg',
    occupation: 'Fundadora de Taller Industrial F&M',
  },
]

export default function Testimonials() {
  return (
    <section className="py-12 bg-[--primary-color] text-white rounded-xl mx-5 mb-8 relative">
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-3xl font-black text-primary mt-5">
          Testimonios
        </h2>
        <p className="text-primary">Lo que dicen nuestros clientes</p>
      </div>

      <div className="px-5 md:px-16 relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="!h-auto flex">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between text-black w-full min-h-[300px]">
                {/* Contenido Superior */}
                <div className="p-8 flex-1 relative flex items-center justify-center">
                  <Quote
                    className="absolute top-6 right-6 text-primary/30"
                    size={20}
                    fill="currentColor"
                    style={{ transform: 'scaleX(-1)' }}
                  />
                  <p className="text-balance text-xl font-light mt-4">
                    {item.text}
                  </p>
                </div>

                {/* Info Cliente */}
                <div className="bg-primary p-5 flex items-center gap-4 mt-auto">
                  <div className="w-14 h-14 rounded-full bg-gray-300 shrink-0">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="text-white text-left">
                    <p className="font-bold text-lg leading-tight">
                      {item.name}
                    </p>
                    <p className="text-sm opacity-90">{item.occupation}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botones de navegación personalizados */}
        <button className="swiper-button-prev-custom absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 bg-primary/80 w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
          <ChevronLeft size={24} color="white" />
        </button>
        <button className="swiper-button-next-custom absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 bg-primary/80 w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
          <ChevronRight size={24} color="white" />
        </button>
      </div>
    </section>
  )
}
