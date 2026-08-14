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
    <section id="professionnels" className="border-b border-mineral">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-paper px-6 py-20 sm:px-10 sm:py-28 lg:pr-14 lg:pl-10 xl:pl-[max(2.5rem,calc((100vw-1400px)/2))]">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
            Particuliers
          </span>
          <h2 className="mt-4 max-w-[22ch] font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.025em] text-ink sm:text-4xl">
            Révéler le potentiel d&apos;un bien
          </h2>
          <p className="mt-4 max-w-[36ch] text-[17px] leading-relaxed text-ink-soft">
            Avant de construire, diviser ou transformer.
          </p>
          <ul className="mt-10 flex flex-col">
            {INDIVIDUALS.map((item, index) => (
              <li
                key={item}
                className="flex items-center gap-4 border-t border-mineral py-4 text-lg font-medium text-ink first:border-t-0 first:pt-0"
              >
                <span className="font-display text-sm font-bold text-bronze">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-olive px-6 py-20 text-paper sm:px-10 sm:py-28 lg:pl-14 lg:pr-10 xl:pr-[max(2.5rem,calc((100vw-1400px)/2))]">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/70">
            Professionnels
          </span>
          <h2 className="mt-4 max-w-[22ch] font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.025em] text-paper sm:text-4xl">
            Sécuriser la valeur d&apos;un actif
          </h2>
          <p className="mt-4 max-w-[36ch] text-[17px] leading-relaxed text-paper/80">
            De l&apos;arbitrage à la transformation, avant tout engagement.
          </p>
          <ul className="mt-10 flex flex-col">
            {PROFESSIONALS.map((item, index) => (
              <li
                key={item}
                className="flex items-center gap-4 border-t border-paper/20 py-4 text-lg font-medium text-paper first:border-t-0 first:pt-0"
              >
                <span className="font-display text-sm font-bold text-paper/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
