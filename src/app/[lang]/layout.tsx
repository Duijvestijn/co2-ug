import { notFound } from "next/navigation";
import { LangProvider, type Lang } from "@/lib/LangContext";

const SUPPORTED: Lang[] = ["en"];
const BASE = "https://co2.ug";

const TITLES: Record<Lang, string> = {
  en: "CO2.ug — The Pearl of Africa's Carbon Opportunity",
};
const DESCS: Record<Lang, string> = {
  en: "Uganda's extraordinary biodiversity — Bwindi, Kibale, Lake Victoria, and the Albertine Rift — represents one of the world's most significant untapped carbon markets.",
};

export function generateStaticParams() {
  return SUPPORTED.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = (SUPPORTED.includes(rawLang as Lang) ? rawLang : "en") as Lang;
  return {
    title: TITLES[lang],
    description: DESCS[lang],
    alternates: {
      canonical: `${BASE}/${lang}`,
      languages: { en: `${BASE}/en`, "x-default": `${BASE}/en` },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!SUPPORTED.includes(lang as Lang)) notFound();
  return <LangProvider initialLang={lang as Lang}>{children}</LangProvider>;
}
