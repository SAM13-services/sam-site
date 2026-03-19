import { useRef, useState, useEffect } from 'react'
import { Search, X, SlidersHorizontal, ChevronDown } from 'lucide-react'
import type { Subvention, Categorie, Secteur } from '../../types/materiel'
import { SUBVENTION_LABELS, CATEGORIE_LABELS, SECTEUR_LABELS } from '../../types/materiel'

export interface FilterState {
  search: string
  subvention: Subvention | ''
  categorie: Categorie | ''
  secteurs: Secteur[]
}

interface Props {
  filters: FilterState
  onChange: (filters: FilterState) => void
  total: number
  filtered: number
}

const SUBVENTIONS: Subvention[] = ['FIPU', 'TOP_BTP', 'POUSSIERE_FARINE']
const CATEGORIES: Categorie[] = [
  'equipements-transfert',
  'equipements-roulants',
  'plans-travail-reglables',
  'outils-portatifs-vibrations',
  'equipements-specifiques',
]
const SECTEURS: Secteur[] = [
  'sanitaire-medico-social',
  'industrie',
  'construction-btp',
  'demenagement',
  'restauration-metiers-bouche',
  'logistique-entreposage',
  'veterinaire',
  'sport',
  'medical-paramedical',
  'coiffure',
  'proprete',
  'automobile',
  'transport',
  'puericulture',
]

type OpenDropdown = 'subvention' | 'categorie' | 'secteur' | null

function Dropdown({
  label,
  active,
  isOpen,
  onToggle,
  children,
}: {
  label: string
  active: boolean
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={`inline-flex items-center gap-2 text-sm px-3 py-2 border transition-colors duration-150 ${
          active
            ? 'border-black bg-black text-white'
            : 'border-sam-gray text-gray-600 hover:border-sam-black bg-white'
        }`}
      >
        {label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-sam-gray shadow-lg z-50 min-w-[240px]">
          {children}
        </div>
      )}
    </div>
  )
}

export default function MaterielFilters({ filters, onChange, total, filtered }: Props) {
  const searchRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [openDropdown, setOpenDropdown] = useState<OpenDropdown>(null)

  const hasActive =
    filters.search !== '' ||
    filters.subvention !== '' ||
    filters.categorie !== '' ||
    filters.secteurs.length > 0

  function reset() {
    onChange({ search: '', subvention: '', categorie: '', secteurs: [] })
    searchRef.current?.focus()
  }

  function toggleSecteur(s: Secteur) {
    const next = filters.secteurs.includes(s)
      ? filters.secteurs.filter((x) => x !== s)
      : [...filters.secteurs, s]
    onChange({ ...filters, secteurs: next })
  }

  function toggle(name: OpenDropdown) {
    setOpenDropdown((prev) => (prev === name ? null : name))
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="bg-white border-b border-sam-gray sticky top-[64px] z-30">
      <div className="px-4 md:px-[50px] py-4" ref={containerRef}>

        <div className="flex flex-wrap items-center gap-3">

          {/* Icône filtres */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 shrink-0">
            <SlidersHorizontal size={14} />
            <span className="hidden sm:inline">Filtrer</span>
          </div>

          {/* Recherche */}
          <div className="relative flex-1 min-w-[180px] max-w-xs">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              ref={searchRef}
              type="text"
              placeholder="Rechercher un équipement..."
              value={filters.search}
              onChange={(e) => onChange({ ...filters, search: e.target.value })}
              className="w-full pl-8 pr-8 py-2 text-sm border border-sam-gray focus:outline-none focus:border-sam-black transition-colors duration-150 bg-white"
              aria-label="Rechercher un équipement"
            />
            {filters.search && (
              <button
                onClick={() => { onChange({ ...filters, search: '' }); searchRef.current?.focus() }}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-sam-black transition-colors duration-150"
                aria-label="Effacer la recherche"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Subvention */}
          <Dropdown
            label={filters.subvention ? SUBVENTION_LABELS[filters.subvention] : 'Type de subvention'}
            active={!!filters.subvention}
            isOpen={openDropdown === 'subvention'}
            onToggle={() => toggle('subvention')}
          >
            <div className="overflow-y-auto" style={{ maxHeight: '280px' }}>
              {filters.subvention && (
                <button
                  onClick={() => { onChange({ ...filters, subvention: '' }); setOpenDropdown(null) }}
                  className="w-full text-left flex items-center justify-between px-5 py-3 text-sm text-gray-400 hover:text-black border-b border-sam-gray"
                >
                  Tous les types
                  <X size={12} strokeWidth={2} />
                </button>
              )}
              {SUBVENTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => { onChange({ ...filters, subvention: s }); setOpenDropdown(null) }}
                  className={`w-full text-left flex items-center justify-between px-5 py-3 text-sm transition-colors duration-100 ${
                    filters.subvention === s
                      ? 'bg-black text-white'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                  }`}
                >
                  {SUBVENTION_LABELS[s]}
                </button>
              ))}
            </div>
          </Dropdown>

          {/* Catégorie */}
          <Dropdown
            label={filters.categorie ? CATEGORIE_LABELS[filters.categorie] : 'Catégorie'}
            active={!!filters.categorie}
            isOpen={openDropdown === 'categorie'}
            onToggle={() => toggle('categorie')}
          >
            <div className="overflow-y-auto" style={{ maxHeight: '280px' }}>
              {filters.categorie && (
                <button
                  onClick={() => { onChange({ ...filters, categorie: '' }); setOpenDropdown(null) }}
                  className="w-full text-left flex items-center justify-between px-5 py-3 text-sm text-gray-400 hover:text-black border-b border-sam-gray"
                >
                  Toutes les catégories
                  <X size={12} strokeWidth={2} />
                </button>
              )}
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => { onChange({ ...filters, categorie: c }); setOpenDropdown(null) }}
                  className={`w-full text-left flex items-center justify-between px-5 py-3 text-sm transition-colors duration-100 ${
                    filters.categorie === c
                      ? 'bg-black text-white'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                  }`}
                >
                  {CATEGORIE_LABELS[c]}
                </button>
              ))}
            </div>
          </Dropdown>

          {/* Secteurs */}
          <Dropdown
            label="Secteur d'activité"
            active={filters.secteurs.length > 0}
            isOpen={openDropdown === 'secteur'}
            onToggle={() => toggle('secteur')}
          >
            <>
              <div className="overflow-y-auto" style={{ maxHeight: '320px' }}>
                {SECTEURS.map((s) => {
                  const active = filters.secteurs.includes(s)
                  return (
                    <button
                      key={s}
                      onClick={() => toggleSecteur(s)}
                      className={`w-full text-left flex items-center justify-between px-5 py-3 text-sm transition-colors duration-100 ${
                        active
                          ? 'bg-black text-white'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                      }`}
                    >
                      {SECTEUR_LABELS[s]}
                      {active && <X size={12} strokeWidth={2} />}
                    </button>
                  )
                })}
              </div>
              {filters.secteurs.length > 0 && (
                <button
                  onClick={() => onChange({ ...filters, secteurs: [] })}
                  className="w-full text-left px-5 py-3 text-sm text-gray-400 hover:text-black border-t border-sam-gray transition-colors duration-100"
                >
                  Effacer les secteurs
                </button>
              )}
            </>
          </Dropdown>

          {/* Reset */}
          {hasActive && (
            <button
              onClick={reset}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-sam-black transition-colors duration-150 px-2 py-2"
            >
              <X size={12} />
              Réinitialiser
            </button>
          )}

          {/* Compteur */}
          <span className="text-xs text-gray-400 ml-auto shrink-0">
            {filtered === total
              ? `${total} équipement${total > 1 ? 's' : ''}`
              : `${filtered} / ${total} équipement${total > 1 ? 's' : ''}`}
          </span>
        </div>

      </div>
    </div>
  )
}
