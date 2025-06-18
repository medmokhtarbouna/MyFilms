# 🎬 MyFilms


## Description

**MyFilms** est une application React (créée avec Vite) de gestion et consultation de films, qui consomme l’API TMDb pour afficher les films populaires et propose :

- Une **page d’accueil** listant les films populaires (pagination, filtres, tri local).  
- Une **recherche** de films via mot-clé (+ historique local).  
- Un **formulaire d’ajout** de films personnalisés (titre, description, date, image, note).  
- Une **fiche détaillée** par film (synopsis, casting, bande-annonce, suggestions).  
- Un design **responsive** (Sidebar masquée sur mobile, Header adapté, grille fluide).

---

## Fonctionnalités clés

- 🚀 **Vite** pour un dev server ultra-rapide.  
- 🔗 **React Router** v6 pour la navigation multi-pages.  
- 🎨 **Tailwind CSS** pour le styling réactif.  
- 🔑 Clé **TMDb API** stockée dans `.env`.  
- 🛠️ Gestion de l’état local (via `localStorage` ou Redux/Context).  
- 🔍 Débouncing et pagination infinie dans la recherche.  
- 📱 **Responsive** :  
  - Sidebar cachée sur `< md`  
  - Header simplifié sur mobile (logo + boutons, champ search masqué)  
  - Grille de 1 à 4 colonnes selon la taille d’écran  

---

## Prérequis

- Node.js ≥ 16  
- npm ou yarn  
- Compte gratuit sur [TMDb.org](https://www.themoviedb.org) pour obtenir une **clé API v3**  

---

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/medmokhtarbouna/MyFilms.git
   cd my-film

2. Installez les dépendances :

   ```bash
   npm install
   # ou
   yarn install
   ```
3. Créez un fichier `.env.local` à la racine :

   ```env
   VITE_TMDB_KEY=VOTRE_CLE_API_TMDB
   ```

---

## Scripts disponibles

| Commande          | Description                                 |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Démarre le serveur de développement Vite    |
| `npm run build`   | Génère le build optimisé pour la production |
| `npm run preview` | Sert le build localement                    |
| `npm test`        | Lance les tests unitaires (RTL + Jest)      |

---

## Structure du projet

```
film-app/
├─ public/             # assets publics (placeholder, favicon)
├─ src/
│  ├─ api/             # appels TMDb (fetchPopular, searchMovie…)
│  ├─ components/
│  │  ├─ Header.jsx
│  │  ├─ Sidebar.jsx
│  │  └─ MovieCard.jsx
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  ├─ Search.jsx
│  │  ├─ AddMovie.jsx
│  │  └─ MovieDetails.jsx
│  ├─ routes/          # AppRoutes.jsx
│  ├─ store/           # Redux Toolkit slices (optionnel)
│  ├─ styles/          # configurations Tailwind
│  ├─ App.jsx
│  └─ index.css
└─ .env.local
```

---

## Responsive Design

* **Sidebar** : `hidden md:block`
* **Header** :

  * Sur mobile (`sm`), affiche seulement le logo + boutons
  * Champ de recherche masqué en dessous de `sm`
* **Grille de films** :

  ```css
  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
  ```
* **Points de rupture** Tailwind : `sm` (≥640px), `md` (≥768px), `lg` (≥1024px), `xl` (≥1280px)

---

## Déploiement

Vous pouvez déployer sur **Vercel**, **Netlify** ou **GitHub Pages** :

1. Poussez votre build sur la branche `main`.
2. Connectez votre dépôt à la plateforme de CI/CD (GitHub Actions / Vercel CLI).
3. Configurez la variable d’environnement `VITE_TMDB_KEY` côté serveur.

---

## Contribution

1. Forkez ce dépôt.
2. Créez une branche `feature/mon-amelioration`.
3. Committez vos modifications (`git commit -m "feat: description"`).
4. Poussez (`git push origin feature/mon-amelioration`).
5. Ouvrez une Pull Request.

---

## Licence

MIT © 2025 — **MyFilms**

```