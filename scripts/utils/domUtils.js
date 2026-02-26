import { createMovieCard } from "../components/movieCard.js";
import { createDetailedMovieCard } from "../components/movieDetails.js";

// Rendera ut Movie Card-objekten i index.html, search.html och favorites.html

export async function renderMovieCards(movies) {
    const moviesContainer = document.querySelector(".center__movies-container");
    moviesContainer.innerHTML = "";
    for (let movie of movies) {
        const movieCard = await createMovieCard(movie);
        moviesContainer.appendChild(movieCard);
    }
}

// Rendera ut de detaljerade Movie Card-objekten i movie.html

export async function renderDetailedMovieCard(movie) {
    const moviesContainer = document.querySelector(".center__movies-container");
    moviesContainer.innerHTML = "";
    const detailedMovieCard = await createDetailedMovieCard(movie);
    moviesContainer.appendChild(detailedMovieCard);
}

// Exportera till script.js (för rendering på respektive sida)
