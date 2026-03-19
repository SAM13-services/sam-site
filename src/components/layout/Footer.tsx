import { Link } from 'react-router-dom'
import { Mail, ArrowUpRight } from 'lucide-react'
import { CONTACT, NAV_LINKS } from '../../config/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="px-4 md:px-[50px] pt-10 pb-6">

        {/* Top — Logo massif + colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 mb-8">

          {/* Logo grand */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block group">
              <img src="/LOGO copie.svg" alt="SAM" className="h-16 w-auto group-hover:opacity-80 transition-opacity duration-200 mb-3" />
              <span className="text-sm text-gray-400 block max-w-xs leading-relaxed">
                {"Service d'Accompagnement aux Subventions Professionnelles"}
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => {
                if (link.disabled) {
                  return (
                    <li key={link.label}>
                      <span className="text-sm text-gray-400 flex items-center gap-1.5">
                        {link.label}
                        <span className="text-[9px] font-bold uppercase tracking-wider bg-sam-gray text-gray-400 px-1.5 py-0.5">
                          Bientôt
                        </span>
                      </span>
                    </li>
                  )
                }
                return (
                  <li key={link.label}>
                    <Link
                      to={link.path.includes('#') ? link.path.split('#')[0] || '/' : link.path}
                      className="text-sm text-sam-black animated-underline hover:opacity-70 transition-opacity duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2 text-sm text-sam-black hover:opacity-70 transition-opacity duration-200 group"
                >
                  <Mail size={13} className="flex-shrink-0" />
                  <span className="animated-underline">{CONTACT.email}</span>
                </a>
              </li>
              <li className="text-sm font-medium text-sam-black">{CONTACT.hours}</li>
              <li className="text-sm text-gray-500">{CONTACT.coverage}</li>
            </ul>

            <Link
              to="/pre-demande"
              className="inline-flex items-center gap-1.5 mt-5 text-sm font-bold text-sam-black border-b-2 border-sam-yellow hover:border-sam-black transition-colors duration-200 pb-0.5 group"
            >
              {"Pré-demande gratuite"}
              <ArrowUpRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-sam-gray-bg px-4 py-3">
          <p className="text-xs text-gray-400">
            © {year} SAM — Tous droits réservés.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-gray-400 hover:text-sam-black transition-colors duration-200">
              Mentions légales
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-sam-black transition-colors duration-200">
              {"Politique de confidentialité"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
