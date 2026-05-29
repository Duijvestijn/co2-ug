"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";
import { PROJECT_IMAGES } from "@/lib/images";

const FU = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { delay: d, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
});

export default function ProjectsSection() {
  const { lang } = useLang();
  const t = translations.projects[lang];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const projects = [
    { title: t.project1Title, desc: t.project1Desc, tag: t.project1Tag },
    { title: t.project2Title, desc: t.project2Desc, tag: t.project2Tag },
    { title: t.project3Title, desc: t.project3Desc, tag: t.project3Tag },
    { title: t.project4Title, desc: t.project4Desc, tag: t.project4Tag },
  ];

  return (
    <section id="projects" className="bg-ug-page py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.div variants={FU(0)} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-ug-green" />
              <span className="text-xs tracking-[0.25em] uppercase text-ug-green font-semibold">{t.label}</span>
              <span className="w-6 h-px bg-ug-green" />
            </div>
          </motion.div>
          <motion.h2 variants={FU(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-serif text-5xl md:text-6xl font-bold text-ug-ink mb-4 leading-tight">
            {t.title}
          </motion.h2>
          <motion.p variants={FU(0.14)} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-ug-muted leading-relaxed">
            {t.subtitle}
          </motion.p>
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div key={i} variants={FU(i * 0.1)} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="group rounded-2xl overflow-hidden bg-white shadow-sm border border-black/[0.06] hover:shadow-xl transition-all">
              {/* Image — h-72 */}
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${PROJECT_IMAGES[i]})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-ug-dark/60 via-ug-dark/10 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full bg-ug-green text-white text-[10px] font-bold tracking-wide uppercase">
                    {p.tag}
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-ug-ink mb-3 group-hover:text-ug-green transition-colors">{p.title}</h3>
                <p className="text-ug-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
