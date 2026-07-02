import { useLang } from "../context/LanguageContext";
import SectionReveal from "./SectionReveal";

export default function Languages() {
  const { t } = useLang();

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionReveal>
        <h2 className="mb-10 text-3xl font-bold tracking-tight md:text-4xl">
          {t.languages.title}
        </h2>
      </SectionReveal>

      <div className="grid gap-6 md:grid-cols-2">
        {t.languages.items.map((item, i) => (
          <SectionReveal
            key={item.name}
            delay={i * 0.08}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:border-cyan-400/40"
          >
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="mt-2 text-white/65">{item.level}</p>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
