import { Hero } from "@/components/sections/hero";
import { Domains } from "@/components/sections/domains";
import { Method } from "@/components/sections/method";
import { Transformation } from "@/components/sections/transformation";
import { Audiences } from "@/components/sections/audiences";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Domains />
      <Method />
      <Transformation />
      <Audiences />
      <FinalCta />
    </>
  );
}
