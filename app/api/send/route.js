import { EmailTemplate } from '../../componenets/2024archive/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    console.log('body', body);
    const { email, name, message, subject } = body;

    const data = await resend.emails.send({
      from: 'Oscar <oscarleal@osworld.dev>',
      to: email,
      subject: subject,
      react: EmailTemplate({
        firstName: name,
        emailSubject: subject,
        emailMessage: message,
      }),
    });

    if (data.status === 'success') {
      return NextResponse.json({ message: 'Email Successfully Sent!' });
    }
    return NextResponse.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
