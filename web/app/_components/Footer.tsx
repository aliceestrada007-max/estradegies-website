import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy text-cream/90">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="font-serif text-3xl md:text-4xl font-semibold text-cream mb-4">
              Estradegies
            </div>
            <p className="text-cream/70 text-sm leading-relaxed max-w-sm">
              Partners with nonprofits and mission-driven organizations to align strategy, revenue, and leadership for durable, long-term impact.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h3 className="font-serif text-cream text-lg mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>
                <Link href="/about" className="hover:text-cream transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cream transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-cream transition-colors">
                  Impact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cream transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="/capabilities.pdf" target="_blank" className="hover:text-cream transition-colors">
                  Download Capabilities ↓
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-serif text-cream text-lg mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-cream/70">
              <li className="text-cream">Alice Estrada</li>
              <li>
                <a href="tel:+17172536174" className="hover:text-cream transition-colors">
                  717-253-6174
                </a>
              </li>
              <li>
                <a
                  href="mailto:estradegies@gmail.com"
                  className="hover:text-cream transition-colors break-words"
                >
                  estradegies@gmail.com
                </a>
              </li>
              <li>Annapolis, MD</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-cream/10 text-xs text-cream/50">
          © {new Date().getFullYear()} Estradegies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
