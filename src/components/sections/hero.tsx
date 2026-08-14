import Link from "next/link";

export function Hero() {
  return (
    <section id="accueil" className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-6 pt-16 pb-20 sm:px-10 sm:pt-24 sm:pb-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
              <span className="h-px w-8 bg-clay" />
              Terrain — Bâti — Commerce
            </div>

            <h1 className="mt-6 max-w-[16ch] font-display text-[2.75rem] font-medium leading-[1.05] tracking-tight text-ink sm:text-[3.5rem] lg:text-[4rem]">
              Conseil &amp; valorisation foncière
            </h1>

            <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-ink-soft">
              Étude de faisabilité, optimisation de projets, transformation
              d&apos;actifs et accompagnement réglementaire jusqu&apos;au
              permis.
            </p>

            <div className="mt-10">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-clay"
              >
                Étudier mon projet
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full border border-line p-5 sm:p-6">
              <span className="absolute left-0 top-0 h-3 w-px bg-ink-faint" />
              <span className="absolute left-0 top-0 h-px w-3 bg-ink-faint" />
              <span className="absolute bottom-0 right-0 h-3 w-px bg-ink-faint" />
              <span className="absolute bottom-0 right-0 h-px w-3 bg-ink-faint" />

              <div className="grid h-full grid-cols-4 items-end gap-3 sm:gap-4">
                <div className="h-[35%] bg-ink" />
                <div className="h-[78%] bg-clay" />
                <div className="h-[52%] bg-paper-dim border border-line" />
                <div className="h-[95%] bg-ink/85" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
