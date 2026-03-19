import { CheckSquare, AlertTriangle } from 'lucide-react'
import type { Materiel } from '../../types/materiel'

interface SectionProps {
  title: string
  items: string[]
  variant?: 'default' | 'warning'
}

function ChecklistSection({ title, items, variant = 'default' }: SectionProps) {
  if (!items || items.length === 0) return null

  return (
    <div className="mb-6">
      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5">
            {variant === 'warning' ? (
              <AlertTriangle size={14} className="text-orange-500 mt-0.5 shrink-0" />
            ) : (
              <CheckSquare size={14} className="text-sam-black mt-0.5 shrink-0" />
            )}
            <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

interface Props {
  eligibilite: Materiel['eligibilite']
}

export default function MaterielChecklist({ eligibilite }: Props) {
  return (
    <div>
      <ChecklistSection
        title="Conception & Fonctionnalités requises"
        items={eligibilite.conception}
      />
      <ChecklistSection
        title="Formation & Documentation obligatoires"
        items={eligibilite.formation}
      />
      <ChecklistSection
        title="Aménagement, Utilisation & Maintenance"
        items={eligibilite.amenagement}
      />
      {eligibilite.precisions && eligibilite.precisions.length > 0 && (
        <ChecklistSection
          title="Précisions complémentaires"
          items={eligibilite.precisions}
        />
      )}
      {eligibilite.exclusions && eligibilite.exclusions.length > 0 && (
        <ChecklistSection
          title="Exclusions (non éligible)"
          items={eligibilite.exclusions}
          variant="warning"
        />
      )}
    </div>
  )
}
