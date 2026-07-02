import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { shared } from "../i18n/content";

export default function Navbar() {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/40 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="group text-lg font-bold tracking-wide">
          <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            {shared.name}
          </span>
          <span className="text-cyan-400">.</span>
        </a>

        <div className="hidden items-center gap-7 text-sm text-white/70 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={toggle}
          aria-label="Toggle language"
          className="flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/80 backdrop-blur transition hover:border-cyan-400/60 hover:text-cyan-300"
        >
          <span className={lang === "en" ? "text-cyan-300" : ""}>EN</span>
          <span className="text-white/30">/</span>
          <span className={lang === "tr" ? "text-cyan-300" : ""}>TR</span>
        </button>
      </nav>
    </motion.header>
  );
}
