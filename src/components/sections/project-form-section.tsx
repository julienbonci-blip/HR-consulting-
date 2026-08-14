import { ProjectForm } from "@/components/project-form/project-form";

export function ProjectFormSection() {
  return (
    <section id="etudier-mon-projet" className="border-b border-mineral bg-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10 sm:py-28">
        <ProjectForm />
      </div>
    </section>
  );
}
