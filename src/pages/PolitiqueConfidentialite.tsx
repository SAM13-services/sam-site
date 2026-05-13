import { Helmet } from 'react-helmet-async'
import AnimatedSection from '../components/ui/AnimatedSection'

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16 px-4 md:px-[50px]">
      <Helmet>
        <title>Politique de confidentialité — SAM</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <AnimatedSection className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-4">
          Données personnelles
        </span>
        <h1
          className="font-bold leading-tight mb-12"
          style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', letterSpacing: '-0.02em' }}
        >
          Politique de confidentialité
        </h1>

        <div className="flex flex-col gap-10 text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>

          <section>
            <h2 className="font-bold text-sam-black text-lg mb-4">1. Responsable du traitement</h2>
            <p>
              Les données personnelles collectées sur ce site sont traitées par <span className="font-semibold text-sam-black">LA ADAR</span>, dont le siège social est situé au 41 boulevard de l'Océan, 13009 Marseille. Pour toute question relative à vos données, contactez-nous à : <a href="mailto:info@sam-contact.fr" className="underline hover:text-sam-black transition-colors">info@sam-contact.fr</a>.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-sam-black text-lg mb-4">2. Données collectées</h2>
            <p className="mb-3">Nous collectons uniquement les données que vous nous transmettez volontairement via nos formulaires :</p>
            <ul className="flex flex-col gap-2 pl-4">
              {[
                'Nom, prénom, raison sociale',
                'Adresse email et numéro de téléphone',
                'Secteur d\'activité et description du projet',
                'Informations relatives à votre besoin en matériel',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-sam-black flex-shrink-0 mt-2.5" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-sam-black text-lg mb-4">3. Finalités du traitement</h2>
            <p className="mb-3">Vos données sont utilisées exclusivement pour :</p>
            <ul className="flex flex-col gap-2 pl-4">
              {[
                'Répondre à vos demandes de pré-demande et de contact',
                'Vérifier votre éligibilité aux subventions CARSAT',
                'Constituer et suivre votre dossier de subvention',
                'Vous recontacter dans le cadre de notre accompagnement',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-sam-black flex-shrink-0 mt-2.5" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-sam-black text-lg mb-4">4. Base légale</h2>
            <p>
              Le traitement de vos données repose sur votre <span className="font-semibold text-sam-black">consentement</span> (formulaire de pré-demande) et sur l'<span className="font-semibold text-sam-black">intérêt légitime</span> de LA ADAR à répondre aux demandes entrantes.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-sam-black text-lg mb-4">5. Durée de conservation</h2>
            <p>
              Vos données sont conservées pour la durée nécessaire à la gestion de votre dossier, et au maximum <span className="font-semibold text-sam-black">3 ans</span> à compter du dernier contact, sauf obligation légale contraire.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-sam-black text-lg mb-4">6. Destinataires des données</h2>
            <p>
              Vos données sont traitées par les membres habilités de l'équipe SAM. Elles ne sont ni vendues, ni cédées à des tiers à des fins commerciales. Elles peuvent être transmises à la CARSAT dans le cadre du montage de votre dossier de subvention, avec votre accord.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-sam-black text-lg mb-4">7. Vos droits</h2>
            <p className="mb-3">Conformément au RGPD (Règlement général sur la protection des données) et à la loi Informatique et Libertés, vous disposez des droits suivants :</p>
            <ul className="flex flex-col gap-2 pl-4 mb-4">
              {[
                'Droit d\'accès à vos données',
                'Droit de rectification',
                'Droit à l\'effacement (« droit à l\'oubli »)',
                'Droit à la limitation du traitement',
                'Droit à la portabilité',
                'Droit d\'opposition',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-sam-black flex-shrink-0 mt-2.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à <a href="mailto:info@sam-contact.fr" className="underline hover:text-sam-black transition-colors">info@sam-contact.fr</a>. En cas de litige, vous pouvez saisir la <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="underline hover:text-sam-black transition-colors">CNIL</a>.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-sam-black text-lg mb-4">8. Cookies</h2>
            <p>
              Ce site n'utilise pas de cookies de traçage ou publicitaires. Des cookies techniques strictement nécessaires au fonctionnement du site peuvent être déposés. Aucun outil d'analyse comportementale tiers n'est actif sur ce site.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-sam-black text-lg mb-4">9. Sécurité</h2>
            <p>
              Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou altération.
            </p>
          </section>

          <p className="text-gray-400 text-sm border-t border-gray-100 pt-8">
            Dernière mise à jour : mai 2026
          </p>

        </div>
      </AnimatedSection>
    </main>
  )
}
