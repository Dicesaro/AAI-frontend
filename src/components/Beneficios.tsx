import { beneficios } from '@/data/beneficios'

export default function Beneficios() {
  return (
    <section className="grid grid-cols-2 justify-items-center gap-y-8 py-10 px-5 md:flex md:justify-around md:gap-8 md:flex-wrap bg-secondary">
      {beneficios.map((b) => (
        <div
          key={b.id}
          className="flex flex-col items-center text-center text-primary w-auto"
        >
          <img
            src={b.icon}
            alt={b.title}
            width={40}
            height={40}
            className="mb-2 md:w-12 md:h-12 lg:w-14 lg:h-14"
          />
          <p className="font-bold text-xs md:text-sm lg:text-base xl:text-lg leading-tight">
            {b.title}
          </p>
        </div>
      ))}
    </section>
  )
}
