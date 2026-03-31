import { motion } from "framer-motion";

const projects = [
  {
    title: "ClosestFood",
    description:
      "A modern restaurant discovery web app focused on filtering, sorting, distance-based results, ratings, reviews, and a clean user experience.",
    tech: ["React", "Vite", "Tailwind CSS", "API Integration"],
    
  },
  {
    title: "Formix Studio",
    description:
      "A modular software product designed around form conversion workflows and a future AI-supported Excel assistant module.",
    tech: ["C#", ".NET", "Product Design", "Tooling"],
    
  },
  {
    title: "VibeTrail",
    description:
      "A social media style mobile application where users can create posts, interact with content, and experience a modern mobile-first interface.",
    tech: ["Flutter", "Firebase", "Dart"],
    
  },
  {
    title: "Tabu Game",
    description:
      "A polished mobile game experience built with modern UI ideas, dynamic flow, and interactive team-based gameplay mechanics.",
    tech: ["Flutter", "Firebase", "Game Logic", "UI/UX"],
    
  },
];

const skills = [
  "C#",
  ".NET",
  "ASP.NET Core",
  "SQL",
  "Java",
  "Python",
  "Flutter",
  "Firebase",
  "React",
  "JavaScript",
  "Unity",
  "Git",
  "GitHub",
  "OOP",
  "SOLID",
  "Design Patterns",
  "Unit Testing",
];

const experiences = [
  {
    title: "Software Development Intern",
    company: "Kolay Gelsin",
    period: "Jun 2024 - Jun 2025",
    details:
      "Worked on multiple software projects, contributed to SOLID-focused development practices, design pattern implementations, unit testing processes, and troubleshooting database-related issues while also supporting Scrum-related workflows.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#06070d] text-white overflow-x-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-[-120px] top-[-100px] h-[320px] w-[320px] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-120px] top-[80px] h-[360px] w-[360px] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[20%] h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/25 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-bold tracking-wide">
            Sarp Çerçi.
          </a>

          <div className="hidden items-center gap-6 text-sm text-white/75 md:flex">
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>
            <a href="#experience" className="transition hover:text-cyan-400">
              Experience
            </a>
            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-cyan-400">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="mx-auto flex min-h-[92vh] max-w-6xl items-center px-6 py-20"
        >
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                Software Developer • Backend-Oriented • Computer Engineer
              </div>

              <h1 className="text-3xl font-bold leading-snug md:text-5xl bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                <h1 className="text-3xl font-bold leading-snug md:text-5xl">
                  I build scalable backend systems and modern digital products with clean architecture and strong user experience.
                  <p className="mt-6 text-sm text-white/40">
                     Based in Turkey • Open to global opportunities
                  </p>
                </h1>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                I am a backend-oriented software developer with experience in modern application development, 
                product thinking, and building clean, maintainable systems. 
                I focus on performance, scalability, and delivering real value.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/cv.pdf"
                  download
                  className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-black transition duration-300 hover:scale-105"
                >
                  Download CV
                </a>

                <a
                  href="#projects"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold backdrop-blur transition duration-300 hover:scale-105 hover:border-cyan-400"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold backdrop-blur transition duration-300 hover:scale-105 hover:border-cyan-400"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-2xl">
                <div className="mb-5 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div className="rounded-[24px] border border-white/10 bg-black/30 p-6">
                  <p className="text-sm text-cyan-300">Currently focused on</p>
                  <h3 className="mt-3 text-2xl font-bold">
                    Backend Development, Product Thinking, and Modern Interfaces
                  </h3>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-white/60">Primary Stack</p>
                      <p className="mt-2 font-semibold">C#, .NET, SQL</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-white/60">Also Working With</p>
                      <p className="mt-2 font-semibold">
                        Flutter, Firebase, React, Unity
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-white/60">Mindset</p>
                      <p className="mt-2 font-semibold">
                        Clean Code, SOLID, Product Quality
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-white/60">Goal</p>
                      <p className="mt-2 font-semibold">
                        Building impactful and scalable software
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h2 className="text-3xl font-bold md:text-4xl">About Me</h2>
            <p className="mt-6 max-w-4xl text-white/72 leading-8">
              I enjoy developing software that is both technically solid and
              visually well-crafted. My experience spans backend development,
              mobile applications, game-related projects, and product-oriented
              thinking. I like learning new technologies, improving myself
              continuously, and turning ideas into functional products people
              can actually use.
            </p>
          </motion.div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-3xl font-bold md:text-4xl"
          >
            Experience
          </motion.h2>

          <div className="space-y-6">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                  <div>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-1 text-cyan-300">{item.company}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/70">
                    {item.period}
                  </span>
                </div>

                <p className="mt-6 max-w-4xl text-white/72 leading-8">
                  {item.details}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-3xl font-bold md:text-4xl"
          >
            Featured Projects
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-[30px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/60"
              >
                <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                  Project
                </div>

                <h3 className="text-2xl font-semibold">{project.title}</h3>

                <p className="mt-4 text-white/72 leading-7">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/75"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-3xl font-bold md:text-4xl"
          >
            Tech Stack
          </motion.h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 backdrop-blur transition hover:border-cyan-400/60 hover:text-cyan-300"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>
        
        <section className="mx-auto max-w-6xl px-6 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-3xl font-bold md:text-4xl"
          >
            Languages
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold">English</h3>
              <p className="mt-2 text-white/70">
                Full Professional Proficiency (C1)
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold">Turkish</h3>
              <p className="mt-2 text-white/70">
                Native Proficiency
              </p>
            </div>
          </div>
        </section>
        <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h2 className="text-3xl font-bold md:text-4xl">Let’s Connect</h2>
            <p className="mt-5 max-w-3xl text-white/72 leading-8">
              If you want to work together, discuss a project, or simply get in
              touch, feel free to reach out through the links below.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:sarpcer02@hotmail.com"
                className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
              >
                Send Email
              </a>
              <a
                href="https://github.com/sarp6"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold transition hover:scale-105 hover:border-cyan-400"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sarp-%C3%A7er%C3%A7i-a65362234"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold transition hover:scale-105 hover:border-cyan-400"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Sarp Çerçi. All rights reserved.</p>
          <p>Built with React, Tailwind CSS, and Framer Motion.</p>
        </div>
      </footer>
    </div>
  );
}