import Image from "next/image";

export function PhotoTransition() {
  return (
    <div className="border-b border-mineral bg-paper">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-12 lg:gap-6">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md lg:col-span-7">
          <Image
            src="/KERN_photos_v2/10_panorama_territoire_ville.png"
            alt="Panorama d'une ville et de son territoire"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md lg:col-span-4 lg:col-start-9">
          <Image
            src="/KERN_photos_v2/03_restaurant_hospitality.png"
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
