import type { Subvention, Categorie } from '../../types/materiel'
import { SUBVENTION_LABELS, CATEGORIE_LABELS } from '../../types/materiel'

interface SubventionBadgeProps {
  subvention: Subvention
  size?: 'sm' | 'md'
}

export function SubventionBadge({ subvention, size = 'sm' }: SubventionBadgeProps) {
  const base = size === 'sm'
    ? 'inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-0.5'
    : 'inline-flex items-center text-xs font-bold uppercase tracking-wider px-3 py-1'

  return (
    <span className={`${base} bg-sam-yellow text-sam-black`}>
      {SUBVENTION_LABELS[subvention]}
    </span>
  )
}

interface CategorieBadgeProps {
  categorie: Categorie
  size?: 'sm' | 'md'
}

export function CategorieBadge({ categorie, size = 'sm' }: CategorieBadgeProps) {
  const base = size === 'sm'
    ? 'inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 border border-sam-black'
    : 'inline-flex items-center text-xs font-bold uppercase tracking-wider px-3 py-1 border border-sam-black'

  return (
    <span className={`${base} text-sam-black`}>
      {CATEGORIE_LABELS[categorie]}
    </span>
  )
}
