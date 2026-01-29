import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import SideHead from '../components/SideHead'
import { Menu } from 'lucide-react'

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-[var(--primary-color)] text-[var(--color-black)]">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between bg-[var(--color-white)] border-b border-[var(--second-color)] p-4 shadow-sm md:hidden">
          <button
            className="text-[var(--second-color)]"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>
          <h1 className="font-bold text-[var(--second-color)]">
            Dashboard
          </h1>
        </header>
        <SideHead />
        <main className="p-4 md:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
