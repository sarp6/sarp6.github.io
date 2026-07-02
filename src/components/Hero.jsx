import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { shared } from "../i18n/content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[100svh] max-w-6xl items-center px-6"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-3xl"
      >
        <motion.div
          variants={item}
          className="mb-6 inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-200 backdrop-blur sm:text-sm"
        >
          {t.hero.badge}
        </motion.div>

        <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
          {t.hero.titleLines.map((line, i) => (
            <motion.span key={i} variants={item} className="block">
              {i === t.hero.titleLines.length - 1 ? (
                <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
                  {line}
                </span>
              ) : (
                line
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.p variants={item} className="mt-4 text-sm text-white/40">
          {t.hero.location}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a
            href={shared.cv}
            download
            className="rounded-2xl bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 font-semibold text-black shadow-lg shadow-cyan-500/25 transition duration-300 hover:scale-105 hover:shadow-cyan-400/40"
          >
            {t.hero.cta.cv}
          </a>
          <a
            href="#projects"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold backdrop-blur transition duration-300 hover:scale-105 hover:border-cyan-400/60"
          >
            {t.hero.cta.projects}
          </a>
          <a
            href="#contact"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold backdrop-blur transition duration-300 hover:scale-105 hover:border-cyan-400/60"
          >
            {t.hero.cta.contact}
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-white/40 transition hover:text-cyan-300"
      >
        {t.hero.scroll}
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="text-lg"
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  );
}
