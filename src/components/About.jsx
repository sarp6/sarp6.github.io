import { useLang } from "../context/LanguageContext";
import SectionReveal from "./SectionReveal";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionReveal className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl sm:p-10">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {t.about.title}
        </h2>
        <p className="mt-6 max-w-4xl leading-8 text-white/70">{t.about.body}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.cards.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/40 hover:bg-white/[0.06]"
            >
              <p className="text-sm text-white/50">{card.label}</p>
              <p className="mt-2 font-semibold text-white/90">{card.value}</p>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
