import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout() {
  return (
    <div className="bg-secondary">
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <a
        href="https://api.whatsapp.com/send?phone=51939168247&text=Hola, quiero más información sobre sus productos"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <img
          src="/icons/wasap-ligh.svg"
          alt="WhatsApp"
          width={35}
          height={35}
          className="md:w-10 md:h-10 w-8 h-8"
        />
      </a>
    </div>
  )
}
