import { useEffect, useRef } from 'react'
import { useMotionValue, useTransform, animate, motion, useInView } from 'framer-motion'

interface CountUpProps {
  value: string // ex: "100+", "70%", "20+"
  className?: string
  style?: React.CSSProperties
}

export default function CountUp({ value, className, style }: CountUpProps) {
  // Sépare le nombre du suffixe ("+", "%", etc.)
  const match = value.match(/^(\d+)(.*)$/)
  const num = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : value

  const motionVal = useMotionValue(0)
  const rounded = useTransform(motionVal, (v) => Math.round(v))
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return
    const controls = animate(motionVal, num, {
      duration: 2.4,
      ease: [0.16, 1, 0.3, 1],
    })
    return controls.stop
  }, [isInView, motionVal, num])

  return (
    <span ref={ref} className={className} style={style}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}
