import Link from 'next/link'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="flex items-center justify-center min-h-[60vh] py-20">
      <Container className="text-center">
        <div className="text-8xl font-extrabold text-primary mb-4">404</div>
        <h1 className="text-2xl font-bold text-text-heading sm:text-3xl mb-4">
          Seite nicht gefunden
        </h1>
        <p className="text-text-muted mb-8 max-w-md mx-auto">
          Die angeforderte Seite konnte leider nicht gefunden werden.
          Möglicherweise wurde sie verschoben oder existiert nicht mehr.
        </p>
        <Button href="/">Zurück zur Startseite</Button>
      </Container>
    </section>
  )
}
