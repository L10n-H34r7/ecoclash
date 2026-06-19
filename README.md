# 🌿 Ecoclash — Partage de savoirs

> Refonte moderne du site [ecoclash.jimdofree.com](https://ecoclash.jimdofree.com/)

**Ecoclash** est un projet de partage de savoirs dédié aux alternatives pratiques : autoconstruction, permaculture, écovillages, décroissance, résistance écologique et action directe.

## 🌱 Contenu

- **Infokiosque** — Fiches techniques, plans, tutoriels, documents pour cultiver, construire, fabriquer, bricoler, se chauffer, manger, se soigner…
- **Vidéokiosque** — Reportages, courts-métrages, documentaires, présentations sur les alternatives, collectifs, médias, culture et écologie
- **Alternatives pratiques** — Autoconstruction, décroissance, permaculture, freeganisme, altermondialisme, résistance et action directe
- **Lieux de vie** — Écovillages, squats, fermes communautaires, ZAD, bases nomades, réseaux et annuaires
- **Liens & Ressources** — Annuaire de sites, réseaux et portails pour aller plus loin

## 🛠️ Stack technique

- [React](https://react.dev/) 19
- [Vite](https://vitejs.dev/) 7
- [Tailwind CSS](https://tailwindcss.com/) 4
- [TypeScript](https://www.typescriptlang.org/)
- [Lucide React](https://lucide.dev/) (icônes)

## 🚀 Développement local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## 📦 Déploiement sur GitHub Pages

Ce projet est configuré pour un déploiement automatique via **GitHub Actions**.

### Configuration

1. **Forkez ou clonez** ce dépôt sur GitHub
2. Allez dans **Settings → Pages**
3. Sous **Source**, sélectionnez **GitHub Actions**
4. Poussez sur la branche `main` — le workflow se déclenche automatiquement

### Workflow fichier

Le fichier `.github/workflows/deploy.yml` gère :
- Installation des dépendances
- Build de production
- Déploiement sur GitHub Pages

### URL du site

Une fois déployé, le site sera accessible à :
- `https://<username>.github.io/<repo-name>/`

> **Note** : Si vous déployez en tant que page utilisateur (pas de repo name), changez `base` dans `vite.config.ts` à `'/'`.

## 📁 Structure du projet

```
├── .github/
│   └── workflows/
│       └── deploy.yml        # Workflow GitHub Actions
├── public/
│   └── images/
│       └── hero-bg.jpg       # Image de fond hero
├── src/
│   ├── App.tsx               # Composant principal
│   ├── index.css             # Styles globaux + Tailwind
│   ├── main.tsx              # Point d'entrée React
│   └── utils/
│       └── cn.ts             # Utilitaire classnames
├── index.html                # Template HTML
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

## 📜 Licence

Contenu original © Ecoclash. Refonte réalisée dans un esprit de partage et de libre accès au savoir.

---

*"On nous dit : Le bonheur c'est le progrès, faites un pas en avant. Et c'est le progrès… mais ce n'est jamais le bonheur. Alors si on faisait un pas de côté !"*
