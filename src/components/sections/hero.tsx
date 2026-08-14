import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section id="accueil" className="border-b border-mineral">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[47%_53%] lg:items-stretch lg:gap-8 lg:py-0">
        <div className="flex flex-col justify-center lg:min-h-[720px] lg:py-20">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
            <span className="h-px w-8 bg-bronze" />
            Conseil &amp; stratégie immobilière
          </div>

          <h1 className="mt-6 max-w-[15ch] font-display text-[44px] font-extrabold leading-[0.98] tracking-[-0.045em] text-ink sm:text-[64px] lg:text-[76px]">
            Créer de la valeur avant le premier coup de pioche
          </h1>

          <p className="mt-7 max-w-[46ch] text-[17px] leading-relaxed text-ink-soft sm:text-lg">
            Étude de faisabilité, valorisation foncière, transformation
            d&apos;actifs et accompagnement réglementaire jusqu&apos;aux
            autorisations.
          </p>

          <div className="mt-9">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-olive px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-olive-dark"
            >
              Étudier mon projet
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="relative h-[380px] overflow-hidden rounded-md sm:h-[480px] lg:h-auto">
          <Image
            src="/KERN_photos_v2/01_hero_villa_terrasse.png"
            alt="Villa contemporaine en terrasse avec vue sur le territoire"
            fill
            sizes="(min-width: 1024px) 53vw, 100vw"
            className="object-cover object-[50%_42%]"
            preload
          />
        </div>
      </div>
    </section>
  );
}
