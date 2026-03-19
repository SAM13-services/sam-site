import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'

interface HeroAnimationProps {
  className?: string
}

export default function HeroAnimation({ className }: HeroAnimationProps) {
  const [animationData, setAnimationData] = useState<object | null>(null)

  useEffect(() => {
    fetch('/animations/hero-export.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Erreur chargement animation:', err))
  }, [])

  if (!animationData) return null

  return (
    <div className={className}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
        rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
      />
    </div>
  )
}
