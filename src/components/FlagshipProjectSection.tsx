"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";
import { IMAGES } from "@/lib/images";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { delay: d, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
});

export default function FlagshipProjectSection() {
  const { lang } = useLang();
  const t = translations.flagship[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="flagship" className="bg-ug-dark overflow-hidden">
      <div ref={ref} className="max-w-none">
        {/* Split layout — stacked on mobile, side-by-side on lg */}
        <div className="lg:grid lg:grid-cols-2 min-h-[700px]">

          {/* LEFT: dark text panel */}
          <div className="relative z-10 bg-ug-dark px-8 md:px-12 lg:px-16 py-20 flex flex-col justify-center">
            <motion.div variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-6 h-px bg-ug-green" />
                <span className="text-xs tracking-[0.25em] uppercase text-ug-green font-semibold">{t.label}</span>
              </div>
            </motion.div>

            <motion.h2 variants={FU(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {t.title}
            </motion.h2>
            <motion.p variants={FU(0.14)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-ug-gold font-serif text-lg italic mb-6">
              {t.subtitle}
            </motion.p>

            {/* Impact stats */}
            <motion.div variants={FU(0.18)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-4 mb-8">
              {t.impacts.map((impact, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/[0.06] border border-white/10">
                  <div className="font-serif text-3xl font-bold text-ug-blue-light mb-1 leading-none">{impact.value}</div>
                  <div className="text-white/60 text-xs leading-snug">{impact.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p variants={FU(0.22)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-white/75 leading-relaxed text-sm mb-8">
              {t.description}
            </motion.p>

            {/* Credentials table */}
            <motion.div variants={FU(0.26)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="space-y-0 mb-8 rounded-2xl overflow-hidden border border-white/[0.08]">
              {t.credentials.map((c, i) => (
                <div key={i} className="flex gap-3 items-baseline px-4 py-3 border-b border-white/[0.08] last:border-0 bg-white/[0.02]">
                  <span className="text-white/40 text-[10px] font-semibold uppercase tracking-wider min-w-[110px]">{c.label}</span>
                  <span className="text-white/85 text-xs font-medium">{c.value}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={FU(0.32)} initial="hidden" animate={inView ? "visible" : "hidden"} className="flex flex-col">
              <a href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-ug-green hover:bg-ug-green-light text-white font-bold text-sm transition-colors shadow-lg shadow-ug-green/20">
                {t.cta}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              {t.registryUrl && (
                <motion.a variants={FU(0.38)} initial="hidden" animate={inView ? "visible" : "hidden"}
                  href={t.registryUrl} target="_blank" rel="noopener noreferrer"
                  className="self-start mt-3 text-xs text-white/50 hover:text-ug-green flex items-center gap-1 transition-colors">
                  {t.registryLabel}
                </motion.a>
              )}
            </motion.div>
          </div>

          {/* RIGHT: full image */}
          <motion.div
            variants={FU(0.1)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative min-h-[400px] lg:min-h-0"
          >
            <div className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${IMAGES.bwindi})` }} />
            <div className="absolute inset-0 bg-gradient-to-r from-ug-dark/40 to-transparent" />
            {/* Status badge */}
            <div className="absolute top-6 left-6 flex items-center gap-2">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ug-green/90 backdrop-blur-sm text-white text-[10px] font-bold tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                {t.status}
              </span>
            </div>
            {/* Bottom caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ug-dark/80 to-transparent">
              <p className="text-white/90 text-xs font-medium mb-1">{t.location}</p>
              <p className="text-white/55 text-[10px]">{t.statusDesc}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
