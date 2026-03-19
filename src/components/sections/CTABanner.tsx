import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { CTA_BANNER } from '../../config/constants'
import Button from '../ui/Button'
import AnimatedSection from '../ui/AnimatedSection'

export default function CTABanner() {
  const navigate = useNavigate()

  return (
    <section className="bg-white py-14 md:py-18">
      <div className="px-4 md:px-[50px]">
        <AnimatedSection>
          <div className="bg-sam-gray-bg px-8 py-12 md:px-12 md:py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <h2
                className="font-black leading-tight mb-3"
                style={{ fontSize: 'clamp(28px, 4vw, 56px)', letterSpacing: '-0.015em' }}
              >
                {CTA_BANNER.title}
              </h2>
              <p className="text-[17px] text-gray-500 leading-relaxed">
                {CTA_BANNER.subtitle}
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/pre-demande')}
                className="group whitespace-nowrap"
              >
                {CTA_BANNER.cta}
                <ArrowRight size={16} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
