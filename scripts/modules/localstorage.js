import { toggleFavoriteButtonText } from "./gui.js";

// LocalStorage-funktionalitet

// Läsa det som finns i localStorage, om något

export function readLocalStorage() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites;
}

// Lägga till och ta bort favoritfilmer från localStorage

export function toggleFavoriteMovie(array, movie) {
    const favorites = readLocalStorage();
    if (favorites.some((fav) => fav.imdbID === movie.imdbID)) {
        array = array.filter((mov) => mov.imdbID !== movie.imdbID);
    } else {
        array.push(movie);
    }
    localStorage.setItem("favorites", JSON.stringify(array));
    toggleFavoriteButtonText(movie);
}
