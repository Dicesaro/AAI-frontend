import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Package, X } from 'lucide-react'

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation()
  const pathname = location.pathname

  const links = [
    {
      href: '/dashboard',
      label: 'Inicio',
      icon: <LayoutDashboard size={18} />,
    },
    {
      href: '/dashboard/productos',
      label: 'Productos',
      icon: <Package size={18} />,
    },
  ]

  return (
    <>
      {/* Sidebar para escritorio */}
      <aside className="hidden md:flex flex-col w-64 bg-primary text-white p-5 shadow-lg min-h-screen">
        <h1 className="text-2xl font-bold mb-8 text-white">
          Panel Admin
        </h1>
        <nav className="flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`flex items-center gap-3 p-2 rounded-md transition-all ${
                pathname === link.href
                  ? 'bg-secondary text-primary font-semibold'
                  : 'hover:bg-secondary hover:text-primary'
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Sidebar móvil */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 md:hidden">
          <div className="absolute left-0 top-0 w-64 h-full bg-primary text-white p-5 shadow-lg animate-slideIn">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-xl font-bold text-white">
                Panel Admin
              </h1>
              <button
                onClick={onClose}
                className="text-white"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`flex items-center gap-3 p-2 rounded-md transition-all ${
                    pathname === link.href
                      ? 'bg-secondary text-primary font-semibold'
                      : 'hover:bg-secondary hover:text-primary'
                  }`}
                  onClick={onClose}
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
