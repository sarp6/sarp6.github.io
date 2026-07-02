// Bilingual content for the portfolio. Keys mirror across `en` and `tr`.
// Shared, language-agnostic data (links, tech tags) live in `shared`.

export const shared = {
  name: "Sarp Çerçi",
  email: "sarpcer02@hotmail.com",
  github: "https://github.com/sarp6",
  linkedin: "https://www.linkedin.com/in/sarp-%C3%A7er%C3%A7i-a65362234",
  cv: "/cv.pdf",
  skills: [
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
  ],
  projects: [
    {
      key: "closestfood",
      tech: ["React", "Vite", "Tailwind CSS", "API Integration"],
    },
    {
      key: "formix",
      tech: ["C#", ".NET", "Product Design", "Tooling"],
    },
    {
      key: "homechores",
      tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "TailwindCSS"],
    },
    {
      key: "vibetrail",
      tech: ["Flutter", "Firebase", "Dart"],
    },
    {
      key: "tabu",
      tech: ["Flutter", "Firebase", "Game Logic", "UI/UX"],
    },
  ],
};

export const content = {
  en: {
    langLabel: "EN",
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      badge: "Software Developer • Backend-Oriented • Computer Engineer",
      titleLines: [
        "I build scalable",
        "backend systems &",
        "modern digital products.",
      ],
      subtitle:
        "Backend-oriented software developer focused on clean architecture, performance and delivering real value — from robust APIs to polished user experiences.",
      location: "Based in Turkey • Open to global opportunities",
      cta: {
        cv: "Download CV",
        projects: "View Projects",
        contact: "Contact Me",
      },
      scroll: "Scroll to explore",
    },
    about: {
      title: "About Me",
      body: "I enjoy developing software that is both technically solid and visually well-crafted. My experience spans backend development, mobile applications, game-related projects, and product-oriented thinking. I like learning new technologies, improving myself continuously, and turning ideas into functional products people can actually use.",
      cards: [
        { label: "Primary Stack", value: "C#, .NET, SQL" },
        { label: "Also Working With", value: "Flutter, Firebase, React, Unity" },
        { label: "Mindset", value: "Clean Code, SOLID, Product Quality" },
        { label: "Goal", value: "Building impactful, scalable software" },
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          role: "Software Development Intern",
          company: "Koç Sendeo / Kolay Gelsin",
          period: "Jun 2024 – Jun 2025",
          details:
            "Worked on multiple software projects, contributed to SOLID-focused development practices, design pattern implementations, unit testing processes, and troubleshooting database-related issues while also supporting Scrum-related workflows.",
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      tag: "Project",
      items: {
        closestfood: {
          title: "ClosestFood",
          description:
            "A location-based restaurant discovery web app that helps users find nearby dining options using real-time distance calculations, with advanced filtering and sorting by distance, rating, review count and overall score. Includes dynamic distance formatting and responsive UI updates driven by user interactions.",
        },
        formix: {
          title: "Formix Studio",
          description:
            "A modular desktop application designed as a container platform for productivity tools. It currently includes a form conversion tool that turns structured input into real-time Excel and PDF previews, with an architecture built for future integrations such as an AI-powered Excel assistant.",
        },
        homechores: {
          title: "HomeChores",
          description:
            "A collaborative household management web app that lets users create, assign and track daily chores in shared homes. Built on a modern full-stack architecture with real-time updates, role-based access and a scalable Supabase backend.",
        },
        vibetrail: {
          title: "VibeTrail",
          description:
            "A modern social media mobile app built with Flutter and Firebase, letting users share and discover content around daily interests like music, movies and books. Supports real-time likes, comments and customizable profiles, backed by Firebase Auth, Firestore and Storage.",
        },
        tabu: {
          title: "Tabu Game",
          description:
            "A real-time multiplayer Tabu-style word game built with Flutter and Firebase. Features team-based gameplay, dynamic score tracking, customizable settings and Firestore-driven real-time synchronization across players.",
        },
      },
    },
    skills: {
      title: "Tech Stack",
    },
    languages: {
      title: "Languages",
      items: [
        { name: "English", level: "Full Professional Proficiency (C1)" },
        { name: "Turkish", level: "Native Proficiency" },
      ],
    },
    contact: {
      title: "Let's Connect",
      body: "If you want to work together, discuss a project, or simply get in touch, feel free to reach out through the links below.",
      cta: { email: "Send Email", github: "GitHub", linkedin: "LinkedIn" },
    },
    footer: {
      rights: "All rights reserved.",
      built: "Built with React, Three.js & Tailwind CSS.",
    },
  },

  tr: {
    langLabel: "TR",
    nav: {
      about: "Hakkımda",
      experience: "Deneyim",
      projects: "Projeler",
      skills: "Yetenekler",
      contact: "İletişim",
    },
    hero: {
      badge: "Yazılım Geliştirici • Backend Ağırlıklı • Bilgisayar Mühendisi",
      titleLines: [
        "Ölçeklenebilir",
        "backend sistemleri &",
        "modern ürünler geliştiriyorum.",
      ],
      subtitle:
        "Temiz mimari, performans ve gerçek değer üretmeye odaklanan backend ağırlıklı bir yazılım geliştiriciyim — sağlam API'lerden özenli kullanıcı deneyimlerine kadar.",
      location: "Türkiye merkezli • Global fırsatlara açık",
      cta: {
        cv: "CV İndir",
        projects: "Projeleri Gör",
        contact: "İletişime Geç",
      },
      scroll: "Keşfetmek için kaydır",
    },
    about: {
      title: "Hakkımda",
      body: "Hem teknik olarak sağlam hem de görsel olarak özenli yazılımlar geliştirmekten keyif alıyorum. Deneyimim backend geliştirme, mobil uygulamalar, oyun odaklı projeler ve ürün odaklı düşünceyi kapsıyor. Yeni teknolojiler öğrenmeyi, kendimi sürekli geliştirmeyi ve fikirleri insanların gerçekten kullanabileceği işlevsel ürünlere dönüştürmeyi seviyorum.",
      cards: [
        { label: "Ana Stack", value: "C#, .NET, SQL" },
        { label: "Ayrıca", value: "Flutter, Firebase, React, Unity" },
        { label: "Yaklaşım", value: "Temiz Kod, SOLID, Ürün Kalitesi" },
        { label: "Hedef", value: "Etkili, ölçeklenebilir yazılımlar" },
      ],
    },
    experience: {
      title: "Deneyim",
      items: [
        {
          role: "Yazılım Geliştirme Stajyeri",
          company: "Koç Sendeo / Kolay Gelsin",
          period: "Haz 2024 – Haz 2025",
          details:
            "Birden fazla yazılım projesinde çalıştım; SOLID odaklı geliştirme pratiklerine, tasarım deseni uygulamalarına, birim test süreçlerine ve veritabanı kaynaklı sorunların çözümüne katkı sağladım. Ayrıca Scrum süreçlerine destek verdim.",
        },
      ],
    },
    projects: {
      title: "Öne Çıkan Projeler",
      tag: "Proje",
      items: {
        closestfood: {
          title: "ClosestFood",
          description:
            "Kullanıcıların gerçek zamanlı mesafe hesaplamalarıyla yakınlardaki restoranları bulmasını sağlayan konum tabanlı bir web uygulaması. Mesafe, puan, yorum sayısı ve genel skora göre gelişmiş filtreleme ve sıralama sunar. Dinamik mesafe biçimlendirme ve kullanıcı etkileşimine göre güncellenen duyarlı bir arayüz içerir.",
        },
        formix: {
          title: "Formix Studio",
          description:
            "Üretkenlik araçları için bir konteyner platform olarak tasarlanmış modüler bir masaüstü uygulaması. Şu anda yapılandırılmış girdiyi gerçek zamanlı Excel ve PDF önizlemelerine dönüştüren bir form dönüştürme aracı içeriyor. Mimari, yapay zeka destekli Excel asistanı gibi gelecekteki entegrasyonlara uygun kurgulandı.",
        },
        homechores: {
          title: "HomeChores",
          description:
            "Kullanıcıların ortak evlerde günlük işleri oluşturup atayabildiği ve takip edebildiği işbirlikçi bir ev yönetimi uygulaması. Gerçek zamanlı güncellemeler, rol tabanlı erişim ve ölçeklenebilir bir Supabase altyapısıyla modern bir full-stack mimari üzerine kuruldu.",
        },
        vibetrail: {
          title: "VibeTrail",
          description:
            "Flutter ve Firebase ile geliştirilmiş modern bir sosyal medya mobil uygulaması. Kullanıcıların müzik, film ve kitap gibi günlük ilgi alanları etrafında içerik paylaşıp keşfetmesini sağlar. Gerçek zamanlı beğeni, yorum ve özelleştirilebilir profilleri Firebase Auth, Firestore ve Storage ile destekler.",
        },
        tabu: {
          title: "Tabu Oyunu",
          description:
            "Flutter ve Firebase ile geliştirilmiş gerçek zamanlı çok oyunculu Tabu tarzı bir kelime oyunu. Takım tabanlı oynanış, dinamik skor takibi, özelleştirilebilir ayarlar ve Firestore tabanlı gerçek zamanlı senkronizasyon sunar.",
        },
      },
    },
    skills: {
      title: "Teknoloji Yığını",
    },
    languages: {
      title: "Diller",
      items: [
        { name: "İngilizce", level: "Tam Profesyonel Yeterlilik (C1)" },
        { name: "Türkçe", level: "Ana Dil" },
      ],
    },
    contact: {
      title: "İletişime Geçelim",
      body: "Birlikte çalışmak, bir proje konuşmak ya da sadece merhaba demek isterseniz aşağıdaki bağlantılardan bana ulaşabilirsiniz.",
      cta: { email: "E-posta Gönder", github: "GitHub", linkedin: "LinkedIn" },
    },
    footer: {
      rights: "Tüm hakları saklıdır.",
      built: "React, Three.js ve Tailwind CSS ile geliştirildi.",
    },
  },
};
