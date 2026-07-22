"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { delay: d, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

export default function OpportunitySection() {
  const { lang } = useLang();
  const t = translations.opportunity[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="opportunity" className="bg-ug-dark py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <motion.span variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-xs tracking-[0.3em] uppercase text-ug-green font-bold mb-4 block">{t.label}</motion.span>
          <motion.h2 variants={FU(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-4">{t.title}</motion.h2>
          <motion.p variants={FU(0.14)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-white/65 text-lg leading-relaxed">{t.subtitle}</motion.p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {t.stats.map((s: { value: string; label: string; source: string }, i: number) => (
            <motion.div key={i} variants={FU(0.1 + i * 0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
              <div className="font-serif text-4xl md:text-5xl font-bold text-ug-green mb-2">{s.value}</div>
              <div className="text-white/80 text-sm font-medium mb-1">{s.label}</div>
              <div className="text-white/35 text-xs">{s.source}</div>
            </motion.div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {t.drivers.map((d: { icon: string; title: string; desc: string }, i: number) => (
            <motion.div key={i} variants={FU(0.3 + i * 0.1)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.07] transition-colors">
              <div className="text-3xl mb-4">{d.icon}</div>
              <h3 className="font-serif font-bold text-white mb-2">{d.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
