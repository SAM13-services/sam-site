import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const SPRING = { type: 'spring', stiffness: 280, damping: 17 } as const
const SPRING_CLOSE = { type: 'spring', stiffness: 200, damping: 22 } as const

function wait(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms))
}

export default function HeroFolderAnimation() {
  const file1 = useAnimation()
  const file2 = useAnimation()
  const file3 = useAnimation()
  const flap = useAnimation()

  useEffect(() => {
    let alive = true

    async function run() {
      // ── Reset ──────────────────────────────────────────
      file1.set({ y: -270, opacity: 0, rotate: -2 })
      file2.set({ y: -270, opacity: 0, rotate: 1.5 })
      file3.set({ y: -270, opacity: 0, rotate: -2.5 })
      flap.set({ scaleY: 0.03 })

      await wait(350)
      if (!alive) return

      // ── Fichiers entrent un par un ─────────────────────
      await file1.start({ y: 0, opacity: 1, transition: SPRING })
      await wait(90)
      if (!alive) return

      await file2.start({ y: 0, opacity: 1, transition: SPRING })
      await wait(90)
      if (!alive) return

      await file3.start({ y: 0, opacity: 1, transition: SPRING })
      await wait(420)
      if (!alive) return

      // ── Renter les fichiers dans le dossier ────────────
      await Promise.all([
        file1.start({ y: 30, transition: { duration: 0.18, ease: 'easeIn' } }),
        file2.start({ y: 30, transition: { duration: 0.18, ease: 'easeIn' } }),
        file3.start({ y: 30, transition: { duration: 0.18, ease: 'easeIn' } }),
      ])

      // ── Rabat se ferme ─────────────────────────────────
      await flap.start({ scaleY: 1, transition: SPRING_CLOSE })
      await wait(1000)
      if (!alive) return

      // ── Rabat s'ouvre ──────────────────────────────────
      await flap.start({ scaleY: 0.03, transition: { duration: 0.3, ease: 'easeInOut' } })

      // ── Fichiers disparaissent ─────────────────────────
      await Promise.all([
        file1.start({ opacity: 0, y: 10, transition: { duration: 0.2 } }),
        file2.start({ opacity: 0, y: 10, transition: { duration: 0.2, delay: 0.07 } }),
        file3.start({ opacity: 0, y: 10, transition: { duration: 0.2, delay: 0.14 } }),
      ])

      await wait(380)
      if (alive) run()
    }

    run()
    return () => {
      alive = false
    }
  }, [file1, file2, file3, flap])

  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[380px]"
      style={{ overflow: 'visible' }}
      aria-hidden="true"
    >
      {/* ── Corps du dossier (fond) ── */}
      <rect x="90" y="118" width="220" height="167" fill="#FCF06D" stroke="#000000" strokeWidth="2" />

      {/* ── Intérieur visible quand ouvert ── */}
      <rect x="100" y="128" width="200" height="149" fill="#FAFAFA" />

      {/* ── Fichier 3 (couche arrière) ── */}
      <motion.g animate={file3} style={{ transformOrigin: '225px 139px' }}>
        <rect x="196" y="94" width="58" height="90" fill="#F5F5F5" stroke="#000000" strokeWidth="1.5" />
        <line x1="205" y1="110" x2="244" y2="110" stroke="#D9D9D9" strokeWidth="1.5" />
        <line x1="205" y1="119" x2="238" y2="119" stroke="#D9D9D9" strokeWidth="1.5" />
        <line x1="205" y1="128" x2="242" y2="128" stroke="#D9D9D9" strokeWidth="1.5" />
        <line x1="205" y1="137" x2="234" y2="137" stroke="#D9D9D9" strokeWidth="1.5" />
      </motion.g>

      {/* ── Fichier 2 (couche intermédiaire) ── */}
      <motion.g animate={file2} style={{ transformOrigin: '184px 136px' }}>
        <rect x="155" y="90" width="58" height="92" fill="#F5F5F5" stroke="#000000" strokeWidth="1.5" />
        <line x1="164" y1="106" x2="203" y2="106" stroke="#D9D9D9" strokeWidth="1.5" />
        <line x1="164" y1="115" x2="197" y2="115" stroke="#D9D9D9" strokeWidth="1.5" />
        <line x1="164" y1="124" x2="201" y2="124" stroke="#D9D9D9" strokeWidth="1.5" />
        <line x1="164" y1="133" x2="193" y2="133" stroke="#D9D9D9" strokeWidth="1.5" />
      </motion.g>

      {/* ── Fichier 1 (couche avant) ── */}
      <motion.g animate={file1} style={{ transformOrigin: '141px 133px' }}>
        <rect x="112" y="86" width="58" height="94" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5" />
        {/* Badge jaune */}
        <rect x="112" y="86" width="16" height="7" fill="#FCF06D" />
        <line x1="121" y1="103" x2="160" y2="103" stroke="#D9D9D9" strokeWidth="1.5" />
        <line x1="121" y1="112" x2="154" y2="112" stroke="#D9D9D9" strokeWidth="1.5" />
        <line x1="121" y1="121" x2="158" y2="121" stroke="#D9D9D9" strokeWidth="1.5" />
        <line x1="121" y1="130" x2="150" y2="130" stroke="#D9D9D9" strokeWidth="1.5" />
      </motion.g>

      {/* ── Rabat du dossier (s'anime par scaleY depuis le haut) ── */}
      <motion.g animate={flap} style={{ transformOrigin: '200px 118px' }}>
        <rect x="90" y="118" width="220" height="167" fill="#EFD94A" stroke="#000000" strokeWidth="2" />
      </motion.g>

      {/* ── Onglet (toujours au dessus) ── */}
      <rect x="90" y="98" width="88" height="22" fill="#f5e84a" stroke="#000000" strokeWidth="1.5" />

      {/* ── Ligne de pliure du rabat ── */}
      <line x1="90" y1="118" x2="310" y2="118" stroke="#000000" strokeWidth="2" />
    </svg>
  )
}
