"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { delay: d, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

const credentials = [
  { icon: "✓", title: "Verra VCS Registered", desc: "VCS 1571 — registered under the Verified Carbon Standard, the world's leading voluntary carbon programme." },
  { icon: "✓", title: "Gold Standard Validated", desc: "GS 12226 — independently validated to Gold Standard, confirming additionality, permanence, and community co-benefits." },
  { icon: "◎", title: "Dual-Certified Project", desc: "One of the few African projects to hold both Verra VCS and Gold Standard certification simultaneously." },
  { icon: "◑", title: "Third-Party MRV Audited", desc: "Carbon stocks, biodiversity baselines, and community outcomes verified by accredited third-party auditors." },
];

export default function AboutSection() {
  const { lang } = useLang();
  const t = translations.about[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" className="bg-ug-page py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <motion.span variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-xs tracking-[0.3em] uppercase text-ug-green font-bold mb-4 block">
              {t.label}
            </motion.span>
            <motion.h2 variants={FU(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="font-serif text-4xl md:text-5xl font-bold text-ug-ink leading-tight mb-6">
              {t.title}
            </motion.h2>
            <motion.p variants={FU(0.14)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-ug-muted leading-relaxed mb-6 text-lg">
              {t.body1}
            </motion.p>
            <motion.p variants={FU(0.18)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-ug-muted leading-relaxed mb-10">
              {t.body2}
            </motion.p>
            <motion.a variants={FU(0.22)} initial="hidden" animate={inView ? "visible" : "hidden"}
              href="https://registry.verra.org/app/projectDetail/VCS/1571"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ug-green font-bold text-sm hover:underline underline-offset-4">
              {t.registryCta}
              <span>↗</span>
            </motion.a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {credentials.map((c, i) => (
              <motion.div key={i} variants={FU(0.1 + i * 0.07)} initial="hidden" animate={inView ? "visible" : "hidden"}
                className="p-6 rounded-2xl bg-white border border-black/[0.07] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-ug-green/10 flex items-center justify-center mb-4">
                  <span className="text-ug-green font-bold text-lg">{c.icon}</span>
                </div>
                <h4 className="font-serif font-bold text-ug-ink mb-2">{c.title}</h4>
                <p className="text-ug-muted text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
