import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Alle Felder erforderlich' }), { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail', // Oder z.B. "smtp.mailgun.org"
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
  await transporter.sendMail({
  from: `"${name}" <${email}>`,
  to: process.env.RECIPIENT_EMAIL,
  subject: 'Neue Nachricht von der Website',
  text: `
    Neue Nachricht über das Kontaktformular:

    Name: ${name}
    E-Mail: ${email}
    Nachricht:
    ${message}
  `,
});


    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('E-Mail Fehler:', error);
    return new Response(JSON.stringify({ error: 'E-Mail konnte nicht gesendet werden' }), { status: 500 });
  }
}
