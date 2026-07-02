import { useLang } from "../context/LanguageContext";
import SectionReveal from "./SectionReveal";

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionReveal>
        <h2 className="mb-10 text-3xl font-bold tracking-tight md:text-4xl">
          {t.experience.title}
        </h2>
      </SectionReveal>

      <div className="space-y-6">
        {t.experience.items.map((item, i) => (
          <SectionReveal
            key={i}
            delay={i * 0.08}
            className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition hover:border-cyan-400/40"
          >
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
              <div>
                <h3 className="text-2xl font-semibold">{item.role}</h3>
                <p className="mt-1 text-cyan-300">{item.company}</p>
              </div>
              <span className="w-fit rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/70">
                {item.period}
              </span>
            </div>
            <p className="mt-6 max-w-4xl leading-8 text-white/70">
              {item.details}
            </p>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
