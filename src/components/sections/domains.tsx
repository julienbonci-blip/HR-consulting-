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
        <h2 className="max-w-[24ch] font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
          Un projet, plusieurs façons de créer de la valeur
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
          {DOMAINS.map((domain) => (
            <div
              key={domain.number}
              className="border-t border-line pt-6"
            >
              <span className="font-display text-sm text-ink-faint">
                {domain.number}
              </span>
              <h3 className="mt-3 font-display text-xl font-medium text-ink">
                {domain.title}
              </h3>
              <p className="mt-2 max-w-[38ch] text-base leading-relaxed text-ink-soft">
                {domain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
