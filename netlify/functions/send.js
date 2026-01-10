const nodemailer = require('nodemailer');

exports.handler = async function (event) {
  const corsHeaders = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'OPTIONS,POST', 'Access-Control-Allow-Headers': 'Content-Type' };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders };
  }

  try {
    const { name, email, message } = JSON.parse(event.body || '{}');
    if (!name || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields' }), headers: corsHeaders };
    }

    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT || 587;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const TO_EMAIL = process.env.TO_EMAIL;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !TO_EMAIL) {
      return { statusCode: 500, body: JSON.stringify({ error: 'SMTP server not configured (check env vars)' }), headers: corsHeaders };
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS }
    });

    await transporter.sendMail({
      from: SMTP_USER,
      to: TO_EMAIL,
      subject: `Portfolio contact from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`
    });

    return { statusCode: 200, body: JSON.stringify({ ok: true }), headers: corsHeaders };

  } catch (err) {
    console.error('Netlify send error', err);
    return { statusCode: 500, body: JSON.stringify({ error: err.message || 'Failed to send' }) };
  }
};