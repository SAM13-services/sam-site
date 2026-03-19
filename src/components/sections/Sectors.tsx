import { useNavigate } from 'react-router-dom'
import { SECTORS } from '../../config/constants'
import AnimatedSection from '../ui/AnimatedSection'

export default function Sectors() {
  const navigate = useNavigate()

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
          <div className="flex flex-wrap gap-2.5">
            {SECTORS.map((sector) => (
              <button
                key={sector.id}
                onClick={() => navigate(`/materiel?secteurs=${sector.id}`)}
                className="px-4 py-2 text-sm font-medium transition-all duration-200 ease-out bg-sam-gray-bg text-sam-black hover:bg-sam-yellow hover:-translate-y-0.5"
              >
                {sector.label}
              </button>
            ))}
          </div>
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
            {" — nous étudions chaque situation."}
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
