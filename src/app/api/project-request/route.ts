import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  DESCRIPTION_MIN_LENGTH,
  type ProjectFormState,
} from "@/components/project-form/options";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FROM_EMAIL = "KERN <onboarding@resend.dev>";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function validate(data: Partial<ProjectFormState>): string | null {
  if (data.profile !== "particulier" && data.profile !== "professionnel") {
    return "Profil invalide.";
  }
  if (!data.firstName?.trim()) return "Prénom requis.";
  if (!data.lastName?.trim()) return "Nom requis.";
  if (!data.email?.trim() || !EMAIL_PATTERN.test(data.email.trim())) {
    return "Email invalide.";
  }
  if (!data.phone?.trim()) return "Téléphone requis.";
  if (!data.location?.trim()) return "Localisation requise.";
  if (!data.description || data.description.trim().length < DESCRIPTION_MIN_LENGTH) {
    return `La description doit contenir au moins ${DESCRIPTION_MIN_LENGTH} caractères.`;
  }
  if (data.profile === "professionnel" && !data.company?.trim()) {
    return "Société requise.";
  }
  if (!data.consent) return "Consentement requis.";
  return null;
}

function list(items: string[] | undefined): string {
  if (!items || items.length === 0) return "—";
  return items.join(", ");
}

function buildInternalEmail(data: ProjectFormState) {
  const isPro = data.profile === "professionnel";
  const fullName = `${data.firstName} ${data.lastName}`.trim();
  const subjectSubject = isPro ? data.company || fullName : fullName;
  const subject = isPro
    ? `[KERN] Nouvelle demande Professionnel — ${subjectSubject} — ${data.location}`
    : `[KERN] Nouvelle demande Particulier — ${subjectSubject} — ${data.location}`;

  const projectTypeLine = isPro
    ? `${data.proType || "—"} — ${data.assetNature || "—"}`
    : data.projectType || "—";

  const rows: { section: string; lines: [string, string][] }[] = [
    {
      section: "TYPE DE DEMANDE",
      lines: [["Profil", isPro ? "Professionnel" : "Particulier"]],
    },
    {
      section: "CONTACT",
      lines: [
        ["Prénom", data.firstName],
        ["Nom", data.lastName],
        ["Email", data.email],
        ["Téléphone", data.phone],
        ...(isPro ? ([["Société", data.company]] as [string, string][]) : []),
        ["Préférence de contact", data.contactPreference || "—"],
      ],
    },
    {
      section: "PROJET",
      lines: [
        ["Type de projet / actif", projectTypeLine],
        ["Localisation", data.location],
        ["Stade", data.stage || "—"],
        ["Calendrier / timing", data.timing || "—"],
      ],
    },
    {
      section: "BESOIN",
      lines: [["Besoins sélectionnés", list(data.needs)]],
    },
    {
      section: "DESCRIPTION",
      lines: [["Description", data.description]],
    },
    ...(!isPro
      ? [
          {
            section: "DOCUMENTS DISPONIBLES",
            lines: [["Documents", list(data.documents)]] as [string, string][],
          },
        ]
      : []),
  ];

  const text = rows
    .map(
      (block) =>
        `${block.section}\n${block.lines.map(([k, v]) => `${k} : ${v}`).join("\n")}`
    )
    .join("\n\n");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;background:#F7F5F1;padding:24px;color:#1D1D1B;">
      <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #DAD8D2;border-radius:8px;overflow:hidden;">
        <div style="background:#1D1D1B;padding:20px 24px;">
          <span style="color:#F7F5F1;font-size:18px;font-weight:700;letter-spacing:-0.01em;">KERN</span>
          <span style="color:#A78963;font-size:11px;text-transform:uppercase;letter-spacing:0.14em;margin-left:10px;">Nouvelle demande</span>
        </div>
        <div style="padding:24px;">
          ${rows
            .map(
              (block) => `
            <div style="margin-bottom:20px;">
              <p style="margin:0 0 8px 0;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.14em;color:#A78963;">${escapeHtml(block.section)}</p>
              ${block.lines
                .map(
                  ([k, v]) => `
                <p style="margin:0 0 4px 0;font-size:14px;line-height:1.5;color:#1D1D1B;">
                  <strong style="color:#44443F;">${escapeHtml(k)} :</strong> ${escapeHtml(v).replace(/\n/g, "<br />")}
                </p>`
                )
                .join("")}
            </div>`
            )
            .join("")}
        </div>
      </div>
    </div>
  `;

  return { subject, text, html };
}

function buildProspectEmail(data: ProjectFormState) {
  const subject = "Votre demande a bien été reçue — KERN";
  const text = `Bonjour ${data.firstName},

Votre demande a bien été reçue.

Nous avons désormais les premières informations nécessaires pour comprendre votre projet et reviendrons vers vous rapidement.

KERN
Conseil & stratégie immobilière`;

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;background:#F7F5F1;padding:24px;color:#1D1D1B;">
      <div style="max-width:520px;margin:0 auto;background:#ffffff;border:1px solid #DAD8D2;border-radius:8px;padding:32px;">
        <p style="margin:0 0 16px 0;font-size:16px;line-height:1.6;">Bonjour ${escapeHtml(data.firstName)},</p>
        <p style="margin:0 0 16px 0;font-size:16px;line-height:1.6;">Votre demande a bien été reçue.</p>
        <p style="margin:0 0 24px 0;font-size:16px;line-height:1.6;">
          Nous avons désormais les premières informations nécessaires pour
          comprendre votre projet et reviendrons vers vous rapidement.
        </p>
        <p style="margin:0;font-size:15px;font-weight:700;color:#1D1D1B;">KERN</p>
        <p style="margin:2px 0 0 0;font-size:12px;text-transform:uppercase;letter-spacing:0.12em;color:#A78963;">
          Conseil &amp; stratégie immobilière
        </p>
      </div>
    </div>
  `;

  return { subject, text, html };
}

export async function POST(request: Request) {
  let data: ProjectFormState;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Honeypot — un bot ayant rempli ce champ reçoit un faux succès silencieux.
  if (data.honeypot && data.honeypot.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const validationError = validate(data);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactTo = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !contactTo) {
    console.error(
      "project-request: RESEND_API_KEY ou CONTACT_TO_EMAIL manquante côté serveur."
    );
    return NextResponse.json(
      { error: "Configuration serveur indisponible. Merci de réessayer plus tard." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const internal = buildInternalEmail(data);
    const prospect = buildProspectEmail(data);

    const internalResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: contactTo,
      subject: internal.subject,
      html: internal.html,
      text: internal.text,
      replyTo: data.email,
    });

    if (internalResult.error) {
      console.error("project-request: échec envoi email interne", internalResult.error);
      return NextResponse.json(
        { error: "Une erreur est survenue lors de l'envoi. Merci de réessayer." },
        { status: 502 }
      );
    }

    const prospectResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: prospect.subject,
      html: prospect.html,
      text: prospect.text,
    });

    if (prospectResult.error) {
      // L'email interne est parti : on ne bloque pas l'utilisateur pour l'accusé de réception.
      console.error(
        "project-request: échec envoi email de confirmation prospect",
        prospectResult.error
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("project-request: erreur inattendue", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi. Merci de réessayer." },
      { status: 500 }
    );
  }
}
