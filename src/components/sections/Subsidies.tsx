import { SUBSIDIES } from '../../config/constants'
import AnimatedSection from '../ui/AnimatedSection'

export default function Subsidies() {
  return (
    <section id="subsidies" className="bg-sam-gray-bg py-14 md:py-18">
      <div className="px-4 md:px-[50px]">

        {/* Header */}
        <AnimatedSection className="mb-8 md:mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-3">
            Dispositifs
          </span>
          <h2
            className="font-bold whitespace-nowrap"
            style={{ fontSize: 'clamp(26px, 3.5vw, 46px)', letterSpacing: '-0.01em' }}
          >
            Les subventions que nous gérons
          </h2>
        </AnimatedSection>

        {/* Cards subventions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SUBSIDIES.map((sub, i) => (
            <AnimatedSection key={sub.id} delay={i * 100}>
              <div className="bg-white h-full flex flex-col">

                {/* Top section: rate + yellow square */}
                <div className="p-8 lg:p-10 pb-10 flex items-start justify-between">
                  <div>
                    <span
                      className="text-sam-black leading-none block"
                      style={{ fontSize: '100px', fontWeight: 400, letterSpacing: '-0.03em' }}
                    >
                      {sub.rate}
                    </span>
                    <span
                      className="block"
                      style={{ fontSize: '18px', fontWeight: 500, color: '#8E8E8E', marginTop: '-8px' }}
                    >
                      {sub.label}
                    </span>
                  </div>
                  <div className="w-4 h-4 bg-sam-yellow flex-shrink-0 mt-2" />
                </div>

                {/* Bottom section: name + description + badge */}
                <div className="px-8 lg:px-10 pb-8 lg:pb-10 pt-8 flex flex-col flex-1">
                  <h3
                    className="text-sam-black"
                    style={{ fontSize: '24px', fontWeight: 500 }}
                  >
                    {sub.name}
                  </h3>
                  <p
                    className="flex-1 mb-6 leading-relaxed"
                    style={{ fontSize: '15px', fontWeight: 400, color: '#8E8E8E', marginTop: '12px' }}
                  >
                    {sub.description}
                  </p>
                  <div className="mt-auto">
                    <span
                      className="inline-flex items-center px-2 py-1"
                      style={{ fontSize: '15px', fontWeight: 400, backgroundColor: '#D9D9D9', color: '#555555' }}
                    >
                      {sub.demande}
                    </span>
                  </div>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
