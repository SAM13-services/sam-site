import { Helmet } from 'react-helmet-async'
import AnimatedSection from '../components/ui/AnimatedSection'

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16 px-4 md:px-[50px]">
      <Helmet>
        <title>Mentions légales — SAM</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <AnimatedSection className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-4">
          Informations légales
        </span>
        <h1
          className="font-bold leading-tight mb-12"
          style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', letterSpacing: '-0.02em' }}
        >
          Mentions légales
        </h1>

        <div className="flex flex-col gap-10 text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>

          <section>
            <h2 className="font-bold text-sam-black text-lg mb-4">1. Éditeur du site</h2>
            <div className="flex flex-col gap-1.5">
              <p><span className="font-semibold text-sam-black">Raison sociale :</span> LA ADAR</p>
              <p><span className="font-semibold text-sam-black">Forme juridique :</span> SAS</p>
              <p><span className="font-semibold text-sam-black">Capital social :</span> 1 000 €</p>
              <p><span className="font-semibold text-sam-black">SIRET :</span> 942 805 128 00017</p>
              <p><span className="font-semibold text-sam-black">Siège social :</span> 41 boulevard de l'Océan, 13009 Marseille</p>
              <p><span className="font-semibold text-sam-black">Email :</span> info@sam-contact.fr</p>
              <p><span className="font-semibold text-sam-black">Site web :</span> sam-contact.fr</p>
            </div>
          </section>

          <section>
            <h2 className="font-bold text-sam-black text-lg mb-4">2. Responsable de la publication</h2>
            <p>Lenny Bismuth — <a href="mailto:info@sam-contact.fr" className="underline hover:text-sam-black transition-colors">info@sam-contact.fr</a></p>
          </section>

          <section>
            <h2 className="font-bold text-sam-black text-lg mb-4">3. Hébergement</h2>
            <div className="flex flex-col gap-1.5">
              <p><span className="font-semibold text-sam-black">Hébergeur :</span> Vercel Inc.</p>
              <p><span className="font-semibold text-sam-black">Adresse :</span> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
              <p><span className="font-semibold text-sam-black">Site :</span> vercel.com</p>
            </div>
          </section>

          <section>
            <h2 className="font-bold text-sam-black text-lg mb-4">4. Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus présents sur le site sam-contact.fr (textes, images, logos, graphismes) est la propriété exclusive de LA ADAR, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation écrite préalable est strictement interdite.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-sam-black text-lg mb-4">5. Limitation de responsabilité</h2>
            <p>
              LA ADAR s'efforce de maintenir les informations publiées sur ce site à jour et exactes. Cependant, elle ne saurait être tenue responsable des erreurs, omissions ou résultats obtenus suite à l'utilisation de ces informations. Les liens vers des sites tiers sont fournis à titre informatif uniquement.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-sam-black text-lg mb-4">6. Droit applicable</h2>
            <p>
              Le présent site et ses mentions légales sont soumis au droit français. En cas de litige, les tribunaux compétents sont ceux du ressort de Marseille.
            </p>
          </section>

        </div>
      </AnimatedSection>
    </main>
  )
}
