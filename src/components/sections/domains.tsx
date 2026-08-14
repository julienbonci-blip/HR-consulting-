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

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* 01 — Terrain : photo pleine largeur en tête de bloc */}
          <div>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md">
              <Image
                src="/reference/kern-photos/02_vue_aerienne_territoire.jpg"
                alt="Vue aérienne d'un territoire à fort potentiel foncier"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
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

          {/* 02 — Bâti existant : bloc olive plein, sans photo */}
          <div className="flex flex-col justify-between rounded-md bg-olive p-8 sm:p-10 lg:min-h-full">
            <span className="font-display text-sm font-bold text-paper/70">
              02
            </span>
            <div className="mt-auto pt-16">
              <h3 className="font-display text-[26px] font-bold tracking-[-0.01em] text-paper sm:text-3xl">
                Bâti existant
              </h3>
              <p className="mt-2 max-w-[38ch] text-[17px] leading-relaxed text-paper/80">
                Transformer, restructurer, changer de destination.
              </p>
            </div>
          </div>

          {/* 03 — Commerce / RDC : composition texte à gauche, photo à droite */}
          <div className="flex flex-col items-start gap-6 self-start sm:flex-row">
            <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-md sm:w-3/5">
              <Image
                src="/reference/kern-photos/09_commerce_rdc_vitrine.jpg"
                alt="Vitrine d'un commerce en rez-de-chaussée"
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-end sm:w-2/5">
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

          {/* 04 — Projet immobilier : photo portrait plus haute */}
          <div>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md sm:aspect-[16/10]">
              <Image
                src="/reference/kern-photos/04_batiment_residentiel_contemporain.jpg"
                alt="Bâtiment résidentiel contemporain"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
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
