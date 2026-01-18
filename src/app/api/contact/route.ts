import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // Resend onaylı mail adresin
      to: ['talha45879@gmail.com'],
      subject: `Yeni İletişim Formu: ${name}`,
      replyTo: email,
      text: `Ad: ${name}\nE-posta: ${email}\nMesaj: ${message}`,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}