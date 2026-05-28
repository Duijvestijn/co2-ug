"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { delay: d, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
});

export default function ContactSection() {
  const { lang } = useLang();
  const t = translations.contact[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="bg-ug-dark py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: text + audience flows */}
          <div>
            <motion.div variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-px bg-ug-green/50" />
                <span className="text-xs tracking-[0.25em] uppercase text-ug-green/80 font-medium">{t.label}</span>
              </div>
            </motion.div>
            <motion.h2 variants={FU(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              {t.title}
            </motion.h2>
            <motion.p variants={FU(0.14)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-ug-sand/55 leading-relaxed mb-10">
              {t.subtitle}
            </motion.p>

            <div className="space-y-3">
              {t.flows.map((flow, i) => (
                <motion.div key={i} variants={FU(0.18 + i * 0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
                  className="flex gap-4 p-4 rounded-xl bg-ug-night border border-white/[0.05] hover:border-ug-green/20 transition-colors group">
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1 group-hover:text-ug-green transition-colors">{flow.title}</h4>
                    <p className="text-ug-sand/40 text-xs leading-relaxed">{flow.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: simple form */}
          <motion.div variants={FU(0.2)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="p-8 rounded-3xl bg-ug-night border border-white/[0.06]">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder={t.namePlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-ug-sand placeholder-ug-sand/30 text-sm focus:outline-none focus:border-ug-green/40 transition-colors"
              />
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-ug-sand placeholder-ug-sand/30 text-sm focus:outline-none focus:border-ug-green/40 transition-colors"
              />
              <textarea
                rows={5}
                placeholder={t.messagePlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-ug-sand placeholder-ug-sand/30 text-sm focus:outline-none focus:border-ug-green/40 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-ug-green hover:bg-ug-green-light text-white font-bold text-sm transition-colors"
              >
                {t.send}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
