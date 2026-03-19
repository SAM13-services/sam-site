import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

const W = 290
const H = 210
const TAB_H = 26
const TAB_W = 92
const Y  = '#FCF06D'   // jaune SAM
const YD = '#C9A500'   // jaune ombre
const YB = '#E0C000'   // jaune bord

const DOCS = [
  { title: '58%', lines: [88, 68, 50], badge: 38 },
  { title: '72%', lines: [80, 94, 60], badge: 55 },
  { title: '48%', lines: [92, 64, 44], badge: 46 },
]

export default function FolderAnimation() {
  const [phase, setPhase] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse parallax
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const ry = useSpring(useTransform(mx, [-1, 1], [-9, 9]),  { stiffness: 55, damping: 14 })
  const rx = useSpring(useTransform(my, [-1, 1], [5, -5]), { stiffness: 55, damping: 14 })

  const onMove = (e: React.MouseEvent) => {
    const r = containerRef.current?.getBoundingClientRect()
    if (!r) return
    mx.set((e.clientX - r.left - r.width  / 2) / (r.width  / 2))
    my.set((e.clientY - r.top  - r.height / 2) / (r.height / 2))
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  // Séquence (setTimeout → seulement 6 re-renders total)
  useEffect(() => {
    const ts = [
      setTimeout(() => setPhase(1), 500),   // ouverture couverture
      setTimeout(() => setPhase(2), 1350),  // doc 1
      setTimeout(() => setPhase(3), 1950),  // doc 2
      setTimeout(() => setPhase(4), 2550),  // doc 3
      setTimeout(() => setPhase(5), 3450),  // fermeture
      setTimeout(() => setPhase(6), 4350),  // coche
    ]
    return () => ts.forEach(clearTimeout)
  }, [])

  const coverUp = phase >= 1 && phase <= 4

  return (
    <div
      ref={containerRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="select-none"
      style={{ width: W + 56, height: H + TAB_H + 56 }}
    >
      {/* Flottement */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: 28, left: 28, perspective: '1100px' }}
      >
        {/* Inclinaison 3D souris */}
        <motion.div
          style={{
            rotateX: rx,
            rotateY: ry,
            width: W,
            height: H + TAB_H,
            position: 'relative',
          }}
        >

          {/* ── Fond du dossier (arrière) ── */}
          <div style={{
            position: 'absolute', top: 0, left: 0,
            width: TAB_W, height: TAB_H,
            backgroundColor: YD,
            borderRadius: '7px 7px 0 0',
          }} />
          <div style={{
            position: 'absolute', top: TAB_H, left: 0,
            width: W, height: H,
            backgroundColor: Y,
            borderRadius: '0 9px 9px 9px',
            boxShadow: `inset 0 1px 0 rgba(255,255,255,0.55), 5px 7px 0 ${YB}, 9px 12px 0 ${YD}60`,
          }} />

          {/* ── Zone clippée — documents ── */}
          <div style={{
            position: 'absolute', top: TAB_H, left: 0,
            width: W, height: H,
            overflow: 'hidden',
            borderRadius: '0 9px 9px 9px',
            zIndex: 5,
          }}>
            {DOCS.map((doc, i) => (
              <motion.div
                key={i}
                animate={{ x: phase >= i + 2 ? 0 : W + 40 }}
                transition={{ type: 'spring', stiffness: 210, damping: 22 }}
                style={{
                  position: 'absolute',
                  top: 20 + (2 - i) * 8,
                  left: 16,
                  width: W - 32,
                  height: H - 34,
                  backgroundColor: '#fff',
                  borderRadius: 5,
                  padding: '13px 15px',
                  boxShadow: '0 3px 14px rgba(0,0,0,0.09)',
                  zIndex: i + 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 7,
                }}
              >
                {/* Ligne titre */}
                <div style={{ height: 7, backgroundColor: '#111827', borderRadius: 3, width: `${48 + i * 7}%` }} />
                {/* Lignes texte */}
                {doc.lines.map((w, li) => (
                  <div key={li} style={{ height: 4, backgroundColor: '#E5E7EB', borderRadius: 2, width: `${w}%` }} />
                ))}
                {/* Badge jaune */}
                <div style={{
                  marginTop: 'auto',
                  height: 15, width: doc.badge,
                  backgroundColor: Y, borderRadius: 3,
                }} />
              </motion.div>
            ))}
          </div>

          {/* ── Couverture avant (monte / redescend) ── */}
          <motion.div
            animate={{ y: coverUp ? -(TAB_H + H) : 0 }}
            transition={{ type: 'spring', stiffness: 52, damping: 19 }}
            style={{
              position: 'absolute', top: 0, left: 0,
              width: W, height: TAB_H + H,
              zIndex: 10,
            }}
          >
            <div style={{
              position: 'absolute', top: 0, left: 0,
              width: TAB_W, height: TAB_H,
              backgroundColor: YD,
              borderRadius: '7px 7px 0 0',
            }} />
            <div style={{
              position: 'absolute', top: TAB_H, left: 0,
              width: W, height: H,
              backgroundColor: Y,
              borderRadius: '0 9px 9px 9px',
              boxShadow: `inset 0 1px 0 rgba(255,255,255,0.55), 5px 7px 0 ${YB}, 9px 12px 0 ${YD}60`,
            }} />
          </motion.div>

          {/* ── Coche verte ── */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: phase >= 6 ? 1 : 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 16 }}
            style={{
              position: 'absolute',
              top: TAB_H - 18, right: -18,
              zIndex: 20,
              width: 46, height: 46,
              backgroundColor: '#16A34A',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 22px rgba(22, 163, 74, 0.50)',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M5 11.5L9 15.5L17 7"
                stroke="white"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

        </motion.div>
      </motion.div>
    </div>
  )
}
