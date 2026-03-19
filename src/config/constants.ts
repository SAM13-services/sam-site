// ============================================================
// SAM — Configuration centralisée
// ============================================================

// --- COULEURS ---
export const COLORS = {
  black: "#000000",
  yellow: "#FCF06D",
  white: "#FFFFFF",
  gray: "#D9D9D9",
  grayLight: "#F5F5F5",
  grayBg: "#F9F9F9",
} as const

// --- CONTACT ---
export const CONTACT = {
  email: "info@sam-contact.fr",
  phone: "01 XX XX XX XX",
  phoneDisplay: "+33 (0)1 XX XX XX XX",
  hours: "Lun–Ven, 9h–18h",
  responseTime: "Réponse sous 24h ouvrées",
  coverage: "Toute la France",
} as const

// --- NAVIGATION ---
export interface NavLink {
  label: string
  path: string
  disabled?: boolean
  badge?: string
}

export const NAV_LINKS: NavLink[] = [
  { label: "Accueil", path: "/" },
  { label: "Comment ça marche", path: "/#how-it-works" },
  { label: "Subventions", path: "/#subsidies" },
  { label: "Matériel éligible", path: "/materiel" },
  { label: "Contact", path: "/contact" },
]

// --- HERO ---
export const HERO = {
  badge: "Pré-demande gratuite et sans engagement",
  title: "Jusqu'à 85\u00a0% de vos\u00a0équipements financés",
  subtitle: "SAM vous accompagne de A à Z dans l'obtention de vos subventions CARSAT. Vérification d'éligibilité, montage de dossier, suivi — tout est pris en charge.",
  cta1: "Vérifier mon éligibilité",
  cta2: "Nous contacter",
} as const

// --- STATS ---
export const STATS = [
  { value: "100+", label: "entreprises accompagnées" },
  { value: "700M\u00a0€", label: "débloqués par la CARSAT sur 5 ans" },
  { value: "20+",  label: "distributeurs partenaires" },
  { value: "85%*", label: "prise en charge maximum" },
] as const

// --- ÉTAPES ---
export const STEPS = [
  {
    number: "01",
    title: "Pré-demande",
    description: "Remplissez notre formulaire en 2 minutes. Nous vérifions gratuitement votre éligibilité aux subventions.",
  },
  {
    number: "02",
    title: "Échange avec un membre",
    description: "Un conseiller SAM vous rappelle pour confirmer votre éligibilité et vous orienter vers le bon dispositif.",
  },
  {
    number: "03",
    title: "Montage du dossier",
    description: "Nous constituons et déposons l'intégralité de votre dossier auprès de la CARSAT. Vous n'avez rien à faire.",
  },
  {
    number: "04",
    title: "Subvention obtenue",
    description: "Investissez sereinement dans votre équipement avec jusqu'à 70% de prise en charge financière.",
  },
] as const

// --- POINTS FORTS ---
export const STRENGTHS = [
  {
    icon: "Key",
    title: "100% clé en main",
    description: "De la vérification d'éligibilité jusqu'à l'obtention de la subvention, nous gérons tout. Constitution du dossier, échanges avec la CARSAT, suivi des versements — chaque étape est prise en charge par notre équipe. Vous vous concentrez sur votre activité, nous gérons le reste.",
  },
  {
    icon: "Gift",
    title: "Pré-demande gratuite",
    description: "Aucune obligation, aucun frais pour vérifier si vous êtes éligible. Nous analysons votre situation, votre secteur et vos besoins en équipement avant de vous engager dans la moindre démarche. Nous ne sommes rémunérés qu'en cas de succès — votre intérêt est le nôtre.",
  },
  {
    icon: "Calculator",
    title: "Optimisation budgétaire",
    description: "Chaque dossier est différent. Nous identifions le dispositif le plus avantageux pour votre situation — FIPU, TOP BTP, Poussières de farine — et maximisons votre taux de prise en charge. Certains de nos clients obtiennent jusqu'à 85% de leur investissement remboursé.",
  },
  {
    icon: "Network",
    title: "Réseau de 20+ partenaires",
    description: "Accédez à notre réseau de distributeurs partenaires agréés dans toute la France. Nous vous orientons vers les fournisseurs conformes aux exigences CARSAT, ce qui simplifie l'instruction du dossier et accélère l'obtention de votre subvention.",
  },
] as const

// --- SECTEURS ---
export const SECTORS: { label: string; id: string }[] = [
  { label: "Restauration & Métiers de bouche", id: "restauration-metiers-bouche" },
  { label: "Logistique & Entreposage",         id: "logistique-entreposage" },
  { label: "Construction & BTP",               id: "construction-btp" },
  { label: "Automobile",                       id: "automobile" },
  { label: "Sanitaire & Médico-social",        id: "sanitaire-medico-social" },
  { label: "Industrie",                        id: "industrie" },
  { label: "Médical & Paramédical",            id: "medical-paramedical" },
  { label: "Coiffure & Esthétique",            id: "coiffure" },
  { label: "Vétérinaire",                      id: "veterinaire" },
  { label: "Transport",                        id: "transport" },
  { label: "Propreté",                         id: "proprete" },
  { label: "Puériculture",                     id: "puericulture" },
]

// --- SUBVENTIONS ---
export const SUBSIDIES = [
  {
    id: "fipu",
    name: "FIPU",
    rate: "70%",
    label: "Prise en charge",
    description: "Permet aux entreprises de financer jusqu'à 70 % de certains équipements destinés à réduire les risques et améliorer les conditions de travail.",
    eligibility: "Restauration, commerces, artisans, logistique, PME",
    demande: "Sur facture acquittée",
  },
  {
    id: "top-btp",
    name: "TOP BTP",
    rate: "50%",
    label: "Prise en charge",
    description: "Subvention dédiée au secteur du BTP pour financer les équipements de prévention des accidents du travail et maladies professionnelles.",
    eligibility: "Entreprises du secteur BTP et travaux publics",
    demande: "Sur devis ou facture acquittée",
  },
  {
    id: "farine",
    name: "Poussières de farine",
    rate: "70%",
    label: "Prise en charge",
    description: "Dispositif spécifique pour les boulangers, pâtissiers et meuniers afin de financer les équipements réduisant l'exposition aux poussières de farine.",
    eligibility: "Boulangeries, pâtisseries, meuneries",
    demande: "Sur devis ou facture acquittée",
  },
] as const

// --- CTA BANDEAU FINAL ---
export const CTA_BANNER = {
  title: "Votre équipement professionnel mérite d'être financé.",
  subtitle: "Vérifiez votre éligibilité en 2 minutes. Gratuit, sans engagement.",
  cta: "Démarrer ma pré-demande",
} as const

// --- PAGE PRÉ-DEMANDE ---
export const PRE_DEMANDE = {
  badge: "Gratuit et sans engagement",
  title: "Vérifiez votre éligibilité",
  subtitle: "Remplissez ce formulaire en 2 minutes. Nous analysons votre situation et vous recontactons sous 24h.",
  successTitle: "Demande reçue",
  successMessage: "Merci\u00a0! Votre pré-demande a bien été transmise. Un conseiller SAM vous contactera dans les 24 heures ouvrées pour valider votre éligibilité.",
} as const

// --- PAGE CONTACT ---
export const CONTACT_PAGE = {
  title: "Parlons de votre projet",
  subtitle: "Une question sur votre éligibilité\u00a0? Un projet de financement\u00a0? Notre équipe est là.",
} as const
