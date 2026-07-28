import { Resend } from 'resend'

export const config = { runtime: 'edge' }

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  const body = await req.json()
  const {
    societe, siret, nom, prenom, fonction,
    email, telephone, tva, cotisations,
    duerp, salaries, effectif, spst, spstName,
  } = body

  const emailPromise = resend.emails.send({
    from: 'SAM Site <info@sam-contact.fr>',
    to: 'info@sam-contact.fr',
    subject: `[Pré-demande] ${societe} — ${prenom} ${nom}`,
    html: `
      <h2>Nouvelle pré-demande</h2>

      <h3>Société</h3>
      <p><strong>Société :</strong> ${societe}</p>
      <p><strong>SIRET :</strong> ${siret}</p>

      <h3>Contact</h3>
      <p><strong>Nom :</strong> ${prenom} ${nom}</p>
      <p><strong>Fonction :</strong> ${fonction || '—'}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Téléphone :</strong> ${telephone}</p>

      <h3>Éligibilité</h3>
      <p><strong>Assujetti TVA :</strong> ${tva}</p>
      <p><strong>Cotisations à jour :</strong> ${cotisations}</p>
      <p><strong>DUERP :</strong> ${duerp}</p>
      <p><strong>Salariés :</strong> ${salaries}</p>
      ${effectif ? `<p><strong>Effectif :</strong> ${effectif}</p>` : ''}
      <p><strong>SPST :</strong> ${spst || '—'}</p>
      ${spstName ? `<p><strong>Nom SPST :</strong> ${spstName}</p>` : ''}
    `,
  })

  const webhookPromise = fetch('https://u3.savemyleads.com/web-hooks/1513/cyjdrjwu', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      societe, siret, nom, prenom, fonction,
      email, telephone, tva, cotisations,
      duerp, salaries, effectif, spst, spstName,
    }),
  }).catch((err) => console.error('SaveMyLeads webhook failed', err))

  await Promise.all([emailPromise, webhookPromise])

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
