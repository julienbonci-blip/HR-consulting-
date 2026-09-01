import type { Metadata } from "next";
import Link from "next/link";
import { LeadConversion } from "@/components/analytics/lead-conversion";

export const metadata: Metadata = {
  title: "Merci",
  robots: {
    index: false,
    follow: true,
  },
};

export default function MerciPage() {
  return (
    <section className="bg-paper">
      <LeadConversion />
      <div className="mx-auto max-w-[620px] px-6 py-24 text-center sm:px-10">
        <h1 className="font-display text-[28px] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-4xl">
          Merci, votre demande a bien été envoyée.
        </h1>
        <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
          Nous revenons vers vous rapidement après étude de votre projet.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-olive px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-olive-dark"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </section>
  );
}
