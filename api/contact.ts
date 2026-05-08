import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'NovaWeb Studio Contact <onboarding@resend.dev>', // Resend's shared domain (works without custom domain)
      to: ['amuaaz872@gmail.com'],
      replyTo: email,
      subject: `[NovaWeb Contact] ${subject || 'New Message'} from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #18181b; color: #f4f4f5; border-radius: 12px;">
          <h2 style="color: #a78bfa; margin-bottom: 4px;">New Contact Form Submission</h2>
          <p style="color: #71717a; margin-bottom: 24px;">Via NovaWeb Studio website</p>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #27272a; color: #a1a1aa; width: 120px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #27272a; font-weight: bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #27272a; color: #a1a1aa; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #27272a;"><a href="mailto:${email}" style="color: #a78bfa;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #27272a; color: #a1a1aa; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em;">Service</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #27272a;">${subject || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a1a1aa; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</td>
            </tr>
          </table>

          <p style="margin-top: 32px; font-size: 12px; color: #52525b; text-align: center;">
            Sent from NovaWeb Studio contact form &bull; Reply directly to this email to respond to ${name}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email. Please try again.' });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: 'An unexpected error occurred.' });
  }
}
