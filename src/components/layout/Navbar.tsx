import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../../config/constants'
import Button from '../ui/Button'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location])

  const handleNavClick = (path: string, disabled?: boolean) => {
    if (disabled) return
    if (path.includes('#')) {
      const [pagePath, hash] = path.split('#')
      if (location.pathname !== pagePath && pagePath !== '') {
        navigate(pagePath)
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
        }, 300)
      } else {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
      }
      setIsMobileOpen(false)
    }
  }

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-in-out
          ${isScrolled ? 'bg-white' : 'bg-transparent'}
        `}
      >
        <div className="px-4 md:px-[50px]">
          <div className="flex items-center justify-between h-14 md:h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0 group" aria-label="SAM — Accueil">
              <img src="/LOGO copie.svg" alt="SAM" className="h-8 w-auto group-hover:opacity-80 transition-opacity duration-200" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map((link) => {
                if (link.disabled) {
                  return (
                    <span
                      key={link.label}
                      className="text-sm font-medium text-gray-400 cursor-not-allowed flex items-center gap-1.5"
                    >
                      {link.label}
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-sam-gray text-gray-500 px-1.5 py-0.5">
                        Bientôt
                      </span>
                    </span>
                  )
                }
                if (link.path.includes('#')) {
                  return (
                    <button
                      key={link.label}
                      onClick={() => handleNavClick(link.path)}
                      className="text-sm font-medium text-sam-black animated-underline hover:opacity-70 transition-opacity duration-200"
                    >
                      {link.label}
                    </button>
                  )
                }
                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={`text-sm font-medium transition-opacity duration-200 animated-underline ${
                      location.pathname === link.path ? 'font-semibold' : 'text-sam-black hover:opacity-70'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button variant="primary" size="sm" onClick={() => navigate('/pre-demande')}>
                {"Pré-demande gratuite"}
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 -mr-2 text-sam-black"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? 'Fermer' : 'Menu'}
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white md:hidden flex flex-col transition-all duration-300 ${
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ paddingTop: '3.75rem' }}
      >
        <nav className="flex flex-col px-4 pt-6 gap-0">
          {NAV_LINKS.map((link) => {
            if (link.disabled) {
              return (
                <span key={link.label} className="flex items-center gap-2 py-4 text-base font-medium text-gray-400 bg-sam-gray-bg mb-1 px-4">
                  {link.label}
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-sam-gray text-gray-500 px-1.5 py-0.5">
                    Bientôt
                  </span>
                </span>
              )
            }
            if (link.path.includes('#')) {
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.path)}
                  className="py-4 text-base font-medium text-sam-black text-left bg-sam-gray-bg mb-1 px-4"
                >
                  {link.label}
                </button>
              )
            }
            return (
              <Link
                key={link.label}
                to={link.path}
                className="py-4 text-base font-medium text-sam-black bg-sam-gray-bg mb-1 px-4"
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
        <div className="px-4 mt-6">
          <Button
            variant="primary"
            size="lg"
            className="w-full"
            onClick={() => {
              setIsMobileOpen(false)
              navigate('/pre-demande')
            }}
          >
            {"Pré-demande gratuite"}
          </Button>
        </div>
      </div>
    </>
  )
}
