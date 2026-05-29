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
    <section id="contact" className="bg-ug-page py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: text + audience flows */}
          <div>
            <motion.div variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-6 h-px bg-ug-green" />
                <span className="text-xs tracking-[0.25em] uppercase text-ug-green font-semibold">{t.label}</span>
              </div>
            </motion.div>
            <motion.h2 variants={FU(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="font-serif text-5xl md:text-6xl font-bold text-ug-ink mb-4 leading-tight">
              {t.title}
            </motion.h2>
            <motion.p variants={FU(0.14)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-ug-muted leading-relaxed mb-10">
              {t.subtitle}
            </motion.p>

            <div className="space-y-3">
              {t.flows.map((flow, i) => (
                <motion.div key={i} variants={FU(0.18 + i * 0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
                  className="flex gap-4 p-5 rounded-xl bg-white shadow-sm border border-black/[0.06] hover:shadow-md transition-all group">
                  <div>
                    <h4 className="text-ug-ink text-sm font-bold mb-1 group-hover:text-ug-green transition-colors">{flow.title}</h4>
                    <p className="text-ug-muted text-sm leading-relaxed">{flow.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: simple form */}
          <motion.div variants={FU(0.2)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="p-8 rounded-3xl bg-white shadow-sm border border-black/[0.06]">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder={t.namePlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-ug-page border border-black/[0.10] text-ug-ink placeholder-ug-muted/50 text-sm focus:outline-none focus:border-ug-green/60 transition-colors"
              />
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-ug-page border border-black/[0.10] text-ug-ink placeholder-ug-muted/50 text-sm focus:outline-none focus:border-ug-green/60 transition-colors"
              />
              <textarea
                rows={5}
                placeholder={t.messagePlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-ug-page border border-black/[0.10] text-ug-ink placeholder-ug-muted/50 text-sm focus:outline-none focus:border-ug-green/60 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-ug-green hover:bg-ug-green-light text-white font-bold text-sm transition-colors shadow-lg shadow-ug-green/20"
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
