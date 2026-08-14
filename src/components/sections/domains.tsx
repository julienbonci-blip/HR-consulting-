import Image from "next/image";

export function Domains() {
  return (
    <section id="domaines-intervention" className="border-b border-mineral">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10 sm:py-28">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
          <span className="h-px w-8 bg-bronze" />
          Secteurs d&apos;intervention
        </div>

        <h2 className="mt-6 max-w-[22ch] font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.025em] text-ink sm:text-5xl">
          Un projet, plusieurs façons de créer de la valeur
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2">
          {/* 01 — Terrain */}
          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
              <Image
                src="/KERN_photos_v2/02_terrain_aerien.png"
                alt="Vue aérienne d'une réserve de terrain à fort potentiel foncier"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6">
              <span className="font-display text-sm font-bold text-bronze">
                01
              </span>
              <h3 className="mt-2 font-display text-[26px] font-bold tracking-[-0.01em] text-ink sm:text-3xl">
                Terrain
              </h3>
              <p className="mt-2 max-w-[38ch] text-[17px] leading-relaxed text-ink-soft">
                Construire, diviser, densifier, optimiser.
              </p>
            </div>
          </div>

          {/* 02 — Bâti existant : vraie photographie, olive en accent */}
          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
              <Image
                src="/KERN_photos_v2/07_bati_existant_facade.png"
                alt="Façade d'un immeuble existant à restructurer"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6">
              <span className="font-display text-sm font-bold text-olive">
                02
              </span>
              <h3 className="mt-2 font-display text-[26px] font-bold tracking-[-0.01em] text-ink sm:text-3xl">
                Bâti existant
              </h3>
              <p className="mt-2 max-w-[38ch] text-[17px] leading-relaxed text-ink-soft">
                Transformer, restructurer, changer de destination.
              </p>
            </div>
          </div>

          {/* 03 — Commerce / RDC */}
          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
              <Image
                src="/KERN_photos_v2/08_commerce_rdc_vitrine.png"
                alt="Vitrine d'un commerce en rez-de-chaussée à réinventer"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6">
              <span className="font-display text-sm font-bold text-bronze">
                03
              </span>
              <h3 className="mt-2 font-display text-[26px] font-bold tracking-[-0.01em] text-ink sm:text-3xl">
                Commerce / RDC
              </h3>
              <p className="mt-2 max-w-[38ch] text-[17px] leading-relaxed text-ink-soft">
                Repositionner, restaurer, convertir ou adapter un local.
              </p>
            </div>
          </div>

          {/* 04 — Projet immobilier */}
          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
              <Image
                src="/KERN_photos_v2/04_projet_immobilier_residentiel.png"
                alt="Bâtiment résidentiel contemporain, opération immobilière"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6">
              <span className="font-display text-sm font-bold text-bronze">
                04
              </span>
              <h3 className="mt-2 font-display text-[26px] font-bold tracking-[-0.01em] text-ink sm:text-3xl">
                Projet immobilier
              </h3>
              <p className="mt-2 max-w-[38ch] text-[17px] leading-relaxed text-ink-soft">
                Sécuriser la faisabilité réglementaire, technique et
                opérationnelle avant d&apos;investir ou de déposer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
