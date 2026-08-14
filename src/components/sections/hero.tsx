import Link from "next/link";

export function Hero() {
  return (
    <section id="accueil" className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-6 pt-16 pb-20 sm:px-10 sm:pt-24 sm:pb-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
              <span className="h-px w-8 bg-olive" />
              Conseil &amp; stratégie immobilière
            </div>

            <h1 className="mt-6 max-w-[16ch] font-display text-[2.75rem] font-bold leading-[1.03] tracking-tight text-ink sm:text-[3.75rem] lg:text-[4.25rem]">
              Créer de la valeur avant le premier coup de pioche.
            </h1>

            <p className="mt-8 max-w-[48ch] text-lg leading-relaxed text-ink-soft">
              Étude de faisabilité, valorisation foncière, transformation
              d&apos;actifs et accompagnement réglementaire jusqu&apos;aux
              autorisations.
            </p>

            <div className="mt-10">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-olive px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-olive-dark"
              >
                Étudier mon projet
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative flex aspect-[4/5] w-full flex-col justify-end overflow-hidden border border-line bg-[linear-gradient(155deg,var(--color-mineral)_0%,var(--color-paper-dim)_45%,var(--color-olive)_100%)] p-6">
              <span className="absolute left-0 top-0 h-3 w-px bg-ink-faint" />
              <span className="absolute left-0 top-0 h-px w-3 bg-ink-faint" />
              <span className="absolute bottom-0 right-0 h-3 w-px bg-paper/70" />
              <span className="absolute bottom-0 right-0 h-px w-3 bg-paper/70" />

              <p className="relative text-xs font-medium uppercase tracking-[0.2em] text-paper/80">
                Photographie architecturale — à intégrer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
