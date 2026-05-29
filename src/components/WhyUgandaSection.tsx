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

const CODES = ["BW", "CB", "LV", "NE", "WE", "CC"];

export default function WhyUgandaSection() {
  const { lang } = useLang();
  const t = translations.whyUganda[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const advantages = [
    { title: t.adv1Title, desc: t.adv1Desc },
    { title: t.adv2Title, desc: t.adv2Desc },
    { title: t.adv3Title, desc: t.adv3Desc },
    { title: t.adv4Title, desc: t.adv4Desc },
    { title: t.adv5Title, desc: t.adv5Desc },
    { title: t.adv6Title, desc: t.adv6Desc },
  ];

  return (
    <section id="why-uganda" className="overflow-hidden">
      {/* Full-bleed image band */}
      <div className="relative h-80 w-full">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.bwindi})` }} />
        <div className="absolute inset-0 bg-ug-dark/60" />
        {/* Header text over image */}
        <div className="relative z-10 h-full flex flex-col justify-center max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-ug-green" />
            <span className="text-xs tracking-[0.25em] uppercase text-ug-green font-semibold">{t.label}</span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-3">
            {t.title}
          </h2>
          <p className="text-ug-gold font-serif text-lg italic">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* Content band — bg-ug-stone */}
      <div ref={ref} className="bg-ug-stone py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Intro text */}
          <motion.p variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-ug-muted text-lg leading-relaxed max-w-3xl mb-14">
            {t.intro}
          </motion.p>

          {/* Advantages */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((adv, i) => (
              <motion.div key={i} variants={FU(i * 0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
                className="p-6 rounded-2xl bg-white shadow-sm border border-black/[0.06] hover:shadow-lg transition-all group">
                {/* Accent bar */}
                <div className="w-8 h-1 bg-ug-green rounded mb-4" />
                <span className="text-[10px] font-mono font-bold text-ug-green/80 tracking-widest block mb-2">
                  {CODES[i]}
                </span>
                <h4 className="text-ug-ink font-bold text-sm mb-2 group-hover:text-ug-green transition-colors">{adv.title}</h4>
                <p className="text-ug-muted text-sm leading-relaxed">{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
