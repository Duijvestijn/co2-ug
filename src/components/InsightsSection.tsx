"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { delay: d, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
});

const TAG_STYLES: Record<string, string> = {
  Conservation: "bg-ug-green/10 text-ug-green border border-ug-green/20",
  Policy:       "bg-ug-blue/10 text-ug-blue border border-ug-blue/20",
  Finance:      "bg-ug-gold/10 text-ug-gold border border-ug-gold/20",
};

export default function InsightsSection() {
  const { lang } = useLang();
  const t = translations.insights[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="insights" className="bg-ug-stone py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.div variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-ug-green" />
              <span className="text-xs tracking-[0.25em] uppercase text-ug-green font-semibold">{t.label}</span>
              <span className="w-6 h-px bg-ug-green" />
            </div>
          </motion.div>
          <motion.h2 variants={FU(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-serif text-5xl md:text-6xl font-bold text-ug-ink mb-4 leading-tight">
            {t.title}
          </motion.h2>
          <motion.p variants={FU(0.14)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-ug-muted leading-relaxed">
            {t.subtitle}
          </motion.p>
        </div>

        {/* Articles grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.articles.map((article, i) => (
            <motion.a
              key={i}
              href={article.href.startsWith("/insights") ? `/${lang}${article.href}` : article.href}
              variants={FU(i * 0.1)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="group flex flex-col rounded-2xl bg-white shadow-sm border border-black/[0.06] hover:shadow-lg transition-all overflow-hidden"
            >
              {/* Top accent bar — 6px thick ug-green */}
              <div className="h-1.5 bg-ug-green" />

              <div className="p-6 flex flex-col flex-1">
                {/* Tag + date row */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase ${TAG_STYLES[article.tag] ?? "bg-black/[0.06] text-ug-muted"}`}>
                    {article.tag}
                  </span>
                  <span className="text-ug-muted/60 text-[10px] font-medium">{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-ug-ink font-bold text-base leading-snug mb-3 group-hover:text-ug-green transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-ug-muted text-sm leading-relaxed flex-1 mb-5">
                  {article.excerpt}
                </p>

                {/* Read more */}
                <div className="flex items-center gap-1.5 text-ug-green/80 group-hover:text-ug-green text-xs font-semibold transition-colors">
                  {t.readMore}
                  <svg className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
