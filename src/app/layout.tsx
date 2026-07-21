import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import "./globals.css";
import LenisProvider from "@/lib/LenisProvider";
import Script from "next/script";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CO2.ug",
  alternateName: ["Uganda Carbon Credits", "Uganda Carbon Market"],
  url: "https://co2.ug",
  description:
    "Uganda's carbon credit platform — protecting Bulindi chimpanzee habitat, Kibale, Lake Victoria wetlands, and the Albertine Rift under Verra VCS.",
  areaServed: { "@type": "Country", name: "Uganda" },
  knowsAbout: [
    "Carbon Credits", "Uganda Carbon Market", "Bulindi agroforestry carbon",
    "Kibale Biodiversity", "Lake Victoria Blue Carbon", "Verra VCS", "Albertine Rift",
  ],
};

export const metadata: Metadata = {
  title: {
    default: "CO2.ug — The Pearl of Africa's Carbon Opportunity",
    template: "%s",
  },
  description:
    "Uganda's extraordinary biodiversity — Bulindi Chimpanzee Conservation, Kibale chimpanzee sanctuary, and Lake Victoria shores — represents one of the world's most significant untapped carbon markets.",
  keywords: [
    "carbon credits Uganda", "Uganda carbon market", "agroforestry carbon Uganda",
    "Kibale carbon", "Lake Victoria blue carbon", "Albertine Rift reforestation",
    "Uganda forest carbon", "Pearl of Africa carbon",
  ],
  openGraph: {
    type: "website",
    siteName: "CO2.ug",
    url: "https://co2.ug",
    title: "CO2.ug — The Pearl of Africa's Carbon Opportunity",
    description: "Uganda holds extraordinary untapped carbon market potential.",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "CO2.ug — Uganda Carbon Credits" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.svg"],
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
      <Script id="gtm-loader" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MG3P5X46');`}
      </Script>
      <body className="bg-ug-dark text-ug-sand antialiased overflow-x-hidden font-sans">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MG3P5X46"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <LenisProvider>{children}</LenisProvider>
        <Script id="hs-script-loader" src="//js.hs-scripts.com/8515463.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
