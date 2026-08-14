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
        <h2 className="max-w-[24ch] font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
          Particuliers &amp; professionnels
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-2">
          <div className="border-t border-line pt-6">
            <h3 className="font-display text-xl font-medium text-ink">
              Particuliers
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {INDIVIDUALS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-base text-ink-soft"
                >
                  <span className="h-px w-4 bg-ink-faint" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-line pt-6">
            <h3 className="font-display text-xl font-medium text-ink">
              Professionnels
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {PROFESSIONALS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-base text-ink-soft"
                >
                  <span className="h-px w-4 bg-clay" />
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
