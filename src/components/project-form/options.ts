export type ProfileType = "particulier" | "professionnel";

export interface ProjectFormState {
  profile: ProfileType | "";
  // Particulier — étape Projet
  projectType: string;
  // Professionnel — étape Projet
  proType: string;
  assetNature: string;
  // Partagé — étape Projet
  location: string;
  stage: string;
  // Étape Besoin
  needs: string[];
  description: string;
  documents: string[]; // Particulier uniquement
  timing: string;
  // Étape Coordonnées
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string; // Professionnel uniquement
  contactPreference: string;
  consent: boolean;
  // Anti-spam — doit rester vide
  honeypot: string;
}

export const INITIAL_FORM_STATE: ProjectFormState = {
  profile: "",
  projectType: "",
  proType: "",
  assetNature: "",
  location: "",
  stage: "",
  needs: [],
  description: "",
  documents: [],
  timing: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  contactPreference: "",
  consent: false,
  honeypot: "",
};

export const PARTICULIER_PROJECT_TYPES = [
  "Un terrain",
  "Une division parcellaire",
  "Une construction",
  "Une extension",
  "Une transformation / rénovation",
  "Un changement de destination",
  "Un commerce / local",
  "Autre",
];

export const PARTICULIER_STATUS = [
  "Je réfléchis au projet",
  "J'ai identifié un bien / terrain",
  "Je suis propriétaire",
  "J'ai déjà des plans / études",
  "J'ai déjà échangé avec la mairie",
  "J'ai rencontré un blocage",
  "Autre",
];

export const PARTICULIER_NEEDS = [
  "Vérifier la faisabilité",
  "Comprendre ce que je peux construire / transformer",
  "Optimiser le potentiel du bien",
  "Être accompagné jusqu'au permis / autorisation",
  "Sécuriser un achat avant engagement",
  "Autre",
];

export const PARTICULIER_DOCUMENTS = [
  "Plan cadastral",
  "PLU / informations urbanisme",
  "Plans existants",
  "Photos",
  "Étude / devis / document technique",
  "Aucun pour le moment",
];

export const PARTICULIER_TIMING = [
  "Dès que possible",
  "Sous 1 à 3 mois",
  "Sous 3 à 6 mois",
  "Plus tard",
  "Je ne sais pas encore",
];

export const PRO_TYPES = [
  "Promoteur / marchand de biens",
  "Investisseur",
  "Foncière",
  "Exploitant",
  "Restaurateur / hôtelier",
  "Commerçant",
  "Architecte / maître d'œuvre",
  "Entreprise",
  "Autre professionnel",
];

export const PRO_ASSET_NATURE = [
  "Terrain",
  "Immeuble",
  "Commerce / RDC",
  "Restaurant",
  "Hôtel / hospitality",
  "Logement",
  "Bureaux",
  "Actif à transformer",
  "Autre",
];

export const PRO_STAGE = [
  "Sourcing / opportunité",
  "Avant offre",
  "Sous promesse",
  "Propriétaire de l'actif",
  "Études en cours",
  "Projet bloqué",
  "Autorisations à préparer",
  "Autre",
];

export const PRO_NEEDS = [
  "Étude de faisabilité",
  "Audit réglementaire / urbanisme",
  "Analyse du potentiel constructible",
  "Transformation d'actif",
  "Changement de destination",
  "Restructuration",
  "Optimisation de programme",
  "Sécurisation avant acquisition",
  "Accompagnement autorisations / permis",
  "Autre",
];

export const PRO_TIMING = [
  "Très urgent",
  "Moins d'1 mois",
  "1 à 3 mois",
  "3 à 6 mois",
  "Plus tard",
];

export const CONTACT_PREFERENCE = ["Téléphone", "Email", "Peu importe"];

export const DESCRIPTION_MIN_LENGTH = 30;
