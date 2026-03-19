import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Plus, Minus } from 'lucide-react'
import { CATALOGUE } from '../data/materiel'
import { SECTEUR_LABELS } from '../types/materiel'
import { SubventionBadge } from '../components/materiel/MaterielBadge'
import MaterielChecklist from '../components/materiel/MaterielChecklist'
import DistributeurCard from '../components/materiel/DistributeurCard'
import MaterielSilhouette from '../components/materiel/MaterielSilhouette'

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-[#E8E8E8]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-sam-black">
          {title}
        </span>
        {open ? <Minus size={14} /> : <Plus size={14} />}
      </button>
      {open && (
        <div className="pb-6">
          {children}
        </div>
      )}
    </div>
  )
}

export default function MaterielProduct() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const materiel = CATALOGUE.find((m) => m.id === id)
  const related = CATALOGUE.filter((m) => m.id !== id).slice(0, 3)

  if (!materiel) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-4">
          <p className="text-gray-500 mb-6">Produit introuvable.</p>
          <button
            onClick={() => navigate('/materiel')}
            className="inline-flex items-center gap-2 text-sm font-medium underline"
          >
            Retour au catalogue
          </button>
        </div>
      </main>
    )
  }

  const pageUrl = `https://sam-contact.fr/materiel/${materiel.id}`

  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>{materiel.nom} — Subvention {materiel.subvention} — SAM</title>
        <meta name="description" content={`${materiel.description} Éligible à la subvention ${materiel.subvention}. Vérifiez votre éligibilité gratuitement avec SAM.`} />
        <meta property="og:title" content={`${materiel.nom} — SAM`} />
        <meta property="og:description" content={materiel.descriptionComplete.slice(0, 160)} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <link rel="canonical" href={pageUrl} />
      </Helmet>

      {/* ── Back ── */}
      <div className="px-4 md:px-[50px] pt-24 pb-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-sam-black transition-colors duration-150"
        >
          <ArrowLeft size={14} />
          Retour au catalogue
        </button>
      </div>

      {/* ── Hero : image gauche / infos droite ── */}
      <section className="px-4 md:px-[50px] pb-0">
        <div className="flex flex-col md:flex-row gap-0 md:gap-14 items-start">

          {/* Image grande */}
          <div className="w-full md:w-[55%] bg-sam-gray-light aspect-square md:aspect-auto md:min-h-[520px] relative shrink-0 overflow-hidden">
            <div className="absolute inset-0">
              <MaterielSilhouette id={materiel.id} alt={materiel.nom} />
            </div>
          </div>

          {/* Infos produit */}
          <div className="flex-1 py-6 md:py-2 md:pt-4">

            {/* Nom + badge */}
            <div className="mb-1">
              <SubventionBadge subvention={materiel.subvention} size="sm" />
            </div>
            <h1
              className="font-bold text-sam-black leading-tight mt-3 mb-4"
              style={{ fontSize: 'clamp(22px, 3vw, 34px)', letterSpacing: '-0.02em' }}
            >
              {materiel.nom}
            </h1>

            {/* Description */}
            <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
              {materiel.descriptionComplete}
            </p>

            {/* Secteurs */}
            <div className="flex flex-wrap gap-1.5 mb-8">
              {materiel.secteurs.map((s) => (
                <span
                  key={s}
                  className="text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 border border-[#E0E0E0] text-gray-500"
                >
                  {SECTEUR_LABELS[s]}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={() => navigate(`/pre-demande?materiel=${materiel.id}`)}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-bold uppercase tracking-wider bg-sam-black text-white hover:bg-sam-black/80 transition-colors duration-200 group"
              >
                Faire une demande
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="flex-1 flex items-center justify-center py-3.5 text-sm font-bold uppercase tracking-wider border border-sam-black bg-transparent text-sam-black hover:bg-sam-gray-light transition-colors duration-200"
              >
                Nous contacter
              </button>
            </div>

            {/* Accordéons */}
            <Accordion title="Critères d'éligibilité">
              <MaterielChecklist eligibilite={materiel.eligibilite} />
            </Accordion>

            <Accordion title="Nos partenaires distributeurs">
              {materiel.distributeurs.length > 0 ? (
                <div className="grid grid-cols-2 gap-3">
                  {materiel.distributeurs.map((d, i) => (
                    <DistributeurCard key={i} distributeur={d} />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-400 italic">
                  Partenaires à venir — Contactez-nous pour une recommandation
                </p>
              )}
            </Accordion>

            <Accordion title="Comment bénéficier de la subvention ?">
              <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                <p>1. Vérifiez votre éligibilité via notre formulaire de pré-demande (gratuit, sans engagement).</p>
                <p>2. Nos experts constituent votre dossier et le soumettent à l'organisme compétent.</p>
                <p>3. Après validation, vous recevez la subvention directement sur votre compte.</p>
              </div>
            </Accordion>

          </div>
        </div>
      </section>

      {/* ── Voir aussi ── */}
      {related.length > 0 && (
        <section className="px-4 md:px-[50px] pt-16 pb-20">
          <h2
            className="font-bold text-sam-black mb-8"
            style={{ fontSize: 'clamp(18px, 2vw, 24px)', letterSpacing: '-0.01em' }}
          >
            Voir aussi
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((m) => (
              <div
                key={m.id}
                onClick={() => navigate(`/materiel/${m.id}`)}
                className="cursor-pointer group"
              >
                <div className="w-full aspect-[4/3] bg-sam-gray-light overflow-hidden mb-3 flex items-center justify-center group-hover:bg-[#EBEBEB] transition-colors duration-200">
                  <MaterielSilhouette id={m.id} variant="card" />
                </div>
                <p className="text-sm font-semibold text-sam-black group-hover:opacity-70 transition-opacity duration-200">
                  {m.nom}
                </p>
                <p className="text-xs text-gray-400 mt-0.5 uppercase tracking-wide">
                  {SECTEUR_LABELS[m.secteurs[0]]}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

    </main>
  )
}
