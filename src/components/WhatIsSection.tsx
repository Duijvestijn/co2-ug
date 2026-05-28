"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { delay: d, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
});

export default function WhatIsSection() {
  const { lang } = useLang();
  const t = translations.whatIs[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const steps = [
    { n: "01", title: t.step1Title, desc: t.step1Desc },
    { n: "02", title: t.step2Title, desc: t.step2Desc },
    { n: "03", title: t.step3Title, desc: t.step3Desc },
    { n: "04", title: t.step4Title, desc: t.step4Desc },
  ];

  return (
    <section id="what-is" className="bg-ug-night py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ug-green/[0.03] to-transparent pointer-events-none" />
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-ug-green/50" />
              <span className="text-xs tracking-[0.25em] uppercase text-ug-green/80 font-medium">{t.label}</span>
            </div>
          </motion.div>
          <motion.h2 variants={FU(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            {t.title}
          </motion.h2>
          <motion.p variants={FU(0.14)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-ug-gold font-serif text-lg italic mb-6">
            {t.subtitle}
          </motion.p>
          <motion.p variants={FU(0.2)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-ug-sand/60 text-lg leading-relaxed">
            {t.intro}
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {steps.map((s, i) => (
            <motion.div key={i} variants={FU(i * 0.1)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="p-6 rounded-2xl bg-ug-dark/60 border border-white/[0.05] hover:border-ug-green/25 transition-all group">
              <div className="font-serif text-4xl font-bold text-ug-green/15 mb-4 leading-none">{s.n}</div>
              <h3 className="font-serif text-base font-bold text-white mb-2 group-hover:text-ug-green transition-colors">{s.title}</h3>
              <p className="text-ug-sand/45 text-xs leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Why it matters */}
        <motion.div variants={FU(0.3)} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="p-8 rounded-3xl bg-ug-green/[0.07] border border-ug-green/20">
          <h3 className="text-ug-green font-bold text-sm mb-3">{t.whyTitle}</h3>
          <p className="text-ug-sand/60 leading-relaxed">{t.whyDesc}</p>
        </motion.div>
      </div>
    </section>
  );
}
