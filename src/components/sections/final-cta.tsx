export function FinalCta() {
  return (
    <section id="contact" className="bg-olive text-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-16 text-center sm:px-10 sm:py-20">
        <h2 className="mx-auto max-w-[18ch] font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.025em] text-paper sm:text-4xl">
          Un projet à étudier ?
        </h2>
        <p className="mx-auto mt-5 max-w-[46ch] text-[17px] leading-relaxed text-paper/85">
          Faisons le point sur son potentiel et sa faisabilité.
        </p>

        <div className="mt-9 flex justify-center">
          {/*
            Emplacement prévu pour le futur formulaire qualifié
            Particulier / Professionnel. À remplacer par un lien
            ou une action réelle dès sa mise en ligne.
          */}
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md bg-paper px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-mineral"
          >
            Étudier mon projet
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
