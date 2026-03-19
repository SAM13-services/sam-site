import { useState } from 'react'

interface Props {
  id: string
  variant?: 'card' | 'product'
  alt?: string
}

function Placeholder() {
  return (
    <svg
      viewBox="0 0 280 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <rect x="20" y="20" width="240" height="170" fill="#EBEBEB" rx="0" />
      <line x1="20" y1="20" x2="260" y2="190" stroke="#D0D0D0" strokeWidth="1.5" />
      <line x1="260" y1="20" x2="20" y2="190" stroke="#D0D0D0" strokeWidth="1.5" />
      <rect x="116" y="88" width="48" height="36" rx="0" stroke="#BDBDBD" strokeWidth="2" />
      <circle cx="127" cy="98" r="4" fill="#BDBDBD" />
      <polyline
        points="116,118 134,100 148,114 154,108 164,124"
        stroke="#BDBDBD"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Ordre de tentative : png → jpg → jpeg pour chaque contexte (png gère la transparence)
function buildQueue(id: string, variant: 'card' | 'product'): string[] {
  if (variant === 'card') {
    return [
      `/images/materiel/${id}-card.png`,
      `/images/materiel/${id}-card.jpg`,
      `/images/materiel/${id}-card.jpeg`,
      `/images/materiel/${id}.png`,
      `/images/materiel/${id}.jpg`,
      `/images/materiel/${id}.jpeg`,
    ]
  }
  return [
    `/images/materiel/${id}.png`,
    `/images/materiel/${id}.jpg`,
    `/images/materiel/${id}.jpeg`,
    `/images/materiel/${id}-card.png`,
    `/images/materiel/${id}-card.jpg`,
    `/images/materiel/${id}-card.jpeg`,
  ]
}

export default function MaterielSilhouette({ id, variant = 'product', alt = '' }: Props) {
  const queue = buildQueue(id, variant)
  const [index, setIndex] = useState(0)

  if (index >= queue.length) return <Placeholder />

  return (
    <img
      src={queue[index]}
      alt={alt}
      onError={() => setIndex((i) => i + 1)}
      className="w-full h-full object-cover block border-0 outline-none"
    />
  )
}
