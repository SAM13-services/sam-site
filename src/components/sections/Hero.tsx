import { lazy, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { HERO } from '../../config/constants'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
const HeroAnimation = lazy(() => import('../HeroAnimation'))

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section className="relative bg-white overflow-hidden flex min-h-screen">

      {/* Colonne gauche — texte ancré en bas */}
      <div className="flex-1 flex flex-col justify-end px-4 md:px-[50px] pb-12 pt-24 md:pt-32 relative z-10">
        <div className="max-w-xl text-left">

          {/* Badge */}
          <div
            style={{ animation: 'fadeUp 0.5s ease-out forwards', opacity: 0, animationDelay: '0.1s' }}
            className="mb-6"
          >
            <Badge variant="yellow">{HERO.badge}</Badge>
          </div>

          {/* Titre */}
          <h1
            className="font-semibold leading-[1.04] mb-6 text-left"
            style={{
              fontSize: 'clamp(36px, 5vw, 72px)',
              letterSpacing: '-0.015em',
              animation: 'fadeUp 0.6s ease-out forwards',
              opacity: 0,
              animationDelay: '0.2s',
            }}
          >
            {HERO.title}
          </h1>

          {/* Sous-titre */}
          <p
            className="text-[17px] text-gray-600 leading-relaxed mb-10 max-w-xl text-left"
            style={{
              animation: 'fadeUp 0.6s ease-out forwards',
              opacity: 0,
              animationDelay: '0.32s',
            }}
          >
            {HERO.subtitle}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-3 justify-start"
            style={{
              animation: 'fadeUp 0.6s ease-out forwards',
              opacity: 0,
              animationDelay: '0.46s',
            }}
          >
            <Button variant="primary" size="lg" onClick={() => navigate('/pre-demande')} className="group">
              {HERO.cta1}
              <ArrowRight size={16} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button variant="secondary" size="lg" onClick={() => navigate('/contact')}>
              {HERO.cta2}
            </Button>
          </div>

        </div>
      </div>

      {/* Colonne droite — animation ancrée en bas, hauteur étendue */}
      <div className="hidden md:flex flex-1 items-end pr-[50px] pb-12 pointer-events-none overflow-hidden">
        <Suspense fallback={null}>
          <HeroAnimation className="w-full h-[82vh]" />
        </Suspense>
      </div>

    </section>
  )
}
