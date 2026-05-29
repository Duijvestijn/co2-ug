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

  return (
    <section ref={containerRef} id="hero" className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.hero})` }} />
        {/* Left-heavy gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-ug-dark/90 via-ug-dark/60 to-ug-dark/20" />
        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-ug-dark/80 via-transparent to-ug-dark/30" />
      </motion.div>

      {/* Content — bottom-left */}
      <motion.div style={{ y: textY, opacity }} className="relative z-10 max-w-6xl mx-auto px-6 w-full pb-24 pt-32">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div custom={0} variants={FADE_UP} initial="hidden" animate="visible" className="flex items-center gap-2 mb-8">
            <span className="w-8 h-px bg-ug-green/70" />
            <span className="text-xs tracking-[0.3em] uppercase text-ug-green font-semibold">{t.label}</span>
          </motion.div>

          {/* Title */}
          <motion.h1 custom={1} variants={FADE_UP} initial="hidden" animate="visible"
            className="font-serif text-6xl sm:text-7xl md:text-8xl font-bold leading-[1.0] text-white mb-3">
            {t.titleLine1}
          </motion.h1>
          <motion.p custom={2} variants={FADE_UP} initial="hidden" animate="visible"
            className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.0] italic text-ug-gold mb-8">
            {t.titleLine2}
          </motion.p>

          {/* Description */}
          <motion.p custom={3} variants={FADE_UP} initial="hidden" animate="visible"
            className="text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
            {t.description}
          </motion.p>

          {/* CTAs */}
          <motion.div custom={4} variants={FADE_UP} initial="hidden" animate="visible"
            className="flex flex-wrap gap-4">
            <a href="#what-is"
              className="px-8 py-4 rounded-xl text-sm font-bold bg-ug-green hover:bg-ug-green-light text-white transition-colors shadow-lg shadow-ug-green/25">
              {t.btn1}
            </a>
            <a href="#projects"
              className="px-8 py-4 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/15 border border-white/20 text-white backdrop-blur-sm transition-colors">
              {t.btn2}
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          className="mt-16 flex flex-col items-start gap-2">
          <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-8 bg-gradient-to-b from-ug-green/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
