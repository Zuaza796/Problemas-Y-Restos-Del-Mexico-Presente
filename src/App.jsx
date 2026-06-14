import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Agua from './pages/Agua'
import Conclusion from './pages/Conclusion'
import Datos from './pages/Datos'
import Economia from './pages/Economia'
import Educacion from './pages/Educacion'
import Home from './pages/Home'
import Instituciones from './pages/Instituciones'
import NotFound from './pages/NotFound'
import Pemex from './pages/Pemex'
import Salud from './pages/Salud'
import Seguridad from './pages/Seguridad'
import Sociedad from './pages/Sociedad'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'

function AppRoutes() {
  const location = useLocation()
  useRevealOnScroll(location.pathname)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/economia" element={<Economia />} />
        <Route path="/pemex" element={<Pemex />} />
        <Route path="/pobreza" element={<Sociedad />} />
        <Route path="/sociedad" element={<Navigate to="/pobreza" replace />} />
        <Route path="/educacion" element={<Educacion />} />
        <Route path="/salud" element={<Salud />} />
        <Route path="/seguridad" element={<Seguridad />} />
        <Route path="/agua" element={<Agua />} />
        <Route path="/instituciones" element={<Instituciones />} />
        <Route path="/datos" element={<Datos />} />
        <Route path="/conclusion" element={<Conclusion />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
