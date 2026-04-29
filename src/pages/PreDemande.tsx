import { useState, FormEvent } from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { PRE_DEMANDE } from '../config/constants'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import RadioGroup from '../components/ui/RadioGroup'
import { FormInput } from '../components/ui/FormInput'
import AnimatedSection from '../components/ui/AnimatedSection'
import CompanySearch from '../components/ui/CompanySearch'

interface FormState {
  societe: string
  siret: string
  nom: string
  prenom: string
  email: string
  telephone: string
  tva: string
  cotisations: string
  duerp: string
  salaries: string
  effectif: string
  spst: string
  spstName: string
}

const initialState: FormState = {
  societe: '', siret: '', nom: '', prenom: '',
  email: '', telephone: '', tva: '', cotisations: '', duerp: '',
  salaries: '', effectif: '', spst: '', spstName: '',
}

const RADIO_OPTIONS_3 = ['Oui', 'Non', 'Je ne sais pas']

function Fade({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ animation: 'fadeUp 0.35s ease-out forwards', opacity: 0 }}>
      {children}
    </div>
  )
}

type ErrorState = Partial<Record<keyof FormState, string>>

function validateEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)
}
function validateSiret(v: string) {
  return /^\d{14}$/.test(v.replace(/\s/g, ''))
}
function validatePhone(v: string) {
  return /^(\+33|0)[1-9](\s?\d{2}){4}$/.test(v.replace(/[\s.\-]/g, ''))
}

export default function PreDemande() {
  const navigate = useNavigate()
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<ErrorState>({})
  const [submitted, setSubmitted] = useState(false)

  const updateField = (field: keyof FormState) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validateField = (field: keyof FormState, value: string) => {
    let msg: string | undefined
    if (field === 'email' && value && !validateEmail(value))
      msg = 'Email invalide — vérifiez le format (ex : jean@societe.fr)'
    if (field === 'siret' && value && !validateSiret(value))
      msg = 'SIRET invalide — 14 chiffres requis'
    if (field === 'telephone' && value && !validatePhone(value))
      msg = 'Téléphone invalide — format attendu : 06 XX XX XX XX'
    if (field === 'nom' && !value.trim())
      msg = 'Le nom est requis'
    setErrors((prev) => ({ ...prev, [field]: msg }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await fetch('/api/pre-demande', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Progressive visibility gates
  const show = {
    siret:       form.societe.trim() !== '',
    contact:     form.siret.trim() !== '',
    email:       form.nom.trim() !== '',
    telephone:   form.email.trim() !== '',
    eligibilite: form.telephone.trim() !== '',
    cotisations: form.tva !== '',
    duerp:       form.cotisations !== '',
    salaries:    form.duerp !== '',
    effectif:    form.salaries === 'Oui',
    spst:        form.salaries !== '',
    spstName:    form.spst === 'Oui',
    submit:      form.salaries !== '',
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-sam-gray-bg flex items-center justify-center px-4 md:px-[50px] py-12">
        <AnimatedSection className="max-w-lg w-full bg-white p-10 text-center">
          <div className="w-12 h-12 bg-sam-yellow flex items-center justify-center mx-auto mb-5">
            <CheckCircle size={24} strokeWidth={1.5} />
          </div>
          <h1 className="text-xl font-bold mb-3">{PRE_DEMANDE.successTitle}</h1>
          <p className="text-gray-500 leading-relaxed mb-7">{PRE_DEMANDE.successMessage}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="primary" onClick={() => navigate('/')} size="md">
              {"Retour à l'accueil"}
            </Button>
            <Button variant="secondary" onClick={() => { setForm(initialState); setSubmitted(false) }} size="md">
              Nouvelle demande
            </Button>
          </div>
        </AnimatedSection>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-sam-gray-bg pt-24 pb-12 px-4 md:px-[50px]">
      <Helmet>
        <title>Vérifier mon éligibilité — Pré-demande gratuite — SAM</title>
        <meta name="description" content="Vérifiez gratuitement votre éligibilité aux subventions CARSAT en 2 minutes. Sans engagement. SAM prend en charge toutes les démarches." />
        <meta property="og:title" content="Pré-demande gratuite — SAM" />
        <meta property="og:description" content="Vérifiez votre éligibilité aux subventions CARSAT en 2 minutes. Gratuit, sans engagement." />
        <meta property="og:url" content="https://sam-contact.fr/pre-demande" />
        <link rel="canonical" href="https://sam-contact.fr/pre-demande" />
      </Helmet>
      <div className="max-w-2xl mx-auto">

        {/* Back */}
        <AnimatedSection className="mb-5">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-sam-black transition-colors duration-200 group"
          >
            <ArrowLeft size={13} className="transition-transform duration-200 group-hover:-translate-x-1" />
            {"Retour à l'accueil"}
          </button>
        </AnimatedSection>

        {/* Header */}
        <AnimatedSection delay={50} className="mb-7">
          <Badge variant="yellow" className="mb-4">{PRE_DEMANDE.badge}</Badge>
          <h1
            className="font-bold leading-tight mb-2"
            style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', letterSpacing: '-0.01em' }}
          >
            {PRE_DEMANDE.title}
          </h1>
          <p className="text-[17px] text-gray-500 leading-relaxed">{PRE_DEMANDE.subtitle}</p>
        </AnimatedSection>

        {/* Formulaire */}
        <AnimatedSection delay={100}>
          <form onSubmit={handleSubmit} className="bg-white p-7 md:p-10 flex flex-col gap-6" noValidate>

            {/* Section Société */}
            <div className="flex flex-col gap-5">
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 bg-sam-gray-bg px-3 py-2">
                Informations société
              </h2>
              <CompanySearch
                value={form.societe}
                onChange={updateField('societe')}
                onSelect={({ name, siret, nom, prenom }) => {
                  setForm((prev) => ({
                    ...prev,
                    societe: name,
                    siret,
                    ...(nom ? { nom } : {}),
                    ...(prenom ? { prenom } : {}),
                  }))
                }}
              />
              {show.siret && (
                <Fade key="siret">
                  <FormInput
                    label="SIRET"
                    name="siret"
                    value={form.siret}
                    onChange={(e) => updateField('siret')(e.target.value)}
                    onBlur={(e) => validateField('siret', e.target.value)}
                    error={errors.siret}
                    required
                    placeholder="14 chiffres"
                    maxLength={14}
                  />
                </Fade>
              )}
            </div>

            {/* Section Contact */}
            {show.contact && (
              <Fade key="section-contact">
                <div className="flex flex-col gap-5">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 bg-sam-gray-bg px-3 py-2">
                    Contact
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormInput
                      label="Nom"
                      name="nom"
                      value={form.nom}
                      onChange={(e) => updateField('nom')(e.target.value)}
                      onBlur={(e) => validateField('nom', e.target.value)}
                      error={errors.nom}
                      required
                      placeholder="Dupont"
                    />
                    <FormInput
                      label="Prénom"
                      name="prenom"
                      value={form.prenom}
                      onChange={(e) => updateField('prenom')(e.target.value)}
                      placeholder="Jean"
                    />
                  </div>
                  {show.email && (
                    <Fade key="email">
                      <FormInput
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => updateField('email')(e.target.value)}
                        onBlur={(e) => validateField('email', e.target.value)}
                        error={errors.email}
                        required
                        placeholder="jean.dupont@societe.fr"
                      />
                    </Fade>
                  )}
                  {show.telephone && (
                    <Fade key="telephone">
                      <FormInput
                        label="Téléphone"
                        name="telephone"
                        type="tel"
                        value={form.telephone}
                        onChange={(e) => updateField('telephone')(e.target.value)}
                        onBlur={(e) => validateField('telephone', e.target.value)}
                        error={errors.telephone}
                        required
                        placeholder="+33 6 XX XX XX XX"
                      />
                    </Fade>
                  )}
                </div>
              </Fade>
            )}

            {/* Section Éligibilité */}
            {show.eligibilite && (
              <Fade key="section-eligibilite">
                <div className="flex flex-col gap-6">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 bg-sam-gray-bg px-3 py-2">
                    {"Vérification d'éligibilité"}
                  </h2>
                  <RadioGroup
                    name="tva"
                    label="Êtes-vous assujetti à la TVA ?"
                    value={form.tva}
                    onChange={updateField('tva')}
                    required
                    options={RADIO_OPTIONS_3}
                  />
                  {show.cotisations && (
                    <Fade key="cotisations">
                      <RadioGroup
                        name="cotisations"
                        label="Êtes-vous à jour de vos cotisations sociales ?"
                        value={form.cotisations}
                        onChange={updateField('cotisations')}
                        required
                        note="Si vous ne l'êtes pas, votre dossier ne sera pas accepté."
                      />
                    </Fade>
                  )}
                  {show.duerp && (
                    <Fade key="duerp">
                      <RadioGroup
                        name="duerp"
                        label="Possédez-vous votre DUERP ?"
                        value={form.duerp}
                        onChange={updateField('duerp')}
                        required
                        note="Si vous ne l'avez pas, nous pouvons nous charger de le créer avec vous."
                        options={RADIO_OPTIONS_3}
                      />
                    </Fade>
                  )}
                  {show.salaries && (
                    <Fade key="salaries">
                      <RadioGroup
                        name="salaries"
                        label="Votre société possède-t-elle des salariés ?"
                        value={form.salaries}
                        onChange={updateField('salaries')}
                        required
                      />
                    </Fade>
                  )}
                  {show.effectif && (
                    <Fade key="effectif">
                      <FormInput
                        label="Effectif de la société"
                        name="effectif"
                        type="number"
                        min="1"
                        value={form.effectif}
                        onChange={(e) => updateField('effectif')(e.target.value)}
                        placeholder="Nombre de salariés"
                      />
                    </Fade>
                  )}
                  {show.spst && (
                    <Fade key="spst">
                      <div className="flex flex-col gap-3">
                        <RadioGroup
                          name="spst"
                          label="Êtes-vous rattaché à un service de santé au travail (SPST) ?"
                          value={form.spst}
                          onChange={updateField('spst')}
                          options={RADIO_OPTIONS_3}
                        />
                        {show.spstName && (
                          <Fade key="spstName">
                            <FormInput
                              label="Nom du service de santé au travail"
                              name="spstName"
                              value={form.spstName}
                              onChange={(e) => updateField('spstName')(e.target.value)}
                              placeholder="Nom de votre SPST / médecine du travail"
                            />
                          </Fade>
                        )}
                      </div>
                    </Fade>
                  )}
                </div>
              </Fade>
            )}

            {/* Submit */}
            {show.submit && (
              <Fade key="submit">
                <div className="pt-2">
                  <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                    {"Envoyer ma pré-demande"}
                  </Button>
                  <p className="mt-3 text-xs text-gray-400 leading-relaxed">
                    {"En soumettant ce formulaire, vous acceptez d'être recontacté par un conseiller SAM dans les 24 heures ouvrées. Aucun engagement."}
                  </p>
                </div>
              </Fade>
            )}

          </form>
        </AnimatedSection>
      </div>
    </main>
  )
}
