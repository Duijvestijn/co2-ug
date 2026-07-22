"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

export default function FAQSection() {
  const { lang } = useLang();
  const t = translations.faq[lang];
  const [open, setOpen] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="faq" className="bg-ug-stone py-24 md:py-32">
      <div ref={ref} className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            className="text-xs tracking-[0.3em] uppercase text-ug-green font-bold block mb-4"
          >{t.label}</motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08 }}
            className="font-serif text-4xl md:text-5xl font-bold text-ug-ink leading-tight"
          >{t.title}</motion.h2>
        </div>

        <div className="space-y-2">
          {t.items.map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-black/[0.07] overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left text-ug-ink font-semibold text-sm leading-snug hover:bg-ug-stone/30 transition-colors"
              >
                <span>{item.q}</span>
                <span className={`flex-shrink-0 w-5 h-5 rounded-full border border-ug-green/30 flex items-center justify-center text-ug-green transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>
                  <svg width="10" height="10" viewBox="0 0 10 10"><path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-ug-muted text-sm leading-relaxed border-t border-black/[0.05]">
                  <p className="pt-4">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
