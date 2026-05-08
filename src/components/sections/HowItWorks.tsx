import { useState } from 'react'
import { STEPS } from '../../config/constants'
import AnimatedSection from '../ui/AnimatedSection'

export default function HowItWorks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="how-it-works" className="bg-white py-14 md:py-18">
      <div className="px-4 md:px-[50px]">

        {/* Header */}
        <AnimatedSection className="mb-8 md:mb-10">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Processus
            </span>
            <h2
              className="font-bold leading-tight"
              style={{ fontSize: 'clamp(26px, 3.5vw, 46px)', letterSpacing: '-0.01em' }}
            >
              Comment ça marche
            </h2>
            <p className="text-[17px] text-gray-500 leading-relaxed">
              Un processus simple en 4 étapes, entièrement géré par nos équipes.
            </p>
          </div>
        </AnimatedSection>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {STEPS.map((step, i) => {
            const isHovered = hoveredIndex === i
            const isDimmed = hoveredIndex !== null && !isHovered

            return (
              <AnimatedSection key={step.number} delay={i * 100}>
                <div
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="p-4 md:p-8 flex flex-col justify-between cursor-default md:h-[412px]"
                  style={{
                    backgroundColor: '#FCF06D',
                    width: '100%',
                    transform: isHovered ? 'scale(1.04)' : isDimmed ? 'scale(0.98)' : 'scale(1)',
                    opacity: isDimmed ? 0.5 : 1,
                    transition: 'transform 0.3s ease, opacity 0.3s ease',
                    zIndex: isHovered ? 1 : 0,
                    position: 'relative',
                  }}
                >
                  {/* Mobile : numéro + titre même ligne. Desktop : numéro seul en haut */}
                  <div className="flex items-baseline gap-1.5 md:block overflow-hidden">
                    <span className="font-bold text-sam-black leading-none select-none whitespace-nowrap text-[22px] md:text-[64px] md:font-medium">
                      {step.number}.
                    </span>
                    <h3 className="font-bold text-sam-black whitespace-nowrap text-[22px] md:hidden">
                      {step.title}
                    </h3>
                  </div>

                  {/* Titre desktop + description */}
                  <div className="mt-3 md:mt-0 max-w-[82%] md:max-w-none">
                    <h3 className="hidden md:block font-bold text-sam-black" style={{ fontSize: '24px' }}>
                      {step.title}
                    </h3>
                    <p
                      className="text-sam-black/70 mt-2 md:mt-[30px]"
                      style={{ fontSize: '16px', lineHeight: '1.3' }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
