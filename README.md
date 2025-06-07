# 🎓 **Exercice Angular 20 – Recherche de Films avec TMDB**

### 🎯 Objectif pédagogique

Vous allez créer un petit moteur de recherche de films utilisant l’API publique de [TheMovieDB](https://developer.themoviedb.org/reference/intro/getting-started).
<br>Cet exercice vous permettra de :

* manipuler `HttpClient` et les `Observable`
* utiliser le `pipe async` dans les templates
* mettre en place une **barre de recherche** avec `debounce`
* séparer correctement les responsabilités avec un service dédié

---

### 📋 Consignes

#### 🔧 1. Récupération des films populaires

* Créez un composant nommé `MovieSearch`.
* À l’ouverture du composant, affichez la liste des **films populaires** (`/movie/popular`).

#### 🔍 2. Barre de recherche avec debounce

* Ajoutez un champ de saisie pour rechercher un film par son titre (`/search/movie`).
* Lorsque l’utilisateur tape dans la barre de recherche :

  * Lancer la recherche après un **délai de 500ms** sans saisie (débounce).
  * Ne relancer une requête que si le terme a changé (`distinctUntilChanged`).
  * Si le champ est vide, réafficher les films populaires.

#### ⚙️ 3. Utilisation d’observables et du pipe `async`

* Toutes les données du template doivent provenir d’un `Observable`.
* Utilisez **le `pipe async`** dans le HTML pour la consommation des données.

#### 🧩 4. Architecture propre (Clean Code)

* Créez un **service `MovieService`** qui encapsule les appels à l’API.
* Ce service doit exposer 2 méthodes :

  * `getPopularMovies()`
  * `searchMovies(query: string)`

---

### 🧠 Bonus (optionnel mais recommandé)

* Affichez un message `"Aucun film trouvé"` si la recherche ne retourne rien.
* Stylisez les résultats avec un minimum de CSS (ou Tailwind si vous êtes à l’aise).
* Affichez la **note moyenne (`vote_average`)** et une **image d’affiche** (`poster_path`).
* Faire le fetch des datas avec `httpRessource`

---

### 🔑 Clé API

> Créez un compte gratuit sur [https://www.themoviedb.org](https://www.themoviedb.org) puis récupérez votre clé API depuis votre tableau de bord développeur.
> Vous en aurez besoin pour chaque requête (`api_key` dans les paramètres).

---

### 📘 Documentation utile

* API TMDB : [https://developer.themoviedb.org/reference/intro/getting-started](https://developer.themoviedb.org/reference/intro/getting-started)
* `HttpClient` : [[https://angular.io/guide/http](https://angular.io/guide/http](https://angular.dev/guide/http)
* `async` pipe : [[https://angular.io/api/common/AsyncPipe](https://angular.io/api/common/AsyncPipe](https://angular.dev/api/common/AsyncPipe)
* `debounceTime`, `switchMap` (RxJS) : [https://rxjs.dev](https://rxjs.dev)
