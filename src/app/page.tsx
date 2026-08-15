import { Hero } from "@/components/sections/hero";
import { PhotoTransition } from "@/components/sections/photo-transition";
import { Domains } from "@/components/sections/domains";
import { Method } from "@/components/sections/method";
import { Transformation } from "@/components/sections/transformation";
import { Audiences } from "@/components/sections/audiences";
import { EditorialBreak } from "@/components/sections/editorial-break";
import { ProjectFormSection } from "@/components/sections/project-form-section";
import { FinalCta } from "@/components/sections/final-cta";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KERN",
  url: "https://kernstrategieimmo.fr",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Hero />
      <PhotoTransition />
      <Domains />
      <Method />
      <Transformation />
      <Audiences />
      <EditorialBreak />
      <ProjectFormSection />
      <FinalCta />
    </>
  );
}
