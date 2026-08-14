import Image from "next/image";

const PHOTOS = [
  {
    src: "/reference/kern-photos/02_vue_aerienne_territoire.jpg",
    alt: "Vue aérienne d'un territoire et de son bâti",
    className: "col-span-4 row-span-3 sm:col-span-3",
  },
  {
    src: "/reference/kern-photos/03_restaurant_hospitality_interieur.jpg",
    alt: "Intérieur d'un restaurant, ambiance hospitality",
    className: "col-span-2 row-span-5 sm:col-span-3",
  },
  {
    src: "/reference/kern-photos/05_matiere_ombre_feuillage.jpg",
    alt: "Matière et lumière, détail de façade et feuillage",
    className: "col-span-2 row-span-2 sm:col-span-2",
  },
  {
    src: "/reference/kern-photos/06_cafe_restaurant_interieur.jpg",
    alt: "Intérieur d'un café-restaurant",
    className: "col-span-2 row-span-3 sm:col-span-2",
  },
  {
    src: "/reference/kern-photos/08_terrasse_vegetalisee.jpg",
    alt: "Terrasse végétalisée d'un immeuble contemporain",
    className: "col-span-4 row-span-2 sm:col-span-2",
  },
];

export function PhotoStrip() {
  return (
    <div className="border-b border-mineral bg-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10 sm:py-14">
        <div className="grid grid-cols-4 gap-3 [grid-auto-rows:64px] sm:grid-cols-6 sm:gap-4">
          {PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className={`relative overflow-hidden rounded-md ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
