import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/impact", label: "Impact" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="border-b border-line/60 bg-cream/85 backdrop-blur sticky top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10">
        <Link
          href="/"
          className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-navy"
        >
          Estradegies
        </Link>
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm tracking-wide text-ink/80 hover:text-navy transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="md:hidden flex items-center gap-5 text-xs">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="tracking-wide text-ink/80 hover:text-navy transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
