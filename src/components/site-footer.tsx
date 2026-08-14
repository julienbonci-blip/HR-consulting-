import Link from "next/link";

const NAV_ITEMS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Étude & faisabilité", href: "#etude-faisabilite" },
  { label: "Permis & accompagnement", href: "#permis-accompagnement" },
  { label: "Transformation d'actifs", href: "#transformation-actifs" },
  { label: "Professionnels", href: "#professionnels" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line-on-charcoal bg-charcoal text-on-charcoal">
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-line-on-charcoal pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl font-bold tracking-tight text-on-charcoal">
              KERN
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-bronze">
              Cabinet de stratégie immobilière
            </p>
            <p className="mt-4 max-w-[26ch] text-sm leading-relaxed text-on-charcoal-soft">
              Conseil &amp; valorisation foncière.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-on-charcoal-soft">
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
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-on-charcoal-soft">
              Contact
            </p>
            <p className="mt-4 text-sm text-on-charcoal-soft">À compléter</p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-on-charcoal-soft">
              Informations légales
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-on-charcoal-soft/70">
              <li>Mentions légales — à venir</li>
              <li>Politique de confidentialité — à venir</li>
            </ul>
          </div>
        </div>

        <p className="pt-8 text-xs text-on-charcoal-soft/70">
          © {new Date().getFullYear()} KERN. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
