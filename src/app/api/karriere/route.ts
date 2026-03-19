import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const vorname = formData.get('vorname') as string
    const nachname = formData.get('nachname') as string
    const email = formData.get('email') as string
    const telefon = formData.get('telefon') as string
    const nachricht = formData.get('nachricht') as string
    const datenschutz = formData.get('datenschutz')
    const lebenslauf = formData.get('lebenslauf') as File | null

    if (!vorname || !nachname || !email || !nachricht || !datenschutz) {
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

    if (lebenslauf) {
      const maxSize = 5 * 1024 * 1024
      if (lebenslauf.size > maxSize) {
        return NextResponse.json(
          { error: 'Die Datei darf maximal 5 MB groß sein.' },
          { status: 400 }
        )
      }

      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ]
      if (!allowedTypes.includes(lebenslauf.type)) {
        return NextResponse.json(
          { error: 'Bitte laden Sie eine PDF- oder Word-Datei hoch.' },
          { status: 400 }
        )
      }
    }

    // TODO: Integrate with email service
    console.log('Bewerbung:', { vorname, nachname, email, telefon, nachricht, hasFile: !!lebenslauf })

    return NextResponse.json({ success: true, message: 'Ihre Bewerbung wurde erfolgreich gesendet.' })
  } catch {
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    )
  }
}
