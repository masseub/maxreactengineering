# MaxReact Engineering – landing page (Astro + Tailwind)
- Bilingual static site for a chemical process engineering consultancy: `/fr/` (default) and `/en/`. The root route `/` redirects to `/fr/`.
- Stack: Astro 5, Tailwind CSS (v4), no client-side framework; fully static and GitHub Pages ready.
- Assets: `public/logo.png` (brand mark) and `public/profile.jpg` (consultant portrait). Keep their filenames unchanged.
- Content sources: copy is centralized in `src/data/content.ts`. Layout shell lives in `src/layouts/PageShell.astro`; page bodies are in `src/pages/fr/index.astro` and `src/pages/en/index.astro`.

## Installer et lancer en local
- Pré-requis : Node.js 20+.
- Installer les dépendances : `npm install`
- Développement : `npm run dev` puis ouvrir http://localhost:4321 (hot reload bilingue).
- Build de production : `npm run build` (sortie dans `dist/`).
- Prévisualisation du build : `npm run preview`.

## Structure de l’architecture
- `src/pages/index.astro` : redirection permanente vers `/fr/`.
- `src/pages/fr/` et `src/pages/en/` : landing page FR et EN.
- `src/data/content.ts` : textes, méta et coordonnées FR/EN. Modifier ici pour toute mise à jour de contenu ou SEO.
- `src/layouts/PageShell.astro` : header + language switcher, meta tags (title/description/OG/Twitter), footer.
- `src/styles/global.css` : Tailwind import + variables globales, styles boutons, cartes, etc.
- `public/` : favicon(s) + logo + photo (aucun build ou transformation).

## Déploiement GitHub Pages (manuel)
1) Renseigner l’URL publique dans `astro.config.mjs` avant le build, par exemple :
   - `site: 'https://votre-utilisateur.github.io/votre-repo'`
   - si le repo n’est pas user/organization page, ajouter `base: '/votre-repo'`.
2) Builder : `npm run build`.
3) Publier le dossier `dist/` vers la branche `gh-pages` (exemple : `git subtree push --prefix dist origin gh-pages` ou workflow GitHub Actions standard Astro).
4) Activer Pages sur la branche `gh-pages` dans les settings du dépôt.

## Notes contenu / SEO
- Titres et descriptions distincts FR et EN via `t.meta` dans `src/data/content.ts` (OpenGraph et Twitter meta inclus).
- Changement de langue via FR | EN dans le header ; l’alternate hreflang est pré-configuré.
- Message central “From lab to plant” visible en hero, header et carte rôle.  

## Contact affiché sur le site
- Nom : Maximilien Richald — Entreprise : MaxReact Engineering
- Téléphone : +32 496 08 43 43 — Email : maximilien.richald@outlook.com
- Localisation : Genappe, Belgique — LinkedIn : https://be.linkedin.com/in/maximilienrichald-process-quality
