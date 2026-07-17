import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles, getArticle, getAllSlugs } from "@/lib/articles";

const SUPPORTED = ["en"];
const BASE = "https://co2.ug";

const TAG_COLORS: Record<string, { pill: string; bar: string }> = {
  Conservation: { pill: "bg-ug-green text-white", bar: "bg-ug-green" },
  Policy:       { pill: "bg-ug-blue text-white",  bar: "bg-ug-blue" },
  Finance:      { pill: "bg-ug-gold text-white",  bar: "bg-ug-gold" },
};

const UI = {
  en: {
    breadcrumbHome: "Home",
    breadcrumbInsights: "Insights",
    readTime: "min read",
    backInsights: "← All articles",
    related: "Related articles",
    ctaTitle: "Partner with Green Earth Group in Uganda",
    ctaDesc: "We work with governments, investors, landowners, and project developers across Uganda.",
    ctaBtn: "Start a conversation",
  },
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!SUPPORTED.includes(lang)) return {};
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title.en} — CO2.ug`,
    description: article.excerpt.en,
    keywords: ["carbon credits Uganda", "Uganda carbon market", article.tag.toLowerCase(), "Verra VCS Uganda"],
    openGraph: {
      title: article.title.en,
      description: article.excerpt.en,
      type: "article",
      publishedTime: article.date,
      url: `${BASE}/${lang}/insights/${slug}`,
    },
    alternates: {
      canonical: `${BASE}/en/insights/${slug}`,
      languages: {
        en: `${BASE}/en/insights/${slug}`,
        "x-default": `${BASE}/en/insights/${slug}`,
      },
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!SUPPORTED.includes(lang)) notFound();
  const article = getArticle(slug);
  if (!article) notFound();

  const colors = TAG_COLORS[article.tag] ?? { pill: "bg-ug-muted text-white", bar: "bg-ug-green" };
  const ui = UI.en;

  const related = articles.filter((a) => a.slug !== slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title.en,
    description: article.excerpt.en,
    datePublished: article.date,
    publisher: { "@type": "Organization", name: "CO2.ug", url: BASE },
    url: `${BASE}/${lang}/insights/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main className="min-h-screen bg-ug-page">
        {/* Hero / header */}
        <div className="bg-ug-dark pt-28 pb-16">
          <div className="max-w-3xl mx-auto px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/40 text-xs mb-8">
              <Link href={`/${lang}`} className="hover:text-white/70 transition-colors">{ui.breadcrumbHome}</Link>
              <span>/</span>
              <Link href={`/${lang}/insights`} className="hover:text-white/70 transition-colors">{ui.breadcrumbInsights}</Link>
              <span>/</span>
              <span className="text-white/60 truncate max-w-[200px]">{article.tag}</span>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${colors.pill}`}>
                {article.tag}
              </span>
              <span className="text-white/40 text-xs">{article.date}</span>
              <span className="text-white/40 text-xs">· {article.readTime} {ui.readTime}</span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {article.title.en}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">{article.excerpt.en}</p>
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-3xl mx-auto px-6 py-14">
          <div
            className="prose-ug"
            dangerouslySetInnerHTML={{ __html: article.content.en }}
          />

          {/* Back link */}
          <div className="mt-14 pt-8 border-t border-ug-ink/10">
            <Link href={`/${lang}/insights`} className="text-ug-green font-semibold text-sm hover:underline">
              {ui.backInsights}
            </Link>
          </div>
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <div className="bg-ug-stone py-16">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="font-serif text-2xl font-bold text-ug-ink mb-8">{ui.related}</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {related.map((rel) => {
                  const relColors = TAG_COLORS[rel.tag] ?? { pill: "bg-ug-muted text-white", bar: "bg-ug-muted" };
                  return (
                    <Link
                      key={rel.slug}
                      href={`/${lang}/insights/${rel.slug}`}
                      className="group flex flex-col bg-white rounded-2xl shadow-sm border border-black/[0.06] hover:shadow-lg transition-all overflow-hidden"
                    >
                      <div className={`h-1.5 ${relColors.bar} w-full`} />
                      <div className="p-6 flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${relColors.pill}`}>
                            {rel.tag}
                          </span>
                          <span className="text-ug-muted text-xs">{rel.date}</span>
                        </div>
                        <h3 className="font-serif text-base font-bold text-ug-ink leading-snug group-hover:text-ug-green transition-colors">
                          {rel.title.en}
                        </h3>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-ug-dark py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl font-bold text-white mb-4">{ui.ctaTitle}</h2>
            <p className="text-white/60 mb-8 leading-relaxed">{ui.ctaDesc}</p>
            <Link
              href={`/${lang}#contact`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-ug-green hover:bg-ug-green-light text-white font-bold rounded-full transition-colors text-sm tracking-wide"
            >
              {ui.ctaBtn}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
