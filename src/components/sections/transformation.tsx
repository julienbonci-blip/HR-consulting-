import Image from "next/image";

const TAGS = [
  "Arbitrage",
  "Changement de destination",
  "Restructuration",
  "Repositionnement",
];

export function Transformation() {
  return (
    <section id="transformation-actifs" className="border-b border-mineral bg-paper">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[48%_52%] lg:items-stretch lg:gap-8 lg:py-0">
        <div className="flex flex-col justify-center lg:py-24">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
            <span className="h-px w-8 bg-bronze" />
            Un axe différenciant
          </div>

          <h2 className="mt-6 max-w-[18ch] font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.025em] text-ink sm:text-5xl">
            Transformation d&apos;actifs
          </h2>

          <p className="mt-6 font-display text-3xl font-extrabold leading-[1.05] tracking-[-0.02em] text-olive sm:text-4xl">
            Valoriser.
            <br />
            Transformer.
            <br />
            Développer.
          </p>

          <p className="mt-8 max-w-[52ch] text-[17px] leading-relaxed text-ink-soft">
            Un actif ne se limite jamais à son usage initial. Terrain,
            immeuble, local commercial : chaque bien peut être requalifié,
            restructuré ou transformé pour révéler un potentiel qui
            n&apos;apparaît pas au premier regard.
          </p>
          <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-ink-soft">
            De l&apos;arbitrage initial jusqu&apos;à la sécurisation
            réglementaire du nouveau projet, c&apos;est l&apos;axe sur
            lequel nous apportons le plus de valeur.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-soft">
            {TAGS.map((tag, index) => (
              <span key={tag} className="flex items-center gap-4">
                {index > 0 && <span className="h-3 w-px bg-bronze/60" />}
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative h-[360px] overflow-hidden rounded-md sm:h-[460px] lg:h-auto">
          <Image
            src="/reference/kern-photos/03_restaurant_hospitality_interieur.jpg"
            alt="Intérieur d'un restaurant transformé, ambiance hospitality"
            fill
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
