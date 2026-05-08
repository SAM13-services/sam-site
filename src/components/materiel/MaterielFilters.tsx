import { useRef, useState, useEffect } from 'react'
import { Search, X, SlidersHorizontal, ChevronDown, Check } from 'lucide-react'
import type { Subvention, Categorie, Secteur } from '../../types/materiel'
import { SUBVENTION_LABELS, CATEGORIE_LABELS, SECTEUR_LABELS } from '../../types/materiel'

export interface FilterState {
  search: string
  subventions: Subvention[]
  categories: Categorie[]
  secteurs: Secteur[]
}

interface Props {
  filters: FilterState
  onChange: (filters: FilterState) => void
  total: number
  filtered: number
}

const SUBVENTIONS: Subvention[] = ['FIPU', 'TOP_BTP', 'POUSSIERE_FARINE', 'PREVENTION_CHUTE']
const CATEGORIES: Categorie[] = [
  'equipements-transfert',
  'equipements-roulants',
  'plans-travail-reglables',
  'outils-portatifs-vibrations',
  'equipements-specifiques',
  'sols-antiderapants',
  'travail-en-hauteur',
  'securite-quais',
  'securite-camions',
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
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const activeCount = filters.subventions.length + filters.categories.length + filters.secteurs.length

  const hasActive =
    filters.search !== '' ||
    filters.subventions.length > 0 ||
    filters.categories.length > 0 ||
    filters.secteurs.length > 0

  function reset() {
    onChange({ search: '', subventions: [], categories: [], secteurs: [] })
    searchRef.current?.focus()
  }

  function toggleSubvention(s: Subvention) {
    const next = filters.subventions.includes(s)
      ? filters.subventions.filter((x) => x !== s)
      : [...filters.subventions, s]
    onChange({ ...filters, subventions: next })
  }

  function toggleCategorie(c: Categorie) {
    const next = filters.categories.includes(c)
      ? filters.categories.filter((x) => x !== c)
      : [...filters.categories, c]
    onChange({ ...filters, categories: next })
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

  useEffect(() => {
    document.body.style.overflow = isPanelOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isPanelOpen])

  return (
    <>
      <div className="bg-white border-b border-sam-gray sticky top-[56px] md:top-[64px] z-30">
        <div className="px-4 md:px-[50px] py-4" ref={containerRef}>

          {/* ── Mobile ── */}
          <div className="flex items-center gap-2 md:hidden">
            <div className="relative flex-1">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <input
                ref={searchRef}
                type="text"
                placeholder="Rechercher..."
                value={filters.search}
                onChange={(e) => onChange({ ...filters, search: e.target.value })}
                className="w-full pl-8 pr-8 py-2 text-sm border border-sam-gray focus:outline-none focus:border-sam-black bg-white"
              />
              {filters.search && (
                <button
                  onClick={() => { onChange({ ...filters, search: '' }); searchRef.current?.focus() }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  <X size={14} />
                </button>
              )}
            </div>
            <button
              onClick={() => setIsPanelOpen(true)}
              className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-medium border transition-colors duration-150 shrink-0 ${
                activeCount > 0
                  ? 'bg-sam-black text-white border-sam-black'
                  : 'bg-white text-sam-black border-sam-gray'
              }`}
            >
              <SlidersHorizontal size={14} />
              Filtres
              {activeCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-sam-yellow text-sam-black text-[10px] font-bold flex items-center justify-center">
                  {activeCount}
                </span>
              )}
            </button>
          </div>

          {/* ── Desktop ── */}
          <div className="hidden md:flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 shrink-0">
              <SlidersHorizontal size={14} />
              <span>Filtrer</span>
            </div>
            <div className="relative flex-1 min-w-[180px] max-w-xs">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <input
                ref={searchRef}
                type="text"
                placeholder="Rechercher un équipement..."
                value={filters.search}
                onChange={(e) => onChange({ ...filters, search: e.target.value })}
                className="w-full pl-8 pr-8 py-2 text-sm border border-sam-gray focus:outline-none focus:border-sam-black transition-colors duration-150 bg-white"
              />
              {filters.search && (
                <button
                  onClick={() => { onChange({ ...filters, search: '' }); searchRef.current?.focus() }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-sam-black transition-colors duration-150"
                >
                  <X size={14} />
                </button>
              )}
            </div>
            <Dropdown
              label={filters.subventions.length > 0 ? `Subvention (${filters.subventions.length})` : 'Type de subvention'}
              active={filters.subventions.length > 0}
              isOpen={openDropdown === 'subvention'}
              onToggle={() => toggle('subvention')}
            >
              <div className="overflow-y-auto" style={{ maxHeight: '280px' }}>
                {filters.subventions.length > 0 && (
                  <button onClick={() => onChange({ ...filters, subventions: [] })}
                    className="w-full text-left flex items-center justify-between px-5 py-3 text-sm text-gray-400 hover:text-black border-b border-sam-gray">
                    Effacer <X size={12} strokeWidth={2} />
                  </button>
                )}
                {SUBVENTIONS.map((s) => {
                  const active = filters.subventions.includes(s)
                  return (
                    <button key={s} onClick={() => toggleSubvention(s)}
                      className={`w-full text-left flex items-center justify-between px-5 py-3 text-sm transition-colors duration-100 ${active ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-black'}`}>
                      {SUBVENTION_LABELS[s]}
                      {active && <X size={12} strokeWidth={2} />}
                    </button>
                  )
                })}
              </div>
            </Dropdown>
            <Dropdown
              label={filters.categories.length > 0 ? `Catégorie (${filters.categories.length})` : 'Catégorie'}
              active={filters.categories.length > 0}
              isOpen={openDropdown === 'categorie'}
              onToggle={() => toggle('categorie')}
            >
              <div className="overflow-y-auto" style={{ maxHeight: '280px' }}>
                {filters.categories.length > 0 && (
                  <button onClick={() => onChange({ ...filters, categories: [] })}
                    className="w-full text-left flex items-center justify-between px-5 py-3 text-sm text-gray-400 hover:text-black border-b border-sam-gray">
                    Effacer <X size={12} strokeWidth={2} />
                  </button>
                )}
                {CATEGORIES.map((c) => {
                  const active = filters.categories.includes(c)
                  return (
                    <button key={c} onClick={() => toggleCategorie(c)}
                      className={`w-full text-left flex items-center justify-between px-5 py-3 text-sm transition-colors duration-100 ${active ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-black'}`}>
                      {CATEGORIE_LABELS[c]}
                      {active && <X size={12} strokeWidth={2} />}
                    </button>
                  )
                })}
              </div>
            </Dropdown>
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
                      <button key={s} onClick={() => toggleSecteur(s)}
                        className={`w-full text-left flex items-center justify-between px-5 py-3 text-sm transition-colors duration-100 ${active ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-black'}`}>
                        {SECTEUR_LABELS[s]}
                        {active && <X size={12} strokeWidth={2} />}
                      </button>
                    )
                  })}
                </div>
                {filters.secteurs.length > 0 && (
                  <button onClick={() => onChange({ ...filters, secteurs: [] })}
                    className="w-full text-left px-5 py-3 text-sm text-gray-400 hover:text-black border-t border-sam-gray">
                    Effacer les secteurs
                  </button>
                )}
              </>
            </Dropdown>
            {hasActive && (
              <button onClick={reset}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-sam-black transition-colors duration-150 px-2 py-2">
                <X size={12} /> Réinitialiser
              </button>
            )}
            <span className="text-xs text-gray-400 ml-auto shrink-0">
              {filtered === total
                ? `${total} équipement${total > 1 ? 's' : ''}`
                : `${filtered} / ${total} équipement${total > 1 ? 's' : ''}`}
            </span>
          </div>

        </div>
      </div>

      {/* ── Panel mobile ── */}
      {isPanelOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-end">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsPanelOpen(false)} />

          {/* Panel */}
          <div className="relative bg-white max-h-[85vh] flex flex-col">

            {/* En-tête panel */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-sam-gray shrink-0">
              <span className="font-bold text-sam-black text-base">Filtres</span>
              <button onClick={() => setIsPanelOpen(false)} className="text-gray-400 hover:text-sam-black">
                <X size={20} />
              </button>
            </div>

            {/* Contenu scrollable */}
            <div className="overflow-y-auto flex-1">

              {/* Subvention */}
              <div className="px-4 py-5 border-b border-sam-gray">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Type de subvention
                  </h3>
                  {filters.subventions.length > 0 && (
                    <button
                      onClick={() => onChange({ ...filters, subventions: [] })}
                      className="text-xs text-gray-400 hover:text-sam-black flex items-center gap-1"
                    >
                      <X size={11} /> Effacer
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {SUBVENTIONS.map((s) => {
                    const active = filters.subventions.includes(s)
                    return (
                      <button
                        key={s}
                        onClick={() => toggleSubvention(s)}
                        className="w-full text-left flex items-center gap-2.5 px-3 py-3 bg-sam-gray-bg transition-colors duration-100"
                      >
                        <span className={`shrink-0 w-4 h-4 border flex items-center justify-center transition-colors duration-100 ${
                          active ? 'bg-sam-black border-sam-black' : 'bg-white border-gray-300'
                        }`}>
                          {active && <Check size={10} strokeWidth={3} className="text-white" />}
                        </span>
                        <span className={`text-xs font-medium leading-tight ${active ? 'text-sam-black' : 'text-gray-600'}`}>
                          {SUBVENTION_LABELS[s]}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Catégorie */}
              <div className="px-4 py-5 border-b border-sam-gray">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Catégorie
                  </h3>
                  {filters.categories.length > 0 && (
                    <button
                      onClick={() => onChange({ ...filters, categories: [] })}
                      className="text-xs text-gray-400 hover:text-sam-black flex items-center gap-1"
                    >
                      <X size={11} /> Effacer
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {CATEGORIES.map((c) => {
                    const active = filters.categories.includes(c)
                    return (
                      <button
                        key={c}
                        onClick={() => toggleCategorie(c)}
                        className={`w-full text-left px-3 py-3 text-xs font-medium leading-tight border transition-colors duration-100 ${
                          active ? 'border-sam-black bg-white text-sam-black' : 'border-[#E0E0E0] bg-white text-gray-500'
                        }`}
                      >
                        {CATEGORIE_LABELS[c]}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Secteurs */}
              <div className="px-4 py-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Secteur d'activité
                  </h3>
                  {filters.secteurs.length > 0 && (
                    <button
                      onClick={() => onChange({ ...filters, secteurs: [] })}
                      className="text-xs text-gray-400 hover:text-sam-black flex items-center gap-1"
                    >
                      <X size={11} /> Effacer
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {SECTEURS.map((s) => {
                    const active = filters.secteurs.includes(s)
                    return (
                      <button
                        key={s}
                        onClick={() => toggleSecteur(s)}
                        className={`w-full text-left px-3 py-3 text-xs font-medium leading-tight transition-colors duration-100 ${
                          active ? 'bg-sam-black text-white' : 'bg-sam-gray-bg text-sam-black'
                        }`}
                      >
                        {SECTEUR_LABELS[s]}
                      </button>
                    )
                  })}
                </div>
              </div>

            </div>

            {/* Footer — Valider */}
            <div className="shrink-0 border-t border-sam-gray px-4 py-4 flex gap-3 bg-white">
              {hasActive && (
                <button
                  onClick={() => { reset(); }}
                  className="px-4 py-3 text-sm font-medium border border-sam-gray text-sam-black hover:bg-sam-gray-bg transition-colors duration-150"
                >
                  Réinitialiser
                </button>
              )}
              <button
                onClick={() => setIsPanelOpen(false)}
                className="flex-1 py-3 text-sm font-bold bg-sam-black text-white hover:bg-sam-black/80 transition-colors duration-150"
              >
                Voir {filtered} résultat{filtered > 1 ? 's' : ''}
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  )
}
