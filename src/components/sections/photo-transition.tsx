import Image from "next/image";

export function PhotoTransition() {
  return (
    <div className="border-b border-mineral bg-paper">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-12 lg:gap-6">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md lg:col-span-7">
          <Image
            src="/reference/kern-photos/02_vue_aerienne_territoire.jpg"
            alt="Vue aérienne d'un territoire, foncier et potentiel d'un site"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover object-[center_38%]"
          />
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md lg:col-span-4 lg:col-start-9">
          <Image
            src="/reference/kern-photos/03_restaurant_hospitality_interieur.jpg"
            alt="Intérieur transformé, ambiance hospitality"
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
