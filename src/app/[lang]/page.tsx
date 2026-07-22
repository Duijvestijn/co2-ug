import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ImpactStatsBar from "@/components/ImpactStatsBar";
import WhatIsSection from "@/components/WhatIsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyUgandaSection from "@/components/WhyUgandaSection";
import OpportunitySection from "@/components/OpportunitySection";
import StandardsSection from "@/components/StandardsSection";
import ProjectsSection from "@/components/ProjectsSection";
import FlagshipProjectSection from "@/components/FlagshipProjectSection";
import InsightsSection from "@/components/InsightsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import { translations } from "@/lib/translations";

const SUPPORTED = ["en"];

export default async function LangPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!SUPPORTED.includes(lang)) notFound();

  const faqData = translations.faq.en;
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main>
        <HeroSection />
        <ImpactStatsBar />
        <WhatIsSection />
        <HowItWorksSection />
        <WhyUgandaSection />
        <OpportunitySection />
        <StandardsSection />
        <ProjectsSection />
        <FlagshipProjectSection />
        <InsightsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
