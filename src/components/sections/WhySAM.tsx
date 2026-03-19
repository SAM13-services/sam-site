import { useState } from 'react'
import { Key, Gift, Calculator, Network } from 'lucide-react'
import { STRENGTHS } from '../../config/constants'
import AnimatedSection from '../ui/AnimatedSection'

const ICONS = { Key, Gift, Calculator, Network }

export default function WhySAM() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <section className="bg-sam-gray-bg py-14 md:py-18">
      <div className="px-4 md:px-[50px]">

        {/* Header */}
        <AnimatedSection className="mb-10 md:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-3">
            Nos engagements
          </span>
          <h2
            className="font-bold leading-tight"
            style={{ fontSize: 'clamp(26px, 3.5vw, 46px)', letterSpacing: '-0.01em' }}
          >
            Pourquoi choisir SAM
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="flex flex-col lg:flex-row lg:gap-16 items-stretch">

            {/* Colonne gauche — titres */}
            <div className="flex flex-col justify-between lg:w-1/2 gap-1">
              {STRENGTHS.map((strength, i) => (
                <button
                  key={strength.title}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => setActiveIndex(i)}
                  className="text-left py-5 border-b border-[#E0E0E0] last:border-b-0"
                >
                  <span
                    className="block"
                    style={{
                      fontSize: 'clamp(22px, 2.8vw, 38px)',
                      fontWeight: activeIndex === i ? 600 : 400,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.15,
                      color: activeIndex === i ? '#000000' : '#BEBEBE',
                      transition: 'color 0.4s ease',
                    }}
                  >
                    {strength.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Colonne droite — tous les contenus superposés */}
            <div className="lg:w-1/2 flex items-center mt-8 lg:mt-0">
              <div className="max-w-lg w-full" style={{ display: 'grid' }}>
                {STRENGTHS.map((strength, i) => {
                  const Icon = ICONS[strength.icon as keyof typeof ICONS]
                  const isActive = activeIndex === i
                  return (
                    <div
                      key={i}
                      style={{
                        gridArea: '1 / 1',
                        opacity: isActive ? 1 : 0,
                        transition: 'opacity 0.4s ease',
                        pointerEvents: isActive ? 'auto' : 'none',
                      }}
                    >
                      <div className="w-11 h-11 bg-sam-yellow flex items-center justify-center mb-5">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <p className="text-[17px] text-gray-700 leading-[1.85]">
                        {strength.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
