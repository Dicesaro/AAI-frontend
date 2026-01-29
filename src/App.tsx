import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import DashboardLayout from './layouts/DashboardLayout'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import DashboardProductos from './pages/DashboardProductos'
import Reclamaciones from './pages/Reclamaciones'
import Terminos from './pages/Terminos'
import Categorias from './pages/Categorias'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="reclamaciones" element={<Reclamaciones />} />
        <Route path="terminos" element={<Terminos />} />
        <Route path="categorias" element={<Categorias />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="productos" element={<DashboardProductos />} />
      </Route>
    </Routes>
  )
}

export default App
