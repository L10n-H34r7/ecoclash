# 🌱 Ecoclash — Infokiosque & Base de Savoirs Libres (Remake 2026)

> **Partage de savoirs, Infokiosque, alternatives pratiques, autoconstruction, décroissance, permaculture, communautés autonomes, low-tech et résistance (ZAD).**

Remake officiel, enrichi et modernisé de la plateforme [Ecoclash d'origine (Jimdo)](https://ecoclash.jimdofree.com/), spécialement repensé et architecturé pour un **hébergement durable, open-source et performant sur GitHub Pages**.

---

## ⚡ 100% Pure Vanilla HTML / CSS / JS (Zéro Dépendances)

Conformément au manifeste d'autonomie low-tech du projet, cette application a été développée en **pure Vanilla Web Technologies** :
- **❌ Aucun framework lourd :** Pas de React, Vue, ou Angular.
- **❌ Aucun outil de build ou de compilation complexe :** Pas de Vite, Webpack, Babel ou Node.js (NPM).
- **✔️ Simplicité et pérennité :** Les fichiers s'exécutent instantanément dans n'importe quel navigateur web de manière native. Il suffit d'ouvrir `index.html` !

---

## 🌟 Fonctionnalités Modernes & Upgradées

### 1. 🌐 Multilingue Dynamique (Français / Anglais / Espagnol)
Un dictionnaire interne géré par ES6 JavaScript (`app.js`) permet de traduire instantanément et sans rechargement de page :
- **L'interface globale :** menus, boutons, formulaires, et compteurs.
- **Les filtres de catégories.**
- **L'intégralité de la base d'articles et de tutoriels pratiques.**

### 2. 🌓 Switcher Mode Sombre / Mode Clair (Dark / Clear Mode)
- Un basculeur élégant intégré à la barre de navigation.
- Sauvegarde automatique des préférences de l'utilisateur dans le `localStorage` du navigateur.
- Design soigné avec des palettes de couleurs éco-technologiques (vert émeraude, crème, et obsidienne).

### 3. 🔍 Infokiosque & Recherche Instantanée en Temps Réel
- Une barre de recherche interactive filtrant le titre, les descriptions et les tags en direct au clavier.
- Navigation horizontale fluide par catégories :
  - *Tout les articles*
  - *Habitat & Autoconstruction (Yourte, Dôme, Tipi)*
  - *Cultiver & Jardiner (Ruches Warré, Champignons)*
  - *Production & Transformation (Pain au levain, Bière & Alcool, Spiruline)*
  - *Artisanat & Récup' (Vannerie de papier)*
  - *Médiathèque & Archives (Formules Hiscox, 1972 Special Vroutsch)*
  - *Action & Luttes (Zones À Défendre NDDL)*

### 4. 📄 Vue Modale Enrichie pour les Savoirs
- Affichage riche des tutoriels avec typographie optimisée pour la lecture.
- Liens de téléchargement vers les PDF et ressources libres du domaine public.
- Simulation interactive de retours d'expérience (Commentaires) et de partage (copie de liens).

### 5. 🤝 Synergies & Formulaire de Contribution
- Répertoire de collectifs amis (Alphazomes, Zad, Infokiosques.net, Low-Tech Lab).
- Simulation de formulaire sécurisé pour permettre à la communauté de proposer de nouveaux PDF ou tutoriels.

---

## 🚀 Déploiement sur GitHub Pages (En 3 Clics)

Ce projet est conçu pour être publié gratuitement et en quelques secondes sur **GitHub Pages**.

1. **Créer un dépôt GitHub :**
   Créez un nouveau repository sur GitHub (ex: `ecoclash-remake`) et importez-y les 4 fichiers du projet :
   - `index.html`
   - `styles.css`
   - `app.js`
   - `README.md`

2. **Activer GitHub Pages :**
   - Allez dans les **Settings** (Paramètres) de votre repository.
   - Cliquez sur la rubrique **Pages** dans le menu de gauche.
   - Sous **Source**, sélectionnez la branche `main` (ou `master`) et le dossier `/ (root)`.
   - Cliquez sur **Save**.

3. **Consulter votre site en ligne :**
   - Votre application sera en ligne à l'adresse : `https://<votre-nom-utilisateur>.github.io/<votre-repository>/`
   - Déploiement 100% automatisé à chaque modification des fichiers.

---

## 🛠️ Comment Ajouter ou Modifier des Articles ?

Pour enrichir la base de connaissances, ouvrez simplement le fichier `app.js` et repérez la constante `articles` (vers la ligne 120). Vous pouvez y insérer un nouvel objet structuré ainsi :

```javascript
{
    id: "titre-de-mon-guide",
    category: "habitat", // "habitat", "permaculture", "production", "artisanat", "mediatheque", ou "action"
    date: "Aujourd'hui",
    readingTime: 5,
    reactions: 10,
    image: "https://url-de-mon-image.jpg",
    tags: ["Tag1", "Tag2"],
    title: {
        fr: "Mon Titre en Français",
        en: "My Title in English",
        es: "Mi Título en Español"
    },
    desc: {
        fr: "Ma description courte en Français.",
        en: "My short description in English.",
        es: "Mi descripción corta en Español."
    },
    content: {
        fr: "<p>Mon tutoriel complet en HTML...</p>",
        en: "<p>My full tutorial in HTML...</p>",
        es: "<p>Mi tutorial completo en HTML...</p>"
    },
    resources: [
        { name: "📥 Télécharger mon PDF", url: "https://lien-vers-mon-pdf.pdf" }
    ],
    comments: []
}
```

---

## 📜 Philosophie & Crédits

- **Projet Original :** Conçu en 2014 par les créateurs de la plateforme [Ecoclash](https://ecoclash.jimdofree.com/).
- **Remake 2026 :** Upgradé par Arena.ai Agent Mode.
- **Licence :** Savoirs Libres pour un Monde Libre (Domaine Public / CC0). Toute rediffusion, modification, impression sous forme de brochure papier ou fanzine est vivement encouragée.

> *"On nous dit: Le bonheur c'est le progrès faites un pas en avant. Et c'est le progrès... mais ce n'est jamais le bonheur. Alors si on faisait un pas de côté! Si on essayait autre chose! Si on faisait un pas de côté, on verrait ce qu'on ne voit jamais."*