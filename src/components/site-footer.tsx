import Link from "next/link";

const EXPERTISE_ITEMS = [
  { label: "Étude & faisabilité", href: "#etude-faisabilite" },
  { label: "Valorisation foncière", href: "#domaines-intervention" },
  { label: "Transformation d'actifs", href: "#transformation-actifs" },
  { label: "Permis & accompagnement", href: "#permis-accompagnement" },
];

const NAV_ITEMS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Professionnels", href: "#professionnels" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-on-charcoal">
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-line-on-charcoal pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl font-extrabold tracking-tight text-on-charcoal">
              KERN
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-bronze">
              Conseil &amp; stratégie immobilière
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-on-charcoal-soft">
              Expertises
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {EXPERTISE_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-on-charcoal-soft transition-colors hover:text-on-charcoal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-on-charcoal-soft">
              Navigation
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-on-charcoal-soft transition-colors hover:text-on-charcoal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-on-charcoal-soft">
              Juridique
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-on-charcoal-soft/70">
              <li>Mentions légales — à venir</li>
              <li>Politique de confidentialité — à venir</li>
            </ul>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-on-charcoal-soft">
              Contact
            </p>
            <Link
              href="#contact"
              className="mt-4 inline-block text-sm text-on-charcoal-soft transition-colors hover:text-on-charcoal"
            >
              Nous contacter
            </Link>
          </div>
        </div>

        <p className="pt-8 text-xs text-on-charcoal-soft/70">
          © {new Date().getFullYear()} KERN. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
