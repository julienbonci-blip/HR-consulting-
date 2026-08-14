import Image from "next/image";
import Link from "next/link";

export function EditorialBreak() {
  return (
    <div className="border-b border-mineral bg-paper">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-20 sm:px-10 sm:py-28 lg:flex-row lg:items-center lg:gap-10">
        <div className="relative h-[320px] w-full overflow-hidden rounded-md sm:h-[420px] lg:h-[520px] lg:w-[70%]">
          <Image
            src="/reference/kern-photos/08_terrasse_vegetalisee.jpg"
            alt="Terrasse végétalisée d'un immeuble contemporain"
            fill
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="lg:w-[30%]">
          <h2 className="max-w-[16ch] font-display text-[32px] font-extrabold leading-[1.05] tracking-[-0.025em] text-ink sm:text-4xl">
            Des lieux qui créent de la valeur
          </h2>
          <p className="mt-5 max-w-[36ch] text-[17px] leading-relaxed text-ink-soft">
            Chaque actif porte un potentiel à révéler, structurer et
            transformer.
          </p>
          <Link
            href="#etude-faisabilite"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-olive transition-colors hover:text-olive-dark"
          >
            Découvrir notre approche
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
