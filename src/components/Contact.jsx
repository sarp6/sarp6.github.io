import { useLang } from "../context/LanguageContext";
import { shared } from "../i18n/content";
import SectionReveal from "./SectionReveal";

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionReveal className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl sm:p-10">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {t.contact.title}
        </h2>
        <p className="mt-5 max-w-3xl leading-8 text-white/70">{t.contact.body}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${shared.email}`}
            className="rounded-2xl bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 font-semibold text-black shadow-lg shadow-cyan-500/25 transition hover:scale-105"
          >
            {t.contact.cta.email}
          </a>
          <a
            href={shared.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold transition hover:scale-105 hover:border-cyan-400/60"
          >
            {t.contact.cta.github}
          </a>
          <a
            href={shared.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold transition hover:scale-105 hover:border-cyan-400/60"
          >
            {t.contact.cta.linkedin}
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}
