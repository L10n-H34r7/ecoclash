import { useState, useEffect, useRef } from "react";
import {
  Leaf,
  BookOpen,
  PlayCircle,
  Wrench,
  Home,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  TreePine,
  Recycle,
  Heart,
  Globe,
  Shield,
  Flower2,
  Sun,
  ArrowUp,
} from "lucide-react";

/* ───────── data ───────── */

const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Infokiosque", href: "#infokiosque" },
  { label: "Vidéokiosque", href: "#videokiosque" },
  { label: "Alternatives", href: "#alternatives" },
  { label: "Lieux de vie", href: "#lieux" },
  { label: "Liens", href: "#liens" },
];

const KEYWORDS = [
  "Partage de savoirs",
  "Infokiosque",
  "Vidéokiosque",
  "Alternatives pratiques",
  "Autoconstruction",
  "Décroissance",
  "Permaculture",
  "Écovillage",
  "Communauté",
  "Écologie",
  "Anarchie",
  "Résistance",
  "Altermondialisme",
  "Freegan",
  "Squat",
  "Action directe",
];

const INFO_CATEGORIES = [
  {
    icon: <TreePine className="w-8 h-8" />,
    title: "Habitat & Autoconstruction",
    desc: "Plans, tutos et fiches techniques pour construire yourte, tipi, dôme géodésique, tiny house… Construire son habitat avec ses propres mains.",
    tags: ["Yourte", "Tipi", "Dôme", "Tiny house", "Paille"],
  },
  {
    icon: <Flower2 className="w-8 h-8" />,
    title: "Permaculture & Agriculture",
    desc: "Cultiver la terre en harmonie avec la nature. Méthodes douces, semences, forêt comestible, agroécologie et autonomie alimentaire.",
    tags: ["Semences", "Forêt comestible", "Compost", "Agroécologie"],
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: "Énergie & Autonomie",
    desc: "Se chauffer, s'éclairer, produire de l'énergie autrement. Panneaux solaires, poêle de masse, méthanisation, récupération d'eau.",
    tags: ["Solaire", "Poêle de masse", "Eau", "Méthanisation"],
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Santé & Bien-être",
    desc: "Se soigner par les plantes, médecines douces, phytothérapie, alimentation saine et remèdes traditionnels.",
    tags: ["Phytothérapie", "Plantes", "Alimentation", "Remèdes"],
  },
  {
    icon: <Recycle className="w-8 h-8" />,
    title: "Récup' & Bricolage",
    desc: "Fabriquer, réparer, recycler. Donner une seconde vie aux objets, low-tech, DIY et astuces de récupération.",
    tags: ["Low-tech", "DIY", "Réparation", "Upcycling"],
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Textes & Réflexions",
    desc: "Essais, brochures, textes critiques sur la décroissance, l'écologie sociale, l'anticapitalisme et les alternatives.",
    tags: ["Essais", "Décroissance", "Écologie sociale", "Critique"],
  },
];

const VIDEO_CATEGORIES = [
  {
    title: "Documentaires",
    desc: "Films engagés sur l'écologie, les alternatives, la résistance et les communautés.",
    count: "50+",
    emoji: "🎬",
  },
  {
    title: "Court-métrages",
    desc: "Créations originales, fictions et animations sur les thèmes de l'écologie et de la liberté.",
    count: "20+",
    emoji: "🎞️",
  },
  {
    title: "Tutoriels vidéo",
    desc: "Guides pratiques en vidéo : autoconstruction, permaculture, récupération, autonomie.",
    count: "30+",
    emoji: "🔨",
  },
  {
    title: "Reportages",
    desc: "Vidéos de terrain dans les écolieux, squats, communautés et lieux de vie alternatifs.",
    count: "40+",
    emoji: "📹",
  },
];

const ALTERNATIVES = [
  {
    icon: <Home className="w-8 h-8" />,
    title: "Éco-habitat",
    desc: "Construire autrement : matériaux naturels, habitats groupés, écolieux, habitats légers et autonomie.",
  },
  {
    icon: <TreePine className="w-8 h-8" />,
    title: "Permaculture",
    desc: "Des jardins qui nourrissent, des écosystèmes qui s'auto-entretiennent. Concevoir avec la nature, pas contre elle.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Altermondialisme",
    desc: "Un autre monde est possible. Mouvements, réseaux et initiatives pour une mondialisation solidaire.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Résistance & Action",
    desc: "ZAD, occupations, actions directes, désobéissance civile. Résister pour protéger le vivant.",
  },
  {
    icon: <Recycle className="w-8 h-8" />,
    title: "Freegan & Récup",
    desc: "Grappillage, récupération de nourriture, anti-gaspillage. Refuser le système par nos modes de consommation.",
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Décroissance",
    desc: "Moins pour mieux. Repenser la richesse, redéfinir le progrès, vivre mieux avec moins.",
  },
];

const LIEUX = [
  {
    name: "Écovillages",
    desc: "Communautés intentionnelles vivant en harmonie avec la nature. Écovillages en France et dans le monde.",
    icon: "🏡",
  },
  {
    name: "Squats & Lieux occupés",
    desc: "Espaces réinvestis, centres sociaux, lieux de vie autogérés. L'occupation comme pratique d'émancipation.",
    icon: "🏚️",
  },
  {
    name: "Fermes communautaires",
    desc: "Ferme en collectif, WWOOFing, maraîchage partagé. Travailler la terre ensemble.",
    icon: "🌾",
  },
  {
    name: "ZAD & Zones de lutte",
    desc: "Zones à Défendre, lieux de résistance écologique et sociale. Notre-Dame-des-Landes, Bure, Sainte-Soline…",
    icon: "🔥",
  },
  {
    name: "Rainbow & Bases nomades",
    desc: "Gatherings彩虹, villages alternatifs éphémères, vie nomade et itinérance.",
    icon: "🌈",
  },
  {
    name: "Réseaux & Annuelles",
    desc: "Relier les lieux entre eux. Cartes, annuaires et bases de données des alternatives en France et en Europe.",
    icon: "🗺️",
  },
];

const LINKS = [
  {
    name: "Relie-toits",
    url: "https://relie-toits.org",
    desc: "Portail des acteurs des dynamiques participatives d'habitat",
  },
  {
    name: "Habitat Participatif Ouest",
    url: "https://www.habitatparticipatif-ouest.net/",
    desc: "Réseau breton d'habitat participatif",
  },
  {
    name: "Passerelle CO",
    url: "https://www.passerelleco.info/",
    desc: "Portail d'initiatives écologiques, annonces et réseaux",
  },
  {
    name: "Habiter Autrement",
    url: "https://www.habiter-autrement.org/",
    desc: "Écovillages et habitats alternatifs",
  },
  {
    name: "Colibris",
    url: "https://colibris-lemouvement.org",
    desc: "Mouvement pour la transition citoyenne",
  },
  {
    name: "Utopies Concrètes",
    url: "https://utopies-concretes.org",
    desc: "Réseau et carte d'initiatives en France",
  },
  {
    name: "Décroissons",
    url: "https://decroissons.wordpress.com",
    desc: "Annuaire alternatif d'écolieux en France",
  },
  {
    name: "Toits Alternatifs",
    url: "https://toitsalternatifs.fr",
    desc: "Habitat alternatif et écologique",
  },
];

/* ───────── helpers ───────── */

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ───────── sections ───────── */

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a1a0d]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#accueil"
            className="flex items-center gap-2 text-white font-bold text-xl tracking-wide"
          >
            <Leaf className="w-6 h-6 text-emerald-400" />
            <span className="hidden sm:inline">Ecoclash</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-emerald-100/80 hover:text-white hover:bg-emerald-900/40 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a1a0d]/98 backdrop-blur-lg border-t border-emerald-900/40">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-lg text-emerald-100/80 hover:text-white hover:bg-emerald-900/40 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* BG gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-[#0a1a0d] to-emerald-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.1),transparent_60%)]" />
      {/* Decorative circles */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-teal-500/5 blur-3xl" />

      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-emerald-400/10 animate-float"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 8}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <FadeIn>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Leaf className="w-10 h-10 text-emerald-400" />
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tight">
              Ecoclash
            </h1>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-lg sm:text-xl text-emerald-200/80 mb-8 font-light max-w-2xl mx-auto leading-relaxed">
            Partage de savoirs, Infokiosque, Vidéokiosque, alternatives
            pratiques, autoconstruction, décroissance, permaculture, écovillage,
            communauté, écologie, résistance, altermondialisme, freegan, squat,
            action directe…
          </p>
        </FadeIn>

        <FadeIn delay={500}>
          <blockquote className="relative max-w-xl mx-auto mb-10">
            <div className="absolute -left-4 -top-2 text-6xl text-emerald-500/30 font-serif">
              "
            </div>
            <p className="text-emerald-100/90 italic text-base sm:text-lg leading-relaxed pl-6 pr-2">
              On nous dit&nbsp;: Le bonheur c'est le progrès, faites un pas en
              avant. Et c'est le progrès… mais ce n'est jamais le bonheur. Alors
              si on faisait un pas de côté&nbsp;! Si on essayait autre chose&nbsp;!
              Si on faisait un pas de côté, on verrait ce qu'on ne voit jamais.
            </p>
          </blockquote>
        </FadeIn>

        <FadeIn delay={700}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {KEYWORDS.slice(0, 8).map((kw) => (
              <span
                key={kw}
                className="px-3 py-1 text-xs sm:text-sm rounded-full border border-emerald-500/30 text-emerald-300/80 bg-emerald-900/20 backdrop-blur-sm"
              >
                {kw}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={900}>
          <a
            href="#infokiosque"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-emerald-600/30 hover:-translate-y-0.5"
          >
            Explorer
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

function SectionTitle({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <FadeIn>
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center gap-2 mb-4">
          <span className="text-emerald-400">{icon}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {title}
          </h2>
        </div>
        <p className="text-emerald-200/60 max-w-2xl mx-auto">{subtitle}</p>
        <div className="mt-4 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
      </div>
    </FadeIn>
  );
}

function Infokiosque() {
  return (
    <section id="infokiosque" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a0d] via-[#0d1f10] to-[#0a1a0d]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          icon={<BookOpen className="w-8 h-8" />}
          title="Infokiosque"
          subtitle="Fiches techniques, plans, tutoriels, documents… Le but de cet infokiosque est de réunir et partager des infos pratiques pour cultiver, construire, fabriquer, bricoler, se chauffer, manger, se soigner…"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INFO_CATEGORIES.map((cat, i) => (
            <FadeIn key={cat.title} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-emerald-800/30 bg-emerald-950/20 backdrop-blur-sm p-6 hover:bg-emerald-900/30 hover:border-emerald-600/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/20">
                <div className="text-emerald-400 mb-4 group-hover:text-emerald-300 transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {cat.title}
                </h3>
                <p className="text-emerald-200/60 text-sm leading-relaxed mb-4">
                  {cat.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-md bg-emerald-900/40 text-emerald-300/70 border border-emerald-800/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Videokiosque() {
  return (
    <section id="videokiosque" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a0d] via-[#111f14] to-[#0a1a0d]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          icon={<PlayCircle className="w-8 h-8" />}
          title="Vidéokiosque"
          subtitle="Reportages, courts-métrages, documentaires, présentations… Vidéos sur les alternatives, collectifs, médias, culture et écologie."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VIDEO_CATEGORIES.map((cat, i) => (
            <FadeIn key={cat.title} delay={i * 100}>
              <div className="group relative rounded-2xl border border-emerald-800/30 bg-emerald-950/20 p-6 hover:bg-emerald-900/30 hover:border-emerald-600/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/20 overflow-hidden">
                <div className="absolute top-3 right-3 text-xs font-bold text-emerald-400/60 bg-emerald-900/50 rounded-full px-2.5 py-0.5">
                  {cat.count}
                </div>
                <div className="text-4xl mb-4">{cat.emoji}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {cat.title}
                </h3>
                <p className="text-emerald-200/60 text-sm leading-relaxed">
                  {cat.desc}
                </p>
                <div className="mt-4 text-emerald-400/50 group-hover:text-emerald-300 transition-colors">
                  <PlayCircle className="w-6 h-6" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Alternatives() {
  return (
    <section id="alternatives" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a0d] via-[#0d1f10] to-[#0a1a0d]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          icon={<Wrench className="w-8 h-8" />}
          title="Alternatives Pratiques"
          subtitle="Des alternatives concrètes pour vivre autrement. Autoconstruction, décroissance, permaculture, freeganisme, résistance et action directe."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ALTERNATIVES.map((alt, i) => (
            <FadeIn key={alt.title} delay={i * 100}>
              <div className="group rounded-2xl border border-emerald-800/30 bg-emerald-950/20 p-6 hover:bg-emerald-900/30 hover:border-emerald-600/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/20">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    {alt.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {alt.title}
                    </h3>
                    <p className="text-emerald-200/60 text-sm leading-relaxed">
                      {alt.desc}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Quote */}
        <FadeIn delay={300}>
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <blockquote className="text-emerald-200/70 italic text-lg leading-relaxed">
              «&nbsp;Si vous avez l'impression que vous êtes trop petit pour
              pouvoir changer quelque chose, essayez donc de dormir avec un
              moustique.&nbsp;»
            </blockquote>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function LieuxDeVie() {
  return (
    <section id="lieux" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a0d] via-[#111f14] to-[#0a1a0d]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          icon={<Home className="w-8 h-8" />}
          title="Lieux de Vie"
          subtitle="Écovillages, squats, fermes communautaires, ZAD, bases nomades… Les lieux où l'on expérimente d'autres façons de vivre ensemble."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LIEUX.map((lieu, i) => (
            <FadeIn key={lieu.name} delay={i * 80}>
              <div className="group rounded-2xl border border-emerald-800/30 bg-emerald-950/20 p-5 hover:bg-emerald-900/30 hover:border-emerald-600/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/20">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{lieu.icon}</span>
                  <h3 className="text-lg font-semibold text-white">
                    {lieu.name}
                  </h3>
                </div>
                <p className="text-emerald-200/60 text-sm leading-relaxed">
                  {lieu.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Liens() {
  return (
    <section id="liens" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a0d] via-[#0d1f10] to-[#0a1a0d]" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          icon={<ExternalLink className="w-8 h-8" />}
          title="Liens & Ressources"
          subtitle="Annuaire de sites, réseaux et portails pour aller plus loin dans la découverte d'alternatives."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {LINKS.map((link, i) => (
            <FadeIn key={link.name} delay={i * 80}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-xl border border-emerald-800/30 bg-emerald-950/20 p-5 hover:bg-emerald-900/30 hover:border-emerald-600/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-900/20"
              >
                <div className="shrink-0 mt-0.5 text-emerald-400/60 group-hover:text-emerald-300 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white group-hover:text-emerald-200 transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-emerald-200/50 text-sm mt-1">
                    {link.desc}
                  </p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-emerald-900/30">
      <div className="absolute inset-0 bg-[#060e08]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Leaf className="w-5 h-5 text-emerald-400" />
              <span className="text-white font-bold text-lg">Ecoclash</span>
            </div>
            <p className="text-emerald-200/40 text-sm leading-relaxed">
              Partage de savoirs, alternatives pratiques, autoconstruction,
              permaculture, écovillage, communauté, écologie, résistance…
            </p>
          </div>

          <div>
            <h4 className="text-emerald-300/80 font-semibold mb-3 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <div className="space-y-2">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block text-emerald-200/40 hover:text-emerald-200 text-sm transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-emerald-300/80 font-semibold mb-3 text-sm uppercase tracking-wider">
              Ressources
            </h4>
            <div className="space-y-2">
              {LINKS.slice(0, 4).map((l) => (
                <a
                  key={l.name}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-emerald-200/40 hover:text-emerald-200 text-sm transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  {l.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-emerald-900/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-emerald-200/30 text-xs">
            © {new Date().getFullYear()} Ecoclash — Partage de savoirs
          </p>
          <p className="text-emerald-200/20 text-xs">
            Refonte moderne du site original{" "}
            <a
              href="https://ecoclash.jimdofree.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-emerald-200/40 transition-colors"
            >
              ecoclash.jimdofree.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-emerald-700/80 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-900/30 flex items-center justify-center transition-all hover:-translate-y-0.5 backdrop-blur-sm"
      aria-label="Retour en haut"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

/* ───────── main ───────── */

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a1a0d] text-white antialiased">
      <Navbar />
      <Hero />
      <Infokiosque />
      <Videokiosque />
      <Alternatives />
      <LieuxDeVie />
      <Liens />
      <Footer />
      <BackToTop />
    </div>
  );
}
