import { useState, FormEvent } from 'react'
import { Helmet } from 'react-helmet-async'
import { Mail, Clock, Globe, CheckCircle, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { CONTACT, CONTACT_PAGE } from '../config/constants'
import Button from '../components/ui/Button'
import { FormInput, FormTextarea } from '../components/ui/FormInput'
import AnimatedSection from '../components/ui/AnimatedSection'

interface ContactFormState {
  societe: string
  nom: string
  prenom: string
  email: string
  telephone: string
  sujet: string
  message: string
}

const SUBJECTS = [
  "Vérification d'éligibilité",
  "Demande de devis",
  "Question sur un dispositif",
  "Partenariat distributeur",
  "Autre",
]

const initialState: ContactFormState = {
  societe: '', nom: '', prenom: '', email: '', telephone: '', sujet: '', message: '',
}

export default function Contact() {
  const navigate = useNavigate()
  const [form, setForm] = useState<ContactFormState>(initialState)
  const [submitted, setSubmitted] = useState(false)

  const updateField = (field: keyof ContactFormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center px-4 md:px-[50px] py-12">
        <AnimatedSection className="max-w-lg w-full text-center">
          <div className="w-12 h-12 bg-sam-yellow flex items-center justify-center mx-auto mb-5">
            <CheckCircle size={24} strokeWidth={1.5} />
          </div>
          <h1 className="text-xl font-bold mb-3">Message envoyé</h1>
          <p className="text-gray-500 leading-relaxed mb-7">
            {"Merci pour votre message. Un conseiller SAM vous répondra dans les 24 heures ouvrées."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="primary" onClick={() => navigate('/')} size="md">{"Retour à l'accueil"}</Button>
            <Button variant="secondary" onClick={() => { setForm(initialState); setSubmitted(false) }} size="md">
              Nouveau message
            </Button>
          </div>
        </AnimatedSection>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white pt-24 pb-12 px-4 md:px-[50px]">
      <Helmet>
        <title>Contact — SAM Subventions professionnelles</title>
        <meta name="description" content="Contactez l'équipe SAM pour toute question sur votre éligibilité aux subventions CARSAT. Réponse sous 24h ouvrées." />
        <meta property="og:title" content="Contact — SAM" />
        <meta property="og:description" content="Une question sur votre éligibilité ? Contactez SAM, réponse sous 24h." />
        <meta property="og:url" content="https://www.sam-subventions.fr/contact" />
        <link rel="canonical" href="https://www.sam-subventions.fr/contact" />
      </Helmet>
      <div>

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
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-3">Contact</span>
          <h1
            className="font-bold leading-tight"
            style={{ fontSize: 'clamp(26px, 3.5vw, 50px)', letterSpacing: '-0.01em' }}
          >
            {CONTACT_PAGE.title}
          </h1>
        </AnimatedSection>

        {/* Layout 2 colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">

          {/* Colonne gauche — Infos sur fond noir */}
          <AnimatedSection delay={100} className="lg:col-span-4">
            <div className="bg-sam-black h-full p-8 lg:p-10 flex flex-col gap-8">
              <div>
                <h2 className="text-white text-lg font-bold mb-2">
                  Parlons de votre projet
                </h2>
                <p className="text-white/50 text-sm leading-relaxed">
                  {CONTACT_PAGE.subtitle}
                </p>
              </div>

              <div className="flex flex-col gap-6">
                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-white/40">
                    <Mail size={12} strokeWidth={1.5} />
                    <span className="text-xs font-bold uppercase tracking-wider">Email</span>
                  </div>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-white font-medium text-sm hover:text-sam-yellow transition-colors duration-200"
                  >
                    {CONTACT.email}
                  </a>
                </div>

                {/* Horaires */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-white/40">
                    <Clock size={12} strokeWidth={1.5} />
                    <span className="text-xs font-bold uppercase tracking-wider">{"Disponibilité"}</span>
                  </div>
                  <span className="text-white font-medium text-sm">{CONTACT.hours}</span>
                </div>

                {/* Couverture */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-white/40">
                    <Globe size={12} strokeWidth={1.5} />
                    <span className="text-xs font-bold uppercase tracking-wider">Couverture</span>
                  </div>
                  <span className="text-white font-medium text-sm">{CONTACT.coverage}</span>
                </div>
              </div>

              {/* Réponse */}
              <div className="mt-auto">
                <div className="bg-white/5 px-4 py-3 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-sam-yellow flex-shrink-0 mt-1.5" />
                  <p className="text-white/60 text-sm leading-relaxed">{CONTACT.responseTime}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Colonne droite — Formulaire */}
          <AnimatedSection delay={150} className="lg:col-span-8">
            <div className="bg-sam-gray-bg p-7 lg:p-10 h-full">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <FormInput
                  label="Société"
                  name="societe"
                  value={form.societe}
                  onChange={updateField('societe')}
                  required
                  placeholder="Nom de votre société"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormInput label="Nom" name="nom" value={form.nom} onChange={updateField('nom')} required placeholder="Dupont" />
                  <FormInput label="Prénom" name="prenom" value={form.prenom} onChange={updateField('prenom')} required placeholder="Jean" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormInput label="Email" name="email" type="email" value={form.email} onChange={updateField('email')} required placeholder="jean.dupont@societe.fr" />
                  <FormInput label="Téléphone" name="telephone" type="tel" value={form.telephone} onChange={updateField('telephone')} required placeholder="+33 6 XX XX XX XX" />
                </div>

                {/* Sujet */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-sam-black">
                    Sujet de la demande <span className="ml-0.5">*</span>
                  </label>
                  <select
                    name="sujet"
                    value={form.sujet}
                    onChange={updateField('sujet')}
                    required
                    className="w-full px-4 py-3 text-sm bg-white border border-sam-gray focus:outline-none focus:border-sam-yellow focus:ring-2 focus:ring-sam-yellow/20 transition-all duration-200 appearance-none cursor-pointer text-sam-black"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 16px center',
                    }}
                  >
                    <option value="">Sélectionnez un sujet</option>
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <FormTextarea
                  label="Message"
                  name="message"
                  value={form.message}
                  onChange={updateField('message')}
                  required
                  rows={5}
                  placeholder="Décrivez votre projet, votre secteur d'activité, le type de matériel envisagé…"
                />

                <div className="pt-1">
                  <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                    Envoyer le message
                  </Button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </main>
  )
}
