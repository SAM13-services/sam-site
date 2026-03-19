import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { X, ArrowRight } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import type { Materiel } from '../../types/materiel'
import { SECTEUR_LABELS } from '../../types/materiel'
import { SubventionBadge, CategorieBadge } from './MaterielBadge'
import MaterielChecklist from './MaterielChecklist'
import DistributeurCard from './DistributeurCard'
import Button from '../ui/Button'

interface Props {
  materiel: Materiel
  onClose: () => void
}

function getIcon(name: string) {
  const Icon = (LucideIcons as Record<string, any>)[name]
  return Icon || LucideIcons.Package
}

export default function MaterielDetail({ materiel, onClose }: Props) {
  const navigate = useNavigate()
  const Icon = getIcon(materiel.icon)

  // Fermer avec Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-end"
      role="dialog"
      aria-modal="true"
      aria-label={materiel.nom}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 animate-fade-in"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className="relative z-10 bg-white h-full w-full max-w-2xl overflow-y-auto shadow-2xl animate-slide-in-right"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-sam-gray z-10 px-8 py-5 flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            <SubventionBadge subvention={materiel.subvention} size="md" />
            <CategorieBadge categorie={materiel.categorie} size="md" />
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center border border-sam-gray hover:border-sam-black hover:bg-sam-gray-light transition-colors duration-150"
            aria-label="Fermer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-8">

          {/* Illustration + titre */}
          <div className="flex items-start gap-5 mb-8">
            <div className="w-16 h-16 bg-sam-gray-light shrink-0 flex items-center justify-center">
              <Icon size={28} strokeWidth={1.2} className="text-gray-400" />
            </div>
            <div>
              <h2
                className="font-bold text-sam-black leading-tight mb-3"
                style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}
              >
                {materiel.nom}
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {materiel.secteurs.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 bg-sam-gray-light text-gray-500"
                  >
                    {SECTEUR_LABELS[s]}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Description complète */}
          <p className="text-[15px] text-gray-600 leading-relaxed mb-10">
            {materiel.descriptionComplete}
          </p>

          {/* Critères d'éligibilité */}
          <div className="mb-10">
            <h3 className="text-base font-bold text-sam-black mb-5 pb-3 border-b border-sam-gray">
              Critères d'éligibilité
            </h3>
            <MaterielChecklist eligibilite={materiel.eligibilite} />
          </div>

          {/* Distributeurs */}
          <div className="mb-10">
            <h3 className="text-base font-bold text-sam-black mb-5 pb-3 border-b border-sam-gray">
              Nos partenaires distributeurs
            </h3>
            {materiel.distributeurs.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {materiel.distributeurs.map((d, i) => (
                  <DistributeurCard key={i} distributeur={d} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400 italic">
                Partenaires à venir — Contactez-nous pour une recommandation
              </p>
            )}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-sam-gray">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate(`/pre-demande?materiel=${materiel.id}`)}
              className="group flex-1 justify-center"
            >
              Faire une demande pour ce matériel
              <ArrowRight size={15} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate('/contact')}
              className="flex-1 justify-center"
            >
              Nous contacter
            </Button>
          </div>

        </div>
      </div>
    </div>
  )
}
