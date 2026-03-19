import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

// ─── Easing functions ─────────────────────────────────────────────────────────
function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}
function easeOutBack(t: number) {
  const c1 = 1.70158
  const c3 = c1 + 1
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2)
}
function easeOutElastic(t: number) {
  if (t <= 0) return 0
  if (t >= 1) return 1
  return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * ((2 * Math.PI) / 3)) + 1
}

// ─── Scene ────────────────────────────────────────────────────────────────────
function Scene() {
  const rootRef = useRef<THREE.Group>(null)
  const coverRef = useRef<THREE.Group>(null)
  const doc0Ref = useRef<THREE.Group>(null)
  const doc1Ref = useRef<THREE.Group>(null)
  const doc2Ref = useRef<THREE.Group>(null)
  const checkRef = useRef<THREE.Group>(null)
  const startTime = useRef<number | null>(null)

  const DOC_DELAYS = [1.3, 1.85, 2.4]
  const DOC_REFS = [doc0Ref, doc1Ref, doc2Ref]

  useFrame(({ clock, mouse }) => {
    if (startTime.current === null) startTime.current = clock.elapsedTime
    const elapsed = clock.elapsedTime - startTime.current

    if (!rootRef.current) return

    // ── Idle float
    rootRef.current.position.y = Math.sin(elapsed * 0.7) * 0.1

    // ── Parallaxe souris (subtile)
    rootRef.current.rotation.x += (mouse.y * -0.12 - rootRef.current.rotation.x) * 0.05
    rootRef.current.rotation.y += (mouse.x * 0.12 - rootRef.current.rotation.y) * 0.05

    // ── Rotation lente idle sur Y (s'additionne à la parallaxe)
    rootRef.current.rotation.y += 0.003

    // ── Couverture : ouvre à 0.6s, referme à 3.4s
    if (coverRef.current) {
      let angle = 0
      if (elapsed >= 0.6 && elapsed < 3.4) {
        const t = Math.min((elapsed - 0.6) / 0.7, 1)
        angle = -Math.PI * 0.78 * easeInOutCubic(t)
      } else if (elapsed >= 3.4) {
        const t = Math.min((elapsed - 3.4) / 0.7, 1)
        angle = -Math.PI * 0.78 * (1 - easeInOutCubic(t))
      }
      coverRef.current.rotation.x = angle
    }

    // ── Documents : glissent depuis la droite un à un
    DOC_REFS.forEach((ref, i) => {
      if (!ref.current) return
      const delay = DOC_DELAYS[i]
      if (elapsed < delay) {
        ref.current.position.x = 2.8
        return
      }
      const t = Math.min((elapsed - delay) / 0.55, 1)
      const eased = easeOutBack(t)
      ref.current.position.x = 2.8 * (1 - eased)
    })

    // ── Coche : pop après que le dossier soit refermé
    if (checkRef.current) {
      const appear = 4.3
      if (elapsed < appear) {
        checkRef.current.scale.setScalar(0)
        return
      }
      const t = Math.min((elapsed - appear) / 0.5, 1)
      const s = easeOutElastic(t)
      checkRef.current.scale.setScalar(s)
    }
  })

  return (
    <group ref={rootRef}>

      {/* ─ Fond du dossier (bas) */}
      <RoundedBox args={[2.1, 2.7, 0.1]} radius={0.1} smoothness={5} position={[0, 0, -0.08]}>
        <meshStandardMaterial color="#FCF06D" roughness={0.28} metalness={0.08} />
      </RoundedBox>

      {/* ─ Onglet arrière */}
      <RoundedBox args={[0.72, 0.3, 0.08]} radius={0.07} smoothness={4} position={[-0.58, 1.42, -0.06]}>
        <meshStandardMaterial color="#C9A500" roughness={0.4} metalness={0.12} />
      </RoundedBox>

      {/* ─ Documents (3 rectangles blancs arrondis) */}
      {DOC_REFS.map((ref, i) => (
        <group key={i} ref={ref} position={[2.8, 0, 0.05 + i * 0.04]}>
          <RoundedBox args={[1.35, 1.76, 0.07]} radius={0.07} smoothness={4}>
            <meshStandardMaterial color="#FFFFFF" roughness={0.38} metalness={0.0} />
          </RoundedBox>
          {/* Ligne titre */}
          <mesh position={[0, 0.58, 0.045]}>
            <boxGeometry args={[0.72, 0.08, 0.01]} />
            <meshStandardMaterial color="#111827" roughness={0.9} />
          </mesh>
          {/* Lignes de texte */}
          {[0.32, 0.12, -0.08, -0.28].map((y, li) => (
            <mesh key={li} position={[0, y, 0.045]}>
              <boxGeometry args={[li % 2 === 0 ? 0.98 : 0.76, 0.055, 0.01]} />
              <meshStandardMaterial color="#D1D5DB" roughness={0.9} />
            </mesh>
          ))}
          {/* Badge jaune en bas */}
          <mesh position={[-0.32, -0.64, 0.045]}>
            <boxGeometry args={[0.36, 0.11, 0.01]} />
            <meshStandardMaterial color="#FCF06D" roughness={0.4} />
          </mesh>
        </group>
      ))}

      {/* ─ Couverture avant (pivote sur le bord haut du dossier) */}
      <group ref={coverRef} position={[0, 1.35, 0.06]}>
        <group position={[0, -1.35, 0]}>
          <RoundedBox args={[2.1, 2.7, 0.08]} radius={0.1} smoothness={5}>
            <meshStandardMaterial color="#FCF06D" roughness={0.28} metalness={0.08} />
          </RoundedBox>
          {/* Onglet avant */}
          <RoundedBox args={[0.72, 0.3, 0.06]} radius={0.07} smoothness={4} position={[-0.58, 1.42, 0.05]}>
            <meshStandardMaterial color="#C9A500" roughness={0.4} metalness={0.12} />
          </RoundedBox>
        </group>
      </group>

      {/* ─ Coche verte */}
      <group ref={checkRef} position={[0.72, 1.45, 0.15]} scale={0}>
        {/* Disque */}
        <mesh>
          <cylinderGeometry args={[0.4, 0.4, 0.12, 32]} />
          <meshStandardMaterial
            color="#16A34A"
            roughness={0.22}
            metalness={0.1}
            emissive="#16A34A"
            emissiveIntensity={0.25}
          />
        </mesh>
        {/* Branche gauche */}
        <mesh position={[-0.1, -0.03, 0.08]} rotation={[0, 0, Math.PI * 0.62]}>
          <boxGeometry args={[0.07, 0.24, 0.07]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
        </mesh>
        {/* Branche droite */}
        <mesh position={[0.1, 0.07, 0.08]} rotation={[0, 0, -Math.PI * 0.3]}>
          <boxGeometry args={[0.07, 0.4, 0.07]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
        </mesh>
      </group>

    </group>
  )
}

// ─── Export ───────────────────────────────────────────────────────────────────
export default function FolderScene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 36 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      <ambientLight intensity={1.6} />
      <directionalLight position={[4, 6, 5]} intensity={2.0} />
      <directionalLight position={[-3, 1, -2]} intensity={0.5} color="#FFF5CC" />
      <Scene />
    </Canvas>
  )
}
