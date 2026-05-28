"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";
import { IMAGES } from "@/lib/images";

const FADE_UP = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  }),
};

export default function HeroSection() {
  const { lang } = useLang();
  const t = translations.hero[lang];
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const stats = [
    { value: t.stat1Value, label: t.stat1Label },
    { value: t.stat2Value, label: t.stat2Label },
    { value: t.stat3Value, label: t.stat3Label },
    { value: t.stat4Value, label: t.stat4Label },
  ];

  return (
    <section ref={containerRef} id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.hero})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-ug-dark/75 via-ug-dark/40 to-ug-dark/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-ug-dark/60 via-transparent to-ug-dark/30" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ y: textY, opacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24">
        {/* Label */}
        <motion.div custom={0} variants={FADE_UP} initial="hidden" animate="visible" className="inline-flex items-center gap-2 mb-8">
          <span className="w-8 h-px bg-ug-green/60" />
          <span className="text-xs tracking-[0.3em] uppercase text-ug-green font-medium">{t.label}</span>
          <span className="w-8 h-px bg-ug-green/60" />
        </motion.div>

        {/* Title */}
        <motion.h1 custom={1} variants={FADE_UP} initial="hidden" animate="visible"
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] text-white mb-4">
          {t.titleLine1}
        </motion.h1>
        <motion.p custom={2} variants={FADE_UP} initial="hidden" animate="visible"
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] italic text-ug-gold mb-8">
          {t.titleLine2}
        </motion.p>

        {/* Description */}
        <motion.p custom={3} variants={FADE_UP} initial="hidden" animate="visible"
          className="text-ug-sand/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
          {t.description}
        </motion.p>

        {/* CTAs */}
        <motion.div custom={4} variants={FADE_UP} initial="hidden" animate="visible"
          className="flex flex-wrap justify-center gap-4 mb-16">
          <a href="#what-is"
            className="px-7 py-3.5 rounded-xl text-sm font-semibold bg-ug-green hover:bg-ug-green-light text-white transition-colors shadow-lg shadow-ug-green/20">
            {t.btn1}
          </a>
          <a href="#projects"
            className="px-7 py-3.5 rounded-xl text-sm font-medium bg-white/[0.07] hover:bg-white/[0.12] border border-white/[0.12] text-ug-sand/80 hover:text-ug-sand backdrop-blur-sm transition-colors">
            {t.btn2}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div custom={5} variants={FADE_UP} initial="hidden" animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden backdrop-blur-sm border border-white/[0.08]">
          {stats.map((stat, i) => (
            <div key={i} className="bg-ug-dark/60 px-6 py-5 text-center">
              <div className="font-serif text-2xl md:text-3xl font-bold text-ug-gold mb-1">{stat.value}</div>
              <div className="text-ug-sand/50 text-xs leading-snug">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="mt-12 flex flex-col items-center gap-2">
          <span className="text-ug-sand/30 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-8 bg-gradient-to-b from-ug-green/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
