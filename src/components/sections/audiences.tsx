const INDIVIDUALS = [
  "Terrain",
  "Division",
  "Extension",
  "Construction",
  "Transformation",
  "Potentiel immobilier",
];

const PROFESSIONALS = [
  "Acquisition",
  "Arbitrage",
  "Transformation d'actifs",
  "Changement de destination",
  "Restructuration",
  "Faisabilité avant engagement",
];

export function Audiences() {
  return (
    <section id="professionnels" className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10 sm:py-28">
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
          <span className="h-px w-8 bg-olive" />
          Pour qui
        </div>
        <h2 className="mt-6 max-w-[24ch] font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Particuliers &amp; professionnels
        </h2>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 lg:divide-x lg:divide-line">
          <div className="border-t border-line pt-8 lg:pr-12 lg:pt-10">
            <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-bronze">
              Particuliers
            </span>
            <p className="mt-3 max-w-[36ch] text-base leading-relaxed text-ink-soft">
              Révéler le potentiel d&apos;un bien, avant de construire,
              diviser ou transformer.
            </p>
            <ul className="mt-8 flex flex-col gap-4">
              {INDIVIDUALS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 border-t border-line-soft pt-4 text-lg font-medium text-ink first:border-t-0 first:pt-0"
                >
                  <span className="h-px w-5 bg-olive" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-line pt-8 lg:pl-12 lg:pt-10">
            <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-bronze">
              Professionnels
            </span>
            <p className="mt-3 max-w-[36ch] text-base leading-relaxed text-ink-soft">
              Sécuriser la faisabilité et la valeur d&apos;un actif, de
              l&apos;arbitrage à la transformation.
            </p>
            <ul className="mt-8 flex flex-col gap-4">
              {PROFESSIONALS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 border-t border-line-soft pt-4 text-lg font-medium text-ink first:border-t-0 first:pt-0"
                >
                  <span className="h-px w-5 bg-olive" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
