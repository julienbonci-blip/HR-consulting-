const DOMAINS = [
  {
    number: "01",
    title: "Terrain",
    description: "Construire, diviser, densifier, optimiser.",
  },
  {
    number: "02",
    title: "Bâti existant",
    description: "Transformer, restructurer, changer de destination.",
  },
  {
    number: "03",
    title: "Commerce / RDC",
    description: "Repositionner, restaurer, convertir ou adapter un local.",
  },
  {
    number: "04",
    title: "Projet immobilier",
    description:
      "Sécuriser la faisabilité réglementaire, technique et opérationnelle avant d'investir ou de déposer.",
  },
];

export function Domains() {
  return (
    <section id="domaines-intervention" className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10 sm:py-28">
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
          <span className="h-px w-8 bg-olive" />
          Secteurs d&apos;intervention
        </div>

        <h2 className="mt-6 max-w-[24ch] font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Un projet, plusieurs façons de créer de la valeur
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2">
          {DOMAINS.map((domain, index) => (
            <div key={domain.number}>
              <div
                className={`aspect-[16/10] w-full border border-line ${
                  index % 2 === 0
                    ? "bg-[linear-gradient(135deg,var(--color-mineral)_0%,var(--color-paper-dim)_100%)]"
                    : "bg-[linear-gradient(135deg,var(--color-paper-dim)_0%,var(--color-olive)_100%)]"
                }`}
              />
              <div className="mt-6 border-t border-line pt-6">
                <span className="font-display text-sm font-bold text-bronze">
                  {domain.number}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink">
                  {domain.title}
                </h3>
                <p className="mt-2 max-w-[38ch] text-base leading-relaxed text-ink-soft">
                  {domain.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
