import { useLang } from "../context/LanguageContext";
import { shared } from "../i18n/content";
import SectionReveal from "./SectionReveal";

export default function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionReveal>
        <h2 className="mb-10 text-3xl font-bold tracking-tight md:text-4xl">
          {t.projects.title}
        </h2>
      </SectionReveal>

      <div className="grid gap-6 md:grid-cols-2">
        {shared.projects.map((project, i) => {
          const info = t.projects.items[project.key];
          return (
            <SectionReveal
              key={project.key}
              delay={i * 0.06}
              className="group h-full"
            >
              <article className="flex h-full flex-col rounded-[30px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:bg-white/[0.06]">
                <div className="mb-4 inline-flex w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                  {t.projects.tag}
                </div>

                <h3 className="text-2xl font-semibold transition group-hover:text-cyan-200">
                  {info.title}
                </h3>

                <p className="mt-4 leading-7 text-white/65">{info.description}</p>

                <div className="mt-6 flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </SectionReveal>
          );
        })}
      </div>
    </section>
  );
}
