import { useState, useEffect, useRef, useCallback } from 'react'
import { Building2, Loader2 } from 'lucide-react'

interface Dirigeant {
  nom?: string
  prenoms?: string
  qualite?: string
}

interface CompanyResult {
  nom_complet: string
  siege: {
    siret: string
    libelle_commune?: string
    code_postal?: string
  }
  siren: string
  dirigeants?: Dirigeant[]
}

interface ApiResponse {
  results: CompanyResult[]
}

interface CompanySearchProps {
  value: string
  onChange: (value: string) => void
  onSelect: (company: { name: string; siret: string; nom: string; prenom: string }) => void
}

function useDebounce(value: string, delay: number) {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(t)
  }, [value, delay])
  return debounced
}

export default function CompanySearch({ value, onChange, onSelect }: CompanySearchProps) {
  const [results, setResults] = useState<CompanyResult[]>([])
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const debouncedQuery = useDebounce(value, 350)

  const fetchCompanies = useCallback(async (query: string) => {
    if (query.length < 2) {
      setResults([])
      setOpen(false)
      return
    }
    setLoading(true)
    try {
      const res = await fetch(
        `https://recherche-entreprises.api.gouv.fr/search?q=${encodeURIComponent(query)}&nombre=8`
      )
      const data: ApiResponse = await res.json()
      setResults(data.results ?? [])
      setOpen((data.results ?? []).length > 0)
    } catch {
      setResults([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (selected) return
    fetchCompanies(debouncedQuery)
  }, [debouncedQuery, selected, fetchCompanies])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleSelect(company: CompanyResult) {
    const name = company.nom_complet
    const siret = company.siege?.siret ?? ''
    const dirigeant = company.dirigeants?.[0]
    const nom = dirigeant?.nom ?? ''
    const prenom = dirigeant?.prenoms ?? ''
    setSelected(true)
    setOpen(false)
    setResults([])
    onChange(name)
    onSelect({ name, siret, nom, prenom })
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSelected(false)
    onChange(e.target.value)
  }

  return (
    <div ref={containerRef} className="relative">
      <label className="block text-sm font-medium text-sam-black mb-1.5">
        Société <span className="text-red-400">*</span>
      </label>
      <div className="relative">
        <input
          type="text"
          name="societe"
          value={value}
          onChange={handleChange}
          onFocus={() => !selected && results.length > 0 && setOpen(true)}
          required
          autoComplete="off"
          placeholder="Tapez le nom de votre société…"
          className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-sam-black placeholder-gray-400 focus:outline-none focus:border-sam-black transition-colors duration-200 pr-10"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          {loading ? <Loader2 size={16} className="animate-spin" /> : <Building2 size={16} />}
        </div>
      </div>

      {open && results.length > 0 && (
        <ul className="absolute z-50 w-full bg-white border border-gray-200 shadow-lg mt-1 max-h-64 overflow-y-auto">
          {results.map((company) => (
            <li key={company.siege?.siret ?? company.siren}>
              <button
                type="button"
                onClick={() => handleSelect(company)}
                className="w-full text-left px-4 py-3 hover:bg-sam-gray-bg transition-colors duration-150 flex flex-col gap-0.5"
              >
                <span className="text-sm font-medium text-sam-black truncate">
                  {company.nom_complet}
                </span>
                <span className="text-xs text-gray-400">
                  SIRET : {company.siege?.siret ?? '—'}
                  {company.siege?.code_postal && ` · ${company.siege.code_postal} ${company.siege.libelle_commune ?? ''}`}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
