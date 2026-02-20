// Skapa de enskilda Movie Card-objekten

export function createMovieCard(movie) {
    const movieCard = document.createElement("article");
    movieCard.dataset.imdbid = movie.imdbID;
    movieCard.classList.add("center__movie-card");
    movieCard.innerHTML = `<img src="${movie.Poster}" alt="Poster på filmen ${movie.Title}" class="center__movie-card-poster">
    <p class="center__movie-card-title">${movie.Title}</p>`;
    return movieCard;
}

// Exportera för import i domUtils.js
