export function FinalCta() {
  return (
    <section id="contact" className="bg-olive text-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-20 text-center sm:px-10 sm:py-28">
        <h2 className="mx-auto max-w-[18ch] font-display text-3xl font-bold leading-tight tracking-tight text-paper sm:text-4xl lg:text-5xl">
          Étudier mon projet
        </h2>
        <p className="mx-auto mt-6 max-w-[46ch] text-lg leading-relaxed text-paper/85">
          Décrivez votre bien ou votre projet : nous vous recontactons pour
          en évaluer la faisabilité.
        </p>

        <div className="mt-10 flex justify-center">
          {/*
            Emplacement prévu pour le futur formulaire qualifié
            Particulier / Professionnel. À remplacer par un lien
            ou une action réelle dès sa mise en ligne.
          */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-charcoal px-8 py-3.5 text-sm font-medium text-on-charcoal transition-colors hover:bg-charcoal-soft"
          >
            Étudier mon projet
          </button>
        </div>
      </div>
    </section>
  );
}
