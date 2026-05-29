"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { delay: d, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
});

export default function StandardsSection() {
  const { lang } = useLang();
  const t = translations.standards[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="standards" className="bg-ug-dark py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-ug-green/50" />
              <span className="text-xs tracking-[0.25em] uppercase text-ug-green/80 font-medium">{t.label}</span>
              <span className="w-6 h-px bg-ug-green/50" />
            </div>
          </motion.div>
          <motion.h2 variants={FU(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            {t.title}
          </motion.h2>
          <motion.p variants={FU(0.14)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-ug-sand/55 leading-relaxed">
            {t.subtitle}
          </motion.p>
        </div>

        {/* Standards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.standards.map((s, i) => (
            <motion.div
              key={i}
              variants={FU(i * 0.08)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="group p-6 rounded-2xl bg-ug-night border border-white/[0.05] hover:border-ug-green/25 transition-all"
            >
              {/* Code badge */}
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 rounded-lg bg-ug-green/15 border border-ug-green/25 text-ug-green font-mono text-xs font-bold tracking-wide">
                  {s.code}
                </span>
                <span className="text-[10px] font-medium text-ug-sand/35 text-right leading-snug max-w-[110px]">
                  {s.stat}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-ug-green transition-colors leading-snug">
                {s.name}
              </h3>

              {/* Description */}
              <p className="text-ug-sand/45 text-xs leading-relaxed">
                {s.desc}
              </p>

              {/* Bottom accent line */}
              <div className="mt-5 h-px bg-gradient-to-r from-ug-green/30 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
