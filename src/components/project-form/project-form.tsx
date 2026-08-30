"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  CheckboxOptionGroup,
  FieldError,
  FieldLabel,
  RadioOptionGroup,
  TextAreaField,
  TextField,
  TwoChoiceToggle,
} from "./form-fields";
import {
  CONTACT_PREFERENCE,
  DESCRIPTION_MIN_LENGTH,
  INITIAL_FORM_STATE,
  PARTICULIER_DOCUMENTS,
  PARTICULIER_NEEDS,
  PARTICULIER_PROJECT_TYPES,
  PARTICULIER_STATUS,
  PARTICULIER_TIMING,
  PRO_ASSET_NATURE,
  PRO_NEEDS,
  PRO_STAGE,
  PRO_TIMING,
  PRO_TYPES,
  type ProjectFormState,
} from "./options";
import { trackEvent } from "@/lib/gtag";

const STEP_LABELS = ["Profil", "Projet", "Besoin", "Coordonnées"];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Errors = Record<string, string>;
type Status = "idle" | "submitting" | "success" | "error";

function validateStep(step: number, data: ProjectFormState): Errors {
  const errors: Errors = {};

  if (step === 0) {
    if (!data.profile) errors.profile = "Merci de sélectionner une option.";
    return errors;
  }

  if (step === 1) {
    if (!data.location.trim()) errors.location = "Merci de préciser la localisation.";
    if (data.profile === "particulier") {
      if (!data.projectType) errors.projectType = "Merci de sélectionner une option.";
      if (!data.stage) errors.stage = "Merci de sélectionner une option.";
    } else {
      if (!data.proType) errors.proType = "Merci de sélectionner une option.";
      if (!data.assetNature) errors.assetNature = "Merci de sélectionner une option.";
      if (!data.stage) errors.stage = "Merci de sélectionner une option.";
    }
    return errors;
  }

  if (step === 2) {
    if (data.needs.length === 0) errors.needs = "Sélectionnez au moins un élément.";
    if (data.description.trim().length < DESCRIPTION_MIN_LENGTH) {
      errors.description = `Merci de décrire votre projet en au moins ${DESCRIPTION_MIN_LENGTH} caractères.`;
    }
    return errors;
  }

  if (step === 3) {
    if (!data.firstName.trim()) errors.firstName = "Prénom requis.";
    if (!data.lastName.trim()) errors.lastName = "Nom requis.";
    if (!data.email.trim() || !EMAIL_PATTERN.test(data.email.trim())) {
      errors.email = "Merci de renseigner un email valide.";
    }
    if (!data.phone.trim()) errors.phone = "Téléphone requis.";
    if (data.profile === "professionnel" && !data.company.trim()) {
      errors.company = "Société requise.";
    }
    if (!data.contactPreference) {
      errors.contactPreference = "Merci de sélectionner une option.";
    }
    if (!data.consent) {
      errors.consent = "Merci d'accepter cette condition pour poursuivre.";
    }
    return errors;
  }

  return errors;
}

export function ProjectForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<ProjectFormState>(INITIAL_FORM_STATE);
  const [touchedSteps, setTouchedSteps] = useState<Record<number, boolean>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const update = <K extends keyof ProjectFormState>(key: K, value: ProjectFormState[K]) => {
    setData((d) => ({ ...d, [key]: value }));
  };

  const errors = touchedSteps[step] ? validateStep(step, data) : {};

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goNext = () => {
    const stepErrors = validateStep(step, data);
    if (Object.keys(stepErrors).length > 0) {
      setTouchedSteps((t) => ({ ...t, [step]: true }));
      return;
    }
    setStep((s) => Math.min(s + 1, 3));
    scrollToTop();
  };

  const goBack = () => {
    setStep((s) => Math.max(s - 1, 0));
    scrollToTop();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const stepErrors = validateStep(3, data);
    if (Object.keys(stepErrors).length > 0) {
      setTouchedSteps((t) => ({ ...t, 3: true }));
      return;
    }

    // Honeypot: silently pretend success without sending anything.
    if (data.honeypot.trim().length > 0) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setServerError(null);

    try {
      const res = await fetch("/api/project-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        setServerError(
          payload?.error ||
            "Une erreur est survenue lors de l'envoi. Merci de réessayer."
        );
        setStatus("error");
        return;
      }

      trackEvent("generate_lead", { lead_type: data.profile });
      router.push("/merci");
    } catch {
      setServerError(
        "Une erreur est survenue lors de l'envoi. Merci de vérifier votre connexion et réessayer."
      );
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div ref={topRef} className="mx-auto max-w-[620px] py-10 text-center">
        <h2 className="font-display text-[28px] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-4xl">
          Votre demande est bien partie.
        </h2>
        <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
          Merci. Nous avons maintenant les éléments nécessaires pour étudier
          votre projet et revenir vers vous.
        </p>
        <Link
          href="#accueil"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-olive px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-olive-dark"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    );
  }

  const isParticulier = data.profile === "particulier";
  const isProfessionnel = data.profile === "professionnel";

  return (
    <div ref={topRef} className="mx-auto max-w-[720px]">
      <div className="mb-10">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
          <span className="h-px w-8 bg-bronze" />
          Votre projet
        </div>
        <h2 className="mt-6 font-display text-[34px] font-extrabold leading-[1.05] tracking-[-0.025em] text-ink sm:text-4xl">
          Parlons de votre projet.
        </h2>
        <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-ink-soft">
          Quelques informations suffisent pour comprendre votre besoin et
          vous recontacter efficacement.
        </p>
        <p className="mt-2 text-sm text-ink-faint">
          2 minutes environ — aucune information inutile.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
          <span>
            Étape {String(step + 1).padStart(2, "0")} / 04 — {STEP_LABELS[step]}
          </span>
        </div>
        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-mineral">
          <div
            className="h-full rounded-full bg-olive transition-all duration-300"
            style={{ width: `${((step + 1) / 4) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* Honeypot — doit rester invisible et vide */}
        <div className="absolute left-[-9999px] top-0 h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor="website">Ne pas remplir ce champ</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={data.honeypot}
            onChange={(e) => update("honeypot", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-8">
          {step === 0 && (
            <div>
              <FieldLabel>Vous êtes :</FieldLabel>
              <div className="mt-3">
                <TwoChoiceToggle
                  name="profile"
                  value={data.profile}
                  onChange={(v) => update("profile", v as ProjectFormState["profile"])}
                  options={[
                    { value: "particulier", label: "Particulier" },
                    { value: "professionnel", label: "Professionnel" },
                  ]}
                />
              </div>
              <FieldError id="profile-error" message={errors.profile} />
            </div>
          )}

          {step === 1 && isParticulier && (
            <>
              <div>
                <FieldLabel>Votre projet concerne :</FieldLabel>
                <div className="mt-3">
                  <RadioOptionGroup
                    name="projectType"
                    columns={2}
                    options={PARTICULIER_PROJECT_TYPES}
                    value={data.projectType}
                    onChange={(v) => update("projectType", v)}
                  />
                </div>
                <FieldError id="projectType-error" message={errors.projectType} />
              </div>

              <TextField
                id="location"
                label="Où se situe le bien ou le terrain ?"
                placeholder="Ville, code postal ou adresse si connue"
                value={data.location}
                onChange={(v) => update("location", v)}
                error={errors.location}
              />

              <div>
                <FieldLabel>Où en êtes-vous ?</FieldLabel>
                <div className="mt-3">
                  <RadioOptionGroup
                    name="stage"
                    columns={1}
                    options={PARTICULIER_STATUS}
                    value={data.stage}
                    onChange={(v) => update("stage", v)}
                  />
                </div>
                <FieldError id="stage-error" message={errors.stage} />
              </div>
            </>
          )}

          {step === 1 && isProfessionnel && (
            <>
              <div>
                <FieldLabel>Vous êtes :</FieldLabel>
                <div className="mt-3">
                  <RadioOptionGroup
                    name="proType"
                    columns={2}
                    options={PRO_TYPES}
                    value={data.proType}
                    onChange={(v) => update("proType", v)}
                  />
                </div>
                <FieldError id="proType-error" message={errors.proType} />
              </div>

              <div>
                <FieldLabel>Nature de l&apos;actif / opération :</FieldLabel>
                <div className="mt-3">
                  <RadioOptionGroup
                    name="assetNature"
                    columns={2}
                    options={PRO_ASSET_NATURE}
                    value={data.assetNature}
                    onChange={(v) => update("assetNature", v)}
                  />
                </div>
                <FieldError id="assetNature-error" message={errors.assetNature} />
              </div>

              <TextField
                id="location"
                label="Localisation :"
                placeholder="Ville, code postal ou adresse si connue"
                value={data.location}
                onChange={(v) => update("location", v)}
                error={errors.location}
              />

              <div>
                <FieldLabel>Stade du projet :</FieldLabel>
                <div className="mt-3">
                  <RadioOptionGroup
                    name="stage"
                    columns={2}
                    options={PRO_STAGE}
                    value={data.stage}
                    onChange={(v) => update("stage", v)}
                  />
                </div>
                <FieldError id="stage-error" message={errors.stage} />
              </div>
            </>
          )}

          {step === 2 && isParticulier && (
            <>
              <div>
                <FieldLabel>Que souhaitez-vous obtenir ?</FieldLabel>
                <div className="mt-3">
                  <CheckboxOptionGroup
                    name="needs"
                    columns={2}
                    options={PARTICULIER_NEEDS}
                    values={data.needs}
                    onChange={(v) => update("needs", v)}
                  />
                </div>
                <FieldError id="needs-error" message={errors.needs} />
              </div>

              <TextAreaField
                id="description"
                label="Décrivez brièvement votre projet"
                placeholder="Ex. : terrain de 900 m² à diviser, extension d'une maison, transformation d'un local en logement…"
                value={data.description}
                onChange={(v) => update("description", v)}
                error={errors.description}
                minLength={DESCRIPTION_MIN_LENGTH}
              />

              <div>
                <FieldLabel>Avez-vous déjà des documents ?</FieldLabel>
                <div className="mt-3">
                  <CheckboxOptionGroup
                    name="documents"
                    columns={2}
                    options={PARTICULIER_DOCUMENTS}
                    values={data.documents}
                    onChange={(v) => update("documents", v)}
                  />
                </div>
              </div>

              <div>
                <FieldLabel>Votre calendrier</FieldLabel>
                <div className="mt-3">
                  <RadioOptionGroup
                    name="timing"
                    columns={2}
                    options={PARTICULIER_TIMING}
                    value={data.timing}
                    onChange={(v) => update("timing", v)}
                  />
                </div>
              </div>
            </>
          )}

          {step === 2 && isProfessionnel && (
            <>
              <div>
                <FieldLabel>Votre besoin :</FieldLabel>
                <div className="mt-3">
                  <CheckboxOptionGroup
                    name="needs"
                    columns={2}
                    options={PRO_NEEDS}
                    values={data.needs}
                    onChange={(v) => update("needs", v)}
                  />
                </div>
                <FieldError id="needs-error" message={errors.needs} />
              </div>

              <TextAreaField
                id="description"
                label="Décrivez l'opération"
                placeholder="Ex. : étude d'un RDC commercial à transformer en restauration, restructuration d'un immeuble, faisabilité avant acquisition d'un terrain…"
                value={data.description}
                onChange={(v) => update("description", v)}
                error={errors.description}
                minLength={DESCRIPTION_MIN_LENGTH}
              />

              <div>
                <FieldLabel>Timing :</FieldLabel>
                <div className="mt-3">
                  <RadioOptionGroup
                    name="timing"
                    columns={2}
                    options={PRO_TIMING}
                    value={data.timing}
                    onChange={(v) => update("timing", v)}
                  />
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <TextField
                  id="firstName"
                  label="Prénom"
                  autoComplete="given-name"
                  value={data.firstName}
                  onChange={(v) => update("firstName", v)}
                  error={errors.firstName}
                />
                <TextField
                  id="lastName"
                  label="Nom"
                  autoComplete="family-name"
                  value={data.lastName}
                  onChange={(v) => update("lastName", v)}
                  error={errors.lastName}
                />
              </div>

              <TextField
                id="email"
                label="Email"
                type="email"
                autoComplete="email"
                value={data.email}
                onChange={(v) => update("email", v)}
                error={errors.email}
              />

              <TextField
                id="phone"
                label="Téléphone"
                type="tel"
                autoComplete="tel"
                value={data.phone}
                onChange={(v) => update("phone", v)}
                error={errors.phone}
              />

              {isProfessionnel && (
                <TextField
                  id="company"
                  label="Société"
                  autoComplete="organization"
                  value={data.company}
                  onChange={(v) => update("company", v)}
                  error={errors.company}
                />
              )}

              <div>
                <FieldLabel>Comment préférez-vous être recontacté ?</FieldLabel>
                <div className="mt-3">
                  <RadioOptionGroup
                    name="contactPreference"
                    columns={2}
                    options={CONTACT_PREFERENCE}
                    value={data.contactPreference}
                    onChange={(v) => update("contactPreference", v)}
                  />
                </div>
                <FieldError id="contactPreference-error" message={errors.contactPreference} />
              </div>

              <div>
                <label htmlFor="consent" className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={data.consent}
                    onChange={(e) => update("consent", e.target.checked)}
                    aria-describedby={errors.consent ? "consent-error" : undefined}
                    className="mt-1 h-4 w-4 shrink-0 rounded-sm border border-mineral accent-olive"
                  />
                  <span className="text-sm leading-relaxed text-ink-soft">
                    J&apos;accepte que KERN utilise ces informations pour me
                    recontacter au sujet de ma demande.
                  </span>
                </label>
                <FieldError id="consent-error" message={errors.consent} />
              </div>

              {status === "error" && serverError && (
                <p role="alert" className="text-sm text-[#a6512f]">
                  {serverError}
                </p>
              )}
            </>
          )}
        </div>

        <div className="mt-10 flex items-center justify-between gap-4">
          {step > 0 ? (
            <button
              type="button"
              onClick={goBack}
              className="rounded-md border border-mineral px-6 py-3 text-sm font-semibold text-ink-soft transition-colors hover:border-ink-faint hover:text-ink"
            >
              Retour
            </button>
          ) : (
            <span />
          )}

          {step < 3 ? (
            <button
              key="continue-btn"
              type="button"
              onClick={goNext}
              className="rounded-md bg-olive px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-olive-dark"
            >
              Continuer
            </button>
          ) : (
            <button
              key="submit-btn"
              type="submit"
              disabled={status === "submitting"}
              className="rounded-md bg-olive px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-olive-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Envoi en cours…" : "Envoyer ma demande"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
