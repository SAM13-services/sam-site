import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import PreDemande from './pages/PreDemande'
import Contact from './pages/Contact'
import MaterielEligible from './pages/MaterielEligible'
import MaterielProduct from './pages/MaterielProduct'
import GuideCarsat from './pages/GuideCarsat'
import MentionsLegales from './pages/MentionsLegales'
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pre-demande" element={<PreDemande />} />
        <Route path="/contact" element={<Contact />} />
        {/* Future page — catalogue matériel éligible */}
        <Route path="/materiel" element={<MaterielEligible />} />
        <Route path="/materiel/:id" element={<MaterielProduct />} />
        <Route path="/subventions-carsat" element={<GuideCarsat />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
        {/* 404 fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}
