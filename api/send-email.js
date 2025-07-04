import { Resend } from 'resend';

// eslint-disable-next-line no-undef
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // use verified domain/address
      to: 'marutpiumakkho@gmail.com',
      replyTo: email,
      subject: `New message from ${name}`,
      text: message,
    });
    res.status(200).json({ status: 'ok' });
  } catch {
    res.status(500).json({ error: 'Failed to send email' });
  }
} 