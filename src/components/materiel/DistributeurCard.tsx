import { ExternalLink } from 'lucide-react'
import type { Distributeur } from '../../types/materiel'

interface DistributeurCardProps {
  distributeur: Distributeur
}

export default function DistributeurCard({ distributeur }: DistributeurCardProps) {
  return (
    <div className="border border-sam-gray p-4 flex flex-col gap-3">
      {/* Logo placeholder */}
      <div className="w-full h-14 bg-sam-gray-light flex items-center justify-center">
        <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Logo</span>
      </div>

      {/* Nom */}
      <p className="text-sm font-bold text-sam-black">{distributeur.nom}</p>

      {/* Lien */}
      {distributeur.siteWeb ? (
        <a
          href={distributeur.siteWeb}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-sam-black transition-colors duration-150"
        >
          Visiter le site
          <ExternalLink size={11} />
        </a>
      ) : (
        <span className="text-xs text-gray-400">Site à venir</span>
      )}
    </div>
  )
}
