export function Transformation() {
  return (
    <section id="transformation-actifs" className="border-b border-line bg-paper-dim">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10 sm:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
              <span className="h-px w-8 bg-olive" />
              Un axe différenciant
            </div>

            <h2 className="mt-6 max-w-[18ch] font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Transformation d&apos;actifs
            </h2>

            <p className="mt-6 font-display text-2xl font-bold leading-snug tracking-tight text-olive sm:text-3xl">
              Valoriser. Transformer. Développer.
            </p>

            <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-ink-soft">
              Un actif ne se limite jamais à son usage initial. Terrain,
              immeuble, local commercial : chaque bien peut être requalifié,
              restructuré ou transformé pour révéler un potentiel qui
              n&apos;apparaît pas au premier regard.
            </p>
            <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-ink-soft">
              De l&apos;arbitrage initial jusqu&apos;à la sécurisation
              réglementaire du nouveau projet, c&apos;est l&apos;axe sur
              lequel nous apportons le plus de valeur.
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-3 text-sm text-ink-soft">
              {[
                "Arbitrage",
                "Changement de destination",
                "Restructuration",
                "Repositionnement",
              ].map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line px-4 py-1.5"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="relative flex aspect-[4/5] w-full flex-col justify-end overflow-hidden border border-line bg-[linear-gradient(160deg,var(--color-charcoal)_0%,var(--color-olive)_100%)] p-6">
              <span className="absolute bottom-0 left-0 h-3 w-px bg-paper/70" />
              <span className="absolute bottom-0 left-0 h-px w-3 bg-paper/70" />
              <span className="absolute right-0 top-0 h-3 w-px bg-paper/50" />
              <span className="absolute right-0 top-0 h-px w-3 bg-paper/50" />

              <p className="relative text-xs font-medium uppercase tracking-[0.2em] text-paper/80">
                Commerces &amp; restructuration — photographie à intégrer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
