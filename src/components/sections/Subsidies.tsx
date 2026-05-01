import { useRef, useState, useLayoutEffect, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SUBSIDIES } from '../../config/constants'
import AnimatedSection from '../ui/AnimatedSection'

const GAP = 16
const DESKTOP_VISIBLE = 3
const MAX_DESKTOP = SUBSIDIES.length - DESKTOP_VISIBLE // 1
const MAX_MOBILE  = SUBSIDIES.length - 1               // 3

export default function Subsidies() {
  const [current, setCurrent]     = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)
  const containerRef              = useRef<HTMLDivElement>(null)
  const [containerW, setContainerW] = useState(0)
  const touchStartX               = useRef<number | null>(null)

  // Detect breakpoint
  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 768)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Measure container width
  useLayoutEffect(() => {
    const measure = () => {
      if (!containerRef.current) return
      setContainerW(containerRef.current.offsetWidth)
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  const activeGap    = isDesktop ? GAP : 0
  const desktopCardW = containerW > 0 ? (containerW - GAP * (DESKTOP_VISIBLE - 1)) / DESKTOP_VISIBLE : 0
  const mobileCardW  = containerW
  const activeCardW  = isDesktop ? desktopCardW : mobileCardW

  const max     = isDesktop ? MAX_DESKTOP : MAX_MOBILE
  const isFirst = current === 0
  const isLast  = current >= max

  function prev() { setCurrent(c => Math.max(0, c - 1)) }
  function next() { setCurrent(c => Math.min(max, c + 1)) }

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev()
    touchStartX.current = null
  }

  const desktopOffset = Math.min(current, MAX_DESKTOP) * (desktopCardW + GAP)
  const mobileOffset  = current * mobileCardW  // gap=0 on mobile → no extra offset

  return (
    <section id="subsidies" className="bg-sam-gray-bg py-14 md:py-18">
      <div className="px-4 md:px-[50px]">

        {/* Header */}
        <AnimatedSection className="mb-8 md:mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-3">
            Dispositifs
          </span>
          <div className="flex items-end justify-between gap-4">
            <h2
              className="font-bold"
              style={{ fontSize: 'clamp(26px, 3.5vw, 46px)', letterSpacing: '-0.01em' }}
            >
              Les subventions que nous gérons
            </h2>

            <div className="flex gap-2 shrink-0">
              <button
                onClick={prev}
                disabled={isFirst}
                aria-label="Précédent"
                className={`w-10 h-10 flex items-center justify-center border transition-colors duration-150
                  ${isFirst
                    ? 'border-sam-gray bg-white text-gray-300 cursor-not-allowed'
                    : 'border-sam-gray bg-white hover:bg-sam-black hover:text-white hover:border-sam-black'}`}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                disabled={isLast}
                aria-label="Suivant"
                className={`w-10 h-10 flex items-center justify-center border transition-colors duration-150
                  ${isLast
                    ? 'border-sam-gray bg-white text-gray-300 cursor-not-allowed'
                    : 'border-sam-gray bg-white hover:bg-sam-black hover:text-white hover:border-sam-black'}`}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Carousel container — shared ref for measuring */}
        <div ref={containerRef} className="overflow-hidden">

          {/* Track */}
          <div
            className="flex"
            style={{
              gap: `${activeGap}px`,
              transform: `translateX(${-(isDesktop ? desktopOffset : mobileOffset)}px)`,
              transition: 'transform 0.4s ease-out',
            }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {SUBSIDIES.map(sub => (
              <div
                key={sub.id}
                className="shrink-0"
                style={{ width: activeCardW > 0 ? `${activeCardW}px` : '100%' }}
              >
                <SubsidyCard sub={sub} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots — mobile only */}
        <div className="flex md:hidden justify-center gap-2 mt-4">
          {SUBSIDIES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Subvention ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors duration-150 ${i === current ? 'bg-sam-black' : 'bg-sam-gray'}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

function SubsidyCard({ sub }: { sub: typeof SUBSIDIES[number] }) {
  return (
    <div className="bg-white h-full flex flex-col">
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

      <div className="px-8 lg:px-10 pb-8 lg:pb-10 pt-8 flex flex-col flex-1">
        <h3 className="text-sam-black" style={{ fontSize: '24px', fontWeight: 500 }}>
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
  )
}
