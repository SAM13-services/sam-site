import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { ChevronDown, ArrowRight } from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'
import Button from '../components/ui/Button'
import Subsidies from '../components/sections/Subsidies'
import HowItWorks from '../components/sections/HowItWorks'
import CTABanner from '../components/sections/CTABanner'

// ── FAQ Data ───────────────────────────────────────────────────────────────

interface FaqItem { q: string; a: string }

const FAQ: FaqItem[] = [
  {
    q: 'Qui peut bénéficier des subventions CARSAT ?',
    a: "Toute entreprise à jour de ses cotisations URSSAF peut faire une demande. Le dispositif concerne tous les secteurs d'activité, selon le programme choisi (FIPU pour tous, TOP BTP pour le bâtiment, Poussières de farine pour la boulangerie-pâtisserie). Il n'y a pas de condition de chiffre d'affaires.",
  },
  {
    q: 'Faut-il acheter le matériel avant de faire la demande ?',
    a: "Non — et c'est fondamental. Pour la plupart des programmes, la demande doit être déposée AVANT l'achat (sur devis). Acheter avant d'avoir reçu l'accord CARSAT vous rend inéligible à la subvention. SAM s'assure que votre dossier est validé avant tout engagement d'achat.",
  },
  {
    q: "Quel est le montant maximum de subvention que je peux obtenir ?",
    a: "Le taux de prise en charge varie selon le programme : jusqu'à 70 % pour le FIPU et le dispositif Poussières de farine, 50 % pour Prévention Chutes et TOP BTP. Certains de nos clients atteignent 85 % en combinant l'aide CARSAT avec d'autres dispositifs régionaux ou sectoriels.",
  },
  {
    q: 'Peut-on cumuler plusieurs subventions CARSAT sur la même facture ?',
    a: "Non, il n'est pas possible de cumuler plusieurs dispositifs CARSAT sur un même équipement. En revanche, une entreprise peut déposer plusieurs dossiers pour des équipements différents relevant de programmes différents, ou faire une nouvelle demande lors d'un prochain exercice.",
  },
  {
    q: "Combien de temps prend l'instruction d'un dossier CARSAT ?",
    a: "Entre le dépôt du dossier complet et la réponse de la CARSAT, comptez en moyenne 4 à 8 semaines. Le versement de la subvention intervient après réception de la facture acquittée, soit quelques semaines supplémentaires. SAM assure le suivi de chaque étape et relance si nécessaire.",
  },
  {
    q: 'SAM est-il rémunéré même si la subvention est refusée ?',
    a: "Non. SAM intervient uniquement en cas de succès : notre rémunération est calculée sur le montant de la subvention obtenue. Si votre dossier est refusé ou si vous n'êtes pas éligible, la pré-demande initiale est totalement gratuite et sans aucun engagement.",
  },
  {
    q: 'Quels documents sont nécessaires pour constituer un dossier ?',
    a: "Les pièces habituellement requises sont : un extrait Kbis, votre dernier bilan ou compte de résultat, une attestation URSSAF à jour, le devis du matériel, et selon le programme une notice technique du produit. SAM vous indique précisément les documents à fournir après analyse de votre situation.",
  },
  {
    q: 'SAM intervient-il dans toute la France ?',
    a: "Oui. SAM accompagne des entreprises dans l'ensemble des régions françaises. La CARSAT est organisée en caisses régionales, et les règles varient légèrement d'une région à l'autre. Notre équipe maîtrise ces spécificités locales et adapte chaque dossier en conséquence.",
  },
]


function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="flex flex-col divide-y divide-gray-200">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between gap-4 py-7 text-left"
          >
            <span className="font-normal text-sam-black text-base leading-snug pr-2">{item.q}</span>
            <ChevronDown
              size={18}
              className={`flex-shrink-0 mt-0.5 text-gray-400 transition-transform duration-500 ${open === i ? 'rotate-180 text-sam-black' : ''}`}
            />
          </button>
          <div
            className="grid transition-[grid-template-rows] duration-500 ease-in-out"
            style={{ gridTemplateRows: open === i ? '1fr' : '0fr' }}
          >
            <div className="overflow-hidden">
              <p className="text-gray-500 text-sm leading-relaxed pb-6">{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function GuideCarsat() {
  const navigate = useNavigate()

  return (
    <main className="bg-white">
      <Helmet>
        <title>Guide complet des subventions CARSAT — SAM</title>
        <meta
          name="description"
          content="Tout comprendre sur les subventions CARSAT : FIPU, TOP BTP, Prévention Chutes, Poussières de farine. Jusqu'à 70% de prise en charge sur votre matériel professionnel. SAM gère tout."
        />
        <meta property="og:title" content="Guide subventions CARSAT — SAM" />
        <meta
          property="og:description"
          content="FIPU, TOP BTP, Prévention Chutes, Poussières de farine : découvrez les dispositifs CARSAT gérés par SAM et comment obtenir jusqu'à 70% de subvention sur votre matériel."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://sam-contact.fr/subventions-carsat" />
        <link rel="canonical" href="https://sam-contact.fr/subventions-carsat" />
      </Helmet>

      {/* ── Hero — fond jaune ── */}
      <section className="bg-sam-yellow min-h-screen flex flex-col justify-end px-4 md:px-[50px] pt-32 pb-14">
        <AnimatedSection className="flex items-end justify-between gap-8">
          <div className="flex-1">
            <span className="text-xs font-bold uppercase tracking-widest text-sam-black/50 block mb-6">
              Guide CARSAT
            </span>
            <h1
              className="text-sam-black font-semibold leading-[1.04] mb-6 max-w-4xl"
              style={{ fontSize: 'clamp(36px, 5vw, 72px)', letterSpacing: '-0.015em' }}
            >
              Tout savoir sur les subventions CARSAT
            </h1>
            <p className="text-[17px] text-gray-700 leading-relaxed max-w-xl mb-10">
              La CARSAT propose de nombreux dispositifs d'aide à l'achat de matériel professionnel.
              SAM vous accompagne sur les programmes les plus accessibles et gère l'intégralité de votre dossier.
            </p>
            <button
              onClick={() => navigate('/pre-demande')}
              className="inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200 ease-out px-8 py-4 text-base bg-transparent text-sam-black border border-sam-black hover:bg-sam-black hover:text-white active:scale-[0.98]"
            >
              Vérifier mon éligibilité gratuitement
            </button>
          </div>
          <div className="hidden md:flex flex-shrink-0 pb-1">
            <ChevronDown size={48} className="text-sam-black animate-bounce" strokeWidth={1.5} strokeLinecap="square" strokeLinejoin="miter" />
          </div>
        </AnimatedSection>
      </section>

      {/* ── Qu'est-ce que la CARSAT ── */}
      <section className="py-14 md:py-20 px-4 md:px-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">

          <AnimatedSection className="h-full flex flex-col justify-between gap-10 lg:min-h-[320px]">
            <h2
              className="font-semibold leading-[1.04]"
              style={{ fontSize: 'clamp(36px, 4vw, 58px)', letterSpacing: '-0.015em' }}
            >
              Qu'est-ce que la CARSAT&nbsp;?{' '}
              <span className="text-gray-300 font-normal" style={{ fontSize: '0.45em', letterSpacing: '0' }}>[01]</span>
            </h2>
            <div>
              <Button variant="primary" onClick={() => navigate('/pre-demande')}>
                Vérifier mon éligibilité
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100} className="h-full">
            <div className="h-full flex flex-col justify-between text-gray-600 leading-relaxed border-l border-gray-200 pl-8" style={{ fontSize: '15px' }}>
              <p>
                La CARSAT (Caisse d'Assurance Retraite et de la Santé Au Travail) est l'organisme de la Sécurité Sociale chargé de la prévention des risques professionnels. Présente dans chaque région, elle dispose de budgets dédiés pour aider les entreprises à financer des équipements plus sûrs.
              </p>
              <p>
                Concrètement, la CARSAT rembourse une partie du coût de votre matériel à condition que l'équipement réduise un risque professionnel identifié (manutention lourde, chute, troubles musculo-squelettiques, exposition à des poussières dangereuses…).
              </p>
              <p>
                Ces aides sont sous-utilisées : la majorité des entreprises éligibles n'en bénéficient pas, faute de temps pour constituer les dossiers. C'est précisément pour cela que SAM existe.
              </p>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ── Dispositifs — identique accueil ── */}
      <Subsidies />

      {/* ── Processus ── */}
      <section className="py-14 md:py-20 px-4 md:px-[50px]">

        {/* ── Deux processus côte à côte ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-4">

          {/* Standard */}
          <AnimatedSection delay={60}>
            <div className="bg-sam-gray-bg p-8 md:p-10 h-full flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">
                Processus standard
              </span>
              <h3 className="font-bold mb-6" style={{ fontSize: '20px', letterSpacing: '-0.01em' }}>
                FIPU · TOP BTP
              </h3>
              <div className="flex flex-col gap-6 flex-1">
                {[
                  { label: 'Vérification d\'éligibilité', sub: 'SAM analyse votre situation gratuitement.' },
                  { label: 'Achat & livraison du matériel', sub: 'Le matériel est réceptionné dans votre entreprise.' },
                  { label: 'Facture acquittée', sub: 'Vous réglez votre fournisseur.' },
                  { label: 'Demande CARSAT', sub: 'SAM dépose le dossier sur facture acquittée.' },
                  { label: 'Versement de la subvention', sub: 'La CARSAT vous rembourse directement.' },
                ].map((step, i) => (
                  <div key={step.label} className="flex items-start gap-4">
                    <span
                      className="w-8 h-8 bg-sam-yellow text-sam-black flex items-center justify-center flex-shrink-0 font-bold text-sm"
                    >
                      {i + 1}
                    </span>
                    <div className="pt-0.5">
                      <span className="font-semibold text-sam-black block" style={{ fontSize: '15px' }}>{step.label}</span>
                      <span className="text-gray-400 text-sm">{step.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Avec devis */}
          <AnimatedSection delay={120}>
            <div className="bg-sam-yellow p-8 md:p-10 h-full flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-sam-black/50 block mb-1">
                Avec réservation de budget
              </span>
              <h3 className="font-bold text-sam-black mb-2" style={{ fontSize: '20px', letterSpacing: '-0.01em' }}>
                Poussières de farine · Prévention chute
              </h3>
              <p className="text-sam-black/60 text-sm leading-relaxed mb-6">
                Pour ces dispositifs, SAM peut déposer une demande sur devis <span className="text-sam-black font-semibold">avant l'achat</span>. La CARSAT réserve votre enveloppe — votre subvention est sécurisée avant tout investissement.
              </p>
              <div className="flex flex-col gap-6 flex-1">
                {[
                  { label: 'Vérification d\'éligibilité', sub: 'SAM analyse votre situation gratuitement.', highlight: false },
                  { label: 'Demande CARSAT sur devis', sub: 'La CARSAT réserve votre budget avant l\'achat.', highlight: true },
                  { label: 'Achat & livraison du matériel', sub: 'Vous investissez en toute sécurité.', highlight: false },
                  { label: 'Facture acquittée', sub: 'Vous réglez votre fournisseur.', highlight: false },
                  { label: 'Versement de la subvention', sub: 'La CARSAT vous rembourse directement.', highlight: false },
                ].map((step, i) => (
                  <div key={step.label} className="flex items-start gap-4">
                    <span
                      className={`w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm ${
                        step.highlight ? 'bg-sam-black text-sam-yellow' : 'bg-sam-black/10 text-sam-black'
                      }`}
                    >
                      {i + 1}
                    </span>
                    <div className="pt-0.5">
                      <span className={`font-semibold block ${step.highlight ? 'text-sam-black' : 'text-sam-black'}`} style={{ fontSize: '15px' }}>
                        {step.label}
                      </span>
                      <span className="text-sam-black/50 text-sm">{step.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ── SAM gère tout — identique accueil ── */}
      <HowItWorks />

      {/* ── FAQ ── */}
      <section className="py-14 md:py-20 px-4 md:px-[50px]">
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <h2
            className="font-bold leading-tight"
            style={{ fontSize: 'clamp(26px, 3.5vw, 46px)', letterSpacing: '-0.01em' }}
          >
            Questions fréquentes
          </h2>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 text-sm font-bold text-sam-black border-b-2 border-sam-yellow hover:border-sam-black transition-colors duration-200 pb-0.5 group whitespace-nowrap"
          >
            Poser ma question
            <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
          <AnimatedSection>
            <FaqAccordion items={FAQ.slice(0, Math.ceil(FAQ.length / 2))} />
          </AnimatedSection>
          <AnimatedSection delay={60}>
            <FaqAccordion items={FAQ.slice(Math.ceil(FAQ.length / 2))} />
          </AnimatedSection>
        </div>
      </section>

      <CTABanner />
    </main>
  )
}
