const STEPS = [
  {
    number: "01",
    title: "Comprendre",
    description: "Bien, objectif, contexte et contraintes.",
  },
  {
    number: "02",
    title: "Vérifier",
    description: "Urbanisme, PLU, réglementation, faisabilité et contraintes techniques.",
  },
  {
    number: "03",
    title: "Optimiser",
    description: "Scénarios, programme, surfaces, organisation et potentiel.",
  },
  {
    number: "04",
    title: "Concrétiser",
    description:
      "Accompagnement du projet jusqu'au dépôt des autorisations nécessaires.",
  },
];

export function Method() {
  return (
    <section
      id="etude-faisabilite"
      className="border-b border-line-on-charcoal bg-charcoal text-on-charcoal"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10 sm:py-28">
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-on-charcoal-soft">
          <span className="h-px w-8 bg-clay" />
          Étude &amp; faisabilité
        </div>
        <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight text-on-charcoal sm:text-4xl">
          Méthode
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-4">
          <div className="border-t border-line-on-charcoal pt-6">
            <span className="font-display text-sm text-on-charcoal-soft">
              {STEPS[0].number}
            </span>
            <h3 className="mt-3 font-display text-xl font-medium text-on-charcoal">
              {STEPS[0].title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-on-charcoal-soft">
              {STEPS[0].description}
            </p>
          </div>

          <div className="border-t border-line-on-charcoal pt-6">
            <span className="font-display text-sm text-on-charcoal-soft">
              {STEPS[1].number}
            </span>
            <h3 className="mt-3 font-display text-xl font-medium text-on-charcoal">
              {STEPS[1].title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-on-charcoal-soft">
              {STEPS[1].description}
            </p>
          </div>

          <div
            id="permis-accompagnement"
            className="border-t border-line-on-charcoal pt-6"
          >
            <span className="font-display text-sm text-on-charcoal-soft">
              {STEPS[2].number}
            </span>
            <h3 className="mt-3 font-display text-xl font-medium text-on-charcoal">
              {STEPS[2].title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-on-charcoal-soft">
              {STEPS[2].description}
            </p>
          </div>

          <div className="border-t border-line-on-charcoal pt-6">
            <span className="font-display text-sm text-on-charcoal-soft">
              {STEPS[3].number}
            </span>
            <h3 className="mt-3 font-display text-xl font-medium text-on-charcoal">
              {STEPS[3].title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-on-charcoal-soft">
              {STEPS[3].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
