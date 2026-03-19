import { Resend } from 'resend'

export const config = { runtime: 'edge' }

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  const body = await req.json()
  const { societe, nom, prenom, email, telephone, sujet, message } = body

  await resend.emails.send({
    from: 'SAM Site <info@sam-contact.fr>',
    to: 'info@sam-contact.fr',
    subject: `[Contact] ${sujet} — ${societe}`,
    html: `
      <h2>Nouveau message de contact</h2>
      <p><strong>Société :</strong> ${societe}</p>
      <p><strong>Nom :</strong> ${prenom} ${nom}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Téléphone :</strong> ${telephone}</p>
      <p><strong>Sujet :</strong> ${sujet}</p>
      <hr />
      <p><strong>Message :</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `,
  })

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
