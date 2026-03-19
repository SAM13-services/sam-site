export type Subvention = 'FIPU' | 'TOP_BTP' | 'POUSSIERE_FARINE'

export type Categorie =
  | 'equipements-transfert'
  | 'equipements-roulants'
  | 'plans-travail-reglables'
  | 'outils-portatifs-vibrations'
  | 'equipements-specifiques'

export type Secteur =
  | 'sanitaire-medico-social'
  | 'industrie'
  | 'construction-btp'
  | 'demenagement'
  | 'restauration-metiers-bouche'
  | 'logistique-entreposage'
  | 'veterinaire'
  | 'sport'
  | 'medical-paramedical'
  | 'coiffure'
  | 'proprete'
  | 'automobile'
  | 'transport'
  | 'puericulture'
  | 'tous-secteurs'

export interface Distributeur {
  nom: string
  logo?: string
  siteWeb?: string
}

export interface Materiel {
  id: string
  nom: string
  description: string
  descriptionComplete: string
  subvention: Subvention
  categorie: Categorie
  secteurs: Secteur[]
  icon: string
  eligibilite: {
    conception: string[]
    formation: string[]
    amenagement: string[]
    exclusions?: string[]
    precisions?: string[]
  }
  distributeurs: Distributeur[]
}

export const CATEGORIE_LABELS: Record<Categorie, string> = {
  'equipements-transfert': 'Transfert & Levage',
  'equipements-roulants': 'Équipements roulants',
  'plans-travail-reglables': 'Plans de travail réglables',
  'outils-portatifs-vibrations': 'Outils portatifs & Anti-vibrations',
  'equipements-specifiques': 'Équipements spécifiques',
}

export const SECTEUR_LABELS: Record<Secteur, string> = {
  'sanitaire-medico-social': 'Sanitaire & Médico-social',
  'industrie': 'Industrie',
  'construction-btp': 'Construction & BTP',
  'demenagement': 'Déménagement',
  'restauration-metiers-bouche': 'Restauration & Métiers de bouche',
  'logistique-entreposage': 'Logistique & Entreposage',
  'veterinaire': 'Vétérinaire',
  'sport': 'Sport & Bien-être',
  'medical-paramedical': 'Médical & Paramédical',
  'coiffure': 'Coiffure & Esthétique',
  'proprete': 'Propreté',
  'automobile': 'Automobile',
  'transport': 'Transport',
  'puericulture': 'Puériculture',
  'tous-secteurs': 'Tous secteurs',
}

export const SUBVENTION_LABELS: Record<Subvention, string> = {
  FIPU: 'FIPU',
  TOP_BTP: 'TOP BTP',
  POUSSIERE_FARINE: 'Poussière de Farine',
}
