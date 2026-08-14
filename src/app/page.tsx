import { Hero } from "@/components/sections/hero";
import { PhotoStrip } from "@/components/sections/photo-strip";
import { Domains } from "@/components/sections/domains";
import { Method } from "@/components/sections/method";
import { Transformation } from "@/components/sections/transformation";
import { Audiences } from "@/components/sections/audiences";
import { EditorialBreak } from "@/components/sections/editorial-break";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <PhotoStrip />
      <Domains />
      <Method />
      <Transformation />
      <Audiences />
      <EditorialBreak />
      <FinalCta />
    </>
  );
}
