import { useMemo, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Package } from 'lucide-react'
import { CATALOGUE, filterCatalogue } from '../data/materiel'
import AnimatedSection from '../components/ui/AnimatedSection'
import MaterielFilters from '../components/materiel/MaterielFilters'
import type { FilterState } from '../components/materiel/MaterielFilters'
import MaterielCard from '../components/materiel/MaterielCard'
import Button from '../components/ui/Button'

const EMPTY_FILTERS: FilterState = {
  search: '',
  subvention: '',
  categorie: '',
  secteurs: [],
}

const INITIAL_VISIBLE = 8

export default function MaterielEligible() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  // Lire les filtres depuis l'URL
  const filters: FilterState = {
    search: searchParams.get('search') ?? '',
    subvention: (searchParams.get('subvention') ?? '') as FilterState['subvention'],
    categorie: (searchParams.get('categorie') ?? '') as FilterState['categorie'],
    secteurs: searchParams.getAll('secteurs') as FilterState['secteurs'],
  }

  const showAll = searchParams.get('all') === '1'

  const filtered = useMemo(
    () =>
      filterCatalogue(CATALOGUE, {
        search: filters.search,
        subvention: filters.subvention || undefined,
        categorie: filters.categorie || undefined,
        secteurs: filters.secteurs,
      }),
    [filters.search, filters.subvention, filters.categorie, filters.secteurs]
  )

  const handleFiltersChange = useCallback((next: FilterState) => {
    const params = new URLSearchParams()
    if (next.search) params.set('search', next.search)
    if (next.subvention) params.set('subvention', next.subvention)
    if (next.categorie) params.set('categorie', next.categorie)
    next.secteurs.forEach((s) => params.append('secteurs', s))
    if (showAll) params.set('all', '1')
    setSearchParams(params, { replace: true })
  }, [showAll, setSearchParams])

  const handleShowAll = useCallback(() => {
    const params = new URLSearchParams(searchParams)
    params.set('all', '1')
    setSearchParams(params, { replace: true })
  }, [searchParams, setSearchParams])

  const handleReset = useCallback(() => {
    setSearchParams({}, { replace: true })
  }, [setSearchParams])

  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>Matériel éligible aux subventions CARSAT — SAM</title>
        <meta name="description" content="Découvrez les 44 équipements professionnels éligibles aux subventions CARSAT (FIPU, TOP BTP, Poussières de farine). Filtrez par secteur, catégorie ou type d'aide." />
        <meta property="og:title" content="Matériel éligible aux subventions CARSAT — SAM" />
        <meta property="og:description" content="44 équipements professionnels subventionnés jusqu'à 70% via la CARSAT. Manutention, BTP, restauration, logistique et plus." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sam-subventions.fr/materiel" />
        <link rel="canonical" href="https://www.sam-subventions.fr/materiel" />
      </Helmet>

      {/* ── Hero / En-tête ── */}
      <section className="bg-sam-gray-bg border-b border-sam-gray pt-28 pb-12 px-4 md:px-[50px]">
        <AnimatedSection>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-4">
            Subventions CARSAT / Assurance Maladie
          </span>
          <h1
            className="font-black text-sam-black leading-tight mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)', letterSpacing: '-0.01em' }}
          >
            Matériel éligible aux subventions
          </h1>
          <p className="text-[17px] text-gray-500 leading-relaxed max-w-2xl mb-8">
            Retrouvez l'ensemble des équipements pouvant bénéficier d'une subvention prévention
            des risques professionnels. Filtrez par type d'aide, secteur d'activité ou catégorie.
          </p>
        </AnimatedSection>
      </section>

      {/* ── Filtres sticky ── */}
      <MaterielFilters
        filters={filters}
        onChange={handleFiltersChange}
        total={CATALOGUE.length}
        filtered={filtered.length}
      />

      {/* ── Grille ── */}
      <section className="px-4 md:px-[50px] py-10">
        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <div className="w-14 h-14 bg-sam-gray-light flex items-center justify-center mx-auto mb-6">
              <Package size={24} strokeWidth={1.5} className="text-gray-400" />
            </div>
            <p className="text-[17px] text-gray-500 mb-6">
              Aucun équipement ne correspond à vos critères.
              <br />
              Essayez de modifier vos filtres.
            </p>
            <Button variant="secondary" onClick={handleReset}>
              Réinitialiser les filtres
            </Button>
          </div>
        ) : (() => {
          const hasFilters =
            filters.search !== '' ||
            filters.subvention !== '' ||
            filters.categorie !== '' ||
            filters.secteurs.length > 0
          const visible = hasFilters || showAll ? filtered : filtered.slice(0, INITIAL_VISIBLE)
          const showButton = !hasFilters && !showAll && filtered.length > INITIAL_VISIBLE

          return (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
                {visible.map((m, i) => (
                  <MaterielCard
                    key={m.id}
                    materiel={m}
                    delay={Math.min(i, 8) * 50}
                  />
                ))}
              </div>
              {showButton && (
                <div className="mt-10 text-center">
                  <Button variant="secondary" onClick={handleShowAll}>
                    Voir tous les équipements ({filtered.length})
                  </Button>
                </div>
              )}
            </>
          )
        })()}
      </section>

      {/* ── CTA bas de page ── */}
      <section className="bg-sam-yellow px-4 md:px-[50px] py-16">
        <AnimatedSection className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-black/50 block mb-3">
            Vous ne savez pas par où commencer ?
          </span>
          <h2
            className="font-bold text-sam-black mb-4"
            style={{ fontSize: 'clamp(22px, 3vw, 36px)', letterSpacing: '-0.01em' }}
          >
            Faites vérifier votre éligibilité gratuitement
          </h2>
          <p className="text-[15px] text-black/60 leading-relaxed mb-8 max-w-xl">
            Nos experts analysent votre situation et identifient les subventions auxquelles vous
            pouvez prétendre, sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate('/pre-demande')}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold tracking-wide bg-black text-white border border-black hover:bg-black/80 transition-all duration-200"
            >
              Vérifier mon éligibilité
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold tracking-wide bg-transparent text-black border border-black hover:bg-black/10 transition-all duration-200"
            >
              Nous contacter
            </button>
          </div>
        </AnimatedSection>
      </section>

    </main>
  )
}
