import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { SECTORS } from '../../config/constants'
import AnimatedSection from '../ui/AnimatedSection'

const PRIMARY_IDS = [
  'automobile',
  'logistique-entreposage',
  'construction-btp',
  'restauration-metiers-bouche',
  'industrie',
]

export default function Sectors() {
  const navigate = useNavigate()
  const [showAll, setShowAll] = useState(false)

  const visible = showAll ? SECTORS : SECTORS.filter(s => PRIMARY_IDS.includes(s.id))

  return (
    <section className="bg-white py-14 md:py-18">
      <div className="px-4 md:px-[50px]">

        <AnimatedSection className="mb-7 max-w-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-3">
            Secteurs
          </span>
          <h2
            className="font-bold leading-tight"
            style={{ fontSize: 'clamp(26px, 3.5vw, 46px)', letterSpacing: '-0.01em' }}
          >
            Nous intervenons dans votre secteur
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 lg:flex lg:flex-wrap">
            {visible.map((sector) => (
              <button
                key={sector.id}
                onClick={() => navigate(`/materiel?secteurs=${sector.id}`)}
                className="px-4 py-2 text-sm font-medium text-center transition-all duration-200 ease-out bg-sam-gray-bg text-sam-black hover:bg-sam-yellow hover:-translate-y-0.5 lg:w-auto"
              >
                {sector.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowAll(v => !v)}
            className="mt-4 flex items-center gap-1 text-sm font-medium text-sam-black/50 hover:text-sam-black transition-colors duration-200"
          >
            {showAll ? 'Voir moins' : 'Voir tous les secteurs'}
            <ChevronDown
              size={15}
              className="transition-transform duration-200"
              style={{ transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </button>
        </AnimatedSection>

        <AnimatedSection delay={200} className="mt-6">
          <p className="text-sm text-gray-400">
            {"Vous ne trouvez pas votre secteur ? "}
            <a
              href="mailto:info@sam-contact.fr"
              className="text-sam-black font-medium animated-underline"
            >
              Contactez-nous
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
