import { DotLottieReact } from '@lottiefiles/dotlottie-react'

interface HeroAnimationProps {
  className?: string
}

export default function HeroAnimation({ className }: HeroAnimationProps) {
  return (
    <div className={className}>
      <DotLottieReact
        src="/animations/hero-export.lottie"
        loop
        autoplay
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}
