import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Materiel } from '../../types/materiel'
import MaterielSilhouette from './MaterielSilhouette'

interface Props {
  materiel: Materiel
  delay?: number
}

function MaterielCard({ materiel, delay = 0 }: Props) {
  const navigate = useNavigate()
  const handleClick = () => navigate(`/materiel/${materiel.id}`)

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer"
      style={{
        animation: 'fadeUp 0.5s ease-out forwards',
        opacity: 0,
        animationDelay: `${delay}ms`,
      }}
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3] bg-[#F2F2F2] overflow-hidden mb-3" style={{ isolation: 'isolate' }}>
        <div className="w-full h-full transition-opacity duration-300 group-hover:opacity-60" style={{ transform: 'translateZ(0)', willChange: 'opacity' }}>
          <MaterielSilhouette id={materiel.id} variant="card" alt={materiel.nom} />
        </div>

        {/* Bouton jaune hover */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-sam-yellow flex items-center justify-center
          opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <ArrowRight size={14} className="text-sam-black" />
        </div>
      </div>

      {/* Infos */}
      <h3 className="text-sm font-medium text-sam-black leading-tight mb-1 line-clamp-1">
        {materiel.nom}
      </h3>
      <p className="text-sm text-gray-400 leading-snug line-clamp-1">
        {materiel.description}
      </p>
    </div>
  )
}

export default memo(MaterielCard)
