import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, firma, nachricht, datenschutz } = body

    if (!name || !email || !nachricht || !datenschutz) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle Pflichtfelder aus.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' },
        { status: 400 }
      )
    }

    // TODO: Integrate with email service (e.g., Resend, SendGrid, Nodemailer)
    console.log('Kontaktformular:', { name, email, phone, firma, nachricht })

    return NextResponse.json({ success: true, message: 'Ihre Nachricht wurde erfolgreich gesendet.' })
  } catch {
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    )
  }
}
