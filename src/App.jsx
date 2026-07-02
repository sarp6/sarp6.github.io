import { lazy, Suspense } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// The 3D canvas is heavy; load it after the main bundle so first paint stays fast.
const Scene3D = lazy(() => import("./components/Scene3D"));

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen overflow-x-hidden bg-[#06070d] text-white">
        {/* 3D background layer */}
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>

        {/* Readability overlay: darkens toward content, keeps text crisp over 3D */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_70%_35%,transparent,rgba(6,7,13,0.55)_60%,rgba(6,7,13,0.9))]" />

        <Navbar />

        <main className="relative">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Languages />
          <Contact />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
