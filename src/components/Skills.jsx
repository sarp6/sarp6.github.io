import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { shared } from "../i18n/content";
import SectionReveal from "./SectionReveal";

export default function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionReveal>
        <h2 className="mb-10 text-3xl font-bold tracking-tight md:text-4xl">
          {t.skills.title}
        </h2>
      </SectionReveal>

      <div className="flex flex-wrap gap-3">
        {shared.skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(i * 0.03, 0.4) }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/60 hover:text-cyan-300"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
