import { STATS } from '../../config/constants'
import AnimatedSection from '../ui/AnimatedSection'
import CountUp from '../ui/CountUp'

export default function Stats() {
  return (
    <section className="bg-sam-black py-14 md:py-18">
      <div className="px-4 md:px-[50px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {STATS.map((stat, i) => (
            <AnimatedSection key={stat.value} delay={i * 80} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
              <div className="flex flex-col gap-1 py-2">
                <CountUp
                  value={stat.value}
                  className="font-black text-white leading-none"
                  style={{ fontSize: 'clamp(34px, 4vw, 54px)', letterSpacing: '-0.01em' }}
                />
                <span className="text-xs font-medium uppercase tracking-wider text-white/50 leading-tight mt-1">
                  {stat.label}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <p className="text-white/50 text-[12px] mt-8 leading-relaxed">
          * sous réserve d'une convention collective agréée CARSAT
        </p>
      </div>
    </section>
  )
}
