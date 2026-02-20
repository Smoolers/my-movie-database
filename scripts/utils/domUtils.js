import { createMovieCard } from "../components/movieCard.js";

// Rendera ut de mottagna Movie Card-objekten i content-wrapper (index.html)

export function renderMovieCards(movies) {
    const moviesContainer = document.querySelector(".center__movies-container");
    // Rensa containern först
    moviesContainer.innerHTML = "";
    for (let movie of movies) {
        moviesContainer.appendChild(createMovieCard(movie));
    }
}

// Exportera för import i script.js
