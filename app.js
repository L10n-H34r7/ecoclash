/* ==========================================================================
   ECOCLASH — COMPLETE VANILLA JAVASCRIPT APPLICATION (FR/EN/ES)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. MULTILINGUAL TRANSLATION DICTIONARY --- */
    const i18n = {
        fr: {
            // Navbar & Global
            skipLink: "Aller au contenu principal",
            navArticles: "Articles & Guides",
            navManifesto: "Infokiosque",
            navSynergies: "Synergies & Liens",
            navParticipate: "Participer",
            themeToggleTitle: "Mode sombre / Mode clair",
            nextQuoteTitle: "Citation suivante",
            
            // Hero
            heroTitle: "Autonomie, Écologie & <span class='gradient-text'>Résistance Pratique</span>",
            heroSubtitle: "Partage de savoirs, Infokiosque, alternatives pratiques, autoconstruction, décroissance, permaculture, communautés autonomes et action directe.",
            heroBtnExplore: "Explorer la Médiathèque",
            heroBtnManifesto: "Notre Démarche",

            // Articles Section
            sectionArticlesTitle: "Savoirs & Guides Pratiques",
            sectionArticlesDesc: "Une base de connaissances libre et accessible pour expérimenter, construire et s'émanciper.",
            searchPlaceholder: "Rechercher un tutoriel, yourte, pain, dôme...",
            loading: "Chargement des savoirs...",
            
            // Categories
            catAll: "Tout les articles",
            catHabitat: "Habitat & Autoconstruction",
            catPermaculture: "Cultiver & Jardiner",
            catProduction: "Production & Transformation",
            catArtisanat: "Artisanat & Récup'",
            catMediatheque: "Médiathèque & Archives",
            catAction: "Action & Luttes (ZAD)",

            // No Results
            noResultsTitle: "Aucun article ne correspond à votre recherche",
            noResultsDesc: "Essayez d'autres mots-clés ou sélectionnez une autre catégorie.",
            btnResetFilters: "Réinitialiser les filtres",

            // Card Elements
            readMoreBtn: "Lire la suite",
            readingTime: "min de lecture",

            // Manifesto Section
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

            // Synergies Section
            synergiesTitle: "Synergies & Liens Amis",
            synergiesSubtitle: "Réseaux, collectifs et plateformes qui partagent notre horizon.",
            synergyVisitBtn: "Visiter le site",

            // Participate / Contact
            participateTitle: "Contribuer & Participer",
            participateSubtitle: "Ce site est un outil collectif. Partagez vos propres tutoriels, livres ou retours d'expérience.",
            contactInfoTitle: "Faites tourner les savoirs !",
            contactInfoText1: "Vous avez construit un habitat atypique, rédigé une brochure, ou découvert une pépite dans les archives libres ?",
            contactInfoText2: "Écrivez-nous via ce formulaire sécurisé pour que nous puissions l'ajouter à l'infokiosque.",
            perk1: "100% Anonyme si souhaité",
            perk2: "Open-Source & Sans droits commerciaux",
            perk3: "Hébergé durablement sur GitHub Pages",
            formNameLabel: "Votre pseudo / nom :",
            formNamePlaceholder: "Ex: Louise Michel",
            formEmailLabel: "Adresse e-mail (optionnel) :",
            formEmailPlaceholder: "pour vous répondre...",
            formSubjectLabel: "Sujet de votre contribution :",
            formSubOption1: "Proposer un tutoriel ou guide PDF",
            formSubOption2: "Suggérer un site ami (Synergies)",
            formSubOption3: "Signaler un lien mort ou une correction",
            formSubOption4: "Petit mot d'encouragement ou contact",
            formMessageLabel: "Votre message ou lien de téléchargement :",
            formMessagePlaceholder: "Partagez vos liens (Framadrop, Archive.org, Mediafire, etc.) ou décrivez votre projet ici...",
            formSubmitBtn: "Envoyer la contribution",
            formSuccessMsg: "Merci ! Votre message a été transmis avec succès. À bientôt !",

            // Modal & Comments
            modalResourcesTitle: "Documents & Téléchargements Libres :",
            shareArticle: "Partager ce savoir :",
            copyLinkBtn: "Copier le lien",
            copiedLinkBtn: "Lien copié !",
            reactionLabel: "Inspirant",
            commentsHeader: "Discussions & Retours",
            quickCommentAuthor: "Votre pseudo...",
            quickCommentText: "Ajouter une question, une astuce ou un retour d'expérience...",
            quickCommentSubmit: "Publier le commentaire",

            // Footer
            footerBio: "Version améliorée, modernisée et mise à jour (Remake 2026). Partage de savoirs d'autonomie, d'autoconstruction et d'écologie de lutte. Conçu en pure Vanilla HTML / CSS / JS pour GitHub Pages.",
            footerOpenSource: "Savoirs Libres pour un Monde Libre",
            footerNavTitle: "Navigation",
            footerTechTitle: "Spécifications Techniques",
            footerReadmeLink: "📖 Consulter le README.md"
        },
        en: {
            // Navbar & Global
            skipLink: "Skip to main content",
            navArticles: "Articles & Guides",
            navManifesto: "Infokiosk",
            navSynergies: "Synergies & Links",
            navParticipate: "Participate",
            themeToggleTitle: "Dark mode / Light mode",
            nextQuoteTitle: "Next quote",
            
            // Hero
            heroTitle: "Autonomy, Ecology & <span class='gradient-text'>Practical Resistance</span>",
            heroSubtitle: "Knowledge sharing, Infokiosk, practical DIY alternatives, degrowth, permaculture, autonomous eco-communities, and direct action.",
            heroBtnExplore: "Explore Media Library",
            heroBtnManifesto: "Our Approach",

            // Articles Section
            sectionArticlesTitle: "Knowledge & Practical Guides",
            sectionArticlesDesc: "An open and accessible knowledge base to experiment, build, and achieve self-reliance.",
            searchPlaceholder: "Search for a tutorial, yurt, bread, dome...",
            loading: "Loading knowledge base...",
            
            // Categories
            catAll: "All articles",
            catHabitat: "Habitat & Self-Building",
            catPermaculture: "Gardening & Permaculture",
            catProduction: "Production & Processing",
            catArtisanat: "Crafts & Upcycling",
            catMediatheque: "Media Library & Archives",
            catAction: "Action & Struggles (ZAD)",

            // No Results
            noResultsTitle: "No articles match your search",
            noResultsDesc: "Try searching with different keywords or selecting another category.",
            btnResetFilters: "Reset filters",

            // Card Elements
            readMoreBtn: "Read more",
            readingTime: "min read",

            // Manifesto Section
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

            // Synergies Section
            synergiesTitle: "Synergies & Friendly Links",
            synergiesSubtitle: "Networks, collectives, and platforms sharing our horizon.",
            synergyVisitBtn: "Visit website",

            // Participate / Contact
            participateTitle: "Contribute & Participate",
            participateSubtitle: "This website is a collective tool. Share your own tutorials, open books, or practical experiences.",
            contactInfoTitle: "Keep the knowledge circulating!",
            contactInfoText1: "Have you built an unconventional dwelling, written a zine, or discovered a rare technical gem in open archives?",
            contactInfoText2: "Write to us via this secure form so we can add it to the infokiosk.",
            perk1: "100% Anonymous if desired",
            perk2: "Open-Source & No commercial rights",
            perk3: "Sustainably hosted on GitHub Pages",
            formNameLabel: "Your alias / name:",
            formNamePlaceholder: "Ex: Henry David Thoreau",
            formEmailLabel: "Email address (optional):",
            formEmailPlaceholder: "if you'd like a reply...",
            formSubjectLabel: "Subject of your contribution:",
            formSubOption1: "Submit a tutorial or PDF guide",
            formSubOption2: "Suggest a friendly website (Synergies)",
            formSubOption3: "Report a broken link or correction",
            formSubOption4: "A word of encouragement or contact",
            formMessageLabel: "Your message or download link:",
            formMessagePlaceholder: "Share your download links (Archive.org, Framadrop, etc.) or describe your DIY project here...",
            formSubmitBtn: "Send Contribution",
            formSuccessMsg: "Thank you! Your message has been successfully transmitted.",

            // Modal & Comments
            modalResourcesTitle: "Free Documents & Downloads:",
            shareArticle: "Share this knowledge:",
            copyLinkBtn: "Copy link",
            copiedLinkBtn: "Link copied!",
            reactionLabel: "Inspiring",
            commentsHeader: "Discussions & Feedback",
            quickCommentAuthor: "Your alias...",
            quickCommentText: "Add a question, DIY tip, or feedback...",
            quickCommentSubmit: "Post comment",

            // Footer
            footerBio: "Upgraded, modernized, and updated version (Remake 2026). Sharing practical self-reliance, self-building, and ecological resistance wisdom. Built in pure Vanilla HTML / CSS / JS for GitHub Pages.",
            footerOpenSource: "Free Knowledge for a Free World",
            footerNavTitle: "Navigation",
            footerTechTitle: "Technical Specifications",
            footerReadmeLink: "📖 View README.md"
        },
        es: {
            // Navbar & Global
            skipLink: "Saltar al contenido principal",
            navArticles: "Artículos y Guías",
            navManifesto: "Infokiosco",
            navSynergies: "Sinergias y Enlaces",
            navParticipate: "Participar",
            themeToggleTitle: "Modo oscuro / Modo claro",
            nextQuoteTitle: "Siguiente frase",
            
            // Hero
            heroTitle: "Autonomía, Ecología y <span class='gradient-text'>Resistencia Práctica</span>",
            heroSubtitle: "Intercambio de saberes, Infokiosco, alternativas prácticas de bricolaje, decrecimiento, permacultura, comunidades autónomas y acción directa.",
            heroBtnExplore: "Explorar Mediateca",
            heroBtnManifesto: "Nuestro Enfoque",

            // Articles Section
            sectionArticlesTitle: "Saberes y Guías Prácticas",
            sectionArticlesDesc: "Una base de conocimientos libre y accesible para experimentar, construir y emanciparse.",
            searchPlaceholder: "Buscar un tutorial, yurt, pan, domo...",
            loading: "Cargando el conocimiento...",
            
            // Categories
            catAll: "Todos los artículos",
            catHabitat: "Hábitat y Autoconstrucción",
            catPermaculture: "Cultivo y Jardinería",
            catProduction: "Producción y Transformación",
            catArtisanat: "Artesanía y Reciclaje",
            catMediatheque: "Mediateca y Archivos",
            catAction: "Acción y Luchas (ZAD)",

            // No Results
            noResultsTitle: "Ningún artículo coincide con tu búsqueda",
            noResultsDesc: "Intenta buscar con otras palabras clave o selecciona otra categoría.",
            btnResetFilters: "Restablecer filtros",

            // Card Elements
            readMoreBtn: "Leer más",
            readingTime: "min de lectura",

            // Manifesto Section
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

            // Synergies Section
            synergiesTitle: "Sinergias y Enlaces Amigos",
            synergiesSubtitle: "Redes, colectivos y plataformas que comparten nuestro horizonte.",
            synergyVisitBtn: "Visitar sitio web",

            // Participate / Contact
            participateTitle: "Contribuir y Participar",
            participateSubtitle: "Este sitio es una herramienta colectiva. Comparte tus propios tutoriales, libros libres o experiencias prácticas.",
            contactInfoTitle: "¡Haz circular los saberes!",
            contactInfoText1: "¿Has construido una vivienda alternativa, escrito un fanzine o descubierto una joya técnica en archivos libres?",
            contactInfoText2: "Escríbenos a través de este formulario seguro para que podamos sumarlo al infokiosco.",
            perk1: "100% Anónimo si lo prefieres",
            perk2: "Open-Source y Sin derechos comerciales",
            perk3: "Alojado de forma duradera en GitHub Pages",
            formNameLabel: "Tu alias / nombre:",
            formNamePlaceholder: "Ej: Emiliano Zapata",
            formEmailLabel: "Correo electrónico (opcional):",
            formEmailPlaceholder: "para responderte...",
            formSubjectLabel: "Tema de tu contribución:",
            formSubOption1: "Proponer un tutorial o guía PDF",
            formSubOption2: "Sugerir un sitio amigo (Sinergias)",
            formSubOption3: "Reportar un enlace roto o corrección",
            formSubOption4: "Un mensaje de aliento o contacto",
            formMessageLabel: "Tu mensaje o enlace de descarga:",
            formMessagePlaceholder: "Comparte tus enlaces de descarga (Archive.org, Framadrop, etc.) o describe tu proyecto aquí...",
            formSubmitBtn: "Enviar Contribución",
            formSuccessMsg: "¡Gracias! Tu mensaje se ha transmitido correctamente.",

            // Modal & Comments
            modalResourcesTitle: "Documentos y Descargas Libres:",
            shareArticle: "Compartir este saber:",
            copyLinkBtn: "Copiar enlace",
            copiedLinkBtn: "¡Enlace copiado!",
            reactionLabel: "Inspirador",
            commentsHeader: "Discusiones y Comentarios",
            quickCommentAuthor: "Tu alias...",
            quickCommentText: "Añade una pregunta, un truco o experiencia...",
            quickCommentSubmit: "Publicar comentario",

            // Footer
            footerBio: "Versión mejorada, modernizada y actualizada (Remake 2026). Intercambio de saberes de autonomía, autoconstrucción y resistencia ecológica. Creado en puro Vanilla HTML / CSS / JS para GitHub Pages.",
            footerOpenSource: "Saberes Libres para un Mundo Libre",
            footerNavTitle: "Navegación",
            footerTechTitle: "Especificaciones Técnicas",
            footerReadmeLink: "📖 Consultar el README.md"
        }
    };

    /* --- 2. QUOTES DATABASE --- */
    const quotes = [
        {
            fr: { text: "On nous dit: Le bonheur c'est le progrès faites un pas en avant. Et c'est le progrès... mais ce n'est jamais le bonheur. Alors si on faisait un pas de côté! Si on essayait autre chose!", author: "Ecoclash" },
            en: { text: "They tell us: Happiness is progress, take a step forward. And it's progress... but it's never happiness. So what if we took a step sideways! What if we tried something else!", author: "Ecoclash" },
            es: { text: "Nos dicen: La felicidad es el progreso, da un paso adelante. Y es progreso... pero nunca es felicidad. ¡Entonces, ¿qué tal si damos un paso a un lado! ¿Y si intentamos otra cosa!", author: "Ecoclash" }
        },
        {
            fr: { text: "La liberté ne se mendie pas, elle se prend.", author: "Louise Michel" },
            en: { text: "Freedom is not begged for, it is taken.", author: "Louise Michel" },
            es: { text: "La libertad no se mendiga, se toma.", author: "Louise Michel" }
        },
        {
            fr: { text: "La croissance infinie dans un monde fini est une absurdité que seuls les fous ou les économistes peuvent croire.", author: "Kenneth Boulding" },
            en: { text: "Anyone who believes exponential growth can go on forever in a finite world is either a madman or an economist.", author: "Kenneth Boulding" },
            es: { text: "Cualquiera que crea que el crecimiento exponencial puede continuar indefinidamente en un mundo finito es un loco o un economista.", author: "Kenneth Boulding" }
        },
        {
            fr: { text: "La terre n'est pas un don de nos parents, ce sont nos enfants qui nous la prêtent.", author: "Proverbe Amérindien" },
            en: { text: "We do not inherit the Earth from our ancestors, we borrow it from our children.", author: "Native American Proverb" },
            es: { text: "La tierra no es un legado de nuestros padres, sino un préstamo de nuestros hijos.", author: "Proverbio Indígena" }
        },
        {
            fr: { text: "Produire ses propres aliments, c'est imprimer sa propre monnaie.", author: "Ron Finley" },
            en: { text: "Growing your own food is like printing your own money.", author: "Ron Finley" },
            es: { text: "Cultivar tus propios alimentos es como imprimir tu propio dinero.", author: "Ron Finley" }
        }
    ];

    /* --- 3. SYNERGIES DATABASE --- */
    const synergies = [
        {
            title: "ZAD de Notre-Dame-des-Landes",
            url: "http://zad.nadir.org/",
            icon: "✊",
            desc: {
                fr: "Collectif de résistance ayant victorieusement protégé le bocage contre un projet d'aéroport inutile. Infokiosque, radio locale, écolieux autogérés.",
                en: "Legendary autonomous zone that successfully defended wetlands against a destructive mega-airport project. Direct democracy, bio-farming, radio.",
                es: "Zona autónoma que defendió con éxito los humedales contra un mega-aeropuerto destructivo. Democracia directa, eco-agricultura, radio local."
            }
        },
        {
            title: "Alphazomes & Special Vroutsch",
            url: "http://alphazomes.org/",
            icon: "🔮",
            desc: {
                fr: "Le portail mythique consacré aux zomes, architectures géodésiques, calculs d'angles et géométrie sacrée d'autoconstruction.",
                en: "The legendary portal dedicated to zoomes, geodesic architectural geometry, structural engineering, and self-built counter-culture habitats.",
                es: "Portal legendario dedicado a zomes, geometría arquitectónica geodésica, ingeniería estructural y viviendas alternativas de autoconstrucción."
            }
        },
        {
            title: "Internet Archive (Open Library)",
            url: "https://archive.org/",
            icon: "📚",
            desc: {
                fr: "La bibliothèque universelle libre. Retrouvez-y tous les vieux traités de Gardner Dexter Hiscox sur la mécanique, les moteurs à air et les formules d'atelier.",
                en: "The free universal library. Access open technical archives, workshop formulas by Gardner Dexter Hiscox, and historic self-reliance books.",
                es: "La biblioteca universal libre. Accede a archivos técnicos abiertos, fórmulas de taller de Gardner Dexter Hiscox y libros históricos de autosuficiencia."
            }
        },
        {
            title: "Infokiosques.net",
            url: "https://infokiosques.net/",
            icon: "📜",
            desc: {
                fr: "Brochures, textes, fanzines et journaux anarchistes, anticapitalistes et féministes à télécharger, imprimer et diffuser librement.",
                en: "Brochures, zines, and radical decentralized texts to download, print, and distribute freely in self-managed social centers.",
                es: "Folletos, fanzines y textos radicales descentralizados para descargar, imprimir y distribuir libremente en centros sociales autogestionados."
            }
        },
        {
            title: "Low-Tech Lab",
            url: "https://lowtechlab.org/",
            icon: "🔧",
            desc: {
                fr: "Découvrir, concevoir et documenter des technologies utiles, accessibles et durables (fours solaires, éoliennes Piggott, chauffe-eau compost).",
                en: "Discover, make, and document useful, accessible, and sustainable Low-Tech solutions (solar ovens, Piggott wind turbines, compost heaters).",
                es: "Descubrir, crear y documentar tecnologías útiles, accesibles y sostenibles (hornos solares, aerogeneradores Piggott, calentadores de compost)."
            }
        },
        {
            title: "Permaculture & Réseau Semences Libres",
            url: "https://www.kokopelli-semences.fr/",
            icon: "🌻",
            desc: {
                fr: "Préservation de la biodiversité semencière et potagère. Graines reproductibles, anciennes et biologiques pour l'autonomie alimentaire.",
                en: "Preserving heirloom and organic heirloom seed biodiversity. Reproducible open-pollinated seeds for genuine community food autonomy.",
                es: "Preservación de la biodiversidad de semillas orgánicas tradicionales. Semillas reproducibles para una verdadera autonomía alimentaria comunitaria."
            }
        }
    ];

    /* --- 4. FULL ARTICLE DATABASE (UPGRADED & EXPANDED ECOCLASH DATABASE) --- */
    const articles = [
        {
            id: "panier-papier",
            category: "artisanat",
            date: "17 août 2015",
            readingTime: 6,
            reactions: 42,
            image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
            tags: ["Vannerie", "Recyclage", "Papier Journal", "DIY"],
            title: {
                fr: "Comment tresser un panier avec du papier journal (Vannerie de Papier)",
                en: "How to Weave a Basket with Newspaper (Paper Basketry)",
                es: "Cómo tejer una canasta con papel de periódico (Cestería de Papel)"
            },
            desc: {
                fr: "Rien ne se perd, rien ne se crée, tout se transforme. Apprenez la vannerie et le tressage à partir de simples journaux de récupération.",
                en: "Nothing is lost, nothing is created, everything is transformed. Learn practical basket weaving using everyday upcycled newspapers.",
                es: "Nada se pierde, nada se crea, todo se transforma. Aprende el arte de la cestería utilizando simples periódicos reciclados."
            },
            content: {
                fr: `
                    <p>La vannerie est l'un des artisanats les plus anciens de l'humanité. Mais saviez-vous que vous n'avez pas besoin d'osier ou de rotin pour commencer ? Le papier journal, une fois roulé en fines baguettes, offre une résistance surprenante et permet de créer de magnifiques corbeilles, paniers à linge ou boîtes de rangement.</p>
                    <h2>1. Matériel Nécessaire</h2>
                    <ul>
                        <li>Un vieux journal ou des prospectus publicitaires</li>
                        <li>Une fine brochette en bois (ou une aiguille à tricoter de 2-3mm)</li>
                        <li>De la colle blanche (colle à bois ou colle d'amidon maison)</li>
                        <li>Du vernis à l'eau ou de l'huile de lin pour imperméabiliser le panier final</li>
                    </ul>
                    <h2>2. Préparation des Tubes (Les "Brins")</h2>
                    <p>Coupez vos feuilles de journal en bandes d'environ 7 à 10 cm de large. Placez la brochette en bois dans un angle de la bande, avec un angle d'environ 45°. Roulez le papier en serrant bien la fibre autour de la brochette. Avant d'arriver à la pointe finale, déposez une petite goutte de colle blanche, puis retirez délicatement la brochette.</p>
                    <blockquote>Astuce d'artisan : L'un des bouts du tube sera légèrement plus large que l'autre. C'est parfait ! Cela permet d'emboîter les brins les uns dans les autres pour obtenir une longueur infinie lors du tressage.</blockquote>
                    <h2>3. Le Tressage du Fond</h2>
                    <p>Croisez 4 brins horizontaux et 4 brins verticaux en leur centre. Prenez un brin très long (le brin "clôture"), pliez-le en deux et commencez à enlacer chaque groupe de brins en technique de "superposition" ou de "croisée". Une fois le fond assez grand, relevez les montants verticaux et attachez-les temporairement en haut avec une pince à linge.</p>
                    <h2>4. Finitions et Protection</h2>
                    <p>Continuez à tresser les parois à la hauteur souhaitée. Pour clore le panier, repliez les montants verticaux vers l'intérieur en les glissant sous le rang précédent avec un poinçon. Badigeonnez l'ensemble avec un mélange à parts égales de colle blanche et d'eau. En séchant, le panier deviendra dur comme du bois !</p>
                `,
                en: `
                    <p>Basketry is one of humanity's most ancient crafts. But did you know you don't need expensive willow or rattan to start? Newspaper, once rolled into tight straws, offers surprising durability and structural strength, allowing you to create stunning storage baskets and laundry hampers entirely for free.</p>
                    <h2>1. Required Materials</h2>
                    <ul>
                        <li>Old newspapers or paper advertising flyers</li>
                        <li>A thin wooden skewer or 2-3mm knitting needle</li>
                        <li>PVA white glue or homemade flour-based starch glue</li>
                        <li>Water-based varnish or raw linseed oil to seal and waterproof</li>
                    </ul>
                    <h2>2. Rolling the Paper Tubes</h2>
                    <p>Cut your newspaper sheets into strips roughly 7 to 10 cm wide. Place the wooden skewer across one corner of the strip at an approximate 45° angle. Roll the paper tightly around the skewer. Before rolling up the final corner tip, apply a dab of glue, press securely, and gently slide the wooden skewer out.</p>
                    <blockquote>Craft Tip: One end of your finished paper straw will naturally be slightly wider than the other. This is ideal as it allows you to effortlessly slot tubes together to create continuous weaving strands.</blockquote>
                    <h2>3. Weaving the Base</h2>
                    <p>Arrange 4 horizontal and 4 vertical straws in a central cross pattern. Take a very long working straw, fold it in half, and begin pairing around each strand. Once your circular base reaches the desired diameter, gently bend the upright framework poles upward and secure them with clothespins to establish your vertical walls.</p>
                    <h2>4. Sealing and Longevity</h2>
                    <p>Weave up to your preferred wall height. Tuck the remaining upright tips down into the existing weave. Finally, coat the entire completed basket with a 50/50 mixture of white glue and warm water. Once fully cured, your paper basket will become as rigid and sturdy as solid wood!</p>
                `,
                es: `
                    <p>La cestería es una de las artesanías más antiguas de la humanidad. ¿Pero sabías que no necesitas mimbre o ratán caro para empezar? El papel de periódico, una vez enrollado en tubos finos y apretados, ofrece una resistencia sorprendente y permite crear hermosas canastas de almacenamiento de forma totalmente gratuita.</p>
                    <h2>1. Materiales Necesarios</h2>
                    <ul>
                        <li>Periódicos viejos o folletos publicitarios</li>
                        <li>Un palillo de madera fino o una aguja de tejer de 2-3 mm</li>
                        <li>Cola blanca (cola de carpintero o engrudo casero de harina)</li>
                        <li>Barniz al agua o aceite de linaza para impermeabilizar</li>
                    </ul>
                    <h2>2. Preparación de los Tubos</h2>
                    <p>Corta las hojas de periódico en tiras de unos 7 a 10 cm de ancho. Coloca el palillo de madera en una esquina de la tira con un ángulo aproximado de 45°. Enrolla el papel apretándolo bien. Antes de llegar a la punta final, pon una gota de cola y retira suavemente el palillo de madera.</p>
                    <blockquote>Consejo de artesano: Uno de los extremos del tubo será ligeramente más ancho que el otro. ¡Esto es perfecto! Permite encajar un tubo dentro de otro para extender la longitud al infinito mientras tejes.</blockquote>
                    <h2>3. Tejiendo la Base</h2>
                    <p>Cruza 4 tubos horizontales y 4 verticales en el centro. Toma un tubo largo, dóblalo por la mitad y comienza a entrelazar cada grupo. Una vez que la base alcance el tamaño deseado, dobla los postes verticales hacia arriba y sujétalos temporalmente con pinzas para ropa para formar las paredes.</p>
                    <h2>4. Acabados y Protección</h2>
                    <p>Sigue tejiendo las paredes hasta la altura deseada. Remata doblando los postes hacia adentro y deslizándolos bajo el tejido anterior. Pinta toda la canasta con una mezcla a partes iguales de cola blanca y agua. Al secarse, ¡quedará tan dura como la madera maciza!</p>
                `
            },
            resources: [
                { name: "📥 Guide Complet Vannerie Papier (PDF 14p)", url: "#" },
                { name: "🎬 Tutoriel Vidéo Tressage (Web Archive)", url: "#" }
            ],
            comments: [
                { author: "VannierBio", date: "20 août 2015", text: "Génial ! J'ai fabriqué 3 corbeilles pour ma cuisine. Le conseil de l'huile de lin fonctionne à merveille pour l'humidité." },
                { author: "ZAD_Rennes", date: "2 septembre 2015", text: "Merci pour ce savoir libre ! On utilise ça sur le camp pour trier les semences." }
            ]
        },
        {
            id: "construire-yourte",
            category: "habitat",
            date: "10 août 2014",
            readingTime: 12,
            reactions: 88,
            image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=80",
            tags: ["Yourte", "Autoconstruction", "Bois Local", "Habitat Léger"],
            title: {
                fr: "Pratique — Comment construire une yourte (Yurt / Ger)",
                en: "Practical — How to Build a Yurt (Yurt / Ger)",
                es: "Práctico — Cómo construir una Yurt (Yurt / Ger)"
            },
            desc: {
                fr: "Infos, plans, géométrie et calculs pour l'autoconstruction complète d'une yourte traditionnelle mongole ou contemporaine en bois local.",
                en: "Engineering blueprints, calculations, and comprehensive instructions for building a DIY Mongolian or modern yurt using local timber.",
                es: "Planos, cálculos y guía práctica completa para la autoconstrucción de una yurt tradicional mongola o moderna con madera local."
            },
            content: {
                fr: `
                    <p>La yourte (ou <em>Ger</em> en mongol) est sans doute l'habitat léger nomade le plus abouti de l'histoire. Bioclimatique, aérodynamique, résistante aux tempêtes et facile à chauffer, elle constitue une solution d'émancipation foncière exceptionnelle pour ceux qui veulent vivre près de la nature.</p>
                    <h2>1. Structure et Nomenclatures</h2>
                    <p>Une yourte classique se compose de 4 éléments de menuiserie principaux :</p>
                    <ul>
                        <li><strong>Le Toono (La Couronne) :</strong> L'anneau central en haut du toit qui maintient l'ensemble en compression et permet l'aération et la sortie du poêle.</li>
                        <li><strong>Les Khanas (Les Murs) :</strong> Des treillis de lattes de bois croisées et liées par des lanières de cuir ou de la cordelette. Ils se replient comme un accordéon.</li>
                        <li><strong>Les Perches (Les Chevrons) :</strong> Les barres de bois qui s'emboîtent entre le haut des khanas et le toono.</li>
                        <li><strong>Les Baganas (Les Piliers) :</strong> Deux poteaux centraux qui soutiennent le toono pendant le montage et en cas de fortes chutes de neige.</li>
                    </ul>
                    <h2>2. Choix du Bois et Calcul des Perches</h2>
                    <p>Pour une yourte d'environ 5 mètres de diamètre (20 m²), le bois local idéal est le frêne, le châtaignier ou le noisetier droit pour les treillis. Le calcul de la circonférence et de la pente du toit (généralement 30° à 35°) est crucial. Si vos murs font 1m50 de haut, prévoyez des perches d'environ 2m60.</p>
                    <h2>3. Couture de la Toile et Isolation</h2>
                    <p>L'enveloppe extérieure se compose généralement de 3 couches :</p>
                    <ol>
                        <li>Une toile intérieure en coton blanc pour refléter la lumière.</li>
                        <li>Une couche d'isolant (feutre de laine de mouton pur de 10 à 20mm, ou isolant métisse en chanvre/coton recyclé).</li>
                        <li>Une toile extérieure imperméable et respirante (toile acrylique marine ou toile de tente lourde traitée anti-UV).</li>
                    </ol>
                    <blockquote>Important : Lors de l'installation, entourez le sommet des murs (l'intersection treillis/perches) avec un câble d'acier ou une sangle à cliquet ultra-robuste (la "sangle de tension"). C'est cette sangle qui encaisse la poussée du toit !</blockquote>
                `,
                en: `
                    <p>The yurt (or <em>Ger</em> in Mongolian) is arguably the greatest portable nomadic dwelling in human history. Bioclimatic, highly wind-resistant, structurally elegant, and effortless to heat, it represents a profound pathway to true housing autonomy.</p>
                    <h2>1. Anatomy of a Yurt</h2>
                    <p>A traditional wooden yurt breaks down into four essential structural subsystems:</p>
                    <ul>
                        <li><strong>The Toono (Compression Ring / Crown):</strong> The central circular wooden skylight ring that anchors the roof rafters and houses the woodstove stovepipe.</li>
                        <li><strong>The Khana (Lattice Walls):</strong> Expandable crisscrossed wooden slats joined by raw hide thongs or durable cordage. They fold like an accordion for transport.</li>
                        <li><strong>The Rafter Poles:</strong> Straight wooden spars spanning under tension between the top of the wall lattice and the central crown.</li>
                        <li><strong>The Bagana (Central Supports):</strong> Two internal upright columns supporting the heavy crown ring during assembly and heavy winter snow loads.</li>
                    </ul>
                    <h2>2. Timber Selection & Math</h2>
                    <p>For a standard 5-meter diameter yurt (approx. 20 square meters of living space), optimal local timbers include flexible straight ash, durable sweet chestnut, or hazel. Rafter calculation is precise: for 1.5m tall lattice walls and a standard 33° roof pitch, rafters should measure exactly 2.60m.</p>
                    <h2>3. Custom Canvas Sewing & Insulation</h2>
                    <p>The external protective membrane relies on a breathable 3-layer sandwich:</p>
                    <ol>
                        <li>A lightweight breathable interior cotton lining to illuminate the interior space.</li>
                        <li>A robust insulating core layer (10mm to 20mm of dense pure sheep’s wool felt or upcycled hemp/cotton batting).</li>
                        <li>An ultra-durable heavy-duty outer canvas treated for UV resistance, mildew protection, and waterproofing.</li>
                    </ol>
                    <blockquote>Engineering Warning: You must wrap an incredibly strong tension cable or heavy-duty heavy ratchet strap around the perimeter of the top wall lattice. This primary tension band prevents the outward downward thrust of the roof rafters from flattening the walls!</blockquote>
                `,
                es: `
                    <p>La yurt (o <em>Ger</em> en mongol) es posiblemente la vivienda portátil nómada más perfecta de la historia. Bioclimática, altamente resistente a los vientos, estructuralmente brillante y muy fácil de calentar, representa una excelente vía hacia la libertad residencial.</p>
                    <h2>1. Anatomía de la Estructura</h2>
                    <p>Una yurt tradicional de madera se divide en cuatro componentes de carpintería principales:</p>
                    <ul>
                        <li><strong>El Toono (Anillo o Corona Central):</strong> La rueda superior del techo que mantiene toda la estructura en compresión y sirve de tragaluz y salida de la chimenea.</li>
                        <li><strong>Las Khanas (Paredes de Celosía):</strong> Rejillas de listones de madera cruzados unidos por tiras de cuero o cuerda. Se pliegan como un acordeón.</li>
                        <li><strong>Las Pértigas (Vigas del Techo):</strong> Postes de madera que se encajan entre la parte superior de las paredes y el anillo central.</li>
                        <li><strong>Los Baganas (Pilares Centrales):</strong> Dos columnas que sostienen el anillo central durante el montaje y ante fuertes nevadas.</li>
                    </ul>
                    <h2>2. Selección de Madera y Cálculos</h2>
                    <p>Para una yurt de 5 metros de diámetro (unos 20 m² de superficie), la madera ideal es el fresno, el castaño o el avellano recto. El cálculo de los ángulos es exacto: para paredes de 1.5m de altura y una inclinación de techo de 33°, las pértigas deben medir 2.60m.</p>
                    <h2>3. Costura de Lonas y Aislamiento</h2>
                    <p>El revestimiento exterior consta de 3 capas superpuestas:</p>
                    <ol>
                        <li>Una tela interior de algodón blanco claro para reflejar la luz interior.</li>
                        <li>Una capa aislante gruesa (fieltro de lana de oveja 100% natural de 10-20 mm o fieltro de cáñamo).</li>
                        <li>Una lona exterior marina pesada, impermeable y con tratamiento anti-rayos UV.</li>
                    </ol>
                    <blockquote>Aviso Estructural: Es imprescindible rodear todo el perímetro superior de las paredes con un cable de acero o una eslinga tensora muy fuerte. ¡Este cinturón de tensión es el que absorbe el empuje lateral del techo y evita que las paredes se abran!</blockquote>
                `
            },
            resources: [
                { name: "📐 Plans de Coupe et Calculateur Excel Yourte", url: "#" },
                { name: "📖 Manuel de Couture des Lonas (PDF 30p)", url: "#" }
            ],
            comments: [
                { author: "EcoLieu_Jura", date: "15 septembre 2014", text: "Nous vivons dans une yourte autoconstruite de 6m depuis 3 ans. Le bonheur absolu ! Prévoyez un bon plancher surélevé pour le froid par en dessous." }
            ]
        },
        {
            id: "perles-archives-vol1",
            category: "mediatheque",
            date: "15 août 2015",
            readingTime: 8,
            reactions: 104,
            image: "https://images.unsplash.com/photo-1507842229456-3a097aae189f?auto=format&fit=crop&w=800&q=80",
            tags: ["Archives", "Low-Tech", "Recettes", "Mécanique", "Open-Source"],
            title: {
                fr: "Les Perles des Archives / Vol. 1 (Livres et Formules Rares)",
                en: "Gems of the Archives / Vol. 1 (Rare Books & Workshop Formulas)",
                es: "Joyas de los Archivos / Vol. 1 (Libros y Fórmulas Raras)"
            },
            desc: {
                fr: "Une sélection précieuse d'ouvrages libres : 10 000 formules d'atelier, 507 mouvements mécaniques, encyclopédies de recettes d'autonomie.",
                en: "A golden collection of public domain open manual PDFs: 10,000 workshop formulas, 507 mechanical movements, and lost domestic wisdom.",
                es: "Una valiosa selección de libros de dominio público: 10,000 fórmulas de taller, 507 movimientos mecánicos y enciclopedias de autosuficiencia."
            },
            content: {
                fr: `
                    <p>Internet Archive est une mine d'or oubliée. À la fin du XIXe et au début du XXe siècle, des ingénieurs et vulgarisateurs de génie ont documenté de manière exhaustive l'ensemble des savoir-faire techniques, chimiques et mécaniques de l'humanité, bien avant l'obsolescence programmée. Nous avons réuni ici les liens directs vers ces chefs-d'œuvre du domaine public.</p>
                    <h2>Ouvrages Majeurs à Télécharger :</h2>
                    <ul>
                        <li><strong>Henley's Twentieth Century Formulas, Recipes and Processes :</strong> Plus de 10 000 formules d'atelier et de maison. Savons, encres, vernis, alliages, conservation des aliments, teintures végétales, colles, lubrifiants. Une véritable bible de l'autonomie.</li>
                        <li><strong>Hiscox Mechanical Movements, Powers and Devices :</strong> Tous les livres de Gardner Dexter Hiscox sur la cinématique. Comment transformer un mouvement rotatif en mouvement alternatif, les pompes à eau manuelles, les régulateurs à boules, les horlogeries mécaniques.</li>
                        <li><strong>The Dangerous Book for Boys :</strong> Compétences intemporelles, construction de cabanes dans les arbres, nœuds marins, orientation aux étoiles, fabrication de frondes et d'arcs.</li>
                        <li><strong>Backyard Ballistics :</strong> Guide pas-à-pas pour construire 16 appareils balistiques (catapultes, canons à patates à air comprimé) avec de simples tuyaux de quincaillerie.</li>
                        <li><strong>Encyclopedia of Practical Receipts and Processes (1872) :</strong> Par William B. Dick. Plus de 6400 recettes pratiques pour l'industrie artisanale et la vie domestique.</li>
                    </ul>
                `,
                en: `
                    <p>The Internet Archive is a forgotten treasure trove. In the late 19th and early 20th centuries, master engineers and educators exhaustively documented the sum of human domestic, chemical, and mechanical engineering—long before the era of planned obsolescence and closed digital microchips. Here are direct links to these public domain masterworks.</p>
                    <h2>Curated Open Archive Downloads:</h2>
                    <ul>
                        <li><strong>Henley's Twentieth Century Formulas, Recipes and Processes:</strong> Over 10,000 practical household and workshop formulas. How to make natural soaps, permanent inks, varnishes, wood glues, non-toxic preservatives, herbal dyes, and metal alloys.</li>
                        <li><strong>Hiscox Mechanical Movements, Powers and Devices:</strong> The complete technical masterworks of Gardner Dexter Hiscox. Demonstrates hundreds of ways to convert rotary motion to reciprocating motion, build mechanical wind pumps, and design governors.</li>
                        <li><strong>Five Hundred and Seven Mechanical Movements (by Henry T. Brown):</strong> Clear engineering schematics of pneumatics, steam linkages, and gearing systems.</li>
                        <li><strong>Backyard Ballistics:</strong> Step-by-step DIY manual illustrating how to build 16 entertaining ballistic engines, potato cannons, and trebuchets out of hardware store piping.</li>
                        <li><strong>Encyclopedia of Practical Receipts and Processes (1872):</strong> By William B. Dick. Over 6,400 plain-language recipes for self-sufficient homesteading.</li>
                    </ul>
                `,
                es: `
                    <p>Internet Archive es una mina de oro olvidada. A finales del siglo XIX y principios del XX, brillantes ingenieros documentaron exhaustivamente todas las técnicas químicas, mecánicas y de construcción de la humanidad, mucho antes de la obsolescencia programada. Presentamos aquí los enlaces directos a estas joyas del dominio público.</p>
                    <h2>Libros Esenciales para Descargar:</h2>
                    <ul>
                        <li><strong>Henley's Twentieth Century Formulas, Recipes and Processes:</strong> Más de 10,000 fórmulas de taller y hogar. Elaboración de jabones naturales, tintas, barnices, aleaciones, métodos de conservación, tintes vegetales y pegamentos. La biblia de la autosuficiencia.</li>
                        <li><strong>Hiscox Mechanical Movements, Powers and Devices:</strong> La obra cumbre de Gardner Dexter Hiscox sobre cinemática. Enseña a transformar movimientos rotativos en alternativos, construir bombas de agua manuales y mecanismos de relojería.</li>
                        <li><strong>Five Hundred and Seven Mechanical Movements (Henry T. Brown):</strong> Mecanismos clave de dinámica, hidráulica y neumática ilustrados con absoluta claridad.</li>
                        <li><strong>Backyard Ballistics:</strong> Manual de bricolaje paso a paso para construir 16 dispositivos de aire comprimido y catapultas utilizando simples tubos de ferretería.</li>
                        <li><strong>Encyclopedia of Practical Receipts and Processes (1872):</strong> 6,400 recetas de William B. Dick para la vida campesina y la autosuficiencia en el hogar.</li>
                    </ul>
                `
            },
            resources: [
                { name: "🔗 Télécharger Henley's Formulas (Archive.org PDF)", url: "https://archive.org/details/henleystwentieth00hiscrich" },
                { name: "🔗 Télécharger Mechanical Movements (Archive.org PDF)", url: "https://archive.org/details/mechanicalmovem04hiscgoog" },
                { name: "🔗 507 Mechanical Movements (Site Animé & PDF)", url: "https://archive.org/details/fivehundredseven02brow" }
            ],
            comments: [
                { author: "Archiviste_Curieux", date: "16 août 2015", text: "Le Henley's est incroyable. J'ai fabriqué ma propre encre ferrogallique et de la colle à reliure grâce à leurs formules." }
            ]
        },
        {
            id: "kiosque-autonome",
            category: "habitat",
            date: "14 septembre 2014",
            readingTime: 7,
            reactions: 95,
            image: "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&w=800&q=80",
            tags: ["Remorque", "Huile Friture", "Solaire", "Infokiosque", "Nomade"],
            title: {
                fr: "Le Kiosque Autonome (Remorque Solaire & Huile de Friture)",
                en: "The Autonomous Kiosk (Solar Trailer & Waste Oil Tractor)",
                es: "El Kiosco Autónomo (Remolque Solar y Aceite de Fritura)"
            },
            desc: {
                fr: "Histoire et fiche technique d'une immense remorque infokiosque tirée par un tracteur roulant 100% à l'huile de friture recyclée.",
                en: "Engineering review of a 5m community mobile infokiosk pulled by a tractor running 100% on upcycled waste vegetable frying oil.",
                es: "Historia y ficha técnica de un enorme remolque comunitario arrastrado por un tractor que funciona 100% con aceite de fritura reciclado."
            },
            content: {
                fr: `
                    <p>Comment diffuser des idées d'autonomie dans tous les villages sans dépendre des stations-service ou du réseau électrique ? Voici le projet du <em>Kiosque Autonome</em> : une grande remorque de 5 mètres sur 2,5 mètres, culminant à 4 mètres de haut sous un magnifique toit en dôme.</p>
                    <h2>1. Le Tracteur Biocarburant (Huile de Friture)</h2>
                    <p>Le véhicule tracteur a été modifié avec un kit de bicarburation. Il démarre sur un petit réservoir de gazole (ou d'huile végétale pure réchauffée par des bougies de préchauffage), puis bascule automatiquement sur un grand réservoir contenant de l'huile de friture usagée de restaurant, finement filtrée à 1 micron. Bilan carbone presque neutre, recyclage d'un déchet polluant en force motrice !</p>
                    <h2>2. Toiture Végétalisée et Plantes Médicinales</h2>
                    <p>Le toit de la remorque a été renforcé par un bac étanche en EPDM et planté de 20 m² d'herbes médicinales (thym, romarin, calendula, achillée millefeuille). Les eaux de pluie sont récupérées dans des cuves intégrées sous le plancher pour arroser ce jardin suspendu.</p>
                    <h2>3. L'Équipement Infokiosque</h2>
                    <p>À l'intérieur, les parois s'ouvrent sur vérins hydrauliques pour dévoiler une bibliothèque en libre-service, des présentoirs à brochures, une photocopieuse alimentée par 600W de panneaux solaires, et un vidéoprojecteur 12V pour organiser des projections de documentaires en plein air sur la place des villages.</p>
                `,
                en: `
                    <p>How do you circulate vital grassroots autonomy knowledge across isolated rural villages without relying on fossil fuel gas stations or corporate electrical grids? Meet the <em>Autonomous Kiosk</em> project: an impressive custom-built 5m x 2.5m community trailer topped by a beautiful 4m high arched roof.</p>
                    <h2>1. The Waste Vegetable Oil (WVO) Tractor</h2>
                    <p>The towing engine was outfitted with a dual-tank bio-fuel conversion kit. The engine warms up on a small auxiliary tank before switching seamlessly to a heated primary tank filled with used restaurant frying oil filtered down to 1 micron. This setup achieves decentralized carbon-neutral locomotion entirely by scavenging problematic municipal restaurant grease.</p>
                    <h2>2. Medicinal Living Roof</h2>
                    <p>The roof arbors are lined with a heavy-duty EPDM membrane and seeded with 20 square meters of shallow medicinal crops (hardy thyme, rosemary, wild calendula, and yarrow). Rainwater is captured by gutter wings and funnelled into structural under-chassis ballast tanks.</p>
                    <h2>3. Solar Infokiosk Array</h2>
                    <p>When parked, the lateral walls fold upward on hydraulic gas struts to form protective awnings, unveiling self-service bookshelf bays, brochure racks, a 12V solar-powered copy machine, and a low-draw community outdoor cinema projection system.</p>
                `,
                es: `
                    <p>¿Cómo llevar ideas de autonomía a los pueblos más aislados sin depender de gasolineras o de la red eléctrica comercial? Presentamos el proyecto del <em>Kiosco Autónomo</em>: un enorme remolque comunitario de 5 metros de largo por 2.5 metros de ancho, coronado por un hermoso techo abovedado de 4 metros de altura.</p>
                    <h2>1. El Tractor de Aceite de Fritura Reciclado</h2>
                    <p>El motor del tractor fue modificado con un sistema de doble depósito. Arranca en frío y luego cambia automáticamente a un gran depósito que contiene aceite de fritura de restaurantes reciclado y filtrado a 1 micra. ¡Este sistema logra una movilidad totalmente sostenible aprovechando un residuo urbano contaminante!</p>
                    <h2>2. Techo Verde de Plantas Medicinales</h2>
                    <p>La cubierta del remolque está reforzada con una lámina de EPDM y plantada con 20 m² de hierbas medicinales (tomillo, romero, caléndula, milenrama). El agua de lluvia es canalizada mediante canalones hacia depósitos situados bajo el suelo para regar este huerto suspendido.</p>
                    <h2>3. Equipamiento de Infokiosco Solar</h2>
                    <p>Al estacionar, las paredes laterales se elevan mediante pistones hidráulicos formando toldos y dejando a la vista una gran biblioteca de libre acceso, estanterías para folletos, una fotocopiadora alimentada por paneles solares y un proyector 12V para organizar sesiones de cine al aire libre en las plazas de los pueblos.</p>
                `
            },
            resources: [
                { name: "🚜 Guide Bicarburation Huile Végétale (PDF 25p)", url: "#" },
                { name: "📋 Fiche Construction Remorque Bois (PDF)", url: "#" }
            ],
            comments: [
                { author: "Roule_A_L_Huile", date: "20 septembre 2014", text: "Superbe ! Pour info, un bon filtrage à travers de vieux jeans puis un filtre à gazole de camion évite de boucher les injecteurs." }
            ]
        },
        {
            id: "special-vroutsch",
            category: "habitat",
            date: "14 septembre 2014",
            readingTime: 5,
            reactions: 67,
            image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
            tags: ["Vroutsch", "Zoomes", "Dôme", "1972", "Contre-Culture"],
            title: {
                fr: "Autoconstruction — Spécial Vroutsch (Le Guide Culte de 1972)",
                en: "Self-Building — Special Vroutsch (The 1972 Cult Guide)",
                es: "Autoconstrucción — Especial Vroutsch (Guía de Culto de 1972)"
            },
            desc: {
                fr: "Une petite perle architecturale de la contre-culture : construction de dômes, tipis, zoomes, structures en carton et maisons bulles.",
                en: "A rare architectural masterpiece of 1970s counter-culture: calculating and building geodesic domes, tipis, and zoomes.",
                es: "Una joya arquitectónica de la contracultura de 1972: cálculo y construcción de domos geodésicos, tipis, zomes y casas de cartón."
            },
            content: {
                fr: `
                    <p>Publié au début des années 70 en pleine effervescence utopique, le numéro <em>Spécial Vroutsch</em> consacré à l'autoconstruction est une relique légendaire. Trouvé à l'origine grâce aux chercheurs d'Alphazomes, ce manuel de 71 pages regorge de dessins faits main, de tableaux trigonométriques vulgarisés et d'inventions farfelues ou géniales.</p>
                    <h2>Au Sommaire de ce Grimoire :</h2>
                    <ul>
                        <li><strong>Les Dômes Géodésiques :</strong> Calculs des fréquences V2 et V3. Astuces d'époque pour assembler des tubes d'acier aplati ou des chevrons de bois avec de simples rondelles de caoutchouc.</li>
                        <li><strong>Les Zoomes :</strong> Architecture fascinante basée sur des losanges en spirale. Contrairement au dôme géodésique, le zoome permet des murs verticaux et s'intègre avec une poésie folle dans le paysage forestier.</li>
                        <li><strong>Les Structures Expérimentales :</strong> Maisons en tubes de carton de récupération imperméabilisés à la paraffine, igloos en sacs de terre (les ancêtres des Earthships), et abris d'urgence gonflables.</li>
                    </ul>
                    <p>C'est un appel éclatant à l'imagination et à l'audace constructrice, rappelant que l'architecture appartient à ceux qui la vivent, pas aux promoteurs immobiliers.</p>
                `,
                en: `
                    <p>Published in early 1972 at the zenith of the global back-to-the-land utopian movement, the <em>Special Vroutsch</em> issue dedicated to counter-culture self-building is a legendary counter-cultural manual. Rescued and digitized by the structural engineers at Alphazomes, this 71-page fully illustrated manifesto is packed with hand-drawn math, geodesic trigonometry, and wild architectural experiments.</p>
                    <h2>Highlights of the Manual:</h2>
                    <ul>
                        <li><strong>Geodesic Domes:</strong> Exact geometry and chord factors for frequency V2 and V3 structures. Ingenious DIY hub systems using flattened conduit pipes and upcycled automotive rubber washers.</li>
                        <li><strong>Zoomes:</strong> An awe-inspiring non-standard architectural class built from spiralling diamonds (rhombuses). Unlike standard spherical domes, a zoome forms beautiful vertical walls and merges organically into forest landscapes.</li>
                        <li><strong>Radical Upcycling:</strong> Experimental shelters built from heavy-duty industrial shipping cardboard tubes waterproofed with beeswax, early superadobe sandbag structures, and foam-sprayed micro-domes.</li>
                    </ul>
                    <p>It remains an electrifying monument to raw structural imagination, reminding us that homes should be handcrafted by the people who inhabit them, not corporate developers.</p>
                `,
                es: `
                    <p>Publicado a principios de la década de 1970 en plena efervescencia de los movimientos utópicos de retorno a la tierra, la edición de <em>Especial Vroutsch</em> sobre autoconstrucción es una leyenda de la contracultura. Digitalizado originalmente por los investigadores de Alphazomes, este grimoire ilustrado de 71 páginas está repleto de cálculos trigonométricos accesibles y fantásticos experimentos arquitectónicos.</p>
                    <h2>Contenido Destacado del Manual:</h2>
                    <ul>
                        <li><strong>Domos Geodésicos:</strong> Frecuencias V2 y V3. Sistemas ingeniosos de unión de nodos utilizando tubos de acero aplastados con martillo y arandelas de caucho recicladas de ruedas de coche.</li>
                        <li><strong>Zoomes:</strong> Arquitectura fascinante basada en rombos en espiral. A diferencia de un domo esférico, un zome permite paredes verticales y se fusiona maravillosamente con entornos boscosos.</li>
                        <li><strong>Reciclaje Radical:</strong> Albergues construidos con tubos industriales de cartón prensado impermeabilizados con cera y parafina, estructuras de sacos de arena (los antecesores del superadobe) y casas burbuja.</li>
                    </ul>
                    <p>Sigue siendo un brillante llamado a la imaginación constructiva, recordándonos que la arquitectura pertenece a quienes la habitan y no a la especulación inmobiliaria.</p>
                `
            },
            resources: [
                { name: "📁 Télécharger Special Vroutsch 1972 (PDF 71p)", url: "#" },
                { name: "🔗 Visiter Alphazomes.org", url: "http://alphazomes.org" }
            ],
            comments: [
                { author: "Zoome_Lover", date: "25 septembre 2014", text: "Ce document a changé ma vie en 2010. J'ai construit un petit Zoome 6 pans pour mon atelier de poterie. Les schémas sont d'une précision diabolique." }
            ]
        },
        {
            id: "recettes-vegetaliennes",
            category: "production",
            date: "25 août 2014",
            readingTime: 9,
            reactions: 76,
            image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
            tags: ["Végétalien", "Fermentation", "Alimentation Vivante", "Crudivorisme", "Nutrition"],
            title: {
                fr: "Recettes végétaliennes, Fermentation & Alimentation Vivante",
                en: "Vegan Recipes, Wild Fermentation & Living Foods",
                es: "Recetas veganas, Fermentación y Alimentación Viva"
            },
            desc: {
                fr: "Guide complet pour s'émanciper de l'industrie agroalimentaire : lactofermentation, fromages de graines, graines germées et nutrition vivante.",
                en: "Practical culinary self-reliance: mastering wild lacto-fermentation, sprouted grains, live nut cheeses, and nutrient-dense raw living foods.",
                es: "Guía de autonomía culinaria y salud: lactofermentación salvaje, quesos de semillas, germinados y nutrición viva sin procesados industriales."
            },
            content: {
                fr: `
                    <p>L'autonomie politique et énergétique commence dans nos assiettes. S'affranchir de la souffrance animale et de la malbouffe industrielle exige de renouer avec des techniques ancestrales de conservation et de vitalisation des aliments. L'alimentation vivante (ou <em>crudivorisme</em>) et la fermentation sont les piliers de cette résilience culinaire.</p>
                    <h2>1. Les Graines Germées (La Centrale Énergétique)</h2>
                    <p>Une simple graine sèche est en dormance. En l'immergeant dans l'eau pendant 12 heures puis en la rinçant deux fois par jour dans un bocal recouvert d'une gaze, elle explose de vie. Le taux de vitamines (C, B, A) et d'enzymes est multiplié par 10 ou 20 ! Lentilles, haricots mungo, radis, fenugrec, tournesol : un potager de comptoir ultra-économique.</p>
                    <h2>2. La Lactofermentation (Bocaux Sans Énergie)</h2>
                    <p>Comment conserver ses récoltes de choux, carottes et betteraves toute l'année sans frigo ni stérilisateur électrique ? La lactofermentation ! Émincez vos légumes, ajoutez exactly 15 à 20 grammes de sel pur par kilo de légumes, pressez vigoureusement pour faire dégorger le jus naturel, et tassez dans un bocal à joint en caoutchouc (type Le Parfait) en veillant à ce qu'il n'y ait pas d'air. Les bactéries lactiques vont acidifier le milieu et empêcher toute pourriture. Richesse en probiotiques garantie !</p>
                    <h2>3. Fromages Végétaux Fermentés (Oléagineux)</h2>
                    <p>Faites tremper des noix de cajou ou des graines de tournesol décortiquées pendant 8h. Mixez-les avec un peu d'eau, une gousse d'ail, du sel et une cuillère de jus de choucroute crue (ou un probiotique). Laissez reposer 24 à 48h à température ambiante. Le mélange va cailler et développer un goût acidulé digne d'un grand fromage traditionnel !</p>
                `,
                en: `
                    <p>Political and energy self-reliance begins right on our dinner plates. Breaking away from corporate agricultural monopolies and industrial processed junk foods means reclaiming ancient techniques of food preservation and enzyme activation. Living foods and wild fermentation are the cornerstones of decentralized domestic culinary resilience.</p>
                    <h2>1. Sprouting (The Desktop Bio-Garden)</h2>
                    <p>A dry dormant seed is a locked vault of nutrition. Soak it in pure clean water for 12 hours, then rinse and drain it twice daily in a simple glass mason jar fitted with a mesh or cloth top. Within 3 days, it explodes with active living bio-enzymes, multiplying its vitamin C, B, and essential amino acid profiles up to 20-fold. Lentils, mung beans, spicy radish, fenugrec, and sunflower establish a highly productive, zero-cost indoor winter garden.</p>
                    <h2>2. Wild Lacto-Fermentation (Zero-Energy Food Storage)</h2>
                    <p>How do you store heavy autumn harvests of cabbage, hard roots, and garlic deep into the winter without relying on grid-dependent refrigerators or energy-intensive pressure canners? Mastering lacto-fermentation! Shred your organic vegetables, weigh them exactly, and rub in 15 to 20 grams of pure sea salt per kilogram of vegetables. Tamp the mixture firmly into rubber-gasket glass jars until their own cellular brine fully submerges them. Beneficial wild <em>Lactobacillus</em> bacteria naturally produce lactic acid, perfectly preserving the crisp vegetables while loading them with incredible gut-healthy probiotics.</p>
                    <h2>3. Cultured Living Seed Cheeses</h2>
                    <p>Soak raw sunflower seeds or creamy cashews for 8 hours. Blend them smooth with pure clean water, a clove of raw garlic, nutritional yeast, and a tablespoon of wild raw sauerkraut brine as a live bacterial starter culture. Let the thick mash culture in a warm dark room for 24 to 48 hours. The creamy wheel will ferment, develop a delightful sharp tangy rind, and firm up perfectly!</p>
                `,
                es: `
                    <p>La autonomía política y energética comienza directamente en nuestros platos. Liberarnos de los monopolios agroindustriales y de la comida chatarra procesada significa rescatar métodos ancestrales de conservación y activación enzimática. La alimentación viva y la fermentación salvaje son las bases de esta resistencia culinaria.</p>
                    <h2>1. Germinados (La Huerta Casera sin Tierra)</h2>
                    <p>Una semilla seca está dormida. Si la pones en remojo durante 12 horas y luego la enjuagas y escurres dos veces al día en un frasco de vidrio cubierto con una malla, explota de vida. ¡La cantidad de enzimas activas y vitaminas (C, B, A) se multiplica hasta 20 veces! Lentejas, frijol mungo, rábano picante, fenogreco y girasol forman una espectacular huerta de interior a coste cero.</p>
                    <h2>2. Lactofermentación (Conservas sin Nevera ni Electricidad)</h2>
                    <p>¿Cómo guardar grandes cosechas de repollo, zanahorias y remolachas durante todo el invierno sin usar refrigeradores ni esterilizadores de alto consumo? ¡Con lactofermentación! Corta finamente las verduras, mezcla exactamente entre 15 y 20 gramos de sal marina pura por cada kilo de verdura y masajea con fuerza hasta que suelten su propio jugo celular. Prensa todo en un frasco hermético asegurándote de que las verduras queden sumergidas en su salmuera. Las bacterias beneficiosas <em>Lactobacillus</em> producirán ácido láctico, preservando las verduras de forma crujiente y llenándolas de maravillosos probióticos naturales.</p>
                    <h2>3. Quesos Vivos Fermentados de Semillas</h2>
                    <p>Deja en remojo semillas de girasol crudas o anacardos durante 8 horas. Tritúralos hasta formar una pasta con un poco de agua, ajo, sal marina y una cucharada de jugo de chucrut crudo para aportar las bacterias de cultivo. Deja reposar la mezcla en un lugar cálido entre 24 y 48 horas. ¡La pasta fermentará, cuajará y desarrollará un delicioso sabor intenso y complejo idéntico a un queso artesanal curado!</p>
                `
            },
            resources: [
                { name: "🥦 Table des Sels et Températures de Fermentation (PDF)", url: "#" },
                { name: "📘 Ebook Recettes Crues & Vivantes (PDF 50p)", url: "#" }
            ],
            comments: [
                { author: "FermentoBoy", date: "30 août 2014", text: "La lactofermentation a sauvé ma récolte de choux l'hiver dernier. C'est inratable si on respecte bien la pesée du sel !" }
            ]
        },
        {
            id: "construire-tipi",
            category: "habitat",
            date: "14 août 2014",
            readingTime: 6,
            reactions: 53,
            image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
            tags: ["Tipi", "Autoconstruction", "Habitat Nomade", "Toile", "Couture"],
            title: {
                fr: "Comment fabriquer un tipi (Tepee / Tipi) : Plans et Tuto",
                en: "How to Make a Tipi (Tepee / Tipi): Patterns and Tutorial",
                es: "Cómo fabricar un tipi (Tepee / Tipi): Planos y Tutorial"
            },
            desc: {
                fr: "Fiches techniques, coupe de la toile, montage des perches et aérodynamique thermique pour construire son propre tipi nord-américain.",
                en: "Engineering canvas cutting patterns, structural pole erection, and smoke-flap thermal dynamic tuning for handcrafted living tipis.",
                es: "Patrones de corte de lona, montaje estructural de pértigas y ajuste aerodinámico del humo para la construcción de tipis habitables."
            },
            content: {
                fr: `
                    <p>Le tipi des peuples des plaines d'Amérique du Nord est une merveille d'ingénierie thermique. Sa forme conique asymétrique est spécialement conçue pour résister aux vents dominants tout en permettant d'allumer un feu ouvert directement au centre de l'habitat grâce à un ingénieux système de tirage et de volets d'aération (les <em>smoke flaps</em>).</p>
                    <h2>1. Les Perches (La Charpente)</h2>
                    <p>Il vous faudra 12 à 15 perches parfaitement droites, écorcées et lissées, idéalement en pin, sapin ou épicéa d'environ 6 à 7 mètres de long. Le montage commence toujours par un "trépied" de base solidement noué par un nœud de cabestan, sur lequel viennent s'appuyer en spirale toutes les autres perches.</p>
                    <h2>2. Le Plan de Coupe de la Toile</h2>
                    <p>La toile d'un tipi n'est pas un simple demi-cercle, mais un demi-cercle modifié avec des extensions en forme de "oreilles" au sommet. Ce sont ces oreilles, maintenues par deux perches extérieures légères, qui permettent d'orienter le trou de fumée en fonction de la direction du vent pour éviter que la fumée ne refoule à l'intérieur !</p>
                    <h2>3. L'Ozan et le Lining (L'Isolation Interne)</h2>
                    <p>Pour vivre dans un tipi en hiver, il faut absolument installer un <em>Lining</em> : une toile interne fixée tout autour des perches à environ 1m50 de hauteur, qui descend jusqu'au sol. Cela crée une lame d'air isolante entre la toile extérieure et la toile intérieure, et génère un appel d'air frais qui alimente le feu central par le bas tout en poussant la fumée chaude vers le haut !</p>
                `,
                en: `
                    <p>The traditional cone tipi of the indigenous Great Plains peoples represents a masterpiece of aerodynamic and thermal engineering. Its asymmetrical steep sloped conical profile is specifically structured to shed extreme winds while allowing occupants to safely burn an open internal woodfire right in the center of the living space.</p>
                    <h2>1. Handcrafting the Lodgepole Frame</h2>
                    <p>You need 12 to 15 impeccably straight, fully debarked, smooth slender poles roughly 6 to 7 meters in length (traditionally lodgepole pine or slender dense spruce). Erection strictly begins by securing a master tripod using a secure clove hitch knot. Subsequent secondary framework spars are laid sequentially into the upper tripod crotch in an overlapping structural spiral.</p>
                    <h2>2. Canvas Membrane Cutting Pattern</h2>
                    <p>The outer canvas envelope is not a standard geometric semi-circle. Rather, it is a specialized modified semi-circle featuring distinct projecting upper ears or flaps (smoke flaps). These adjustable smoke flaps are maneuvered externally by two lightweight control poles, allowing occupants to dynamically close or orient the upper smoke aperture away from prevailing gusts!</p>
                    <h2>3. The Lining & Thermal Draft Physics</h2>
                    <p>To comfortably inhabit a tipi deep into freezing winters, you must install an internal <em>Lining</em> (dew cloth). This internal canvas strip is tied around the interior structural poles from ground level up to exactly 1.5 meters high. This creates a powerful passive perimeter insulating air gap while establishing an updraft vacuum that feeds fresh combustion oxygen to the central fire while pulling harmful smoke straight out the top skylight!</p>
                `,
                es: `
                    <p>El tipi tradicional de los pueblos indígenas de las Grandes Llanuras de Norteamérica es una maravilla de ingeniería térmica y aerodinámica. Su forma cónica empinada y asimétrica está especialmente diseñada para soportar vientos extremos y, al mismo tiempo, permitir encender una fogata abierta directamente en el centro del espacio habitable.</p>
                    <h2>1. Preparación de las Pértigas</h2>
                    <p>Necesitarás entre 12 y 15 pértigas de madera perfectamente rectas, peladas y pulidas, idealmente de pino o abeto esbelto de unos 6 a 7 metros de longitud. El montaje estructural comienza siempre atando firmemente un "trípode" maestro mediante un nudo ballestrinque. Las demás pértigas secundarias se apoyan una a una en espiral sobre este trípode principal.</p>
                    <h2>2. Patrón de Corte de la Lona</h2>
                    <p>La cubierta de un tipi no es un simple semicírculo geométrico, sino un semicírculo modificado que incluye dos extensiones superiores en forma de "orejas" (las aletas de humo). ¡Estas aletas se controlan desde el exterior mediante dos pértigas ligeras, permitiendo orientar y abrir el agujero de salida de humo según la dirección del viento para evitar que el humo regrese al interior!</p>
                    <h2>3. El Forro Interior (Lining) y la Física Térmica</h2>
                    <p>Para vivir cómodamente en un tipi durante el crudo invierno, es imprescindible instalar un forro interior o <em>Lining</em>. Esta tira de lona se ata por el interior alrededor de los postes, desde el suelo hasta 1.5 metros de altura. ¡Esto crea una cámara de aire aislante perimetral y genera una corriente de succión que alimenta de oxígeno el fuego central desde abajo mientras empuja todo el humo caliente de forma impecable hacia la salida superior!</p>
                `
            },
            resources: [
                { name: "📐 Plans de Patronage et Couture Toile Tipi", url: "#" },
                { name: "🏕️ Manuel d'Installation et Réglage des Feux", url: "#" }
            ],
            comments: [
                { author: "Plaines_Libres", date: "16 août 2014", text: "Le détail du Lining est absolument vital ! Sans ça, le vent s'engouffre sous la toile et vous fumez comme des saumons. Excellent tuto." }
            ]
        },
        {
            id: "apiculture-warre",
            category: "permaculture",
            date: "14 août 2014",
            readingTime: 7,
            reactions: 61,
            image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=800&q=80",
            tags: ["Apiculture", "Ruche Warré", "Top-Bar", "Permaculture", "Abeilles"],
            title: {
                fr: "Apiculture pour tous : La Ruche Warré (La Ruche du Peuple)",
                en: "Beekeeping for All: The Warré Hive (The People's Hive)",
                es: "Apicultura para todos: La Colmena Warré (Colmena del Pueblo)"
            },
            desc: {
                fr: "Comment construire et conduire une ruche écologique Warré ou Top-Bar sans cires gaufrées chimiques ni traitements agressifs.",
                en: "How to craft and manage natural Warré or Top-Bar natural comb beehives without artificial foundation sheets or toxic treatments.",
                es: "Cómo construir y gestionar colmenas ecológicas Warré y Top-Bar sin láminas de cera artificiales ni tratamientos químicos invasivos."
            },
            content: {
                fr: `
                    <p>L'apiculture industrielle moderne épuise les abeilles avec des ruches à cadres immenses, des transhumances stressantes et des cires gaufrées pleines de résidus de pesticides. L'abbé Émile Warré a inventé au début du XXe siècle <em>La Ruche du Peuple</em> : une ruche ultra-simple, respectueuse de la biologie de l'essaim et facile à autoconstruire avec quelques planches de bois brut.</p>
                    <h2>1. Le Concept de la Ruche Warré</h2>
                    <p>La ruche Warré se compose de petites caisses carrées (exactly 30 × 30 cm en dimensions intérieures, pour 21 cm de haut). Contrairement à la ruche Dadant, elle ne contient aucun cadre, mais de simples barrettes de bois sur lesquelles les abeilles bâtissent leurs propres rayons de cire naturelle, du haut vers le bas, comme dans un tronc d'arbre creux !</p>
                    <h2>2. Isolation et Gestion Thermique (Le Coussin)</h2>
                    <p>Le toit de la Warré abrite un élément capital : le <em>coussin isolant</em>. C'est un boîtier rempli de copeaux de bois, de paille ou de feuilles sèches, placé sur une toile de jute. Ce coussin absorbe l'humidité excédentaire en hiver tout en conservant la précieuse chaleur de la grappe d'abeilles.</p>
                    <h2>3. L'Agrandissement Par le Bas</h2>
                    <p>Dans la nature, l'essaim grandit en étirant ses rayons vers le bas. En ruche Warré, lorsqu'une caisse est pleine, on ne pose pas de hausse au-dessus ! On soulève la ruche et on glisse une caisse vide <strong>par en dessous</strong>. À la fin de l'été, on récolte simplement la caisse du tout au-dessus qui contient le miel de surplus mûr, laissant aux abeilles leurs réserves naturelles d'hiver dans les caisses du bas.</p>
                `,
                en: `
                    <p>Modern commercial industrial beekeeping exhausts our vital honeybee colonies via enormous non-insulated frame supers, highly disruptive stress migrations, and toxic artificial wax foundation sheets laden with agricultural chemical residues. In the 1920s, Abbé Émile Warré formulated <em>The People's Hive</em>: an exceptionally intuitive, highly accessible wooden hive structured to flawlessly emulate natural wild tree-hollow bee biology.</p>
                    <h2>1. Warré Hive Dimensions & Natural Comb</h2>
                    <p>The Warré hive system relies on multiple identical stacked modular square timber boxes measuring exactly 30 cm × 30 cm internally, with a height of 21 cm. Unlike common commercial Langstroth or Dadant boxes, it utilizes zero frames. Rather, simple narrow wooden top-bars are laid across the rim, prompting bees to draw completely pure wild beeswax combs freely from the ceiling downward!</p>
                    <h2>2. Passive Quilt Core Thermal Regulation</h2>
                    <p>The upper attic of the Warré structure houses its greatest functional secret: the insulating <em>Quilt Box</em>. This wooden tray is densely packed with raw wood shavings, dry autumn leaves, or straw sitting atop an open-weave burlap canvas cloth. This quilt perfectly wicks away harmful internal winter condensation metabolic moisture while preserving vital internal cluster heat.</p>
                    <h2>3. Nadiring (Expansion From Below)</h2>
                    <p>In wild arboreal ecosystems, wild honeybee clusters develop logically by drawing natural comb downward. Thus, in Warré management, when an existing box becomes congested, you never place an empty super above! Rather, you lift the hive and slide an empty box directly <strong>underneath</strong> the colony (nadiring). In late autumn, you gently harvest only the highly ripened upper surplus box, leaving the bees with undisturbed pristine honey arches deep in the lower wintering chambers.</p>
                `,
                es: `
                    <p>La apicultura industrial moderna agota a las abejas con enormes colmenas de cuadros invasivos, trashumancias estresantes y láminas de cera artificiales contaminadas con residuos de pesticidas. El abad Émile Warré creó a principios del siglo XX <em>La Colmena del Pueblo</em>: una colmena súper sencilla, extremadamente respetuosa con la biología del enjambre y muy fácil de autoconstruir con simples tablas de madera.</p>
                    <h2>1. Dimensiones y Panales Naturales Warré</h2>
                    <p>La colmena Warré se basa en pequeñas cajas de madera cuadradas e idénticas que miden exactamente 30 cm × 30 cm en su interior, con 21 cm de altura. A diferencia de las colmenas comerciales Dadant o Langstroth, no tiene marcos de madera. En su lugar, utiliza listones superiores (barretas) sobre los cuales las abejas labran libremente sus propios panales de cera 100% pura y natural de arriba hacia abajo, ¡igual que en el hueco de un árbol salvaje!</p>
                    <h2>2. Regulación Térmica y el Cojín Aislante</h2>
                    <p>El techo de la colmena Warré alberga su mayor acierto de diseño: el <em>Cojín Aislante</em> o Quilt. Es un cajón de madera lleno de virutas de madera sin tratar, paja o hojas secas, colocado sobre una tela de arpillera. Este cojín absorbe toda la humedad metabólica excesiva durante el crudo invierno y, al mismo tiempo, retiene el calor vital que genera la piña de abejas.</p>
                    <h2>3. Ampliación por Debajo (Nadiring)</h2>
                    <p>En la naturaleza, un enjambre salvaje crece estirando sus panales hacia abajo. Por eso, en el manejo Warré, cuando una caja se llena, ¡nunca se le pone un alza vacía por encima! Lo que se hace es levantar la colmena y deslizar una caja vacía directamente <strong>por debajo</strong>. A finales del verano, simplemente se cosecha la caja superior que ya está madura y sellada, dejando a las abejas con sus reservas de miel intactas y perfectas en las cámaras inferiores para pasar el invierno.</p>
                `
            },
            resources: [
                { name: "🐝 Plans de Menuiserie Ruche Warré (PDF 15p)", url: "#" },
                { name: "📖 L'Apiculture Pour Tous (Livre Culte Abbé Warré PDF)", url: "#" }
            ],
            comments: [
                { author: "AmiDesAbeilles", date: "18 août 2014", text: "Depuis que je suis passé en Warré, la mortalité hivernale de mes essaims a chuté de 40% à 5%. Laisser aux abeilles leur propre miel pour l'hiver change tout." }
            ]
        },
        {
            id: "cultiver-spiruline",
            category: "production",
            date: "14 août 2014",
            readingTime: 6,
            reactions: 48,
            image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
            tags: ["Spiruline", "Autoproduction", "Superaliment", "Algues", "Bassin"],
            title: {
                fr: "Comment cultiver, produire et transformer la Spiruline",
                en: "How to Cultivate, Produce and Process Spirulina",
                es: "Cómo cultivar, producir y procesar Espirulina"
            },
            desc: {
                fr: "Manuels de culture, construction de bassins raceway, brassage et récolte de la spiruline artisanale pour une autonomie nutritionnelle.",
                en: "Open manuals for setting up small-scale artisanal raceway basins, solar agitation systems, and harvesting pure organic spirulina.",
                es: "Manuales abiertos para montar estanques artesanales tipo raceway, sistemas de agitación y cosecha de espirulina orgánica pura."
            },
            content: {
                fr: `
                    <p>La spiruline (<em>Arthrospira platensis</em>) est une micro-algue primitive d'une richesse nutritionnelle stupéfiante. Composée à 60% de protéines hautement assimilables, de fer, de bêta-carotène et de phycocyanine (un puissant antioxydant), elle peut être cultivée de manière totalement artisanale dans une simple serre de jardin.</p>
                    <h2>1. Le Bassin (Le "Raceway")</h2>
                    <p>Construisez un bassin de faible profondeur (15 à 20 cm d'eau suffisent) avec un cadre en parpaings ou en planches de bois, recouvert d'une bâche géomembrane ou d'une bâche EPDM de qualité alimentaire. Placez ce bassin sous une serre pour maintenir une température de culture idéale située entre 30°C et 37°C pendant la belle saison.</p>
                    <h2>2. Le Milieu de Culture (L'Eau Alcaline)</h2>
                    <p>La spiruline ne pousse pas dans de l'eau douce classique ! Elle exige un milieu très alcalin (pH situé entre 9.5 et 10.5). Pour créer ce milieu, on dissout dans l'eau du bicarbonate de sodium, du sel marin pur (environ 5g/litre) et des nutriments organiques (urée ou nitrate de potassium, phosphate, fer).</p>
                    <h2>3. Brassage et Récolte</h2>
                    <p>Pour que toutes les algues reçoivent du soleil, l'eau doit être doucement agitée 15 minutes par heure à l'aide d'une petite roue à aubes alimentée par un panneau solaire 12V ou par une simple pompe d'aquarium. La récolte s'effectue le matin en filtrant l'eau verte à travers une toile à mailles très fines (exactly 30 à 50 microns). On obtient une pâte vert émeraude que l'on presse, que l'on extrude en fins spaghettis et que l'on fait sécher à l'ombre à moins de 42°C pour conserver toutes ses vitamines.</p>
                `,
                en: `
                    <p>Spirulina (<em>Arthrospira platensis</em>) is a primitive ancient micro-algae exhibiting awe-inspiring nutritional density. Consisting of roughly 60% complete bio-available protein, rich bio-iron, potent anti-inflammatory phycocyanin, and key essential amino acids, it can be seamlessly cultivated at an artisanal homestead scale inside a simple backyard polytunnel greenhouse.</p>
                    <h2>1. Crafting the Raceway Basin</h2>
                    <p>Erect a shallow raceway pond (optimal operational water depth is strictly 15 to 20 cm) structured with concrete blocks or raw timber perimeter walls lined with an approved food-grade EPDM rubber liner. Position this basin securely under a glazed solar polytunnel greenhouse to capture and sustain optimal summer growing thermal profiles ranging strictly between 30°C and 37°C.</p>
                    <h2>2. Mixing the Alkaline Culture Medium</h2>
                    <p>Spirulina will perish in standard fresh soft tap water! It requires a highly specific alkaline micro-environment (pH range strictly between 9.5 and 10.5). To formulate this culture medium, carefully mix clean pure water with sodium bicarbonate, non-iodized pure marine sea salt (approx. 5 grams per litre), and precise bio-nutrients (potassium nitrate, key available phosphates, and chelated bio-iron).</p>
                    <h2>3. Solar Agitation & Micro-Filtration Harvest</h2>
                    <p>To guarantee uniform solar photon distribution across the complete cellular biomass, the warm alkaline water must be gently paddled or agitated for roughly 15 minutes per hour using a low-draw 12V solar-powered paddlewheel or simple aquarium bubbler. Harvesting is optimally executed in the early morning by scooping the deep green culture liquor and straining it through a specialized ultra-fine monofilament mesh screen (exactly 30 to 50 microns). The concentrated deep green paste is pressed, gently extruded into fine strings, and solar-dried in the shade below 42°C to prevent thermal enzyme denaturation.</p>
                `,
                es: `
                    <p>La espirulina (<em>Arthrospira platensis</em>) es una microalga primitiva milenaria de una densidad nutricional asombrosa. Compuesta en un 60% por proteínas altamente asimilables, hierro biológico, betacarotenos y ficocianina (un potente antioxidante), puede ser cultivada de forma 100% artesanal en un simple invernadero de huerta.</p>
                    <h2>1. Construcción del Estanque (Raceway)</h2>
                    <p>Construye un estanque de poca profundidad (el nivel de agua óptimo es de solo 15 a 20 cm) utilizando un marco de bloques de hormigón o tablones de madera forrados con una geomembrana de EPDM de calidad alimentaria. Sitúa este estanque dentro de un invernadero solar para retener una temperatura de crecimiento ideal situada entre los 30°C y 37°C durante los meses cálidos.</p>
                    <h2>2. Mezcla del Medio de Cultivo Alcalino</h2>
                    <p>¡La espirulina no sobrevive en agua dulce convencional! Exige un medio acuático intensamente alcalino (con un pH estricto situado entre 9.5 y 10.5). Para preparar este medio, disuelve en agua limpia bicarbonato de sodio, sal marina pura sin yodar (unos 5 gramos por litro) y nutrientes clave (nitrato de potasio, fosfatos y hierro biológico).</p>
                    <h2>3. Agitación Solar y Cosecha por Microfiltración</h2>
                    <p>Para asegurar que todas las células reciban la radiación solar necesaria, el agua alcalina debe agitarse de forma suave durante 15 minutos cada hora utilizando una pequeña rueda de paletas accionada por un panel solar 12V o una bomba de aireador. La cosecha se realiza temprano en la mañana filtrando el agua verde a través de una malla fina especial (de 30 a 50 micras). Se obtiene una pasta verde esmeralda que se escurre, se extrude formando finos hilos y se deshidrata a la sombra a menos de 42°C para no dañar sus valiosas enzimas activas.</p>
                `
            },
            resources: [
                { name: "🌊 Petit Manuel de Culture Spiruline (PDF 20p)", url: "#" },
                { name: "📋 Fournisseurs Souches & Tamis 40 microns", url: "#" }
            ],
            comments: [
                { author: "Algue_Libre", date: "22 août 2014", text: "Excellent résumé. Pour le fer, si vous ne trouvez pas de fer chélaté, quelques vieux clous rouillés trempés dans du vinaigre puis neutralisés font l'affaire en low-tech !" }
            ]
        },
        {
            id: "construire-dome",
            category: "habitat",
            date: "14 août 2014",
            readingTime: 8,
            reactions: 79,
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
            tags: ["Dôme", "Géodésique", "Buckminster Fuller", "Serre", "Autoconstruction"],
            title: {
                fr: "Comment construire un Dôme Géodésique (Calculs et Plans)",
                en: "How to Build a Geodesic Dome (Calculations & Blueprints)",
                es: "Cómo construir un Domo Geodésico (Cálculos y Planos)"
            },
            desc: {
                fr: "Pourquoi et comment autoconstruire une serre ou un habitat en dôme géodésique. Tuto, connecteurs maison, géométrie et tableaux de longueurs.",
                en: "Why and how to calculate, prepare timber struts, and erect a sturdy geodesic dome greenhouse or sustainable off-grid timber dwelling.",
                es: "Por qué y cómo autoconstruir un domo geodésico para invernadero o vivienda. Cálculos de barras, nodos caseros y geometría explicada."
            },
            content: {
                fr: `
                    <p>Inventé par le génial architecte visionnaire Richard Buckminster Fuller, le <em>Dôme Géodésique</em> est la structure de construction humaine qui offre le volume intérieur le plus vaste avec la surface de matériaux la plus réduite. Inébranlable face aux ouragans et aux charges de neige, c'est un incontournable de l'architecture libre.</p>
                    <h2>1. Comprendre la "Fréquence" (V1, V2, V3)</h2>
                    <p>Un dôme géodésique est une sphère divisée en triangles. Plus vous divisez ces triangles, plus la structure est ronde et résistante : c'est la <em>fréquence</em> (notée V).</p>
                    <ul>
                        <li><strong>Dôme V1 :</strong> Très simple (un icosaèdre). Toutes les barres ont exactly la même longueur ! Idéal pour une petite cabane pour enfants ou une mini-serre.</li>
                        <li><strong>Dôme V2 :</strong> Le plus populaire en autoconstruction. Il utilise only 2 longueurs de barres différentes (notées A et B). Assemblez 65 barres avec 26 connecteurs pour obtenir un superbe dôme d'environ 5m de diamètre.</li>
                        <li><strong>Dôme V3 :</strong> Plus complexe, idéal pour un habitat permanent de 7 à 9 mètres de diamètre. Il exige 3 longueurs de barres (A, B et C).</li>
                    </ul>
                    <h2>2. Fabriquer ses Propres Connecteurs (Low-Tech)</h2>
                    <p>Les connecteurs commerciaux coûtent une fortune. La solution d'autoconstructeur ? Utilisez de simples tuyaux en acier galvanisé de plomberie (ou du tube électrique en acier). Coupez des morceaux de 10 cm, aplatissez les deux extrémités à la massue ou à l'étau, et percez un trou pour faire passer un boulon robuste en acier. Vissez ensuite ces embouts aplatissés sur vos chevrons en bois !</p>
                    <h2>3. Couverture de Serre ou Voligeage Bois</h2>
                    <p>Si vous montez une serre géodésique, recouvrez la charpente avec une bâche de serre thermique en polyéthylène ou des panneaux de polycarbonate alvéolaire découpés en triangles. Si c'est pour y vivre, posez un voligeage en lambris de sapin, isolez en ouate de cellulose ou en liège expansé, et couvrez l'extérieur de bardeaux de bois (tavaillons) ou d'une toile goudronnée.</p>
                `,
                en: `
                    <p>Invented by the legendary architectural systems visionary Richard Buckminster Fuller, the <em>Geodesic Dome</em> is humanity’s most efficient structural system, enclosing the absolute maximum structural interior volume using the bare minimum surface area and structural materials. Immovable under seismic forces and blizzard snow loads, it is an iconic hallmark of decentralized architectural freedom.</p>
                    <h2>1. Mastering Structural Frequency (V1, V2, V3)</h2>
                    <p>A geodesic dome maps complex spatial spherical geometry via interconnected triangular planes. The higher the number of triangle subdivisions, the more perfectly spherical and immensely strong the resulting frame becomes. This subdivision logic is known as structural <em>Frequency</em> (V).</p>
                    <ul>
                        <li><strong>V1 Frame (Icosahedron):</strong> Exceptionally straightforward. Every single timber strut shares exactly the same exact length! Perfect for rapid lightweight emergency shelters, garden cold frames, or kids' treehouses.</li>
                        <li><strong>V2 Frame:</strong> The absolute sweet spot for DIY homestead builders. It utilizes exactly 2 distinct strut lengths (A and B). Interlocking 65 structural timber struts across 26 custom hubs yields a stunning community greenhouse roughly 5 meters in diameter.</li>
                        <li><strong>V3 Frame:</strong> Ideal for highly ambitious, expansive permanent off-grid family dwellings 7 to 9 meters across. Requires precise coordination of 3 strut lengths (A, B, and C).</li>
                    </ul>
                    <h2>2. Handcrafting Low-Tech Hub Connectors</h2>
                    <p>Commercial proprietary aluminum geodesic connector hubs are astronomically expensive. The ingenious DIY homesteader workaround? Buy standard galvanized steel plumbing conduit pipes. Slice them into robust 10 cm sleeves, smash both ends flat in a heavy mechanical bench vise or with a heavy 10lb sledgehammer, and drill a central through-hole for a structural 3/8" steel hex bolt. Secure these flattened metal end-caps directly to your angled wooden rafters!</p>
                    <h2>3. Skinning: Glazed Poly or Timber Shingles</h2>
                    <p>To establish a spectacular geodesic bio-greenhouse, wrap the external skeleton with UV-treated heavy-duty greenhouse polyethylene film or exact triangular polycarbonate glazing panels. For genuine permanent living quarters, skin the wooden frame with solid tongue-and-groove pine boarding, blow in thick dense cellulose or wool batting insulation, and clad the exterior weather-skin with handcrafted cedar shingles (tavaillons).</p>
                `,
                es: `
                    <p>Creado por el brillante arquitecto visionario Richard Buckminster Fuller, el <em>Domo Geodésico</em> es la estructura humana que encierra el mayor volumen interior utilizando la menor superficie y cantidad de materiales. Prácticamente indestructible ante tormentas severas y terremotos, es un verdadero icono de la arquitectura libre de autoconstrucción.</p>
                    <h2>1. Entender la Frecuencia Estructural (V1, V2, V3)</h2>
                    <p>Un domo geodésico proyecta una esfera subdividiéndola en triángulos. Cuanto mayor sea el número de subdivisiones, más perfectamente esférica y extremadamente resistente será la estructura. A esto se le llama <em>Frecuencia</em> estructural (V).</p>
                    <ul>
                        <li><strong>Domo V1:</strong> Muy sencillo (un icosaedro básico). ¡Todas y cada una de las barras de madera tienen exactamente la misma longitud! Perfecto para refugios de emergencia rápidos o mini-invernaderos.</li>
                        <li><strong>Domo V2:</strong> El gran favorito de los autoconstructores. Utiliza solo 2 longitudes de barras distintas (A y B). Ensamblando 65 barras con 26 uniones nodales se obtiene un espectacular domo de 5 metros de diámetro.</li>
                        <li><strong>Domo V3:</strong> Más avanzado y elegante, ideal para viviendas permanentes de 7 a 9 metros de diámetro. Utiliza 3 longitudes de barras (A, B y C).</li>
                    </ul>
                    <h2>2. Fabricación Casera de Nodos de Unión (Low-Tech)</h2>
                    <p>Los conectores comerciales de aluminio cuestan una fortuna. ¿El genial truco de los autoconstructores? Comprar simples tubos de fontanería de acero galvanizado. Córtalos en trozos de 10 cm, aplasta ambos extremos con un martillo pesado o en un tornillo de banco mecánico y taladra un agujero central para un tornillo pasante de acero de alta resistencia. ¡Luego atornilla estos terminales de metal aplastados directamente a tus listones de madera!</p>
                    <h2>3. Revestimiento: Invernadero o Vivienda de Madera</h2>
                    <p>Si construyes un invernadero geodésico, cubre la estructura con plástico térmico de invernadero de larga duración o con placas de policarbonato alveolar cortadas en triángulos exactos. Si es para vivir de forma permanente, clava un friso de tablas de pino, inyecta celulosa o lana de oveja como aislamiento y reviste la piel exterior con tejas artesanales de madera (tavaillons) o lona impermeable tratada.</p>
                `
            },
            resources: [
                { name: "📐 Calculateur Automatique Longueurs Dôme (HTML)", url: "#" },
                { name: "🔨 Tuto Nodos de Acero Aplastado (PDF)", url: "#" }
            ],
            comments: [
                { author: "BuckyFan", date: "16 août 2014", text: "Le conseil des tuyaux de plomberie aplatissés est légendaire. J'ai monté ma serre V2 en un week-end avec mes voisins grâce à ça !" }
            ]
        },
        {
            id: "nddl-zad",
            category: "action",
            date: "11 août 2014",
            readingTime: 6,
            reactions: 112,
            image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
            tags: ["NDDL", "ZAD", "Résistance", "Action Directe", "Autonomie"],
            title: {
                fr: "Résistance & Action Directe : Défendre la Terre (ZAD de NDDL)",
                en: "Resistance & Direct Action: Defending the Earth (ZAD NDDL)",
                es: "Resistencia y Acción Directa: Defender la Tierra (ZAD NDDL)"
            },
            desc: {
                fr: "Reportages, textes de lutte et liens consacrés à la Zone À Défendre (ZAD) de Notre-Dame-des-Landes. Organisation, blocage et autogestion.",
                en: "Dispatches, practical resistance manuals, and links dedicated to the historical Autonomous Defense Zone (ZAD) at Notre-Dame-des-Landes.",
                es: "Reportajes, manuales de resistencia práctica y enlaces dedicados a la histórica Zona a Defender (ZAD) de Notre-Dame-des-Landes."
            },
            content: {
                fr: `
                    <p>Pendant plus de dix ans, le bocage de Notre-Dame-des-Landes (près de Nantes) a été le théâtre de l'une des luttes écologiques et anticapitalistes les plus intenses d'Europe. Face à un projet d'aéroport absurde et destructeur d'un écosystème de zones humides unique, des paysans, des militants, des anarchistes et des habitants ont inventé une Zone À Défendre (ZAD). La victoire finale en 2018 a prouvé que la résistance de terrain et l'occupation fonctionnent.</p>
                    <h2>1. L'Occupation et les Cabanes</h2>
                    <p>Pour empêcher les pelleteuses d'entrer, il ne suffit pas de signer des pétitions. La ZAD s'est structurée par l'édification de centaines de cabanes dans les arbres, de barricades vivantes, de fermes occupées et de boulangeries collectives autoconstruites. C'est l'incarnation de notre devise : <em>"Contre leur monde bétonné, construisons nos propres alternatives vivantes."</em></p>
                    <h2>2. S'organiser en Assemblées Horizontales</h2>
                    <p>Comment prendre des décisions à plusieurs centaines de personnes sans chef ni partis politiques ? La ZAD a développé des assemblées d'usage, des comités d'accueil et des réseaux de ravitaillement locaux pour soutenir les occupants face au siège des forces de l'ordre. Une école vivante d'anarchie et de démocratie directe.</p>
                    <h2>3. Recommandations de Base pour Toute Lutte :</h2>
                    <ul>
                        <li><strong>Ne jamais lutter seul :</strong> Connectez toujours les luttes environnementales avec les luttes paysannes et sociales locales.</li>
                        <li><strong>Multiplier les tactiques :</strong> La ZAD a réussi parce qu'elle unissait les recours juridiques des associations classiques avec l'action directe de blocage et l'occupation physique des terres.</li>
                        <li><strong>Créer des outils d'autonomie :</strong> Radio ZAD (station pirate FM locale), la Vraie Démocratie (bibliothèque et infokiosque), et le marché non-marchand (prix libre et don).</li>
                    </ul>
                `,
                en: `
                    <p>For more than a decade, the lush bocage and wetlands of Notre-Dame-des-Landes (near Nantes, France) served as the epicenter of Europe's most intense, triumphant radical grassroots ecological struggle. Standing steadfast against a heavily corrupted mega-airport project designed to obliterate immense pristine biodiversity, local farmers, radical ecologists, anarchists, and local neighbors forged a permanent Autonomous Defense Zone (ZAD). Their absolute historic victory in 2018 proved beyond doubt that direct action and uncompromising physical land occupation works.</p>
                    <h2>1. Proactive Occupation & Treehouses</h2>
                    <p>To halt corporate bulldozers and logging heavy machinery, polite online petitions are entirely futile. The ZAD defended its territory by erecting an awe-inspiring decentralized defensive matrix: towering arboreal treehouses, highly reinforced complex road barricades, reclaimed historic dairy farms, and self-built collective wood-fired bakeries. It remains the living embodiment of our core manifesto: <em>"Against their concrete wasteland, we build our own thriving living alternatives."</em></p>
                    <h2>2. Direct Democracy & Horizontal Assemblies</h2>
                    <p>How do you execute complex decentralized tactical coordination across hundreds of autonomous collective individuals without authoritarian hierarchy or reformist political parties? The ZAD masterfully formulated horizontal weekly general assemblies, mutual-aid dispute resolution committees, and extensive localized clandestine logistics supply lines to break state police blockades. It established an immortal living university of practical anarchy and authentic direct democracy.</p>
                    <h2>3. Fundamental Directives for Any Resistance:</h2>
                    <ul>
                        <li><strong>Never Resist in Isolation:</strong> Seamlessly weave radical decentralized environmental defense networks with established indigenous and smallholder farmers' struggles.</li>
                        <li><strong>Embrace a Diversity of Tactics:</strong> The historic ZAD succeeded because it unified the formal legal defense actions of mainstream conservation groups with the uncompromising physical direct actions of grassroots blockades.</li>
                        <li><strong>Build Living Autonomous Infrastructure:</strong> Radio ZAD (a highly effective encrypted local pirate FM radio station), fully supplied self-managed field kitchens, open infokiosks, and non-commercial mutual-aid free markets.</li>
                    </ul>
                `,
                es: `
                    <p>Durante más de una década, los exuberantes bosques y humedales de Notre-Dame-des-Landes (cerca de Nantes, Francia) fueron el escenario de la lucha ecológica y anticapitalista radical más victoriosa y emblemática de Europa. Frente a un mega-proyecto de aeropuerto inútil e intensamente corrupto diseñado para arrasar un ecosistema único, campesinos locales, activistas radicales y vecinos fundaron una Zona a Defender (ZAD) permanente. La aplastante y total victoria popular en 2018 demostró de forma rotunda que la acción directa y la ocupación física e intransigente del territorio funcionan.</p>
                    <h2>1. Ocupación Activa y Cabañas en los Árboles</h2>
                    <p>Para detener a las excavadoras y a la maquinaria pesada de las corporaciones no basta con firmar amables peticiones por internet. La ZAD defendió su territorio levantando una impresionante red de infraestructura autoconstruida: altas cabañas fortificadas en los árboles, complejas barricadas vivas, granjas históricas recuperadas y panaderías colectivas con hornos de leña. Es la encarnación viva de nuestro lema central: <em>"Contra su mundo de hormigón, construimos nuestras propias alternativas vivas."</em></p>
                    <h2>2. Organización mediante Asambleas Horizontales</h2>
                    <p>¿Cómo tomar decisiones estratégicas y gestionar la convivencia entre cientos de personas sin jefes ni partidos políticos autoritarios? La ZAD estructuró asambleas generales horizontales abiertas, comités de resolución de conflictos de apoyo mutuo y extensas redes locales de abastecimiento clandestino para resistir el asedio policial. Formó una verdadera escuela viva de anarquía práctica y auténtica democracia directa.</p>
                    <h2>3. Recomendaciones Clave para Cualquier Lucha:</h2>
                    <ul>
                        <li><strong>Nunca Luches en Aislamiento:</strong> Conecta de forma inseparable la defensa ambiental radical con las luchas históricas de los pequeños agricultores y campesinos locales.</li>
                        <li><strong>Abraza la Diversidad de Tácticas:</strong> La ZAD triunfó porque supo coordinar las acciones legales formales de las asociaciones tradicionales con las acciones directas de bloqueo y ocupación física inquebrantable del terreno.</li>
                        <li><strong>Crea Herramientas de Autonomía Viva:</strong> Radio ZAD (una eficiente estación de radio pirata local en FM), comedores comunitarios autogestionados de apoyo mutuo, bibliotecas libres e infokioscos con mercados de trueque y donación.</li>
                    </ul>
                `
            },
            resources: [
                { name: "✊ Manuel de Résistance et Constitution de ZAD", url: "#" },
                { name: "🔗 Visiter le site officiel Zad.nadir.org", url: "http://zad.nadir.org/" }
            ],
            comments: [
                { author: "Camarade_Bocage", date: "12 août 2014", text: "Ce qu'on a vécu sur la ZAD montre le chemin. Si tu sais pas quoi faire de ta vie, prends tes bottes, un râteau et viens nous aider à planter des haies !" }
            ]
        },
        {
            id: "produire-alcool",
            category: "production",
            date: "11 août 2014",
            readingTime: 10,
            reactions: 84,
            image: "https://images.unsplash.com/photo-1584225065152-4a145af2224b?auto=format&fit=crop&w=800&q=80",
            tags: ["Bière", "Fermentation", "Alcool", "Distillation", "Cidre", "Autoproduction"],
            title: {
                fr: "Pratique — Comment faire de l'alcool (Bière, Vin, Cidre, Vinaigre)",
                en: "Practical — Master Brewing (Beer, Wine, Cider, Vinegar)",
                es: "Práctico — Cómo hacer alcohol (Cerveza, Vino, Sidra, Vinagre)"
            },
            desc: {
                fr: "Produire de l'alcool maison : brasser sa bière, vin de fruits, cidre sauvage, malter l'orge et réaliser ses teintures médicinales.",
                en: "Comprehensive master guide for DIY artisan brewing: wild apple cider, all-grain mash beer brewing, fruit wines, and herbal tinctures.",
                es: "Guía práctica completa para la elaboración artesanal de cerveza de grano, sidra de manzana salvaje, vinos de frutas y tinturas herbales."
            },
            content: {
                fr: `
                    <p>La fermentation alcoolique est le fruit du travail merveilleux des levures (les <em>Saccharomyces</em>) qui transforiment les sucres des fruits ou des céréales en alcool et en gaz carbonique. Brasser sa propre bière ou faire son cidre n'est pas qu'un plaisir convivial, c'est un excellent moyen de valoriser les fruits excédentaires du verger.</p>
                    <h2>1. Le Cidre Sauvage (La Boisson Low-Tech par Excellence)</h2>
                    <p>Récoltez des pommes à cidre (un mélange de pommes douces, amères et acidulées). Broyez-les grossièrement avec un pilon en bois dans un tonneau ou avec un broyeur manuel. Pressez la pulpe dans un pressoir à vis pour en extraire le moût. Entonnez ce pur jus dans une dame-jeanne en verre munie d'un barboteur (pour laisser sortir le CO2 sans faire entrer d'air). Ne rajoutez aucune levure ! Les levures naturellement présentes sur la peau des pommes vont lancer la fermentation spontanée. Au bout de 2 à 3 mois, mettez en bouteilles à joint mécanique pour obtenir un cidre pétillant fabuleux.</p>
                    <h2>2. Le Brassage de Bière Tout-Grain (Les 4 Étapes)</h2>
                    <p>Pour faire une bière de garde authentique sans kit industriel, il faut maîtriser le processus de brassage :</p>
                    <ol>
                        <li><strong>L'Empâtage :</strong> Concassez du malt d'orge (orge germée puis touraillée). Mélangez-le dans de l'eau chauffée à exactly 65°C-68°C pendant 1 heure. Les enzymes du malt vont découper l'amidon en sucres fermentescibles.</li>
                        <li><strong>L'Ébullition et le Houblonnage :</strong> Filtrez le moût sucré et portez-le à forte ébullition pendant 60 minutes. Jetez-y des cônes de houblon frais ou secs (les acides alpha du houblon apportent l'amertume et aseptisent la bière).</li>
                        <li><strong>La Fermentation :</strong> Refroidissez le moût rapidement à 20°C, ensemencez avec de la levure de bière, et laissez fermenter 2 à 3 semaines dans un seau étanche muni d'un barboteur.</li>
                        <li><strong>L'Embouteillage :</strong> Ajoutez exactly 6 grammes de sucre par litre pour relancer une mini-fermentation en bouteille qui créera la mousse et les bulles.</li>
                    </ol>
                    <h2>3. De l'Alcool au Vinaigre (La Mère)</h2>
                    <p>Si vous laissez du vin ou du cidre à l'air libre dans un vinaigrier à 25°C, une pellicule gélatineuse va se former en surface : c'est la <em>Mère de vinaigre</em> (des bactéries <em>Acetobacter</em>). Elle transforme l'alcool en acide acétique. Indispensable pour vos lactofermentations et vos conserves !</p>
                `,
                en: `
                    <p>Alcoholic wild fermentation is the magnificent gift of complex microscopic living yeasts (primarily <em>Saccharomyces cerevisiae</em>) naturally transforming available fruit or cereal sugars into active warming ethyl alcohol and lively carbon dioxide. Brewing your own artisan beer or wild hard cider is not merely an immensely satisfying domestic craft—it is the ultimate historic strategy for storing high-sugar autumn orchard windfalls.</p>
                    <h2>1. Wild Homestead Hard Apple Cider (Zero-Input Hard Cider)</h2>
                    <p>Scavenge and harvest highly diverse heirloom un-sprayed apples (optimally balancing sweet, sharp, and bitter tannin varieties). Crush them into a rough pomace mash using a clean wooden rammer inside a heavy oak barrel or with an upcycled mechanical hand crank fruit scratter. Squeeze this thick wet mash within a robust mechanical oak screw press to extract pure golden unpasteurized sweet must. Pour this raw juice directly into a large glass demijohn (carboy) fitted with a clean liquid airlock to freely vent cellular carbon dioxide while completely locking out spoiling atmospheric oxygen. Do not inoculate with commercial packet yeast! The wild bloom yeasts naturally inhabiting the waxy skins of the organic apples will spontaneously trigger an incredibly vigorous hard fermentation. Within 2 to 3 months, siphon the dry amber liquid into heavy flip-top swing-lock bottles to finish curing into a sensational crisp sparkling cider.</p>
                    <h2>2. All-Grain Artisan Beer Brewing (The 4 Canonical Pillars)</h2>
                    <p>To craft an authentic all-grain homestead ale completely free from inferior automated syrup kits, you must master the fundamental alchemy of traditional all-grain mash brewing:</p>
                    <ol>
                        <li><strong>Mashing:</strong> Coarsely crush highly modified barley malt (barley actively sprouted to unleash internal starch enzymes, then gently kilned). Mix this crushed grist into pure clean water heated to exactly 65°C to 68°C for precisely 60 minutes. Active natural starch enzymes flawlessly break down complex grain polysaccharides into easily fermentable simple maltose sugars.</li>
                        <li><strong>The Boil & Hop Schedulation:</strong> Drain and sparge the sweet wort liquid, transfer to a heavy brew kettle, and achieve a rolling boil for exactly 60 minutes. Toss in generous fistfuls of raw homegrown wild hop cones (active bitter alpha-acids and potent herbal polyphenols deeply balance the residual sweetness while highly sanitizing the liquor against spoilage).</li>
                        <li><strong>Fermentation Primary:</strong> Rapidly crash cool the boiled wort down to exactly 20°C, pitch a vigorous ale yeast culture, and let the batch culture deep in a sealed, dark airlocked vessel for 2 to 3 solid weeks.</li>
                        <li><strong>Bottle Conditioning:</strong> Gently dissolve exactly 6 grams of pure priming corn sugar per litre of fermented ale before siphoning into heavy glass amber bottles. This tiny additional sugar dosage naturally triggers a highly controlled micro-fermentation inside the sealed glass, establishing rich thick creamy carbonation and an unshakeable solid beer cap.</li>
                    </ol>
                    <h2>3. From Hard Ale to Sourdough Vinegar (The Mother Matrix)</h2>
                    <p>If you intentionally expose raw unpasteurized fruit wine, hard cider, or real beer to fresh oxygen inside an open-mouthed ceramic crock at roughly 25°C, a dense gelatinous cellulose SCOBY biofilm will eventually materialize across the surface. This is the fabled <em>Vinegar Mother</em> (a dense symbiosis of <em>Acetobacter</em> bacteria). It converts internal ethyl alcohol directly into clean complex acetic acid. It remains absolutely indispensable for traditional homestead food pickling, wild culinary dressings, and highly non-toxic domestic household surface sanitation!</p>
                `,
                es: `
                    <p>La fermentación alcohólica es el resultado del maravilloso trabajo de las levaduras microscópicas (principalmente <em>Saccharomyces</em>) que transforman los azúcares naturales de las frutas o cereales en alcohol etílico y dióxido de carbono. Elaborar tu propia cerveza artesanal o hacer tu propia sidra no es solo un inmenso placer casero, es el método campesino tradicional por excelencia para aprovechar y conservar los grandes excedentes de la huerta y el huerto frutal.</p>
                    <h2>1. Sidra Salvaje de Manzana (El Arte de la Fermentación sin Insumos)</h2>
                    <p>Recolecta manzanas de variedades mixtas (buscando un buen equilibrio entre dulces, ácidas y amargas para aportar taninos). Tritúralas hasta formar una pulpa gruesa utilizando un pisón de madera en un barril o un molino triturador manual. Introduce esta pulpa en una prensa de husillo para extraer todo el jugo dorado y dulce. Vierte este mosto crudo directamente en una damajuana de vidrio provista de una válvula de fermentación (airlock) que permita la salida del CO2 sin dejar entrar el aire exterior. ¡No añadas ningún sobre de levadura comercial! Las levaduras salvajes que habitan de forma natural en la piel encerada de las manzanas ecológicas iniciarán de forma espontánea una espectacular fermentación. Tras 2 o 3 meses, embotella la sidra en botellas de vidrio con tapón mecánico de cerámica para obtener una bebida espumosa y crujiente de calidad insuperable.</p>
                    <h2>2. Elaboración de Cerveza Todo-Grano (Los 4 Pilares del Maestro Cervecer)</h2>
                    <p>Para elaborar una auténtica cerveza artesanal partiendo del grano crudo y liberándote de los aburridos kits de extracto industrial, debes dominar el proceso de maceración:</p>
                    <ol>
                        <li><strong>Maceración (Empaste):</strong> Muele ligeramente malta de cebada (grano de cebada germinado para activar sus enzimas y luego tostado). Mezcla el grano en agua caliente mantenida exactamente entre 65°C y 68°C durante 60 minutos. Las enzimas naturales de la malta convertirán todo el almidón del grano en azúcares fermentables (maltosa).</li>
                        <li><strong>Ebullición y Lupulado:</strong> Filtra y lava el grano para obtener un mosto azucarado limpio y llévalo a ebullición intensa y continua durante 60 minutos. Añade conos de lúpulo salvaje o cultivado (los ácidos alfa del lúpulo aportan el característico amargor que equilibra el dulzor y actúan como un potente conservante natural).</li>
                        <li><strong>Fermentación Primaria:</strong> Enfría rápidamente el mosto hasta los 20°C, añade un cultivo vivo de levadura cervecera y deja fermentar la mezcla en un fermentador hermético en un lugar oscuro entre 2 y 3 semanas.</li>
                        <li><strong>Refermentación en Botella (Carbonatación):</strong> Disuelve exactamente 6 gramos de azúcar de caña o maíz por cada litro de cerveza antes de embotellarla. Este pequeño aporte de azúcar reactivará a las levaduras dentro de la botella cerrada, generando de forma 100% natural todo el gas, las burbujas y una corona de espuma densa y cremosa.</li>
                    </ol>
                    <h2>3. Del Alcohol al Vinagre Vivo (La Madre)</h2>
                    <p>Si dejas vino de frutas, sidra cruda o cerveza expuesta al aire libre en un recipiente de barro o cerámica cubierto solo con una tela a unos 25°C, con el tiempo se formará en la superficie una densa capa gelatinosa. Esta es la legendaria <em>Madre del Vinagre</em> (un cultivo simbiótico de bacterias <em>Acetobacter</em>). Se alimenta del alcohol y lo transforma en ácido acético puro y digestivo. ¡Es una joya absolutamente insustituible para tus conservas encurtidas, aderezos de cocina y como un potente limpiador y desinfectante doméstico sin tóxicos!</p>
                `
            },
            resources: [
                { name: "🍺 Petit Traité de Brasserie Tout-Grain (PDF 40p)", url: "#" },
                { name: "🍎 Manuel de Pressage et Cidre Traditionnel", url: "#" }
            ],
            comments: [
                { author: "Brasseur_Ardennes", date: "12 août 2014", text: "Le détail des 65°C pour l'empâtage est la clé. Si vous chauffez trop (au-dessus de 72°C), vous obtenez des sucres non fermentescibles et la bière reste lourde et plate. Bon tuto !" }
            ]
        },
        {
            id: "faire-son-pain",
            category: "production",
            date: "11 août 2014",
            readingTime: 8,
            reactions: 93,
            image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            tags: ["Pain", "Levain Naturel", "Four à Bois", "Autoproduction", "Céréales", "Farine"],
            title: {
                fr: "Pratique — Comment faire son Pain au Levain Naturel",
                en: "Practical — Wild Sourdough Bread Handcrafting",
                es: "Práctico — Cómo hacer Pan con Masa Madre Natural"
            },
            desc: {
                fr: "Tout pour autoproduire son pain : capturer les levures sauvages, nourrir son levain, pétrissage, autolyse et cuisson au four à bois ou cocotte.",
                en: "Mastering natural open hearth sourdough bread making: capturing wild local yeasts, long cold fermentation, and wood-fired Dutch oven baking.",
                es: "Guía maestra de panadería natural: captura de levaduras salvajes, mantenimiento de masa madre, autólisis y horneado en horno de leña o cazuela."
            },
            content: {
                fr: `
                    <p>Autoproduire son pain au levain naturel est l'un des actes de réappropriation culturelle et nutritionnelle les plus puissants qui soient. Contrairement à la levure de boulanger industrielle (qui produit une fermentation alcoolique violente et rapide créant des pains indigestes), le <em>levain naturel</em> est un écosystème complexe unissant des levures sauvages et des bactéries lactiques. En fermentant lentement, il dégrade le gluten agressif, neutralise l'acide phytique des farines complètes (permettant l'assimilation des minéraux) et donne un pain qui se conserve plus d'une semaine sans sécher !</p>
                    <h2>1. Créer son Chef (Le Levain de Départ)</h2>
                    <p>Dans un bocal en verre, mélangez Exactly 50 grammes de farine biologique de seigle complète (riche en ferments naturels) avec 50 grammes d'eau tiède non chlorée. Laissez reposer 24h dans un coin tiède (25°C). Le lendemain, jetez la moitié, et rajoutez 50g de farine de blé T80 biologique et 50g d'eau. Répétez ce rafraîchi Exactly chaque jour pendant 4 à 5 jours. Des bulles intenses vont apparaître et une odeur douce de yaourt et de pomme mûre va se dégager : votre levain est né !</p>
                    <h2>2. L'Autolyse et le Pétrissage</h2>
                    <p>Pour un gros pain de campagne d'un kilo :</p>
                    <ul>
                        <li>Mélangez 600g de farine de meule T80 ou T110 avec 420g d'eau tiède. Laissez reposer 40 minutes Exactly (c'est l'<em>Autolyse</em> : l'eau hydrate les protéines de gluten qui forment un réseau élastique naturel sans que vous n'ayez besoin de pétrir violemment !).</li>
                        <li>Ajoutez ensuite 150g de votre levain naturel bien actif et 12g de sel marin pur.</li>
                        <li>Pétrissez en soulevant la pâte pour y emprisonner de l'air (technique de <em>stretch and fold</em>). Laissez pointer 4 à 6 heures à température ambiante jusqu'à ce que la pâte double de volume.</li>
                    </ul>
                    <h2>3. Le Façonnage et la Cuisson (Astuce de la Cocotte)</h2>
                    <p>Boulez votre pain et placez-le dans un banneton fariné pour la seconde pousse (l'<em>apprêt</em>). Pour cuire sans four à bois professionnel, utilisez une cocotte en fonte fermée ! Chauffez votre four et la cocotte vide à 240°C. Renversez votre pain dans la cocotte brûlante, donnez de beaux coups de lame sur le dessus (les grignes), fermez le couvercle et enfournez 30 minutes. Le couvercle va emprisonner l'humidité naturelle du pain, créant une croûte dorée, boursouflée et croustillante. Enlevez le couvercle pour les 15 dernières minutes de cuisson !</p>
                `,
                en: `
                    <p>Baking your own authentic open hearth wild sourdough bread represents one of the most empowering acts of everyday cultural and biological self-reliance. Unlike isolated standardized commercial baker's yeast (which prompts a rapid violent alcoholic rise that yields heavy non-digestible bread loaves lacking real complex trace nutrients), true <em>Wild Sourdough Starter</em> (levain) is a magnificent ancient symbiotic web of wild environmental bloom yeasts and beneficial lactobacilli bacteria. Its extended long slow cold fermentation flawlessly pre-digests problematic complex gluten protein matrices and completely neutralizes internal phytic acid locking up whole-grain wheat bran. This vital metabolic transformation allows your digestive tract to easily assimilate heavy bio-minerals, yielding a highly flavorful artisanal rustic loaf that maintains a pristine soft interior crumb for over a week without staling!</p>
                    <h2>1. Capturing Wild Sourdough Starter (The Chef Culture)</h2>
                    <p>In a clean quart glass mason jar, mix exactly 50 grams of fresh organic stoneground whole-grain rye flour (inherently loaded with rich natural wild grain yeasts) with precisely 50 grams of pure lukewarm unchlorinated well water. Let the thick paste sit undisturbed for 24 hours in a comfortable warm room (approx. 25°C). The following day, discard roughly half the volume, and stir in exactly 50 grams of high-quality organic unbleached bread flour alongside 50 grams of pure clean water. Repeat this exact daily feeding schedule for 4 to 5 solid days. Shortly, deep vigorous cellular carbonation webs will emerge, emitting an incredibly pleasant sweet aroma reminiscent of wild orchard apples and creamy live yogurt. Your wild heirloom starter culture is officially active!</p>
                    <h2>2. Autolyse & The Stretch-and-Fold Methodology</h2>
                    <p>To establish a magnificent 1-kilogram rustic country sourdough loaf:</p>
                    <ul>
                        <li>Carefully blend 600 grams of organic stoneground rustic whole wheat flour (T80 or T110 equivalent) with precisely 420 grams of lukewarm clean water. Let this raw shaggy mass sit covered for exactly 40 minutes. This foundational resting phase is the <em>Autolyse</em>: the raw water passively hydrates the internal wheat glutenin and gliadin protein strings, naturally establishing a highly extensible elastic gluten matrix without requiring exhaustive mechanical kneading!</li>
                        <li>Subsequent to the autolyse phase, fold in exactly 150 grams of your highly bubbly wild starter culture alongside 12 grams of pure fine marine sea salt.</li>
                        <li>Gently perform intermittent stretch-and-fold manipulations across the dough ball every 30 minutes to trap internal structural oxygen chambers. Let the batch ferment passively for 4 to 6 continuous hours until its overall physical volume doubles beautifully.</li>
                    </ul>
                    <h2>3. Shaping & Dutch Oven Thermal Steam Physics</h2>
                    <p>Gently shape your country loaf into a tight round boule and place it seam-side up inside a well-floured rattan proving basket (banneton) for its secondary proofing phase. To execute professional open hearth brick-oven baking physics inside a standard domestic kitchen, deploy an upcycled heavy cast-iron Dutch oven! Pre-heat your oven containing the empty lidded cast-iron Dutch oven to exactly 240°C (465°F). Turn your proved dough loaf swiftly out into the blistering hot cast-iron pot, score the upper crown cleanly with an incredibly sharp razor blade or lame (allowing expansion vents), slam the heavy cast-iron lid shut, and bake securely for exactly 30 minutes. The closed heavy iron lid completely captures the steaming cellular moisture vapor escaping the baking loaf, naturally gelatinizing the outer flour starches into a stunning blistered glossy golden crust. Carefully remove the heavy iron lid for the final 15 continuous minutes of baking to achieve a magnificent deep mahogany rustic bake!</p>
                `,
                es: `
                    <p>Autoproducir tu propio pan con masa madre 100% natural es uno de los actos de independencia culinaria, soberanía y salud más gratificantes de la vida cotidiana. A diferencia de la levadura industrial en polvo (que provoca una subida rápida e incompleta generando panes pesados que inflaman la digestión y se endurecen en 24 horas), la <em>Masa Madre Natural</em> es un majestuoso y antiguo cultivo simbiótico que une levaduras salvajes locales con bacterias lácticas beneficiosas. Su larga y lenta fermentación predigiere y descompone las complejas cadenas de gluten y neutraliza por completo el ácido fítico presente en el salvado de las harinas integrales. ¡Este proceso alquímico permite que tu cuerpo absorba todos los minerales del grano y produce un pan aromático, digestivo y de corteza espectacular que se conserva tierno y delicioso durante más de una semana sin secarse!</p>
                    <h2>1. Cómo crear tu Masa Madre (El Cultivo Iniciador)</h2>
                    <p>En un frasco de vidrio limpio, mezcla exactamente 50 gramos de harina integral orgánica de centeno (que contiene de forma natural una inmensa cantidad de levaduras salvajes en su cáscara) con 50 gramos de agua tibia limpia y sin cloro. Deja reposar la mezcla durante 24 horas en un rincón cálido de la cocina (a unos 25°C). Al día siguiente, desecha la mitad del contenido y añade 50 gramos de harina de fuerza o trigo integral orgánico junto con 50 gramos de agua tibia. Repite este mismo proceso de refresco exactamente a la misma hora durante 4 o 5 días seguidos. Pronto verás cómo toda la masa se llena de burbujas activas y desprende un fantástico y agradable aroma dulzón similar al yogur natural y a la manzana madura. ¡Tu masa madre salvaje ha nacido y está lista para trabajar!</p>
                    <h2>2. Autólisis y la Técnica de Pliegues (Stretch and Fold)</h2>
                    <p>Para elaborar un espectacular pan rústico de campo de 1 kilo:</p>
                    <ul>
                        <li>Mezcla en un bol grande 600 gramos de harina de trigo molida a la piedra (tipo T80 o integral rústica) con exactamente 420 gramos de agua tibia. Deja reposar la mezcla tapada durante exactamente 40 minutes. ¡A este reposo mágico se le llama <em>Autólisis</em>: el agua hidrata de forma pasiva las proteínas del grano formando una malla elástica de gluten perfecta sin que tengas que amasar con esfuerzo ni cansarte!</li>
                        <li>Pasado el tiempo de autólisis, incorpora 150 gramos de tu masa madre activa y burbujeante junto con 12 gramos de sal marina pura sin yodar.</li>
                        <li>Trabaja la masa dándole suaves pliegues de los bordes hacia el centro (técnica de <em>stretch and fold</em> o estirar y plegar) cada 30 minutes durante las primeras dos horas para atrapar el aire en su interior. Deja fermentar el bol tapado a temperatura ambiente entre 4 y 6 horas hasta que doble su tamaño de forma majestuosa.</li>
                    </ul>
                    <h2>3. Formado y el Truco Profesional de la Cazuela de Hierro</h2>
                    <p>Da forma redonda a tu masa (boleado) y colocala boca abajo dentro de un cesto de fermentación (banneton) bien enharinado para su segunda subida. Para lograr el mismo resultado térmico de un horno profesional de leña en tu casa, ¡utiliza una cazuela u olla de hierro fundido con tapa (Dutch oven)! Precalienta tu horno al máximo (240°C) con la cazuela de hierro vacía y tapada en su interior. Vuelca el pan fermentado con cuidado dentro de la cazuela hirviendo, hazle unos cortes limpios en la parte superior con una cuchilla bien afilada (greña) para guiar su expansión, ponle la tapa pesada de hierro y hornea durante exactamente 30 minutes. ¡La tapa cerrada retendrá todo el vapor de agua natural que suelta el pan al cocinarse, creando una corteza dorada, brillante, llena de burbujitas y extremadamente crujiente! Finalmente, retira la tapa de la cazuela y hornea 15 minutes más para que el pan adquiera un hermoso y rústico color tostado oscuro.</p>
                `
            },
            resources: [
                { name: "🥖 Traité Pratique de Boulangerie au Levain (PDF 35p)", url: "#" },
                { name: "🌾 Guide de Culture des Blés Anciens & Semences", url: "#" }
            ],
            comments: [
                { author: "PainBio_Savoie", date: "12 août 2014", text: "Le truc de la cocotte en fonte est le plus grand secret de boulanger casier. La vapeur emprisonnée sous la louche change la croûte du tout au tout. Un immense merci !" }
            ]
        },
        {
            id: "culture-champignons",
            category: "permaculture",
            date: "10 août 2014",
            readingTime: 7,
            reactions: 58,
            image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
            tags: ["Mycologie", "Champignons", "Permaculture", "Pleurotes", "Shiitake", "Autoproduction"],
            title: {
                fr: "La culture des Champignons — Mycologie Pratique (Pleurotes & Shiitake)",
                en: "Mushroom Cultivation — Practical Mycology (Oysters & Shiitake)",
                es: "Cultivo de Hongos — Micología Práctica (Gírgolas y Shiitake)"
            },
            desc: {
                fr: "Cultiver, produire et multiplier ses champignons comestibles et médicinaux à la maison sur du carton, de la paille ou des bûches de bois.",
                en: "Comprehensive open manual for cultivating gourmet edible oyster and Shiitake mushrooms on upcycled cardboard, straw, and hardwood logs.",
                es: "Manual práctico abierto para cultivar hongos comestibles y medicinales (gírgolas y shiitake) en cartón reciclado, paja y troncos de madera."
            },
            content: {
                fr: `
                    <p>Le règne des <em>Fungi</em> est le grand régénérateur de la biosphère. Capables de décomposer la matière organique la plus coriace, les champignons offrent une source de protéines et d'immunité exceptionnelle qui peut être cultivée dans les caves les plus sombres, sans réclamer un seul rayon de soleil.</p>
                    <h2>1. La Culture de Pleurotes sur Carton de Récup' (Ultra-Simple)</h2>
                    <p>Vous avez acheté quelques belles pleurotes au marché ? Ne jetez pas les pieds (la base un peu blanche et velue) ! Prenez du carton ondulé marron classique, trempez-le dans de l'eau bouillante pendant 10 minutes pour le pasteuriser et le ramollir. Laissez refroidir. Pelez une couche de papier pour dévoiler les ondulations. Déposez vos bouts de pieds de pleurotes dans les rainures, roulez le carton en cylindre, placez-le dans un sac plastique propre percé de quelques petits trous, et gardez-le dans le noir à 20°C. Au bout de 3 semaines, le mycélium blanc aura entièrement dévoré le carton ! Sortez-le à la lumière douce et à l'humidité : de magnifiques grappes de pleurotes vont pousser !</p>
                    <h2>2. La Culture du Shiitake sur Bûches de Chêne</h2>
                    <p>Pour une production pérenne sur 5 à 8 ans :</p>
                    <ul>
                        <li>Coupez des bûches de chêne, de hêtre ou de châtaignier d'environ 15 cm de diamètre, en hiver, lorsque la sève est descendue.</li>
                        <li>Percez des trous de 8 mm de diamètre en quinconce tous les 15 cm.</li>
                        <li>Enfoncez-y des chevilles en bois pré-ensemencées de mycélium de Shiitake (le champignon médicinal japonais par excellence).</li>
                        <li>Recouvrez les trous avec de la cire d'abeille fondue pour empêcher l'entrée des moisissures concurrentes.</li>
                        <li>Stockez les bûches à l'ombre sous les arbres. Après 12 mois d'incubation, trempez les bûches 24h dans l'eau froide pour déclencher la fructification !</li>
                    </ul>
                `,
                en: `
                    <p>The magnificent <em>Fungi</em> biological kingdom is the supreme recycler and regenerator of our natural living biosphere. Possessing the unique metabolic capability to break down persistent highly complex woody lignified matter, mushrooms offer an incredibly rich decentralized harvest of high-grade complete dietary protein and strong medicinal immune-boosting compounds. Furthermore, they can be flawlessly cultivated deep inside damp lightless cellars, requiring zero expensive solar real estate or arable farming topsoil.</p>
                    <h2>1. Upcycled Cardboard Oyster Mushroom Cultivation (Zero-Cost Homestead Mycology)</h2>
                    <p>Did you acquire a cluster of choice fresh gourmet oyster mushrooms from the local organic market? Never throw away their tough woody lower stem bases (the fuzzy white root structures)! Scavenge standard corrugated brown shipping cardboard boxes, immerse them completely in boiling water for exactly 10 continuous minutes to thoroughly pasteurize and soften the cellulose fibers. Allow to cool completely down to room temperature. Carefully peel back one smooth outer face of paper to unveil the inner corrugated wavy ridges. Slice your fresh oyster mushroom stem butts and nestle them securely down into the damp cardboard furrows. Roll the wet cardboard up into a tight log cylinder, place it inside a clean clear plastic bag punctured with several tiny breathing apertures, and stow it inside a dark room kept at roughly 20°C. Within roughly 3 uninterrupted weeks, immaculate snow-white active mycelium networks will completely devour the cardboard matrix! Transfer the fully colonized log into soft ambient window light and keep highly misted. Within days, spectacular heavy clusters of choice gourmet oyster mushrooms will pin and erupt freely!</p>
                    <h2>2. Hardwood Log Shiitake Inoculation (Perennial 8-Year Production)</h2>
                    <p>To establish an unshakeable perennial domestic mushroom harvest producing premium gourmet timber mushrooms for 5 to 8 continuous years:</p>
                    <ul>
                        <li>Fell fresh healthy green oak, beech, or sweet chestnut hardwood logs roughly 15 cm in diameter strictly during deep freezing winter when seasonal sap reserves have fully descended into the arboreal roots.</li>
                        <li>Using a highly sanitized high-speed drill, bore 8 mm diameter structural holes staggered in a diamond matrix every 15 cm across the log bark weather-skin.</li>
                        <li>Tap specialized wooden birch dowel pegs completely pre-inoculated with pure Shiitake mushroom mycelium spawn firmly down into each drilled cavity using a wooden mallet.</li>
                        <li>Swiftly paint and completely seal every single plugged cavity using hot melted liquid natural pure beeswax to protect the delicate internal mycelium against competitive airborne forest weed molds.</li>
                        <li>Stack the plugged hardwood logs horizontally in a highly shaded, damp woodland arbor or deep under thick evergreens. Subsequent to a 12-month internal passive vegetative colonization run, submerge the logs completely in ice-cold pure well water for exactly 24 hours to dynamically shock the fungal biology into an awe-inspiring heavy fruiting flush!</li>
                    </ul>
                `,
                es: `
                    <p>El grandioso reino de los <em>Hongos</em> (Fungi) es el supremo reciclador y regenerador de la biosfera. Con la capacidad biológica única de descomponer la materia leñosa más dura y persistente, las setas nos ofrecen una fuente espectacular y descentralizada de proteínas de alta calidad y potentes compuestos medicinales que fortalecen el sistema inmunológico. Además, pueden ser cultivadas con rotundo éxito en los sótanos más oscuros y húmedos, sin necesidad de sol ni de fértil tierra de labranza.</p>
                    <h2>1. Cultivo Casero de Gírgolas (Setas de Ostra) en Cartón Reciclado a Coste Cero</h2>
                    <p>¿Has conseguido unas hermosas setas de ostra o gírgolas en el mercado ecológico? ¡Nunca tires la base dura de sus tallos (la parte inferior cubierta de una pelusilla blanca)! Toma cajas comunes de cartón de envío corrugado de color marrón, sumérgelas en agua hirviendo durante exactamente 10 minutes para pasteurizarlas por completo y ablandar la celulosa. Deja que se enfríen hasta temperatura ambiente. Pela con cuidado una de las capas lisas de papel exterior para dejar a la vista los surcos ondulados interiores. Coloca los pedazos de la base de los tallos de las setas justo dentro de los surcos húmedos del cartón. Enrolla el cartón mojado formando un cilindro bien apretado, introducelo dentro de una bolsa de plástico limpia con unos pequeños agujeros para que respire y guardalo en un cuarto totalmente oscuro a unos 20°C. ¡En solo 3 semanas de incubación ininterrumpida, una espectacular y densa red de micelio blanco como la nieve habrá devorado y colonizado todo el cartón! Finalmente, saca el rollo a una luz indirecta suave y rocialo a diario con agua: ¡en pocos días verás brotar y explotar espectaculares y pesados racimos de deliciosas setas gírgolas!</p>
                    <h2>2. Inoculación Perenne de Hongos Shiitake en Troncos de Madera (Producción Continua durante 8 Años)</h2>
                    <p>Para establecer una fuente perenne e inquebrantable de setas medicinales y gourmet que te dé grandes cosechas ininterrumpidas entre 5 y 8 años seguidos:</p>
                    <ul>
                        <li>Corta troncos sanos y frescos de roble, haya o castaño esbelto de unos 15 cm de diámetro exclusivamente durante el crudo invierno, que es cuando toda la savia del árbol ha bajado por completo a las raíces.</li>
                        <li>Con un taladro limpio, perfora agujeros de 8 mm de diámetro dispuestos en un patrón de rombo en zig-zag cada 15 cm a lo largo y ancho de la corteza del tronco.</li>
                        <li>Introduce en cada agujero tacos o tarugos de madera preiniciados con micelio vivo de hongo Shiitake (el rey de las setas medicinales de Asia) y golpéalos con suavidad utilizando un mazo de madera hasta que queden a ras de la corteza.</li>
                        <li>Pinta y sella de inmediato todos los agujeros taponados utilizando cera de abejas pura derretida y caliente. ¡Este sello protector evita que el micelio se seque y bloquea la entrada de esporas de mohos competidores de la corteza forestal!</li>
                        <li>Apila los troncos de madera en horizontal en un lugar sombrío y muy húmedo bajo los árboles o en un cobertizo fresco. Tras 12 meses de colonización vegetativa interna, sumerge los troncos por completo en agua de pozo muy fría o helada durante exactamente 24 horas: ¡este choque térmico dinámico despertará de golpe al micelio y desatará una espectacular y abundante explosión de deliciosas setas Shiitake en toda la madera!</li>
                    </ul>
                `
            },
            resources: [
                { name: "🍄 Fiche d'Ensemencement et Substrats Fungi (PDF)", url: "#" },
                { name: "📋 Catalogue des Variétés & Températures Fructification", url: "#" }
            ],
            comments: [
                { author: "Myco_Master", date: "12 août 2014", text: "Le truc du carton pour les pleurotes marche à 100%. Les enfants ont adoré voir pousser les champignons dans la buanderie. Incroyable !" }
            ]
        }
    ];


    /* --- 5. APP STATE & LOCAL STORAGE --- */
    let currentLang = localStorage.getItem('eco_lang') || 'fr';
    let currentTheme = localStorage.getItem('eco_theme') || 'light';
    let activeCategory = 'all';
    let searchQuery = '';
    let currentQuoteIndex = 0;

    const DOM = {
        body: document.body,
        langSelect: document.getElementById('lang-select'),
        themeToggle: document.getElementById('theme-toggle'),
        mobileMenuBtn: document.getElementById('mobile-menu-btn'),
        mobileDrawer: document.getElementById('mobile-drawer'),
        closeDrawerBtn: document.getElementById('closeDrawerBtn') || document.querySelector('#mobile-drawer .btn-icon'),
        navLinks: document.querySelectorAll('.nav-item, .mobile-nav-item'),
        sections: document.querySelectorAll('.section-container'),
        categoriesContainer: document.getElementById('categories-container'),
        articlesGrid: document.getElementById('articles-grid'),
        articleCount: document.getElementById('article-count'),
        searchInput: document.getElementById('search-input'),
        clearSearchBtn: document.getElementById('clear-search'),
        noResults: document.getElementById('no-results'),
        resetFiltersBtn: document.getElementById('reset-filters-btn'),
        synergiesGrid: document.getElementById('synergies-grid'),
        dailyQuoteText: document.getElementById('daily-quote-text'),
        dailyQuoteAuthor: document.getElementById('daily-quote-author'),
        nextQuoteBtn: document.getElementById('next-quote-btn'),
        logoLink: document.getElementById('logo-link'),
        backToTop: document.getElementById('back-to-top'),
        
        // Modal
        modal: document.getElementById('article-modal'),
        modalBackdrop: document.getElementById('modal-backdrop'),
        modalClose: document.getElementById('modal-close'),
        modalCategory: document.getElementById('modal-category'),
        modalDate: document.getElementById('modal-date'),
        modalTitle: document.getElementById('modal-title'),
        modalImage: document.getElementById('modal-image'),
        modalTextContent: document.getElementById('modal-text-content'),
        modalResourceLinks: document.getElementById('modal-resource-links'),
        modalTags: document.getElementById('modal-tags'),
        commentsList: document.getElementById('comments-list'),
        reactionBtn: document.getElementById('btn-react-heart'),
        reactionCount: document.getElementById('reaction-count'),
        btnCopyLink: document.getElementById('btn-copy-link'),
        copyLinkText: document.getElementById('copy-link-text'),
        quickCommentAuthor: document.getElementById('quick-comment-author'),
        quickCommentText: document.getElementById('quick-comment-text'),
        quickCommentSubmit: document.getElementById('quick-comment-submit'),
        
        // Contact Form
        contactForm: document.getElementById('contact-form'),
        formSuccess: document.getElementById('form-success')
    };

    /* --- 6. INITIALIZATION --- */
    const initApp = () => {
        // Apply saved theme
        applyTheme(currentTheme);
        // Apply saved language
        DOM.langSelect.value = currentLang;
        updateLanguage(currentLang);
        // Bind events
        bindEvents();
        // Load Quotes
        renderQuote();
        // Load Synergies
        renderSynergies();
        // Load Articles
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

        // Update static translations in DOM
        const transElements = document.querySelectorAll('[data-i18n]');
        transElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[lang] && i18n[lang][key]) {
                el.innerHTML = i18n[lang][key];
            }
        });

        // Update placeholders
        const placeElements = document.querySelectorAll('[data-i18n-placeholder]');
        placeElements.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (i18n[lang] && i18n[lang][key]) {
                el.setAttribute('placeholder', i18n[lang][key]);
            }
        });

        // Update title attributes
        const titleElements = document.querySelectorAll('[data-i18n-title]');
        titleElements.forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (i18n[lang] && i18n[lang][key]) {
                el.setAttribute('title', i18n[lang][key]);
            }
        });

        // Update quote
        renderQuote();
        // Update Synergies
        renderSynergies();
        // Update Articles Grid
        renderArticles();
    };

    /* --- 9. QUOTES HANDLER --- */
    const renderQuote = () => {
        const q = quotes[currentQuoteIndex][currentLang];
        DOM.dailyQuoteText.innerHTML = `"${q.text}"`;
        DOM.dailyQuoteAuthor.innerHTML = `— ${q.author}`;
    };

    const nextQuote = () => {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        DOM.dailyQuoteText.style.opacity = 0;
        setTimeout(() => {
            renderQuote();
            DOM.dailyQuoteText.style.opacity = 1;
        }, 150);
    };

    /* --- 10. SYNERGIES HANDLER --- */
    const renderSynergies = () => {
        DOM.synergiesGrid.innerHTML = '';
        synergies.forEach(syn => {
            const desc = syn.desc[currentLang];
            const btnLabel = i18n[currentLang].synergyVisitBtn;
            
            const card = document.createElement('div');
            card.className = 'synergy-card';
            card.innerHTML = `
                <div>
                    <div class="synergy-header">
                        <div class="synergy-icon">${syn.icon}</div>
                        <h3 class="synergy-title">${syn.title}</h3>
                    </div>
                    <p class="synergy-desc">${desc}</p>
                </div>
                <div>
                    <a href="${syn.url}" target="_blank" rel="noopener noreferrer" class="synergy-link">
                        <span>${btnLabel}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                </div>
            `;
            DOM.synergiesGrid.appendChild(card);
        });
    };

    /* --- 11. ARTICLES GRID & FILTERS --- */
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

        // Update count stats
        const countLabel = currentLang === 'fr' ? `${filtered.length} article(s)` : currentLang === 'en' ? `${filtered.length} article(s)` : `${filtered.length} artículo(s)`;
        DOM.articleCount.textContent = countLabel;

        if (filtered.length === 0) {
            DOM.noResults.classList.remove('hidden');
        } else {
            DOM.noResults.classList.add('hidden');
            
            filtered.forEach(art => {
                const title = art.title[currentLang];
                const desc = art.desc[currentLang];
                const catBadge = DOM.categoriesContainer.querySelector(`[data-cat="${art.category}"]`).textContent;
                const readBtnLabel = i18n[currentLang].readMoreBtn;
                const readTimeLabel = i18n[currentLang].readingTime;
                
                const card = document.createElement('article');
                card.className = 'article-card';
                card.setAttribute('data-id', art.id);
                card.innerHTML = `
                    <div class="card-image-wrapper">
                        <span class="card-badge">${catBadge}</span>
                        <img src="${art.image}" alt="${title}" loading="lazy">
                    </div>
                    <div class="card-content">
                        <div class="card-meta">
                            <span>${art.date}</span>
                            <span>⏳ ${art.readingTime} ${readTimeLabel}</span>
                        </div>
                        <h3 class="card-title"><a href="#" class="article-click-trigger">${title}</a></h3>
                        <p class="card-desc">${desc}</p>
                        <div class="card-tags">
                            ${art.tags.map(t => `<span class="tag">#${t}</span>`).join('')}
                        </div>
                        <div class="card-footer">
                            <button class="btn-read article-click-trigger">
                                <span>${readBtnLabel}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </button>
                            <span class="card-reactions" title="Inspirant">🌱 ${art.reactions}</span>
                        </div>
                    </div>
                `;

                // Add event listeners to trigger modal
                const triggers = card.querySelectorAll('.article-click-trigger');
                triggers.forEach(trig => {
                    trig.addEventListener('click', (e) => {
                        e.preventDefault();
                        openArticleModal(art);
                    });
                });

                DOM.articlesGrid.appendChild(card);
            });
        }
    };

    /* --- 12. FULL ARTICLE MODAL & COMMENTS --- */
    const openArticleModal = (art) => {
        const title = art.title[currentLang];
        const content = art.content[currentLang];
        const catBadge = DOM.categoriesContainer.querySelector(`[data-cat="${art.category}"]`).textContent;

        DOM.modalCategory.textContent = catBadge;
        DOM.modalDate.textContent = art.date;
        DOM.modalTitle.textContent = title;
        DOM.modalImage.setAttribute('src', art.image);
        DOM.modalImage.setAttribute('alt', title);
        DOM.modalTextContent.innerHTML = content;

        // Render resources
        DOM.modalResourceLinks.innerHTML = '';
        art.resources.forEach(res => {
            const link = document.createElement('a');
            link.className = 'resource-item';
            link.setAttribute('href', res.url);
            link.setAttribute('target', '_blank');
            link.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                <span>${res.name}</span>
            `;
            DOM.modalResourceLinks.appendChild(link);
        });

        // Render tags
        DOM.modalTags.innerHTML = art.tags.map(t => `<span class="tag">#${t}</span>`).join('');

        // Reaction handling
        DOM.reactionCount.textContent = art.reactions;
        DOM.reactionBtn.classList.remove('reacted');
        DOM.reactionBtn.onclick = () => {
            if (!DOM.reactionBtn.classList.contains('reacted')) {
                art.reactions += 1;
                DOM.reactionCount.textContent = art.reactions;
                DOM.reactionBtn.classList.add('reacted');
            }
        };

        // Render comments
        renderModalComments(art);

        // Bind quick comment publish
        DOM.quickCommentSubmit.onclick = () => {
            const author = DOM.quickCommentAuthor.value.trim();
            const text = DOM.quickCommentText.value.trim();

            if (!author || !text) {
                alert(currentLang === 'fr' ? "Veuillez remplir votre pseudo et votre message." : currentLang === 'en' ? "Please provide your alias and message." : "Por favor, ingresa tu alias y mensaje.");
                return;
            }

            const now = currentLang === 'fr' ? "À l'instant" : currentLang === 'en' ? "Just now" : "Hace un momento";
            art.comments.push({ author, date: now, text });
            
            DOM.quickCommentAuthor.value = '';
            DOM.quickCommentText.value = '';
            renderModalComments(art);
        };

        // Copy link handler
        DOM.copyLinkText.textContent = i18n[currentLang].copyLinkBtn;
        DOM.btnCopyLink.onclick = () => {
            const link = window.location.href.split('#')[0] + `#article-${art.id}`;
            navigator.clipboard.writeText(link).then(() => {
                DOM.copyLinkText.textContent = i18n[currentLang].copiedLinkBtn;
                setTimeout(() => {
                    DOM.copyLinkText.textContent = i18n[currentLang].copyLinkBtn;
                }, 3000);
            });
        };

        // Display Modal
        DOM.modal.classList.add('open');
        DOM.body.style.overflow = 'hidden';
    };

    const renderModalComments = (art) => {
        DOM.commentsList.innerHTML = '';
        const headerLabel = i18n[currentLang].commentsHeader;
        document.getElementById('comments-header').textContent = `${headerLabel} (${art.comments.length})`;

        art.comments.forEach(com => {
            const item = document.createElement('div');
            item.className = 'comment-card';
            item.innerHTML = `
                <div class="comment-header">
                    <span class="comment-author">${com.author}</span>
                    <span class="comment-date">${com.date}</span>
                </div>
                <p class="comment-text">${com.text}</p>
            `;
            DOM.commentsList.appendChild(item);
        });
    };

    const closeModal = () => {
        DOM.modal.classList.remove('open');
        DOM.body.style.overflow = '';
    };

    /* --- 13. EVENT LISTENERS SETUP --- */
    const bindEvents = () => {
        // Theme toggle
        DOM.themeToggle.addEventListener('click', toggleTheme);

        // Language selector
        DOM.langSelect.addEventListener('change', (e) => {
            updateLanguage(e.target.value);
        });

        // Quote Switcher
        DOM.nextQuoteBtn.addEventListener('click', nextQuote);

        // Mobile drawer
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

        // Navigation links
        DOM.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetNav = link.getAttribute('data-nav');
                if (!targetNav) return;

                e.preventDefault();
                // Close drawer if open
                if (DOM.mobileDrawer.classList.contains('open')) {
                    DOM.mobileDrawer.classList.remove('open');
                }

                // Switch active section
                DOM.sections.forEach(sec => sec.classList.remove('active-section'));
                const targetSec = document.getElementById(targetNav);
                if (targetSec) {
                    targetSec.classList.add('active-section');
                    targetSec.scrollIntoView({ behavior: 'smooth' });
                }

                // Switch active link styling
                DOM.navLinks.forEach(l => l.classList.remove('active'));
                document.querySelectorAll(`[data-nav="${targetNav}"]`).forEach(l => l.classList.add('active'));
            });
        });

        // Category filter buttons
        const catButtons = DOM.categoriesContainer.querySelectorAll('.cat-btn');
        catButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                catButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeCategory = btn.getAttribute('data-cat') || 'all';
                renderArticles();
            });
        });

        // Search input
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

        // Reset filters button
        DOM.resetFiltersBtn.addEventListener('click', () => {
            DOM.searchInput.value = '';
            searchQuery = '';
            DOM.clearSearchBtn.classList.add('hidden');
            activeCategory = 'all';
            catButtons.forEach(b => b.classList.remove('active'));
            DOM.categoriesContainer.querySelector('[data-cat="all"]').classList.add('active');
            renderArticles();
        });

        // Modal close
        DOM.modalClose.addEventListener('click', closeModal);
        DOM.modalBackdrop.addEventListener('click', closeModal);
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && DOM.modal.classList.contains('open')) {
                closeModal();
            }
        });

        // Back to top button
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

        // Brand logo click to reset and go home
        DOM.logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('[data-nav="articles"]').click();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Contact Form Submission Simulation
        DOM.contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = document.getElementById('submit-btn');
            submitBtn.disabled = true;
            submitBtn.style.opacity = 0.6;
            
            // Simulate networking
            setTimeout(() => {
                DOM.formSuccess.classList.remove('hidden');
                DOM.contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.style.opacity = 1;

                setTimeout(() => {
                    DOM.formSuccess.classList.add('hidden');
                }, 6000);
            }, 800);
        });

        // Handle URL Hash if shared direct link to article
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

    // Run custom init
    initApp();
});
