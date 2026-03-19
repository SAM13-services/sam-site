import { Helmet } from 'react-helmet-async'
import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import HowItWorks from '../components/sections/HowItWorks'
import WhySAM from '../components/sections/WhySAM'
import Sectors from '../components/sections/Sectors'
import Subsidies from '../components/sections/Subsidies'
import CTABanner from '../components/sections/CTABanner'
export default function Home() {
  return (
    <main>
      <Helmet>
        <title>SAM — Jusqu'à 70% de subvention sur votre matériel professionnel</title>
        <meta name="description" content="SAM vous accompagne pour obtenir jusqu'à 70% de prise en charge sur votre matériel via la CARSAT. Pré-demande gratuite et sans engagement." />
        <meta property="og:title" content="SAM — Subventions matériel professionnel" />
        <meta property="og:description" content="Obtenez jusqu'à 70% de subvention sur votre équipement professionnel. SAM gère tout : vérification d'éligibilité, montage de dossier, suivi CARSAT." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sam-subventions.fr/" />
        <link rel="canonical" href="https://www.sam-subventions.fr/" />
      </Helmet>
      <Hero />
      <Stats />
      <HowItWorks />
      <Subsidies />
      <Sectors />
      <WhySAM />
      <CTABanner />
    </main>
  )
}
