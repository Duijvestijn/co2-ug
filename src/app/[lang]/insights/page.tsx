import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles } from "@/lib/articles";

const SUPPORTED = ["en"];
const BASE = "https://co2.ug";

const TAG_COLORS: Record<string, { pill: string; bar: string }> = {
  Conservation: { pill: "bg-ug-green text-white", bar: "bg-ug-green" },
  Policy:       { pill: "bg-ug-blue text-white",  bar: "bg-ug-blue" },
  Finance:      { pill: "bg-ug-gold text-white",  bar: "bg-ug-gold" },
};

const UI = {
  en: {
    label: "Market Intelligence",
    title: "Uganda Carbon Market Insights",
    subtitle: "Analysis of Uganda's growing carbon project pipeline, policy environment, and regional opportunities.",
    readMore: "Read article",
    readTime: "min read",
    backHome: "Back to home",
  },
};

export function generateStaticParams() {
  return [{ lang: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!SUPPORTED.includes(lang)) return {};
  return {
    title: "Uganda Carbon Market Insights — CO2.ug",
    description: "In-depth analysis on Uganda's carbon policy, project pipeline, and voluntary carbon market developments.",
    alternates: {
      canonical: `${BASE}/en/insights`,
      languages: { en: `${BASE}/en/insights`, "x-default": `${BASE}/en/insights` },
    },
  };
}

export default async function InsightsIndexPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!SUPPORTED.includes(lang)) notFound();
  const ui = UI.en;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-ug-page pt-28 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-3">
            <Link href={`/${lang}`} className="text-xs text-ug-muted hover:text-ug-green transition-colors font-medium tracking-wide">
              ← {ui.backHome}
            </Link>
          </div>

          <div className="max-w-2xl mb-14">
            <span className="text-xs tracking-[0.3em] uppercase text-ug-green font-bold inline-block mb-4">{ui.label}</span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-ug-ink mb-4 leading-tight">{ui.title}</h1>
            <p className="text-ug-muted text-lg leading-relaxed">{ui.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => {
              const colors = TAG_COLORS[article.tag] ?? { pill: "bg-ug-muted text-white", bar: "bg-ug-muted" };
              return (
                <Link
                  key={article.slug}
                  href={`/${lang}/insights/${article.slug}`}
                  className="group flex flex-col bg-white rounded-2xl shadow-sm border border-black/[0.06] hover:shadow-lg transition-all overflow-hidden"
                >
                  <div className={`h-1.5 ${colors.bar} w-full`} />
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${colors.pill}`}>
                        {article.tag}
                      </span>
                      <span className="text-ug-muted text-xs">{article.date}</span>
                    </div>
                    <h2 className="font-serif text-lg font-bold text-ug-ink leading-snug group-hover:text-ug-green transition-colors flex-1">
                      {article.title.en}
                    </h2>
                    <p className="text-ug-muted text-sm leading-relaxed line-clamp-3">{article.excerpt.en}</p>
                    <div className="flex items-center justify-between mt-auto pt-2">
                      <span className="flex items-center gap-1.5 text-ug-green font-semibold text-xs tracking-wide group-hover:gap-2.5 transition-all">
                        {ui.readMore}
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-ug-muted text-xs">{article.readTime} {ui.readTime}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      {/* Newsletter CTA */}
      <div className="bg-ug-dark py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-ug-green/70 font-bold block mb-3">
            Stay informed
          </span>
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Get new articles in your inbox
          </h2>
          <p className="text-white/50 mb-8 leading-relaxed text-sm">
            Join ~2,000 readers tracking carbon market developments.
          </p>
          <a
            href={`/${lang}#contact`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-ug-green hover:opacity-90 text-white font-bold rounded-full transition-opacity text-sm tracking-wide"
          >
            Subscribe via contact form
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
