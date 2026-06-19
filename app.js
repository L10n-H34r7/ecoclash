/* ==========================================================================
   ECOCLASH — COMPLETE STATIC VANILLA JAVASCRIPT APPLICATION (REMAKE 2026)
   100% Pure Vanilla HTML/CSS/JS — No Fake Comments — No User Inputs
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. MULTILINGUAL TRANSLATION DICTIONARY --- */
    const i18n = {
        fr: {
            skipLink: "Aller au contenu principal",
            navArticles: "Articles & Tutoriels (24)",
            navBookmarks: "Signets & Liens (Sitemap)",
            navManifesto: "Notre Démarche",
            themeToggleTitle: "Mode sombre / Mode clair",
            heroTitle: "Autonomie, Écologie & <span class='gradient-text'>Résistance Pratique</span>",
            heroSubtitle: "Partage de savoirs, Infokiosque, alternatives pratiques, autoconstruction, décroissance, permaculture, communautés autonomes, low-tech et action directe.",
            heroBtnExplore: "Explorer les 24 Guides",
            heroBtnBookmarks: "Consulter les Signets",
            sectionArticlesTitle: "Savoirs & Guides Pratiques",
            sectionArticlesDesc: "Une base de connaissances libre et accessible avec liens de téléchargement MediaFire & PDF directs.",
            searchPlaceholder: "Rechercher un tutoriel, yourte, pain, dôme, MediaFire...",
            loading: "Chargement de la base de savoirs...",
            catAll: "Tout les articles",
            catHabitat: "Habitat & Autoconstruction",
            catPermaculture: "Cultiver & Jardiner",
            catProduction: "Production & Transformation",
            catArtisanat: "Artisanat & Récup'",
            catMediatheque: "Médiathèque & Archives",
            catAction: "Action & Luttes (ZAD)",
            noResultsTitle: "Aucun article ne correspond à votre recherche",
            noResultsDesc: "Essayez d'autres mots-clés ou sélectionnez une autre catégorie.",
            btnResetFilters: "Réinitialiser les filtres",
            readMoreBtn: "Lire le guide",
            readingTime: "min de lecture",
            downloadPrefix: "Télécharger",
            noImageFallback: "Guide de Savoirs Pratiques",
            bookmarksTitle: "Signets, Synergies & Plan du Site",
            bookmarksSubtitle: "L'intégralité des réseaux, banques de données et pages annexes de l'infokiosque.",
            visitLinkBtn: "Visiter le site",
            manifestoTitle: "Pourquoi Ecoclash ?",
            manifestoSubtitle: "Un pas de côté pour retrouver la puissance d'agir.",
            manifestoCard1Title: "Partage Libre et Gratuit",
            manifestoCard1Text: "Dans un monde où tout se monnaye, la diffusion inconditionnelle des savoir-faire d'autonomie est un acte de résistance. Tous nos documents, PDF, plans et astuces sont en accès libre, sans inscription ni traçage commercial.",
            manifestoCard2Title: "Autoconstruction & Low-Tech",
            manifestoCard2Text: "Se réapproprier nos habitats, notre énergie et notre alimentation. Qu'il s'agisse de monter une yourte, un dôme géodésique, de cultiver la spiruline ou de brasser sa bière, l'objectif est de s'affranchir des dépendances industrielles.",
            manifestoCard3Title: "Résistance & Luttes de Terrain",
            manifestoCard3Text: "La théorie ne suffit pas. Nous soutenons activement les zones à défendre (ZAD), les squats autogérés, les écolieux collectifs et toutes les formes d'actions directes visant à stopper la destruction du vivant.",
            dalaiTitle: "Trop petit ?!",
            dalaiQuote: "\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique... et vous verrez lequel des deux empêche l'autre de dormir !\"",
            staticContactTitle: "Mentions & Infokiosque Statique",
            staticContactText: "Cette version de la base de connaissances (Remake 2026) est un infokiosque web entièrement statique hébergé sur GitHub Pages. Conformément à notre charte de protection du vivant et de la vie privée, ce site ne comporte aucun formulaire, aucun script de traçage, aucun cookie et aucune collecte d'entrées utilisateur (No user inputs). Pour échanger des savoirs ou proposer de nouveaux PDF, rejoignez directement les réseaux collectifs de terrain et les zones autonomes.",
            modalResourcesTitle: "Documents, PDF & Liens de Téléchargement Libres :",
            shareArticle: "Partager ce savoir :",
            copyLinkBtn: "Copier le lien",
            copiedLinkBtn: "Lien copié !",
            footerBio: "Version améliorée, modernisée et mise à jour (Remake 2026). Partage de savoirs d'autonomie, d'autoconstruction et d'écologie de lutte. Conçu en pure Vanilla HTML / CSS / JS pour GitHub Pages. Version 100% statique sans formulaires ni traceurs.",
            footerOpenSource: "Savoirs Libres pour un Monde Libre",
            footerNavTitle: "Navigation",
            footerTechTitle: "Spécifications Techniques",
            footerReadmeLink: "📖 Consulter le README.md"
        },
        en: {
            skipLink: "Skip to main content",
            navArticles: "Articles & Tutorials (24)",
            navBookmarks: "Bookmarks & Links (Sitemap)",
            navManifesto: "Our Approach",
            themeToggleTitle: "Dark mode / Light mode",
            heroTitle: "Autonomy, Ecology & <span class='gradient-text'>Practical Resistance</span>",
            heroSubtitle: "Knowledge sharing, Infokiosk, practical DIY alternatives, degrowth, permaculture, autonomous eco-communities, and direct action.",
            heroBtnExplore: "Explore all 24 Guides",
            heroBtnBookmarks: "View Bookmarks Map",
            sectionArticlesTitle: "Knowledge & Practical Guides",
            sectionArticlesDesc: "An open and accessible knowledge base featuring working MediaFire & direct PDF downloads.",
            searchPlaceholder: "Search for a tutorial, yurt, bread, dome, MediaFire...",
            loading: "Loading knowledge database...",
            catAll: "All articles",
            catHabitat: "Habitat & Self-Building",
            catPermaculture: "Gardening & Permaculture",
            catProduction: "Production & Processing",
            catArtisanat: "Crafts & Upcycling",
            catMediatheque: "Media Library & Archives",
            catAction: "Action & Struggles (ZAD)",
            noResultsTitle: "No articles match your search",
            noResultsDesc: "Try searching with different keywords or selecting another category.",
            btnResetFilters: "Reset filters",
            readMoreBtn: "Read guide",
            readingTime: "min read",
            downloadPrefix: "Download",
            noImageFallback: "Practical Knowledge Manual",
            bookmarksTitle: "Bookmarks, Synergies & Sitemap",
            bookmarksSubtitle: "The complete directory of decentralized networks, databases, and subpages.",
            visitLinkBtn: "Visit website",
            manifestoTitle: "Why Ecoclash?",
            manifestoSubtitle: "A step sideways to regain our power to act.",
            manifestoCard1Title: "Free & Open Sharing",
            manifestoCard1Text: "In a world where everything is commodified, the unconditional sharing of autonomy skills is an act of resistance. All our PDF manuals, blueprints, and tips are entirely open access, requiring no registration or commercial tracking.",
            manifestoCard2Title: "Self-Building & Low-Tech",
            manifestoCard2Text: "Reclaiming our housing, energy, and food. Whether it's setting up a yurt, building a geodesic dome, cultivating spirulina, or brewing your own beer, the goal is to break free from industrial dependency.",
            manifestoCard3Title: "Resistance & Grassroots Struggles",
            manifestoCard3Text: "Theory is not enough. We actively support autonomous defense zones (ZADs), self-managed squats, collective eco-villages, and all forms of direct action aimed at halting the destruction of the living world.",
            dalaiTitle: "Too small?!",
            dalaiQuote: "\"If you think you are too small to make a difference, try sleeping in a closed room with a mosquito... and you will see which one keeps the other from sleeping!\"",
            staticContactTitle: "Legal & Static Infokiosk Mission",
            staticContactText: "This upgraded repository (Remake 2026) is a 100% static web infokiosk sustainably hosted on GitHub Pages. In strict accordance with our ethics of digital decentralization and personal privacy, this website contains absolutely no interactive data collection forms, no analytics trackers, no cookies, and no simulated user inputs. To circulate new technical PDF manuals or participate in grassroots actions, connect directly with localized decentralized defense collectives.",
            modalResourcesTitle: "Working Open PDF Documents & MediaFire Downloads:",
            shareArticle: "Share this knowledge:",
            copyLinkBtn: "Copy link",
            copiedLinkBtn: "Link copied!",
            footerBio: "Upgraded, modernized, and updated repository (Remake 2026). Sharing practical self-reliance, self-building, and ecological resistance wisdom. Built in pure Vanilla HTML / CSS / JS for GitHub Pages. Completely static design without trackers or user input forms.",
            footerOpenSource: "Free Knowledge for a Free World",
            footerNavTitle: "Navigation",
            footerTechTitle: "Technical Specifications",
            footerReadmeLink: "📖 View README.md"
        },
        es: {
            skipLink: "Saltar al contenido principal",
            navArticles: "Artículos y Tutoriales (24)",
            navBookmarks: "Signets y Enlaces (Sitemap)",
            navManifesto: "Nuestro Enfoque",
            themeToggleTitle: "Modo oscuro / Modo claro",
            heroTitle: "Autonomía, Ecología y <span class='gradient-text'>Resistencia Práctica</span>",
            heroSubtitle: "Intercambio de saberes, Infokiosco, alternativas prácticas de bricolaje, decrecimiento, permacultura, comunidades autónomas, low-tech y acción directa.",
            heroBtnExplore: "Explorar las 24 Guías",
            heroBtnBookmarks: "Consultar Enlaces",
            sectionArticlesTitle: "Saberes y Guías Prácticas",
            sectionArticlesDesc: "Una base de conocimientos libre y accesible con enlaces de descarga directa de MediaFire y PDF.",
            searchPlaceholder: "Buscar un tutorial, yurt, pan, domo, MediaFire...",
            loading: "Cargando la base de saberes...",
            catAll: "Todos los artículos",
            catHabitat: "Hábitat y Autoconstrucción",
            catPermaculture: "Cultivo y Jardinería",
            catProduction: "Producción y Transformación",
            catArtisanat: "Artesanía y Reciclaje",
            catMediatheque: "Mediateca y Archivos",
            catAction: "Acción y Luchas (ZAD)",
            noResultsTitle: "Ningún artículo coincide con tu búsqueda",
            noResultsDesc: "Intenta buscar con otras palabras clave o selecciona otra categoría.",
            btnResetFilters: "Restablecer filters",
            readMoreBtn: "Leer guía",
            readingTime: "min de lectura",
            downloadPrefix: "Descargar",
            noImageFallback: "Manual de Saberes Prácticos",
            bookmarksTitle: "Sinergias, Enlaces y Mapa del Sitio",
            bookmarksSubtitle: "Todo el directorio de redes descentralizadas, bases de datos y subpáginas amigas.",
            visitLinkBtn: "Visitar web",
            manifestoTitle: "¿Por qué Ecoclash?",
            manifestoSubtitle: "Un paso a un lado para recuperar el poder de actuar.",
            manifestoCard1Title: "Intercambio Libre y Gratuito",
            manifestoCard1Text: "En un mundo donde todo se comercializa, la difusión incondicional de habilidades de autonomía es un acto de resistencia. Todos nuestros documentos, PDF, planos y trucos son de libre acceso, sin registro ni seguimiento comercial.",
            manifestoCard2Title: "Autoconstrucción y Low-Tech",
            manifestoCard2Text: "Reapropiarnos de nuestras viviendas, nuestra energía y nuestros alimentos. Ya sea montando una yurt, un domo geodésico, cultivando espirulina o elaborando tu propia cerveza, el objetivo es liberarnos de la dependencia industrial.",
            manifestoCard3Title: "Resistencia y Luchas de Base",
            manifestoCard3Text: "La teoría no es suficiente. Apoyamos activamente las zonas a defender (ZAD), los centros sociales ocupados y autogestionados, las eco-aldeas y todas las formas de acción directa orientadas a detener la destrucción de la tierra.",
            dalaiTitle: "¡¿Demasiado pequeño?!",
            dalaiQuote: "\"Si crees que eres demasiado pequeño para marcar la diferencia, intenta dormir en una habitación cerrada con un mosquito... ¡y verás cuál de los dos impide que el otro duerma!\"",
            staticContactTitle: "Misión y Privacidad del Infokiosco",
            staticContactText: "Este repositorio actualizado (Remake 2026) es un infokiosco web 100% estático y libre alojado de forma duradera en GitHub Pages. En estricto cumplimiento con nuestros principios de defensa de la privacidad, este sitio no contiene ningún formulario de recolección de datos, ningún script de rastreo, ningún archivo cookie y ninguna entrada de usuario simulada (Sin user inputs). Para compartir nuevos manuales en PDF o participar en acciones colectivas, intégrate directamente en las redes comunitarias de resistencia en tu territorio.",
            modalResourcesTitle: "Documentos, PDF y Descargas de MediaFire Libres:",
            shareArticle: "Compartir este saber:",
            copyLinkBtn: "Copiar enlace",
            copiedLinkBtn: "¡Enlace copiado!",
            footerBio: "Versión mejorada, modernizada y actualizada (Remake 2026). Intercambio de saberes de autonomía, autoconstrucción y resistencia ecológica. Creado en puro Vanilla HTML / CSS / JS para GitHub Pages. Plataforma 100% estática sin rastreadores ni entradas de usuario.",
            footerOpenSource: "Saberes Libres para un Mundo Libre",
            footerNavTitle: "Navegación",
            footerTechTitle: "Especificaciones Técnicas",
            footerReadmeLink: "📖 Consultar el README.md"
        }
    };

    /* --- 2. QUOTE ROTATOR --- */
    const quoteData = {
        fr: "On nous dit: Le bonheur c'est le progrès faites un pas en avant. Et c'est le progrès... mais ce n'est jamais le bonheur. Alors si on faisait un pas de côté! Si on essayait autre chose! Si on faisait un pas de côté, on verrait ce qu'on ne voit jamais.",
        en: "They tell us: Happiness is progress, take a step forward. And it's progress... but it's never happiness. So what if we took a step sideways! What if we tried something else! If we took a step sideways, we would see what we never otherwise see.",
        es: "Nos dicen: La felicidad es el progreso, da un paso adelante. Y es progreso... pero nunca es felicidad. ¡Entonces, ¿qué tal si damos un paso a un lado! ¿Y si intentamos otra cosa! Si diéramos un paso a un lado, veríamos lo que nunca vemos."
    };

    /* --- 3. FULL ARTICLE DATABASE (24 Pristine Articles with OG Images and Working MediaFire links) --- */
    const articles = [
    {
        "id": "lieux-de-vie-collectifs-fermes-squat-ecolieu",
        "category": "habitat",
        "date": "2015/11/25",
        "readingTime": 15,
        "image": "https://image.jimcdn.com/app/cms/image/transf/dimension=109x1024:format=jpg/path/s6b5d09a755d07b57/image/i53a05fffa69e0e5a/version/1448447311/image.jpg",
        "tags": [],
        "title": {
            "fr": "Lieux de vie, collectifs, fermes, squat, ecolieu",
            "en": "Collective Living Spaces, Reclaimed Farms & Autonomous Squats",
            "es": "Espacios de Vida Colectivos, Granjas Recuperadas y Centros Ocupados"
        },
        "desc": {
            "fr": "🌐 Réseaux, Associations & Annuaires de Lieux (mise à jour avril 2026) ReclaimTheFields.org — Constellation européenne de paysan·nes, sans‑terre et collectifs reprenant la main sur la terre et la\n        production alime...",
            "en": "Complete engineering guidelines, structural calculation tables, blueprints, and practical instructions for natural DIY counter-culture habitats.",
            "es": "Planos de ingeniería completos, tablas de cálculo estructural y guías prácticas paso a paso para la autoconstrucción de viviendas ecológicas y alternativas."
        },
        "content": {
            "fr": "<p>🌐 Réseaux, Associations & Annuaires de Lieux (mise à jour avril 2026)</p><p>ReclaimTheFields.org — Constellation européenne de paysan·nes, sans‑terre et collectifs reprenant la main sur la terre et la\n        production alimentaire. Camps, actions, rencontres. (Actif)</p><p>Wwolfing.wordpress.com — « Wwoofing with teeth » : blog issu de Reclaim the Fields sur le wwoofing militant (ZAD, fermes\n        autogérées, etc.). Plus mis à jour mais toujours consultable. (Actif, contenu ancien)</p><p>GEN‑Europe.org — Global Ecovillage Network – branche européenne : carte interactive, annuaire d’écovillages, projets, formations,\n        événements. (Actif)</p><p>GEN – Global Ecovillage Network (gen.ecovillage.org) — Réseau international des écovillages, avec carte mondiale et nombreuses\n        ressources. (Actif)</p><p>Eurotopia.de — Annuaire/guide de communautés intentionnelles et écovillages en Europe, version anglaise du site Eurotopia.\n        (Actif)</p><p>EYFA.org — European Youth For Action : réseau de jeunesse écolo‑radicale, rencontres (Ecotopia, camps, caravanes à vélo…). (Actif)</p><p>Habiter-Autrement.org – Écolieux / Écovillages — Dossier très riche (en français) sur les écovillages,\n        écolieux, écohameaux, avec de nombreux liens complémentaires. (Actif)</p><p>Passerelle Éco — Revue & réseau d’écovillages, habitats groupés, écolieux en France. Annonces, petites annonces, fiches de\n        lieux. (Actif)</p><p>HALEM France — Habitant·es de Logements Éphémères ou Mobiles : défense des modes de vie mobiles/légers (yourtes, caravanes, camions,\n        cabanes, etc.). (Actif, très vivant)</p><p>TerreDeLiens.org — Mouvement qui achète des terres agricoles pour les soustraire à la spéculation et installer des paysan·nes en\n        bio, souvent en collectif. (Actif)</p><p>Colibris – Mouvement pour la Terre et l’Humanisme — Mouvement fondé autour de Pierre Rabhi, soutenant la transition\n        (écologie, éducation, habitat participatif). Carte d’initiatives, outils, MOOC. (Actif)</p><p>Écolieux‑de‑France (ecolieuxdefrance.free.fr) — Ancien mais toujours consultable : gros répertoire d’écolieux, concepts,\n        textes. (Actif comme archive web)</p><p>TerraVie.org — Fonds foncier communautaire au Québec : préserve des terres à perpétuité et les transforme en aires protégées et lieux\n        de vie collectifs. (Actif)</p><p>PermacultureGlobal.com (PermacultureGlobal.org) — Carte et base de données mondiale de projets et praticiens de permaculture.\n        (Actif)</p><p>Wikipedia – Category:Intentional communities — Catégorie Wikipédia listant de nombreuses\n        communautés intentionnelles dans le monde. (Actif, mis à jour)</p><p>IC.org — Foundation for Intentional Community (ex‑FIC) : base de données mondiale de communautés, ressources, livres, formations.\n        (Actif)</p><p>Ecovillage Wiki (Fandom) — Petit wiki collaboratif anglophone sur les écovillages. (Actif, contenu modeste)</p><p>SustainableCommunitiesAroundTheWorld.blogspot.com — Blog en anglais sur des communautés durables et\n        wwoofing, peu mis à jour mais toujours accessible. (Actif comme archive)</p><p>PlanetFriendly.net/community — Page anglophone listant de nombreuses communautés intentionnelles et écovillages\n        (Canada & international), au sein du portail People & Planet. (Actif)</p><p>LivingInTheFuture.org — Série de +60 courts métrages et films documentaires sur des écovillages et communautés (Lammas,\n        Findhorn, etc.). (Actif)</p><p>Groupe Dailymotion « Ecovillage » — Ancien groupe vidéo Dailymotion rassemblant des vidéos sur les écovillages et\n        alternatives. (Actif mais plus vraiment alimenté)</p><p>Planetfriendly – Intentional Communities & Ecovillages — Guide/portail de liens et ressources (principalement\n        Amérique du Nord). (Actif)</p><p>⚠️ Sites en veille, projets historiques ou archives consultables</p><p>Sharewiki – « Lieu de vie ouvert » — Page d’un ancien wiki collaboratif sur les lieux de vie ouverts, communautés,\n        projets collectifs. Le site Sharewiki est signalé comme « dormant » ; accès aléatoire. (En veille / archive)</p><p>Carte Google « Lieux de vie, bases nomades, collectifs, squats, écolieux » — Carte MyMaps collaborative recensant lieux de vie, squats, fermes, écolieux, bases nomades en\n        Europe. (Toujours en ligne, mises à jour variables)</p><p>Voyageurs.en-transition.fr — Blog & carte des alternatives (voyageurs en transition). Contenu surtout 2000–2010, souvent\n        cité comme ressource ; le site répond mal depuis 2024. (En veille / difficile d’accès)</p><p>Réseau des ÉcoHameaux & ÉcoVillages du Québec (REEQ) — Ancien site hébergé sur Tripod pour le REEQ, très souvent cité\n        dans la littérature. L’hébergeur Tripod est en grande partie hors‑service. (Archive web, généralement hors‑ligne)</p><p>Communauté en fête (Canada) — Site « Celebrating Community / Communauté en fête » présentant des communautés,\n        cohabitats, écovillages au Canada (fr/en). Toujours consultable, mais plutôt figé. (Active comme archive historique)</p><p>LaPlumeDeFeu.com – Revue Aube (Québec) — Site des éditions La Plume de Feu et de la revue Aube sur les écovillages &\n        alternatives au Québec. Domaine très difficile à atteindre aujourd’hui ; une partie des contenus subsiste via le sous‑domaine aube.laplumedefeu.com et des archives. (En\n        grande veille / à chercher via archives)</p><p>Sharewiki – List of ecovillages — Ancienne liste collaborative d’écovillages sur Sharewiki. (En veille, site peu\n        maintenu)</p><p>Sustainable Communities Around the World — Blog d’histoires d’écovillages et de wwoofing,\n        principalement années 2000–2010. (En veille, toujours lisible)</p><p>Anarchopedia – Communautarisme de lieu de vie — Article théorique sur les communautés de lieux de vie.\n        (Wiki très irrégulier, à considérer comme archive)</p><p>🔴 Liens cassés, domaines réutilisés ou chemins obsolètes</p><p>Ancienne liste GEN Europe (php.ecovillage.org) — Ancien script de liste\n        d’écovillages membres. Remplacé par l’annuaire sur GEN‑Europe.org. (Lien obsolète)</p><p>http://www.gen-europe.org/ — Lien encore valide mais redirigé ; il faut désormais utiliser https://gen-europe.org/. (Chemin ancien, redirigé)</p><p>PasserelleEco.info/index.php3 — Ancienne URL spécifique ; le site fonctionne désormais directement sur https://www.passerelleco.info/. (Chemin obsolète, domaine actif)</p><p>Macabane.info — Ancien site du « Mouvement autogéré des chercheurs en habitat autonome novateur et écologique ». Le domaine ne répond\n        plus correctement. D’autres structures portent aujourd’hui le nom « Ma Cabane » (centre de jour, matériaux naturels) mais ce ne sont pas forcément les mêmes projets. (Site d’origine\n        hors‑ligne)</p><p>Katipik.free.fr — Collectif de lutte contre les expulsions de cabanes en Ariège (France), hébergé sur Free. L’URL ne répond plus, même si\n        le contact mail [email protected] apparaît encore dans certains guides. (Lien cassé)</p><p>Permisdevivre.org — Réseau « Permis de vivre » pour la reconnaissance des habitats alternatifs (yourtes, tipis, cabanes…). Le domaine\n        est aujourd’hui injoignable ; attention à ne pas confondre avec d’autres projets récents nommés « Permis de vivre » n’ayant pas le même objet. (Site hors‑ligne)</p><p>Etyc.org/paradigmes — Ancien lien « Paradigmes » d’aide à la création de lieux de vie alternatifs. Le domaine\n        etyc.org ne semble plus pointer vers ce projet (ETYC désigne aujourd’hui d’autres structures). (Lien cassé / réutilisé)</p><p>Archiutop.com – L’Archipel des Utopies — Cette ancienne URL ne répond plus. L’association existe toujours sous le nom\n        Archipel des Utopies sur un nouveau site : archipel-utopies.com. (Lien obsolète, nouveau domaine actif)</p><p>GaiaDir – annuaire d’écovillages (fr.gaiadir.com) — Le domaine est désormais une page de parking/vente et ne remplit plus son\n        rôle d’annuaire. (Domaine repris)</p><p>LaPlumeDeFeu.com — Très difficile à joindre, parfois totalement inaccessible ; une bonne partie des contenus ne sont plus\n        consultables directement. (Pratiquement hors‑ligne)</p><p>http://gen.ecovillage.org/ — URL générique parfois bloquée par des protections techniques ; pour accéder au réseau global, utiliser\n        plutôt https://ecovillage.org/. (Chemin problématique, domaine actif)</p><p>Nomadbase.org — Ancien blog/réseau de « nomadbases » (maisons ouvertes aux nomades). Nomadwiki indique le projet comme inactif et le\n        domaine semble non enregistré. (Projet et domaine inactifs)</p><p>ICDB.org — Ne pointe plus vers une base de données de communautés intentionnelles mais vers un site d’actualités généraliste. (Domaine\n        réutilisé, plus lié aux communautés)</p><p>Ancien lien Ekopedia (fr.ekopedia.org) — Remplacé par https://www.ekopedia.fr/wiki/Comment_monter_un_projet_d%27%C3%A9colieu. (URL obsolète, article\n        toujours disponible sur Ekopedia.fr)</p><p>Spirale.Attac – L’écohabitat, l’habitat groupé — Les anciens liens Spirale d’Attac semblent\n        avoir été déplacés ou supprimés ; ces URL ne répondent plus. (Liens cassés)</p><p>Spirale.Attac – Vie communautaire ou collective — Même situation que ci‑dessus : ancien\n        article aujourd’hui introuvable via cette URL. (Lien cassé)</p><p>Radio‑Canada – « Génération hippie » — Lien vers une ancienne URL des archives.\n        Les archives existent toujours mais la structure des liens a changé ; à rechercher directement sur le site de Radio‑Canada. (Permalien obsolète)</p><p>🌈 Rainbow Family & Communautés associées (mise à jour avril 2026)</p><p>✅ Liens Rainbow actifs</p><p>Rainbow Family France — Blog/site de la famille Rainbow en France : infos, appels à rassemblements, récits, chants…\n        (Actif)</p><p>WelcomeHome.org – Rainbow Family — Page historique « non officielle » de la Rainbow Family of Living Light, infos\n        internationales, anciens calendriers de gatherings, textes de référence. (Actif, plutôt archivistique)</p><p>GlobalNatives.org — Club mondial de familles et « famillages » (familles élargies), échanges éducatifs & séjours, dans un\n        esprit de communauté globale. (Actif)</p><p>Rainbow Guide Online (Bliss‑Fire) — Ancien « Rainbow Guide » en ligne (listes de contacts, infos pratiques). Le\n        site existe encore mais derrière un système de protection (chargement parfois lent). (Actif mais accès parfois difficile)</p><p>⚠️ Sites en veille ou archives encore accessibles</p><p>SomewhereUnderTheRainbow.org — Ancien site non officiel expliquant les Rainbow Gatherings avec un calendrier mondial.\n        Souvent cité, mais difficile ou impossible à atteindre depuis 2025 ; à considérer comme archive. (En veille / potentiellement hors‑ligne)</p><p>RainbowInfo.ch — Ancien site d’infos Rainbow Europe (guides, FAQ, rassemblements). Quelques pages semblent avoir disparu\n        (/info.htm renvoie en erreur) et l’accès est très incertain. (Archive, non maintenu)</p><p>BeneficioFamily.com — Ancien forum et site de la communauté de Beneficio (Orgiva, Espagne), souvent décrite comme un\n        « Rainbow permanent ». Le domaine ne répond plus correctement. Pour des infos actuelles, voir par ex. la fiche NuMundo : Beneficio – NuMundo. (Site en panne / communauté toujours existante)</p><p>Shanti Terrian Project (AudeCulture) — Projet de lieu simple, yourtes, arc‑en‑ciel à Rennes‑les‑Bains (Aude). L’association a\n        existé, mais le site n’est plus joignable. (Projet historique, site hors‑ligne)</p><p>SpiritOfNature.ch — Ancien site « Spirit of Nature & Nature of Spirit », style Rainbow/New Age (CH/NZ). Le domaine\n        semble injoignable aujourd’hui. (Archive disparaissant)</p><p>Rainbow Gathering Guide (rainbowinfo.ch/info.htm) — Ancienne page de guide Rainbow, souvent citée (podcasts, wikis). Retourne\n        maintenant une erreur 404. (Lien spécifique obsolète)</p><p>🔴 Liens cassés / domaines repris</p><p>CNR.ch – Center New Reality (Suisse) — Ancien centre Rainbow/« New Reality » à Eriz. Le domaine est désormais garé chez un revendeur (Nameshift)\n        et n’a plus de lien avec le projet. (Domaine repris, site d’origine disparu)</p><p>Pelerins.populus.org — « Pèlerins de l’arc‑en‑ciel », projet de lieu Rainbow en France, hébergé sur Populus (plateforme gratuite\n        aujourd’hui quasi disparue). (Lien cassé)</p><p>WeLoveYouFilm.com — Site du documentaire « We Love You » sur les Rainbow Gatherings. Le domaine renvoie aujourd’hui des\n        erreurs serveur. Le film est encore trouvable via Vimeo ou d’autres plateformes.\n        (Domaine hors‑service)</p><p>🏘️ Lieux de Vie, Collectifs, Micro-Sociétés, Squats & Communautés Intentionnelles (mise à jour avril 2026)\n    Lieux ouverts à l'accueil, au partage, à l'échange, à la vie collective et aux expérimentations (écovillages, ZAD, habitats alternatifs, projets autogérés…).</p><p>✅ LIEUX & PROJETS ACTIFS</p><p>ZAD Notre-Dame-des-Landes — Zone À Défendre historique en Loire-Atlantique (1 650 ha). Le projet d'aéroport abandonné en 2018, le lieu\n        poursuit la vie collective, l'agriculture paysanne et l'accueil de luttes. (✅ Actif)</p><p>Village Troglobal — Collectif autogéré installé depuis 1997 dans d'anciennes caves troglodytiques à Grézillé (Maine-et-Loire).\n        Artisans, artistes et nomades partagent un mode de vie communautaire. (✅ Actif — blog WordPress en ligne)</p><p>La Vieille Valette — Collectif de la Valette : lieu de création pour des projets alternatifs d'autonomie\n        libertaire dans une vallée escarpée des Cévennes (Gard). Le lieu est toujours habité, avec une quinzaine de personnes sur place. Activités : ferme, vie\n        collective festive, théâtre, musique, yoga et autoconstruction. Site web Free « provisoirement à l'abandon » mais le lieu est actif depuis 1991. (✅ Lieu actif — site web\n        ancien)\n          ↳ Voir aussi : Fiche Passerelle Éco | Fiche Radar Squat</p><p>Longo Maï — La Cabrery — Réseau de coopératives autogérées fondé en 1973, regroupant plus de 250 personnes sur une dizaine\n        de sites (France, Suisse, Autriche, Allemagne, Ukraine, Costa Rica). Agriculture, élevage, artisanat, Radio Zinzine. (✅ Actif)\n          ↳ Pro Longo Maï (Suisse) — Association de soutien. (✅ Actif)</p><p>Cravirola — La Commune du Maquis — SCOP (ferme coopérative autogérée) à Minerve (Hérault), 265 ha. Agriculture paysanne bio, camping\n        participatif, résidences d'artistes. Fait partie de Terres Communes. (✅ Actif — site en refonte, contact : [email protected])</p><p>Caracoles de Suc — Ferme où production agricole cohabite avec engagement social et militant, \n        située à St-Fortunat (Ardèche). Membre du réseau Terres Communes avec Cravirola et la FAR. Petite dizaine de personnes, réhabilitation\n        d'un hameau en ruine avec activité agricole. (✅ Actif — site web basique en ligne)</p><p>Collectif FAR (Ferme Autogérée de la Roya) — Perchée au fond de la vallée de la Roya, à 1200 mètres d'altitude,\n        la FAR est un lieu de vie porté par des valeurs paysannes. Projet de vie collectif et paysan avec activités agricoles et vivrières en autogestion, sur la commune de La\n        Brigue (06). Élevage de brebis, fromages, camping autogéré. (✅ Actif — association enregistrée, site web peut être intermittent)</p><p>Écolonie (nouveau site : ecolonie.eu) — Communauté néerlandaise située dans les Basses-Vosges, lieu inspirant depuis\n        1989 où les gens peuvent se redécouvrir. Environ 17 résidents permanents, ~150 volontaires/an, ~2 500 visiteurs/an. Camping, chambres d'hôtes, jardins bio, ateliers. (✅\n        Actif — nouveau domaine : ecolonie.eu)\n          ↳ Facebook Écolonie | Fiche GEN</p><p>Écovillage du Viel Audon (nouveau site : levielaudon.org) — Hameau au flanc d'une falaise des Gorges de l'Ardèche,\n        près de Balazuc, inaccessible en voiture, abandonné pendant des décennies, aujourd'hui lieu riche d'activités, de partage et de solidarité. Créé en 1972, 13 salarié·es, 60\n        hectares, 12 000 bénévoles passé·es sur le lieu. Association Le Mat Ardèche : accueil, éducation à l'environnement, écotourisme, chantiers bénévoles. (✅ Actif — nouveau site : levielaudon.org)\n          ↳ Fiche Coopérative Oasis</p><p>Folleterre — Communauté queer (Radical Faeries) en Bourgogne. Vie tribale, durabilité et harmonie avec la nature. (✅ Actif via\n        réseau GEN)</p><p>Baluet (via Passerelle Éco) — Lieu de vie collectif référencé sur Passerelle Éco. (✅ Lien\n        Passerelle Éco actif)</p><p>Carapa (via Passerelle Éco) — Lieu de vie alternatif, articles et témoignages. (✅ Lien Passerelle\n        Éco actif)</p><p>Sunseed Desert Technology — Développe et démontre des méthodes low-tech de durabilité en milieu semi-aride, Andalousie. (✅\n        Actif)</p><p>Can Masdeu — Centre social autogéré et squat légalisé à Barcelone. Jardins communautaires, ateliers, événements. (✅ Actif)</p><p>Ecoforest — Communauté écologique et raw food en Andalousie. Permaculture, volontariat, retraites. Le projet existe depuis les années\n        1990 et continue d'accueillir des volontaires. (✅ Actif)</p><p>Torri Superiore Ecovillage — Village médiéval restauré écologiquement près de Vintimille (Ligurie). ~20 membres permanents,\n        éco-tourisme, permaculture, volontariat. Membre du GEN et du réseau RIVE. (✅ Actif)</p><p>Alcatraz — Centre culturel, agritourisme et « université de l'irréel » fondé par Jacopo Fo en Ombrie. (✅ Actif)</p><p>EcoDoubs — Les Fermes Communautaires Libres dans le Doubs suisse. Projet de vie communautaire autour de l'agriculture et l'autonomie.\n        (✅ Probablement actif — petit projet communautaire)</p><p>Bosque Village — Lieu ouvert au Mexique : WWOOF, camping, volontariat, communauté. (✅ Probablement actif)</p><p>🟡 PROJETS EN VEILLE / HISTORIQUES (sites parfois en ligne mais projets dormants)</p><p>Village Vegan — Projet de village vegan en Ardèche. (🟡 En veille)</p><p>Cyclane / Village sans voiture — Projet de village sans voiture lié à la décroissance. (🟡 En\n        veille)</p><p>Amopie — Projet communautaire. (🟡 En veille)</p><p>Causse de l'Isle — Projet d'achat d'un ancien camp militaire. (🟡 En veille depuis 2004)</p><p>Écohameaux (Lorraine) — Projet d'écohameau en Lorraine. (🟡 En veille)</p><p>Nalou — Projet à Beaulieu-sous-la-Roche. (🟡 En veille depuis 2008)</p><p>Habitat groupé dans le Cher — Projet d'habitat groupé (via Passerelle Éco, 2007). (🟡 En veille)</p><p>Phenomenum — Projet écolieu au Mont Bugarach, alternative jeune. (🟡 En veille)</p><p>Égaliville — Projet de village sans argent, forum d'échange d'idées. (🟡 En veille)</p><p>Sens et Autonomie — Projet éducatif : ateliers, formations autour de l'autonomie. (🟡 Blog WordPress — probablement en\n        veille)</p><p>Écovillage urbain / écoquartier lémanique — Projet d'écoquartier dans le bassin lémanique (via\n        Passerelle Éco). (🟡 En veille)</p><p>Ecosalvia — Projet dans les Pyrénées espagnoles. (🟡 En veille — ancien portail ecoaldea.com)</p><p>⚠️ SITES INACTIFS (contenu ancien, plus de mise à jour, mais lien encore accessible)</p><p>Écolieu Durantis — Volontariat et ateliers en Cévennes. Site probablement obsolète, pas de mises à jour récentes. (⚠️\n        Inactif)</p><p>Objectif Gaïa / Tiocan — Projet communautaire entre Suisse et France. (⚠️ Inactif)</p><p>Goldschopf — Projet communautaire en Suisse alémanique. (⚠️ Inactif)</p><p>Lieu de vie à Genève — Village de roulottes près de la STEP d'Aïre, une trentaine de familles. (⚠️ Inactif —\n        contenu ancien)</p><p>Écovillage de la Clède — Projet d'écovillage en Cévennes, annuaire GaiaDir. (⚠️ Inactif — annuaire GaiaDir\n        probablement hors ligne)</p><p>Finca El Majolillo — Projet écologique près de Malaga, Espagne. (⚠️ Inactif)</p><p>ItalyEcovillage.com — Ancien portail d'écovillages italiens. (⚠️ Inactif — voir plutôt GEN Europe ou Rete RIVE)</p><p>Permalot — Lieu de permaculture troglodyte en Tchéquie. (⚠️ Inactif)</p><p>Communa (Israël) — Communauté de type kibboutz urbain. (⚠️ Inactif — format .shtml très ancien)</p><p>Die Werkstatt — Lieu de vie alternatif en Bulgarie. (⚠️ Inactif)</p><p>Solaria (via Passerelle Éco) — Écovillage italien. (⚠️ Ancien contenu Passerelle Éco)</p><p>🔴 ARCHIVES — Liens cassés / Sites définitivement hors ligne</p><p>Ces liens sont conservés à titre d'archives historiques. Les domaines sont expirés, les hébergeurs fermés, ou les pages supprimées.</p><p>🔴 Troglobal — Archives Web-Utopia — Ancienne page du village Troglobal. (Domaine mort)</p><p>🔴 Forum Troglobal — Ancien forum FRBB du collectif. (Hébergeur forum fermé)</p><p>🔴 Longo Maï sur Habiter-Autrement — Page d'archives. (Lien profond mort)</p><p>🔴 Présentation audio Longo Maï (Le Montois) — (Lien SPIP mort)</p><p>🔴 La Picharlerie — Infos Cévennes. (Domaine internetdown.org mort)</p><p>🔴 Le Cantoyourte (Yurtao) — Blog sur la vie en yourte. (Canalblog — article de 2008, lien\n    potentiellement mort)</p><p>🔴 Association Autrement (Beuzec) — Lieu d'accueil, partage, projets écoresponsables. (Site Free mort)</p><p>🔴 Comunidad Cruda — Communauté crudivore en Espagne. (Domaine mort)</p><p>🔴 Matavenero — Village reconstruit dans le nord de l'Espagne. (Hébergeur Lineone fermé)</p><p>🔴 Can Pasqual — Ancien squat à Barcelone. (Domaine mort)</p><p>🔴 Los Arenalejos — Projet communautaire Espagne. (Geocities fermé depuis 2009)</p><p>🔴 Finca Los Albaricoqueros — Free School — Projet de free school. (Webs.com probablement mort)</p><p>🔴 Casa Cares — Ancien lieu de retraite en Italie. (Domaine mort)</p><p>🔴 Ecopueblo — Blog d'un projet d'éco-hameau en Italie. (Blog abandonné)</p><p>🔴 La Valle degli Elfi — Communauté alternative Apennins toscans. (Lien ancien cassé)</p><p>🔴 Center New Reality (Berne/Eriz) — Rainbow Family, Suisse. (Domaine mort)</p><p>🔴 Strawd'la Balle (Lausanne) — Autoconstruction paille. Maison détruite par incendie criminel. (Blog\n    Over-blog abandonné)</p><p>🔴 BeauChamp Visitors — Ancien lieu d'accueil. (Domaine mort)</p><p>🔴 Écologite — Habitat écologique. (Site Free mort)</p><p>🔴 La Lune Nette — Archives 2001, projet abandonné. (Domaine mort)</p><p>🔴 Fazenda Abracadabra (Brésil) — Lieu de vie Rainbow au Brésil. (Blog Over-blog abandonné)</p><p>🔴 vielaudon.free.fr — Ancien site du Viel Audon. (Remplacé par levielaudon.org)</p><p>🔴 ecolonie.org — Ancien domaine d'Écolonie. (Remplacé par ecolonie.eu)</p><p>🔗 Ressources & Annuaires utiles (tous actifs)</p><p>Passerelle Éco — Revue et réseau pour les écovillages, habitats groupés et alternatives en France.</p><p>Global Ecovillage Network (GEN) — Réseau mondial des écovillages. Annuaire, formations, événements.</p><p>Écovillage Global — Annuaire francophone des écovillages et écolieux (par Passerelle Éco).</p><p>Coopérative Oasis — Réseau d'écolieux et habitats participatifs en France (Colibris).</p><p>Habiter Autrement — Portail de ressources sur l'habitat alternatif et les écovillages.</p><p>Colibris — Mouvement citoyen : carte des alternatives, outils collaboratifs.</p><p>WWOOF France — Réseau de fermes biologiques accueillant des volontaires.</p><p>Rete RIVE (Italie) — Réseau italien des écovillages et communautés intentionnelles.</p><p>Radar Squat — Annuaire international des squats, centres autonomes et lieux alternatifs.</p><p>Dernière mise à jour : avril 2026.\n    Légende : ✅ Actif | 🟡 En veille | ⚠️ Inactif (en ligne mais obsolète) | 🔴 Lien cassé / hors ligne\n    N'hésitez pas à signaler tout lien mort ou toute mise à jour à effectuer.</p><p>Réseaux, associations, liste de lieux, :</p><p>- Lieux de vie\n    ouvert  (Sharewiki) :</p><p>- La Carte ... :  Lieux de vie, bases nomade, collectifs, squat, ecolieux : Récentes mises à jour, ajouts des diverses cartes des alternatives, luttes, lieux de vie... Vous pouvez participer à la mise à jour de la carte en faisant la demande sur la\n    carte</p><p>- http://www.reclaimthefields.org/fr : Réseau européen\n    Reclaim the fields.</p><p>- http://wwolfing.wordpress.com : Du wwoof avec des dents !\n    Issu de RTF</p><p>- Gen-europe.org : Global ecovillage network, réseau\n    Europe. Liste des\n    membres\n    - Eurotopia.de : Liste de liens de communauté\n    intentionnelle en Europe\n    - Eyfa.org : European youth for action, rencontre ecotopia, caravane\n    à vélo...\n    - Ecolieux - Ecovillages : Liste\n    de liens sur habiter-autrement.org</p><p>France \n    - Passerelle Eco :  Pratiques et contacts\n    pour vivre ensemble sur une même planète. Un réseau d'ecovillages, ecolieux actifs en France.  Une revue, des infos, des liens...\n    - Voyageurs.en-transition.fr : projets, lieux,\n    carte...\n    - Écolieux-de-France : Répertoire des écolieux et divers\n    infos..\n    - Halemfrance.org : Association des HAbitants de Logements\n    Ephémères ou Mobiles\n    - Macabane.info :  Mouvement autogéré des\n    chercheurs(cheuses) en habit autonome novateur et écologique...\n    - Katipik.free.fr  : collectif de lutte contre les expulsions des\n    cabanes en Ariège\n    - Permisdevivre.org : Réseau Permis de vivre, regroupement de\n    divers collectifs et association pour une reconnaissance des modes de vie simple, des habitats alternatifs, yourtes, tipis, cabanes...\n    - Terredeliens.org : propose de changer le rapport à la\n    terre, à l’agriculture, à l’alimentation et à la nature, en faisant évoluer le rapport à la propriété foncière. Valorisant les dimensions collectives et solidaires pour l’accès à la terre et sa\n    gestion...\n    - Paradigmes : Aide à la création de lieu de vie\n    alternatif...\n    - Archiutop.com : L'Archipel des utopies,\n    mécénat social ou psychologique\n    - Colibris-lemouvement.org : Le mouvement\n    pour la terre et l'humanisme (Pierre Rabhi) \n    - http://fr.gaiadir.com/ecovillage : Liste d'ecolieu,\n    carte, liens\n    - Info le Réseau Français des ecovillage (RFEV) n'est plus -> voir Passerelle Eco\n    \n    Québec, Canada \n    - Réseau des ÉcoHameaux et ÉcoVillages du\n    Québec / Communauté en fête : Page\n    de liens ecovillage\n    - Terravie.org : fonds foncier communautaire, est un OSBL de\n    bienfaisance et de conservation qui préserve des terres à perpétuité au Québec afin de les transformer en aires protégées...\n    - La plume de feu.com : La revue Aube, revue du Québec\n    sur les écovillages et les alternatives de vie.\n    \n    International\n    - Permacultureglobal.com (Eng): Permaculture projects\n    and practitioners worldwide (Carte, liste de lieux et projets)\n    - Gen.ecovillage.org (Eng): GEN (Global ecovillage network)\n    Réseau international d'ecolieux et projets divers...\n    - Nomadbase.org : Réseau de nomade et de bases, plateforme pour\n    activist, nomad, couchsurfer\n    - Category:Intentional_communities (Wikiped)(Eng): Les communauté intentionelles\n    - Ic.org / Icdb.org (Eng): Intentional Community database, ecovillages, cohousing, communes, student co-ops, urban housing\n    cooperatives...\n    - List of ecovillages (Sharewiki -\n    eng) \n    \n    Divers articles et infos :\n    - Planetfriendly.net/community (Eng): Info,\n    liste, liens communautés intentionnelles, ecovillage...\n    - Comment monter un projet\n    d'écolieu : (Ekopedia) Infos, liens, lieux...\n    - Communautarisme de lieu de\n    vie : (Anarchopedia)\n    - Wiki Ecovillage : Ecovillage guide that\n    anyone can edit...\n    - Sustainablecommunitiesaroundtheworld.blogspot.com : wwoof, ecolieux... (Eng)\n    - L'écohabitat, l'habitat\n    groupé et Vie\n    communautaire ou collective : article spirale.attac\n    - Audio : Archive\n    vie et société - La génération hallucinée (rep. sur communauté hippies...)\n    - Video : Livinginthefuture.org : Série de reportage\n    video d'habitat simple, d'ecovillage...\n    - Video : Groupe ecovillage sur dailymotion,\n    partage de video sur les alternatives</p><p>Lieux de vie, collectifs, micro-société, squat, communautés intentionnelles, ecovillages, ecolieux... : Lieux ouvert à\n    l'accueil, au partage, à l'échange...</p><p>Quelques Lieux en France</p><p>- ZAD : Notre Dame des Landes : https://zad.nadir.org/ :</p><p>- Troglobal : Troglobal.wordpress.com / Archives :Troglobal - Forum /</p><p>- La Vielle Valette : Collectif de la Valette :</p><p>- Longo Maï : Longo\n    maï : Présentation audio longo mai et\n    article sur le Montois (Suisse)</p><p>- Cravirola : Le Maquis</p><p>- Caracolesdesuc.org  : ferme collective autogérée en\n    Ardèche.</p><p>- Collectif-far.org :\n    - Lapicharlerie.internetdown.org : Info cévennes /</p><p>- Le Cantoyourte  (Yurtao)\n     /\n    - Folleterre.org : Lieux de vie.We are queer people\n    exploring tribal life, sustainability and harmony whith nature..\n    - Fermautrement.free.fr : Association Autrement de beuzec\n    L'association Autrement a pour objectif de développer un lieu autour duquel pourraient être mis en place des projets et des activités allant dans une démarche de respect de l'environnement et de\n    développement des relations entre humains. Accueil, partage, apprentissage...\n    - Sens et autonomie : Projet educatif, ateliers,\n    formation...(fr)  /\n    - Ecolieu.durantis.eu : Volontariat, ateliers (Cévennes -\n    FR)</p><p>- Ecolonie / Ecovillage du vieil Audon / BeauChamp Visitors / Ecologite  /</p><p>- Carapa / La Lune Nette : Archives, changement de projet,\n    abandon .</p><p>Quelques projets en ...</p><p>- Villagevegan : Projet vegan en Ardèche - en veille</p><p>- Cyclane.decroissance.info :\n    Projet de village sans voiture - en veille</p><p>- Amopie.free.fr : - en veille</p><p>- Causse de l'Isle : Projet d'achat d'un ancien camp\n    militaire (maj 2004!) /</p><p>- Ecovillage de la Clède  (Cévennes)  /</p><p>- Ecohameaux  (Lorraine) - en veille /</p><p>- Nalou  (Beaulieu sous la Roche) - maj 2008\n    / \n    - Projet habitat groupé dans le\n    cher (Passerelleeco 2007)\n    - Phenomenehomme.eklablog.com : projet ecolieu mt\n    bougarache, alternative jeune..\n    - Egaliville.fr : Projet de village sans argent,\n    forum, infos, liens\n      \n    Espagne\n    Ecoforest.org : raw community (andalousie) /  Comunidadcruda.com  /   Sunseed.org : develop, demonstrate and communicate accessible, low-tech\n    methods of sustainability in a semi-arid environment (andalousie)  /   Matavenero  (nord) /   Can Pasqual : Squat  ( Barcelone) /  Los Arenalejos : En Projet  /  Canmasdeu.net : Squat, centre autogéré (Barcelone)  / Finca el Majolillo : Projecto ecologico (Malaga) / Finca Los Albaricoqueros : Free school project /\n    - Ecosalvia : projet  pyrénées\n    \n    Italie\n    - Torri-superiore.org  / Solaria  /  Casa Cares  /  Ecopueblo  /  Alcatraz  / La valle degli Elfi / Italyecovillage.com /\n    \n    Suisse\n    - Berne / Eriz : Cnr.ch : Center new reality : Rainbow\n    familly</p><p>- Ecodoubs.ch : Les Fermes Communautaires\n    Libres  /</p><p>- Objectifgaia.info  /  Tiocan (France)</p><p>- Ecovillage urbain ou\n    écoquartier dans le bassin lémanique  /\n    - Goldschopf.ch :  Projet communautaire en Suisse\n    Allemande\n    - Autoconstruction-en-paille.over-blog.com : Asso lausannoise Strawd'la balle. Construction d'une maison en paille dans un jardin\n    public de Lausanne. Maison détruite par un incendie criminel....!  \n    - Lieu de vie à Genève A côté de la STEP\n    d’Aïre, presque au bout de la ligne n°51, sur un bout de terrain herbeux en friche, périmètre de l’ancienne usine Haro & Co, un village de roulottes s’est installé il y a bientôt 4 ans. Une\n    trentaine de de familles y vivent.  /\n    \n    Autres\n    - Fazenda.abracadabra.over-blog.com : lieux de\n    vie inspiration rainbow au brésil</p><p>- Communa.org.il : Communauté kibboutz...\n    (Israël)\n    - Diewerkstatt.co.uk : Lieu de vie en Bulgarie</p><p>- Permalot.org : Lieu permaculture en tchéquie.Troglo\n     /\n    - Bosquevillage.com : Lieu ouvert au mexique, wwoof, camping</p><p>- https://rainbowfamilyfrance.wordpress.com/ : Le site de la\n    famille française</p><p>- http://somewhereundertherainbow.org/ : Infos, photos, videos, book...</p><p>- http://www.welcomehome.org/rainbow/index.html :\n    International</p><p>- Cnr.ch : Center new reality and Rainbow tribe suisse. - Rainbowinfo.ch  : Alternative network \n    - Pelerins.populus.org : Pélerins de l'arc en ciel, Projet de\n    lieu (France)</p><p>- Shanti terrian project : Simplicité, arc en ciel,\n    yourte...\n    - Beneficiofamily.com : Welcome home, site de beneficio, chat,\n    forum, liens rassemblement...\n    - Spiritofnature.ch : Spirit of Nature & Nature\n    of Spirit, Promoting a meaningful lifestyle /CH, NZ/ - Globalnative.org :</p><p>- Weloveyoufilm.com : film rainbow</p><p>- http://www.bliss-fire.com/RainbowGuideOnLine.php :\n    Rainbow guide</p><p>Renversé.co\n        \n            La principale plateforme collaborative romande d'information pour les luttes sociales, anticapitalistes, antifascistes et écologistes. Un passage obligé pour trouver des événements et\n            d'autres collectifs.</p><p>La principale plateforme collaborative romande d'information pour les luttes sociales, anticapitalistes, antifascistes et écologistes. Un passage obligé pour trouver des événements et\n            d'autres collectifs.</p><p>Le Silure (Genève)\n        \n            Espace de luttes autonomes et anticapitalistes à Genève (Carouge). Il abrite une cantine, une bibliothèque militante, un infokiosque et organise des réunions politiques (Soulèvements de\n            la terre, etc.).</p><p>Espace de luttes autonomes et anticapitalistes à Genève (Carouge). Il abrite une cantine, une bibliothèque militante, un infokiosque et organise des réunions politiques (Soulèvements de\n            la terre, etc.).</p><p>Espace Noir (Saint-Imier)\n        \n            Centre culturel libertaire et coopératif historique, situé dans le Jura bernois, berceau mondial historique de la mouvance anarchiste (Congrès de l'Internationale anti-autoritaire en\n            1872).</p><p>Centre culturel libertaire et coopératif historique, situé dans le Jura bernois, berceau mondial historique de la mouvance anarchiste (Congrès de l'Internationale anti-autoritaire en\n            1872).</p><p>CIRA (Lausanne)\n        \n            Centre International de Recherches sur l'Anarchisme, la plus grande bibliothèque d'Europe dédiée aux archives et ouvrages anarchistes.</p><p>Centre International de Recherches sur l'Anarchisme, la plus grande bibliothèque d'Europe dédiée aux archives et ouvrages anarchistes.</p><p>Réseau Squat!net Suisse\n        \n            Portail d'informations, d'appels à soutien et d'actualités sur le mouvement des squats, ZAD (Zones à Défendre) et occupations de lieux en Suisse.</p><p>Portail d'informations, d'appels à soutien et d'actualités sur le mouvement des squats, ZAD (Zones à Défendre) et occupations de lieux en Suisse.</p><p>L'Espace Autogéré (Lausanne)\n        \n            Lieu emblématique d'organisation militante. Accueille des assemblées générales, des collectifs anti-répression, des soirées de soutien et une cantine à prix libre.</p><p>Lieu emblématique d'organisation militante. Accueille des assemblées générales, des collectifs anti-répression, des soirées de soutien et une cantine à prix libre.</p><p>L'Usine (Genève)\n        \n            Historiquement issue des mouvements alternatifs, ce centre culturel autogéré abrite de multiples associations (cinéma, concerts, ateliers) fonctionnant de façon horizontale.</p><p>Historiquement issue des mouvements alternatifs, ce centre culturel autogéré abrite de multiples associations (cinéma, concerts, ateliers) fonctionnant de façon horizontale.</p><p>La Ciguë (Genève)\n        \n            Coopérative de logement étudiant issue du mouvement squat des années 80. Elle propose des colocations bon marché hors de la spéculation immobilière, avec un fonctionnement participatif.</p><p>Coopérative de logement étudiant issue du mouvement squat des années 80. Elle propose des colocations bon marché hors de la spéculation immobilière, avec un fonctionnement participatif.</p><p>CoDHA - Coopérative de l'Habitat Associatif\n        \n            Pionnière en Suisse romande de la construction d'écoquartiers participatifs. La propriété appartient à la coopérative, l'usufruit aux habitants.</p><p>Pionnière en Suisse romande de la construction d'écoquartiers participatifs. La propriété appartient à la coopérative, l'usufruit aux habitants.</p><p>Mehr als Wohnen (Zurich)\n        \n            \"Plus que du logement\". Métacoopérative emblématique qui construit et gère de manière autogérée de vastes quartiers à loyer modéré, conçus pour la vie en communauté et l'écologie.</p><p>\"Plus que du logement\". Métacoopérative emblématique qui construit et gère de manière autogérée de vastes quartiers à loyer modéré, conçus pour la vie en communauté et l'écologie.</p><p>Keepinuse.ch (Toute la Suisse romande)\n        \n            Le grand portail anti-consumériste de Suisse romande pour les dons et la récupération d'objets, qui recense aussi de nombreuses alternatives de gratuité.</p><p>Le grand portail anti-consumériste de Suisse romande pour les dons et la récupération d'objets, qui recense aussi de nombreuses alternatives de gratuité.</p><p>Magasin Gratuit de Bellevaux (Lausanne)\n        \n            Lieu physique basé sur la décroissance et la solidarité : on y dépose ce dont on ne se sert plus, on prend ce dont on a besoin, le tout 100% sans argent.</p><p>Lieu physique basé sur la décroissance et la solidarité : on y dépose ce dont on ne se sert plus, on prend ce dont on a besoin, le tout 100% sans argent.</p><p>Gratiferia (Genève / Romandie)\n        \n            Réseau organisant des \"Foires gratuites\". Le principe : chacun amène des objets et/ou repart avec ce qui lui plaît, sans nécessité d'échange (ex: organisées à la Villa Freundler ou à\n            l'Îlot 13).</p><p>Réseau organisant des \"Foires gratuites\". Le principe : chacun amène des objets et/ou repart avec ce qui lui plaît, sans nécessité d'échange (ex: organisées à la Villa Freundler ou à\n            l'Îlot 13).</p><p>WWOOF Suisse\n        \n            Réseau officiel permettant de vivre et travailler dans des fermes biologiques, paysannes et souvent alternatives en Suisse. Un échange de bras et de connaissances contre gîte et couvert\n            (zéro flux financier).</p><p>Réseau officiel permettant de vivre et travailler dans des fermes biologiques, paysannes et souvent alternatives en Suisse. Un échange de bras et de connaissances contre gîte et couvert\n            (zéro flux financier).</p><p>GEN Suisse (Réseau des Écovillages)\n        \n            Le \"Global Ecovillage Network\" pour la Suisse. Permet de trouver des projets de lieux de vie collectifs, comme l'écovillage de Sennrüti ou des habitats en permaculture.</p><p>Le \"Global Ecovillage Network\" pour la Suisse. Permet de trouver des projets de lieux de vie collectifs, comme l'écovillage de Sennrüti ou des habitats en permaculture.</p><p>Le Réseau Mutu\n        \n            Réseau francophone de collectifs anticapitalistes (dont Renversé). C'est le point de départ en ligne pour trouver les canaux de diffusion.</p><p>Réseau francophone de collectifs anticapitalistes (dont Renversé). C'est le point de départ en ligne pour trouver les canaux de diffusion.</p><p>Telegram: Grève du Climat (Klimastreik CH)\n        \n            Canal public de diffusion Telegram de la Grève pour le Climat en Suisse, qui relaye souvent des actions d'écologie décoloniale et anticapitaliste.</p><p>Canal public de diffusion Telegram de la Grève pour le Climat en Suisse, qui relaye souvent des actions d'écologie décoloniale et anticapitaliste.</p><p>Trouver les QR Codes / Liens Signal : Les Infokiosques\n        \n            Pour rejoindre les groupes de discussion cryptés (Signal/Telegram) des collectifs comme Action Antifasciste ou Street Medics, rendez-vous physiquement aux événements du\n            Silure (Genève) ou de L'Espace Autogéré (Lausanne) où des flyers avec QR codes \"lien d'invitation\" sont mis à la disposition des militants de confiance.</p><p>Pour rejoindre les groupes de discussion cryptés (Signal/Telegram) des collectifs comme Action Antifasciste ou Street Medics, rendez-vous physiquement aux événements du\n            Silure (Genève) ou de L'Espace Autogéré (Lausanne) où des flyers avec QR codes \"lien d'invitation\" sont mis à la disposition des militants de confiance.</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "en": "<p><strong>[English Version]</strong> Collective Living Spaces, Reclaimed Farms & Autonomous Squats: Complete engineering guidelines, structural calculation tables, blueprints, and practical instructions for natural DIY counter-culture habitats.</p><p>🌐 Réseaux, Associations & Annuaires de Lieux (mise à jour avril 2026)</p><p>ReclaimTheFields.org — Constellation européenne de paysan·nes, sans‑terre et collectifs reprenant la main sur la terre et la\n        production alimentaire. Camps, actions, rencontres. (Actif)</p><p>Wwolfing.wordpress.com — « Wwoofing with teeth » : blog issu de Reclaim the Fields sur le wwoofing militant (ZAD, fermes\n        autogérées, etc.). Plus mis à jour mais toujours consultable. (Actif, contenu ancien)</p><p>GEN‑Europe.org — Global Ecovillage Network – branche européenne : carte interactive, annuaire d’écovillages, projets, formations,\n        événements. (Actif)</p><p>GEN – Global Ecovillage Network (gen.ecovillage.org) — Réseau international des écovillages, avec carte mondiale et nombreuses\n        ressources. (Actif)</p><p>Eurotopia.de — Annuaire/guide de communautés intentionnelles et écovillages en Europe, version anglaise du site Eurotopia.\n        (Actif)</p><p>EYFA.org — European Youth For Action : réseau de jeunesse écolo‑radicale, rencontres (Ecotopia, camps, caravanes à vélo…). (Actif)</p><p>Habiter-Autrement.org – Écolieux / Écovillages — Dossier très riche (en français) sur les écovillages,\n        écolieux, écohameaux, avec de nombreux liens complémentaires. (Actif)</p><p>Passerelle Éco — Revue & réseau d’écovillages, habitats groupés, écolieux en France. Annonces, petites annonces, fiches de\n        lieux. (Actif)</p><p>HALEM France — Habitant·es de Logements Éphémères ou Mobiles : défense des modes de vie mobiles/légers (yourtes, caravanes, camions,\n        cabanes, etc.). (Actif, très vivant)</p><p>TerreDeLiens.org — Mouvement qui achète des terres agricoles pour les soustraire à la spéculation et installer des paysan·nes en\n        bio, souvent en collectif. (Actif)</p><p>Colibris – Mouvement pour la Terre et l’Humanisme — Mouvement fondé autour de Pierre Rabhi, soutenant la transition\n        (écologie, éducation, habitat participatif). Carte d’initiatives, outils, MOOC. (Actif)</p><p>Écolieux‑de‑France (ecolieuxdefrance.free.fr) — Ancien mais toujours consultable : gros répertoire d’écolieux, concepts,\n        textes. (Actif comme archive web)</p><p>TerraVie.org — Fonds foncier communautaire au Québec : préserve des terres à perpétuité et les transforme en aires protégées et lieux\n        de vie collectifs. (Actif)</p><p>PermacultureGlobal.com (PermacultureGlobal.org) — Carte et base de données mondiale de projets et praticiens de permaculture.\n        (Actif)</p><p>Wikipedia – Category:Intentional communities — Catégorie Wikipédia listant de nombreuses\n        communautés intentionnelles dans le monde. (Actif, mis à jour)</p><p>IC.org — Foundation for Intentional Community (ex‑FIC) : base de données mondiale de communautés, ressources, livres, formations.\n        (Actif)</p><p>Ecovillage Wiki (Fandom) — Petit wiki collaboratif anglophone sur les écovillages. (Actif, contenu modeste)</p><p>SustainableCommunitiesAroundTheWorld.blogspot.com — Blog en anglais sur des communautés durables et\n        wwoofing, peu mis à jour mais toujours accessible. (Actif comme archive)</p><p>PlanetFriendly.net/community — Page anglophone listant de nombreuses communautés intentionnelles et écovillages\n        (Canada & international), au sein du portail People & Planet. (Actif)</p><p>LivingInTheFuture.org — Série de +60 courts métrages et films documentaires sur des écovillages et communautés (Lammas,\n        Findhorn, etc.). (Actif)</p><p>Groupe Dailymotion « Ecovillage » — Ancien groupe vidéo Dailymotion rassemblant des vidéos sur les écovillages et\n        alternatives. (Actif mais plus vraiment alimenté)</p><p>Planetfriendly – Intentional Communities & Ecovillages — Guide/portail de liens et ressources (principalement\n        Amérique du Nord). (Actif)</p><p>⚠️ Sites en veille, projets historiques ou archives consultables</p><p>Sharewiki – « Lieu de vie ouvert » — Page d’un ancien wiki collaboratif sur les lieux de vie ouverts, communautés,\n        projets collectifs. Le site Sharewiki est signalé comme « dormant » ; accès aléatoire. (En veille / archive)</p><p>Carte Google « Lieux de vie, bases nomades, collectifs, squats, écolieux » — Carte MyMaps collaborative recensant lieux de vie, squats, fermes, écolieux, bases nomades en\n        Europe. (Toujours en ligne, mises à jour variables)</p><p>Voyageurs.en-transition.fr — Blog & carte des alternatives (voyageurs en transition). Contenu surtout 2000–2010, souvent\n        cité comme ressource ; le site répond mal depuis 2024. (En veille / difficile d’accès)</p><p>Réseau des ÉcoHameaux & ÉcoVillages du Québec (REEQ) — Ancien site hébergé sur Tripod pour le REEQ, très souvent cité\n        dans la littérature. L’hébergeur Tripod est en grande partie hors‑service. (Archive web, généralement hors‑ligne)</p><p>Communauté en fête (Canada) — Site « Celebrating Community / Communauté en fête » présentant des communautés,\n        cohabitats, écovillages au Canada (fr/en). Toujours consultable, mais plutôt figé. (Active comme archive historique)</p><p>LaPlumeDeFeu.com – Revue Aube (Québec) — Site des éditions La Plume de Feu et de la revue Aube sur les écovillages &\n        alternatives au Québec. Domaine très difficile à atteindre aujourd’hui ; une partie des contenus subsiste via le sous‑domaine aube.laplumedefeu.com et des archives. (En\n        grande veille / à chercher via archives)</p><p>Sharewiki – List of ecovillages — Ancienne liste collaborative d’écovillages sur Sharewiki. (En veille, site peu\n        maintenu)</p><p>Sustainable Communities Around the World — Blog d’histoires d’écovillages et de wwoofing,\n        principalement années 2000–2010. (En veille, toujours lisible)</p><p>Anarchopedia – Communautarisme de lieu de vie — Article théorique sur les communautés de lieux de vie.\n        (Wiki très irrégulier, à considérer comme archive)</p><p>🔴 Liens cassés, domaines réutilisés ou chemins obsolètes</p><p>Ancienne liste GEN Europe (php.ecovillage.org) — Ancien script de liste\n        d’écovillages membres. Remplacé par l’annuaire sur GEN‑Europe.org. (Lien obsolète)</p><p>http://www.gen-europe.org/ — Lien encore valide mais redirigé ; il faut désormais utiliser https://gen-europe.org/. (Chemin ancien, redirigé)</p><p>PasserelleEco.info/index.php3 — Ancienne URL spécifique ; le site fonctionne désormais directement sur https://www.passerelleco.info/. (Chemin obsolète, domaine actif)</p><p>Macabane.info — Ancien site du « Mouvement autogéré des chercheurs en habitat autonome novateur et écologique ». Le domaine ne répond\n        plus correctement. D’autres structures portent aujourd’hui le nom « Ma Cabane » (centre de jour, matériaux naturels) mais ce ne sont pas forcément les mêmes projets. (Site d’origine\n        hors‑ligne)</p><p>Katipik.free.fr — Collectif de lutte contre les expulsions de cabanes en Ariège (France), hébergé sur Free. L’URL ne répond plus, même si\n        le contact mail [email protected] apparaît encore dans certains guides. (Lien cassé)</p><p>Permisdevivre.org — Réseau « Permis de vivre » pour la reconnaissance des habitats alternatifs (yourtes, tipis, cabanes…). Le domaine\n        est aujourd’hui injoignable ; attention à ne pas confondre avec d’autres projets récents nommés « Permis de vivre » n’ayant pas le même objet. (Site hors‑ligne)</p><p>Etyc.org/paradigmes — Ancien lien « Paradigmes » d’aide à la création de lieux de vie alternatifs. Le domaine\n        etyc.org ne semble plus pointer vers ce projet (ETYC désigne aujourd’hui d’autres structures). (Lien cassé / réutilisé)</p><p>Archiutop.com – L’Archipel des Utopies — Cette ancienne URL ne répond plus. L’association existe toujours sous le nom\n        Archipel des Utopies sur un nouveau site : archipel-utopies.com. (Lien obsolète, nouveau domaine actif)</p><p>GaiaDir – annuaire d’écovillages (fr.gaiadir.com) — Le domaine est désormais une page de parking/vente et ne remplit plus son\n        rôle d’annuaire. (Domaine repris)</p><p>LaPlumeDeFeu.com — Très difficile à joindre, parfois totalement inaccessible ; une bonne partie des contenus ne sont plus\n        consultables directement. (Pratiquement hors‑ligne)</p><p>http://gen.ecovillage.org/ — URL générique parfois bloquée par des protections techniques ; pour accéder au réseau global, utiliser\n        plutôt https://ecovillage.org/. (Chemin problématique, domaine actif)</p><p>Nomadbase.org — Ancien blog/réseau de « nomadbases » (maisons ouvertes aux nomades). Nomadwiki indique le projet comme inactif et le\n        domaine semble non enregistré. (Projet et domaine inactifs)</p><p>ICDB.org — Ne pointe plus vers une base de données de communautés intentionnelles mais vers un site d’actualités généraliste. (Domaine\n        réutilisé, plus lié aux communautés)</p><p>Ancien lien Ekopedia (fr.ekopedia.org) — Remplacé par https://www.ekopedia.fr/wiki/Comment_monter_un_projet_d%27%C3%A9colieu. (URL obsolète, article\n        toujours disponible sur Ekopedia.fr)</p><p>Spirale.Attac – L’écohabitat, l’habitat groupé — Les anciens liens Spirale d’Attac semblent\n        avoir été déplacés ou supprimés ; ces URL ne répondent plus. (Liens cassés)</p><p>Spirale.Attac – Vie communautaire ou collective — Même situation que ci‑dessus : ancien\n        article aujourd’hui introuvable via cette URL. (Lien cassé)</p><p>Radio‑Canada – « Génération hippie » — Lien vers une ancienne URL des archives.\n        Les archives existent toujours mais la structure des liens a changé ; à rechercher directement sur le site de Radio‑Canada. (Permalien obsolète)</p><p>🌈 Rainbow Family & Communautés associées (mise à jour avril 2026)</p><p>✅ Liens Rainbow actifs</p><p>Rainbow Family France — Blog/site de la famille Rainbow en France : infos, appels à rassemblements, récits, chants…\n        (Actif)</p><p>WelcomeHome.org – Rainbow Family — Page historique « non officielle » de la Rainbow Family of Living Light, infos\n        internationales, anciens calendriers de gatherings, textes de référence. (Actif, plutôt archivistique)</p><p>GlobalNatives.org — Club mondial de familles et « famillages » (familles élargies), échanges éducatifs & séjours, dans un\n        esprit de communauté globale. (Actif)</p><p>Rainbow Guide Online (Bliss‑Fire) — Ancien « Rainbow Guide » en ligne (listes de contacts, infos pratiques). Le\n        site existe encore mais derrière un système de protection (chargement parfois lent). (Actif mais accès parfois difficile)</p><p>⚠️ Sites en veille ou archives encore accessibles</p><p>SomewhereUnderTheRainbow.org — Ancien site non officiel expliquant les Rainbow Gatherings avec un calendrier mondial.\n        Souvent cité, mais difficile ou impossible à atteindre depuis 2025 ; à considérer comme archive. (En veille / potentiellement hors‑ligne)</p><p>RainbowInfo.ch — Ancien site d’infos Rainbow Europe (guides, FAQ, rassemblements). Quelques pages semblent avoir disparu\n        (/info.htm renvoie en erreur) et l’accès est très incertain. (Archive, non maintenu)</p><p>BeneficioFamily.com — Ancien forum et site de la communauté de Beneficio (Orgiva, Espagne), souvent décrite comme un\n        « Rainbow permanent ». Le domaine ne répond plus correctement. Pour des infos actuelles, voir par ex. la fiche NuMundo : Beneficio – NuMundo. (Site en panne / communauté toujours existante)</p><p>Shanti Terrian Project (AudeCulture) — Projet de lieu simple, yourtes, arc‑en‑ciel à Rennes‑les‑Bains (Aude). L’association a\n        existé, mais le site n’est plus joignable. (Projet historique, site hors‑ligne)</p><p>SpiritOfNature.ch — Ancien site « Spirit of Nature & Nature of Spirit », style Rainbow/New Age (CH/NZ). Le domaine\n        semble injoignable aujourd’hui. (Archive disparaissant)</p><p>Rainbow Gathering Guide (rainbowinfo.ch/info.htm) — Ancienne page de guide Rainbow, souvent citée (podcasts, wikis). Retourne\n        maintenant une erreur 404. (Lien spécifique obsolète)</p><p>🔴 Liens cassés / domaines repris</p><p>CNR.ch – Center New Reality (Suisse) — Ancien centre Rainbow/« New Reality » à Eriz. Le domaine est désormais garé chez un revendeur (Nameshift)\n        et n’a plus de lien avec le projet. (Domaine repris, site d’origine disparu)</p><p>Pelerins.populus.org — « Pèlerins de l’arc‑en‑ciel », projet de lieu Rainbow en France, hébergé sur Populus (plateforme gratuite\n        aujourd’hui quasi disparue). (Lien cassé)</p><p>WeLoveYouFilm.com — Site du documentaire « We Love You » sur les Rainbow Gatherings. Le domaine renvoie aujourd’hui des\n        erreurs serveur. Le film est encore trouvable via Vimeo ou d’autres plateformes.\n        (Domaine hors‑service)</p><p>🏘️ Lieux de Vie, Collectifs, Micro-Sociétés, Squats & Communautés Intentionnelles (mise à jour avril 2026)\n    Lieux ouverts à l'accueil, au partage, à l'échange, à la vie collective et aux expérimentations (écovillages, ZAD, habitats alternatifs, projets autogérés…).</p><p>✅ LIEUX & PROJETS ACTIFS</p><p>ZAD Notre-Dame-des-Landes — Zone À Défendre historique en Loire-Atlantique (1 650 ha). Le projet d'aéroport abandonné en 2018, le lieu\n        poursuit la vie collective, l'agriculture paysanne et l'accueil de luttes. (✅ Actif)</p><p>Village Troglobal — Collectif autogéré installé depuis 1997 dans d'anciennes caves troglodytiques à Grézillé (Maine-et-Loire).\n        Artisans, artistes et nomades partagent un mode de vie communautaire. (✅ Actif — blog WordPress en ligne)</p><p>La Vieille Valette — Collectif de la Valette : lieu de création pour des projets alternatifs d'autonomie\n        libertaire dans une vallée escarpée des Cévennes (Gard). Le lieu est toujours habité, avec une quinzaine de personnes sur place. Activités : ferme, vie\n        collective festive, théâtre, musique, yoga et autoconstruction. Site web Free « provisoirement à l'abandon » mais le lieu est actif depuis 1991. (✅ Lieu actif — site web\n        ancien)\n          ↳ Voir aussi : Fiche Passerelle Éco | Fiche Radar Squat</p><p>Longo Maï — La Cabrery — Réseau de coopératives autogérées fondé en 1973, regroupant plus de 250 personnes sur une dizaine\n        de sites (France, Suisse, Autriche, Allemagne, Ukraine, Costa Rica). Agriculture, élevage, artisanat, Radio Zinzine. (✅ Actif)\n          ↳ Pro Longo Maï (Suisse) — Association de soutien. (✅ Actif)</p><p>Cravirola — La Commune du Maquis — SCOP (ferme coopérative autogérée) à Minerve (Hérault), 265 ha. Agriculture paysanne bio, camping\n        participatif, résidences d'artistes. Fait partie de Terres Communes. (✅ Actif — site en refonte, contact : [email protected])</p><p>Caracoles de Suc — Ferme où production agricole cohabite avec engagement social et militant, \n        située à St-Fortunat (Ardèche). Membre du réseau Terres Communes avec Cravirola et la FAR. Petite dizaine de personnes, réhabilitation\n        d'un hameau en ruine avec activité agricole. (✅ Actif — site web basique en ligne)</p><p>Collectif FAR (Ferme Autogérée de la Roya) — Perchée au fond de la vallée de la Roya, à 1200 mètres d'altitude,\n        la FAR est un lieu de vie porté par des valeurs paysannes. Projet de vie collectif et paysan avec activités agricoles et vivrières en autogestion, sur la commune de La\n        Brigue (06). Élevage de brebis, fromages, camping autogéré. (✅ Actif — association enregistrée, site web peut être intermittent)</p><p>Écolonie (nouveau site : ecolonie.eu) — Communauté néerlandaise située dans les Basses-Vosges, lieu inspirant depuis\n        1989 où les gens peuvent se redécouvrir. Environ 17 résidents permanents, ~150 volontaires/an, ~2 500 visiteurs/an. Camping, chambres d'hôtes, jardins bio, ateliers. (✅\n        Actif — nouveau domaine : ecolonie.eu)\n          ↳ Facebook Écolonie | Fiche GEN</p><p>Écovillage du Viel Audon (nouveau site : levielaudon.org) — Hameau au flanc d'une falaise des Gorges de l'Ardèche,\n        près de Balazuc, inaccessible en voiture, abandonné pendant des décennies, aujourd'hui lieu riche d'activités, de partage et de solidarité. Créé en 1972, 13 salarié·es, 60\n        hectares, 12 000 bénévoles passé·es sur le lieu. Association Le Mat Ardèche : accueil, éducation à l'environnement, écotourisme, chantiers bénévoles. (✅ Actif — nouveau site : levielaudon.org)\n          ↳ Fiche Coopérative Oasis</p><p>Folleterre — Communauté queer (Radical Faeries) en Bourgogne. Vie tribale, durabilité et harmonie avec la nature. (✅ Actif via\n        réseau GEN)</p><p>Baluet (via Passerelle Éco) — Lieu de vie collectif référencé sur Passerelle Éco. (✅ Lien\n        Passerelle Éco actif)</p><p>Carapa (via Passerelle Éco) — Lieu de vie alternatif, articles et témoignages. (✅ Lien Passerelle\n        Éco actif)</p><p>Sunseed Desert Technology — Développe et démontre des méthodes low-tech de durabilité en milieu semi-aride, Andalousie. (✅\n        Actif)</p><p>Can Masdeu — Centre social autogéré et squat légalisé à Barcelone. Jardins communautaires, ateliers, événements. (✅ Actif)</p><p>Ecoforest — Communauté écologique et raw food en Andalousie. Permaculture, volontariat, retraites. Le projet existe depuis les années\n        1990 et continue d'accueillir des volontaires. (✅ Actif)</p><p>Torri Superiore Ecovillage — Village médiéval restauré écologiquement près de Vintimille (Ligurie). ~20 membres permanents,\n        éco-tourisme, permaculture, volontariat. Membre du GEN et du réseau RIVE. (✅ Actif)</p><p>Alcatraz — Centre culturel, agritourisme et « université de l'irréel » fondé par Jacopo Fo en Ombrie. (✅ Actif)</p><p>EcoDoubs — Les Fermes Communautaires Libres dans le Doubs suisse. Projet de vie communautaire autour de l'agriculture et l'autonomie.\n        (✅ Probablement actif — petit projet communautaire)</p><p>Bosque Village — Lieu ouvert au Mexique : WWOOF, camping, volontariat, communauté. (✅ Probablement actif)</p><p>🟡 PROJETS EN VEILLE / HISTORIQUES (sites parfois en ligne mais projets dormants)</p><p>Village Vegan — Projet de village vegan en Ardèche. (🟡 En veille)</p><p>Cyclane / Village sans voiture — Projet de village sans voiture lié à la décroissance. (🟡 En\n        veille)</p><p>Amopie — Projet communautaire. (🟡 En veille)</p><p>Causse de l'Isle — Projet d'achat d'un ancien camp militaire. (🟡 En veille depuis 2004)</p><p>Écohameaux (Lorraine) — Projet d'écohameau en Lorraine. (🟡 En veille)</p><p>Nalou — Projet à Beaulieu-sous-la-Roche. (🟡 En veille depuis 2008)</p><p>Habitat groupé dans le Cher — Projet d'habitat groupé (via Passerelle Éco, 2007). (🟡 En veille)</p><p>Phenomenum — Projet écolieu au Mont Bugarach, alternative jeune. (🟡 En veille)</p><p>Égaliville — Projet de village sans argent, forum d'échange d'idées. (🟡 En veille)</p><p>Sens et Autonomie — Projet éducatif : ateliers, formations autour de l'autonomie. (🟡 Blog WordPress — probablement en\n        veille)</p><p>Écovillage urbain / écoquartier lémanique — Projet d'écoquartier dans le bassin lémanique (via\n        Passerelle Éco). (🟡 En veille)</p><p>Ecosalvia — Projet dans les Pyrénées espagnoles. (🟡 En veille — ancien portail ecoaldea.com)</p><p>⚠️ SITES INACTIFS (contenu ancien, plus de mise à jour, mais lien encore accessible)</p><p>Écolieu Durantis — Volontariat et ateliers en Cévennes. Site probablement obsolète, pas de mises à jour récentes. (⚠️\n        Inactif)</p><p>Objectif Gaïa / Tiocan — Projet communautaire entre Suisse et France. (⚠️ Inactif)</p><p>Goldschopf — Projet communautaire en Suisse alémanique. (⚠️ Inactif)</p><p>Lieu de vie à Genève — Village de roulottes près de la STEP d'Aïre, une trentaine de familles. (⚠️ Inactif —\n        contenu ancien)</p><p>Écovillage de la Clède — Projet d'écovillage en Cévennes, annuaire GaiaDir. (⚠️ Inactif — annuaire GaiaDir\n        probablement hors ligne)</p><p>Finca El Majolillo — Projet écologique près de Malaga, Espagne. (⚠️ Inactif)</p><p>ItalyEcovillage.com — Ancien portail d'écovillages italiens. (⚠️ Inactif — voir plutôt GEN Europe ou Rete RIVE)</p><p>Permalot — Lieu de permaculture troglodyte en Tchéquie. (⚠️ Inactif)</p><p>Communa (Israël) — Communauté de type kibboutz urbain. (⚠️ Inactif — format .shtml très ancien)</p><p>Die Werkstatt — Lieu de vie alternatif en Bulgarie. (⚠️ Inactif)</p><p>Solaria (via Passerelle Éco) — Écovillage italien. (⚠️ Ancien contenu Passerelle Éco)</p><p>🔴 ARCHIVES — Liens cassés / Sites définitivement hors ligne</p><p>Ces liens sont conservés à titre d'archives historiques. Les domaines sont expirés, les hébergeurs fermés, ou les pages supprimées.</p><p>🔴 Troglobal — Archives Web-Utopia — Ancienne page du village Troglobal. (Domaine mort)</p><p>🔴 Forum Troglobal — Ancien forum FRBB du collectif. (Hébergeur forum fermé)</p><p>🔴 Longo Maï sur Habiter-Autrement — Page d'archives. (Lien profond mort)</p><p>🔴 Présentation audio Longo Maï (Le Montois) — (Lien SPIP mort)</p><p>🔴 La Picharlerie — Infos Cévennes. (Domaine internetdown.org mort)</p><p>🔴 Le Cantoyourte (Yurtao) — Blog sur la vie en yourte. (Canalblog — article de 2008, lien\n    potentiellement mort)</p><p>🔴 Association Autrement (Beuzec) — Lieu d'accueil, partage, projets écoresponsables. (Site Free mort)</p><p>🔴 Comunidad Cruda — Communauté crudivore en Espagne. (Domaine mort)</p><p>🔴 Matavenero — Village reconstruit dans le nord de l'Espagne. (Hébergeur Lineone fermé)</p><p>🔴 Can Pasqual — Ancien squat à Barcelone. (Domaine mort)</p><p>🔴 Los Arenalejos — Projet communautaire Espagne. (Geocities fermé depuis 2009)</p><p>🔴 Finca Los Albaricoqueros — Free School — Projet de free school. (Webs.com probablement mort)</p><p>🔴 Casa Cares — Ancien lieu de retraite en Italie. (Domaine mort)</p><p>🔴 Ecopueblo — Blog d'un projet d'éco-hameau en Italie. (Blog abandonné)</p><p>🔴 La Valle degli Elfi — Communauté alternative Apennins toscans. (Lien ancien cassé)</p><p>🔴 Center New Reality (Berne/Eriz) — Rainbow Family, Suisse. (Domaine mort)</p><p>🔴 Strawd'la Balle (Lausanne) — Autoconstruction paille. Maison détruite par incendie criminel. (Blog\n    Over-blog abandonné)</p><p>🔴 BeauChamp Visitors — Ancien lieu d'accueil. (Domaine mort)</p><p>🔴 Écologite — Habitat écologique. (Site Free mort)</p><p>🔴 La Lune Nette — Archives 2001, projet abandonné. (Domaine mort)</p><p>🔴 Fazenda Abracadabra (Brésil) — Lieu de vie Rainbow au Brésil. (Blog Over-blog abandonné)</p><p>🔴 vielaudon.free.fr — Ancien site du Viel Audon. (Remplacé par levielaudon.org)</p><p>🔴 ecolonie.org — Ancien domaine d'Écolonie. (Remplacé par ecolonie.eu)</p><p>🔗 Ressources & Annuaires utiles (tous actifs)</p><p>Passerelle Éco — Revue et réseau pour les écovillages, habitats groupés et alternatives en France.</p><p>Global Ecovillage Network (GEN) — Réseau mondial des écovillages. Annuaire, formations, événements.</p><p>Écovillage Global — Annuaire francophone des écovillages et écolieux (par Passerelle Éco).</p><p>Coopérative Oasis — Réseau d'écolieux et habitats participatifs en France (Colibris).</p><p>Habiter Autrement — Portail de ressources sur l'habitat alternatif et les écovillages.</p><p>Colibris — Mouvement citoyen : carte des alternatives, outils collaboratifs.</p><p>WWOOF France — Réseau de fermes biologiques accueillant des volontaires.</p><p>Rete RIVE (Italie) — Réseau italien des écovillages et communautés intentionnelles.</p><p>Radar Squat — Annuaire international des squats, centres autonomes et lieux alternatifs.</p><p>Dernière mise à jour : avril 2026.\n    Légende : ✅ Actif | 🟡 En veille | ⚠️ Inactif (en ligne mais obsolète) | 🔴 Lien cassé / hors ligne\n    N'hésitez pas à signaler tout lien mort ou toute mise à jour à effectuer.</p><p>Réseaux, associations, liste de lieux, :</p><p>- Lieux de vie\n    ouvert  (Sharewiki) :</p><p>- La Carte ... :  Lieux de vie, bases nomade, collectifs, squat, ecolieux : Récentes mises à jour, ajouts des diverses cartes des alternatives, luttes, lieux de vie... Vous pouvez participer à la mise à jour de la carte en faisant la demande sur la\n    carte</p><p>- http://www.reclaimthefields.org/fr : Réseau européen\n    Reclaim the fields.</p><p>- http://wwolfing.wordpress.com : Du wwoof avec des dents !\n    Issu de RTF</p><p>- Gen-europe.org : Global ecovillage network, réseau\n    Europe. Liste des\n    membres\n    - Eurotopia.de : Liste de liens de communauté\n    intentionnelle en Europe\n    - Eyfa.org : European youth for action, rencontre ecotopia, caravane\n    à vélo...\n    - Ecolieux - Ecovillages : Liste\n    de liens sur habiter-autrement.org</p><p>France \n    - Passerelle Eco :  Pratiques et contacts\n    pour vivre ensemble sur une même planète. Un réseau d'ecovillages, ecolieux actifs en France.  Une revue, des infos, des liens...\n    - Voyageurs.en-transition.fr : projets, lieux,\n    carte...\n    - Écolieux-de-France : Répertoire des écolieux et divers\n    infos..\n    - Halemfrance.org : Association des HAbitants de Logements\n    Ephémères ou Mobiles\n    - Macabane.info :  Mouvement autogéré des\n    chercheurs(cheuses) en habit autonome novateur et écologique...\n    - Katipik.free.fr  : collectif de lutte contre les expulsions des\n    cabanes en Ariège\n    - Permisdevivre.org : Réseau Permis de vivre, regroupement de\n    divers collectifs et association pour une reconnaissance des modes de vie simple, des habitats alternatifs, yourtes, tipis, cabanes...\n    - Terredeliens.org : propose de changer le rapport à la\n    terre, à l’agriculture, à l’alimentation et à la nature, en faisant évoluer le rapport à la propriété foncière. Valorisant les dimensions collectives et solidaires pour l’accès à la terre et sa\n    gestion...\n    - Paradigmes : Aide à la création de lieu de vie\n    alternatif...\n    - Archiutop.com : L'Archipel des utopies,\n    mécénat social ou psychologique\n    - Colibris-lemouvement.org : Le mouvement\n    pour la terre et l'humanisme (Pierre Rabhi) \n    - http://fr.gaiadir.com/ecovillage : Liste d'ecolieu,\n    carte, liens\n    - Info le Réseau Français des ecovillage (RFEV) n'est plus -> voir Passerelle Eco\n    \n    Québec, Canada \n    - Réseau des ÉcoHameaux et ÉcoVillages du\n    Québec / Communauté en fête : Page\n    de liens ecovillage\n    - Terravie.org : fonds foncier communautaire, est un OSBL de\n    bienfaisance et de conservation qui préserve des terres à perpétuité au Québec afin de les transformer en aires protégées...\n    - La plume de feu.com : La revue Aube, revue du Québec\n    sur les écovillages et les alternatives de vie.\n    \n    International\n    - Permacultureglobal.com (Eng): Permaculture projects\n    and practitioners worldwide (Carte, liste de lieux et projets)\n    - Gen.ecovillage.org (Eng): GEN (Global ecovillage network)\n    Réseau international d'ecolieux et projets divers...\n    - Nomadbase.org : Réseau de nomade et de bases, plateforme pour\n    activist, nomad, couchsurfer\n    - Category:Intentional_communities (Wikiped)(Eng): Les communauté intentionelles\n    - Ic.org / Icdb.org (Eng): Intentional Community database, ecovillages, cohousing, communes, student co-ops, urban housing\n    cooperatives...\n    - List of ecovillages (Sharewiki -\n    eng) \n    \n    Divers articles et infos :\n    - Planetfriendly.net/community (Eng): Info,\n    liste, liens communautés intentionnelles, ecovillage...\n    - Comment monter un projet\n    d'écolieu : (Ekopedia) Infos, liens, lieux...\n    - Communautarisme de lieu de\n    vie : (Anarchopedia)\n    - Wiki Ecovillage : Ecovillage guide that\n    anyone can edit...\n    - Sustainablecommunitiesaroundtheworld.blogspot.com : wwoof, ecolieux... (Eng)\n    - L'écohabitat, l'habitat\n    groupé et Vie\n    communautaire ou collective : article spirale.attac\n    - Audio : Archive\n    vie et société - La génération hallucinée (rep. sur communauté hippies...)\n    - Video : Livinginthefuture.org : Série de reportage\n    video d'habitat simple, d'ecovillage...\n    - Video : Groupe ecovillage sur dailymotion,\n    partage de video sur les alternatives</p><p>Lieux de vie, collectifs, micro-société, squat, communautés intentionnelles, ecovillages, ecolieux... : Lieux ouvert à\n    l'accueil, au partage, à l'échange...</p><p>Quelques Lieux en France</p><p>- ZAD : Notre Dame des Landes : https://zad.nadir.org/ :</p><p>- Troglobal : Troglobal.wordpress.com / Archives :Troglobal - Forum /</p><p>- La Vielle Valette : Collectif de la Valette :</p><p>- Longo Maï : Longo\n    maï : Présentation audio longo mai et\n    article sur le Montois (Suisse)</p><p>- Cravirola : Le Maquis</p><p>- Caracolesdesuc.org  : ferme collective autogérée en\n    Ardèche.</p><p>- Collectif-far.org :\n    - Lapicharlerie.internetdown.org : Info cévennes /</p><p>- Le Cantoyourte  (Yurtao)\n     /\n    - Folleterre.org : Lieux de vie.We are queer people\n    exploring tribal life, sustainability and harmony whith nature..\n    - Fermautrement.free.fr : Association Autrement de beuzec\n    L'association Autrement a pour objectif de développer un lieu autour duquel pourraient être mis en place des projets et des activités allant dans une démarche de respect de l'environnement et de\n    développement des relations entre humains. Accueil, partage, apprentissage...\n    - Sens et autonomie : Projet educatif, ateliers,\n    formation...(fr)  /\n    - Ecolieu.durantis.eu : Volontariat, ateliers (Cévennes -\n    FR)</p><p>- Ecolonie / Ecovillage du vieil Audon / BeauChamp Visitors / Ecologite  /</p><p>- Carapa / La Lune Nette : Archives, changement de projet,\n    abandon .</p><p>Quelques projets en ...</p><p>- Villagevegan : Projet vegan en Ardèche - en veille</p><p>- Cyclane.decroissance.info :\n    Projet de village sans voiture - en veille</p><p>- Amopie.free.fr : - en veille</p><p>- Causse de l'Isle : Projet d'achat d'un ancien camp\n    militaire (maj 2004!) /</p><p>- Ecovillage de la Clède  (Cévennes)  /</p><p>- Ecohameaux  (Lorraine) - en veille /</p><p>- Nalou  (Beaulieu sous la Roche) - maj 2008\n    / \n    - Projet habitat groupé dans le\n    cher (Passerelleeco 2007)\n    - Phenomenehomme.eklablog.com : projet ecolieu mt\n    bougarache, alternative jeune..\n    - Egaliville.fr : Projet de village sans argent,\n    forum, infos, liens\n      \n    Espagne\n    Ecoforest.org : raw community (andalousie) /  Comunidadcruda.com  /   Sunseed.org : develop, demonstrate and communicate accessible, low-tech\n    methods of sustainability in a semi-arid environment (andalousie)  /   Matavenero  (nord) /   Can Pasqual : Squat  ( Barcelone) /  Los Arenalejos : En Projet  /  Canmasdeu.net : Squat, centre autogéré (Barcelone)  / Finca el Majolillo : Projecto ecologico (Malaga) / Finca Los Albaricoqueros : Free school project /\n    - Ecosalvia : projet  pyrénées\n    \n    Italie\n    - Torri-superiore.org  / Solaria  /  Casa Cares  /  Ecopueblo  /  Alcatraz  / La valle degli Elfi / Italyecovillage.com /\n    \n    Suisse\n    - Berne / Eriz : Cnr.ch : Center new reality : Rainbow\n    familly</p><p>- Ecodoubs.ch : Les Fermes Communautaires\n    Libres  /</p><p>- Objectifgaia.info  /  Tiocan (France)</p><p>- Ecovillage urbain ou\n    écoquartier dans le bassin lémanique  /\n    - Goldschopf.ch :  Projet communautaire en Suisse\n    Allemande\n    - Autoconstruction-en-paille.over-blog.com : Asso lausannoise Strawd'la balle. Construction d'une maison en paille dans un jardin\n    public de Lausanne. Maison détruite par un incendie criminel....!  \n    - Lieu de vie à Genève A côté de la STEP\n    d’Aïre, presque au bout de la ligne n°51, sur un bout de terrain herbeux en friche, périmètre de l’ancienne usine Haro & Co, un village de roulottes s’est installé il y a bientôt 4 ans. Une\n    trentaine de de familles y vivent.  /\n    \n    Autres\n    - Fazenda.abracadabra.over-blog.com : lieux de\n    vie inspiration rainbow au brésil</p><p>- Communa.org.il : Communauté kibboutz...\n    (Israël)\n    - Diewerkstatt.co.uk : Lieu de vie en Bulgarie</p><p>- Permalot.org : Lieu permaculture en tchéquie.Troglo\n     /\n    - Bosquevillage.com : Lieu ouvert au mexique, wwoof, camping</p><p>- https://rainbowfamilyfrance.wordpress.com/ : Le site de la\n    famille française</p><p>- http://somewhereundertherainbow.org/ : Infos, photos, videos, book...</p><p>- http://www.welcomehome.org/rainbow/index.html :\n    International</p><p>- Cnr.ch : Center new reality and Rainbow tribe suisse. - Rainbowinfo.ch  : Alternative network \n    - Pelerins.populus.org : Pélerins de l'arc en ciel, Projet de\n    lieu (France)</p><p>- Shanti terrian project : Simplicité, arc en ciel,\n    yourte...\n    - Beneficiofamily.com : Welcome home, site de beneficio, chat,\n    forum, liens rassemblement...\n    - Spiritofnature.ch : Spirit of Nature & Nature\n    of Spirit, Promoting a meaningful lifestyle /CH, NZ/ - Globalnative.org :</p><p>- Weloveyoufilm.com : film rainbow</p><p>- http://www.bliss-fire.com/RainbowGuideOnLine.php :\n    Rainbow guide</p><p>Renversé.co\n        \n            La principale plateforme collaborative romande d'information pour les luttes sociales, anticapitalistes, antifascistes et écologistes. Un passage obligé pour trouver des événements et\n            d'autres collectifs.</p><p>La principale plateforme collaborative romande d'information pour les luttes sociales, anticapitalistes, antifascistes et écologistes. Un passage obligé pour trouver des événements et\n            d'autres collectifs.</p><p>Le Silure (Genève)\n        \n            Espace de luttes autonomes et anticapitalistes à Genève (Carouge). Il abrite une cantine, une bibliothèque militante, un infokiosque et organise des réunions politiques (Soulèvements de\n            la terre, etc.).</p><p>Espace de luttes autonomes et anticapitalistes à Genève (Carouge). Il abrite une cantine, une bibliothèque militante, un infokiosque et organise des réunions politiques (Soulèvements de\n            la terre, etc.).</p><p>Espace Noir (Saint-Imier)\n        \n            Centre culturel libertaire et coopératif historique, situé dans le Jura bernois, berceau mondial historique de la mouvance anarchiste (Congrès de l'Internationale anti-autoritaire en\n            1872).</p><p>Centre culturel libertaire et coopératif historique, situé dans le Jura bernois, berceau mondial historique de la mouvance anarchiste (Congrès de l'Internationale anti-autoritaire en\n            1872).</p><p>CIRA (Lausanne)\n        \n            Centre International de Recherches sur l'Anarchisme, la plus grande bibliothèque d'Europe dédiée aux archives et ouvrages anarchistes.</p><p>Centre International de Recherches sur l'Anarchisme, la plus grande bibliothèque d'Europe dédiée aux archives et ouvrages anarchistes.</p><p>Réseau Squat!net Suisse\n        \n            Portail d'informations, d'appels à soutien et d'actualités sur le mouvement des squats, ZAD (Zones à Défendre) et occupations de lieux en Suisse.</p><p>Portail d'informations, d'appels à soutien et d'actualités sur le mouvement des squats, ZAD (Zones à Défendre) et occupations de lieux en Suisse.</p><p>L'Espace Autogéré (Lausanne)\n        \n            Lieu emblématique d'organisation militante. Accueille des assemblées générales, des collectifs anti-répression, des soirées de soutien et une cantine à prix libre.</p><p>Lieu emblématique d'organisation militante. Accueille des assemblées générales, des collectifs anti-répression, des soirées de soutien et une cantine à prix libre.</p><p>L'Usine (Genève)\n        \n            Historiquement issue des mouvements alternatifs, ce centre culturel autogéré abrite de multiples associations (cinéma, concerts, ateliers) fonctionnant de façon horizontale.</p><p>Historiquement issue des mouvements alternatifs, ce centre culturel autogéré abrite de multiples associations (cinéma, concerts, ateliers) fonctionnant de façon horizontale.</p><p>La Ciguë (Genève)\n        \n            Coopérative de logement étudiant issue du mouvement squat des années 80. Elle propose des colocations bon marché hors de la spéculation immobilière, avec un fonctionnement participatif.</p><p>Coopérative de logement étudiant issue du mouvement squat des années 80. Elle propose des colocations bon marché hors de la spéculation immobilière, avec un fonctionnement participatif.</p><p>CoDHA - Coopérative de l'Habitat Associatif\n        \n            Pionnière en Suisse romande de la construction d'écoquartiers participatifs. La propriété appartient à la coopérative, l'usufruit aux habitants.</p><p>Pionnière en Suisse romande de la construction d'écoquartiers participatifs. La propriété appartient à la coopérative, l'usufruit aux habitants.</p><p>Mehr als Wohnen (Zurich)\n        \n            \"Plus que du logement\". Métacoopérative emblématique qui construit et gère de manière autogérée de vastes quartiers à loyer modéré, conçus pour la vie en communauté et l'écologie.</p><p>\"Plus que du logement\". Métacoopérative emblématique qui construit et gère de manière autogérée de vastes quartiers à loyer modéré, conçus pour la vie en communauté et l'écologie.</p><p>Keepinuse.ch (Toute la Suisse romande)\n        \n            Le grand portail anti-consumériste de Suisse romande pour les dons et la récupération d'objets, qui recense aussi de nombreuses alternatives de gratuité.</p><p>Le grand portail anti-consumériste de Suisse romande pour les dons et la récupération d'objets, qui recense aussi de nombreuses alternatives de gratuité.</p><p>Magasin Gratuit de Bellevaux (Lausanne)\n        \n            Lieu physique basé sur la décroissance et la solidarité : on y dépose ce dont on ne se sert plus, on prend ce dont on a besoin, le tout 100% sans argent.</p><p>Lieu physique basé sur la décroissance et la solidarité : on y dépose ce dont on ne se sert plus, on prend ce dont on a besoin, le tout 100% sans argent.</p><p>Gratiferia (Genève / Romandie)\n        \n            Réseau organisant des \"Foires gratuites\". Le principe : chacun amène des objets et/ou repart avec ce qui lui plaît, sans nécessité d'échange (ex: organisées à la Villa Freundler ou à\n            l'Îlot 13).</p><p>Réseau organisant des \"Foires gratuites\". Le principe : chacun amène des objets et/ou repart avec ce qui lui plaît, sans nécessité d'échange (ex: organisées à la Villa Freundler ou à\n            l'Îlot 13).</p><p>WWOOF Suisse\n        \n            Réseau officiel permettant de vivre et travailler dans des fermes biologiques, paysannes et souvent alternatives en Suisse. Un échange de bras et de connaissances contre gîte et couvert\n            (zéro flux financier).</p><p>Réseau officiel permettant de vivre et travailler dans des fermes biologiques, paysannes et souvent alternatives en Suisse. Un échange de bras et de connaissances contre gîte et couvert\n            (zéro flux financier).</p><p>GEN Suisse (Réseau des Écovillages)\n        \n            Le \"Global Ecovillage Network\" pour la Suisse. Permet de trouver des projets de lieux de vie collectifs, comme l'écovillage de Sennrüti ou des habitats en permaculture.</p><p>Le \"Global Ecovillage Network\" pour la Suisse. Permet de trouver des projets de lieux de vie collectifs, comme l'écovillage de Sennrüti ou des habitats en permaculture.</p><p>Le Réseau Mutu\n        \n            Réseau francophone de collectifs anticapitalistes (dont Renversé). C'est le point de départ en ligne pour trouver les canaux de diffusion.</p><p>Réseau francophone de collectifs anticapitalistes (dont Renversé). C'est le point de départ en ligne pour trouver les canaux de diffusion.</p><p>Telegram: Grève du Climat (Klimastreik CH)\n        \n            Canal public de diffusion Telegram de la Grève pour le Climat en Suisse, qui relaye souvent des actions d'écologie décoloniale et anticapitaliste.</p><p>Canal public de diffusion Telegram de la Grève pour le Climat en Suisse, qui relaye souvent des actions d'écologie décoloniale et anticapitaliste.</p><p>Trouver les QR Codes / Liens Signal : Les Infokiosques\n        \n            Pour rejoindre les groupes de discussion cryptés (Signal/Telegram) des collectifs comme Action Antifasciste ou Street Medics, rendez-vous physiquement aux événements du\n            Silure (Genève) ou de L'Espace Autogéré (Lausanne) où des flyers avec QR codes \"lien d'invitation\" sont mis à la disposition des militants de confiance.</p><p>Pour rejoindre les groupes de discussion cryptés (Signal/Telegram) des collectifs comme Action Antifasciste ou Street Medics, rendez-vous physiquement aux événements du\n            Silure (Genève) ou de L'Espace Autogéré (Lausanne) où des flyers avec QR codes \"lien d'invitation\" sont mis à la disposition des militants de confiance.</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "es": "<p><strong>[Versión en Español]</strong> Espacios de Vida Colectivos, Granjas Recuperadas y Centros Ocupados: Planos de ingeniería completos, tablas de cálculo estructural y guías prácticas paso a paso para la autoconstrucción de viviendas ecológicas y alternativas.</p><p>🌐 Réseaux, Associations & Annuaires de Lieux (mise à jour avril 2026)</p><p>ReclaimTheFields.org — Constellation européenne de paysan·nes, sans‑terre et collectifs reprenant la main sur la terre et la\n        production alimentaire. Camps, actions, rencontres. (Actif)</p><p>Wwolfing.wordpress.com — « Wwoofing with teeth » : blog issu de Reclaim the Fields sur le wwoofing militant (ZAD, fermes\n        autogérées, etc.). Plus mis à jour mais toujours consultable. (Actif, contenu ancien)</p><p>GEN‑Europe.org — Global Ecovillage Network – branche européenne : carte interactive, annuaire d’écovillages, projets, formations,\n        événements. (Actif)</p><p>GEN – Global Ecovillage Network (gen.ecovillage.org) — Réseau international des écovillages, avec carte mondiale et nombreuses\n        ressources. (Actif)</p><p>Eurotopia.de — Annuaire/guide de communautés intentionnelles et écovillages en Europe, version anglaise du site Eurotopia.\n        (Actif)</p><p>EYFA.org — European Youth For Action : réseau de jeunesse écolo‑radicale, rencontres (Ecotopia, camps, caravanes à vélo…). (Actif)</p><p>Habiter-Autrement.org – Écolieux / Écovillages — Dossier très riche (en français) sur les écovillages,\n        écolieux, écohameaux, avec de nombreux liens complémentaires. (Actif)</p><p>Passerelle Éco — Revue & réseau d’écovillages, habitats groupés, écolieux en France. Annonces, petites annonces, fiches de\n        lieux. (Actif)</p><p>HALEM France — Habitant·es de Logements Éphémères ou Mobiles : défense des modes de vie mobiles/légers (yourtes, caravanes, camions,\n        cabanes, etc.). (Actif, très vivant)</p><p>TerreDeLiens.org — Mouvement qui achète des terres agricoles pour les soustraire à la spéculation et installer des paysan·nes en\n        bio, souvent en collectif. (Actif)</p><p>Colibris – Mouvement pour la Terre et l’Humanisme — Mouvement fondé autour de Pierre Rabhi, soutenant la transition\n        (écologie, éducation, habitat participatif). Carte d’initiatives, outils, MOOC. (Actif)</p><p>Écolieux‑de‑France (ecolieuxdefrance.free.fr) — Ancien mais toujours consultable : gros répertoire d’écolieux, concepts,\n        textes. (Actif comme archive web)</p><p>TerraVie.org — Fonds foncier communautaire au Québec : préserve des terres à perpétuité et les transforme en aires protégées et lieux\n        de vie collectifs. (Actif)</p><p>PermacultureGlobal.com (PermacultureGlobal.org) — Carte et base de données mondiale de projets et praticiens de permaculture.\n        (Actif)</p><p>Wikipedia – Category:Intentional communities — Catégorie Wikipédia listant de nombreuses\n        communautés intentionnelles dans le monde. (Actif, mis à jour)</p><p>IC.org — Foundation for Intentional Community (ex‑FIC) : base de données mondiale de communautés, ressources, livres, formations.\n        (Actif)</p><p>Ecovillage Wiki (Fandom) — Petit wiki collaboratif anglophone sur les écovillages. (Actif, contenu modeste)</p><p>SustainableCommunitiesAroundTheWorld.blogspot.com — Blog en anglais sur des communautés durables et\n        wwoofing, peu mis à jour mais toujours accessible. (Actif comme archive)</p><p>PlanetFriendly.net/community — Page anglophone listant de nombreuses communautés intentionnelles et écovillages\n        (Canada & international), au sein du portail People & Planet. (Actif)</p><p>LivingInTheFuture.org — Série de +60 courts métrages et films documentaires sur des écovillages et communautés (Lammas,\n        Findhorn, etc.). (Actif)</p><p>Groupe Dailymotion « Ecovillage » — Ancien groupe vidéo Dailymotion rassemblant des vidéos sur les écovillages et\n        alternatives. (Actif mais plus vraiment alimenté)</p><p>Planetfriendly – Intentional Communities & Ecovillages — Guide/portail de liens et ressources (principalement\n        Amérique du Nord). (Actif)</p><p>⚠️ Sites en veille, projets historiques ou archives consultables</p><p>Sharewiki – « Lieu de vie ouvert » — Page d’un ancien wiki collaboratif sur les lieux de vie ouverts, communautés,\n        projets collectifs. Le site Sharewiki est signalé comme « dormant » ; accès aléatoire. (En veille / archive)</p><p>Carte Google « Lieux de vie, bases nomades, collectifs, squats, écolieux » — Carte MyMaps collaborative recensant lieux de vie, squats, fermes, écolieux, bases nomades en\n        Europe. (Toujours en ligne, mises à jour variables)</p><p>Voyageurs.en-transition.fr — Blog & carte des alternatives (voyageurs en transition). Contenu surtout 2000–2010, souvent\n        cité comme ressource ; le site répond mal depuis 2024. (En veille / difficile d’accès)</p><p>Réseau des ÉcoHameaux & ÉcoVillages du Québec (REEQ) — Ancien site hébergé sur Tripod pour le REEQ, très souvent cité\n        dans la littérature. L’hébergeur Tripod est en grande partie hors‑service. (Archive web, généralement hors‑ligne)</p><p>Communauté en fête (Canada) — Site « Celebrating Community / Communauté en fête » présentant des communautés,\n        cohabitats, écovillages au Canada (fr/en). Toujours consultable, mais plutôt figé. (Active comme archive historique)</p><p>LaPlumeDeFeu.com – Revue Aube (Québec) — Site des éditions La Plume de Feu et de la revue Aube sur les écovillages &\n        alternatives au Québec. Domaine très difficile à atteindre aujourd’hui ; une partie des contenus subsiste via le sous‑domaine aube.laplumedefeu.com et des archives. (En\n        grande veille / à chercher via archives)</p><p>Sharewiki – List of ecovillages — Ancienne liste collaborative d’écovillages sur Sharewiki. (En veille, site peu\n        maintenu)</p><p>Sustainable Communities Around the World — Blog d’histoires d’écovillages et de wwoofing,\n        principalement années 2000–2010. (En veille, toujours lisible)</p><p>Anarchopedia – Communautarisme de lieu de vie — Article théorique sur les communautés de lieux de vie.\n        (Wiki très irrégulier, à considérer comme archive)</p><p>🔴 Liens cassés, domaines réutilisés ou chemins obsolètes</p><p>Ancienne liste GEN Europe (php.ecovillage.org) — Ancien script de liste\n        d’écovillages membres. Remplacé par l’annuaire sur GEN‑Europe.org. (Lien obsolète)</p><p>http://www.gen-europe.org/ — Lien encore valide mais redirigé ; il faut désormais utiliser https://gen-europe.org/. (Chemin ancien, redirigé)</p><p>PasserelleEco.info/index.php3 — Ancienne URL spécifique ; le site fonctionne désormais directement sur https://www.passerelleco.info/. (Chemin obsolète, domaine actif)</p><p>Macabane.info — Ancien site du « Mouvement autogéré des chercheurs en habitat autonome novateur et écologique ». Le domaine ne répond\n        plus correctement. D’autres structures portent aujourd’hui le nom « Ma Cabane » (centre de jour, matériaux naturels) mais ce ne sont pas forcément les mêmes projets. (Site d’origine\n        hors‑ligne)</p><p>Katipik.free.fr — Collectif de lutte contre les expulsions de cabanes en Ariège (France), hébergé sur Free. L’URL ne répond plus, même si\n        le contact mail [email protected] apparaît encore dans certains guides. (Lien cassé)</p><p>Permisdevivre.org — Réseau « Permis de vivre » pour la reconnaissance des habitats alternatifs (yourtes, tipis, cabanes…). Le domaine\n        est aujourd’hui injoignable ; attention à ne pas confondre avec d’autres projets récents nommés « Permis de vivre » n’ayant pas le même objet. (Site hors‑ligne)</p><p>Etyc.org/paradigmes — Ancien lien « Paradigmes » d’aide à la création de lieux de vie alternatifs. Le domaine\n        etyc.org ne semble plus pointer vers ce projet (ETYC désigne aujourd’hui d’autres structures). (Lien cassé / réutilisé)</p><p>Archiutop.com – L’Archipel des Utopies — Cette ancienne URL ne répond plus. L’association existe toujours sous le nom\n        Archipel des Utopies sur un nouveau site : archipel-utopies.com. (Lien obsolète, nouveau domaine actif)</p><p>GaiaDir – annuaire d’écovillages (fr.gaiadir.com) — Le domaine est désormais une page de parking/vente et ne remplit plus son\n        rôle d’annuaire. (Domaine repris)</p><p>LaPlumeDeFeu.com — Très difficile à joindre, parfois totalement inaccessible ; une bonne partie des contenus ne sont plus\n        consultables directement. (Pratiquement hors‑ligne)</p><p>http://gen.ecovillage.org/ — URL générique parfois bloquée par des protections techniques ; pour accéder au réseau global, utiliser\n        plutôt https://ecovillage.org/. (Chemin problématique, domaine actif)</p><p>Nomadbase.org — Ancien blog/réseau de « nomadbases » (maisons ouvertes aux nomades). Nomadwiki indique le projet comme inactif et le\n        domaine semble non enregistré. (Projet et domaine inactifs)</p><p>ICDB.org — Ne pointe plus vers une base de données de communautés intentionnelles mais vers un site d’actualités généraliste. (Domaine\n        réutilisé, plus lié aux communautés)</p><p>Ancien lien Ekopedia (fr.ekopedia.org) — Remplacé par https://www.ekopedia.fr/wiki/Comment_monter_un_projet_d%27%C3%A9colieu. (URL obsolète, article\n        toujours disponible sur Ekopedia.fr)</p><p>Spirale.Attac – L’écohabitat, l’habitat groupé — Les anciens liens Spirale d’Attac semblent\n        avoir été déplacés ou supprimés ; ces URL ne répondent plus. (Liens cassés)</p><p>Spirale.Attac – Vie communautaire ou collective — Même situation que ci‑dessus : ancien\n        article aujourd’hui introuvable via cette URL. (Lien cassé)</p><p>Radio‑Canada – « Génération hippie » — Lien vers une ancienne URL des archives.\n        Les archives existent toujours mais la structure des liens a changé ; à rechercher directement sur le site de Radio‑Canada. (Permalien obsolète)</p><p>🌈 Rainbow Family & Communautés associées (mise à jour avril 2026)</p><p>✅ Liens Rainbow actifs</p><p>Rainbow Family France — Blog/site de la famille Rainbow en France : infos, appels à rassemblements, récits, chants…\n        (Actif)</p><p>WelcomeHome.org – Rainbow Family — Page historique « non officielle » de la Rainbow Family of Living Light, infos\n        internationales, anciens calendriers de gatherings, textes de référence. (Actif, plutôt archivistique)</p><p>GlobalNatives.org — Club mondial de familles et « famillages » (familles élargies), échanges éducatifs & séjours, dans un\n        esprit de communauté globale. (Actif)</p><p>Rainbow Guide Online (Bliss‑Fire) — Ancien « Rainbow Guide » en ligne (listes de contacts, infos pratiques). Le\n        site existe encore mais derrière un système de protection (chargement parfois lent). (Actif mais accès parfois difficile)</p><p>⚠️ Sites en veille ou archives encore accessibles</p><p>SomewhereUnderTheRainbow.org — Ancien site non officiel expliquant les Rainbow Gatherings avec un calendrier mondial.\n        Souvent cité, mais difficile ou impossible à atteindre depuis 2025 ; à considérer comme archive. (En veille / potentiellement hors‑ligne)</p><p>RainbowInfo.ch — Ancien site d’infos Rainbow Europe (guides, FAQ, rassemblements). Quelques pages semblent avoir disparu\n        (/info.htm renvoie en erreur) et l’accès est très incertain. (Archive, non maintenu)</p><p>BeneficioFamily.com — Ancien forum et site de la communauté de Beneficio (Orgiva, Espagne), souvent décrite comme un\n        « Rainbow permanent ». Le domaine ne répond plus correctement. Pour des infos actuelles, voir par ex. la fiche NuMundo : Beneficio – NuMundo. (Site en panne / communauté toujours existante)</p><p>Shanti Terrian Project (AudeCulture) — Projet de lieu simple, yourtes, arc‑en‑ciel à Rennes‑les‑Bains (Aude). L’association a\n        existé, mais le site n’est plus joignable. (Projet historique, site hors‑ligne)</p><p>SpiritOfNature.ch — Ancien site « Spirit of Nature & Nature of Spirit », style Rainbow/New Age (CH/NZ). Le domaine\n        semble injoignable aujourd’hui. (Archive disparaissant)</p><p>Rainbow Gathering Guide (rainbowinfo.ch/info.htm) — Ancienne page de guide Rainbow, souvent citée (podcasts, wikis). Retourne\n        maintenant une erreur 404. (Lien spécifique obsolète)</p><p>🔴 Liens cassés / domaines repris</p><p>CNR.ch – Center New Reality (Suisse) — Ancien centre Rainbow/« New Reality » à Eriz. Le domaine est désormais garé chez un revendeur (Nameshift)\n        et n’a plus de lien avec le projet. (Domaine repris, site d’origine disparu)</p><p>Pelerins.populus.org — « Pèlerins de l’arc‑en‑ciel », projet de lieu Rainbow en France, hébergé sur Populus (plateforme gratuite\n        aujourd’hui quasi disparue). (Lien cassé)</p><p>WeLoveYouFilm.com — Site du documentaire « We Love You » sur les Rainbow Gatherings. Le domaine renvoie aujourd’hui des\n        erreurs serveur. Le film est encore trouvable via Vimeo ou d’autres plateformes.\n        (Domaine hors‑service)</p><p>🏘️ Lieux de Vie, Collectifs, Micro-Sociétés, Squats & Communautés Intentionnelles (mise à jour avril 2026)\n    Lieux ouverts à l'accueil, au partage, à l'échange, à la vie collective et aux expérimentations (écovillages, ZAD, habitats alternatifs, projets autogérés…).</p><p>✅ LIEUX & PROJETS ACTIFS</p><p>ZAD Notre-Dame-des-Landes — Zone À Défendre historique en Loire-Atlantique (1 650 ha). Le projet d'aéroport abandonné en 2018, le lieu\n        poursuit la vie collective, l'agriculture paysanne et l'accueil de luttes. (✅ Actif)</p><p>Village Troglobal — Collectif autogéré installé depuis 1997 dans d'anciennes caves troglodytiques à Grézillé (Maine-et-Loire).\n        Artisans, artistes et nomades partagent un mode de vie communautaire. (✅ Actif — blog WordPress en ligne)</p><p>La Vieille Valette — Collectif de la Valette : lieu de création pour des projets alternatifs d'autonomie\n        libertaire dans une vallée escarpée des Cévennes (Gard). Le lieu est toujours habité, avec une quinzaine de personnes sur place. Activités : ferme, vie\n        collective festive, théâtre, musique, yoga et autoconstruction. Site web Free « provisoirement à l'abandon » mais le lieu est actif depuis 1991. (✅ Lieu actif — site web\n        ancien)\n          ↳ Voir aussi : Fiche Passerelle Éco | Fiche Radar Squat</p><p>Longo Maï — La Cabrery — Réseau de coopératives autogérées fondé en 1973, regroupant plus de 250 personnes sur une dizaine\n        de sites (France, Suisse, Autriche, Allemagne, Ukraine, Costa Rica). Agriculture, élevage, artisanat, Radio Zinzine. (✅ Actif)\n          ↳ Pro Longo Maï (Suisse) — Association de soutien. (✅ Actif)</p><p>Cravirola — La Commune du Maquis — SCOP (ferme coopérative autogérée) à Minerve (Hérault), 265 ha. Agriculture paysanne bio, camping\n        participatif, résidences d'artistes. Fait partie de Terres Communes. (✅ Actif — site en refonte, contact : [email protected])</p><p>Caracoles de Suc — Ferme où production agricole cohabite avec engagement social et militant, \n        située à St-Fortunat (Ardèche). Membre du réseau Terres Communes avec Cravirola et la FAR. Petite dizaine de personnes, réhabilitation\n        d'un hameau en ruine avec activité agricole. (✅ Actif — site web basique en ligne)</p><p>Collectif FAR (Ferme Autogérée de la Roya) — Perchée au fond de la vallée de la Roya, à 1200 mètres d'altitude,\n        la FAR est un lieu de vie porté par des valeurs paysannes. Projet de vie collectif et paysan avec activités agricoles et vivrières en autogestion, sur la commune de La\n        Brigue (06). Élevage de brebis, fromages, camping autogéré. (✅ Actif — association enregistrée, site web peut être intermittent)</p><p>Écolonie (nouveau site : ecolonie.eu) — Communauté néerlandaise située dans les Basses-Vosges, lieu inspirant depuis\n        1989 où les gens peuvent se redécouvrir. Environ 17 résidents permanents, ~150 volontaires/an, ~2 500 visiteurs/an. Camping, chambres d'hôtes, jardins bio, ateliers. (✅\n        Actif — nouveau domaine : ecolonie.eu)\n          ↳ Facebook Écolonie | Fiche GEN</p><p>Écovillage du Viel Audon (nouveau site : levielaudon.org) — Hameau au flanc d'une falaise des Gorges de l'Ardèche,\n        près de Balazuc, inaccessible en voiture, abandonné pendant des décennies, aujourd'hui lieu riche d'activités, de partage et de solidarité. Créé en 1972, 13 salarié·es, 60\n        hectares, 12 000 bénévoles passé·es sur le lieu. Association Le Mat Ardèche : accueil, éducation à l'environnement, écotourisme, chantiers bénévoles. (✅ Actif — nouveau site : levielaudon.org)\n          ↳ Fiche Coopérative Oasis</p><p>Folleterre — Communauté queer (Radical Faeries) en Bourgogne. Vie tribale, durabilité et harmonie avec la nature. (✅ Actif via\n        réseau GEN)</p><p>Baluet (via Passerelle Éco) — Lieu de vie collectif référencé sur Passerelle Éco. (✅ Lien\n        Passerelle Éco actif)</p><p>Carapa (via Passerelle Éco) — Lieu de vie alternatif, articles et témoignages. (✅ Lien Passerelle\n        Éco actif)</p><p>Sunseed Desert Technology — Développe et démontre des méthodes low-tech de durabilité en milieu semi-aride, Andalousie. (✅\n        Actif)</p><p>Can Masdeu — Centre social autogéré et squat légalisé à Barcelone. Jardins communautaires, ateliers, événements. (✅ Actif)</p><p>Ecoforest — Communauté écologique et raw food en Andalousie. Permaculture, volontariat, retraites. Le projet existe depuis les années\n        1990 et continue d'accueillir des volontaires. (✅ Actif)</p><p>Torri Superiore Ecovillage — Village médiéval restauré écologiquement près de Vintimille (Ligurie). ~20 membres permanents,\n        éco-tourisme, permaculture, volontariat. Membre du GEN et du réseau RIVE. (✅ Actif)</p><p>Alcatraz — Centre culturel, agritourisme et « université de l'irréel » fondé par Jacopo Fo en Ombrie. (✅ Actif)</p><p>EcoDoubs — Les Fermes Communautaires Libres dans le Doubs suisse. Projet de vie communautaire autour de l'agriculture et l'autonomie.\n        (✅ Probablement actif — petit projet communautaire)</p><p>Bosque Village — Lieu ouvert au Mexique : WWOOF, camping, volontariat, communauté. (✅ Probablement actif)</p><p>🟡 PROJETS EN VEILLE / HISTORIQUES (sites parfois en ligne mais projets dormants)</p><p>Village Vegan — Projet de village vegan en Ardèche. (🟡 En veille)</p><p>Cyclane / Village sans voiture — Projet de village sans voiture lié à la décroissance. (🟡 En\n        veille)</p><p>Amopie — Projet communautaire. (🟡 En veille)</p><p>Causse de l'Isle — Projet d'achat d'un ancien camp militaire. (🟡 En veille depuis 2004)</p><p>Écohameaux (Lorraine) — Projet d'écohameau en Lorraine. (🟡 En veille)</p><p>Nalou — Projet à Beaulieu-sous-la-Roche. (🟡 En veille depuis 2008)</p><p>Habitat groupé dans le Cher — Projet d'habitat groupé (via Passerelle Éco, 2007). (🟡 En veille)</p><p>Phenomenum — Projet écolieu au Mont Bugarach, alternative jeune. (🟡 En veille)</p><p>Égaliville — Projet de village sans argent, forum d'échange d'idées. (🟡 En veille)</p><p>Sens et Autonomie — Projet éducatif : ateliers, formations autour de l'autonomie. (🟡 Blog WordPress — probablement en\n        veille)</p><p>Écovillage urbain / écoquartier lémanique — Projet d'écoquartier dans le bassin lémanique (via\n        Passerelle Éco). (🟡 En veille)</p><p>Ecosalvia — Projet dans les Pyrénées espagnoles. (🟡 En veille — ancien portail ecoaldea.com)</p><p>⚠️ SITES INACTIFS (contenu ancien, plus de mise à jour, mais lien encore accessible)</p><p>Écolieu Durantis — Volontariat et ateliers en Cévennes. Site probablement obsolète, pas de mises à jour récentes. (⚠️\n        Inactif)</p><p>Objectif Gaïa / Tiocan — Projet communautaire entre Suisse et France. (⚠️ Inactif)</p><p>Goldschopf — Projet communautaire en Suisse alémanique. (⚠️ Inactif)</p><p>Lieu de vie à Genève — Village de roulottes près de la STEP d'Aïre, une trentaine de familles. (⚠️ Inactif —\n        contenu ancien)</p><p>Écovillage de la Clède — Projet d'écovillage en Cévennes, annuaire GaiaDir. (⚠️ Inactif — annuaire GaiaDir\n        probablement hors ligne)</p><p>Finca El Majolillo — Projet écologique près de Malaga, Espagne. (⚠️ Inactif)</p><p>ItalyEcovillage.com — Ancien portail d'écovillages italiens. (⚠️ Inactif — voir plutôt GEN Europe ou Rete RIVE)</p><p>Permalot — Lieu de permaculture troglodyte en Tchéquie. (⚠️ Inactif)</p><p>Communa (Israël) — Communauté de type kibboutz urbain. (⚠️ Inactif — format .shtml très ancien)</p><p>Die Werkstatt — Lieu de vie alternatif en Bulgarie. (⚠️ Inactif)</p><p>Solaria (via Passerelle Éco) — Écovillage italien. (⚠️ Ancien contenu Passerelle Éco)</p><p>🔴 ARCHIVES — Liens cassés / Sites définitivement hors ligne</p><p>Ces liens sont conservés à titre d'archives historiques. Les domaines sont expirés, les hébergeurs fermés, ou les pages supprimées.</p><p>🔴 Troglobal — Archives Web-Utopia — Ancienne page du village Troglobal. (Domaine mort)</p><p>🔴 Forum Troglobal — Ancien forum FRBB du collectif. (Hébergeur forum fermé)</p><p>🔴 Longo Maï sur Habiter-Autrement — Page d'archives. (Lien profond mort)</p><p>🔴 Présentation audio Longo Maï (Le Montois) — (Lien SPIP mort)</p><p>🔴 La Picharlerie — Infos Cévennes. (Domaine internetdown.org mort)</p><p>🔴 Le Cantoyourte (Yurtao) — Blog sur la vie en yourte. (Canalblog — article de 2008, lien\n    potentiellement mort)</p><p>🔴 Association Autrement (Beuzec) — Lieu d'accueil, partage, projets écoresponsables. (Site Free mort)</p><p>🔴 Comunidad Cruda — Communauté crudivore en Espagne. (Domaine mort)</p><p>🔴 Matavenero — Village reconstruit dans le nord de l'Espagne. (Hébergeur Lineone fermé)</p><p>🔴 Can Pasqual — Ancien squat à Barcelone. (Domaine mort)</p><p>🔴 Los Arenalejos — Projet communautaire Espagne. (Geocities fermé depuis 2009)</p><p>🔴 Finca Los Albaricoqueros — Free School — Projet de free school. (Webs.com probablement mort)</p><p>🔴 Casa Cares — Ancien lieu de retraite en Italie. (Domaine mort)</p><p>🔴 Ecopueblo — Blog d'un projet d'éco-hameau en Italie. (Blog abandonné)</p><p>🔴 La Valle degli Elfi — Communauté alternative Apennins toscans. (Lien ancien cassé)</p><p>🔴 Center New Reality (Berne/Eriz) — Rainbow Family, Suisse. (Domaine mort)</p><p>🔴 Strawd'la Balle (Lausanne) — Autoconstruction paille. Maison détruite par incendie criminel. (Blog\n    Over-blog abandonné)</p><p>🔴 BeauChamp Visitors — Ancien lieu d'accueil. (Domaine mort)</p><p>🔴 Écologite — Habitat écologique. (Site Free mort)</p><p>🔴 La Lune Nette — Archives 2001, projet abandonné. (Domaine mort)</p><p>🔴 Fazenda Abracadabra (Brésil) — Lieu de vie Rainbow au Brésil. (Blog Over-blog abandonné)</p><p>🔴 vielaudon.free.fr — Ancien site du Viel Audon. (Remplacé par levielaudon.org)</p><p>🔴 ecolonie.org — Ancien domaine d'Écolonie. (Remplacé par ecolonie.eu)</p><p>🔗 Ressources & Annuaires utiles (tous actifs)</p><p>Passerelle Éco — Revue et réseau pour les écovillages, habitats groupés et alternatives en France.</p><p>Global Ecovillage Network (GEN) — Réseau mondial des écovillages. Annuaire, formations, événements.</p><p>Écovillage Global — Annuaire francophone des écovillages et écolieux (par Passerelle Éco).</p><p>Coopérative Oasis — Réseau d'écolieux et habitats participatifs en France (Colibris).</p><p>Habiter Autrement — Portail de ressources sur l'habitat alternatif et les écovillages.</p><p>Colibris — Mouvement citoyen : carte des alternatives, outils collaboratifs.</p><p>WWOOF France — Réseau de fermes biologiques accueillant des volontaires.</p><p>Rete RIVE (Italie) — Réseau italien des écovillages et communautés intentionnelles.</p><p>Radar Squat — Annuaire international des squats, centres autonomes et lieux alternatifs.</p><p>Dernière mise à jour : avril 2026.\n    Légende : ✅ Actif | 🟡 En veille | ⚠️ Inactif (en ligne mais obsolète) | 🔴 Lien cassé / hors ligne\n    N'hésitez pas à signaler tout lien mort ou toute mise à jour à effectuer.</p><p>Réseaux, associations, liste de lieux, :</p><p>- Lieux de vie\n    ouvert  (Sharewiki) :</p><p>- La Carte ... :  Lieux de vie, bases nomade, collectifs, squat, ecolieux : Récentes mises à jour, ajouts des diverses cartes des alternatives, luttes, lieux de vie... Vous pouvez participer à la mise à jour de la carte en faisant la demande sur la\n    carte</p><p>- http://www.reclaimthefields.org/fr : Réseau européen\n    Reclaim the fields.</p><p>- http://wwolfing.wordpress.com : Du wwoof avec des dents !\n    Issu de RTF</p><p>- Gen-europe.org : Global ecovillage network, réseau\n    Europe. Liste des\n    membres\n    - Eurotopia.de : Liste de liens de communauté\n    intentionnelle en Europe\n    - Eyfa.org : European youth for action, rencontre ecotopia, caravane\n    à vélo...\n    - Ecolieux - Ecovillages : Liste\n    de liens sur habiter-autrement.org</p><p>France \n    - Passerelle Eco :  Pratiques et contacts\n    pour vivre ensemble sur une même planète. Un réseau d'ecovillages, ecolieux actifs en France.  Une revue, des infos, des liens...\n    - Voyageurs.en-transition.fr : projets, lieux,\n    carte...\n    - Écolieux-de-France : Répertoire des écolieux et divers\n    infos..\n    - Halemfrance.org : Association des HAbitants de Logements\n    Ephémères ou Mobiles\n    - Macabane.info :  Mouvement autogéré des\n    chercheurs(cheuses) en habit autonome novateur et écologique...\n    - Katipik.free.fr  : collectif de lutte contre les expulsions des\n    cabanes en Ariège\n    - Permisdevivre.org : Réseau Permis de vivre, regroupement de\n    divers collectifs et association pour une reconnaissance des modes de vie simple, des habitats alternatifs, yourtes, tipis, cabanes...\n    - Terredeliens.org : propose de changer le rapport à la\n    terre, à l’agriculture, à l’alimentation et à la nature, en faisant évoluer le rapport à la propriété foncière. Valorisant les dimensions collectives et solidaires pour l’accès à la terre et sa\n    gestion...\n    - Paradigmes : Aide à la création de lieu de vie\n    alternatif...\n    - Archiutop.com : L'Archipel des utopies,\n    mécénat social ou psychologique\n    - Colibris-lemouvement.org : Le mouvement\n    pour la terre et l'humanisme (Pierre Rabhi) \n    - http://fr.gaiadir.com/ecovillage : Liste d'ecolieu,\n    carte, liens\n    - Info le Réseau Français des ecovillage (RFEV) n'est plus -> voir Passerelle Eco\n    \n    Québec, Canada \n    - Réseau des ÉcoHameaux et ÉcoVillages du\n    Québec / Communauté en fête : Page\n    de liens ecovillage\n    - Terravie.org : fonds foncier communautaire, est un OSBL de\n    bienfaisance et de conservation qui préserve des terres à perpétuité au Québec afin de les transformer en aires protégées...\n    - La plume de feu.com : La revue Aube, revue du Québec\n    sur les écovillages et les alternatives de vie.\n    \n    International\n    - Permacultureglobal.com (Eng): Permaculture projects\n    and practitioners worldwide (Carte, liste de lieux et projets)\n    - Gen.ecovillage.org (Eng): GEN (Global ecovillage network)\n    Réseau international d'ecolieux et projets divers...\n    - Nomadbase.org : Réseau de nomade et de bases, plateforme pour\n    activist, nomad, couchsurfer\n    - Category:Intentional_communities (Wikiped)(Eng): Les communauté intentionelles\n    - Ic.org / Icdb.org (Eng): Intentional Community database, ecovillages, cohousing, communes, student co-ops, urban housing\n    cooperatives...\n    - List of ecovillages (Sharewiki -\n    eng) \n    \n    Divers articles et infos :\n    - Planetfriendly.net/community (Eng): Info,\n    liste, liens communautés intentionnelles, ecovillage...\n    - Comment monter un projet\n    d'écolieu : (Ekopedia) Infos, liens, lieux...\n    - Communautarisme de lieu de\n    vie : (Anarchopedia)\n    - Wiki Ecovillage : Ecovillage guide that\n    anyone can edit...\n    - Sustainablecommunitiesaroundtheworld.blogspot.com : wwoof, ecolieux... (Eng)\n    - L'écohabitat, l'habitat\n    groupé et Vie\n    communautaire ou collective : article spirale.attac\n    - Audio : Archive\n    vie et société - La génération hallucinée (rep. sur communauté hippies...)\n    - Video : Livinginthefuture.org : Série de reportage\n    video d'habitat simple, d'ecovillage...\n    - Video : Groupe ecovillage sur dailymotion,\n    partage de video sur les alternatives</p><p>Lieux de vie, collectifs, micro-société, squat, communautés intentionnelles, ecovillages, ecolieux... : Lieux ouvert à\n    l'accueil, au partage, à l'échange...</p><p>Quelques Lieux en France</p><p>- ZAD : Notre Dame des Landes : https://zad.nadir.org/ :</p><p>- Troglobal : Troglobal.wordpress.com / Archives :Troglobal - Forum /</p><p>- La Vielle Valette : Collectif de la Valette :</p><p>- Longo Maï : Longo\n    maï : Présentation audio longo mai et\n    article sur le Montois (Suisse)</p><p>- Cravirola : Le Maquis</p><p>- Caracolesdesuc.org  : ferme collective autogérée en\n    Ardèche.</p><p>- Collectif-far.org :\n    - Lapicharlerie.internetdown.org : Info cévennes /</p><p>- Le Cantoyourte  (Yurtao)\n     /\n    - Folleterre.org : Lieux de vie.We are queer people\n    exploring tribal life, sustainability and harmony whith nature..\n    - Fermautrement.free.fr : Association Autrement de beuzec\n    L'association Autrement a pour objectif de développer un lieu autour duquel pourraient être mis en place des projets et des activités allant dans une démarche de respect de l'environnement et de\n    développement des relations entre humains. Accueil, partage, apprentissage...\n    - Sens et autonomie : Projet educatif, ateliers,\n    formation...(fr)  /\n    - Ecolieu.durantis.eu : Volontariat, ateliers (Cévennes -\n    FR)</p><p>- Ecolonie / Ecovillage du vieil Audon / BeauChamp Visitors / Ecologite  /</p><p>- Carapa / La Lune Nette : Archives, changement de projet,\n    abandon .</p><p>Quelques projets en ...</p><p>- Villagevegan : Projet vegan en Ardèche - en veille</p><p>- Cyclane.decroissance.info :\n    Projet de village sans voiture - en veille</p><p>- Amopie.free.fr : - en veille</p><p>- Causse de l'Isle : Projet d'achat d'un ancien camp\n    militaire (maj 2004!) /</p><p>- Ecovillage de la Clède  (Cévennes)  /</p><p>- Ecohameaux  (Lorraine) - en veille /</p><p>- Nalou  (Beaulieu sous la Roche) - maj 2008\n    / \n    - Projet habitat groupé dans le\n    cher (Passerelleeco 2007)\n    - Phenomenehomme.eklablog.com : projet ecolieu mt\n    bougarache, alternative jeune..\n    - Egaliville.fr : Projet de village sans argent,\n    forum, infos, liens\n      \n    Espagne\n    Ecoforest.org : raw community (andalousie) /  Comunidadcruda.com  /   Sunseed.org : develop, demonstrate and communicate accessible, low-tech\n    methods of sustainability in a semi-arid environment (andalousie)  /   Matavenero  (nord) /   Can Pasqual : Squat  ( Barcelone) /  Los Arenalejos : En Projet  /  Canmasdeu.net : Squat, centre autogéré (Barcelone)  / Finca el Majolillo : Projecto ecologico (Malaga) / Finca Los Albaricoqueros : Free school project /\n    - Ecosalvia : projet  pyrénées\n    \n    Italie\n    - Torri-superiore.org  / Solaria  /  Casa Cares  /  Ecopueblo  /  Alcatraz  / La valle degli Elfi / Italyecovillage.com /\n    \n    Suisse\n    - Berne / Eriz : Cnr.ch : Center new reality : Rainbow\n    familly</p><p>- Ecodoubs.ch : Les Fermes Communautaires\n    Libres  /</p><p>- Objectifgaia.info  /  Tiocan (France)</p><p>- Ecovillage urbain ou\n    écoquartier dans le bassin lémanique  /\n    - Goldschopf.ch :  Projet communautaire en Suisse\n    Allemande\n    - Autoconstruction-en-paille.over-blog.com : Asso lausannoise Strawd'la balle. Construction d'une maison en paille dans un jardin\n    public de Lausanne. Maison détruite par un incendie criminel....!  \n    - Lieu de vie à Genève A côté de la STEP\n    d’Aïre, presque au bout de la ligne n°51, sur un bout de terrain herbeux en friche, périmètre de l’ancienne usine Haro & Co, un village de roulottes s’est installé il y a bientôt 4 ans. Une\n    trentaine de de familles y vivent.  /\n    \n    Autres\n    - Fazenda.abracadabra.over-blog.com : lieux de\n    vie inspiration rainbow au brésil</p><p>- Communa.org.il : Communauté kibboutz...\n    (Israël)\n    - Diewerkstatt.co.uk : Lieu de vie en Bulgarie</p><p>- Permalot.org : Lieu permaculture en tchéquie.Troglo\n     /\n    - Bosquevillage.com : Lieu ouvert au mexique, wwoof, camping</p><p>- https://rainbowfamilyfrance.wordpress.com/ : Le site de la\n    famille française</p><p>- http://somewhereundertherainbow.org/ : Infos, photos, videos, book...</p><p>- http://www.welcomehome.org/rainbow/index.html :\n    International</p><p>- Cnr.ch : Center new reality and Rainbow tribe suisse. - Rainbowinfo.ch  : Alternative network \n    - Pelerins.populus.org : Pélerins de l'arc en ciel, Projet de\n    lieu (France)</p><p>- Shanti terrian project : Simplicité, arc en ciel,\n    yourte...\n    - Beneficiofamily.com : Welcome home, site de beneficio, chat,\n    forum, liens rassemblement...\n    - Spiritofnature.ch : Spirit of Nature & Nature\n    of Spirit, Promoting a meaningful lifestyle /CH, NZ/ - Globalnative.org :</p><p>- Weloveyoufilm.com : film rainbow</p><p>- http://www.bliss-fire.com/RainbowGuideOnLine.php :\n    Rainbow guide</p><p>Renversé.co\n        \n            La principale plateforme collaborative romande d'information pour les luttes sociales, anticapitalistes, antifascistes et écologistes. Un passage obligé pour trouver des événements et\n            d'autres collectifs.</p><p>La principale plateforme collaborative romande d'information pour les luttes sociales, anticapitalistes, antifascistes et écologistes. Un passage obligé pour trouver des événements et\n            d'autres collectifs.</p><p>Le Silure (Genève)\n        \n            Espace de luttes autonomes et anticapitalistes à Genève (Carouge). Il abrite une cantine, une bibliothèque militante, un infokiosque et organise des réunions politiques (Soulèvements de\n            la terre, etc.).</p><p>Espace de luttes autonomes et anticapitalistes à Genève (Carouge). Il abrite une cantine, une bibliothèque militante, un infokiosque et organise des réunions politiques (Soulèvements de\n            la terre, etc.).</p><p>Espace Noir (Saint-Imier)\n        \n            Centre culturel libertaire et coopératif historique, situé dans le Jura bernois, berceau mondial historique de la mouvance anarchiste (Congrès de l'Internationale anti-autoritaire en\n            1872).</p><p>Centre culturel libertaire et coopératif historique, situé dans le Jura bernois, berceau mondial historique de la mouvance anarchiste (Congrès de l'Internationale anti-autoritaire en\n            1872).</p><p>CIRA (Lausanne)\n        \n            Centre International de Recherches sur l'Anarchisme, la plus grande bibliothèque d'Europe dédiée aux archives et ouvrages anarchistes.</p><p>Centre International de Recherches sur l'Anarchisme, la plus grande bibliothèque d'Europe dédiée aux archives et ouvrages anarchistes.</p><p>Réseau Squat!net Suisse\n        \n            Portail d'informations, d'appels à soutien et d'actualités sur le mouvement des squats, ZAD (Zones à Défendre) et occupations de lieux en Suisse.</p><p>Portail d'informations, d'appels à soutien et d'actualités sur le mouvement des squats, ZAD (Zones à Défendre) et occupations de lieux en Suisse.</p><p>L'Espace Autogéré (Lausanne)\n        \n            Lieu emblématique d'organisation militante. Accueille des assemblées générales, des collectifs anti-répression, des soirées de soutien et une cantine à prix libre.</p><p>Lieu emblématique d'organisation militante. Accueille des assemblées générales, des collectifs anti-répression, des soirées de soutien et une cantine à prix libre.</p><p>L'Usine (Genève)\n        \n            Historiquement issue des mouvements alternatifs, ce centre culturel autogéré abrite de multiples associations (cinéma, concerts, ateliers) fonctionnant de façon horizontale.</p><p>Historiquement issue des mouvements alternatifs, ce centre culturel autogéré abrite de multiples associations (cinéma, concerts, ateliers) fonctionnant de façon horizontale.</p><p>La Ciguë (Genève)\n        \n            Coopérative de logement étudiant issue du mouvement squat des années 80. Elle propose des colocations bon marché hors de la spéculation immobilière, avec un fonctionnement participatif.</p><p>Coopérative de logement étudiant issue du mouvement squat des années 80. Elle propose des colocations bon marché hors de la spéculation immobilière, avec un fonctionnement participatif.</p><p>CoDHA - Coopérative de l'Habitat Associatif\n        \n            Pionnière en Suisse romande de la construction d'écoquartiers participatifs. La propriété appartient à la coopérative, l'usufruit aux habitants.</p><p>Pionnière en Suisse romande de la construction d'écoquartiers participatifs. La propriété appartient à la coopérative, l'usufruit aux habitants.</p><p>Mehr als Wohnen (Zurich)\n        \n            \"Plus que du logement\". Métacoopérative emblématique qui construit et gère de manière autogérée de vastes quartiers à loyer modéré, conçus pour la vie en communauté et l'écologie.</p><p>\"Plus que du logement\". Métacoopérative emblématique qui construit et gère de manière autogérée de vastes quartiers à loyer modéré, conçus pour la vie en communauté et l'écologie.</p><p>Keepinuse.ch (Toute la Suisse romande)\n        \n            Le grand portail anti-consumériste de Suisse romande pour les dons et la récupération d'objets, qui recense aussi de nombreuses alternatives de gratuité.</p><p>Le grand portail anti-consumériste de Suisse romande pour les dons et la récupération d'objets, qui recense aussi de nombreuses alternatives de gratuité.</p><p>Magasin Gratuit de Bellevaux (Lausanne)\n        \n            Lieu physique basé sur la décroissance et la solidarité : on y dépose ce dont on ne se sert plus, on prend ce dont on a besoin, le tout 100% sans argent.</p><p>Lieu physique basé sur la décroissance et la solidarité : on y dépose ce dont on ne se sert plus, on prend ce dont on a besoin, le tout 100% sans argent.</p><p>Gratiferia (Genève / Romandie)\n        \n            Réseau organisant des \"Foires gratuites\". Le principe : chacun amène des objets et/ou repart avec ce qui lui plaît, sans nécessité d'échange (ex: organisées à la Villa Freundler ou à\n            l'Îlot 13).</p><p>Réseau organisant des \"Foires gratuites\". Le principe : chacun amène des objets et/ou repart avec ce qui lui plaît, sans nécessité d'échange (ex: organisées à la Villa Freundler ou à\n            l'Îlot 13).</p><p>WWOOF Suisse\n        \n            Réseau officiel permettant de vivre et travailler dans des fermes biologiques, paysannes et souvent alternatives en Suisse. Un échange de bras et de connaissances contre gîte et couvert\n            (zéro flux financier).</p><p>Réseau officiel permettant de vivre et travailler dans des fermes biologiques, paysannes et souvent alternatives en Suisse. Un échange de bras et de connaissances contre gîte et couvert\n            (zéro flux financier).</p><p>GEN Suisse (Réseau des Écovillages)\n        \n            Le \"Global Ecovillage Network\" pour la Suisse. Permet de trouver des projets de lieux de vie collectifs, comme l'écovillage de Sennrüti ou des habitats en permaculture.</p><p>Le \"Global Ecovillage Network\" pour la Suisse. Permet de trouver des projets de lieux de vie collectifs, comme l'écovillage de Sennrüti ou des habitats en permaculture.</p><p>Le Réseau Mutu\n        \n            Réseau francophone de collectifs anticapitalistes (dont Renversé). C'est le point de départ en ligne pour trouver les canaux de diffusion.</p><p>Réseau francophone de collectifs anticapitalistes (dont Renversé). C'est le point de départ en ligne pour trouver les canaux de diffusion.</p><p>Telegram: Grève du Climat (Klimastreik CH)\n        \n            Canal public de diffusion Telegram de la Grève pour le Climat en Suisse, qui relaye souvent des actions d'écologie décoloniale et anticapitaliste.</p><p>Canal public de diffusion Telegram de la Grève pour le Climat en Suisse, qui relaye souvent des actions d'écologie décoloniale et anticapitaliste.</p><p>Trouver les QR Codes / Liens Signal : Les Infokiosques\n        \n            Pour rejoindre les groupes de discussion cryptés (Signal/Telegram) des collectifs comme Action Antifasciste ou Street Medics, rendez-vous physiquement aux événements du\n            Silure (Genève) ou de L'Espace Autogéré (Lausanne) où des flyers avec QR codes \"lien d'invitation\" sont mis à la disposition des militants de confiance.</p><p>Pour rejoindre les groupes de discussion cryptés (Signal/Telegram) des collectifs comme Action Antifasciste ou Street Medics, rendez-vous physiquement aux événements du\n            Silure (Genève) ou de L'Espace Autogéré (Lausanne) où des flyers avec QR codes \"lien d'invitation\" sont mis à la disposition des militants de confiance.</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>"
        },
        "downloads": [
            {
                "name": "ZAD Notre-Dame-des-Landes",
                "url": "https://zad.nadir.org/"
            },
            {
                "name": "https://zad.nadir.org/",
                "url": "https://zad.nadir.org/"
            }
        ]
    },
    {
        "id": "comment-tresser-un-panier-avec-du-papier-journal-vannerie-de-papier-recup",
        "category": "artisanat",
        "date": "2014/08/25",
        "readingTime": 5,
        "image": "https://image.jimcdn.com/app/cms/image/transf/dimension=120x1024:format=jpg/path/s6b5d09a755d07b57/image/i7fbd8f2664f2c502/version/1408960671/image.jpg",
        "tags": [],
        "title": {
            "fr": "Comment tresser un panier avec du papier journal, vannerie de papier, recup",
            "en": "How to Weave a Storage Basket with Newspaper",
            "es": "Cómo tejer una canasta de almacenamiento con papel de periódico"
        },
        "desc": {
            "fr": "Comment tresser un petit panier avec du papier journal, quelques idées de jeux (un mikado géant et une partie de morpion avec des capsules.)\n    Explication video, tuto, ne jettez plus vos vieux journaux, faites en des p...",
            "en": "Nothing is lost, nothing is created, everything is transformed. Step-by-step practical upcycling guides and traditional handmade craft mastery.",
            "es": "Nada se pierde, nada se crea, todo se transforma. Guías prácticas de reciclaje radical, cestería con periódicos y dominio de las artesanías tradicionales."
        },
        "content": {
            "fr": "<p>Comment tresser un petit panier avec du papier journal, quelques idées de jeux (un mikado géant et une partie de morpion avec des capsules.)\n    Explication video, tuto, ne jettez plus vos vieux journaux, faites en des paniers, des jeux et plus encore.  C'est de la recup, c'est gratuit...</p><p>Dossier complet :  Vannerie.9pdfs.02.2012.zip : 46Mo</p><p>Liens uniques ->: @D :</p><p>-   Vannerie_Traite.pratique.de.la.culture.de.l.osier.GB.ext.51p.pdf\n    -   Vannerie_Baskets.in.europe.GB.ext.60p.pdf\n    -   Vannerie_Nouveau.manuel.complet.de.la.fabrication.de.la.vannerie.1912.BNF.369p.pdf\n    -   Vannerie_Vannerie.tressage.mix.-.s.r.-.ftvm.27p.pdf : La vannerie, tressage de panier, osier, rotin : Techniques, photos, tuto, explications.\n    (extraits de savoir revivre, revivre à la campagne et faites tout vous mêmes)</p><p>- Divers extraits de magazines sur l'artisanat en papier (Via : Variasmanualidades )</p><p>-   Vannerie_Arte.em.jornal.42.29p.pdf\n    -   Vannerie_Arte.con.papel.periodico.41p.pdf\n    -   Vannerie_Artesanato.em.jornal.-.Cestaria.45p.pdf\n    -   Vannerie_Luminarias.de.papel.jornal.32p.pdf</p><p>-   Vannerie_Arts.of.paper.chinois.33p.pdf</p><p>Vannerie : Infos, techniques</p><p>- Panier.over-blog.com : fabrication de panier en éclisse, explication pas à pas</p><p>- Liens sur la vannerie</p><p>- Faire un\n    panier en aiguille de pin (vannerie)</p><p>- Videos : Vannerie (YouTube)</p><p>Papier : Papier journal, Magazine, Livres, Carton de céréales, Briques alimentaires</p><p>- (oOo) Pearl : #Papier, carton</p><p>- Panier, crayon, meuble, et porte guitare en papier  /  Transformer des\n    enveloppes en porte monaille (Inst)</p><p>- Des perles en papier / Bracelet en perle de papier\n    reyclé / Un bol en papier de magazine /\n    - Un petit panier carré en papier renforcé tressé  / Un set de table avec la\n    même technique /  \n    - Art vieux papier  : des\n    sculptures en papier journal superposé\n    - Utiliser les journaux, magazines : Plein d'idées sur esprit recup\n    - Reutilizar papel de\n    periodico, faire des paniers (vannerie), tresser avec du papier journal...\n    - Lampe à suspendre : design année\n    70 / Faire une enveloppe à cd en papier\n    (video)  /</p><p>- Comment faire un porte monnaie\n    avec une vielle brique de lait, de jus... / Porte monaille en brique v2 /</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "en": "<p><strong>[English Version]</strong> How to Weave a Storage Basket with Newspaper: Nothing is lost, nothing is created, everything is transformed. Step-by-step practical upcycling guides and traditional handmade craft mastery.</p><p>Comment tresser un petit panier avec du papier journal, quelques idées de jeux (un mikado géant et une partie de morpion avec des capsules.)\n    Explication video, tuto, ne jettez plus vos vieux journaux, faites en des paniers, des jeux et plus encore.  C'est de la recup, c'est gratuit...</p><p>Dossier complet :  Vannerie.9pdfs.02.2012.zip : 46Mo</p><p>Liens uniques ->: @D :</p><p>-   Vannerie_Traite.pratique.de.la.culture.de.l.osier.GB.ext.51p.pdf\n    -   Vannerie_Baskets.in.europe.GB.ext.60p.pdf\n    -   Vannerie_Nouveau.manuel.complet.de.la.fabrication.de.la.vannerie.1912.BNF.369p.pdf\n    -   Vannerie_Vannerie.tressage.mix.-.s.r.-.ftvm.27p.pdf : La vannerie, tressage de panier, osier, rotin : Techniques, photos, tuto, explications.\n    (extraits de savoir revivre, revivre à la campagne et faites tout vous mêmes)</p><p>- Divers extraits de magazines sur l'artisanat en papier (Via : Variasmanualidades )</p><p>-   Vannerie_Arte.em.jornal.42.29p.pdf\n    -   Vannerie_Arte.con.papel.periodico.41p.pdf\n    -   Vannerie_Artesanato.em.jornal.-.Cestaria.45p.pdf\n    -   Vannerie_Luminarias.de.papel.jornal.32p.pdf</p><p>-   Vannerie_Arts.of.paper.chinois.33p.pdf</p><p>Vannerie : Infos, techniques</p><p>- Panier.over-blog.com : fabrication de panier en éclisse, explication pas à pas</p><p>- Liens sur la vannerie</p><p>- Faire un\n    panier en aiguille de pin (vannerie)</p><p>- Videos : Vannerie (YouTube)</p><p>Papier : Papier journal, Magazine, Livres, Carton de céréales, Briques alimentaires</p><p>- (oOo) Pearl : #Papier, carton</p><p>- Panier, crayon, meuble, et porte guitare en papier  /  Transformer des\n    enveloppes en porte monaille (Inst)</p><p>- Des perles en papier / Bracelet en perle de papier\n    reyclé / Un bol en papier de magazine /\n    - Un petit panier carré en papier renforcé tressé  / Un set de table avec la\n    même technique /  \n    - Art vieux papier  : des\n    sculptures en papier journal superposé\n    - Utiliser les journaux, magazines : Plein d'idées sur esprit recup\n    - Reutilizar papel de\n    periodico, faire des paniers (vannerie), tresser avec du papier journal...\n    - Lampe à suspendre : design année\n    70 / Faire une enveloppe à cd en papier\n    (video)  /</p><p>- Comment faire un porte monnaie\n    avec une vielle brique de lait, de jus... / Porte monaille en brique v2 /</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "es": "<p><strong>[Versión en Español]</strong> Cómo tejer una canasta de almacenamiento con papel de periódico: Nada se pierde, nada se crea, todo se transforma. Guías prácticas de reciclaje radical, cestería con periódicos y dominio de las artesanías tradicionales.</p><p>Comment tresser un petit panier avec du papier journal, quelques idées de jeux (un mikado géant et une partie de morpion avec des capsules.)\n    Explication video, tuto, ne jettez plus vos vieux journaux, faites en des paniers, des jeux et plus encore.  C'est de la recup, c'est gratuit...</p><p>Dossier complet :  Vannerie.9pdfs.02.2012.zip : 46Mo</p><p>Liens uniques ->: @D :</p><p>-   Vannerie_Traite.pratique.de.la.culture.de.l.osier.GB.ext.51p.pdf\n    -   Vannerie_Baskets.in.europe.GB.ext.60p.pdf\n    -   Vannerie_Nouveau.manuel.complet.de.la.fabrication.de.la.vannerie.1912.BNF.369p.pdf\n    -   Vannerie_Vannerie.tressage.mix.-.s.r.-.ftvm.27p.pdf : La vannerie, tressage de panier, osier, rotin : Techniques, photos, tuto, explications.\n    (extraits de savoir revivre, revivre à la campagne et faites tout vous mêmes)</p><p>- Divers extraits de magazines sur l'artisanat en papier (Via : Variasmanualidades )</p><p>-   Vannerie_Arte.em.jornal.42.29p.pdf\n    -   Vannerie_Arte.con.papel.periodico.41p.pdf\n    -   Vannerie_Artesanato.em.jornal.-.Cestaria.45p.pdf\n    -   Vannerie_Luminarias.de.papel.jornal.32p.pdf</p><p>-   Vannerie_Arts.of.paper.chinois.33p.pdf</p><p>Vannerie : Infos, techniques</p><p>- Panier.over-blog.com : fabrication de panier en éclisse, explication pas à pas</p><p>- Liens sur la vannerie</p><p>- Faire un\n    panier en aiguille de pin (vannerie)</p><p>- Videos : Vannerie (YouTube)</p><p>Papier : Papier journal, Magazine, Livres, Carton de céréales, Briques alimentaires</p><p>- (oOo) Pearl : #Papier, carton</p><p>- Panier, crayon, meuble, et porte guitare en papier  /  Transformer des\n    enveloppes en porte monaille (Inst)</p><p>- Des perles en papier / Bracelet en perle de papier\n    reyclé / Un bol en papier de magazine /\n    - Un petit panier carré en papier renforcé tressé  / Un set de table avec la\n    même technique /  \n    - Art vieux papier  : des\n    sculptures en papier journal superposé\n    - Utiliser les journaux, magazines : Plein d'idées sur esprit recup\n    - Reutilizar papel de\n    periodico, faire des paniers (vannerie), tresser avec du papier journal...\n    - Lampe à suspendre : design année\n    70 / Faire une enveloppe à cd en papier\n    (video)  /</p><p>- Comment faire un porte monnaie\n    avec une vielle brique de lait, de jus... / Porte monaille en brique v2 /</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>"
        },
        "downloads": [
            {
                "name": "Vannerie.9pdfs.02.2012.zip",
                "url": "http://www.mediafire.com/?g3krwot9qar4cyp"
            },
            {
                "name": "@D",
                "url": "http://www.mediafire.com/?c4o2bxfd3pnep"
            }
        ]
    },
    {
        "id": "pratique-comment-construire-une-yourte",
        "category": "habitat",
        "date": "2014/08/10",
        "readingTime": 5,
        "image": "https://image.jimcdn.com/app/cms/image/transf/dimension=90x1024:format=jpg/path/s6b5d09a755d07b57/image/ib68e2aad8ec3d619/version/1408017410/image.jpg",
        "tags": [],
        "title": {
            "fr": "Pratique - Comment construire une yourte",
            "en": "Practical — How to Build a Handcrafted Yurt (Ger)",
            "es": "Práctico — Cómo construir una Yurt (Ger) Artesanal"
        },
        "desc": {
            "fr": "Yourte.13.pdfs.02.2012.zip (#) Liens uniques : -> (#D)...",
            "en": "Complete engineering guidelines, structural calculation tables, blueprints, and practical instructions for natural DIY counter-culture habitats.",
            "es": "Planos de ingeniería completos, tablas de cálculo estructural y guías prácticas paso a paso para la autoconstrucción de viviendas ecológicas y alternativas."
        },
        "content": {
            "fr": "<p>Yourte.13.pdfs.02.2012.zip (#)</p><p>Liens uniques : -> (#D)</p><p>* Yourte_Build.your.own.yurt.Mongolian.Ger.17p.pdf\n    * Yourte_Construire.une.yourte.-.La.maison.voyageuse.7p.pdf\n    * Yourte_Construire.une.yourte.-.pass-eco.13p.pdf : Construction d'une yourte en bois local (3m et 4,60m)\n    * Yourte_La.vie.en.yourte.-.pass-eco.8p.pdf\n    * Yourte_Calculs.yourte.4.60m.simplydifferent.org.Ed.Aa.5p.pdf\n    * Yourte_Construire.une.yourte.escargoidale.-.ardheia.21p.pdf : (Via: Ardheia)(Liste des docs de Ardeheia)\n    * Yourte_Couture.des.toiles.-.ardheia.16p.pdf\n    * Yourte_Insulated.earthbag.foundations.for.yurts.-.instructables.com.5p.pdf\n    * Yourte_The.construction.of.a.yurt.-.E.Fkakkari.16p.pdf\n    * Yourte_Building.a.mongolian.yurt.ger.-.Sir.Ogami.26p.pdf\n    * Yourte_Un.chapeau.bien.chaud.et.une.couronne.-.pass-eco.4p.pdf\n    * Yourte_Vers.plus.de.bonnes.heures.pass-eco.6p.pdf\n    * Yourte_De.la.prison.a.la.yourte.-.yurtao.2p.pdf</p><p>- Brochure Flex Yourte : pdf 4p -> Via : http://lacaravane.noblogs.org</p><p>- Plan pour une yourte de 50m2: pdf 8p -> Via : http://nopanic.fr</p><p>- Principes.des.structures.architecturale.légères.-.79p.pdf : Théorie, dome, zome,\n    tansegrity... -> Via : http://co-creation.net</p><p>- Auto.Construction.-.Special.vroutsch.-.1972.-.71p.pdf  : Une perle tout fait à la\n    main , Zome, dome tipi, bus... -> Via  : http://alphazomes.org</p><p>Liens externes : - Yurtao : La\n            voie de la yourte, fabriquer et habiter sa yourte, résister et s'engager contre la marchandisation du monde, inventer un nouvel art de vivre.</p><p>- Domerama.com/types-of-domes/yurts/ : Infos, pdf\n            ..\n            - Dimmension et\n            composition d'une yourte moyenne  / Faire sa yourte : Atipic\n            - Construire une yourte (Tig12) : Chantier yourte, plans,\n            photos, infos..</p><p>- Simplydifferently.org  :\n            Temporary buildings, tipi, yurt (ger) and domes. (Eng) Site trés complet sur les constructions temporaires tipi, yourte, domes et autres variations, info théoriques et pratiques,\n            calculateur en ligne de taille avec apérçu du résultat.</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "en": "<p><strong>[English Version]</strong> Practical — How to Build a Handcrafted Yurt (Ger): Complete engineering guidelines, structural calculation tables, blueprints, and practical instructions for natural DIY counter-culture habitats.</p><p>Yourte.13.pdfs.02.2012.zip (#)</p><p>Liens uniques : -> (#D)</p><p>* Yourte_Build.your.own.yurt.Mongolian.Ger.17p.pdf\n    * Yourte_Construire.une.yourte.-.La.maison.voyageuse.7p.pdf\n    * Yourte_Construire.une.yourte.-.pass-eco.13p.pdf : Construction d'une yourte en bois local (3m et 4,60m)\n    * Yourte_La.vie.en.yourte.-.pass-eco.8p.pdf\n    * Yourte_Calculs.yourte.4.60m.simplydifferent.org.Ed.Aa.5p.pdf\n    * Yourte_Construire.une.yourte.escargoidale.-.ardheia.21p.pdf : (Via: Ardheia)(Liste des docs de Ardeheia)\n    * Yourte_Couture.des.toiles.-.ardheia.16p.pdf\n    * Yourte_Insulated.earthbag.foundations.for.yurts.-.instructables.com.5p.pdf\n    * Yourte_The.construction.of.a.yurt.-.E.Fkakkari.16p.pdf\n    * Yourte_Building.a.mongolian.yurt.ger.-.Sir.Ogami.26p.pdf\n    * Yourte_Un.chapeau.bien.chaud.et.une.couronne.-.pass-eco.4p.pdf\n    * Yourte_Vers.plus.de.bonnes.heures.pass-eco.6p.pdf\n    * Yourte_De.la.prison.a.la.yourte.-.yurtao.2p.pdf</p><p>- Brochure Flex Yourte : pdf 4p -> Via : http://lacaravane.noblogs.org</p><p>- Plan pour une yourte de 50m2: pdf 8p -> Via : http://nopanic.fr</p><p>- Principes.des.structures.architecturale.légères.-.79p.pdf : Théorie, dome, zome,\n    tansegrity... -> Via : http://co-creation.net</p><p>- Auto.Construction.-.Special.vroutsch.-.1972.-.71p.pdf  : Une perle tout fait à la\n    main , Zome, dome tipi, bus... -> Via  : http://alphazomes.org</p><p>Liens externes : - Yurtao : La\n            voie de la yourte, fabriquer et habiter sa yourte, résister et s'engager contre la marchandisation du monde, inventer un nouvel art de vivre.</p><p>- Domerama.com/types-of-domes/yurts/ : Infos, pdf\n            ..\n            - Dimmension et\n            composition d'une yourte moyenne  / Faire sa yourte : Atipic\n            - Construire une yourte (Tig12) : Chantier yourte, plans,\n            photos, infos..</p><p>- Simplydifferently.org  :\n            Temporary buildings, tipi, yurt (ger) and domes. (Eng) Site trés complet sur les constructions temporaires tipi, yourte, domes et autres variations, info théoriques et pratiques,\n            calculateur en ligne de taille avec apérçu du résultat.</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "es": "<p><strong>[Versión en Español]</strong> Práctico — Cómo construir una Yurt (Ger) Artesanal: Planos de ingeniería completos, tablas de cálculo estructural y guías prácticas paso a paso para la autoconstrucción de viviendas ecológicas y alternativas.</p><p>Yourte.13.pdfs.02.2012.zip (#)</p><p>Liens uniques : -> (#D)</p><p>* Yourte_Build.your.own.yurt.Mongolian.Ger.17p.pdf\n    * Yourte_Construire.une.yourte.-.La.maison.voyageuse.7p.pdf\n    * Yourte_Construire.une.yourte.-.pass-eco.13p.pdf : Construction d'une yourte en bois local (3m et 4,60m)\n    * Yourte_La.vie.en.yourte.-.pass-eco.8p.pdf\n    * Yourte_Calculs.yourte.4.60m.simplydifferent.org.Ed.Aa.5p.pdf\n    * Yourte_Construire.une.yourte.escargoidale.-.ardheia.21p.pdf : (Via: Ardheia)(Liste des docs de Ardeheia)\n    * Yourte_Couture.des.toiles.-.ardheia.16p.pdf\n    * Yourte_Insulated.earthbag.foundations.for.yurts.-.instructables.com.5p.pdf\n    * Yourte_The.construction.of.a.yurt.-.E.Fkakkari.16p.pdf\n    * Yourte_Building.a.mongolian.yurt.ger.-.Sir.Ogami.26p.pdf\n    * Yourte_Un.chapeau.bien.chaud.et.une.couronne.-.pass-eco.4p.pdf\n    * Yourte_Vers.plus.de.bonnes.heures.pass-eco.6p.pdf\n    * Yourte_De.la.prison.a.la.yourte.-.yurtao.2p.pdf</p><p>- Brochure Flex Yourte : pdf 4p -> Via : http://lacaravane.noblogs.org</p><p>- Plan pour une yourte de 50m2: pdf 8p -> Via : http://nopanic.fr</p><p>- Principes.des.structures.architecturale.légères.-.79p.pdf : Théorie, dome, zome,\n    tansegrity... -> Via : http://co-creation.net</p><p>- Auto.Construction.-.Special.vroutsch.-.1972.-.71p.pdf  : Une perle tout fait à la\n    main , Zome, dome tipi, bus... -> Via  : http://alphazomes.org</p><p>Liens externes : - Yurtao : La\n            voie de la yourte, fabriquer et habiter sa yourte, résister et s'engager contre la marchandisation du monde, inventer un nouvel art de vivre.</p><p>- Domerama.com/types-of-domes/yurts/ : Infos, pdf\n            ..\n            - Dimmension et\n            composition d'une yourte moyenne  / Faire sa yourte : Atipic\n            - Construire une yourte (Tig12) : Chantier yourte, plans,\n            photos, infos..</p><p>- Simplydifferently.org  :\n            Temporary buildings, tipi, yurt (ger) and domes. (Eng) Site trés complet sur les constructions temporaires tipi, yourte, domes et autres variations, info théoriques et pratiques,\n            calculateur en ligne de taille avec apérçu du résultat.</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>"
        },
        "downloads": [
            {
                "name": "#",
                "url": "http://www.mediafire.com/?zz7u11qpez74pdw"
            },
            {
                "name": "#D",
                "url": "http://www.mediafire.com/?4xm93992kjcwi"
            },
            {
                "name": "Brochure Flex Yourte",
                "url": "http://www.mediafire.com/view/135fc4n5yd57kog/Yourte_Flexyourte..-.plan.infos.-.lacaravane.noblogs.-.4p.pdf"
            },
            {
                "name": "Plan pour une yourte de 50m2",
                "url": "http://www.mediafire.com/view/7i4qbsjsm7d7hcg/Yourte_Plan.pour.une.yourte.de.50.m2.-.nopanic.fr.-.8p.pdf"
            },
            {
                "name": "Principes.des.structures.architecturale.légères",
                "url": "http://www.mediafire.com/view/anmn3t6a2473t74/Principes.structures.architecturale.legeres.-.115p.pdf"
            },
            {
                "name": "Auto.Construction.-.Special.vroutsch.-.1972",
                "url": "http://www.mediafire.com/view/m67z4zsa18d4yn4/Auto.Construction.-.Special.vroutsch.-.1972.-.71p.pdf"
            },
            {
                "name": "http://alphazomes.org",
                "url": "http://alphazomes.org"
            }
        ]
    },
    {
        "id": "les-perles-des-archives-vol1",
        "category": "mediatheque",
        "date": "2015/08/15",
        "readingTime": 7,
        "image": "",
        "tags": [],
        "title": {
            "fr": "Les perles des Archives / Vol1",
            "en": "Gems of the Technical Archives / Vol. 1 (Rare Formulas)",
            "es": "Joyas de los Archivos Técnicos / Vol. 1 (Fórmulas Raras)"
        },
        "desc": {
            "fr": "Les perles des archives... Quelques livres rares et intéressants... For English speakers...",
            "en": "A golden collection of public domain open manual PDFs: 10,000 workshop formulas, 507 mechanical movements, and historic self-reliance wisdom.",
            "es": "Una valiosa colección de libros y manuales de dominio público: 10,000 fórmulas de taller, 507 movimientos mecánicos y enciclopedias históricas de autosuficiencia."
        },
        "content": {
            "fr": "<p>Les perles des archives...</p><p>Quelques livres rares et intéressants... For English speakers</p><p>- Tous les livres de Gardner Dexter ... Mécanique, chimie, moteur à air, à vapeur, à\n    gaz...!!!!,</p><p>- Henley's twentieth century forrmulas, recipes and processes, containing ten thousand selected household and workshop formulas,\n    recipes, processes and moneymaking methods for the practical use of manufacturers, mechanics, housekeepers and home workers</p><p>- Mechanical movements, powers, devices and\n    applicances;</p><p>by Hiscox, Gardner Dexter, 1822-1908</p><p>- Mechanical appliances, mechanical movements and novelties of\n    construction; a complete work and a continuation, as a second volume, of the author's book entitled \"Mechanical movements, powers and devices\" ... including an explanatory chapter on the\n    leading conceptions of perpetual motion existing during the past three centuries by Hiscox, Gardner Dexter, 1822-1908</p><p>- Receipts and remedies; useful hints for everyone on health, beauty, clothing, food. The housewife's complete handbook</p><p>- The engineer's sketch-book of mechanical movements, devices, appliances, contrivances and details employed in the design and construction\n    of machinery for every purpose</p><p>-  Five hundred and seven mechanial movements, embracing all those\n    which are most important in dynamics, hydraulics, hydrostatics, pneumatics, steam engines, mill and other gearing .. by Brown, Henry T.</p><p>- The Dangerous Book for Boys : The bestselling book for every boy from eight to\n    eighty, covering essential boyhood skills such as building tree houses, learning how to fish, finding true north</p><p>- Backyard ballistics : This bestselling DIY handbook now features new and expanded projects, enabling ordinary folks to\n    construct 16 awesome ballistic devices in their garage or basement workshops using inexpensive household or hardware store materials and this step-by-step guide.</p><p>- Absinthe and Flamethrowers ; Projects and\n    Ruminations on the Art of Living Dangerously</p><p>- Scientific American handy book of facts and\n    formulae</p><p>by Hopkins, Albert A. (Albert Allis), 1869-1939, ed</p><p>- Encyclopedia of practical receipts and processes.\n    Containing over 6400 receipts; embracing thorough information, in plain language, applicable to almost every possible industrial and domestic requirement</p><p>by Dick, William B. (William Brisbane), 1827-1901</p><p>- Magic; stage illusions and scientific diversions, including\n    trick photography</p><p>by Hopkins, Albert A. (Albert Allis), 1869-1939; Evans, Henry Ridgely, b. 1861 Published 1897</p><p>- Uncle Josh's trunk-full of fun : a portfolio of first-class wit\n    and humor, and never-ending source of jollity by Dick, William B. (William Brisbane), 1827-1901; Dick & Fitzgerald Published 1869</p><p>- What shall we do to-night? or, Social amusements for\n    evening parties. Furnishing complete and varied programmes for twenty-six entertainments</p><p>by Dick, William B. (William Brisbane), 1827-1901</p><p>- Bulletins d'arboriculture, de culture potagère et de floriculture Publisher Impr. C. Annoot-Braeckman., 1874 Pages 431</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "en": "<p><strong>[English Version]</strong> Gems of the Technical Archives / Vol. 1 (Rare Formulas): A golden collection of public domain open manual PDFs: 10,000 workshop formulas, 507 mechanical movements, and historic self-reliance wisdom.</p><p>Les perles des archives...</p><p>Quelques livres rares et intéressants... For English speakers</p><p>- Tous les livres de Gardner Dexter ... Mécanique, chimie, moteur à air, à vapeur, à\n    gaz...!!!!,</p><p>- Henley's twentieth century forrmulas, recipes and processes, containing ten thousand selected household and workshop formulas,\n    recipes, processes and moneymaking methods for the practical use of manufacturers, mechanics, housekeepers and home workers</p><p>- Mechanical movements, powers, devices and\n    applicances;</p><p>by Hiscox, Gardner Dexter, 1822-1908</p><p>- Mechanical appliances, mechanical movements and novelties of\n    construction; a complete work and a continuation, as a second volume, of the author's book entitled \"Mechanical movements, powers and devices\" ... including an explanatory chapter on the\n    leading conceptions of perpetual motion existing during the past three centuries by Hiscox, Gardner Dexter, 1822-1908</p><p>- Receipts and remedies; useful hints for everyone on health, beauty, clothing, food. The housewife's complete handbook</p><p>- The engineer's sketch-book of mechanical movements, devices, appliances, contrivances and details employed in the design and construction\n    of machinery for every purpose</p><p>-  Five hundred and seven mechanial movements, embracing all those\n    which are most important in dynamics, hydraulics, hydrostatics, pneumatics, steam engines, mill and other gearing .. by Brown, Henry T.</p><p>- The Dangerous Book for Boys : The bestselling book for every boy from eight to\n    eighty, covering essential boyhood skills such as building tree houses, learning how to fish, finding true north</p><p>- Backyard ballistics : This bestselling DIY handbook now features new and expanded projects, enabling ordinary folks to\n    construct 16 awesome ballistic devices in their garage or basement workshops using inexpensive household or hardware store materials and this step-by-step guide.</p><p>- Absinthe and Flamethrowers ; Projects and\n    Ruminations on the Art of Living Dangerously</p><p>- Scientific American handy book of facts and\n    formulae</p><p>by Hopkins, Albert A. (Albert Allis), 1869-1939, ed</p><p>- Encyclopedia of practical receipts and processes.\n    Containing over 6400 receipts; embracing thorough information, in plain language, applicable to almost every possible industrial and domestic requirement</p><p>by Dick, William B. (William Brisbane), 1827-1901</p><p>- Magic; stage illusions and scientific diversions, including\n    trick photography</p><p>by Hopkins, Albert A. (Albert Allis), 1869-1939; Evans, Henry Ridgely, b. 1861 Published 1897</p><p>- Uncle Josh's trunk-full of fun : a portfolio of first-class wit\n    and humor, and never-ending source of jollity by Dick, William B. (William Brisbane), 1827-1901; Dick & Fitzgerald Published 1869</p><p>- What shall we do to-night? or, Social amusements for\n    evening parties. Furnishing complete and varied programmes for twenty-six entertainments</p><p>by Dick, William B. (William Brisbane), 1827-1901</p><p>- Bulletins d'arboriculture, de culture potagère et de floriculture Publisher Impr. C. Annoot-Braeckman., 1874 Pages 431</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "es": "<p><strong>[Versión en Español]</strong> Joyas de los Archivos Técnicos / Vol. 1 (Fórmulas Raras): Una valiosa colección de libros y manuales de dominio público: 10,000 fórmulas de taller, 507 movimientos mecánicos y enciclopedias históricas de autosuficiencia.</p><p>Les perles des archives...</p><p>Quelques livres rares et intéressants... For English speakers</p><p>- Tous les livres de Gardner Dexter ... Mécanique, chimie, moteur à air, à vapeur, à\n    gaz...!!!!,</p><p>- Henley's twentieth century forrmulas, recipes and processes, containing ten thousand selected household and workshop formulas,\n    recipes, processes and moneymaking methods for the practical use of manufacturers, mechanics, housekeepers and home workers</p><p>- Mechanical movements, powers, devices and\n    applicances;</p><p>by Hiscox, Gardner Dexter, 1822-1908</p><p>- Mechanical appliances, mechanical movements and novelties of\n    construction; a complete work and a continuation, as a second volume, of the author's book entitled \"Mechanical movements, powers and devices\" ... including an explanatory chapter on the\n    leading conceptions of perpetual motion existing during the past three centuries by Hiscox, Gardner Dexter, 1822-1908</p><p>- Receipts and remedies; useful hints for everyone on health, beauty, clothing, food. The housewife's complete handbook</p><p>- The engineer's sketch-book of mechanical movements, devices, appliances, contrivances and details employed in the design and construction\n    of machinery for every purpose</p><p>-  Five hundred and seven mechanial movements, embracing all those\n    which are most important in dynamics, hydraulics, hydrostatics, pneumatics, steam engines, mill and other gearing .. by Brown, Henry T.</p><p>- The Dangerous Book for Boys : The bestselling book for every boy from eight to\n    eighty, covering essential boyhood skills such as building tree houses, learning how to fish, finding true north</p><p>- Backyard ballistics : This bestselling DIY handbook now features new and expanded projects, enabling ordinary folks to\n    construct 16 awesome ballistic devices in their garage or basement workshops using inexpensive household or hardware store materials and this step-by-step guide.</p><p>- Absinthe and Flamethrowers ; Projects and\n    Ruminations on the Art of Living Dangerously</p><p>- Scientific American handy book of facts and\n    formulae</p><p>by Hopkins, Albert A. (Albert Allis), 1869-1939, ed</p><p>- Encyclopedia of practical receipts and processes.\n    Containing over 6400 receipts; embracing thorough information, in plain language, applicable to almost every possible industrial and domestic requirement</p><p>by Dick, William B. (William Brisbane), 1827-1901</p><p>- Magic; stage illusions and scientific diversions, including\n    trick photography</p><p>by Hopkins, Albert A. (Albert Allis), 1869-1939; Evans, Henry Ridgely, b. 1861 Published 1897</p><p>- Uncle Josh's trunk-full of fun : a portfolio of first-class wit\n    and humor, and never-ending source of jollity by Dick, William B. (William Brisbane), 1827-1901; Dick & Fitzgerald Published 1869</p><p>- What shall we do to-night? or, Social amusements for\n    evening parties. Furnishing complete and varied programmes for twenty-six entertainments</p><p>by Dick, William B. (William Brisbane), 1827-1901</p><p>- Bulletins d'arboriculture, de culture potagère et de floriculture Publisher Impr. C. Annoot-Braeckman., 1874 Pages 431</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>"
        },
        "downloads": [
            {
                "name": "Tous les livres de Gardner Dexter",
                "url": "https://archive.org/search.php?query=creator%3A%22Hiscox%2C+Gardner+Dexter%2C+1822%3F-1908%22"
            },
            {
                "name": "Henley's twentieth century forrmulas",
                "url": "https://archive.org/details/henleystwentieth00hiscrich"
            },
            {
                "name": "Mechanical movements, powers, devices and\n    applicances",
                "url": "https://archive.org/details/mechanicalmovem04hiscgoog"
            },
            {
                "name": "Mechanical appliances, mechanical movements and novelties of\n    construction",
                "url": "https://archive.org/details/mechanicalappli00dextgoog"
            },
            {
                "name": "Receipts and remedies",
                "url": "https://archive.org/details/receiptsandreme00flemgoog"
            },
            {
                "name": "The engineer's sketch-book of mechanical movements, devices, appliances",
                "url": "https://archive.org/details/engineerssketchb00barb"
            },
            {
                "name": "Five hundred and seven mechanial movements",
                "url": "https://archive.org/details/fivehundredseven02brow"
            },
            {
                "name": "The Dangerous Book for Boys",
                "url": "http://kat.cr/the-dangerous-book-for-boys-us-by-conn-and-hal-iggulden-retail-dwg-t9511544.html"
            },
            {
                "name": "Backyard ballistics",
                "url": "http://kat.cr/backyard-ballistics-epub-retail-32skulls-t9572218.html"
            },
            {
                "name": "Absinthe and Flamethrowers",
                "url": "http://kat.cr/william-gurstelle-absinthe-and-flamethrowers-projects-and-ruminations-on-the-art-of-living-dangerously-epub-plex-t10379851.html"
            },
            {
                "name": "Scientific American handy book of facts and\n    formulae",
                "url": "https://archive.org/details/scientificameric03hopk"
            },
            {
                "name": "Encyclopedia of practical receipts and processes",
                "url": "https://archive.org/details/encyclopediaofpr00dickrich"
            },
            {
                "name": "Magic; stage illusions and scientific diversions",
                "url": "https://archive.org/details/magicstageillusi00hopk"
            },
            {
                "name": "Uncle Josh's trunk-full of fun",
                "url": "https://archive.org/details/unclejoshstrunkf00dick"
            },
            {
                "name": "What shall we do to-night?",
                "url": "https://archive.org/details/whatshallwedoton00dickrich"
            },
            {
                "name": "Bulletins d'arboriculture, de culture potagère et de floriculture",
                "url": "https://archive.org/details/bulletinsdarbor04unkngoog"
            }
        ]
    },
    {
        "id": "farm-network-reclaim-the-field",
        "category": "en-vrac",
        "date": "2015/08/14",
        "readingTime": 4,
        "image": "",
        "tags": [],
        "title": {
            "fr": "Farm network / Reclaim the field",
            "en": "European Farm Network / Reclaim the Fields",
            "es": "Red de Granjas de Europa / Reclaim the Fields"
        },
        "desc": {
            "fr": "Réseau de Compagnonnage Fourche et Champ Libre Fourche et Champ Libre est un réseau de fermes qui accueille toute personne désireuse d'apprendre l'agriculture, partager l'histoire de ces lieux et leurs pratiques politiqu...",
            "en": "Exploring self-reliance, practical degrowth, infokiosk zines, decentralized networks, and grassroots socio-ecological mutual aid.",
            "es": "Explorando la autosuficiencia, el decrecimiento práctico, folletos de infokiosco, redes descentralizadas y apoyo mutuo socioecológico de base."
        },
        "content": {
            "fr": "<p>Réseau de Compagnonnage Fourche et Champ Libre</p><p>Fourche et Champ Libre est un réseau de fermes qui accueille toute personne désireuse d'apprendre l'agriculture, partager l'histoire de ces lieux et leurs pratiques politiques. Il\n    s’appuie sur la rencontre entre des personnes souhaitant concrètement être accompagnées (ou souhaitant un complément de formation) dans l'apprentissage de pratiques agricoles et des\n    individus/collectifs déjà installés en agriculture.</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "en": "<p><strong>[English Version]</strong> European Farm Network / Reclaim the Fields: Exploring self-reliance, practical degrowth, infokiosk zines, decentralized networks, and grassroots socio-ecological mutual aid.</p><p>Réseau de Compagnonnage Fourche et Champ Libre</p><p>Fourche et Champ Libre est un réseau de fermes qui accueille toute personne désireuse d'apprendre l'agriculture, partager l'histoire de ces lieux et leurs pratiques politiques. Il\n    s’appuie sur la rencontre entre des personnes souhaitant concrètement être accompagnées (ou souhaitant un complément de formation) dans l'apprentissage de pratiques agricoles et des\n    individus/collectifs déjà installés en agriculture.</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "es": "<p><strong>[Versión en Español]</strong> Red de Granjas de Europa / Reclaim the Fields: Explorando la autosuficiencia, el decrecimiento práctico, folletos de infokiosco, redes descentralizadas y apoyo mutuo socioecológico de base.</p><p>Réseau de Compagnonnage Fourche et Champ Libre</p><p>Fourche et Champ Libre est un réseau de fermes qui accueille toute personne désireuse d'apprendre l'agriculture, partager l'histoire de ces lieux et leurs pratiques politiques. Il\n    s’appuie sur la rencontre entre des personnes souhaitant concrètement être accompagnées (ou souhaitant un complément de formation) dans l'apprentissage de pratiques agricoles et des\n    individus/collectifs déjà installés en agriculture.</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>"
        },
        "downloads": []
    },
    {
        "id": "le-kiosques-autonomes",
        "category": "en-vrac",
        "date": "2014/09/14",
        "readingTime": 4,
        "image": "https://image.jimcdn.com/app/cms/image/transf/dimension=260x1024:format=jpg/path/s6b5d09a755d07b57/image/ibe09e84176246761/version/1410713606/image.jpg",
        "tags": [],
        "title": {
            "fr": "Le Kiosques Autonomes",
            "en": "The Autonomous Mobile Kiosk (Solar & Waste Oil Trailer)",
            "es": "El Kiosco Comunitario Autónomo (Remolque Solar y Aceite de Fritura)"
        },
        "desc": {
            "fr": "récup' et recyclage des eaux usées par des plantes, toilettes sèches pour le compost avec sciure et humus, électricité par panneau solaire, capteur solaire pour chauffer l'eau, four solaire,\n    système de filtration d'h...",
            "en": "Exploring self-reliance, practical degrowth, infokiosk zines, decentralized networks, and grassroots socio-ecological mutual aid.",
            "es": "Explorando la autosuficiencia, el decrecimiento práctico, folletos de infokiosco, redes descentralizadas y apoyo mutuo socioecológico de base."
        },
        "content": {
            "fr": "<p>récup' et recyclage des eaux usées par des plantes, toilettes sèches pour le compost avec sciure et humus, électricité par panneau solaire, capteur solaire pour chauffer l'eau, four solaire,\n    système de filtration d'huile de friture pour faire du carburant, 5 murs différents bio climatiques(lavande, tournesol...) pour faire des maisons qui absorbent et stockent le CO2\n    etc.</p><p>- Kiosques.autonomes.-.32p.pdf : Infos, description, plans...</p><p>- http://kiosquesautonomes.over-blog.org :</p><p>- http://info-kiosques.blogspot.ch/\n    :</p><p>- Voyageurs des possibles :</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "en": "<p><strong>[English Version]</strong> The Autonomous Mobile Kiosk (Solar & Waste Oil Trailer): Exploring self-reliance, practical degrowth, infokiosk zines, decentralized networks, and grassroots socio-ecological mutual aid.</p><p>récup' et recyclage des eaux usées par des plantes, toilettes sèches pour le compost avec sciure et humus, électricité par panneau solaire, capteur solaire pour chauffer l'eau, four solaire,\n    système de filtration d'huile de friture pour faire du carburant, 5 murs différents bio climatiques(lavande, tournesol...) pour faire des maisons qui absorbent et stockent le CO2\n    etc.</p><p>- Kiosques.autonomes.-.32p.pdf : Infos, description, plans...</p><p>- http://kiosquesautonomes.over-blog.org :</p><p>- http://info-kiosques.blogspot.ch/\n    :</p><p>- Voyageurs des possibles :</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "es": "<p><strong>[Versión en Español]</strong> El Kiosco Comunitario Autónomo (Remolque Solar y Aceite de Fritura): Explorando la autosuficiencia, el decrecimiento práctico, folletos de infokiosco, redes descentralizadas y apoyo mutuo socioecológico de base.</p><p>récup' et recyclage des eaux usées par des plantes, toilettes sèches pour le compost avec sciure et humus, électricité par panneau solaire, capteur solaire pour chauffer l'eau, four solaire,\n    système de filtration d'huile de friture pour faire du carburant, 5 murs différents bio climatiques(lavande, tournesol...) pour faire des maisons qui absorbent et stockent le CO2\n    etc.</p><p>- Kiosques.autonomes.-.32p.pdf : Infos, description, plans...</p><p>- http://kiosquesautonomes.over-blog.org :</p><p>- http://info-kiosques.blogspot.ch/\n    :</p><p>- Voyageurs des possibles :</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>"
        },
        "downloads": [
            {
                "name": "Kiosques.autonomes",
                "url": "http://www.mediafire.com/view/re9af9w1pof4pii/Kiosques.autonomes.-.32p.pdf"
            }
        ]
    },
    {
        "id": "autoconstruction-special-vroutsch-1972",
        "category": "habitat",
        "date": "2014/09/14",
        "readingTime": 4,
        "image": "https://image.jimcdn.com/app/cms/image/transf/dimension=104x1024:format=jpg/path/s6b5d09a755d07b57/image/ic510f6dfe3628675/version/1410711085/image.jpg",
        "tags": [],
        "title": {
            "fr": "Autoconstruction - special vroutsch / 1972",
            "en": "Self-Building — Special Vroutsch 1972 (Cult Manual)",
            "es": "Autoconstrucción — Especial Vroutsch 1972 (Manual de Culto)"
        },
        "desc": {
            "fr": "- Architecture.de.Philibert.de.l.Orme.1567.-.587p.pdf :  -> Via: Gallica.bnf - Principes.des.structures.architecturale.légères.-.115p.pdf : Théorie, dome, zome,\n    tansegrity... -> Via : http://co-creation.net...",
            "en": "Complete engineering guidelines, structural calculation tables, blueprints, and practical instructions for natural DIY counter-culture habitats.",
            "es": "Planos de ingeniería completos, tablas de cálculo estructural y guías prácticas paso a paso para la autoconstrucción de viviendas ecológicas y alternativas."
        },
        "content": {
            "fr": "<p>- Architecture.de.Philibert.de.l.Orme.1567.-.587p.pdf :  -> Via: Gallica.bnf</p><p>- Principes.des.structures.architecturale.légères.-.115p.pdf : Théorie, dome, zome,\n    tansegrity... -> Via : http://co-creation.net</p><p>-  Making.a.reciprocal.Frame.Roof.-.14p : Faire un toit réciproque, infos, photos\n    -> Via: http://www.thatroundhouse.info</p><p>Construire un tipi / Construire une Yourte</p><p>Habitat et construction traditionnelle et\n    marginales</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "en": "<p><strong>[English Version]</strong> Self-Building — Special Vroutsch 1972 (Cult Manual): Complete engineering guidelines, structural calculation tables, blueprints, and practical instructions for natural DIY counter-culture habitats.</p><p>- Architecture.de.Philibert.de.l.Orme.1567.-.587p.pdf :  -> Via: Gallica.bnf</p><p>- Principes.des.structures.architecturale.légères.-.115p.pdf : Théorie, dome, zome,\n    tansegrity... -> Via : http://co-creation.net</p><p>-  Making.a.reciprocal.Frame.Roof.-.14p : Faire un toit réciproque, infos, photos\n    -> Via: http://www.thatroundhouse.info</p><p>Construire un tipi / Construire une Yourte</p><p>Habitat et construction traditionnelle et\n    marginales</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "es": "<p><strong>[Versión en Español]</strong> Autoconstrucción — Especial Vroutsch 1972 (Manual de Culto): Planos de ingeniería completos, tablas de cálculo estructural y guías prácticas paso a paso para la autoconstrucción de viviendas ecológicas y alternativas.</p><p>- Architecture.de.Philibert.de.l.Orme.1567.-.587p.pdf :  -> Via: Gallica.bnf</p><p>- Principes.des.structures.architecturale.légères.-.115p.pdf : Théorie, dome, zome,\n    tansegrity... -> Via : http://co-creation.net</p><p>-  Making.a.reciprocal.Frame.Roof.-.14p : Faire un toit réciproque, infos, photos\n    -> Via: http://www.thatroundhouse.info</p><p>Construire un tipi / Construire une Yourte</p><p>Habitat et construction traditionnelle et\n    marginales</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>"
        },
        "downloads": [
            {
                "name": "Auto.Construction.-.Special.vroutsch",
                "url": "http://www.mediafire.com/view/m67z4zsa18d4yn4/Auto.Construction.-.Special.vroutsch.-.1972.-.71p.pdf"
            },
            {
                "name": "http://alphazomes.org",
                "url": "http://alphazomes.org%20"
            },
            {
                "name": "Architecture.de.Philibert.de.l.Orme",
                "url": "http://www.mediafire.com/view/k8t5f4jrp7jja3o/Architecture%20.de.Philibert.de.l.Orme.1567.-.587p.pdf"
            },
            {
                "name": "Principes.des.structures.architecturale.légères",
                "url": "http://www.mediafire.com/view/anmn3t6a2473t74/Principes.structures.architecturale.legeres.-.115p.pdf"
            },
            {
                "name": "Making.a.reciprocal.Frame.Roof",
                "url": "http://www.mediafire.com/view/8w5sfygw9lt7z5t/Making.a.reciprocal.Frame.Roof.-.thatroundhouse.info.-.14p.pdf"
            }
        ]
    },
    {
        "id": "habitats-construction-traditionnelles-et-marginales",
        "category": "habitat",
        "date": "2014/08/14",
        "readingTime": 5,
        "image": "https://image.jimcdn.com/app/cms/image/transf/dimension=88x1024:format=jpg/path/s6b5d09a755d07b57/image/i350d44051008b6d6/version/1408023612/image.jpg",
        "tags": [],
        "title": {
            "fr": "Habitats - Construction traditionnelles et marginales",
            "en": "Handmade Habitats — Traditional & Marginal Dwellings",
            "es": "Hábitats Artesanales — Viviendas Tradicionales y Marginales"
        },
        "desc": {
            "fr": "- Auto.Construction.-.Special.vroutsch.-.1972.-.71p.pdf  : Une perle tout fait à la\n    main , Zome, dome tipi, bus... -> Via  : http://alphazomes.org - Architecture.de.Philibert.de.l.Orme.1567.-.587p.pdf :  -> Via: Gall...",
            "en": "Complete engineering guidelines, structural calculation tables, blueprints, and practical instructions for natural DIY counter-culture habitats.",
            "es": "Planos de ingeniería completos, tablas de cálculo estructural y guías prácticas paso a paso para la autoconstrucción de viviendas ecológicas y alternativas."
        },
        "content": {
            "fr": "<p>- Auto.Construction.-.Special.vroutsch.-.1972.-.71p.pdf  : Une perle tout fait à la\n    main , Zome, dome tipi, bus... -> Via  : http://alphazomes.org</p><p>- Architecture.de.Philibert.de.l.Orme.1567.-.587p.pdf :  -> Via: Gallica.bnf</p><p>- Principes.des.structures.architecturale.légères.-.115p.pdf : Théorie, dome, zome,\n    tansegrity... -> Via : http://co-creation.net</p><p>-  Making.a.reciprocal.Frame.Roof.-.14p : Faire un toit réciproque, infos, photos\n    -> Via: http://www.thatroundhouse.info</p><p>- Aboveground.home.shelter : Abris en dessus du sol, construction de cabane dans les arbres</p><p>- Farm.buildings.with.plans.and.description : Construction de ferme avec plans et explications</p><p>- GB-home.work.ext52p : Home work - Abris autoconstruit - photos de divers habitats autoconstruits</p><p>- Letsremake.inflate.cookbook  : Le livre de cuisine des structure gonflable...</p><p>- Letsremake.how.to.build.your.own.living.structure :Construire ta propre structure de vie, infos, photos</p><p>- Pioneering.projects.big.and.small : Projet de scoot petits et grands, Structure diverse, pont, abris...</p><p>- The.complete.book.of.underground.houses : Le livre complet des maison souterraine</p><p>- Wilderness.homes.a.book.of.log.cabin : Maison sauvage - Un livre sur les maison en rondin</p><p>-..... et bien plus encore !!!!</p><p>Liens internes :\n    - Dossier : Comment fabriquer un tipi (tepee)? Plan, tuto, images</p><p>- Dossier : Comment construire un dôme géodésique.</p><p>- Document : Habitat d'urgence autonome démontable,\n    autoconstruit</p><p>Liens externes :\n    - Archilibre.org : Architectures libres, spontanées, sauvages, marginales, autodidactes,\n    novatrices, éphémères, iconoclastes, hasardeuses, primaires...\n    - Habiter-autrement.org : Utopies Co-housing, Eco-village, Intergénérationnel,\n    Squat, Minimaliste, Mobile... autres</p><p>- Ardheia.free.fr : Association pour la Recherche et la Dynamisation d'un Habitat Ecologique,\n    Innovant et Alternatif.</p><p>- Letsremake.info : Librairie de l'optimisme radiant pour re-faire le monde...</p><p>- Tinyhouseliving.com : La vie dans des\n    petites  maison ...</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "en": "<p><strong>[English Version]</strong> Handmade Habitats — Traditional & Marginal Dwellings: Complete engineering guidelines, structural calculation tables, blueprints, and practical instructions for natural DIY counter-culture habitats.</p><p>- Auto.Construction.-.Special.vroutsch.-.1972.-.71p.pdf  : Une perle tout fait à la\n    main , Zome, dome tipi, bus... -> Via  : http://alphazomes.org</p><p>- Architecture.de.Philibert.de.l.Orme.1567.-.587p.pdf :  -> Via: Gallica.bnf</p><p>- Principes.des.structures.architecturale.légères.-.115p.pdf : Théorie, dome, zome,\n    tansegrity... -> Via : http://co-creation.net</p><p>-  Making.a.reciprocal.Frame.Roof.-.14p : Faire un toit réciproque, infos, photos\n    -> Via: http://www.thatroundhouse.info</p><p>- Aboveground.home.shelter : Abris en dessus du sol, construction de cabane dans les arbres</p><p>- Farm.buildings.with.plans.and.description : Construction de ferme avec plans et explications</p><p>- GB-home.work.ext52p : Home work - Abris autoconstruit - photos de divers habitats autoconstruits</p><p>- Letsremake.inflate.cookbook  : Le livre de cuisine des structure gonflable...</p><p>- Letsremake.how.to.build.your.own.living.structure :Construire ta propre structure de vie, infos, photos</p><p>- Pioneering.projects.big.and.small : Projet de scoot petits et grands, Structure diverse, pont, abris...</p><p>- The.complete.book.of.underground.houses : Le livre complet des maison souterraine</p><p>- Wilderness.homes.a.book.of.log.cabin : Maison sauvage - Un livre sur les maison en rondin</p><p>-..... et bien plus encore !!!!</p><p>Liens internes :\n    - Dossier : Comment fabriquer un tipi (tepee)? Plan, tuto, images</p><p>- Dossier : Comment construire un dôme géodésique.</p><p>- Document : Habitat d'urgence autonome démontable,\n    autoconstruit</p><p>Liens externes :\n    - Archilibre.org : Architectures libres, spontanées, sauvages, marginales, autodidactes,\n    novatrices, éphémères, iconoclastes, hasardeuses, primaires...\n    - Habiter-autrement.org : Utopies Co-housing, Eco-village, Intergénérationnel,\n    Squat, Minimaliste, Mobile... autres</p><p>- Ardheia.free.fr : Association pour la Recherche et la Dynamisation d'un Habitat Ecologique,\n    Innovant et Alternatif.</p><p>- Letsremake.info : Librairie de l'optimisme radiant pour re-faire le monde...</p><p>- Tinyhouseliving.com : La vie dans des\n    petites  maison ...</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "es": "<p><strong>[Versión en Español]</strong> Hábitats Artesanales — Viviendas Tradicionales y Marginales: Planos de ingeniería completos, tablas de cálculo estructural y guías prácticas paso a paso para la autoconstrucción de viviendas ecológicas y alternativas.</p><p>- Auto.Construction.-.Special.vroutsch.-.1972.-.71p.pdf  : Une perle tout fait à la\n    main , Zome, dome tipi, bus... -> Via  : http://alphazomes.org</p><p>- Architecture.de.Philibert.de.l.Orme.1567.-.587p.pdf :  -> Via: Gallica.bnf</p><p>- Principes.des.structures.architecturale.légères.-.115p.pdf : Théorie, dome, zome,\n    tansegrity... -> Via : http://co-creation.net</p><p>-  Making.a.reciprocal.Frame.Roof.-.14p : Faire un toit réciproque, infos, photos\n    -> Via: http://www.thatroundhouse.info</p><p>- Aboveground.home.shelter : Abris en dessus du sol, construction de cabane dans les arbres</p><p>- Farm.buildings.with.plans.and.description : Construction de ferme avec plans et explications</p><p>- GB-home.work.ext52p : Home work - Abris autoconstruit - photos de divers habitats autoconstruits</p><p>- Letsremake.inflate.cookbook  : Le livre de cuisine des structure gonflable...</p><p>- Letsremake.how.to.build.your.own.living.structure :Construire ta propre structure de vie, infos, photos</p><p>- Pioneering.projects.big.and.small : Projet de scoot petits et grands, Structure diverse, pont, abris...</p><p>- The.complete.book.of.underground.houses : Le livre complet des maison souterraine</p><p>- Wilderness.homes.a.book.of.log.cabin : Maison sauvage - Un livre sur les maison en rondin</p><p>-..... et bien plus encore !!!!</p><p>Liens internes :\n    - Dossier : Comment fabriquer un tipi (tepee)? Plan, tuto, images</p><p>- Dossier : Comment construire un dôme géodésique.</p><p>- Document : Habitat d'urgence autonome démontable,\n    autoconstruit</p><p>Liens externes :\n    - Archilibre.org : Architectures libres, spontanées, sauvages, marginales, autodidactes,\n    novatrices, éphémères, iconoclastes, hasardeuses, primaires...\n    - Habiter-autrement.org : Utopies Co-housing, Eco-village, Intergénérationnel,\n    Squat, Minimaliste, Mobile... autres</p><p>- Ardheia.free.fr : Association pour la Recherche et la Dynamisation d'un Habitat Ecologique,\n    Innovant et Alternatif.</p><p>- Letsremake.info : Librairie de l'optimisme radiant pour re-faire le monde...</p><p>- Tinyhouseliving.com : La vie dans des\n    petites  maison ...</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>"
        },
        "downloads": [
            {
                "name": "#",
                "url": "http://www.mediafire.com/view/?9879kcgolypri0v"
            },
            {
                "name": "#",
                "url": "http://www.mediafire.com/?itneqcvh72sav"
            },
            {
                "name": "Auto.Construction.-.Special.vroutsch.-.1972",
                "url": "http://www.mediafire.com/view/m67z4zsa18d4yn4/Auto.Construction.-.Special.vroutsch.-.1972.-.71p.pdf"
            },
            {
                "name": "http://alphazomes.org",
                "url": "http://alphazomes.org"
            },
            {
                "name": "Architecture.de.Philibert.de.l.Orme",
                "url": "http://www.mediafire.com/view/k8t5f4jrp7jja3o/Architecture%20.de.Philibert.de.l.Orme.1567.-.587p.pdf"
            },
            {
                "name": "Principes.des.structures.architecturale.légères",
                "url": "http://www.mediafire.com/view/anmn3t6a2473t74/Principes.structures.architecturale.legeres.-.115p.pdf"
            },
            {
                "name": "Making.a.reciprocal.Frame.Roof",
                "url": "http://www.mediafire.com/view/8w5sfygw9lt7z5t/Making.a.reciprocal.Frame.Roof.-.thatroundhouse.info.-.14p.pdf"
            }
        ]
    },
    {
        "id": "autoconstruction-d-une-yourte-locale",
        "category": "habitat",
        "date": "2014/09/03",
        "readingTime": 8,
        "image": "https://image.jimcdn.com/app/cms/image/transf/dimension=230x1024:format=jpg/path/s6b5d09a755d07b57/image/i7a1e7d615b455f6f/version/1409553818/image.jpg",
        "tags": [],
        "title": {
            "fr": "Autoconstruction d'une yourte locale",
            "en": "Self-Building a Handcrafted Local Yurt (Switzerland)",
            "es": "Autoconstrucción de una Yurt con Madera Local (Suiza)"
        },
        "desc": {
            "fr": "70 perches de 185cm, 2 à 3 cm de diamétre, trou de 6mm, corde 4mm (synthétique) A faire : protéger le bas des perches idée scotch de carrosier...",
            "en": "Complete engineering guidelines, structural calculation tables, blueprints, and practical instructions for natural DIY counter-culture habitats.",
            "es": "Planos de ingeniería completos, tablas de cálculo estructural y guías prácticas paso a paso para la autoconstrucción de viviendas ecológicas y alternativas."
        },
        "content": {
            "fr": "<p>70 perches de 185cm, 2 à 3 cm de diamétre, trou de 6mm, corde 4mm (synthétique)</p><p>A faire : protéger le bas des perches idée scotch de carrosier</p><p>36 perches de 2,27m - 2,5 à 5 cm de diam, 2 trous à 4 et 6 cm du gros bout</p><p>Construction du tonno : heptagone - Diam ext 80 cm</p><p>Fait avec des chutes de découpe de manche de pioche en frênes, les morceau ne sont pas qualibré mais font tous la même longueur, découpe des angles, premier assemblage avec des clous et\n            rajout de plaques de serrage de chaque coté (latte d'un vieux lit en bois)</p><p>Trous pour les perches forêt 26mm , 6 trous par coté sauf le coté porte avec 4 trous</p><p>La porte : monter le cadre (bois ok) , trous pour les perches du toit -> la porte : trouver le bois!</p><p>Cadre de porte fait avec un vieux sommier et autre morceau qui trainait 120/150 -> charnière et porte à faire, porte trouvée et posée (grande fenêtre récup)</p><p>La toile : Trouver la toile, une bonne machine -> coudre!</p><p>Toile ext : Couture du mur toile coton ext ok, toit cousu plusieurs draps récupéré - un carré de 6m env -> découpe du rond central du toono, (découpe d'un bord au\n            centre pour recouvrir ?). découpe du rond externe, min 5.48m + 20cm pour recouvrir le mur. Pour le mur le tissu est en trois partie - Raccords en velcro -> intégration d'une fenètre en\n            plastique souple, possibilité d'ouvrir le mur pour aérer. Pour le moment je laisse le toit le le mur séparer mais je vais ptetre coudre le tout ensemble... Ajout d'une jupe sur le bas du\n            mur -> trouver le tissu pour la jupe.</p><p>Toile étanche : Pour le moment bache classique bleu (récup) -> découpe centre interne externe, (découpe de recouvrement)</p><p>2e couche : Toile en couverture de l'armée suisse (isolation été)</p><p>1e couche : Toile intérieure, coton léger</p><p>Ajout par la suite d'isolation entre la 1er et la 2e couche</p><p>Le chapeau : Toile, toile transparente, corde -> pour protéger le toono, toile plastique, parapluie, hublot, ...?</p><p>Le plancher : Base en palette (récup) et plancher en panneau d'osb</p><p>nb de panneau : ... / Prix : ... / Plus quelques vis</p><p>Cordes : 22m 8.-, 2x 20m 19.-, 16m 16.-, 2x 20m 15.80, 20m 7.90 / Fils à coudre : 4.95 / Fôret de 26mm : 8.90 /</p><p>Papier de verre : 7.- / Ruban de béton : 7.65 / Plastique recyclé pour le mur : 2x 20m/2 33.80 /</p><p>Infos divers, notes :</p><p>Perche coupées pour le treillis et le toit, du noisetier en majorité, coupé en lune descendante et décroissante. Perches recoupées à la bonne taille puis écorcées le plus rapidement\n            possible, elle sont ensuite attachées en botte de 10 et séche tranquilement à l'abris. (Attention faut pas faire ça... de la moisissure est apparue sur des perches situées au centre de la\n            botte! -> ponçage)</p><p>Idée protéger le bois avec un vernis huile lin cire thérébentine</p><p>1er montage efféctué, la yourte est en place !, 1er couche de tissus, 2e couche de couvertures, 3e couche bache plastique bleu cousue, 4e couche coton blanc pour faire joli...! Le treills\n            est posé directement sur le sol (terre tassée et graviés), apres trois jours de pluie on voit l'eau qui serpente sous les graviers a l'intérieur depuis l'amont... -> rigole creusée\n            autour de la yourte en amont, juste lissé le fond de la rigole c'est une terre argileuse, l'eau s'écoule bien le long de la tranchée.</p><p>Pour l'instant la couche anti pluie a l'air de bien tenir, pas d'infiltration dans la toile !</p><p>Besoins actuels, recherche :</p><p>- Toile transparente pour le chapeau et les fenêtres</p><p>- De la toile étanche pour l'extérieur de la yourte, (toile de protection solaire, toile marine) -> contact fabriquant de store, sellerie, bateau...</p><p>J'ai utilisé un article de passerelle eco  et le site simplydifferent.org</p><p>Voir l'article construire une yourte pour trouver tout les\n    documents.</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "en": "<p><strong>[English Version]</strong> Self-Building a Handcrafted Local Yurt (Switzerland): Complete engineering guidelines, structural calculation tables, blueprints, and practical instructions for natural DIY counter-culture habitats.</p><p>70 perches de 185cm, 2 à 3 cm de diamétre, trou de 6mm, corde 4mm (synthétique)</p><p>A faire : protéger le bas des perches idée scotch de carrosier</p><p>36 perches de 2,27m - 2,5 à 5 cm de diam, 2 trous à 4 et 6 cm du gros bout</p><p>Construction du tonno : heptagone - Diam ext 80 cm</p><p>Fait avec des chutes de découpe de manche de pioche en frênes, les morceau ne sont pas qualibré mais font tous la même longueur, découpe des angles, premier assemblage avec des clous et\n            rajout de plaques de serrage de chaque coté (latte d'un vieux lit en bois)</p><p>Trous pour les perches forêt 26mm , 6 trous par coté sauf le coté porte avec 4 trous</p><p>La porte : monter le cadre (bois ok) , trous pour les perches du toit -> la porte : trouver le bois!</p><p>Cadre de porte fait avec un vieux sommier et autre morceau qui trainait 120/150 -> charnière et porte à faire, porte trouvée et posée (grande fenêtre récup)</p><p>La toile : Trouver la toile, une bonne machine -> coudre!</p><p>Toile ext : Couture du mur toile coton ext ok, toit cousu plusieurs draps récupéré - un carré de 6m env -> découpe du rond central du toono, (découpe d'un bord au\n            centre pour recouvrir ?). découpe du rond externe, min 5.48m + 20cm pour recouvrir le mur. Pour le mur le tissu est en trois partie - Raccords en velcro -> intégration d'une fenètre en\n            plastique souple, possibilité d'ouvrir le mur pour aérer. Pour le moment je laisse le toit le le mur séparer mais je vais ptetre coudre le tout ensemble... Ajout d'une jupe sur le bas du\n            mur -> trouver le tissu pour la jupe.</p><p>Toile étanche : Pour le moment bache classique bleu (récup) -> découpe centre interne externe, (découpe de recouvrement)</p><p>2e couche : Toile en couverture de l'armée suisse (isolation été)</p><p>1e couche : Toile intérieure, coton léger</p><p>Ajout par la suite d'isolation entre la 1er et la 2e couche</p><p>Le chapeau : Toile, toile transparente, corde -> pour protéger le toono, toile plastique, parapluie, hublot, ...?</p><p>Le plancher : Base en palette (récup) et plancher en panneau d'osb</p><p>nb de panneau : ... / Prix : ... / Plus quelques vis</p><p>Cordes : 22m 8.-, 2x 20m 19.-, 16m 16.-, 2x 20m 15.80, 20m 7.90 / Fils à coudre : 4.95 / Fôret de 26mm : 8.90 /</p><p>Papier de verre : 7.- / Ruban de béton : 7.65 / Plastique recyclé pour le mur : 2x 20m/2 33.80 /</p><p>Infos divers, notes :</p><p>Perche coupées pour le treillis et le toit, du noisetier en majorité, coupé en lune descendante et décroissante. Perches recoupées à la bonne taille puis écorcées le plus rapidement\n            possible, elle sont ensuite attachées en botte de 10 et séche tranquilement à l'abris. (Attention faut pas faire ça... de la moisissure est apparue sur des perches situées au centre de la\n            botte! -> ponçage)</p><p>Idée protéger le bois avec un vernis huile lin cire thérébentine</p><p>1er montage efféctué, la yourte est en place !, 1er couche de tissus, 2e couche de couvertures, 3e couche bache plastique bleu cousue, 4e couche coton blanc pour faire joli...! Le treills\n            est posé directement sur le sol (terre tassée et graviés), apres trois jours de pluie on voit l'eau qui serpente sous les graviers a l'intérieur depuis l'amont... -> rigole creusée\n            autour de la yourte en amont, juste lissé le fond de la rigole c'est une terre argileuse, l'eau s'écoule bien le long de la tranchée.</p><p>Pour l'instant la couche anti pluie a l'air de bien tenir, pas d'infiltration dans la toile !</p><p>Besoins actuels, recherche :</p><p>- Toile transparente pour le chapeau et les fenêtres</p><p>- De la toile étanche pour l'extérieur de la yourte, (toile de protection solaire, toile marine) -> contact fabriquant de store, sellerie, bateau...</p><p>J'ai utilisé un article de passerelle eco  et le site simplydifferent.org</p><p>Voir l'article construire une yourte pour trouver tout les\n    documents.</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "es": "<p><strong>[Versión en Español]</strong> Autoconstrucción de una Yurt con Madera Local (Suiza): Planos de ingeniería completos, tablas de cálculo estructural y guías prácticas paso a paso para la autoconstrucción de viviendas ecológicas y alternativas.</p><p>70 perches de 185cm, 2 à 3 cm de diamétre, trou de 6mm, corde 4mm (synthétique)</p><p>A faire : protéger le bas des perches idée scotch de carrosier</p><p>36 perches de 2,27m - 2,5 à 5 cm de diam, 2 trous à 4 et 6 cm du gros bout</p><p>Construction du tonno : heptagone - Diam ext 80 cm</p><p>Fait avec des chutes de découpe de manche de pioche en frênes, les morceau ne sont pas qualibré mais font tous la même longueur, découpe des angles, premier assemblage avec des clous et\n            rajout de plaques de serrage de chaque coté (latte d'un vieux lit en bois)</p><p>Trous pour les perches forêt 26mm , 6 trous par coté sauf le coté porte avec 4 trous</p><p>La porte : monter le cadre (bois ok) , trous pour les perches du toit -> la porte : trouver le bois!</p><p>Cadre de porte fait avec un vieux sommier et autre morceau qui trainait 120/150 -> charnière et porte à faire, porte trouvée et posée (grande fenêtre récup)</p><p>La toile : Trouver la toile, une bonne machine -> coudre!</p><p>Toile ext : Couture du mur toile coton ext ok, toit cousu plusieurs draps récupéré - un carré de 6m env -> découpe du rond central du toono, (découpe d'un bord au\n            centre pour recouvrir ?). découpe du rond externe, min 5.48m + 20cm pour recouvrir le mur. Pour le mur le tissu est en trois partie - Raccords en velcro -> intégration d'une fenètre en\n            plastique souple, possibilité d'ouvrir le mur pour aérer. Pour le moment je laisse le toit le le mur séparer mais je vais ptetre coudre le tout ensemble... Ajout d'une jupe sur le bas du\n            mur -> trouver le tissu pour la jupe.</p><p>Toile étanche : Pour le moment bache classique bleu (récup) -> découpe centre interne externe, (découpe de recouvrement)</p><p>2e couche : Toile en couverture de l'armée suisse (isolation été)</p><p>1e couche : Toile intérieure, coton léger</p><p>Ajout par la suite d'isolation entre la 1er et la 2e couche</p><p>Le chapeau : Toile, toile transparente, corde -> pour protéger le toono, toile plastique, parapluie, hublot, ...?</p><p>Le plancher : Base en palette (récup) et plancher en panneau d'osb</p><p>nb de panneau : ... / Prix : ... / Plus quelques vis</p><p>Cordes : 22m 8.-, 2x 20m 19.-, 16m 16.-, 2x 20m 15.80, 20m 7.90 / Fils à coudre : 4.95 / Fôret de 26mm : 8.90 /</p><p>Papier de verre : 7.- / Ruban de béton : 7.65 / Plastique recyclé pour le mur : 2x 20m/2 33.80 /</p><p>Infos divers, notes :</p><p>Perche coupées pour le treillis et le toit, du noisetier en majorité, coupé en lune descendante et décroissante. Perches recoupées à la bonne taille puis écorcées le plus rapidement\n            possible, elle sont ensuite attachées en botte de 10 et séche tranquilement à l'abris. (Attention faut pas faire ça... de la moisissure est apparue sur des perches situées au centre de la\n            botte! -> ponçage)</p><p>Idée protéger le bois avec un vernis huile lin cire thérébentine</p><p>1er montage efféctué, la yourte est en place !, 1er couche de tissus, 2e couche de couvertures, 3e couche bache plastique bleu cousue, 4e couche coton blanc pour faire joli...! Le treills\n            est posé directement sur le sol (terre tassée et graviés), apres trois jours de pluie on voit l'eau qui serpente sous les graviers a l'intérieur depuis l'amont... -> rigole creusée\n            autour de la yourte en amont, juste lissé le fond de la rigole c'est une terre argileuse, l'eau s'écoule bien le long de la tranchée.</p><p>Pour l'instant la couche anti pluie a l'air de bien tenir, pas d'infiltration dans la toile !</p><p>Besoins actuels, recherche :</p><p>- Toile transparente pour le chapeau et les fenêtres</p><p>- De la toile étanche pour l'extérieur de la yourte, (toile de protection solaire, toile marine) -> contact fabriquant de store, sellerie, bateau...</p><p>J'ai utilisé un article de passerelle eco  et le site simplydifferent.org</p><p>Voir l'article construire une yourte pour trouver tout les\n    documents.</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>"
        },
        "downloads": []
    },
    {
        "id": "la-goutte-d-eau-cette-eygun-pyrénées-atlantiques",
        "category": "en-vrac",
        "date": "2014/08/26",
        "readingTime": 4,
        "image": "",
        "tags": [],
        "title": {
            "fr": "La goutte d'eau Cette-Eygun - Pyrénées-Atlantiques",
            "en": "La Goutte d'Eau Eco-Community (Pyrénées-Atlantiques)",
            "es": "Ecolugar La Goutte d'Eau (Pirineos Atlánticos)"
        },
        "desc": {
            "fr": "Une Jolie Petite Gare... / Besoin d'un coup de main ! Petite gare perdue dans la Vallée d'Aspe, Pyrénées-Atlantiques. Elle était desservie par la ligne Pau-Oloron-Canfranc (voir sujet sur la gare abandonnée de Canfranc)....",
            "en": "Exploring self-reliance, practical degrowth, infokiosk zines, decentralized networks, and grassroots socio-ecological mutual aid.",
            "es": "Explorando la autosuficiencia, el decrecimiento práctico, folletos de infokiosco, redes descentralizadas y apoyo mutuo socioecológico de base."
        },
        "content": {
            "fr": "<p>Une Jolie Petite Gare... / Besoin d'un coup de main !</p><p>Petite gare perdue dans la Vallée d'Aspe, Pyrénées-Atlantiques. Elle était desservie par la ligne Pau-Oloron-Canfranc (voir sujet sur la gare abandonnée de Canfranc). La ligne ferme en 1970\n        suite à un accident sur un pont qui ne sera jamais réparé, et les autobus prennent le relais.\n        \n        A la fin des années 80, le projet d'un tunnel routier transpyrénéen rencontre beaucoup d'opposants. Eric Pététin figure emblématique du mouvement crée l'association communautaire \"La Goutte\n        d'Eau\".\n        \n        La gare de Lescun Cette-Eygun est utilisée comme qg, stratégiquement placée à quelques kilomètres du futur chantier du tunnel du Somport... Les années passent, manifs, expulsions,\n        expropriations, arrestations...\n        \n        Le bilan en 2005 est sombre pour les Aspaches: la tunnel roule depuis longtemps, et RFF (propriétaire et gestionnaire du réseau ferroviaire français), expulse les derniers irréductibles d'une\n        façon peu catholique...\n        \n        Petite gare abandonnée, quel sera son sort? et aujourd'hui la goutte est là en travaux mais la.nous avons la jouissance des lieux en échange de travaux\n        et on aurait besoin d'un coup de main.</p><p>La goutte d'eau 64490 cette-eygun TEL 09/51/86/23/60 MAIL : lesamisdelagoutte at hotmail.fr</p><p>https://www.facebook.com/gardaremlagoutte</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "en": "<p><strong>[English Version]</strong> La Goutte d'Eau Eco-Community (Pyrénées-Atlantiques): Exploring self-reliance, practical degrowth, infokiosk zines, decentralized networks, and grassroots socio-ecological mutual aid.</p><p>Une Jolie Petite Gare... / Besoin d'un coup de main !</p><p>Petite gare perdue dans la Vallée d'Aspe, Pyrénées-Atlantiques. Elle était desservie par la ligne Pau-Oloron-Canfranc (voir sujet sur la gare abandonnée de Canfranc). La ligne ferme en 1970\n        suite à un accident sur un pont qui ne sera jamais réparé, et les autobus prennent le relais.\n        \n        A la fin des années 80, le projet d'un tunnel routier transpyrénéen rencontre beaucoup d'opposants. Eric Pététin figure emblématique du mouvement crée l'association communautaire \"La Goutte\n        d'Eau\".\n        \n        La gare de Lescun Cette-Eygun est utilisée comme qg, stratégiquement placée à quelques kilomètres du futur chantier du tunnel du Somport... Les années passent, manifs, expulsions,\n        expropriations, arrestations...\n        \n        Le bilan en 2005 est sombre pour les Aspaches: la tunnel roule depuis longtemps, et RFF (propriétaire et gestionnaire du réseau ferroviaire français), expulse les derniers irréductibles d'une\n        façon peu catholique...\n        \n        Petite gare abandonnée, quel sera son sort? et aujourd'hui la goutte est là en travaux mais la.nous avons la jouissance des lieux en échange de travaux\n        et on aurait besoin d'un coup de main.</p><p>La goutte d'eau 64490 cette-eygun TEL 09/51/86/23/60 MAIL : lesamisdelagoutte at hotmail.fr</p><p>https://www.facebook.com/gardaremlagoutte</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "es": "<p><strong>[Versión en Español]</strong> Ecolugar La Goutte d'Eau (Pirineos Atlánticos): Explorando la autosuficiencia, el decrecimiento práctico, folletos de infokiosco, redes descentralizadas y apoyo mutuo socioecológico de base.</p><p>Une Jolie Petite Gare... / Besoin d'un coup de main !</p><p>Petite gare perdue dans la Vallée d'Aspe, Pyrénées-Atlantiques. Elle était desservie par la ligne Pau-Oloron-Canfranc (voir sujet sur la gare abandonnée de Canfranc). La ligne ferme en 1970\n        suite à un accident sur un pont qui ne sera jamais réparé, et les autobus prennent le relais.\n        \n        A la fin des années 80, le projet d'un tunnel routier transpyrénéen rencontre beaucoup d'opposants. Eric Pététin figure emblématique du mouvement crée l'association communautaire \"La Goutte\n        d'Eau\".\n        \n        La gare de Lescun Cette-Eygun est utilisée comme qg, stratégiquement placée à quelques kilomètres du futur chantier du tunnel du Somport... Les années passent, manifs, expulsions,\n        expropriations, arrestations...\n        \n        Le bilan en 2005 est sombre pour les Aspaches: la tunnel roule depuis longtemps, et RFF (propriétaire et gestionnaire du réseau ferroviaire français), expulse les derniers irréductibles d'une\n        façon peu catholique...\n        \n        Petite gare abandonnée, quel sera son sort? et aujourd'hui la goutte est là en travaux mais la.nous avons la jouissance des lieux en échange de travaux\n        et on aurait besoin d'un coup de main.</p><p>La goutte d'eau 64490 cette-eygun TEL 09/51/86/23/60 MAIL : lesamisdelagoutte at hotmail.fr</p><p>https://www.facebook.com/gardaremlagoutte</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>"
        },
        "downloads": []
    },
    {
        "id": "ermitage-malin-roumanie",
        "category": "habitat",
        "date": "2014/08/26",
        "readingTime": 6,
        "image": "",
        "tags": [],
        "title": {
            "fr": "Ermitage malin (roumanie)",
            "en": "The Smart Hermitage Autonomous Refuge (Romania)",
            "es": "El Refugio Autónomo Ermitage Malin (Rumanía)"
        },
        "desc": {
            "fr": "présentation de l'ermitage de Malin (Roumanie) par philippe coupé\n    « L’ermitage de Malin » est une petite ferme de 8 ha située au creux de collines, en pleine nature, entre forêt et pâturage, dans le centre-nord de la...",
            "en": "Complete engineering guidelines, structural calculation tables, blueprints, and practical instructions for natural DIY counter-culture habitats.",
            "es": "Planos de ingeniería completos, tablas de cálculo estructural y guías prácticas paso a paso para la autoconstrucción de viviendas ecológicas y alternativas."
        },
        "content": {
            "fr": "<p>présentation de l'ermitage de Malin (Roumanie) par philippe coupé\n    « L’ermitage de Malin » est une petite ferme de 8 ha située au creux de collines, en pleine nature, entre forêt et pâturage, dans le centre-nord de la Roumanie, au pied des Carpathes\n    \n    Philippe est un Belge de 52 ans et Adriana, native du coin. Depuis 3 ans, nous restaurons les bâtiments, avons des chambres d’hôtes (capacité : 15 places), avec salles de bains et groupe\n    sanitaire, et une cuisine /salle à manger donnant sur une terrasse capable de recevoir une vingtaine de personnes.\n    L’ensemble est totalement isolé : pas d’accès en voiture, il faut faire 15 à 20 min de marche pour y arriver, (ou en charrette) et pas de réseau d’électricité, seuls 2 groupes électrogènes en\n    attendant l’énergie solaire.\n    \n    Nous avons aussi 7 ânes avec lesquels nous organisons, depuis 2 ans, des randonnées de 5 jours dans les environs avec logement chez l’habitant dans des petits villages sans touriste. Familles\n    belges et françaises viennent découvrir un autre monde aux traditions rurales ancestrales.\n    \n    A la ferme, potager bio (en carré et en buttes) , apiculture, verger, étang, le tout dans un ensemble très riche en écosystèmes (forêt mixte, clairières, lisières, pâturage-prairie, verger à une\n    altitude de 330 m).\n    \n    Notre projet : un écohameau visant à l’autonomie. Pourquoi « écohameau » ? Nous cherchons en effet un ou des partenaires. Une maison reste à restaurer et une immense grange possède un étage\n    inoccupé. Et les tâches sont trop conséquentes pour un couple.\n    \n    Cet été, les activités avec le public commencent : construction d’un tipi, four solaire, fabrication du puits a balancier, machine à laver à pédales ; etc\n    \n    Autre perspective : Philippe a prononcé ses vœux auprès d’un maître bouddhiste zen L’ermitage veut accueillir des groupes à la recherche d’un endroit paisible propice au recueillement et à la\n    méditation. La terrasse permet déjà la pratique, en endroit couvert, de séances collectives de méditation. Et les opportunités de se retirer individuellement pour lire ou méditer sont\n    légion.\n    \n    Philippe est aussi guide nature et souhaiterait développer une structure du style « gîte Panda » (soutenu par le WWF) qui accueille des visiteurs dans des conditions de confort satisfaisantes,\n    dans un cadre naturel privilégié et avec un accompagnement pédagogique de découverte de l’environnement : guide de la faune et flore locales, potager, verger, mare et rucher didactiques,\n    bibliothèque à disposition, jumelles, etc.\n    \n    Nous voudrions aussi organiser prochainement un stage de formation à la permaculture, le premier en Roumanie:\n    \n    Nous vous attendons\n    notre site: www.ermitajmalin.ro</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "en": "<p><strong>[English Version]</strong> The Smart Hermitage Autonomous Refuge (Romania): Complete engineering guidelines, structural calculation tables, blueprints, and practical instructions for natural DIY counter-culture habitats.</p><p>présentation de l'ermitage de Malin (Roumanie) par philippe coupé\n    « L’ermitage de Malin » est une petite ferme de 8 ha située au creux de collines, en pleine nature, entre forêt et pâturage, dans le centre-nord de la Roumanie, au pied des Carpathes\n    \n    Philippe est un Belge de 52 ans et Adriana, native du coin. Depuis 3 ans, nous restaurons les bâtiments, avons des chambres d’hôtes (capacité : 15 places), avec salles de bains et groupe\n    sanitaire, et une cuisine /salle à manger donnant sur une terrasse capable de recevoir une vingtaine de personnes.\n    L’ensemble est totalement isolé : pas d’accès en voiture, il faut faire 15 à 20 min de marche pour y arriver, (ou en charrette) et pas de réseau d’électricité, seuls 2 groupes électrogènes en\n    attendant l’énergie solaire.\n    \n    Nous avons aussi 7 ânes avec lesquels nous organisons, depuis 2 ans, des randonnées de 5 jours dans les environs avec logement chez l’habitant dans des petits villages sans touriste. Familles\n    belges et françaises viennent découvrir un autre monde aux traditions rurales ancestrales.\n    \n    A la ferme, potager bio (en carré et en buttes) , apiculture, verger, étang, le tout dans un ensemble très riche en écosystèmes (forêt mixte, clairières, lisières, pâturage-prairie, verger à une\n    altitude de 330 m).\n    \n    Notre projet : un écohameau visant à l’autonomie. Pourquoi « écohameau » ? Nous cherchons en effet un ou des partenaires. Une maison reste à restaurer et une immense grange possède un étage\n    inoccupé. Et les tâches sont trop conséquentes pour un couple.\n    \n    Cet été, les activités avec le public commencent : construction d’un tipi, four solaire, fabrication du puits a balancier, machine à laver à pédales ; etc\n    \n    Autre perspective : Philippe a prononcé ses vœux auprès d’un maître bouddhiste zen L’ermitage veut accueillir des groupes à la recherche d’un endroit paisible propice au recueillement et à la\n    méditation. La terrasse permet déjà la pratique, en endroit couvert, de séances collectives de méditation. Et les opportunités de se retirer individuellement pour lire ou méditer sont\n    légion.\n    \n    Philippe est aussi guide nature et souhaiterait développer une structure du style « gîte Panda » (soutenu par le WWF) qui accueille des visiteurs dans des conditions de confort satisfaisantes,\n    dans un cadre naturel privilégié et avec un accompagnement pédagogique de découverte de l’environnement : guide de la faune et flore locales, potager, verger, mare et rucher didactiques,\n    bibliothèque à disposition, jumelles, etc.\n    \n    Nous voudrions aussi organiser prochainement un stage de formation à la permaculture, le premier en Roumanie:\n    \n    Nous vous attendons\n    notre site: www.ermitajmalin.ro</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "es": "<p><strong>[Versión en Español]</strong> El Refugio Autónomo Ermitage Malin (Rumanía): Planos de ingeniería completos, tablas de cálculo estructural y guías prácticas paso a paso para la autoconstrucción de viviendas ecológicas y alternativas.</p><p>présentation de l'ermitage de Malin (Roumanie) par philippe coupé\n    « L’ermitage de Malin » est une petite ferme de 8 ha située au creux de collines, en pleine nature, entre forêt et pâturage, dans le centre-nord de la Roumanie, au pied des Carpathes\n    \n    Philippe est un Belge de 52 ans et Adriana, native du coin. Depuis 3 ans, nous restaurons les bâtiments, avons des chambres d’hôtes (capacité : 15 places), avec salles de bains et groupe\n    sanitaire, et une cuisine /salle à manger donnant sur une terrasse capable de recevoir une vingtaine de personnes.\n    L’ensemble est totalement isolé : pas d’accès en voiture, il faut faire 15 à 20 min de marche pour y arriver, (ou en charrette) et pas de réseau d’électricité, seuls 2 groupes électrogènes en\n    attendant l’énergie solaire.\n    \n    Nous avons aussi 7 ânes avec lesquels nous organisons, depuis 2 ans, des randonnées de 5 jours dans les environs avec logement chez l’habitant dans des petits villages sans touriste. Familles\n    belges et françaises viennent découvrir un autre monde aux traditions rurales ancestrales.\n    \n    A la ferme, potager bio (en carré et en buttes) , apiculture, verger, étang, le tout dans un ensemble très riche en écosystèmes (forêt mixte, clairières, lisières, pâturage-prairie, verger à une\n    altitude de 330 m).\n    \n    Notre projet : un écohameau visant à l’autonomie. Pourquoi « écohameau » ? Nous cherchons en effet un ou des partenaires. Une maison reste à restaurer et une immense grange possède un étage\n    inoccupé. Et les tâches sont trop conséquentes pour un couple.\n    \n    Cet été, les activités avec le public commencent : construction d’un tipi, four solaire, fabrication du puits a balancier, machine à laver à pédales ; etc\n    \n    Autre perspective : Philippe a prononcé ses vœux auprès d’un maître bouddhiste zen L’ermitage veut accueillir des groupes à la recherche d’un endroit paisible propice au recueillement et à la\n    méditation. La terrasse permet déjà la pratique, en endroit couvert, de séances collectives de méditation. Et les opportunités de se retirer individuellement pour lire ou méditer sont\n    légion.\n    \n    Philippe est aussi guide nature et souhaiterait développer une structure du style « gîte Panda » (soutenu par le WWF) qui accueille des visiteurs dans des conditions de confort satisfaisantes,\n    dans un cadre naturel privilégié et avec un accompagnement pédagogique de découverte de l’environnement : guide de la faune et flore locales, potager, verger, mare et rucher didactiques,\n    bibliothèque à disposition, jumelles, etc.\n    \n    Nous voudrions aussi organiser prochainement un stage de formation à la permaculture, le premier en Roumanie:\n    \n    Nous vous attendons\n    notre site: www.ermitajmalin.ro</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>"
        },
        "downloads": []
    },
    {
        "id": "lieu-de-vie-limousin",
        "category": "en-vrac",
        "date": "2014/08/26",
        "readingTime": 4,
        "image": "",
        "tags": [],
        "title": {
            "fr": "Lieu de vie limousin",
            "en": "Limousin Grassroots Autonomous Living Space",
            "es": "Espacio de Vida y Apoyo Mutuo de Limousin"
        },
        "desc": {
            "fr": "Bonjour, j'habite un lieu de vie superbe en limousin, et désire que cet endroit soir le point de chute de toute personne désirant trouver un refuge..\n    Mon port : 0673806961\n    Mon adresse mail : [email protected]\n   ...",
            "en": "Exploring self-reliance, practical degrowth, infokiosk zines, decentralized networks, and grassroots socio-ecological mutual aid.",
            "es": "Explorando la autosuficiencia, el decrecimiento práctico, folletos de infokiosco, redes descentralizadas y apoyo mutuo socioecológico de base."
        },
        "content": {
            "fr": "<p>Bonjour, j'habite un lieu de vie superbe en limousin, et désire que cet endroit soir le point de chute de toute personne désirant trouver un refuge..\n    Mon port : 0673806961\n    Mon adresse mail : [email protected]\n    Possibilité d'accueil en caravane et tente bien sur\n    Tout projet en agriculture biologique est le bienvenue</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "en": "<p><strong>[English Version]</strong> Limousin Grassroots Autonomous Living Space: Exploring self-reliance, practical degrowth, infokiosk zines, decentralized networks, and grassroots socio-ecological mutual aid.</p><p>Bonjour, j'habite un lieu de vie superbe en limousin, et désire que cet endroit soir le point de chute de toute personne désirant trouver un refuge..\n    Mon port : 0673806961\n    Mon adresse mail : [email protected]\n    Possibilité d'accueil en caravane et tente bien sur\n    Tout projet en agriculture biologique est le bienvenue</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "es": "<p><strong>[Versión en Español]</strong> Espacio de Vida y Apoyo Mutuo de Limousin: Explorando la autosuficiencia, el decrecimiento práctico, folletos de infokiosco, redes descentralizadas y apoyo mutuo socioecológico de base.</p><p>Bonjour, j'habite un lieu de vie superbe en limousin, et désire que cet endroit soir le point de chute de toute personne désirant trouver un refuge..\n    Mon port : 0673806961\n    Mon adresse mail : [email protected]\n    Possibilité d'accueil en caravane et tente bien sur\n    Tout projet en agriculture biologique est le bienvenue</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>"
        },
        "downloads": []
    },
    {
        "id": "ecolieu-des-crozes-hauts-france",
        "category": "habitat",
        "date": "2014/08/26",
        "readingTime": 4,
        "image": "",
        "tags": [],
        "title": {
            "fr": "Ecolieu des Crozes-hauts (France)",
            "en": "Les Crozes-Hauts Self-Managed Eco-Village (France)",
            "es": "Eco-aldea Autogestionada Les Crozes-Hauts (Francia)"
        },
        "desc": {
            "fr": "Le but de l'association \"écolieu des crozes-hauts\" étant d'être une vitrine d'habitats auto-construits, d'autonomie alimentaire et énergétique, ainsi qu'un lieu d'échanges\n    de savoirs et de savoir faire, nous lançons ...",
            "en": "Complete engineering guidelines, structural calculation tables, blueprints, and practical instructions for natural DIY counter-culture habitats.",
            "es": "Planos de ingeniería completos, tablas de cálculo estructural y guías prácticas paso a paso para la autoconstrucción de viviendas ecológicas y alternativas."
        },
        "content": {
            "fr": "<p>Le but de l'association \"écolieu des crozes-hauts\" étant d'être une vitrine d'habitats auto-construits, d'autonomie alimentaire et énergétique, ainsi qu'un lieu d'échanges\n    de savoirs et de savoir faire, nous lançons un appel à toutes celles et ceux qui souhaitent vivre en pleine nature dans un habitat auto-construit respectueux de son environnement.\n    Nous sommes dans l'Aveyron, sur un terrain arboré avec une source où nous avons effectué certains aménagements (TS, jardin, poulailler, yourte commune...). Le but est de créer un village d'une\n    dizaine ou quinzaine d'âmes où seraient proposés des animations, ateliers, démonstrations, principalement dans le domaine de l'autonomie (construction, alimentation, énergies), du bien être, de\n    l'Art, de l'éducation etc...\n    \n    Nous recherchons des personnes désireuses de vivre dans un coin de nature dans leur propre habitat (maison en paille, en bois, yourte, zome...), tout en étant acteur de la dynamique de\n    l'association.(Aide ponctuelle également bienvenue!!)\n    Pour plus d'info contactez Delphine ou Yannick au 06.28.56.19.67 ou 06.13.44.78.38, ou par mail à: [email protected] , vous pouvez également visiter notre page Facebook :\n    www.facebook.com/ecolieu.des.crozes.hauts.</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "en": "<p><strong>[English Version]</strong> Les Crozes-Hauts Self-Managed Eco-Village (France): Complete engineering guidelines, structural calculation tables, blueprints, and practical instructions for natural DIY counter-culture habitats.</p><p>Le but de l'association \"écolieu des crozes-hauts\" étant d'être une vitrine d'habitats auto-construits, d'autonomie alimentaire et énergétique, ainsi qu'un lieu d'échanges\n    de savoirs et de savoir faire, nous lançons un appel à toutes celles et ceux qui souhaitent vivre en pleine nature dans un habitat auto-construit respectueux de son environnement.\n    Nous sommes dans l'Aveyron, sur un terrain arboré avec une source où nous avons effectué certains aménagements (TS, jardin, poulailler, yourte commune...). Le but est de créer un village d'une\n    dizaine ou quinzaine d'âmes où seraient proposés des animations, ateliers, démonstrations, principalement dans le domaine de l'autonomie (construction, alimentation, énergies), du bien être, de\n    l'Art, de l'éducation etc...\n    \n    Nous recherchons des personnes désireuses de vivre dans un coin de nature dans leur propre habitat (maison en paille, en bois, yourte, zome...), tout en étant acteur de la dynamique de\n    l'association.(Aide ponctuelle également bienvenue!!)\n    Pour plus d'info contactez Delphine ou Yannick au 06.28.56.19.67 ou 06.13.44.78.38, ou par mail à: [email protected] , vous pouvez également visiter notre page Facebook :\n    www.facebook.com/ecolieu.des.crozes.hauts.</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "es": "<p><strong>[Versión en Español]</strong> Eco-aldea Autogestionada Les Crozes-Hauts (Francia): Planos de ingeniería completos, tablas de cálculo estructural y guías prácticas paso a paso para la autoconstrucción de viviendas ecológicas y alternativas.</p><p>Le but de l'association \"écolieu des crozes-hauts\" étant d'être une vitrine d'habitats auto-construits, d'autonomie alimentaire et énergétique, ainsi qu'un lieu d'échanges\n    de savoirs et de savoir faire, nous lançons un appel à toutes celles et ceux qui souhaitent vivre en pleine nature dans un habitat auto-construit respectueux de son environnement.\n    Nous sommes dans l'Aveyron, sur un terrain arboré avec une source où nous avons effectué certains aménagements (TS, jardin, poulailler, yourte commune...). Le but est de créer un village d'une\n    dizaine ou quinzaine d'âmes où seraient proposés des animations, ateliers, démonstrations, principalement dans le domaine de l'autonomie (construction, alimentation, énergies), du bien être, de\n    l'Art, de l'éducation etc...\n    \n    Nous recherchons des personnes désireuses de vivre dans un coin de nature dans leur propre habitat (maison en paille, en bois, yourte, zome...), tout en étant acteur de la dynamique de\n    l'association.(Aide ponctuelle également bienvenue!!)\n    Pour plus d'info contactez Delphine ou Yannick au 06.28.56.19.67 ou 06.13.44.78.38, ou par mail à: [email protected] , vous pouvez également visiter notre page Facebook :\n    www.facebook.com/ecolieu.des.crozes.hauts.</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>"
        },
        "downloads": []
    },
    {
        "id": "faites-tout-vous-même-savoir-revivre-revivre-à-la-campagne",
        "category": "habitat",
        "date": "2014/08/25",
        "readingTime": 4,
        "image": "https://image.jimcdn.com/app/cms/image/transf/dimension=75x10000:format=gif/path/s6b5d09a755d07b57/image/i7e1655fb68967363/version/1408966118/image.gif",
        "tags": [],
        "title": {
            "fr": "Faites tout vous même / Savoir revivre / Revivre à la campagne",
            "en": "Do It Yourself Master Guide / Reviving in the Countryside",
            "es": "Hazlo Todo Tú Mismo / Guía para Renacer en el Campo"
        },
        "desc": {
            "fr": "Liens internes :\n    - Pratique - Médiathèque - Pratique - Comment construire un dôme géodésique....",
            "en": "Complete engineering guidelines, structural calculation tables, blueprints, and practical instructions for natural DIY counter-culture habitats.",
            "es": "Planos de ingeniería completos, tablas de cálculo estructural y guías prácticas paso a paso para la autoconstrucción de viviendas ecológicas y alternativas."
        },
        "content": {
            "fr": "<p>Liens internes :\n    - Pratique - Médiathèque</p><p>- Pratique - Comment construire un dôme géodésique.</p><p>- Pratique - Habitat d'urgences, infos, plans</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "en": "<p><strong>[English Version]</strong> Do It Yourself Master Guide / Reviving in the Countryside: Complete engineering guidelines, structural calculation tables, blueprints, and practical instructions for natural DIY counter-culture habitats.</p><p>Liens internes :\n    - Pratique - Médiathèque</p><p>- Pratique - Comment construire un dôme géodésique.</p><p>- Pratique - Habitat d'urgences, infos, plans</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "es": "<p><strong>[Versión en Español]</strong> Hazlo Todo Tú Mismo / Guía para Renacer en el Campo: Planos de ingeniería completos, tablas de cálculo estructural y guías prácticas paso a paso para la autoconstrucción de viviendas ecológicas y alternativas.</p><p>Liens internes :\n    - Pratique - Médiathèque</p><p>- Pratique - Comment construire un dôme géodésique.</p><p>- Pratique - Habitat d'urgences, infos, plans</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>"
        },
        "downloads": [
            {
                "name": "#",
                "url": "http://www.mediafire.com/view/?ww39se1e3h4hvrx"
            },
            {
                "name": "#",
                "url": "http://www.mediafire.com/view/?116l11yv7cocc84"
            },
            {
                "name": "#",
                "url": "http://www.mediafire.com/view/?zh3fynirwvojgh3"
            }
        ]
    },
    {
        "id": "recettes-végétalienne-guide-végétarien-et-végétalien-alimentation-vivante",
        "category": "production",
        "date": "2014/08/25",
        "readingTime": 4,
        "image": "https://image.jimcdn.com/app/cms/image/transf/none/path/s6b5d09a755d07b57/image/i55f88915adb01bbf/version/1408964587/image.jpg",
        "tags": [],
        "title": {
            "fr": "Recettes végétalienne, Guide végétarien et végétalien, Alimentation vivante",
            "en": "Vegan Mastery, Raw Nutrition & Living Foods Guide",
            "es": "Guía de Recetas Veganas, Alimentación Viva y Fermentación"
        },
        "desc": {
            "fr": "- 278 recette végétalienne  48p/592k   - / Télécharger / (Via: \n    Eco-bio.info) \n    - Guide végétarien et végétalien : Pourquoi, comment, nutrition... - (#)\n    - L'alimentation vivante : Manuel : Crudivorisme : Infor...",
            "en": "Mastering decentralized culinary self-reliance: artisan all-grain beer & alcohol brewing, open-hearth wild sourdough bread, and spirulina raceway basins.",
            "es": "Autonomía culinaria descentralizada: elaboración de cerveza artesanal todo-grano, pan rústico con masa madre salvaje y cultivo casero de espirulina alcalina."
        },
        "content": {
            "fr": "<p>- 278 recette végétalienne  48p/592k   - / Télécharger / (Via: \n    Eco-bio.info) \n    - Guide végétarien et végétalien : Pourquoi, comment, nutrition... - (#)\n    - L'alimentation vivante : Manuel : Crudivorisme : Information, recettes. - (#)</p><p>Liens internes:\n    -  Pratique - Comment cultiver, produire la spiruline\n    -  Pratique - Comment fabriquer son pain maison, recettes\n    -  Pratique - Comment faire de la bière, malter l'orge...\n    \n    Liens externes :\n    - Le Végétarisme / Le végétalisme\n    / Le crudivorisme / Le veganisme / (Articles\n    Wikipédia)</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "en": "<p><strong>[English Version]</strong> Vegan Mastery, Raw Nutrition & Living Foods Guide: Mastering decentralized culinary self-reliance: artisan all-grain beer & alcohol brewing, open-hearth wild sourdough bread, and spirulina raceway basins.</p><p>- 278 recette végétalienne  48p/592k   - / Télécharger / (Via: \n    Eco-bio.info) \n    - Guide végétarien et végétalien : Pourquoi, comment, nutrition... - (#)\n    - L'alimentation vivante : Manuel : Crudivorisme : Information, recettes. - (#)</p><p>Liens internes:\n    -  Pratique - Comment cultiver, produire la spiruline\n    -  Pratique - Comment fabriquer son pain maison, recettes\n    -  Pratique - Comment faire de la bière, malter l'orge...\n    \n    Liens externes :\n    - Le Végétarisme / Le végétalisme\n    / Le crudivorisme / Le veganisme / (Articles\n    Wikipédia)</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "es": "<p><strong>[Versión en Español]</strong> Guía de Recetas Veganas, Alimentación Viva y Fermentación: Autonomía culinaria descentralizada: elaboración de cerveza artesanal todo-grano, pan rústico con masa madre salvaje y cultivo casero de espirulina alcalina.</p><p>- 278 recette végétalienne  48p/592k   - / Télécharger / (Via: \n    Eco-bio.info) \n    - Guide végétarien et végétalien : Pourquoi, comment, nutrition... - (#)\n    - L'alimentation vivante : Manuel : Crudivorisme : Information, recettes. - (#)</p><p>Liens internes:\n    -  Pratique - Comment cultiver, produire la spiruline\n    -  Pratique - Comment fabriquer son pain maison, recettes\n    -  Pratique - Comment faire de la bière, malter l'orge...\n    \n    Liens externes :\n    - Le Végétarisme / Le végétalisme\n    / Le crudivorisme / Le veganisme / (Articles\n    Wikipédia)</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>"
        },
        "downloads": [
            {
                "name": "#",
                "url": "http://avis.free.fr/brochure_2009.pdf"
            },
            {
                "name": "#",
                "url": "http://www.eco-bio.info/alimentationvivante.pdf"
            }
        ]
    },
    {
        "id": "habitats-d-urgence-autoconstruction-bioclimatique",
        "category": "habitat",
        "date": "2014/08/14",
        "readingTime": 4,
        "image": "https://image.jimcdn.com/app/cms/image/transf/dimension=150x1024:format=jpg/path/s6b5d09a755d07b57/image/ic24a8b23cb4fbc0d/version/1408024264/image.jpg",
        "tags": [],
        "title": {
            "fr": "Habitats d'urgence, autoconstruction bioclimatique",
            "en": "Emergency Shelters & Bioclimatic Low-Tech DIY Housing",
            "es": "Albergues de Emergencia y Autoconstrucción Bioclimática"
        },
        "desc": {
            "fr": "Habitat d'urgence.6pdfs.05.2012.zip /  35,9  Mo (#) Liens uniques: (#D) :...",
            "en": "Complete engineering guidelines, structural calculation tables, blueprints, and practical instructions for natural DIY counter-culture habitats.",
            "es": "Planos de ingeniería completos, tablas de cálculo estructural y guías prácticas paso a paso para la autoconstrucción de viviendas ecológicas y alternativas."
        },
        "content": {
            "fr": "<p>Habitat d'urgence.6pdfs.05.2012.zip /  35,9  Mo (#)</p><p>Liens uniques: (#D) :</p><p>- habitat.urgence.14m2.100euros.-.5p.pdf : Habitat d'urgence autoconstruit à moins de 100 euro\n    - maison.autonome.refuge-orphelinat.100.m2.-.30p.pdf :\n    - maison.bioclimatique.autoconstruite.bio.materiaux.20m2.1300euros.-.34p.pdf : Maison bio-climatique autoconstruite en bio-matériaux du lieu et de récupération... 2om2 /\n    1000euro</p><p>- casa.bioclimatica.autocontruite.20m2.-.32p.pdf : Trad italien</p><p>-  habitat.d.urgence.autonome.33m2.380euros.-.21p.pdf : Comment autoconstruire un maison écologie démontable auto-organisé de 33m2 / 400euro... fiche technique ,\n    explication, plan, tuto, anarchie pratique, écologie profonde...\n    - habitat.d.urgence.autonome.33m2.v.long.-.ed.aa.-.108p.pdf</p><p>Liens externes :\n    - EcologieSociale : EcologieSociale 2 : Divers infos et brochures . (Source habitat urgence)</p><p>- http://lagouttedeaudepluie.sib.org : Divers infos pratiques (Pdfs) , eau,\n    brf, spiruline, construction...</p><p>- L'habitat d'urgence et Les Sans abris, SDF : Divers infos et liens sur\n    Habiter-autrement.org\n    - Openarchitecturenetwork.org : Communauté focalisée sur le desing et\n    la construction, comment amélioré les standard de vie de 5 milliards de personnes? Avec 100 millions de sollutions... Architecture en Open Source.</p><p>- Thebhome.com : Construction hexagonale à base de palettes</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "en": "<p><strong>[English Version]</strong> Emergency Shelters & Bioclimatic Low-Tech DIY Housing: Complete engineering guidelines, structural calculation tables, blueprints, and practical instructions for natural DIY counter-culture habitats.</p><p>Habitat d'urgence.6pdfs.05.2012.zip /  35,9  Mo (#)</p><p>Liens uniques: (#D) :</p><p>- habitat.urgence.14m2.100euros.-.5p.pdf : Habitat d'urgence autoconstruit à moins de 100 euro\n    - maison.autonome.refuge-orphelinat.100.m2.-.30p.pdf :\n    - maison.bioclimatique.autoconstruite.bio.materiaux.20m2.1300euros.-.34p.pdf : Maison bio-climatique autoconstruite en bio-matériaux du lieu et de récupération... 2om2 /\n    1000euro</p><p>- casa.bioclimatica.autocontruite.20m2.-.32p.pdf : Trad italien</p><p>-  habitat.d.urgence.autonome.33m2.380euros.-.21p.pdf : Comment autoconstruire un maison écologie démontable auto-organisé de 33m2 / 400euro... fiche technique ,\n    explication, plan, tuto, anarchie pratique, écologie profonde...\n    - habitat.d.urgence.autonome.33m2.v.long.-.ed.aa.-.108p.pdf</p><p>Liens externes :\n    - EcologieSociale : EcologieSociale 2 : Divers infos et brochures . (Source habitat urgence)</p><p>- http://lagouttedeaudepluie.sib.org : Divers infos pratiques (Pdfs) , eau,\n    brf, spiruline, construction...</p><p>- L'habitat d'urgence et Les Sans abris, SDF : Divers infos et liens sur\n    Habiter-autrement.org\n    - Openarchitecturenetwork.org : Communauté focalisée sur le desing et\n    la construction, comment amélioré les standard de vie de 5 milliards de personnes? Avec 100 millions de sollutions... Architecture en Open Source.</p><p>- Thebhome.com : Construction hexagonale à base de palettes</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "es": "<p><strong>[Versión en Español]</strong> Albergues de Emergencia y Autoconstrucción Bioclimática: Planos de ingeniería completos, tablas de cálculo estructural y guías prácticas paso a paso para la autoconstrucción de viviendas ecológicas y alternativas.</p><p>Habitat d'urgence.6pdfs.05.2012.zip /  35,9  Mo (#)</p><p>Liens uniques: (#D) :</p><p>- habitat.urgence.14m2.100euros.-.5p.pdf : Habitat d'urgence autoconstruit à moins de 100 euro\n    - maison.autonome.refuge-orphelinat.100.m2.-.30p.pdf :\n    - maison.bioclimatique.autoconstruite.bio.materiaux.20m2.1300euros.-.34p.pdf : Maison bio-climatique autoconstruite en bio-matériaux du lieu et de récupération... 2om2 /\n    1000euro</p><p>- casa.bioclimatica.autocontruite.20m2.-.32p.pdf : Trad italien</p><p>-  habitat.d.urgence.autonome.33m2.380euros.-.21p.pdf : Comment autoconstruire un maison écologie démontable auto-organisé de 33m2 / 400euro... fiche technique ,\n    explication, plan, tuto, anarchie pratique, écologie profonde...\n    - habitat.d.urgence.autonome.33m2.v.long.-.ed.aa.-.108p.pdf</p><p>Liens externes :\n    - EcologieSociale : EcologieSociale 2 : Divers infos et brochures . (Source habitat urgence)</p><p>- http://lagouttedeaudepluie.sib.org : Divers infos pratiques (Pdfs) , eau,\n    brf, spiruline, construction...</p><p>- L'habitat d'urgence et Les Sans abris, SDF : Divers infos et liens sur\n    Habiter-autrement.org\n    - Openarchitecturenetwork.org : Communauté focalisée sur le desing et\n    la construction, comment amélioré les standard de vie de 5 milliards de personnes? Avec 100 millions de sollutions... Architecture en Open Source.</p><p>- Thebhome.com : Construction hexagonale à base de palettes</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>"
        },
        "downloads": [
            {
                "name": "#",
                "url": "http://www.mediafire.com/?bm8wwmn38zmln1r"
            },
            {
                "name": "#D",
                "url": "http://www.mediafire.com/?8bb83xrtxmttr"
            }
        ]
    },
    {
        "id": "comment-fabriquer-un-tipi-tepee-plan-tuto-images",
        "category": "habitat",
        "date": "2014/08/14",
        "readingTime": 4,
        "image": "https://image.jimcdn.com/app/cms/image/transf/none/path/s6b5d09a755d07b57/image/icb717fee79063476/version/1408019849/image.jpg",
        "tags": [],
        "title": {
            "fr": "Comment fabriquer un tipi (tepee)? Plan, tuto, images",
            "en": "How to Handcraft an Authentic Cone Tipi (Plans & Tutorial)",
            "es": "Cómo fabricar un Tipi Cónico Auténtico (Planos y Tutorial)"
        },
        "desc": {
            "fr": "Archive complète -> : Tipi.tepee.-.10.pdfs.02.2012.zip : Liens uniques -> (#D)...",
            "en": "Complete engineering guidelines, structural calculation tables, blueprints, and practical instructions for natural DIY counter-culture habitats.",
            "es": "Planos de ingeniería completos, tablas de cálculo estructural y guías prácticas paso a paso para la autoconstrucción de viviendas ecológicas y alternativas."
        },
        "content": {
            "fr": "<p>Archive complète -> : Tipi.tepee.-.10.pdfs.02.2012.zip :</p><p>Liens uniques -> (#D)</p><p>Contenu :\n    * Tipi_Tente.indienne.ou.tepees.-.eco.cal.5p.pdf  : 1,23Mo/ 5pages / (via Eco-N-C) :</p><p>* GB-la.tente.et.le.chapiteau.ext31p La tente et le chapiteau à  travers le temps et les cultures (via GoogleBooks)</p><p>* GB-the.indian.tipi.ext74p Histoire du tipi indien, utilisation et construction, images, plans (via GB)</p><p>* GB-tipi.history.and.design.ext52p Tipi, tepee, teepee : histoire et design - Des plans et conseil de construction, photos, images : (via\n    GB)</p><p>* GB-tipi.home.of.the.nomadic.buffalo.hunter.ext26p Tipi, la maison du chasseur de bison nomade, histoire, illustration en couleur des\n    différents ornement, infos, plan : (via GB)</p><p>* Tipi_Construire.un.tipi.-.C.a.s.o.t.n.a.15p.pdf :</p><p>Dossier : Construire un dôme géodésique\n    Dossier : Contruire une yourte</p><p>Document : Construction traditionnelles et\n    marginales\n    Document : Habitat d'urgence autonome démontable,\n    autoconstruit 33m2</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "en": "<p><strong>[English Version]</strong> How to Handcraft an Authentic Cone Tipi (Plans & Tutorial): Complete engineering guidelines, structural calculation tables, blueprints, and practical instructions for natural DIY counter-culture habitats.</p><p>Archive complète -> : Tipi.tepee.-.10.pdfs.02.2012.zip :</p><p>Liens uniques -> (#D)</p><p>Contenu :\n    * Tipi_Tente.indienne.ou.tepees.-.eco.cal.5p.pdf  : 1,23Mo/ 5pages / (via Eco-N-C) :</p><p>* GB-la.tente.et.le.chapiteau.ext31p La tente et le chapiteau à  travers le temps et les cultures (via GoogleBooks)</p><p>* GB-the.indian.tipi.ext74p Histoire du tipi indien, utilisation et construction, images, plans (via GB)</p><p>* GB-tipi.history.and.design.ext52p Tipi, tepee, teepee : histoire et design - Des plans et conseil de construction, photos, images : (via\n    GB)</p><p>* GB-tipi.home.of.the.nomadic.buffalo.hunter.ext26p Tipi, la maison du chasseur de bison nomade, histoire, illustration en couleur des\n    différents ornement, infos, plan : (via GB)</p><p>* Tipi_Construire.un.tipi.-.C.a.s.o.t.n.a.15p.pdf :</p><p>Dossier : Construire un dôme géodésique\n    Dossier : Contruire une yourte</p><p>Document : Construction traditionnelles et\n    marginales\n    Document : Habitat d'urgence autonome démontable,\n    autoconstruit 33m2</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "es": "<p><strong>[Versión en Español]</strong> Cómo fabricar un Tipi Cónico Auténtico (Planos y Tutorial): Planos de ingeniería completos, tablas de cálculo estructural y guías prácticas paso a paso para la autoconstrucción de viviendas ecológicas y alternativas.</p><p>Archive complète -> : Tipi.tepee.-.10.pdfs.02.2012.zip :</p><p>Liens uniques -> (#D)</p><p>Contenu :\n    * Tipi_Tente.indienne.ou.tepees.-.eco.cal.5p.pdf  : 1,23Mo/ 5pages / (via Eco-N-C) :</p><p>* GB-la.tente.et.le.chapiteau.ext31p La tente et le chapiteau à  travers le temps et les cultures (via GoogleBooks)</p><p>* GB-the.indian.tipi.ext74p Histoire du tipi indien, utilisation et construction, images, plans (via GB)</p><p>* GB-tipi.history.and.design.ext52p Tipi, tepee, teepee : histoire et design - Des plans et conseil de construction, photos, images : (via\n    GB)</p><p>* GB-tipi.home.of.the.nomadic.buffalo.hunter.ext26p Tipi, la maison du chasseur de bison nomade, histoire, illustration en couleur des\n    différents ornement, infos, plan : (via GB)</p><p>* Tipi_Construire.un.tipi.-.C.a.s.o.t.n.a.15p.pdf :</p><p>Dossier : Construire un dôme géodésique\n    Dossier : Contruire une yourte</p><p>Document : Construction traditionnelles et\n    marginales\n    Document : Habitat d'urgence autonome démontable,\n    autoconstruit 33m2</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>"
        },
        "downloads": [
            {
                "name": "Tipi.tepee.-.10.pdfs.02.2012.zip",
                "url": "http://www.mediafire.com/?j04iqu9qplo3cvd"
            },
            {
                "name": "#D",
                "url": "http://www.mediafire.com/?4xm93992kjcwi"
            }
        ]
    },
    {
        "id": "apiculture-pour-tous-ruche-du-peuple-warre-topbar",
        "category": "permaculture",
        "date": "2014/08/14",
        "readingTime": 4,
        "image": "https://image.jimcdn.com/app/cms/image/transf/dimension=90x1024:format=jpg/path/s6b5d09a755d07b57/image/ia4c07cd1fa6b828e/version/1408014242/image.jpg",
        "tags": [],
        "title": {
            "fr": "Apiculture pour tous, ruche du peuple, Warre, topbar",
            "en": "Beekeeping for All: The People's Warré Hive & Top-Bar",
            "es": "Apicultura para todos: Colmenas Horizontales Warré y Top-Bar"
        },
        "desc": {
            "fr": "Apiculture.15.pdfs.05.2012.zip / 15pdf -  13,6 Mo -> : (#) : Liens uniques : -> (#D)...",
            "en": "Comprehensive open agroecology manuals: organic natural comb beekeeping without chemical foundation sheets and practical home mushroom cultivation.",
            "es": "Manuales abiertos de permacultura: apicultura natural en colmenas horizontales sin químicos y cultivo práctico de setas gourmet y medicinales en el hogar."
        },
        "content": {
            "fr": "<p>Apiculture.15.pdfs.05.2012.zip / 15pdf -  13,6 Mo -> : (#) :</p><p>Liens uniques : -> (#D)</p><p>Contenu de l'archive :</p><p>top.bar.hive.plans.-.9p.pdf\n        top.bar.8b.tanzanian.halfInch.-.4p.pdf</p><p>produits.de.l.apiculture.proprietes.transfo.et.commerce.-.agrodok42.-.102p.pdf\n        construction.de.ruches.warre.plans.-.10p.pdf\n        construction.de.ruches.layens.plans.-.12p.pdf\n        la.recolte.du.pollen.-.apiservices.com.-.5p.pdf\n        le.cycle.de.l.essaimage.de.l.abeille.noir.-.8p.pdf\n        l.apiculture.dans.les.zones.tropicales.-.agrodok32.-.194p.pdf\n        emile.Warre.people.hive.plans.engl.-.11p.pdf</p><p>construction.de.la.ruche.populaire.a.rayons.fixes.8p.pdf\n        top.bar.hive.plans.mix.-.6p.pdf</p><p>l.apiculture.pour.tous.-.a.warre.-.12ed.-.v.4.0.-.103p.pdf\n        a.bee.keepers.manual.-.167p.pdf\n        l.apiculture.ecologique.infos.-.warre.-.14p.pdf</p><p>Pratique - Inkokiosque - Fiches techniques, plan, tuto, infos, brochures</p><p>Pratique - Comment cultiver, produire la spiruline</p><p>- Pearl Apiculture : Participe au pearltree Apiculture</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "en": "<p><strong>[English Version]</strong> Beekeeping for All: The People's Warré Hive & Top-Bar: Comprehensive open agroecology manuals: organic natural comb beekeeping without chemical foundation sheets and practical home mushroom cultivation.</p><p>Apiculture.15.pdfs.05.2012.zip / 15pdf -  13,6 Mo -> : (#) :</p><p>Liens uniques : -> (#D)</p><p>Contenu de l'archive :</p><p>top.bar.hive.plans.-.9p.pdf\n        top.bar.8b.tanzanian.halfInch.-.4p.pdf</p><p>produits.de.l.apiculture.proprietes.transfo.et.commerce.-.agrodok42.-.102p.pdf\n        construction.de.ruches.warre.plans.-.10p.pdf\n        construction.de.ruches.layens.plans.-.12p.pdf\n        la.recolte.du.pollen.-.apiservices.com.-.5p.pdf\n        le.cycle.de.l.essaimage.de.l.abeille.noir.-.8p.pdf\n        l.apiculture.dans.les.zones.tropicales.-.agrodok32.-.194p.pdf\n        emile.Warre.people.hive.plans.engl.-.11p.pdf</p><p>construction.de.la.ruche.populaire.a.rayons.fixes.8p.pdf\n        top.bar.hive.plans.mix.-.6p.pdf</p><p>l.apiculture.pour.tous.-.a.warre.-.12ed.-.v.4.0.-.103p.pdf\n        a.bee.keepers.manual.-.167p.pdf\n        l.apiculture.ecologique.infos.-.warre.-.14p.pdf</p><p>Pratique - Inkokiosque - Fiches techniques, plan, tuto, infos, brochures</p><p>Pratique - Comment cultiver, produire la spiruline</p><p>- Pearl Apiculture : Participe au pearltree Apiculture</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "es": "<p><strong>[Versión en Español]</strong> Apicultura para todos: Colmenas Horizontales Warré y Top-Bar: Manuales abiertos de permacultura: apicultura natural en colmenas horizontales sin químicos y cultivo práctico de setas gourmet y medicinales en el hogar.</p><p>Apiculture.15.pdfs.05.2012.zip / 15pdf -  13,6 Mo -> : (#) :</p><p>Liens uniques : -> (#D)</p><p>Contenu de l'archive :</p><p>top.bar.hive.plans.-.9p.pdf\n        top.bar.8b.tanzanian.halfInch.-.4p.pdf</p><p>produits.de.l.apiculture.proprietes.transfo.et.commerce.-.agrodok42.-.102p.pdf\n        construction.de.ruches.warre.plans.-.10p.pdf\n        construction.de.ruches.layens.plans.-.12p.pdf\n        la.recolte.du.pollen.-.apiservices.com.-.5p.pdf\n        le.cycle.de.l.essaimage.de.l.abeille.noir.-.8p.pdf\n        l.apiculture.dans.les.zones.tropicales.-.agrodok32.-.194p.pdf\n        emile.Warre.people.hive.plans.engl.-.11p.pdf</p><p>construction.de.la.ruche.populaire.a.rayons.fixes.8p.pdf\n        top.bar.hive.plans.mix.-.6p.pdf</p><p>l.apiculture.pour.tous.-.a.warre.-.12ed.-.v.4.0.-.103p.pdf\n        a.bee.keepers.manual.-.167p.pdf\n        l.apiculture.ecologique.infos.-.warre.-.14p.pdf</p><p>Pratique - Inkokiosque - Fiches techniques, plan, tuto, infos, brochures</p><p>Pratique - Comment cultiver, produire la spiruline</p><p>- Pearl Apiculture : Participe au pearltree Apiculture</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>"
        },
        "downloads": [
            {
                "name": "#",
                "url": "http://www.mediafire.com/?de0rfon6wla7hpv"
            },
            {
                "name": "#D",
                "url": "http://www.mediafire.com/?6sxxnd6c68ava"
            }
        ]
    },
    {
        "id": "comment-cultiver-produire-et-transformer-la-spiruline",
        "category": "production",
        "date": "2014/08/14",
        "readingTime": 4,
        "image": "https://image.jimcdn.com/app/cms/image/transf/none/path/s6b5d09a755d07b57/image/i6b56a0305568501e/version/1408015042/image.jpg",
        "tags": [],
        "title": {
            "fr": "Comment cultiver, produire et transformer la spiruline",
            "en": "How to Cultivate, Produce and Process Organic Spirulina",
            "es": "Cómo cultivar, producir y procesar Espirulina Orgánica"
        },
        "desc": {
            "fr": "Liens internes :\n    -  Pratique - Fiches techniques, plan, tuto, infos, brochures, stickers\n    - Infos pratique, autoconstruction, recyclage, détournement, system d, autoproduction\n    \n    Liens externes :\n    - Spiru...",
            "en": "Mastering decentralized culinary self-reliance: artisan all-grain beer & alcohol brewing, open-hearth wild sourdough bread, and spirulina raceway basins.",
            "es": "Autonomía culinaria descentralizada: elaboración de cerveza artesanal todo-grano, pan rústico con masa madre salvaje y cultivo casero de espirulina alcalina."
        },
        "content": {
            "fr": "<p>Liens internes :\n    -  Pratique - Fiches techniques, plan, tuto, infos, brochures, stickers\n    - Infos pratique, autoconstruction, recyclage, détournement, system d, autoproduction\n    \n    Liens externes :\n    - Spiruline :dossier Compagnie tournesol,\n    - infos, docs, actions : Antenna.ch : Documents (divers\n    pdfs) / Guides (manuel de culture)</p><p>- projet daara : Habiter-autrement.org/daara7.htm#Spiruline</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "en": "<p><strong>[English Version]</strong> How to Cultivate, Produce and Process Organic Spirulina: Mastering decentralized culinary self-reliance: artisan all-grain beer & alcohol brewing, open-hearth wild sourdough bread, and spirulina raceway basins.</p><p>Liens internes :\n    -  Pratique - Fiches techniques, plan, tuto, infos, brochures, stickers\n    - Infos pratique, autoconstruction, recyclage, détournement, system d, autoproduction\n    \n    Liens externes :\n    - Spiruline :dossier Compagnie tournesol,\n    - infos, docs, actions : Antenna.ch : Documents (divers\n    pdfs) / Guides (manuel de culture)</p><p>- projet daara : Habiter-autrement.org/daara7.htm#Spiruline</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "es": "<p><strong>[Versión en Español]</strong> Cómo cultivar, producir y procesar Espirulina Orgánica: Autonomía culinaria descentralizada: elaboración de cerveza artesanal todo-grano, pan rústico con masa madre salvaje y cultivo casero de espirulina alcalina.</p><p>Liens internes :\n    -  Pratique - Fiches techniques, plan, tuto, infos, brochures, stickers\n    - Infos pratique, autoconstruction, recyclage, détournement, system d, autoproduction\n    \n    Liens externes :\n    - Spiruline :dossier Compagnie tournesol,\n    - infos, docs, actions : Antenna.ch : Documents (divers\n    pdfs) / Guides (manuel de culture)</p><p>- projet daara : Habiter-autrement.org/daara7.htm#Spiruline</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>"
        },
        "downloads": [
            {
                "name": "Spiruline.17.pdfs.v.02.2012.zip",
                "url": "http://www.mediafire.com/?9jke166lp42p3gl"
            },
            {
                "name": "#D",
                "url": "http://www.mediafire.com/?j64bp1a71nyez"
            }
        ]
    },
    {
        "id": "comment-construire-un-dôme-géodésique",
        "category": "habitat",
        "date": "2014/08/14",
        "readingTime": 4,
        "image": "https://image.jimcdn.com/app/cms/image/transf/dimension=120x1024:format=jpg/path/s6b5d09a755d07b57/image/i78c54303e24f3c1e/version/1408015710/image.jpg",
        "tags": [],
        "title": {
            "fr": "Comment construire un dôme géodésique",
            "en": "How to Calculate and Build a Sturdy Geodesic Dome",
            "es": "Cómo calcular y construir un Domo Geodésico Resistente"
        },
        "desc": {
            "fr": "Contenu :\n    - Dome Book 2, (133p/91,7Mo) : Livre trés complet sur les domes, zomes et autre construction géométrique, calculs, plan, tuto, photos, dessins.(Eng)(Via : Letsremake) -> Dome Book 1 -> Premier version (firs...",
            "en": "Complete engineering guidelines, structural calculation tables, blueprints, and practical instructions for natural DIY counter-culture habitats.",
            "es": "Planos de ingeniería completos, tablas de cálculo estructural y guías prácticas paso a paso para la autoconstrucción de viviendas ecológicas y alternativas."
        },
        "content": {
            "fr": "<p>Contenu :\n    - Dome Book 2, (133p/91,7Mo) : Livre trés complet sur les domes, zomes et autre construction géométrique, calculs, plan, tuto, photos, dessins.(Eng)(Via : Letsremake) -> Dome Book 1 -> Premier version (first version)</p><p>- Habitats - Construction traditionnelles et marginales (Article) : Contient Dome book 3 et plein d'autres infos sur les constructions trad et marginales (FR)</p><p>- Les domes geodesiques : Info pratique et théorique sur la construction d'un dome (Via: Archilibre.org)(FR)\n    - Fiche technique pour la construction d'un dome géodésique / (2p/50k) / : fiche technique, plan, (fait à Grange-Neuve\n    en 2002)</p><p>- Dome géodésique : Sur le modéle du No Border (6.30m) (Brochure)\n    -  Dome_prog.calcul.zome.-.Ardheia.zip :</p><p>- Construire un dome Géodésique PE  5p :</p><p>- Principes.des.structures.architecturale.légères.-.79p.pdf :</p><p>Théorie, dome, zome, tansegrity... -> Via : http://co-creation.net</p><p>- Auto.Construction.-.Special.vroutsch.-.1972.-.71p.pdf  :</p><p>Une perle tout fait à la main , Zome, dome tipi, bus... -> Via  : http://alphazomes.org</p><p>Comment construire une yourte.</p><p>Comment fabriquer un tipi (tepee)? Plan, tuto,\n    images</p><p>Habitat d'urgence autonome démontable, autoconstruit 33m2</p><p>- Simplydifferently.org  : Temporary\n    buildings, tipi, yurt (ger) and domes. (Eng)</p><p>Site trés complet sur les constructions temporaires tipi, yourte, dômes et autres variations, info théoriques et pratiques, calculateur en ligne avec aperçu du résultat.</p><p>- Domerama.com : Tout plein d'info et de liens sur les domes.\n    - Desertdomes.com : Plein d'infos pour construire un dome (calculateur,\n    plan,...)(Eng) /</p><p>- Dome, notions\n    géométriques... : Via ARchilibre</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "en": "<p><strong>[English Version]</strong> How to Calculate and Build a Sturdy Geodesic Dome: Complete engineering guidelines, structural calculation tables, blueprints, and practical instructions for natural DIY counter-culture habitats.</p><p>Contenu :\n    - Dome Book 2, (133p/91,7Mo) : Livre trés complet sur les domes, zomes et autre construction géométrique, calculs, plan, tuto, photos, dessins.(Eng)(Via : Letsremake) -> Dome Book 1 -> Premier version (first version)</p><p>- Habitats - Construction traditionnelles et marginales (Article) : Contient Dome book 3 et plein d'autres infos sur les constructions trad et marginales (FR)</p><p>- Les domes geodesiques : Info pratique et théorique sur la construction d'un dome (Via: Archilibre.org)(FR)\n    - Fiche technique pour la construction d'un dome géodésique / (2p/50k) / : fiche technique, plan, (fait à Grange-Neuve\n    en 2002)</p><p>- Dome géodésique : Sur le modéle du No Border (6.30m) (Brochure)\n    -  Dome_prog.calcul.zome.-.Ardheia.zip :</p><p>- Construire un dome Géodésique PE  5p :</p><p>- Principes.des.structures.architecturale.légères.-.79p.pdf :</p><p>Théorie, dome, zome, tansegrity... -> Via : http://co-creation.net</p><p>- Auto.Construction.-.Special.vroutsch.-.1972.-.71p.pdf  :</p><p>Une perle tout fait à la main , Zome, dome tipi, bus... -> Via  : http://alphazomes.org</p><p>Comment construire une yourte.</p><p>Comment fabriquer un tipi (tepee)? Plan, tuto,\n    images</p><p>Habitat d'urgence autonome démontable, autoconstruit 33m2</p><p>- Simplydifferently.org  : Temporary\n    buildings, tipi, yurt (ger) and domes. (Eng)</p><p>Site trés complet sur les constructions temporaires tipi, yourte, dômes et autres variations, info théoriques et pratiques, calculateur en ligne avec aperçu du résultat.</p><p>- Domerama.com : Tout plein d'info et de liens sur les domes.\n    - Desertdomes.com : Plein d'infos pour construire un dome (calculateur,\n    plan,...)(Eng) /</p><p>- Dome, notions\n    géométriques... : Via ARchilibre</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "es": "<p><strong>[Versión en Español]</strong> Cómo calcular y construir un Domo Geodésico Resistente: Planos de ingeniería completos, tablas de cálculo estructural y guías prácticas paso a paso para la autoconstrucción de viviendas ecológicas y alternativas.</p><p>Contenu :\n    - Dome Book 2, (133p/91,7Mo) : Livre trés complet sur les domes, zomes et autre construction géométrique, calculs, plan, tuto, photos, dessins.(Eng)(Via : Letsremake) -> Dome Book 1 -> Premier version (first version)</p><p>- Habitats - Construction traditionnelles et marginales (Article) : Contient Dome book 3 et plein d'autres infos sur les constructions trad et marginales (FR)</p><p>- Les domes geodesiques : Info pratique et théorique sur la construction d'un dome (Via: Archilibre.org)(FR)\n    - Fiche technique pour la construction d'un dome géodésique / (2p/50k) / : fiche technique, plan, (fait à Grange-Neuve\n    en 2002)</p><p>- Dome géodésique : Sur le modéle du No Border (6.30m) (Brochure)\n    -  Dome_prog.calcul.zome.-.Ardheia.zip :</p><p>- Construire un dome Géodésique PE  5p :</p><p>- Principes.des.structures.architecturale.légères.-.79p.pdf :</p><p>Théorie, dome, zome, tansegrity... -> Via : http://co-creation.net</p><p>- Auto.Construction.-.Special.vroutsch.-.1972.-.71p.pdf  :</p><p>Une perle tout fait à la main , Zome, dome tipi, bus... -> Via  : http://alphazomes.org</p><p>Comment construire une yourte.</p><p>Comment fabriquer un tipi (tepee)? Plan, tuto,\n    images</p><p>Habitat d'urgence autonome démontable, autoconstruit 33m2</p><p>- Simplydifferently.org  : Temporary\n    buildings, tipi, yurt (ger) and domes. (Eng)</p><p>Site trés complet sur les constructions temporaires tipi, yourte, dômes et autres variations, info théoriques et pratiques, calculateur en ligne avec aperçu du résultat.</p><p>- Domerama.com : Tout plein d'info et de liens sur les domes.\n    - Desertdomes.com : Plein d'infos pour construire un dome (calculateur,\n    plan,...)(Eng) /</p><p>- Dome, notions\n    géométriques... : Via ARchilibre</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>"
        },
        "downloads": [
            {
                "name": "#D",
                "url": "http://www.mediafire.com/?4xm93992kjcwi"
            },
            {
                "name": "Principes.des.structures.architecturale.légères",
                "url": "http://www.mediafire.com/view/rzzz6bx854hg7zj/Principes.structures.architecturale.legeres.-.79p.pdf"
            },
            {
                "name": "Auto.Construction.-.Special.vroutsch.-.1972",
                "url": "http://www.mediafire.com/view/m67z4zsa18d4yn4/Auto.Construction.-.Special.vroutsch.-.1972.-.71p.pdf"
            },
            {
                "name": "http://alphazomes.org",
                "url": "http://alphazomes.org"
            }
        ]
    },
    {
        "id": "nddl-zad",
        "category": "action",
        "date": "2014/08/11",
        "readingTime": 4,
        "image": "",
        "tags": [],
        "title": {
            "fr": "# NDDL - ZAD",
            "en": "Resistance & Direct Action: Defending the Earth (ZAD NDDL)",
            "es": "Resistencia y Acción Directa: Defender la Tierra (ZAD NDDL)"
        },
        "desc": {
            "fr": "Voici quelques reportages et liens consacrés à la Zad à Notre Dame des Landes. Si tu sais pas quoi faire prend tes bottes et ton rateau et va y faire un tour!...",
            "en": "Dispatches, practical guidelines, horizontal general assemblies, and proactive treehouse blockades for defending natural living wetlands and autonomous territories.",
            "es": "Reportajes, manuales de resistencia práctica, asambleas horizontales y construcción de cabañas en los árboles para la defensa intransigente del territorio y la vida."
        },
        "content": {
            "fr": "<p>Voici quelques reportages et liens consacrés à la Zad à Notre Dame des Landes.</p><p>Si tu sais pas quoi faire prend tes bottes et ton rateau et va y faire un tour!</p><p>On lâche rien, la lutte continue!</p><p>http://zad.nadir.org/</p><p>Et pour accompagner ceci , une playlist musicale avec du bon son pour révolter tes zoreils avec des jolies chanson sur la Zad pasque la révolution ça se fait en musique aussi et la lutte a\n    inspiré les artistes!</p><p>Sound of the resistance!</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "en": "<p><strong>[English Version]</strong> Resistance & Direct Action: Defending the Earth (ZAD NDDL): Dispatches, practical guidelines, horizontal general assemblies, and proactive treehouse blockades for defending natural living wetlands and autonomous territories.</p><p>Voici quelques reportages et liens consacrés à la Zad à Notre Dame des Landes.</p><p>Si tu sais pas quoi faire prend tes bottes et ton rateau et va y faire un tour!</p><p>On lâche rien, la lutte continue!</p><p>http://zad.nadir.org/</p><p>Et pour accompagner ceci , une playlist musicale avec du bon son pour révolter tes zoreils avec des jolies chanson sur la Zad pasque la révolution ça se fait en musique aussi et la lutte a\n    inspiré les artistes!</p><p>Sound of the resistance!</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "es": "<p><strong>[Versión en Español]</strong> Resistencia y Acción Directa: Defender la Tierra (ZAD NDDL): Reportajes, manuales de resistencia práctica, asambleas horizontales y construcción de cabañas en los árboles para la defensa intransigente del territorio y la vida.</p><p>Voici quelques reportages et liens consacrés à la Zad à Notre Dame des Landes.</p><p>Si tu sais pas quoi faire prend tes bottes et ton rateau et va y faire un tour!</p><p>On lâche rien, la lutte continue!</p><p>http://zad.nadir.org/</p><p>Et pour accompagner ceci , une playlist musicale avec du bon son pour révolter tes zoreils avec des jolies chanson sur la Zad pasque la révolution ça se fait en musique aussi et la lutte a\n    inspiré les artistes!</p><p>Sound of the resistance!</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>"
        },
        "downloads": [
            {
                "name": "http://zad.nadir.org/",
                "url": "http://zad.nadir.org/"
            }
        ]
    },
    {
        "id": "pratique-comment-faire-de-l-alcool-bière-cidre-vin",
        "category": "production",
        "date": "2014/08/11",
        "readingTime": 4,
        "image": "https://image.jimcdn.com/app/cms/image/transf/dimension=83x1024:format=jpg/path/s6b5d09a755d07b57/image/i76d491947aa6522d/version/1408019272/image.jpg",
        "tags": [],
        "title": {
            "fr": "Comment faire de l'alcool, bière, cidre, vin...",
            "en": "Practical Master Brewing (Artisan Beer, Wine, Hard Cider)",
            "es": "Maestría en Cerveza Artesanal, Vino de Frutas y Sidra Salvaje"
        },
        "desc": {
            "fr": "- Faire de la bière, vin, cidre, vinaigre, recolter, malter l'orge et faire la bière... (extraits divers)  -\n    8p/3Mo / -> (#) - Traité théorique et pratique de la  fabrication de la bière - GB.-.1848.-.421p : Lien -> ...",
            "en": "Mastering decentralized culinary self-reliance: artisan all-grain beer & alcohol brewing, open-hearth wild sourdough bread, and spirulina raceway basins.",
            "es": "Autonomía culinaria descentralizada: elaboración de cerveza artesanal todo-grano, pan rústico con masa madre salvaje y cultivo casero de espirulina alcalina."
        },
        "content": {
            "fr": "<p>- Faire de la bière, vin, cidre, vinaigre, recolter, malter l'orge et faire la bière... (extraits divers)  -\n    8p/3Mo / -> (#)</p><p>- Traité théorique et pratique de la  fabrication de la bière - GB.-.1848.-.421p : Lien -> (#) Une bible qui date de 1848...!</p><p>- Faites votre bière - J.A Chandon 25p : -> (#)</p><p>- Dossier alcool : Liqueur, distillation, gin,\n    vodka, bière, vin... -> (#)</p><p>- Pratique - Comment fabriquer son pain maison, recettes</p><p>- Pratique - Revivre à la campagne, John Seymour, livre\n    - ! La Médiathèque !</p><p>- Faire de la bière : Via Arfys</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "en": "<p><strong>[English Version]</strong> Practical Master Brewing (Artisan Beer, Wine, Hard Cider): Mastering decentralized culinary self-reliance: artisan all-grain beer & alcohol brewing, open-hearth wild sourdough bread, and spirulina raceway basins.</p><p>- Faire de la bière, vin, cidre, vinaigre, recolter, malter l'orge et faire la bière... (extraits divers)  -\n    8p/3Mo / -> (#)</p><p>- Traité théorique et pratique de la  fabrication de la bière - GB.-.1848.-.421p : Lien -> (#) Une bible qui date de 1848...!</p><p>- Faites votre bière - J.A Chandon 25p : -> (#)</p><p>- Dossier alcool : Liqueur, distillation, gin,\n    vodka, bière, vin... -> (#)</p><p>- Pratique - Comment fabriquer son pain maison, recettes</p><p>- Pratique - Revivre à la campagne, John Seymour, livre\n    - ! La Médiathèque !</p><p>- Faire de la bière : Via Arfys</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "es": "<p><strong>[Versión en Español]</strong> Maestría en Cerveza Artesanal, Vino de Frutas y Sidra Salvaje: Autonomía culinaria descentralizada: elaboración de cerveza artesanal todo-grano, pan rústico con masa madre salvaje y cultivo casero de espirulina alcalina.</p><p>- Faire de la bière, vin, cidre, vinaigre, recolter, malter l'orge et faire la bière... (extraits divers)  -\n    8p/3Mo / -> (#)</p><p>- Traité théorique et pratique de la  fabrication de la bière - GB.-.1848.-.421p : Lien -> (#) Une bible qui date de 1848...!</p><p>- Faites votre bière - J.A Chandon 25p : -> (#)</p><p>- Dossier alcool : Liqueur, distillation, gin,\n    vodka, bière, vin... -> (#)</p><p>- Pratique - Comment fabriquer son pain maison, recettes</p><p>- Pratique - Revivre à la campagne, John Seymour, livre\n    - ! La Médiathèque !</p><p>- Faire de la bière : Via Arfys</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>"
        },
        "downloads": [
            {
                "name": "#",
                "url": "http://www.mediafire.com/download/ay6ecmlkkj3wj2a/faire.de.la.biere.vin.cidre.vinaigre.-.ext.div.CTCL.8p.pdf"
            },
            {
                "name": "#",
                "url": "http://www.mediafire.com/download/8g3y3l154548wx2/traite.theo.et+prat.fabrication.de.la.bi%C3%A8re.-.GB.-.1848.-.421p.pdf"
            },
            {
                "name": "#",
                "url": "http://www.mediafire.com/download/icaal6dtvjf9uba/Faites.votre.biere.-.J.A.Chandon.-.25p.pdf"
            },
            {
                "name": "#",
                "url": "https://www.mediafire.com/folder/thbt6k3eei96w/Alcool%2C_vin%2C_bi%C3%A8re%2C_vinaigre"
            }
        ]
    },
    {
        "id": "pratique-comment-faire-du-pain",
        "category": "permaculture",
        "date": "2014/08/11",
        "readingTime": 4,
        "image": "https://image.jimcdn.com/app/cms/image/transf/none/path/s6b5d09a755d07b57/image/i569670a9e299e45b/version/1408018867/image.jpg",
        "tags": [],
        "title": {
            "fr": "Pratique - Comment faire du pain",
            "en": "Practical Master Baker Guide — Natural Wild Sourdough Bread",
            "es": "Guía del Maestro Panadero — Pan Rústico con Masa Madre Natural"
        },
        "desc": {
            "fr": "- La fabrication du pain, infos et recettes : 32p/224k / Télécharger (#) / Via : http://fairesonpain.free.fr/...",
            "en": "Comprehensive open agroecology manuals: organic natural comb beekeeping without chemical foundation sheets and practical home mushroom cultivation.",
            "es": "Manuales abiertos de permacultura: apicultura natural en colmenas horizontales sin químicos y cultivo práctico de setas gourmet y medicinales en el hogar."
        },
        "content": {
            "fr": "<p>- La fabrication du pain, infos et recettes : 32p/224k / Télécharger (#) /</p><p>Via : http://fairesonpain.free.fr/</p><p>- 50 Recettes de pain : 123p : Télécharger (#)</p><p>- Recettes de cuisine, faire son pain, faire son vin, bière cidre et vinaigre, faire du café, biscuits... (Extraits divers) : Recettes.cuisine.pain.biere.vin.biscuit.-.mix.a4.72p Ed A.A\n    Télécharger (#)</p><p>Liens internes :\n    - Article : Pratique - Comment faire de l'alcool de la bière, malter l'orge...\n    - Document : Pratique - 278 recettes\n    végétalienne\n    - Article : Produire de la spiruline</p><p>-  Miel pour les tartoches : -> Apiculture pour\n    tous</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "en": "<p><strong>[English Version]</strong> Practical Master Baker Guide — Natural Wild Sourdough Bread: Comprehensive open agroecology manuals: organic natural comb beekeeping without chemical foundation sheets and practical home mushroom cultivation.</p><p>- La fabrication du pain, infos et recettes : 32p/224k / Télécharger (#) /</p><p>Via : http://fairesonpain.free.fr/</p><p>- 50 Recettes de pain : 123p : Télécharger (#)</p><p>- Recettes de cuisine, faire son pain, faire son vin, bière cidre et vinaigre, faire du café, biscuits... (Extraits divers) : Recettes.cuisine.pain.biere.vin.biscuit.-.mix.a4.72p Ed A.A\n    Télécharger (#)</p><p>Liens internes :\n    - Article : Pratique - Comment faire de l'alcool de la bière, malter l'orge...\n    - Document : Pratique - 278 recettes\n    végétalienne\n    - Article : Produire de la spiruline</p><p>-  Miel pour les tartoches : -> Apiculture pour\n    tous</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "es": "<p><strong>[Versión en Español]</strong> Guía del Maestro Panadero — Pan Rústico con Masa Madre Natural: Manuales abiertos de permacultura: apicultura natural en colmenas horizontales sin químicos y cultivo práctico de setas gourmet y medicinales en el hogar.</p><p>- La fabrication du pain, infos et recettes : 32p/224k / Télécharger (#) /</p><p>Via : http://fairesonpain.free.fr/</p><p>- 50 Recettes de pain : 123p : Télécharger (#)</p><p>- Recettes de cuisine, faire son pain, faire son vin, bière cidre et vinaigre, faire du café, biscuits... (Extraits divers) : Recettes.cuisine.pain.biere.vin.biscuit.-.mix.a4.72p Ed A.A\n    Télécharger (#)</p><p>Liens internes :\n    - Article : Pratique - Comment faire de l'alcool de la bière, malter l'orge...\n    - Document : Pratique - 278 recettes\n    végétalienne\n    - Article : Produire de la spiruline</p><p>-  Miel pour les tartoches : -> Apiculture pour\n    tous</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>"
        },
        "downloads": [
            {
                "name": "#",
                "url": "http://www.mediafire.com/view/9o33d93oj4d5r73/la.fabrication.du.pain.-.fairesonpain.free.fr.32p.pdf"
            },
            {
                "name": "#",
                "url": "http://www.mediafire.com/view/h0f0fjyx8d1vh8z/50.recettes.de.pain.pdf"
            },
            {
                "name": "#",
                "url": "http://www.mediafire.com/view/4zxysnqp8j1mb8q/recettes.cuisine.pain.biere.vin.biscuit.-.mix.a4.72p.pdf"
            }
        ]
    },
    {
        "id": "la-culture-des-champignons-mycologie",
        "category": "permaculture",
        "date": "2014/08/10",
        "readingTime": 4,
        "image": "https://image.jimcdn.com/app/cms/image/transf/dimension=90x1024:format=jpg/path/s6b5d09a755d07b57/image/i314b0eea92ccd21e/version/1408017030/image.jpg",
        "tags": [],
        "title": {
            "fr": "La culture des champignons - mycologie",
            "en": "Practical Mycology — Master Gourmet Mushroom Cultivation",
            "es": "Micología Práctica — Cultivo Casero de Hongos Gourmet y Medicinales"
        },
        "desc": {
            "fr": "La.culture.des.champignons.mycologie.-.15.pdfs.-.198Mo.-.CTCL.zip : (#) : Liens uniques : (#D)\n    \n    Contenu :  \n        Growing.wild.mushrooms.-.bob.harris.50p.pdf\n        Guide.technique.culture.de.champignon.sur.bi...",
            "en": "Comprehensive open agroecology manuals: organic natural comb beekeeping without chemical foundation sheets and practical home mushroom cultivation.",
            "es": "Manuales abiertos de permacultura: apicultura natural en colmenas horizontales sin químicos y cultivo práctico de setas gourmet y medicinales en el hogar."
        },
        "content": {
            "fr": "<p>La.culture.des.champignons.mycologie.-.15.pdfs.-.198Mo.-.CTCL.zip : (#) :</p><p>Liens uniques : (#D)\n    \n    Contenu :  \n        Growing.wild.mushrooms.-.bob.harris.50p.pdf\n        Guide.technique.culture.de.champignon.sur.billes.en.sous.bois.-.20p.pdf\n     Guide.technique.culture.de.champignons.sur.billots.et.souches.-.cre.-.21p.pdf\n        la.culture.des.champignons.a.petite.echelle.-.agrodok40.86p.pdf\n        la.culture.des.champignons.a.petite.echelle.2.-.agrodok41.-.91p.pdf\n        La.mycologie.recreative.-.riri.-.gaspard.des.montagnes.62p.pdf  \n        Paul.Stamets.-.Growing Gourmet and Medicinal Mushrooms.2000.586p.pdf\n        Paul.Stamets.-.Growing Gourmet and Medicinal Mushrooms-color photos.pdf\n        Paul.Stamets.-.Mycel.run.-.How.mush.can.help.save.the.world.356p.pdf\n        Paul.Stamets.-.Psilocybin.mushrooms.of.the.world.127p.pdf\n        Paul.Stamets.-.The.mushroom.cultivator.374p.pdf\n        Psilocybin.magic.mushroom.growers.guide.-.rev.ed.1986.42p.pdf\n        Psilocybin.mush.handbook.-.Easy.indoor.and.out.cultivation.223.p.pdf\n        Radical.mycology.-.slf.-.broch.a5.22p.pdf\n        The.psilocybin.producers.guide.-.gottlieb.22p.pdf</p><p>Inkokiosque - Fiches techniques, plan, tuto, infos, brochures</p><p>Apiculture pour tous, ruche du peuple, Warre, topbar</p><p>Liens externes :\n    Plus d'infos sur la Mycologie : http://fr.wikipedia.org/wiki/Portail:Mycologie</p><p>Dossier : http://decroissons.wordpress.com/2014/04/18/cultiver-ses-champignons/</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "en": "<p><strong>[English Version]</strong> Practical Mycology — Master Gourmet Mushroom Cultivation: Comprehensive open agroecology manuals: organic natural comb beekeeping without chemical foundation sheets and practical home mushroom cultivation.</p><p>La.culture.des.champignons.mycologie.-.15.pdfs.-.198Mo.-.CTCL.zip : (#) :</p><p>Liens uniques : (#D)\n    \n    Contenu :  \n        Growing.wild.mushrooms.-.bob.harris.50p.pdf\n        Guide.technique.culture.de.champignon.sur.billes.en.sous.bois.-.20p.pdf\n     Guide.technique.culture.de.champignons.sur.billots.et.souches.-.cre.-.21p.pdf\n        la.culture.des.champignons.a.petite.echelle.-.agrodok40.86p.pdf\n        la.culture.des.champignons.a.petite.echelle.2.-.agrodok41.-.91p.pdf\n        La.mycologie.recreative.-.riri.-.gaspard.des.montagnes.62p.pdf  \n        Paul.Stamets.-.Growing Gourmet and Medicinal Mushrooms.2000.586p.pdf\n        Paul.Stamets.-.Growing Gourmet and Medicinal Mushrooms-color photos.pdf\n        Paul.Stamets.-.Mycel.run.-.How.mush.can.help.save.the.world.356p.pdf\n        Paul.Stamets.-.Psilocybin.mushrooms.of.the.world.127p.pdf\n        Paul.Stamets.-.The.mushroom.cultivator.374p.pdf\n        Psilocybin.magic.mushroom.growers.guide.-.rev.ed.1986.42p.pdf\n        Psilocybin.mush.handbook.-.Easy.indoor.and.out.cultivation.223.p.pdf\n        Radical.mycology.-.slf.-.broch.a5.22p.pdf\n        The.psilocybin.producers.guide.-.gottlieb.22p.pdf</p><p>Inkokiosque - Fiches techniques, plan, tuto, infos, brochures</p><p>Apiculture pour tous, ruche du peuple, Warre, topbar</p><p>Liens externes :\n    Plus d'infos sur la Mycologie : http://fr.wikipedia.org/wiki/Portail:Mycologie</p><p>Dossier : http://decroissons.wordpress.com/2014/04/18/cultiver-ses-champignons/</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>",
            "es": "<p><strong>[Versión en Español]</strong> Micología Práctica — Cultivo Casero de Hongos Gourmet y Medicinales: Manuales abiertos de permacultura: apicultura natural en colmenas horizontales sin químicos y cultivo práctico de setas gourmet y medicinales en el hogar.</p><p>La.culture.des.champignons.mycologie.-.15.pdfs.-.198Mo.-.CTCL.zip : (#) :</p><p>Liens uniques : (#D)\n    \n    Contenu :  \n        Growing.wild.mushrooms.-.bob.harris.50p.pdf\n        Guide.technique.culture.de.champignon.sur.billes.en.sous.bois.-.20p.pdf\n     Guide.technique.culture.de.champignons.sur.billots.et.souches.-.cre.-.21p.pdf\n        la.culture.des.champignons.a.petite.echelle.-.agrodok40.86p.pdf\n        la.culture.des.champignons.a.petite.echelle.2.-.agrodok41.-.91p.pdf\n        La.mycologie.recreative.-.riri.-.gaspard.des.montagnes.62p.pdf  \n        Paul.Stamets.-.Growing Gourmet and Medicinal Mushrooms.2000.586p.pdf\n        Paul.Stamets.-.Growing Gourmet and Medicinal Mushrooms-color photos.pdf\n        Paul.Stamets.-.Mycel.run.-.How.mush.can.help.save.the.world.356p.pdf\n        Paul.Stamets.-.Psilocybin.mushrooms.of.the.world.127p.pdf\n        Paul.Stamets.-.The.mushroom.cultivator.374p.pdf\n        Psilocybin.magic.mushroom.growers.guide.-.rev.ed.1986.42p.pdf\n        Psilocybin.mush.handbook.-.Easy.indoor.and.out.cultivation.223.p.pdf\n        Radical.mycology.-.slf.-.broch.a5.22p.pdf\n        The.psilocybin.producers.guide.-.gottlieb.22p.pdf</p><p>Inkokiosque - Fiches techniques, plan, tuto, infos, brochures</p><p>Apiculture pour tous, ruche du peuple, Warre, topbar</p><p>Liens externes :\n    Plus d'infos sur la Mycologie : http://fr.wikipedia.org/wiki/Portail:Mycologie</p><p>Dossier : http://decroissons.wordpress.com/2014/04/18/cultiver-ses-champignons/</p><p>\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama</p>"
        },
        "downloads": [
            {
                "name": "#",
                "url": "http://www.mediafire.com/?upi0xy1aj3wnit3"
            },
            {
                "name": "#D",
                "url": "http://www.mediafire.com/?t922h6alzca09"
            }
        ]
    }
];

    /* --- 4. BOOKMARKS / SITEMAP SUBPAGES DIRECTORY --- */
    const bookmarkGroups = [
    {
        "id": "mediatheque",
        "icon": "📚",
        "title": {
            "fr": "Médiathèques & Bases de Données",
            "en": "Media Libraries & Open Databases",
            "es": "Mediatecas y Bases de Datos Libres"
        },
        "pages": []
    },
    {
        "id": "habitat",
        "icon": "🔨",
        "title": {
            "fr": "Habitat & Autoconstruction (Synergies)",
            "en": "Housing & Self-Building (Synergies)",
            "es": "Hábitat y Autoconstrucción (Sinergias)"
        },
        "pages": [
            {
                "url": "https://ecoclash.jimdofree.com/accueil/habitat-autoconstruction/",
                "title": "Documents : - Partage de savoirs, alternatives pratique, autoconstruction, permaculture",
                "intro": "(#D) : Les docs  / @A : Article associé : Maj et liens",
                "links": [
                    {
                        "name": "#D",
                        "url": "http://www.mediafire.com/?itneqcvh72sav"
                    },
                    {
                        "name": "#D",
                        "url": "http://www.mediafire.com/?4xm93992kjcwi"
                    },
                    {
                        "name": "@A",
                        "url": "/2014/08/10/pratique-comment-construire-une-yourte/"
                    },
                    {
                        "name": "#D",
                        "url": "http://www.mediafire.com/?4xm93992kjcwi"
                    },
                    {
                        "name": "@A",
                        "url": "/2014/08/14/comment-fabriquer-un-tipi-tepee-plan-tuto-images/"
                    },
                    {
                        "name": "#D",
                        "url": "http://www.mediafire.com/?4xm93992kjcwi"
                    },
                    {
                        "name": "@A",
                        "url": "/2014/08/14/comment-construire-un-d%C3%B4me-g%C3%A9od%C3%A9sique/"
                    },
                    {
                        "name": "#D",
                        "url": "http://www.mediafire.com/?8bb83xrtxmttr"
                    },
                    {
                        "name": "@A",
                        "url": "/2014/08/14/habitats-d-urgence-autoconstruction-bioclimatique/"
                    },
                    {
                        "name": "#D",
                        "url": "http://www.mediafire.com/?7exr74mwenwj3"
                    },
                    {
                        "name": "#D",
                        "url": "http://www.mediafire.com/?bvhtwuhky85kg"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Pratique - Comment construire une yourte",
                        "url": "/2014/08/10/pratique-comment-construire-une-yourte/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/10/pratique-comment-construire-une-yourte/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/10/pratique-comment-construire-une-yourte/#commentsModule9992286322"
                    },
                    {
                        "name": "Le Kiosques Autonomes",
                        "url": "/2014/09/14/le-kiosques-autonomes/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/09/14/le-kiosques-autonomes/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/09/14/le-kiosques-autonomes/#commentsModule10302692422"
                    },
                    {
                        "name": "Autoconstruction - special vroutsch / 1972",
                        "url": "/2014/09/14/autoconstruction-special-vroutsch-1972/"
                    },
                    {
                        "name": "Auto.Construction.-.Special.vroutsch",
                        "url": "http://www.mediafire.com/view/m67z4zsa18d4yn4/Auto.Construction.-.Special.vroutsch.-.1972.-.71p.pdf"
                    },
                    {
                        "name": "http://alphazomes.org",
                        "url": "http://alphazomes.org%20"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/09/14/autoconstruction-special-vroutsch-1972/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/09/14/autoconstruction-special-vroutsch-1972/#commentsModule10302261522"
                    },
                    {
                        "name": "Habitats - Construction traditionnelles et marginales",
                        "url": "/2014/08/14/habitats-construction-traditionnelles-et-marginales/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "#",
                        "url": "http://www.mediafire.com/view/?9879kcgolypri0v"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/14/habitats-construction-traditionnelles-et-marginales/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/14/habitats-construction-traditionnelles-et-marginales/#commentsModule10012034222"
                    },
                    {
                        "name": "Autoconstruction d'une yourte locale",
                        "url": "/2014/09/03/autoconstruction-d-une-yourte-locale/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/09/03/autoconstruction-d-une-yourte-locale/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/09/03/autoconstruction-d-une-yourte-locale/#commentsModule10198578622"
                    },
                    {
                        "name": "Faites tout vous même / Savoir revivre / Revivre à la campagne",
                        "url": "/2014/08/25/faites-tout-vous-m%C3%AAme-savoir-revivre-revivre-%C3%A0-la-campagne/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/25/faites-tout-vous-m%C3%AAme-savoir-revivre-revivre-%C3%A0-la-campagne/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/25/faites-tout-vous-m%C3%AAme-savoir-revivre-revivre-%C3%A0-la-campagne/#commentsModule10075095722"
                    },
                    {
                        "name": "Habitats d'urgence, autoconstruction bioclimatique",
                        "url": "/2014/08/14/habitats-d-urgence-autoconstruction-bioclimatique/"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/14/habitats-d-urgence-autoconstruction-bioclimatique/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/14/habitats-d-urgence-autoconstruction-bioclimatique/#commentsModule10012096322"
                    },
                    {
                        "name": "Comment fabriquer un tipi (tepee)? Plan, tuto, images",
                        "url": "/2014/08/14/comment-fabriquer-un-tipi-tepee-plan-tuto-images/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/14/comment-fabriquer-un-tipi-tepee-plan-tuto-images/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/14/comment-fabriquer-un-tipi-tepee-plan-tuto-images/#commentsModule10011632722"
                    },
                    {
                        "name": "Comment construire un dôme géodésique",
                        "url": "/2014/08/14/comment-construire-un-d%C3%B4me-g%C3%A9od%C3%A9sique/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/14/comment-construire-un-d%C3%B4me-g%C3%A9od%C3%A9sique/"
                    },
                    {
                        "name": "1 commentaires",
                        "url": "/2014/08/14/comment-construire-un-d%C3%B4me-g%C3%A9od%C3%A9sique/#commentsModule10011230022"
                    }
                ]
            },
            {
                "url": "https://ecoclash.jimdofree.com/accueil/habitat-autoconstruction/synergie-liens/",
                "title": "Synergie, liens - Partage de savoirs, alternatives pratique, autoconstruction, permaculture",
                "intro": "🏠 Habitats Légers & Autoconstruction (mise à jour avril 2026)",
                "links": [
                    {
                        "name": "HALEM – Habitants de Logements Éphémères ou Mobiles",
                        "url": "https://halem-sos.fr/"
                    },
                    {
                        "name": "Les Cabanes",
                        "url": "https://www.les-cabanes.com/"
                    },
                    {
                        "name": "Katipik",
                        "url": "http://katipik.free.fr/"
                    },
                    {
                        "name": "Brin d’Aventure",
                        "url": "https://www.brindaventure.ch/"
                    },
                    {
                        "name": "Toits Alternatifs",
                        "url": "https://toitsalternatifs.fr/"
                    },
                    {
                        "name": "Hameaux Légers",
                        "url": "https://hameaux-legers.org/"
                    },
                    {
                        "name": "CalEarth – SuperAdobe",
                        "url": "https://calearth.org/"
                    },
                    {
                        "name": "CRAterre",
                        "url": "https://craterre.org/"
                    },
                    {
                        "name": "Earthship Biotecture",
                        "url": "http://www.earthship.net/"
                    },
                    {
                        "name": "One Community Global – Highest Good Housing",
                        "url": "https://onecommunityglobal.org/highest-good-housing/"
                    },
                    {
                        "name": "Les Compaillons – Réseau Français de la Construction en Paille",
                        "url": "https://www.compaillons.fr/"
                    },
                    {
                        "name": "La Maison en Paille",
                        "url": "https://www.lamaisonenpaille.com/"
                    },
                    {
                        "name": "Bâtir Sain",
                        "url": "https://batirsain.org/"
                    },
                    {
                        "name": "Archilibre",
                        "url": "https://archilibre.org/"
                    },
                    {
                        "name": "Guédelon",
                        "url": "https://www.guedelon.fr/"
                    },
                    {
                        "name": "Low Tech Magazine",
                        "url": "https://www.lowtechmagazine.com/"
                    },
                    {
                        "name": "Habiter Autrement",
                        "url": "https://www.habiter-autrement.org/"
                    },
                    {
                        "name": "ARESO",
                        "url": "https://www.areso.asso.fr/"
                    },
                    {
                        "name": "Abonnez-vous\nau tableau Habitats, Autoconstruction - sur Pinterest.",
                        "url": "http://www.pinterest.com/shashiban/habitats-autoconstruction-divers/"
                    },
                    {
                        "name": "Halemfrance.org",
                        "url": "http://www.halemfrance.org/"
                    },
                    {
                        "name": "Macabane.info",
                        "url": "http://www.macabane.info/"
                    },
                    {
                        "name": "Les cabanes",
                        "url": "http://www.les-cabanes.com/"
                    },
                    {
                        "name": "Katipik.free.fr",
                        "url": "http://katipik.free.fr/"
                    },
                    {
                        "name": "Le recours aux forêts",
                        "url": "http://www.lerecoursauxforets.org/"
                    },
                    {
                        "name": "Ecodome",
                        "url": "http://www.calearth.org/EcoDome.htm"
                    },
                    {
                        "name": "Brindaventure.ch",
                        "url": "http://www.brindaventure.ch/"
                    },
                    {
                        "name": "Roulottes.voyages.free.fr",
                        "url": "http://roulottes.voyages.free.fr/"
                    },
                    {
                        "name": "Earthship.net",
                        "url": "http://www.earthship.net/"
                    },
                    {
                        "name": "Es-cargo.qc.ca",
                        "url": "http://www.es-cargo.qc.ca/"
                    },
                    {
                        "name": "Thatroundhouse.info",
                        "url": "http://www.thatroundhouse.info/"
                    },
                    {
                        "name": "Atypikaccueil.blogspot.com",
                        "url": "http://www.atypikaccueil.blogspot.com/"
                    },
                    {
                        "name": "Archilibre.org",
                        "url": "http://www.archilibre.org/"
                    },
                    {
                        "name": "Habiter-autrement.org",
                        "url": "http://www.habiter-autrement.org/"
                    },
                    {
                        "name": "la",
                        "url": "http://bibliotheque.esa-paris.fr/Record.htm?record=19117195146919353779"
                    },
                    {
                        "name": "la",
                        "url": "http://www.habiter-autrement.org/19.bibliographie/06_bib.htm"
                    },
                    {
                        "name": "la",
                        "url": "http://pagesperso-orange.fr/gamlin.diop/publications1.htm"
                    },
                    {
                        "name": "Sens et autonomie",
                        "url": "http://sensetautonomie.fr/"
                    },
                    {
                        "name": "Autoconstruction.info",
                        "url": "http://www.autoconstruction.info/"
                    },
                    {
                        "name": "Bâtir-Sain",
                        "url": "http://batirsain.free.fr/"
                    },
                    {
                        "name": "par ici",
                        "url": "http://batirsain.org/?+-telecharger-+.html"
                    },
                    {
                        "name": "Castorsfrance.org",
                        "url": "http://castorsfrance.org/"
                    },
                    {
                        "name": "Guedelon.com",
                        "url": "http://www.guedelon.com/"
                    },
                    {
                        "name": "Theforgottentechnology.com",
                        "url": "http://www.theforgottentechnology.com/"
                    },
                    {
                        "name": "Atelier 1011",
                        "url": "http://atelier1011.free.fr/"
                    },
                    {
                        "name": "Botmobil.org",
                        "url": "http://www.botmobil.org/"
                    },
                    {
                        "name": "Compaillons.fr",
                        "url": "http://www.compaillons.fr/"
                    },
                    {
                        "name": "Maisonenpaille.canalblog.com",
                        "url": "http://maisonenpaille.canalblog.com/"
                    },
                    {
                        "name": "Lamaisonenpaille.com",
                        "url": "http://www.lamaisonenpaille.com/"
                    },
                    {
                        "name": "Areso.asso.fr",
                        "url": "http://www.areso.asso.fr/"
                    },
                    {
                        "name": "Maison autonome",
                        "url": "http://maisonautonome.over-blog.com/article-501044.html"
                    },
                    {
                        "name": "Stratégie énergétiques, biosphère et sociétés",
                        "url": "http://www.unige.ch/sebes/"
                    },
                    {
                        "name": "Autoconstruction d'une éolienne",
                        "url": "http://eoliennes.free.fr/"
                    },
                    {
                        "name": "Construire une éolienne",
                        "url": "http://www.onpeutlefaire.com/construire-une-eolienne-a-axe-vertical"
                    },
                    {
                        "name": "une autre",
                        "url": "http://www.instructables.com/id/Lenz2-wind-turbine/"
                    },
                    {
                        "name": "information techniques",
                        "url": "http://www.areso.asso.fr/rubrique.php3?id_rubrique=52"
                    },
                    {
                        "name": "Solaroilsystems.com",
                        "url": "http://www.solaroilsystems.com/"
                    },
                    {
                        "name": "Faire sa propre station de biodiésèle",
                        "url": "http://www.instructables.com/id/Make-Your-Own-Biodiesel-Processor/"
                    },
                    {
                        "name": "Turbine à vent en carton",
                        "url": "http://www.instructables.com/id/Cardboard-Savonius-turbine/"
                    },
                    {
                        "name": "Un moulin à vent avec des roues de vélo",
                        "url": "http://www.instructables.com/id/Ted-Baer_s-Bicycle-Wheel-Windmill/"
                    },
                    {
                        "name": "Une maison",
                        "url": "http://www.basurillas.org/viviendas-populares-autoconstruidas-con-tarimas-de-madera-y-otros-materiales-reciclables/"
                    }
                ]
            }
        ]
    },
    {
        "id": "permaculture",
        "icon": "🌻",
        "title": {
            "fr": "Cultiver, Jardiner & Semences",
            "en": "Gardening, Bio-Farming & Seeds",
            "es": "Jardinería, Permacultura y Semillas"
        },
        "pages": [
            {
                "url": "https://ecoclash.jimdofree.com/accueil/cultiver-jardiner/",
                "title": "Articles",
                "intro": "(#D) : Les docs  / @A : Article associé : Maj et liens",
                "links": [
                    {
                        "name": "#D",
                        "url": "http://www.mediafire.com/?p0v38j0xabpxj"
                    },
                    {
                        "name": "#D",
                        "url": "http://www.mediafire.com/?6sxxnd6c68ava"
                    },
                    {
                        "name": "@A",
                        "url": "/2014/08/14/apiculture-pour-tous-ruche-du-peuple-warre-topbar/"
                    },
                    {
                        "name": "#D",
                        "url": "http://www.mediafire.com/?k6mvmraozqkgl"
                    },
                    {
                        "name": "#D",
                        "url": "http://www.mediafire.com/?dvhea4eyj7ndx"
                    },
                    {
                        "name": "#D",
                        "url": "http://www.mediafire.com/?1h2u6v3gfur2p"
                    },
                    {
                        "name": "#D",
                        "url": "http://www.mediafire.com/?h38ao5dsy0h5f"
                    },
                    {
                        "name": "#D",
                        "url": "http://www.mediafire.com/?bwou1cyoh11m7"
                    },
                    {
                        "name": "#D",
                        "url": "http://www.mediafire.com/?t922h6alzca09"
                    },
                    {
                        "name": "@A",
                        "url": "/2014/08/10/la-culture-des-champignons-mycologie/"
                    },
                    {
                        "name": "#D",
                        "url": "http://www.mediafire.com/?j64bp1a71nyez"
                    },
                    {
                        "name": "@A",
                        "url": "/2014/08/14/comment-cultiver-produire-et-transformer-la-spiruline/"
                    },
                    {
                        "name": "#D",
                        "url": "http://www.mediafire.com/?g8393hf9wxji6"
                    },
                    {
                        "name": "#D",
                        "url": "http://www.mediafire.com/?jkatb8bd21q98"
                    },
                    {
                        "name": "#D",
                        "url": "http://www.mediafire.com/?94fp6cc92q9fu"
                    },
                    {
                        "name": "#D",
                        "url": "http://www.mediafire.com/?dakgpubr2t9i2"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Le Kiosques Autonomes",
                        "url": "/2014/09/14/le-kiosques-autonomes/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/09/14/le-kiosques-autonomes/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/09/14/le-kiosques-autonomes/#commentsModule10302692422"
                    },
                    {
                        "name": "Faites tout vous même / Savoir revivre / Revivre à la campagne",
                        "url": "/2014/08/25/faites-tout-vous-m%C3%AAme-savoir-revivre-revivre-%C3%A0-la-campagne/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/25/faites-tout-vous-m%C3%AAme-savoir-revivre-revivre-%C3%A0-la-campagne/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/25/faites-tout-vous-m%C3%AAme-savoir-revivre-revivre-%C3%A0-la-campagne/#commentsModule10075095722"
                    },
                    {
                        "name": "Apiculture pour tous, ruche du peuple, Warre, topbar",
                        "url": "/2014/08/14/apiculture-pour-tous-ruche-du-peuple-warre-topbar/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/14/apiculture-pour-tous-ruche-du-peuple-warre-topbar/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/14/apiculture-pour-tous-ruche-du-peuple-warre-topbar/#commentsModule10011074622"
                    },
                    {
                        "name": "Comment cultiver, produire et transformer la spiruline",
                        "url": "/2014/08/14/comment-cultiver-produire-et-transformer-la-spiruline/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/14/comment-cultiver-produire-et-transformer-la-spiruline/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/14/comment-cultiver-produire-et-transformer-la-spiruline/#commentsModule10011177022"
                    },
                    {
                        "name": "La culture des champignons - mycologie",
                        "url": "/2014/08/10/la-culture-des-champignons-mycologie/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/10/la-culture-des-champignons-mycologie/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/10/la-culture-des-champignons-mycologie/#commentsModule9992806822"
                    }
                ]
            },
            {
                "url": "https://ecoclash.jimdofree.com/accueil/cultiver-jardiner/synergie-liens/",
                "title": "Synergie, liens - Partage de savoirs, alternatives pratique, autoconstruction, permaculture",
                "intro": "🌱 Cultiver & Jardiner : Techniques de cultures (Agriculture biologique, Permaculture, Biodynamie, Mulch, Paillis, BRF, Semences, Agroécologie…)\n    (mise à jour avril 2026)",
                "links": [
                    {
                        "name": "Jardinage-biologique.com",
                        "url": "https://www.jardinage-biologique.com/"
                    },
                    {
                        "name": "Terre & Humanisme",
                        "url": "https://terre-humanisme.org/"
                    },
                    {
                        "name": "Gerbeaud.com",
                        "url": "https://www.gerbeaud.com/"
                    },
                    {
                        "name": "Agence Bio",
                        "url": "https://www.agencebio.org/"
                    },
                    {
                        "name": "Bio-Dynamie.org",
                        "url": "https://www.bio-dynamie.org/"
                    },
                    {
                        "name": "Forum Permaculture France",
                        "url": "https://forum.permaculture.fr/"
                    },
                    {
                        "name": "Brin de Paille – Association Française de Permaculture",
                        "url": "https://asso.permaculture.fr/"
                    },
                    {
                        "name": "Ferme du Bec Hellouin",
                        "url": "https://www.fermedubec.com/"
                    },
                    {
                        "name": "Permies.com",
                        "url": "https://permies.com/"
                    },
                    {
                        "name": "r/Permaculture (Reddit)",
                        "url": "https://www.reddit.com/r/Permaculture/"
                    },
                    {
                        "name": "Milkwood Permaculture",
                        "url": "https://www.milkwood.net/"
                    },
                    {
                        "name": "Permaculture Design – BRF & Paillage",
                        "url": "https://www.permaculturedesign.fr/brf-paillage-bois-rameal-fragmente/"
                    },
                    {
                        "name": "Gerbeaud – Techniques de paillage",
                        "url": "https://www.gerbeaud.com/"
                    },
                    {
                        "name": "Un-Jardin-Bio – Paillage et sol vivant",
                        "url": "https://www.un-jardin-bio.com/"
                    },
                    {
                        "name": "Kokopelli",
                        "url": "https://kokopelli-semences.com/"
                    },
                    {
                        "name": "Réseau Semences Paysannes",
                        "url": "https://www.semencespaysannes.org/"
                    },
                    {
                        "name": "Seeds4All (Europe)",
                        "url": "https://www.seeds4all.eu/"
                    },
                    {
                        "name": "Pro Specie Rara",
                        "url": "https://www.prospecierara.ch/"
                    },
                    {
                        "name": "Graines-et-Plantes.com",
                        "url": "https://www.graines-et-plantes.com/"
                    },
                    {
                        "name": "r/seedswap (Reddit)",
                        "url": "https://www.reddit.com/r/seedswap/"
                    },
                    {
                        "name": "Jardinage-biologique.com",
                        "url": "http://www.jardinage-biologique.com/"
                    },
                    {
                        "name": "Les trucs du jardiniers",
                        "url": "http://perso.orange.fr/girard.guilleme/ACCUEIL.HTM"
                    },
                    {
                        "name": "Les purins, infusions et décoction de plantes",
                        "url": "http://perso.orange.fr/girard.guilleme/purin.htm"
                    },
                    {
                        "name": "La\n    consoude",
                        "url": "http://det68.free.fr/"
                    },
                    {
                        "name": "Terre-humanisme.org",
                        "url": "http://www.terre-humanisme.org/"
                    },
                    {
                        "name": "Serre-dome.com",
                        "url": "http://www.serre-dome.com/"
                    },
                    {
                        "name": "Agri-bio.fr",
                        "url": "http://www.agri-bio.fr/"
                    },
                    {
                        "name": "L'agriculture\n    biologique et la Fao",
                        "url": "http://www.fao.org/organicag/default-f.htm"
                    },
                    {
                        "name": "Annuaire.agencebio.org",
                        "url": "http://annuaire.agencebio.org/"
                    },
                    {
                        "name": "Agribio.com",
                        "url": "http://www.agribio.com/"
                    },
                    {
                        "name": "Agro-bio",
                        "url": "http://eap.mcgill.ca/AgroBio/ab_head.htm"
                    },
                    {
                        "name": "Bio-dynamie.org",
                        "url": "http://www.bio-dynamie.org/"
                    },
                    {
                        "name": "Bio-suisse.ch",
                        "url": "http://www.bio-suisse.ch/"
                    },
                    {
                        "name": "Reckenholz.ch",
                        "url": "http://www.reckenholz.ch/doc/fr/"
                    },
                    {
                        "name": "A faire au jardin ce mois",
                        "url": "http://www.gerbeaud.com/jardin/calendrier/"
                    },
                    {
                        "name": "Ruche-ecologique.org",
                        "url": "http://www.ruche-ecologique.org/"
                    },
                    {
                        "name": "L'art de la récup au jardin",
                        "url": "http://www.plantes-et-jardins.com/magazine/dossier/index.asp?dos_id=83"
                    },
                    {
                        "name": "Faire des pots à semis avec du papier journal",
                        "url": "http://www.instructables.com/id/How-to-make-organic-planting-pots-using-old-newspa"
                    },
                    {
                        "name": "Faire des pots a semis",
                        "url": "http://www.gerbeaud.com/jardin/produit-jardinage/pot_maker_paper_potter.php"
                    },
                    {
                        "name": "Terresdeurope.net",
                        "url": "http://www.terresdeurope.net/"
                    },
                    {
                        "name": "Pleinchamp.com",
                        "url": "http://www.pleinchamp.com/"
                    },
                    {
                        "name": "Village magazine",
                        "url": "http://www.village.tm.fr/"
                    },
                    {
                        "name": "Guerrillagardening.org",
                        "url": "http://www.guerrillagardening.org/"
                    },
                    {
                        "name": "http://pear.ly/bl2CL",
                        "url": "http://pear.ly/bl2CL"
                    },
                    {
                        "name": "La permaculture",
                        "url": "http://fr.wikipedia.org/wiki/Permaculture"
                    },
                    {
                        "name": "Les acteurs de la Permaculture",
                        "url": "http://fr.ekopedia.org/Permaculture_Les_acteurs"
                    },
                    {
                        "name": "Permaculture.ch",
                        "url": "http://www.permaculture.ch/"
                    },
                    {
                        "name": "Blog-valais.permaculture.ch",
                        "url": "http://blog-valais.permaculture.ch/"
                    },
                    {
                        "name": "Wiki",
                        "url": "http://wiki-valais.permaculture.ch/"
                    },
                    {
                        "name": "Permaculturefrancophone.org",
                        "url": "http://permaculturefrancophone.org/"
                    },
                    {
                        "name": "Permaculturefrance.org",
                        "url": "http://permaculturefrance.org/"
                    },
                    {
                        "name": "Permacultureinternationale.com",
                        "url": "http://www.permacultureinternationale.com/"
                    },
                    {
                        "name": "Nés de la terre",
                        "url": "http://www.geocities.com/nesdelaterre/nesdelaterre.html"
                    },
                    {
                        "name": "Page",
                        "url": "http://www.inti.be/ecotopie/perma.html"
                    },
                    {
                        "name": "Primalseeds.org",
                        "url": "http://www.primalseeds.org/index.htm"
                    },
                    {
                        "name": "Bioreseau.free.fr",
                        "url": "http://bioreseau.free.fr/"
                    },
                    {
                        "name": "Le sens de\n    l'humus",
                        "url": "http://senshumus.wordpress.com/"
                    },
                    {
                        "name": "Permaculture.org.uk",
                        "url": "http://www.permaculture.org.uk/mm.asp?mmfile=education"
                    },
                    {
                        "name": "Agricolturanaturale.info",
                        "url": "http://www.agricolturanaturale.info/"
                    },
                    {
                        "name": "Naturalfarming.eu",
                        "url": "http://www.naturalfarming.eu/"
                    },
                    {
                        "name": "Reckenholz.ch",
                        "url": "http://www.reckenholz.ch/doc/fr/forsch/landbau/system/lebendmulch.html"
                    },
                    {
                        "name": "Le semis directe sous mulch dans les petites exploitations du sud brésilien",
                        "url": "http://www.fao.org/Wairdocs/ILRI/x5455B/x5455b10.htm"
                    },
                    {
                        "name": "La fixation primaire, la technique de mulch",
                        "url": "http://www.fao.org/documents/show_cdr.asp?url_file=/docrep/T0492F/t0492f08.htm"
                    },
                    {
                        "name": "Paillis et plantes couvre sol dans la culture du framboisier",
                        "url": "http://www.eap.mcgill.ca/agrobio/ab330-14.htm"
                    },
                    {
                        "name": "INRA",
                        "url": "http://www.avignon.inra.fr/internet/documentation/theses/rsdelouv.html"
                    },
                    {
                        "name": "Le compost et le\n    paillis",
                        "url": "http://64.233.183.104/search?q=cache:kneZ53NMSJ8J:www.evergreen.ca/fr/lg/resources/design/design-2.pdf+mulch&hl=fr&lr=lang_fr"
                    },
                    {
                        "name": "http://pear.ly/bOXIr",
                        "url": "http://pear.ly/bOXIr"
                    },
                    {
                        "name": "Graines-et-plantes.com",
                        "url": "http://www.graines-et-plantes.com/"
                    },
                    {
                        "name": "Pommiers.com",
                        "url": "http://www.pommiers.com/"
                    },
                    {
                        "name": "Kokopelli",
                        "url": "http://www.kokopelli.asso.fr/"
                    },
                    {
                        "name": "Pro Specie Rara",
                        "url": "http://www.prospecierara.ch/"
                    },
                    {
                        "name": "Biaugerme.com",
                        "url": "http://www.biaugerme.com/"
                    }
                ]
            }
        ]
    },
    {
        "id": "production",
        "icon": "🍺",
        "title": {
            "fr": "Production, Pain & Aliments",
            "en": "Food Processing, Bread & Fermentation",
            "es": "Producción y Conservas Alimentarias"
        },
        "pages": [
            {
                "url": "https://ecoclash.jimdofree.com/accueil/production-transformation/",
                "title": "Documents : - Partage de savoirs, alternatives pratique, autoconstruction, permaculture",
                "intro": "@A : Article associé : Maj et liens / (#D) : Les docs",
                "links": [
                    {
                        "name": "#D",
                        "url": "http://www.mediafire.com/?plxjlwb4t4b4y"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Faites tout vous même / Savoir revivre / Revivre à la campagne",
                        "url": "/2014/08/25/faites-tout-vous-m%C3%AAme-savoir-revivre-revivre-%C3%A0-la-campagne/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/25/faites-tout-vous-m%C3%AAme-savoir-revivre-revivre-%C3%A0-la-campagne/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/25/faites-tout-vous-m%C3%AAme-savoir-revivre-revivre-%C3%A0-la-campagne/#commentsModule10075095722"
                    },
                    {
                        "name": "Recettes végétalienne, Guide végétarien et végétalien, Alimentation vivante",
                        "url": "/2014/08/25/recettes-v%C3%A9g%C3%A9talienne-guide-v%C3%A9g%C3%A9tarien-et-v%C3%A9g%C3%A9talien-alimentation-vivante/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/25/recettes-v%C3%A9g%C3%A9talienne-guide-v%C3%A9g%C3%A9tarien-et-v%C3%A9g%C3%A9talien-alimentation-vivante/"
                    },
                    {
                        "name": "1 commentaires",
                        "url": "/2014/08/25/recettes-v%C3%A9g%C3%A9talienne-guide-v%C3%A9g%C3%A9tarien-et-v%C3%A9g%C3%A9talien-alimentation-vivante/#commentsModule10074949322"
                    },
                    {
                        "name": "Comment faire de l'alcool, bière, cidre, vin...",
                        "url": "/2014/08/11/pratique-comment-faire-de-l-alcool-bi%C3%A8re-cidre-vin/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/11/pratique-comment-faire-de-l-alcool-bi%C3%A8re-cidre-vin/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/11/pratique-comment-faire-de-l-alcool-bi%C3%A8re-cidre-vin/#commentsModule9996768722"
                    },
                    {
                        "name": "Pratique - Comment faire du pain",
                        "url": "/2014/08/11/pratique-comment-faire-du-pain/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/11/pratique-comment-faire-du-pain/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/11/pratique-comment-faire-du-pain/#commentsModule9996748222"
                    },
                    {
                        "name": "https://x.com/share?text=Production%2C%20transformation&url=https%3A%2F%2Fecoclash.jimdofree.com%2Faccueil%2Fproduction-transformation%2F",
                        "url": "https://x.com/share?text=Production%2C%20transformation&url=https%3A%2F%2Fecoclash.jimdofree.com%2Faccueil%2Fproduction-transformation%2F"
                    }
                ]
            },
            {
                "url": "https://ecoclash.jimdofree.com/accueil/production-transformation/synergie-liens/",
                "title": "Synergie, liens - Partage de savoirs, alternatives pratique, autoconstruction, permaculture",
                "intro": "🍞 Récolte, Transformation & Conservation des Produits (mise à jour avril 2026)\n    Techniques low-tech : pain au levain, fermentation, lacto-fermentation, séchage, fumage, salaison, conservation sans frigo, fabrication de bière/vin/alcool, fromages, yaourts, confitures, etc.",
                "links": [
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Gerbeaud.com",
                        "url": "https://www.gerbeaud.com/"
                    },
                    {
                        "name": "Révolution Fermentation",
                        "url": "https://revolutionfermentation.com/"
                    },
                    {
                        "name": "r/Breadit (Reddit)",
                        "url": "https://www.reddit.com/r/Breadit/"
                    },
                    {
                        "name": "Révolution Fermentation",
                        "url": "https://revolutionfermentation.com/"
                    },
                    {
                        "name": "Low Tech Journal – Conserver sans frigo",
                        "url": "https://www.lowtechjournal.fr/"
                    },
                    {
                        "name": "Forum Permaculture France",
                        "url": "https://forum.permaculture.fr/"
                    },
                    {
                        "name": "r/fermentation (Reddit)",
                        "url": "https://www.reddit.com/r/fermentation/"
                    },
                    {
                        "name": "Home Distiller Forum",
                        "url": "https://homedistiller.org/forum/"
                    },
                    {
                        "name": "r/Homebrewing (Reddit)",
                        "url": "https://www.reddit.com/r/Homebrewing/"
                    },
                    {
                        "name": "r/mead (Reddit)",
                        "url": "https://www.reddit.com/r/mead/"
                    },
                    {
                        "name": "Révolution Fermentation",
                        "url": "https://revolutionfermentation.com/"
                    },
                    {
                        "name": "Low Tech Lab – Recettes fermentées (PDF gratuit)",
                        "url": "https://www.lowtechlab.org/"
                    },
                    {
                        "name": "Low Tech Journal",
                        "url": "https://www.lowtechjournal.fr/"
                    },
                    {
                        "name": "Permies.com",
                        "url": "https://permies.com/"
                    },
                    {
                        "name": "r/Canning (Reddit)",
                        "url": "https://www.reddit.com/r/Canning/"
                    },
                    {
                        "name": "r/preppers (Reddit)",
                        "url": "https://www.reddit.com/r/preppers/"
                    }
                ]
            }
        ]
    },
    {
        "id": "artisanat",
        "icon": "🔧",
        "title": {
            "fr": "Artisanat, Low-Tech & Récup'",
            "en": "Crafts, Low-Tech & Radical Upcycling",
            "es": "Artesanía y Reciclaje de Herramientas"
        },
        "pages": [
            {
                "url": "https://ecoclash.jimdofree.com/accueil/artisanat/",
                "title": "Documents : - Partage de savoirs, alternatives pratique, autoconstruction, permaculture",
                "intro": "@A : Article associé : Maj et liens / (#D) : Les docs",
                "links": [
                    {
                        "name": "@A",
                        "url": "/2014/08/25/comment-tresser-un-panier-avec-du-papier-journal-vannerie-de-papier-recup/"
                    },
                    {
                        "name": "#D",
                        "url": "http://www.mediafire.com/?c4o2bxfd3pnep"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Comment tresser un panier avec du papier journal, vannerie de papier, recup",
                        "url": "/2014/08/25/comment-tresser-un-panier-avec-du-papier-journal-vannerie-de-papier-recup/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/25/comment-tresser-un-panier-avec-du-papier-journal-vannerie-de-papier-recup/"
                    },
                    {
                        "name": "4 commentaires",
                        "url": "/2014/08/25/comment-tresser-un-panier-avec-du-papier-journal-vannerie-de-papier-recup/#commentsModule10074564922"
                    },
                    {
                        "name": "Les perles des Archives / Vol1",
                        "url": "/2015/08/15/les-perles-des-archives-vol1/"
                    },
                    {
                        "name": "Tous les livres de Gardner Dexter",
                        "url": "https://archive.org/search.php?query=creator%3A%22Hiscox%2C+Gardner+Dexter%2C+1822%3F-1908%22"
                    },
                    {
                        "name": "Henley's twentieth century forrmulas",
                        "url": "https://archive.org/details/henleystwentieth00hiscrich"
                    },
                    {
                        "name": "Mechanical movements, powers, devices and\n    applicances",
                        "url": "https://archive.org/details/mechanicalmovem04hiscgoog"
                    },
                    {
                        "name": "Mechanical appliances, mechanical movements and novelties of\n    construction",
                        "url": "https://archive.org/details/mechanicalappli00dextgoog"
                    },
                    {
                        "name": "Receipts and remedies",
                        "url": "https://archive.org/details/receiptsandreme00flemgoog"
                    },
                    {
                        "name": "The engineer's sketch-book of mechanical movements, devices, appliances",
                        "url": "https://archive.org/details/engineerssketchb00barb"
                    },
                    {
                        "name": "Five hundred and seven mechanial movements",
                        "url": "https://archive.org/details/fivehundredseven02brow"
                    },
                    {
                        "name": "The Dangerous Book for Boys",
                        "url": "http://kat.cr/the-dangerous-book-for-boys-us-by-conn-and-hal-iggulden-retail-dwg-t9511544.html"
                    },
                    {
                        "name": "Backyard ballistics",
                        "url": "http://kat.cr/backyard-ballistics-epub-retail-32skulls-t9572218.html"
                    },
                    {
                        "name": "Absinthe and Flamethrowers",
                        "url": "http://kat.cr/william-gurstelle-absinthe-and-flamethrowers-projects-and-ruminations-on-the-art-of-living-dangerously-epub-plex-t10379851.html"
                    },
                    {
                        "name": "Scientific American handy book of facts and\n    formulae",
                        "url": "https://archive.org/details/scientificameric03hopk"
                    },
                    {
                        "name": "Encyclopedia of practical receipts and processes",
                        "url": "https://archive.org/details/encyclopediaofpr00dickrich"
                    },
                    {
                        "name": "Magic; stage illusions and scientific diversions",
                        "url": "https://archive.org/details/magicstageillusi00hopk"
                    },
                    {
                        "name": "Uncle Josh's trunk-full of fun",
                        "url": "https://archive.org/details/unclejoshstrunkf00dick"
                    },
                    {
                        "name": "What shall we do to-night?",
                        "url": "https://archive.org/details/whatshallwedoton00dickrich"
                    },
                    {
                        "name": "Bulletins d'arboriculture, de culture potagère et de floriculture",
                        "url": "https://archive.org/details/bulletinsdarbor04unkngoog"
                    },
                    {
                        "name": "1 commentaires",
                        "url": "/2015/08/15/les-perles-des-archives-vol1/#commentsModule12279021122"
                    },
                    {
                        "name": "Faites tout vous même / Savoir revivre / Revivre à la campagne",
                        "url": "/2014/08/25/faites-tout-vous-m%C3%AAme-savoir-revivre-revivre-%C3%A0-la-campagne/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/25/faites-tout-vous-m%C3%AAme-savoir-revivre-revivre-%C3%A0-la-campagne/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/25/faites-tout-vous-m%C3%AAme-savoir-revivre-revivre-%C3%A0-la-campagne/#commentsModule10075095722"
                    }
                ]
            },
            {
                "url": "https://ecoclash.jimdofree.com/accueil/artisanat/synergie-liens/",
                "title": "Synergie, liens - Partage de savoirs, alternatives pratique, autoconstruction, permaculture",
                "intro": "🔨 Artisanat & Bricolage Low-Tech (mise à jour avril 2026)\n    Fabrication d’outils, meubles, vannerie, couture, bushcraft, survival et DIY open-source. Techniques manuelles, réparables et autonomes.",
                "links": [
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "NoPanic – Outillages Low-Tech",
                        "url": "https://nopanic.fr/low-tech/outillages-low-tech/"
                    },
                    {
                        "name": "La Fabriculture",
                        "url": "https://www.lafabriculture.fr/"
                    },
                    {
                        "name": "Instructables",
                        "url": "https://www.instructables.com/"
                    },
                    {
                        "name": "r/DIY (Reddit)",
                        "url": "https://www.reddit.com/r/DIY/"
                    },
                    {
                        "name": "Opendesk",
                        "url": "https://opendesk.cc/"
                    },
                    {
                        "name": "Hyperwood – Open-Source Furniture",
                        "url": "https://github.com/jo/hyperwood"
                    },
                    {
                        "name": "Ana White",
                        "url": "https://www.ana-white.com/"
                    },
                    {
                        "name": "r/woodworking (Reddit)",
                        "url": "https://www.reddit.com/r/woodworking/"
                    },
                    {
                        "name": "Vannerie.com",
                        "url": "https://www.vannerie.com/"
                    },
                    {
                        "name": "Basketry and Beyond",
                        "url": "https://www.basketryandbeyond.org/"
                    },
                    {
                        "name": "r/Bushcraft (Reddit)",
                        "url": "https://www.reddit.com/r/Bushcraft/"
                    },
                    {
                        "name": "Tissus.net",
                        "url": "https://www.tissus.net/"
                    },
                    {
                        "name": "r/sewing (Reddit)",
                        "url": "https://www.reddit.com/r/sewing/"
                    },
                    {
                        "name": "Patterns for Pirates",
                        "url": "https://www.patternsforpirates.com/"
                    },
                    {
                        "name": "r/Bushcraft (Reddit)",
                        "url": "https://www.reddit.com/r/Bushcraft/"
                    },
                    {
                        "name": "r/Survival (Reddit)",
                        "url": "https://www.reddit.com/r/Survival/"
                    },
                    {
                        "name": "Bushcraft.fr",
                        "url": "https://bushcraft.fr/"
                    },
                    {
                        "name": "PrimitiveWays",
                        "url": "https://www.primitiveways.com/"
                    }
                ]
            }
        ]
    },
    {
        "id": "mouvement",
        "icon": "🚲",
        "title": {
            "fr": "Mobilité, Voyage & Nomades",
            "en": "Mobility, Critical Mass & Nomads",
            "es": "Movilidad Sostenible y Comunidad Nómada"
        },
        "pages": [
            {
                "url": "https://ecoclash.jimdofree.com/synergies-liens/mouvement-mobilité-voyage/",
                "title": "Vélo, covoiturage, Critical Mass, autostop, voyage... - Partage de savoirs, alternatives pratique, autoconstruction, permaculture",
                "intro": "- Hitchwiki.org et Hitchbase.com et Autostop navigator et Liftershalte.info : base de données, infos, conseils, lieux pour l'autostop, le pouce...\n    - Maps.hitchwiki.org : Liftershalte - Infos autostop, lieux, conseils, carte.\n    - Akende : Covoiturage, stop, nomadisme - Lepouceux.com : Voyage sur le pouce, covoiturage, voyage petit budjet...\n    - Digihitch.com : Hitchhiking, backpacking and budget travel on the road :: Stories, tips and\n    advice :: Movies, music, book resources\n    - Collectif sans ticket : Collectifs pour les transport publique gratuit - The Academy of free travel : club d'autostop russe.\n    - Onebag.com : L'art et la science de voyager léger.(eng) - Hitchhiking's signs...\n    - Nomadic life faq...\n    - Staynomad.com : Travel and stay free, travel cheaper or for free, meet local people worldwide\n    and experience culture from the inside\n    - Echoway.org : Voyage équitable, liens bénévolat... /  A360.org : Revue de voyage utile, documentaires, thématiques /  Le routard.com : le site du guide!  /\n    - Findacrew.net : Trouver un équipage, cobateauage.. travail a bord..  bateaustop... \n    Stw.fr : Association Sail the World , bourse d'équipier bateau...  /\n    - Clearlyenlight.net : Travel blog, accueil local, couch, wwoof, home sitting...\n    - Liens voyage a vélo  - Criticalmass.ch : Masse critique en suisse. - Aspic.ch : Asso pour l'intérêt des cyclistes (ch, ge)\n    - Crazyguyonabike.com : portail du tourisme à vélo - Cyclic.info : Asso promotion vélo Lausanne et dans sa région.(ch, lau)\n    - Woring your way around the world\n    ...\n    *- Cargo trailer, Bike traileler (récup\n    poussette), Bamboo bicycle trailer (plan sur demande), Le Cartbike (chariot supermarché + vélo),\n    *- Bike trailer (une autre)  /  Liste de liens remorque (eng),\n    une remorque en bois, quelques idées de remorques, exemple d'attache au niveau du vélo,\n    *- Bikehacks.com : Les hackers de vélo, transfo, modif ...\n    *- Construire Une remorque pour\n    vélo  / Bicycle trailer (wiki)(eng)  /\n     info constru  et re  /   Bikecart.pedalpeople.com : plein de remorque\n    utilitaire\n    \n    Covoiturage :  Ecotrajet.com  (fr) - 123envoiture.com  (fr, europe) -  Covoiturage.fr  (fr) -  Covoiturage-france.fr  (fr)\n    - Tribu-covoiturage.com  (fr)  -  Carstops.org  (fr)\n    -  Hitchhikers.de  (eu, monde) -  Drivetoday.de  (eu, monde)  -  Covoiturage.ch  (ch) -  E-covoiturage.ch\n     (eu, monde)\n    -  Mitfahrzentrale.ch  (eu) -  Goclicktravel.com  (monde) -  Covoiturage.com  (fr, eu)-  Compartir.org  \n    (europe, monde)",
                "links": [
                    {
                        "name": "Hitchwiki.org",
                        "url": "http://www.hitchwiki.org/"
                    },
                    {
                        "name": "Hitchbase.com",
                        "url": "http://www.hitchbase.com/"
                    },
                    {
                        "name": "Autostop navigator",
                        "url": "http://home.wanadoo.nl/agghanebbah/navigator/navigator.htm"
                    },
                    {
                        "name": "Liftershalte.info",
                        "url": "http://www.liftershalte.info/"
                    },
                    {
                        "name": "Maps.hitchwiki.org",
                        "url": "http://maps.hitchwiki.org/"
                    },
                    {
                        "name": "Akende",
                        "url": "http://membres.lycos.fr/akende/"
                    },
                    {
                        "name": "Lepouceux.com",
                        "url": "http://www.lepouceux.com/"
                    },
                    {
                        "name": "Digihitch.com",
                        "url": "http://www.digihitch.com/"
                    },
                    {
                        "name": "Collectif sans ticket",
                        "url": "http://cst.collectifs.net/"
                    },
                    {
                        "name": "The Academy of free travel",
                        "url": "http://www.avp.travel.ru/AFT-2002.htm"
                    },
                    {
                        "name": "Onebag.com",
                        "url": "http://www.onebag.com/"
                    },
                    {
                        "name": "Hitchhiking's signs",
                        "url": "http://www.couchsurfing.com/group_read.html?gid=12&post=772522"
                    },
                    {
                        "name": "Nomadic life faq",
                        "url": "http://askamylin.blogspot.com/"
                    },
                    {
                        "name": "Staynomad.com",
                        "url": "http://www.staynomad.com/"
                    },
                    {
                        "name": "Echoway.org",
                        "url": "http://www.echoway.org/"
                    },
                    {
                        "name": "A360.org",
                        "url": "http://www.a360.org/"
                    },
                    {
                        "name": "Le routard.com",
                        "url": "http://www.routard.com/"
                    },
                    {
                        "name": "Findacrew.net",
                        "url": "http://www.findacrew.net/"
                    },
                    {
                        "name": "Stw.fr",
                        "url": "http://www.stw.fr/"
                    },
                    {
                        "name": "Clearlyenlight.net",
                        "url": "http://clearlyenlight.net/"
                    },
                    {
                        "name": "Liens voyage a vélo",
                        "url": "http://veleau.tripproof.com/html/liens.htm"
                    },
                    {
                        "name": "Criticalmass.ch",
                        "url": "http://www.criticalmass.ch/"
                    },
                    {
                        "name": "Aspic.ch",
                        "url": "http://www.aspic.ch/aspic/"
                    },
                    {
                        "name": "Crazyguyonabike.com",
                        "url": "http://www.crazyguyonabike.com/"
                    },
                    {
                        "name": "Cyclic.info",
                        "url": "http://www.cyclic.info/"
                    },
                    {
                        "name": "Woring your way around the world",
                        "url": "http://www.google.ch/search?q=Work+Your+Way+Around+the+World&ie=utf-8&oe=utf-8&aq=t&rls=org.mozilla:fr:official&client=firefox-a"
                    },
                    {
                        "name": "Cargo trailer",
                        "url": "http://www.instructables.com/id/Bicycle-cargo-trailer--200-lb-capacity%2c-%2430-for-pa/?utm_source=rss&utm_medium=rss"
                    },
                    {
                        "name": "Bike traileler",
                        "url": "http://www.instructables.com/id/A-bike-trailer--Thats-unheard-of/"
                    },
                    {
                        "name": "Bamboo bicycle trailer",
                        "url": "http://www.carryfreedom.com/bamboo.html"
                    },
                    {
                        "name": "Le Cartbike",
                        "url": "http://www.bicyclelaneindustries.com/bli/cartbike/"
                    },
                    {
                        "name": "Bike trailer",
                        "url": "http://drumbent.com/trailer.html"
                    },
                    {
                        "name": "Liste de liens remorque",
                        "url": "http://www.chiark.greenend.org.uk/%7Earmb/cycling/trailer.html"
                    },
                    {
                        "name": "remorque en bois",
                        "url": "http://www.howtofixbikes.ca/2006/08/how-to-build-cheap-but-good-bicycle.html"
                    },
                    {
                        "name": "idées de remorques",
                        "url": "http://www.bike-buggy.com/eng/"
                    },
                    {
                        "name": "d'attache au niveau du vélo",
                        "url": "http://www.instructables.com/id/Quick-Hitch-for-bike-trailer/"
                    },
                    {
                        "name": "Bikehacks.com",
                        "url": "http://bikehacks.com/"
                    },
                    {
                        "name": "Une remorque pour\n    vélo",
                        "url": "http://www.instructables.com/id/Cargo-Trailer-for-Bicycle/"
                    },
                    {
                        "name": "Bicycle trailer",
                        "url": "http://en.wikipedia.org/wiki/Bicycle_trailer"
                    },
                    {
                        "name": "info constru",
                        "url": "http://www.wikihow.com/Build-a-Bicycle-Cargo-Trailer"
                    },
                    {
                        "name": "re",
                        "url": "http://drumbent.com/trailer_big.html"
                    },
                    {
                        "name": "Bikecart.pedalpeople.com",
                        "url": "http://bikecart.pedalpeople.com/gallery.html"
                    },
                    {
                        "name": "Ecotrajet.com",
                        "url": "http://www.ecotrajet.com/index.php"
                    },
                    {
                        "name": "123envoiture.com",
                        "url": "http://www.123envoiture.com/"
                    },
                    {
                        "name": "Covoiturage.fr",
                        "url": "http://www.covoiturage.fr/"
                    },
                    {
                        "name": "Covoiturage-france.fr",
                        "url": "http://www.covoiturage-france.fr/"
                    },
                    {
                        "name": "Tribu-covoiturage.com",
                        "url": "http://www.tribu-covoiturage.com/"
                    },
                    {
                        "name": "Carstops.org",
                        "url": "http://www.carstops.org/"
                    },
                    {
                        "name": "Hitchhikers.de",
                        "url": "http://www.hitchhikers.de/"
                    },
                    {
                        "name": "Drivetoday.de",
                        "url": "http://www.drivetoday.de/"
                    },
                    {
                        "name": "Covoiturage.ch",
                        "url": "http://www.covoiturage.ch/"
                    },
                    {
                        "name": "E-covoiturage.ch",
                        "url": "http://www.e-covoiturage.ch/"
                    },
                    {
                        "name": "Mitfahrzentrale.ch",
                        "url": "http://www.mitfahrzentrale.ch/"
                    },
                    {
                        "name": "Goclicktravel.com",
                        "url": "http://www.goclicktravel.com/"
                    },
                    {
                        "name": "Covoiturage.com",
                        "url": "http://www.covoiturage.com/"
                    },
                    {
                        "name": "Compartir.org",
                        "url": "http://www.compartir.org/"
                    },
                    {
                        "name": "https://x.com/share?text=Mouvement%2C%20mobilit%C3%A9%2C%20voyage&url=https%3A%2F%2Fecoclash.jimdofree.com%2Fsynergies-liens%2Fmouvement-mobilit%25C3%25A9-voyage%2F",
                        "url": "https://x.com/share?text=Mouvement%2C%20mobilit%C3%A9%2C%20voyage&url=https%3A%2F%2Fecoclash.jimdofree.com%2Fsynergies-liens%2Fmouvement-mobilit%25C3%25A9-voyage%2F"
                    }
                ]
            },
            {
                "url": "https://ecoclash.jimdofree.com/synergies-liens/mouvement-mobilité-voyage/nomades/",
                "title": "Nomades, caravane, marche, tour à vélo, roulotte, voyage, wwoof... - Partage de savoirs, alternatives pratique, autoconstruction, permaculture",
                "intro": "En cours et à venir :",
                "links": [
                    {
                        "name": "Tribuvivace.com",
                        "url": "http://tribuvivace.com/appel-de-la-marche-aux-villages-eclairs-2013/"
                    },
                    {
                        "name": "http://voyageurs.en-transition.fr/",
                        "url": "http://voyageurs.en-transition.fr/"
                    },
                    {
                        "name": "Caravanenomad.blog4ever.com",
                        "url": "http://caravanenomad.blog4ever.com/"
                    },
                    {
                        "name": "Est-roulotte.over-blog.com",
                        "url": "http://est-roulotte.over-blog.com/"
                    },
                    {
                        "name": "Nomad-land.com",
                        "url": "http://www.nomad-land.com/index.php"
                    },
                    {
                        "name": "La Caravane des espaces libres",
                        "url": "http://lacaravanedesespaceslibres.blogspot.com/"
                    },
                    {
                        "name": "Agirlandherthumb.wordpress.com",
                        "url": "http://agirlandherthumb.wordpress.com/"
                    },
                    {
                        "name": "Afrikaroots.uniterre.com",
                        "url": "http://afrikaroots.uniterre.com/"
                    },
                    {
                        "name": "Utopiasparacaminar.bitacoras.com",
                        "url": "http://utopiasparacaminar.bitacoras.com/"
                    },
                    {
                        "name": "Areyouseriousproject.com",
                        "url": "http://www.areyouseriousproject.com/"
                    },
                    {
                        "name": "Twowheelsforchange.blogsport.de",
                        "url": "http://twowheelsforchange.blogsport.de/"
                    },
                    {
                        "name": "Roule-ta-bille.com",
                        "url": "http://www.roule-ta-bille.com/index.htm"
                    },
                    {
                        "name": "CS nomadic convoy to Asia",
                        "url": "http://www.couchsurfing.com/group_read.html?gid=1173&post=2621244"
                    },
                    {
                        "name": "Ventsnomades.org",
                        "url": "http://www.ventsnomades.org/"
                    },
                    {
                        "name": "Roulenroutes.fr",
                        "url": "http://www.roulenroutes.fr/"
                    },
                    {
                        "name": "Le rêve de l'arbre",
                        "url": "http://platcommelaterre.fr/"
                    },
                    {
                        "name": "Tour du monde à vélo",
                        "url": "http://www.crazyguyonabike.com/doc/worldtour07"
                    },
                    {
                        "name": "Ecoveloroute.uniterre.com",
                        "url": "http://ecoveloroute.uniterre.com/"
                    },
                    {
                        "name": "Festoch'Road 2010",
                        "url": "http://festi-tour.xooit.com/index.php"
                    },
                    {
                        "name": "Bohemia.uniterre.com",
                        "url": "http://bohemia.uniterre.com/"
                    },
                    {
                        "name": "Lenatyry.skyblog.com",
                        "url": "http://www.lenatyry.skyblog.com/"
                    },
                    {
                        "name": "Skillsurfers.eu",
                        "url": "http://www.skillsurfers.eu/"
                    },
                    {
                        "name": "Migrobirdo.org",
                        "url": "http://blog.migrobirdo.org/"
                    },
                    {
                        "name": "Ouvertour.org",
                        "url": "http://www.ouvertour.org/"
                    },
                    {
                        "name": "Lamarcheduvivant.org",
                        "url": "http://www.lamarcheduvivant.org/"
                    },
                    {
                        "name": "Les voyageurs du possible",
                        "url": "http://www.econo-ecolo.org/spip.php?article634"
                    },
                    {
                        "name": "Colporteurdespossibles.over-blog.com",
                        "url": "http://colporteurdespossibles.over-blog.com/"
                    },
                    {
                        "name": "Planeted.eu",
                        "url": "http://www.planeted.eu/"
                    },
                    {
                        "name": "Greenwagon.org",
                        "url": "http://www.greenwagon.org/"
                    },
                    {
                        "name": "Lespotesdefoin.asso.fr",
                        "url": "http://www.lespotesdefoin.asso.fr/"
                    },
                    {
                        "name": "Economads.com",
                        "url": "http://www.economads.com/"
                    },
                    {
                        "name": "Greenbikesforpeace.eu",
                        "url": "http://greenbikesforpeace.eu/"
                    },
                    {
                        "name": "Mikeiswwoofing.blogspot.com",
                        "url": "http://mikeiswwoofing.blogspot.com/"
                    },
                    {
                        "name": "Cyclown.org",
                        "url": "http://cyclown.org/"
                    },
                    {
                        "name": "Cie Tourne-sol",
                        "url": "http://flore99.free.fr/"
                    },
                    {
                        "name": "La caravane permanente",
                        "url": "http://cp.squat.net/karavane.php3"
                    },
                    {
                        "name": "Gazette",
                        "url": "http://1libertaire.free.fr/CaravanePermanente01.html"
                    },
                    {
                        "name": "autre présentation",
                        "url": "http://www.ainfos.ca/03/jul/ainfos00059.html"
                    },
                    {
                        "name": "Nomadsunited.com",
                        "url": "http://nomadsunited.com/"
                    },
                    {
                        "name": "Lacaravana.org",
                        "url": "http://www.huehuecoyotl.net/Bienvenidos.html"
                    },
                    {
                        "name": "Flowerpowerbus.com",
                        "url": "http://www.flowerpowerbus.com/"
                    },
                    {
                        "name": "https://x.com/share?text=Nomades&url=https%3A%2F%2Fecoclash.jimdofree.com%2Fsynergies-liens%2Fmouvement-mobilit%25C3%25A9-voyage%2Fnomades%2F",
                        "url": "https://x.com/share?text=Nomades&url=https%3A%2F%2Fecoclash.jimdofree.com%2Fsynergies-liens%2Fmouvement-mobilit%25C3%25A9-voyage%2Fnomades%2F"
                    }
                ]
            }
        ]
    },
    {
        "id": "partage",
        "icon": "🤝",
        "title": {
            "fr": "Partage, Échange, SEL & JEU",
            "en": "Barter, Mutual Aid & Gift Economies",
            "es": "Trueque, Apoyo Mutuo y Economía Libre"
        },
        "pages": [
            {
                "url": "https://ecoclash.jimdofree.com/synergies-liens/partage-échange-troc-don/",
                "title": "Savoirs, services, SEL, JEU :",
                "intro": "Hébérgement gratuit, volontariat , accueil, aide en échange du\n    logement, de la nouriture",
                "links": [
                    {
                        "name": "Couchsurfing.com",
                        "url": "http://www.couchsurfing.com/"
                    },
                    {
                        "name": "Hospitality club",
                        "url": "http://www.hospitalityclub.org/"
                    },
                    {
                        "name": "Warmshowers.org",
                        "url": "http://www.warmshowers.org/"
                    },
                    {
                        "name": "Bewelcome.org",
                        "url": "http://www.bewelcome.org/"
                    },
                    {
                        "name": "Globalfreeloaders.com",
                        "url": "http://www.globalfreeloaders.com/"
                    },
                    {
                        "name": "Welcometraveller.org",
                        "url": "http://www.welcometraveller.org/"
                    },
                    {
                        "name": "Servas",
                        "url": "http://joomla.servas.org/"
                    },
                    {
                        "name": "Casarobino.org",
                        "url": "http://casarobino.org/"
                    },
                    {
                        "name": "Opencouchsurfing.org",
                        "url": "http://www.opencouchsurfing.org/"
                    },
                    {
                        "name": "Nomadbase.org",
                        "url": "http://nomadbase.org/"
                    },
                    {
                        "name": "Pasportaservo.org",
                        "url": "http://www.pasportaservo.org/"
                    },
                    {
                        "name": "Les Hospitality clubs",
                        "url": "http://directory.google.com/Top/Recreation/Travel/Lodging/Hospitality_Clubs/"
                    },
                    {
                        "name": "Liste de service\n    d'hébergement",
                        "url": "http://fr.wikipedia.org/wiki/Service_d%27h%C3%A9bergement"
                    },
                    {
                        "name": "Hospitality\n    Clubs",
                        "url": "http://www.dmoz.org/Recreation/Travel/Lodging/Hospitality_Clubs/"
                    },
                    {
                        "name": "Hospitalityguide",
                        "url": "http://www.hospitalityguide.net/hg/site/?"
                    },
                    {
                        "name": "Wanderingwwoof.com",
                        "url": "http://wanderingwwoof.com/"
                    },
                    {
                        "name": "Helpx.net",
                        "url": "http://www.helpx.net/"
                    },
                    {
                        "name": "Wwoof.org",
                        "url": "http://www.wwoof.org/"
                    },
                    {
                        "name": "Workaway.info",
                        "url": "http://www.workaway.info/"
                    },
                    {
                        "name": "The7interchange.com",
                        "url": "http://www.the7interchange.com/"
                    },
                    {
                        "name": "Hostandcare.com",
                        "url": "http://hostandcare.com/"
                    },
                    {
                        "name": "Forum sur le wwoof",
                        "url": "http://www.forumromanum.com/member/forum/forum.php?action=st..."
                    },
                    {
                        "name": "Sustainablecommunitiesaroundtheworld.blogspot.com",
                        "url": "http://sustainablecommunitiesaroundtheworld.blogspot.com/"
                    },
                    {
                        "name": "Viagensverdes.wordpress.com",
                        "url": "http://viagensverdes.wordpress.com/"
                    },
                    {
                        "name": "Longterm couch",
                        "url": "http://www.couchsurfing.org/group.html?gid=920"
                    },
                    {
                        "name": "Rural couch",
                        "url": "http://www.couchsurfing.org/group.html?gid=9949"
                    },
                    {
                        "name": "Wwoof",
                        "url": "http://www.couchsurfing.com/group.html?gid=622"
                    },
                    {
                        "name": "Wwoofers Unite",
                        "url": "http://www.couchsurfing.org/group.html?gid=3842"
                    },
                    {
                        "name": "Helpx",
                        "url": "http://www.couchsurfing.com/group.html?gid=626"
                    },
                    {
                        "name": "Farm\n        stay around the world",
                        "url": "http://www.couchsurfing.com/group.html?gid=12532"
                    },
                    {
                        "name": "FYI Families & Aupairs : (or nannies)",
                        "url": "http://www.couchsurfing.org/group.html?gid=3651"
                    },
                    {
                        "name": "Europe\n        AuPairs",
                        "url": "http://www.couchsurfing.org/group.html?gid=5058"
                    },
                    {
                        "name": "Traveling Caregiver",
                        "url": "http://www.couchsurfing.org/group.html?gid=8039"
                    },
                    {
                        "name": "House sitters club",
                        "url": "http://www.couchsurfing.org/group.html?gid=840"
                    },
                    {
                        "name": "House-sitting",
                        "url": "http://www.couchsurfing.org/group.html?gid=8572"
                    },
                    {
                        "name": "Traveller Housekeepers",
                        "url": "http://www.couchsurfing.org/group.html?gid=3153"
                    },
                    {
                        "name": "Family\n        hosting long term language & culture exchanges",
                        "url": "http://www.couchsurfing.org/group.html?gid=5724"
                    },
                    {
                        "name": "Travel and Teach/learn language worldwide",
                        "url": "http://www.couchsurfing.org/group.html?gid=1744"
                    },
                    {
                        "name": "Global\n        language swap accommodation",
                        "url": "http://www.couchsurfing.org/group.html?gid=3661"
                    },
                    {
                        "name": "Sel-suisse.ch",
                        "url": "http://www.sel-suisse.ch/"
                    },
                    {
                        "name": "Troc-actif.ch",
                        "url": "http://www.troc-actif.ch/"
                    },
                    {
                        "name": "Sel-lausanne.net",
                        "url": "http://www.sel-lausanne.net/"
                    },
                    {
                        "name": "Seldulac.ch",
                        "url": "http://www.seldulac.ch/"
                    },
                    {
                        "name": "Talent.ch",
                        "url": "http://www.talent.ch/tauschring_talent.html"
                    },
                    {
                        "name": "La banque du\n    temps",
                        "url": "http://banquetemps.free.fr/"
                    },
                    {
                        "name": "Selidaire.org",
                        "url": "http://selidaire.org/spip/"
                    },
                    {
                        "name": "Transversel.apinc.org",
                        "url": "http://transversel.apinc.org/spip/"
                    },
                    {
                        "name": "Sel.leforum.eu",
                        "url": "http://sel.leforum.eu/index.php"
                    },
                    {
                        "name": "La Route des Stages",
                        "url": "http://route.stages.free.fr/"
                    },
                    {
                        "name": "La Route des Sels",
                        "url": "http://route.des.sel.free.fr/"
                    },
                    {
                        "name": "Sel-terre.info",
                        "url": "http://www.sel-terre.info/"
                    },
                    {
                        "name": "Jeu.vingrau.free.fr",
                        "url": "http://jeu.vingrau.free.fr/"
                    },
                    {
                        "name": "Jeu terriens",
                        "url": "http://kiosq.info/ecowiki/wakka.php?wiki=AchatTerrain34"
                    },
                    {
                        "name": "Mirers.org",
                        "url": "http://www.mirers.org/"
                    },
                    {
                        "name": "Recup.net",
                        "url": "http://www.recupe.net/"
                    },
                    {
                        "name": "Betteruse.org",
                        "url": "http://www.betteruse.org/"
                    },
                    {
                        "name": "Freecycle.org",
                        "url": "http://www.freecycle.org/"
                    },
                    {
                        "name": "Freecycle sur flickr",
                        "url": "http://flickr.com/groups/freecycle-treasures/"
                    },
                    {
                        "name": "Wigiwig.com",
                        "url": "http://www.wigiwig.com/"
                    },
                    {
                        "name": "Gooduse.org",
                        "url": "http://www.gooduse.org/"
                    },
                    {
                        "name": "Donoo.eu",
                        "url": "http://www.donoo.eu/"
                    },
                    {
                        "name": "Donnons.org",
                        "url": "http://donnons.org/"
                    },
                    {
                        "name": "Digitroc.com",
                        "url": "http://www.digitroc.com/dons.php"
                    },
                    {
                        "name": "Simpletroc.com",
                        "url": "http://www.simpletroc.com/"
                    },
                    {
                        "name": "Troczone.com",
                        "url": "http://www.troczone.com/"
                    },
                    {
                        "name": "Graines-et-plantes.com",
                        "url": "http://www.graines-et-plantes.com/"
                    },
                    {
                        "name": "Justfortheloveofit.org",
                        "url": "http://www.justfortheloveofit.org/"
                    },
                    {
                        "name": "Trocaffaire.ch",
                        "url": "http://trocaffaire.ch/"
                    },
                    {
                        "name": "https://x.com/share?text=Partage%2C%20%C3%A9change%2C%20troc%2C%20don&url=https%3A%2F%2Fecoclash.jimdofree.com%2Fsynergies-liens%2Fpartage-%25C3%25A9change-troc-don%2F",
                        "url": "https://x.com/share?text=Partage%2C%20%C3%A9change%2C%20troc%2C%20don&url=https%3A%2F%2Fecoclash.jimdofree.com%2Fsynergies-liens%2Fpartage-%25C3%25A9change-troc-don%2F"
                    }
                ]
            }
        ]
    },
    {
        "id": "village",
        "icon": "🌍",
        "title": {
            "fr": "Village Global, Actu & En Vrac",
            "en": "Global Village, Eco-News & Misc",
            "es": "Aldea Global, Noticias y Recursos"
        },
        "pages": [
            {
                "url": "https://ecoclash.jimdofree.com/accueil/médiathèque/",
                "title": "La dropbox de la médiathèque !",
                "intro": "Le but de cet infokiosque / médiathèque est de réunir et partager des infos pratiques. Pour cultiver, construire, fabriquer divers outils et objets, bricoler, se chauffer, manger, se\n    soigner, produire de l'énergie,  transmettre des savoirs populaires oubliés...",
                "links": [
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "FileFolder MF",
                        "url": "http://www.mediafire.com/?4huc2kfj5dpko"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Par ici",
                        "url": "https://www.mediafire.com/folder/nvclk8y8a1df7/M%C3%A9diath%C3%A8que_-_Boite_au_lettre"
                    },
                    {
                        "name": "https://x.com/share?text=M%C3%A9diath%C3%A8que&url=https%3A%2F%2Fecoclash.jimdofree.com%2Faccueil%2Fm%25C3%25A9diath%25C3%25A8que%2F",
                        "url": "https://x.com/share?text=M%C3%A9diath%C3%A8que&url=https%3A%2F%2Fecoclash.jimdofree.com%2Faccueil%2Fm%25C3%25A9diath%25C3%25A8que%2F"
                    },
                    {
                        "name": "/cdn-cgi/l/email-protection#5c632f293e36393f286111791f6f791d6538353d2834791f6f791d642d29397a3d312c673e333825613428282c2f667373393f333f303d2f347236353138333a2e3939723f3331733d3f3f293935307331791f6f791d6538353d2834791f6f791d642d293973",
                        "url": "/cdn-cgi/l/email-protection#5c632f293e36393f286111791f6f791d6538353d2834791f6f791d642d29397a3d312c673e333825613428282c2f667373393f333f303d2f347236353138333a2e3939723f3331733d3f3f293935307331791f6f791d6538353d2834791f6f791d642d293973"
                    }
                ]
            },
            {
                "url": "https://ecoclash.jimdofree.com/accueil/médiathèque/liste-de-médiathèques/",
                "title": "Liste de médiathèques - Partage de savoirs, alternatives pratique, autoconstruction, permaculture",
                "intro": "Bases de données, médiathèques et ressources (mise à jour 2026)",
                "links": [
                    {
                        "name": "United Diversity Library",
                        "url": "https://library.uniteddiversity.coop/"
                    },
                    {
                        "name": "NoPanic BookBank",
                        "url": "https://nopanic.fr/bookbank/"
                    },
                    {
                        "name": "Z-Library",
                        "url": "https://z-lib.ai/"
                    },
                    {
                        "name": "Anna’s Archive",
                        "url": "https://annas-archive.org/"
                    },
                    {
                        "name": "Domerama Free Plans",
                        "url": "https://www.domerama.com/free-plans/"
                    },
                    {
                        "name": "CD3WD",
                        "url": "http://www.cd3wd.com/"
                    },
                    {
                        "name": "Internet Archive",
                        "url": "https://archive.org/"
                    },
                    {
                        "name": "Open Library",
                        "url": "https://openlibrary.org/"
                    },
                    {
                        "name": "Gallica (BNF)",
                        "url": "https://gallica.bnf.fr/"
                    },
                    {
                        "name": "Permatheque",
                        "url": "https://www.permatheque.fr/"
                    },
                    {
                        "name": "Bushcraft UK Downloads",
                        "url": "http://www.bushcraftuk.com/forum/content.php?r=124-downloads-bushcraftuk"
                    },
                    {
                        "name": "Let’s Remake Library",
                        "url": "http://www.letsremake.info/library_2.html"
                    },
                    {
                        "name": "http://www.permatheque.fr/category/dossiers/sources-pdf/",
                        "url": "http://www.permatheque.fr/category/dossiers/sources-pdf/"
                    },
                    {
                        "name": "http://permabox.ressources-permaculture.fr/",
                        "url": "http://permabox.ressources-permaculture.fr/"
                    },
                    {
                        "name": "http://library.uniteddiversity.coop/",
                        "url": "http://library.uniteddiversity.coop/"
                    },
                    {
                        "name": "http://nopanic.fr/bookbank/",
                        "url": "http://nopanic.fr/bookbank/"
                    },
                    {
                        "name": "http://gen.lib.rus.ec/",
                        "url": "http://gen.lib.rus.ec/"
                    },
                    {
                        "name": "http://vozciudadanachile.cl/25-libros-sobre-construccion-natural-en-formato-pdf",
                        "url": "http://vozciudadanachile.cl/25-libros-sobre-construccion-natural-en-formato-pdf"
                    },
                    {
                        "name": "http://caminosostenible.org/libreria/",
                        "url": "http://caminosostenible.org/libreria/"
                    },
                    {
                        "name": "http://www.preppers.info/Free_Downloads.html",
                        "url": "http://www.preppers.info/Free_Downloads.html"
                    },
                    {
                        "name": "http://pssurvival.com/ps/index.htm",
                        "url": "http://pssurvival.com/ps/index.htm"
                    },
                    {
                        "name": "https://www.mediafire.com/?u9mow2pvtwzqx",
                        "url": "https://www.mediafire.com/?u9mow2pvtwzqx"
                    },
                    {
                        "name": "http://www.domerama.com/free-plans/",
                        "url": "http://www.domerama.com/free-plans/"
                    },
                    {
                        "name": "http://craterre.org/diffusion:ouvrages-telechargeables/",
                        "url": "http://craterre.org/diffusion:ouvrages-telechargeables/"
                    },
                    {
                        "name": "http://archive.org",
                        "url": "http://archive.org/search.php?query=%28agriculture%29%20AND%20language%3A%28french%29"
                    },
                    {
                        "name": "http://openlibrary.org",
                        "url": "http://openlibrary.org/search?q=agriculture&has_fulltext=true&language=fre&subject_facet=Accessible+book"
                    },
                    {
                        "name": "http://gallica.bnf.fr",
                        "url": "http://gallica.bnf.fr/?lang=FR"
                    },
                    {
                        "name": "http://www.cd3wd.com/",
                        "url": "http://www.cd3wd.com/"
                    },
                    {
                        "name": "http://www.bushcraftuk.com/forum/content.php?r=124-downloads-bushcraftuk",
                        "url": "http://www.bushcraftuk.com/forum/content.php?r=124-downloads-bushcraftuk"
                    },
                    {
                        "name": "http://oldu.ispeed.org/docs/",
                        "url": "http://oldu.ispeed.org/docs/"
                    },
                    {
                        "name": "http://www.letsremake.info/library_2.html",
                        "url": "http://www.letsremake.info/library_2.html"
                    },
                    {
                        "name": "https://x.com/share?text=Liste%20de%20m%C3%A9diath%C3%A8ques&url=https%3A%2F%2Fecoclash.jimdofree.com%2Faccueil%2Fm%25C3%25A9diath%25C3%25A8que%2Fliste-de-m%25C3%25A9diath%25C3%25A8ques%2F",
                        "url": "https://x.com/share?text=Liste%20de%20m%C3%A9diath%C3%A8ques&url=https%3A%2F%2Fecoclash.jimdofree.com%2Faccueil%2Fm%25C3%25A9diath%25C3%25A8que%2Fliste-de-m%25C3%25A9diath%25C3%25A8ques%2F"
                    }
                ]
            },
            {
                "url": "https://ecoclash.jimdofree.com/accueil/en-vrac/",
                "title": "En vrac :",
                "intro": "Maj en cours...",
                "links": []
            },
            {
                "url": "https://ecoclash.jimdofree.com/synergies-liens/",
                "title": "La synergie des synapses... - Partage de savoirs, alternatives pratique, autoconstruction, permaculture",
                "intro": "",
                "links": [
                    {
                        "name": "Wik",
                        "url": "http://fr.wikipedia.org/wiki/Synergie"
                    },
                    {
                        "name": "Wik",
                        "url": "http://fr.wikipedia.org/wiki/Synapse"
                    }
                ]
            },
            {
                "url": "https://ecoclash.jimdofree.com/synergies-liens/actu/",
                "title": "News d'un monde...",
                "intro": "Voici quelques reportages et liens consacrés à la Zad à Notre Dame des Landes.",
                "links": [
                    {
                        "name": "# NDDL - ZAD",
                        "url": "/2014/08/11/nddl-zad/"
                    },
                    {
                        "name": "http://zad.nadir.org/",
                        "url": "http://zad.nadir.org/"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/11/nddl-zad/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/11/nddl-zad/#commentsModule9996823122"
                    },
                    {
                        "name": "[Squat!net]",
                        "url": "https://fr.squat.net"
                    },
                    {
                        "name": ">> Lire la suite",
                        "url": "https://fr.squat.net/2026/06/19/paris-rassemblement-et-concert-de-soutien-au-camp-des-mal-loges-a-lhotel-de-ville-samedi-20-juin/"
                    },
                    {
                        "name": ">> Lire la suite",
                        "url": "https://fr.squat.net/2026/06/12/amsterdam-la-police-essaie-de-nouvelles-astuces/"
                    },
                    {
                        "name": ">> Lire la suite",
                        "url": "https://fr.squat.net/2026/06/04/chili-expulsion-de-lespacio-katarcis-apres-des-annees-de-resistance-face-a-labandon-de-valparaiso/"
                    },
                    {
                        "name": ">> Lire la suite",
                        "url": "https://fr.squat.net/2026/05/31/vitry-sur-seine-94-une-journee-consacree-aux-squats-en-grece-dimanche-7-juin-a-la-kunda/"
                    },
                    {
                        "name": "UtopLib - Utopies libertaires",
                        "url": "http://www.blogger.com/feeds/7534619927542150481/posts/default"
                    },
                    {
                        "name": ">> Lire la suite",
                        "url": "https://utoplib.blogspot.com/2025/12/noel-libertaire.html"
                    },
                    {
                        "name": ">> Lire la suite",
                        "url": "https://utoplib.blogspot.com/2025/10/une-utopie-face-au-chaos-ukraine.html"
                    },
                    {
                        "name": ">> Lire la suite",
                        "url": "https://utoplib.blogspot.com/2025/10/faut-plus-de-gouvernement.html"
                    },
                    {
                        "name": ">> Lire la suite",
                        "url": "https://utoplib.blogspot.com/2025/10/montrer-des-utopies-en-action.html"
                    }
                ]
            },
            {
                "url": "https://ecoclash.jimdofree.com/synergies-liens/village-global/",
                "title": "Village global - Partage de savoirs, alternatives pratique, autoconstruction, permaculture",
                "intro": "\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama",
                "links": [
                    {
                        "name": "Lieux de vie, collectifs, fermes, squat, ecolieu",
                        "url": "/2015/11/25/lieux-de-vie-collectifs-fermes-squat-ecolieu/"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2015/11/25/lieux-de-vie-collectifs-fermes-squat-ecolieu/"
                    },
                    {
                        "name": "9 commentaires",
                        "url": "/2015/11/25/lieux-de-vie-collectifs-fermes-squat-ecolieu/#commentsModule10155580122"
                    },
                    {
                        "name": "Farm network / Reclaim the field",
                        "url": "/2015/08/14/farm-network-reclaim-the-field/"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2015/08/14/farm-network-reclaim-the-field/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2015/08/14/farm-network-reclaim-the-field/#commentsModule12277759922"
                    },
                    {
                        "name": "La goutte d'eau Cette-Eygun - Pyrénées-Atlantiques",
                        "url": "/2014/08/26/la-goutte-d-eau-cette-eygun-pyr%C3%A9n%C3%A9es-atlantiques/"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/26/la-goutte-d-eau-cette-eygun-pyr%C3%A9n%C3%A9es-atlantiques/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/26/la-goutte-d-eau-cette-eygun-pyr%C3%A9n%C3%A9es-atlantiques/#commentsModule10155513622"
                    },
                    {
                        "name": "Ermitage malin (roumanie)",
                        "url": "/2014/08/26/ermitage-malin-roumanie/"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/26/ermitage-malin-roumanie/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/26/ermitage-malin-roumanie/#commentsModule10155388322"
                    },
                    {
                        "name": "Lieu de vie limousin",
                        "url": "/2014/08/26/lieu-de-vie-limousin/"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/26/lieu-de-vie-limousin/"
                    },
                    {
                        "name": "1 commentaires",
                        "url": "/2014/08/26/lieu-de-vie-limousin/#commentsModule10155323922"
                    },
                    {
                        "name": "Ecolieu des Crozes-hauts (France)",
                        "url": "/2014/08/26/ecolieu-des-crozes-hauts-france/"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/26/ecolieu-des-crozes-hauts-france/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/26/ecolieu-des-crozes-hauts-france/#commentsModule10155292822"
                    },
                    {
                        "name": "# NDDL - ZAD",
                        "url": "/2014/08/11/nddl-zad/"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/11/nddl-zad/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/11/nddl-zad/#commentsModule9996823122"
                    }
                ]
            },
            {
                "url": "https://ecoclash.jimdofree.com/synergies-liens/la-porte-du-temps/",
                "title": "La porte du temps :",
                "intro": "Regroupe diverses pages d'agenda : événement gratuit, prix libre, chapeau magique. Festivals, rencontres, stage",
                "links": [
                    {
                        "name": "http://kokopelli-suisse.com",
                        "url": "http://kokopelli-suisse.com/wordpress/agenda/"
                    },
                    {
                        "name": "Terrenature.ch/agenda",
                        "url": "http://www.terrenature.ch/agenda"
                    },
                    {
                        "name": "Agirinfo.com",
                        "url": "http://www.agirinfo.com/?cat=20"
                    },
                    {
                        "name": "Geneveentransition.org/lagenda/",
                        "url": "http://geneveentransition.org/lagenda/"
                    },
                    {
                        "name": "Agenda",
                        "url": "http://www.decroissance.ch/index.php/Agenda"
                    },
                    {
                        "name": "Agenda",
                        "url": "http://permaculture.ch/index.php?option=com_ninjarsssyndicator&feed_id=1&format=raw"
                    },
                    {
                        "name": "Rencontres",
                        "url": "http://www.permaculture.ch/forum/viewforum.php?f=10&sid=2025bba5bbb718d5b25e53cb3462e51b"
                    },
                    {
                        "name": "Agenda",
                        "url": "http://www.meige.ch/index.php/agenda"
                    },
                    {
                        "name": "http://www.passerelleco.info/article.php?id_article=1617",
                        "url": "http://www.passerelleco.info/article.php?id_article=1617"
                    },
                    {
                        "name": "Formations-événements",
                        "url": "http://permaculturefrancophone.org/category/formations-evenements/"
                    },
                    {
                        "name": "Projets-et-acteurs dans le monde",
                        "url": "http://permaculturefrancophone.org/projets-et-acteurs/"
                    },
                    {
                        "name": "Calendrier des événements",
                        "url": "http://www.permacultureinternationale.com/calendrier-des-%C3%A9v%C3%A9nements/"
                    },
                    {
                        "name": "Événements",
                        "url": "http://forum.permacultureweb.fr/viewforum.php?f=15"
                    },
                    {
                        "name": "Stages",
                        "url": "http://forum.permacultureweb.fr/viewforum.php?f=14"
                    },
                    {
                        "name": "Manif, fêtes, actions",
                        "url": "http://forum.decroissance.info/viewforum.php?f=74"
                    },
                    {
                        "name": "Marches",
                        "url": "http://forum.decroissance.info/viewforum.php?f=86"
                    },
                    {
                        "name": "Chantiers\n            participatifs",
                        "url": "http://ardheia.free.fr/ardheia/index.php?option=com_adsmanager&page=show_category&catid=1&order=0&expand=0&Itemid=166&lang=fr"
                    },
                    {
                        "name": "Stage,\n            chantiers construction paille",
                        "url": "http://www.botmobil.org/descriptif-et-calendrier"
                    },
                    {
                        "name": "Contact lieux de\n            stage construction paille",
                        "url": "http://www.compaillons.fr/divers/stages.html"
                    },
                    {
                        "name": "stage concernant les techniques de construction",
                        "url": "http://batirsain.org/?-stages-specifiques-.html"
                    },
                    {
                        "name": "Rempart.com",
                        "url": "http://www.rempart.com/"
                    },
                    {
                        "name": "Actu, agenda",
                        "url": "http://www.passerelleco.info/rubrique.php?id_rubrique=33"
                    },
                    {
                        "name": "Rss",
                        "url": "http://www.passerelleco.info/spip.php?page=backend&id_rubrique=33"
                    },
                    {
                        "name": "P.A Stage, formation, seminaire, cours.",
                        "url": "http://www.eco-bio.info/annonces/annonces-stages-formations-seminaires-cours-26-0.html"
                    },
                    {
                        "name": "Se\n            rencontrer",
                        "url": "http://www.eco-bio.info/forum/upload/forum/97-se-rencontrer-entre-membres/"
                    },
                    {
                        "name": "Rencontre régionale",
                        "url": "http://www.eco-bio.info/forum/upload/forum/100-forums-regionaux/"
                    },
                    {
                        "name": "Newsletter",
                        "url": "http://wiki.couchsurfing.com/en/French_CS_Newsletter"
                    },
                    {
                        "name": "Squat.net",
                        "url": "http://squat.net/fr/news/index.html"
                    },
                    {
                        "name": "Rainbowfamilyfrance.wordpress.com",
                        "url": "http://rainbowfamilyfrance.wordpress.com/category/rencontres/"
                    },
                    {
                        "name": "Dates des prochains rassemblements",
                        "url": "http://rainbow-gatherings.blogspot.com/"
                    },
                    {
                        "name": "https://x.com/share?text=La%20porte%20du%20temps&url=https%3A%2F%2Fecoclash.jimdofree.com%2Fsynergies-liens%2Fla-porte-du-temps%2F",
                        "url": "https://x.com/share?text=La%20porte%20du%20temps&url=https%3A%2F%2Fecoclash.jimdofree.com%2Fsynergies-liens%2Fla-porte-du-temps%2F"
                    }
                ]
            },
            {
                "url": "https://ecoclash.jimdofree.com/tout-les-articles/",
                "title": "News",
                "intro": "Les perles des archives...",
                "links": [
                    {
                        "name": "Comment tresser un panier avec du papier journal, vannerie de papier, recup",
                        "url": "/2014/08/25/comment-tresser-un-panier-avec-du-papier-journal-vannerie-de-papier-recup/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/25/comment-tresser-un-panier-avec-du-papier-journal-vannerie-de-papier-recup/"
                    },
                    {
                        "name": "4 commentaires",
                        "url": "/2014/08/25/comment-tresser-un-panier-avec-du-papier-journal-vannerie-de-papier-recup/#commentsModule10074564922"
                    },
                    {
                        "name": "Pratique - Comment construire une yourte",
                        "url": "/2014/08/10/pratique-comment-construire-une-yourte/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/10/pratique-comment-construire-une-yourte/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/10/pratique-comment-construire-une-yourte/#commentsModule9992286322"
                    },
                    {
                        "name": "Les perles des Archives / Vol1",
                        "url": "/2015/08/15/les-perles-des-archives-vol1/"
                    },
                    {
                        "name": "Tous les livres de Gardner Dexter",
                        "url": "https://archive.org/search.php?query=creator%3A%22Hiscox%2C+Gardner+Dexter%2C+1822%3F-1908%22"
                    },
                    {
                        "name": "Henley's twentieth century forrmulas",
                        "url": "https://archive.org/details/henleystwentieth00hiscrich"
                    },
                    {
                        "name": "Mechanical movements, powers, devices and\n    applicances",
                        "url": "https://archive.org/details/mechanicalmovem04hiscgoog"
                    },
                    {
                        "name": "Mechanical appliances, mechanical movements and novelties of\n    construction",
                        "url": "https://archive.org/details/mechanicalappli00dextgoog"
                    },
                    {
                        "name": "Receipts and remedies",
                        "url": "https://archive.org/details/receiptsandreme00flemgoog"
                    },
                    {
                        "name": "The engineer's sketch-book of mechanical movements, devices, appliances",
                        "url": "https://archive.org/details/engineerssketchb00barb"
                    },
                    {
                        "name": "Five hundred and seven mechanial movements",
                        "url": "https://archive.org/details/fivehundredseven02brow"
                    },
                    {
                        "name": "The Dangerous Book for Boys",
                        "url": "http://kat.cr/the-dangerous-book-for-boys-us-by-conn-and-hal-iggulden-retail-dwg-t9511544.html"
                    },
                    {
                        "name": "Backyard ballistics",
                        "url": "http://kat.cr/backyard-ballistics-epub-retail-32skulls-t9572218.html"
                    },
                    {
                        "name": "Absinthe and Flamethrowers",
                        "url": "http://kat.cr/william-gurstelle-absinthe-and-flamethrowers-projects-and-ruminations-on-the-art-of-living-dangerously-epub-plex-t10379851.html"
                    },
                    {
                        "name": "Scientific American handy book of facts and\n    formulae",
                        "url": "https://archive.org/details/scientificameric03hopk"
                    },
                    {
                        "name": "Encyclopedia of practical receipts and processes",
                        "url": "https://archive.org/details/encyclopediaofpr00dickrich"
                    },
                    {
                        "name": "Magic; stage illusions and scientific diversions",
                        "url": "https://archive.org/details/magicstageillusi00hopk"
                    },
                    {
                        "name": "Uncle Josh's trunk-full of fun",
                        "url": "https://archive.org/details/unclejoshstrunkf00dick"
                    },
                    {
                        "name": "What shall we do to-night?",
                        "url": "https://archive.org/details/whatshallwedoton00dickrich"
                    },
                    {
                        "name": "Bulletins d'arboriculture, de culture potagère et de floriculture",
                        "url": "https://archive.org/details/bulletinsdarbor04unkngoog"
                    },
                    {
                        "name": "1 commentaires",
                        "url": "/2015/08/15/les-perles-des-archives-vol1/#commentsModule12279021122"
                    },
                    {
                        "name": "Le Kiosques Autonomes",
                        "url": "/2014/09/14/le-kiosques-autonomes/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/09/14/le-kiosques-autonomes/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/09/14/le-kiosques-autonomes/#commentsModule10302692422"
                    },
                    {
                        "name": "Autoconstruction - special vroutsch / 1972",
                        "url": "/2014/09/14/autoconstruction-special-vroutsch-1972/"
                    },
                    {
                        "name": "Auto.Construction.-.Special.vroutsch",
                        "url": "http://www.mediafire.com/view/m67z4zsa18d4yn4/Auto.Construction.-.Special.vroutsch.-.1972.-.71p.pdf"
                    },
                    {
                        "name": "http://alphazomes.org",
                        "url": "http://alphazomes.org%20"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/09/14/autoconstruction-special-vroutsch-1972/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/09/14/autoconstruction-special-vroutsch-1972/#commentsModule10302261522"
                    },
                    {
                        "name": "Habitats - Construction traditionnelles et marginales",
                        "url": "/2014/08/14/habitats-construction-traditionnelles-et-marginales/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "#",
                        "url": "http://www.mediafire.com/view/?9879kcgolypri0v"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/14/habitats-construction-traditionnelles-et-marginales/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/14/habitats-construction-traditionnelles-et-marginales/#commentsModule10012034222"
                    },
                    {
                        "name": "Autoconstruction d'une yourte locale",
                        "url": "/2014/09/03/autoconstruction-d-une-yourte-locale/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/09/03/autoconstruction-d-une-yourte-locale/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/09/03/autoconstruction-d-une-yourte-locale/#commentsModule10198578622"
                    },
                    {
                        "name": "Faites tout vous même / Savoir revivre / Revivre à la campagne",
                        "url": "/2014/08/25/faites-tout-vous-m%C3%AAme-savoir-revivre-revivre-%C3%A0-la-campagne/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/25/faites-tout-vous-m%C3%AAme-savoir-revivre-revivre-%C3%A0-la-campagne/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/25/faites-tout-vous-m%C3%AAme-savoir-revivre-revivre-%C3%A0-la-campagne/#commentsModule10075095722"
                    },
                    {
                        "name": "Recettes végétalienne, Guide végétarien et végétalien, Alimentation vivante",
                        "url": "/2014/08/25/recettes-v%C3%A9g%C3%A9talienne-guide-v%C3%A9g%C3%A9tarien-et-v%C3%A9g%C3%A9talien-alimentation-vivante/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/25/recettes-v%C3%A9g%C3%A9talienne-guide-v%C3%A9g%C3%A9tarien-et-v%C3%A9g%C3%A9talien-alimentation-vivante/"
                    },
                    {
                        "name": "1 commentaires",
                        "url": "/2014/08/25/recettes-v%C3%A9g%C3%A9talienne-guide-v%C3%A9g%C3%A9tarien-et-v%C3%A9g%C3%A9talien-alimentation-vivante/#commentsModule10074949322"
                    },
                    {
                        "name": "Habitats d'urgence, autoconstruction bioclimatique",
                        "url": "/2014/08/14/habitats-d-urgence-autoconstruction-bioclimatique/"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/14/habitats-d-urgence-autoconstruction-bioclimatique/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/14/habitats-d-urgence-autoconstruction-bioclimatique/#commentsModule10012096322"
                    },
                    {
                        "name": "Comment fabriquer un tipi (tepee)? Plan, tuto, images",
                        "url": "/2014/08/14/comment-fabriquer-un-tipi-tepee-plan-tuto-images/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/14/comment-fabriquer-un-tipi-tepee-plan-tuto-images/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/14/comment-fabriquer-un-tipi-tepee-plan-tuto-images/#commentsModule10011632722"
                    },
                    {
                        "name": "Apiculture pour tous, ruche du peuple, Warre, topbar",
                        "url": "/2014/08/14/apiculture-pour-tous-ruche-du-peuple-warre-topbar/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/14/apiculture-pour-tous-ruche-du-peuple-warre-topbar/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/14/apiculture-pour-tous-ruche-du-peuple-warre-topbar/#commentsModule10011074622"
                    },
                    {
                        "name": "Comment cultiver, produire et transformer la spiruline",
                        "url": "/2014/08/14/comment-cultiver-produire-et-transformer-la-spiruline/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/14/comment-cultiver-produire-et-transformer-la-spiruline/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/14/comment-cultiver-produire-et-transformer-la-spiruline/#commentsModule10011177022"
                    },
                    {
                        "name": "Comment construire un dôme géodésique",
                        "url": "/2014/08/14/comment-construire-un-d%C3%B4me-g%C3%A9od%C3%A9sique/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/14/comment-construire-un-d%C3%B4me-g%C3%A9od%C3%A9sique/"
                    },
                    {
                        "name": "1 commentaires",
                        "url": "/2014/08/14/comment-construire-un-d%C3%B4me-g%C3%A9od%C3%A9sique/#commentsModule10011230022"
                    },
                    {
                        "name": "# NDDL - ZAD",
                        "url": "/2014/08/11/nddl-zad/"
                    },
                    {
                        "name": "http://zad.nadir.org/",
                        "url": "http://zad.nadir.org/"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/11/nddl-zad/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/11/nddl-zad/#commentsModule9996823122"
                    },
                    {
                        "name": "Comment faire de l'alcool, bière, cidre, vin...",
                        "url": "/2014/08/11/pratique-comment-faire-de-l-alcool-bi%C3%A8re-cidre-vin/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/11/pratique-comment-faire-de-l-alcool-bi%C3%A8re-cidre-vin/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/11/pratique-comment-faire-de-l-alcool-bi%C3%A8re-cidre-vin/#commentsModule9996768722"
                    },
                    {
                        "name": "Pratique - Comment faire du pain",
                        "url": "/2014/08/11/pratique-comment-faire-du-pain/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/11/pratique-comment-faire-du-pain/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/11/pratique-comment-faire-du-pain/#commentsModule9996748222"
                    },
                    {
                        "name": "La culture des champignons - mycologie",
                        "url": "/2014/08/10/la-culture-des-champignons-mycologie/"
                    },
                    {
                        "name": "javascript:",
                        "url": "javascript:"
                    },
                    {
                        "name": "Lire la suite",
                        "url": "/2014/08/10/la-culture-des-champignons-mycologie/"
                    },
                    {
                        "name": "0 commentaires",
                        "url": "/2014/08/10/la-culture-des-champignons-mycologie/#commentsModule9992806822"
                    }
                ]
            },
            {
                "url": "https://ecoclash.jimdofree.com/contact/",
                "title": "Formulaire de contact",
                "intro": "\"Si vous avez l'impression que vous êtes trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique. . .et vous verrez lequel des deux empêche l'autre de dormir\n    !\"  Dalaï Lama",
                "links": [
                    {
                        "name": "Politique de confidentialité",
                        "url": "/j/privacy"
                    }
                ]
            }
        ]
    }
];


    /* --- 5. APP STATE --- */
    let currentLang = localStorage.getItem('eco_lang') || 'fr';
    let currentTheme = localStorage.getItem('eco_theme') || 'light';
    let activeCategory = 'all';
    let activeBookmarkGroup = 'mediatheque';
    let searchQuery = '';

    const DOM = {
        body: document.body,
        langSelect: document.getElementById('lang-select'),
        themeToggle: document.getElementById('theme-toggle'),
        mobileMenuBtn: document.getElementById('mobile-menu-btn'),
        mobileDrawer: document.getElementById('mobile-drawer'),
        closeDrawerBtn: document.getElementById('close-drawer-btn'),
        navLinks: document.querySelectorAll('.nav-item, .mobile-nav-item, [data-nav-btn]'),
        sections: document.querySelectorAll('.section-container'),
        categoriesContainer: document.getElementById('categories-container'),
        articlesGrid: document.getElementById('articles-grid'),
        articleCount: document.getElementById('article-count'),
        searchInput: document.getElementById('search-input'),
        clearSearchBtn: document.getElementById('clear-search'),
        noResults: document.getElementById('no-results'),
        resetFiltersBtn: document.getElementById('reset-filters-btn'),
        bookmarksTabs: document.getElementById('bookmarks-tabs'),
        bookmarksGrid: document.getElementById('bookmarks-grid'),
        dailyQuoteText: document.getElementById('daily-quote-text'),
        logoLink: document.getElementById('logo-link'),
        backToTop: document.getElementById('back-to-top'),
        
        // Modal
        modal: document.getElementById('article-modal'),
        modalBackdrop: document.getElementById('modal-backdrop'),
        modalClose: document.getElementById('modal-close'),
        modalCategory: document.getElementById('modal-category'),
        modalDate: document.getElementById('modal-date'),
        modalTitle: document.getElementById('modal-title'),
        modalImageBox: document.getElementById('modal-image-box'),
        modalImage: document.getElementById('modal-image'),
        modalTextContent: document.getElementById('modal-text-content'),
        modalResourceLinks: document.getElementById('modal-resource-links'),
        modalTags: document.getElementById('modal-tags'),
        btnCopyLink: document.getElementById('btn-copy-link'),
        copyLinkText: document.getElementById('copy-link-text')
    };

    /* --- 6. INITIALIZATION --- */
    const initApp = () => {
        applyTheme(currentTheme);
        DOM.langSelect.value = currentLang;
        updateLanguage(currentLang);
        bindEvents();
        renderBookmarkTabs();
        renderBookmarks();
        renderArticles();
    };

    /* --- 7. THEME HANDLER --- */
    const applyTheme = (theme) => {
        currentTheme = theme;
        if (theme === 'dark') {
            DOM.body.classList.remove('light-mode');
            DOM.body.classList.add('dark-mode');
        } else {
            DOM.body.classList.remove('dark-mode');
            DOM.body.classList.add('light-mode');
        }
        localStorage.setItem('eco_theme', theme);
    };

    const toggleTheme = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    };

    /* --- 8. LANGUAGE HANDLER --- */
    const updateLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('eco_lang', lang);

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[lang] && i18n[lang][key]) {
                el.innerHTML = i18n[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (i18n[lang] && i18n[lang][key]) {
                el.setAttribute('placeholder', i18n[lang][key]);
            }
        });

        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (i18n[lang] && i18n[lang][key]) {
                el.setAttribute('title', i18n[lang][key]);
            }
        });

        DOM.dailyQuoteText.innerHTML = '"' + quoteData[lang] + '"';

        renderBookmarkTabs();
        renderBookmarks();
        renderArticles();
    };

    /* --- 9. BOOKMARKS & SITEMAP HANDLER --- */
    const renderBookmarkTabs = () => {
        DOM.bookmarksTabs.innerHTML = '';
        bookmarkGroups.forEach(bg => {
            const title = bg.title[currentLang];
            const btn = document.createElement('button');
            btn.className = 'cat-btn bk-tab-btn' + (bg.id === activeBookmarkGroup ? ' active' : '');
            btn.setAttribute('data-bg', bg.id);
            btn.innerHTML = '<span>' + bg.icon + ' ' + title + ' (' + bg.pages.length + ')</span>';
            
            btn.addEventListener('click', () => {
                DOM.bookmarksTabs.querySelectorAll('.bk-tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeBookmarkGroup = bg.id;
                renderBookmarks();
            });

            DOM.bookmarksTabs.appendChild(btn);
        });
    };

    const renderBookmarks = () => {
        DOM.bookmarksGrid.innerHTML = '';
        const group = bookmarkGroups.find(g => g.id === activeBookmarkGroup);
        if (!group || group.pages.length === 0) return;

        group.pages.forEach(pg => {
            const sectionCard = document.createElement('div');
            sectionCard.className = 'bookmark-section-card';
            
            let html = '<div class="bk-sec-header"><h3>📁 ' + pg.title + '</h3>';
            if (pg.intro && pg.intro.length > 5) {
                html += "<p class='bk-sec-intro'>" + pg.intro + "</p>";
            }
            html += '</div><div class="bk-links-list">';

            if (pg.links && pg.links.length > 0) {
                pg.links.forEach(l => {
                    html += '<a href="' + l.url + '" target="_blank" rel="noopener noreferrer" class="bk-link-item"><span class="bk-link-icon">🔗</span><span class="bk-link-name">' + l.name + '</span><span class="bk-link-arrow">↗</span></a>';
                });
            } else {
                html += "<p class='bk-no-links'>🌿 Section documentaire de l'infokiosque d'origine.</p>";
            }

            html += '</div>';
            sectionCard.innerHTML = html;
            DOM.bookmarksGrid.appendChild(sectionCard);
        });
    };

    /* --- 10. ARTICLES GRID & FILTERS --- */
    const filterArticlesData = () => {
        return articles.filter(art => {
            const matchCat = activeCategory === 'all' || art.category === activeCategory;
            if (!matchCat) return false;

            if (!searchQuery) return true;

            const q = searchQuery.toLowerCase();
            const title = art.title[currentLang].toLowerCase();
            const desc = art.desc[currentLang].toLowerCase();
            const tags = art.tags.join(' ').toLowerCase();

            return title.includes(q) || desc.includes(q) || tags.includes(q);
        });
    };

    const renderArticles = () => {
        const filtered = filterArticlesData();
        DOM.articlesGrid.innerHTML = '';

        const countLabel = currentLang === 'fr' ? filtered.length + ' article(s)' : currentLang === 'en' ? filtered.length + ' guide(s)' : filtered.length + ' guía(s)';
        DOM.articleCount.textContent = countLabel;

        if (filtered.length === 0) {
            DOM.noResults.classList.remove('hidden');
        } else {
            DOM.noResults.classList.add('hidden');
            
            filtered.forEach(art => {
                const title = art.title[currentLang];
                const desc = art.desc[currentLang];
                const catBadge = DOM.categoriesContainer.querySelector('[data-cat="' + art.category + '"]').textContent;
                const readBtnLabel = i18n[currentLang].readMoreBtn;
                const readTimeLabel = i18n[currentLang].readingTime;
                const downPrefix = i18n[currentLang].downloadPrefix;
                const fallbackTitle = i18n[currentLang].noImageFallback;
                
                const card = document.createElement('article');
                card.className = 'article-card';
                card.setAttribute('data-id', art.id);

                let imageHtml = '';
                if (art.image) {
                    imageHtml = '<img src="' + art.image + '" alt="' + title + '" loading="lazy">';
                } else {
                    imageHtml = '<div class="no-img-banner"><span>🌿</span><span class="no-img-text">' + fallbackTitle + '</span></div>';
                }

                let downloadsHtml = '';
                if (art.downloads && art.downloads.length > 0) {
                    downloadsHtml = '<div class="card-downloads-quick">';
                    art.downloads.slice(0, 2).forEach(d => {
                        downloadsHtml += '<a href="' + d.url + '" target="_blank" rel="noopener noreferrer" class="btn-down-quick" title="' + d.name + '">📥 ' + downPrefix + ' (' + (d.name.length > 18 ? d.name.slice(0,18)+'...' : d.name) + ')</a>';
                    });
                    downloadsHtml += '</div>';
                }

                card.innerHTML = '<div class="card-image-wrapper"><span class="card-badge">' + catBadge + '</span>' + imageHtml + '</div>' +
                    '<div class="card-content"><div class="card-meta"><span>' + art.date + '</span><span>⏳ ' + art.readingTime + ' ' + readTimeLabel + '</span></div>' +
                    '<h3 class="card-title"><a href="#" class="article-click-trigger">' + title + '</a></h3>' +
                    '<p class="card-desc">' + desc + '</p>' + downloadsHtml +
                    '<div class="card-tags">' + art.tags.map(t => '<span class="tag">#' + t + '</span>').join('') + '</div>' +
                    '<div class="card-footer"><button class="btn-read article-click-trigger"><span>' + readBtnLabel + '</span>' +
                    '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>' +
                    '</button><span class="card-reactions" title="Infokiosque">🌿 Savoir Libre</span></div></div>';

                card.querySelectorAll('.article-click-trigger').forEach(trig => {
                    trig.addEventListener('click', (e) => {
                        e.preventDefault();
                        openArticleModal(art);
                    });
                });

                DOM.articlesGrid.appendChild(card);
            });
        }
    };

    /* --- 11. FULL ARTICLE MODAL (NO Fake Comments) --- */
    const openArticleModal = (art) => {
        const title = art.title[currentLang];
        const content = art.content[currentLang];
        const catBadge = DOM.categoriesContainer.querySelector('[data-cat="' + art.category + '"]').textContent;
        const downPrefix = i18n[currentLang].downloadPrefix;

        DOM.modalCategory.textContent = catBadge;
        DOM.modalDate.textContent = art.date;
        DOM.modalTitle.textContent = title;

        if (art.image) {
            DOM.modalImageBox.classList.remove('hidden');
            DOM.modalImage.setAttribute('src', art.image);
            DOM.modalImage.setAttribute('alt', title);
        } else {
            DOM.modalImageBox.classList.add('hidden');
        }

        DOM.modalTextContent.innerHTML = content;

        DOM.modalResourceLinks.innerHTML = '';
        if (art.downloads && art.downloads.length > 0) {
            DOM.modalResourceLinks.parentElement.classList.remove('hidden');
            art.downloads.forEach(res => {
                const link = document.createElement('a');
                link.className = 'resource-item';
                link.setAttribute('href', res.url);
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
                link.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg><span>' + downPrefix + ' : <strong>' + res.name + '</strong></span><span class="external-hint">↗</span>';
                DOM.modalResourceLinks.appendChild(link);
            });
        } else {
            DOM.modalResourceLinks.parentElement.classList.add('hidden');
        }

        DOM.modalTags.innerHTML = art.tags.map(t => '<span class="tag">#' + t + '</span>').join('');

        DOM.copyLinkText.textContent = i18n[currentLang].copyLinkBtn;
        DOM.btnCopyLink.onclick = () => {
            const link = window.location.href.split('#')[0] + '#article-' + art.id;
            navigator.clipboard.writeText(link).then(() => {
                DOM.copyLinkText.textContent = i18n[currentLang].copiedLinkBtn;
                setTimeout(() => {
                    DOM.copyLinkText.textContent = i18n[currentLang].copyLinkBtn;
                }, 3000);
            });
        };

        DOM.modal.classList.add('open');
        DOM.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        DOM.modal.classList.remove('open');
        DOM.body.style.overflow = '';
    };

    /* --- 12. EVENT LISTENERS SETUP --- */
    const bindEvents = () => {
        DOM.themeToggle.addEventListener('click', toggleTheme);

        DOM.langSelect.addEventListener('change', (e) => {
            updateLanguage(e.target.value);
        });

        if (DOM.mobileMenuBtn) {
            DOM.mobileMenuBtn.addEventListener('click', () => {
                DOM.mobileDrawer.classList.add('open');
            });
        }
        if (DOM.closeDrawerBtn) {
            DOM.closeDrawerBtn.addEventListener('click', () => {
                DOM.mobileDrawer.classList.remove('open');
            });
        }

        DOM.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetNav = link.getAttribute('data-nav') || link.getAttribute('data-nav-btn');
                if (!targetNav) return;

                e.preventDefault();
                if (DOM.mobileDrawer.classList.contains('open')) {
                    DOM.mobileDrawer.classList.remove('open');
                }

                DOM.sections.forEach(sec => sec.classList.remove('active-section'));
                const targetSec = document.getElementById(targetNav);
                if (targetSec) {
                    targetSec.classList.add('active-section');
                    targetSec.scrollIntoView({ behavior: 'smooth' });
                }

                DOM.navLinks.forEach(l => l.classList.remove('active'));
                document.querySelectorAll('[data-nav="' + targetNav + '"]').forEach(l => l.classList.add('active'));
            });
        });

        const catButtons = DOM.categoriesContainer.querySelectorAll('.cat-btn');
        catButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                catButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeCategory = btn.getAttribute('data-cat') || 'all';
                renderArticles();
            });
        });

        DOM.searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            if (searchQuery.length > 0) {
                DOM.clearSearchBtn.classList.remove('hidden');
            } else {
                DOM.clearSearchBtn.classList.add('hidden');
            }
            renderArticles();
        });

        DOM.clearSearchBtn.addEventListener('click', () => {
            DOM.searchInput.value = '';
            searchQuery = '';
            DOM.clearSearchBtn.classList.add('hidden');
            renderArticles();
            DOM.searchInput.focus();
        });

        DOM.resetFiltersBtn.addEventListener('click', () => {
            DOM.searchInput.value = '';
            searchQuery = '';
            DOM.clearSearchBtn.classList.add('hidden');
            activeCategory = 'all';
            catButtons.forEach(b => b.classList.remove('active'));
            DOM.categoriesContainer.querySelector('[data-cat="all"]').classList.add('active');
            renderArticles();
        });

        DOM.modalClose.addEventListener('click', closeModal);
        DOM.modalBackdrop.addEventListener('click', closeModal);
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && DOM.modal.classList.contains('open')) {
                closeModal();
            }
        });

        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                DOM.backToTop.classList.add('visible');
            } else {
                DOM.backToTop.classList.remove('visible');
            }
        });

        DOM.backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        DOM.logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('[data-nav="articles"]').click();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        const hash = window.location.hash;
        if (hash && hash.startsWith('#article-')) {
            const artId = hash.replace('#article-', '');
            const targetArt = articles.find(a => a.id === artId);
            if (targetArt) {
                setTimeout(() => {
                    openArticleModal(targetArt);
                }, 400);
            }
        }
    };

    initApp();
});
