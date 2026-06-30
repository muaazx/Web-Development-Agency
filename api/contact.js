// @ts-nocheck
const { Resend } = require('resend');

module.exports = async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return res.status(500).json({ error: 'Email service is not configured.' });
  }

  const resend = new Resend(apiKey);
  const body = req.body || {};
  const { name, email, whatsapp, subject, message } = body;

  if (!name || !email || !whatsapp || !message) {
    return res.status(400).json({ error: 'Name, email, WhatsApp number, and message are required.' });
  }

  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'amuaaz872@gmail.com',
      replyTo: email,
      subject: '[Smart Web Solutions Contact] ' + (subject || 'New Message') + ' from ' + name,
      html:
        '<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#18181b;color:#f4f4f5;border-radius:12px;">' +
        '<h2 style="color:#a78bfa;">New Contact Form Submission</h2>' +
        '<p style="color:#71717a;">Via Smart Web Solutions website</p>' +
        '<table style="width:100%;border-collapse:collapse;">' +
        '<tr><td style="padding:10px 0;border-bottom:1px solid #27272a;color:#a1a1aa;width:100px;font-size:13px;">NAME</td>' +
        '<td style="padding:10px 0;border-bottom:1px solid #27272a;font-weight:bold;">' + name + '</td></tr>' +
        '<tr><td style="padding:10px 0;border-bottom:1px solid #27272a;color:#a1a1aa;font-size:13px;">EMAIL</td>' +
        '<td style="padding:10px 0;border-bottom:1px solid #27272a;">' + email + '</td></tr>' +
        '<tr><td style="padding:10px 0;border-bottom:1px solid #27272a;color:#a1a1aa;font-size:13px;">WHATSAPP</td>' +
        '<td style="padding:10px 0;border-bottom:1px solid #27272a;">' + whatsapp + '</td></tr>' +
        '<tr><td style="padding:10px 0;border-bottom:1px solid #27272a;color:#a1a1aa;font-size:13px;">SERVICE</td>' +
        '<td style="padding:10px 0;border-bottom:1px solid #27272a;">' + (subject || 'Not specified') + '</td></tr>' +
        '<tr><td style="padding:10px 0;color:#a1a1aa;font-size:13px;vertical-align:top;">MESSAGE</td>' +
        '<td style="padding:10px 0;line-height:1.6;">' + String(message).replace(/\n/g, '<br>') + '</td></tr>' +
        '</table></div>',
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return res.status(500).json({ error: result.error.message || 'Failed to send email.' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: err.message || 'Unexpected error.' });
  }
};
