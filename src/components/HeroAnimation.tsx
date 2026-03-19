interface HeroAnimationProps {
  className?: string
}

export default function HeroAnimation({ className }: HeroAnimationProps) {
  return (
    <div className={className}>
      <video
        src="/animations/export-hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom' }}
      />
    </div>
  )
}
