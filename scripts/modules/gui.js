import { readLocalStorage, toggleFavoriteMovie } from "./localstorage.js";

// Kolla om aktuell film finns i localstorage eller inte, och sätt favoritknapp-text därefter

export function toggleFavoriteButtonText(movie) {
    const favBtn = document.querySelector(
        ".center__detailed-movie-card-button",
    );
    const favorites = readLocalStorage();
    if (favorites.some((fav) => fav.imdbID === movie.imdbID)) {
        favBtn.textContent = "Remove from favorites";
    } else {
        favBtn.textContent = "Add to favorites";
    }
}

// Favoritknapps-klicklyssnare

export function favoriteButtonClickListener(movieDetails) {
    const favBtn = document.querySelector(
        ".center__detailed-movie-card-button",
    );
    favBtn.addEventListener("click", (event) => {
        toggleFavoriteMovie(readLocalStorage(), movieDetails);
    });
}

// Sök-funktionalitet

// Breda sökfunktionen genom inputfältet

export function searchListener() {
    const searchBtn = document.querySelector("#searchBtn");
    const searchInput = document.querySelector("#searchInput");
    searchBtn.addEventListener("click", (event) => {
        event.preventDefault();
        const searchText = searchInput.value.toLowerCase().trim();
        // "?" i url:en nedan visar att det som kommer efter är en querystringparameter
        // Först i den kommer nyckeln (här query), sen värdet (här searchText)
        // Man kan lägga till flera querystringparametrar med "&" emellan
        location.href = `search.html?query=${searchText}`;
        // Obs! Nu dirigeras man alltså om! Fortsätt dit omdirigeringen skett (skriver du mer här händer det inte ett skvatt 😉)
    });
}

// Specifika sökfunktionen genom filmposter-klick

export function posterClickListener() {
    const poster = document.querySelectorAll(
        ".center__movie-card-poster-and-title",
    );
    poster.forEach((poster) => {
        poster.addEventListener("click", (event) => {
            location.href = `movie.html?query=${poster.dataset.imdbid}`;
        });
    });
}
