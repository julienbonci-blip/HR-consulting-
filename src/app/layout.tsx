import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Archivo } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: "variable",
});

const siteName = "KERN";
const siteDescription =
  "Étude de faisabilité, optimisation de projets, transformation d'actifs et accompagnement réglementaire jusqu'au permis.";

export const metadata: Metadata = {
  title: {
    default: `${siteName} — Conseil & valorisation foncière`,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    title: `${siteName} — Conseil & valorisation foncière`,
    description: siteDescription,
    siteName,
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
