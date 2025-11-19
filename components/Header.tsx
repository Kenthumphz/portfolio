import Link from 'next/link'

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-3">
        <img src="/portfolio/Kent.jpeg" alt="Emmanuel" width="40" height="40" className="rounded-full object-cover" />
        <span className="text-lg font-semibold text-foreground">Emmanuel H.</span>
      </Link>
      <nav className="space-x-6 text-muted-foreground">
        <Link href="/about" className="hover:text-foreground transition">About</Link>
        <Link href="/work" className="hover:text-foreground transition">Work</Link>
        <Link href="/contact" className="hover:text-foreground transition">Contact</Link>
      </nav>
    </header>
  )
}
