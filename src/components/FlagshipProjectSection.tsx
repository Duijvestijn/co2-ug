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
    <section id="flagship" className="bg-ug-night py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-[0.03] bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.bwindi})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-ug-night via-ug-night/96 to-ug-night" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <motion.div variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-ug-green/50" />
              <span className="text-xs tracking-[0.25em] uppercase text-ug-green/80 font-medium">{t.label}</span>
            </div>
          </motion.div>
          <motion.h2 variants={FU(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {t.title}
          </motion.h2>
          <motion.p variants={FU(0.14)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-ug-gold font-serif text-lg italic mb-2">
            {t.subtitle}
          </motion.p>
        </div>

        {/* Main content: image + details */}
        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          {/* Left: image */}
          <motion.div variants={FU(0.18)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="relative rounded-3xl overflow-hidden min-h-[380px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${IMAGES.bwindi})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ug-dark/80 via-ug-dark/20 to-transparent" />
            {/* Status badge */}
            <div className="absolute top-5 left-5 flex items-center gap-2">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ug-green/90 text-white text-[10px] font-bold tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                {t.status}
              </span>
            </div>
            {/* Bottom overlay info */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white/90 text-xs font-medium mb-1">{t.location}</p>
              <p className="text-ug-sand/60 text-[10px]">{t.statusDesc}</p>
            </div>
          </motion.div>

          {/* Right: description + credentials */}
          <motion.div variants={FU(0.22)} initial="hidden" animate={inView ? "visible" : "hidden"} className="flex flex-col justify-between">
            <p className="text-ug-sand/60 leading-relaxed text-sm mb-8">
              {t.description}
            </p>

            {/* Credentials list */}
            <div className="space-y-2">
              {t.credentials.map((c, i) => (
                <div key={i} className="flex gap-3 items-baseline py-2.5 border-b border-white/[0.05] last:border-0">
                  <span className="text-ug-sand/40 text-[10px] font-medium uppercase tracking-wider min-w-[110px]">{c.label}</span>
                  <span className="text-ug-sand/80 text-xs font-medium">{c.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Impact stats */}
        <motion.div variants={FU(0.3)} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <h3 className="text-xs tracking-[0.25em] uppercase text-ug-green/60 font-medium mb-5">{t.impactTitle}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.impacts.map((impact, i) => (
              <div key={i}
                className="p-6 rounded-2xl bg-ug-dark border border-ug-blue/20 hover:border-ug-blue/40 transition-colors text-center">
                <div className="font-serif text-3xl font-bold text-ug-blue-light mb-2">{impact.value}</div>
                <div className="text-ug-sand/50 text-xs leading-snug">{impact.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={FU(0.38)} initial="hidden" animate={inView ? "visible" : "hidden"} className="mt-10">
          <a href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-ug-green hover:bg-ug-green-light text-white font-semibold text-sm transition-colors shadow-lg shadow-ug-green/20">
            {t.cta}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
