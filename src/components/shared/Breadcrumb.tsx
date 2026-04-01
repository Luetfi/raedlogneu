import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import Container from '@/components/ui/Container'

interface BreadcrumbItem {
  name: string
  href: string
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-bg-elevated/50">
      <Container>
        <ol className="flex items-center gap-1.5 py-3 text-sm text-text-muted">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Home className="h-3.5 w-3.5" />
              <span>Startseite</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 text-text-muted/50" />
              {index === items.length - 1 ? (
                <span className="font-medium text-text" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  )
}
