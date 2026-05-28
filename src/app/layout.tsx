import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import "./globals.css";
import LenisProvider from "@/lib/LenisProvider";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CO2.ug",
  alternateName: ["Uganda Carbon Credits", "Uganda Carbon Market"],
  url: "https://co2.ug",
  description:
    "Uganda's carbon credit platform — protecting Bwindi Forest, Kibale, Lake Victoria wetlands, and the Albertine Rift under Verra VCS.",
  areaServed: { "@type": "Country", name: "Uganda" },
  knowsAbout: [
    "Carbon Credits", "Uganda Carbon Market", "Bwindi REDD+",
    "Kibale Biodiversity", "Lake Victoria Blue Carbon", "Verra VCS", "Albertine Rift",
  ],
};

export const metadata: Metadata = {
  title: {
    default: "CO2.ug — The Pearl of Africa's Carbon Opportunity",
    template: "%s | CO2.ug",
  },
  description:
    "Uganda's extraordinary biodiversity — Bwindi Impenetrable Forest, Kibale chimpanzee sanctuary, and Lake Victoria shores — represents one of the world's most significant untapped carbon markets.",
  keywords: [
    "carbon credits Uganda", "Uganda carbon market", "Bwindi REDD+",
    "Kibale carbon", "Lake Victoria blue carbon", "Albertine Rift reforestation",
    "Uganda forest carbon", "Pearl of Africa carbon",
  ],
  openGraph: {
    type: "website",
    siteName: "CO2.ug",
    url: "https://co2.ug",
    title: "CO2.ug — The Pearl of Africa's Carbon Opportunity",
    description: "Uganda holds extraordinary untapped carbon market potential.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://co2.ug"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="bg-ug-dark text-ug-sand antialiased overflow-x-hidden font-sans">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
