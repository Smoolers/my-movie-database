import { checkImageExists } from "../utils/utils.js";

// Skapa Movie Card-objekten

export async function createMovieCard(movie) {
    const isPosterExisting = await checkImageExists(movie);

    // Conditional (ternary) operator:
    const posterSrc = isPosterExisting
        ? movie.Poster
        : "./res/icons/missing-poster.svg";
    // Ett alternativ till if else

    // let posterSrc;
    // if (isPosterExisting) {
    //     posterSrc = movie.Poster;
    // } else {
    //     posterSrc = "./res/icons/missing-poster.svg";
    // }

    const movieCard = document.createElement("article");
    movieCard.dataset.imdbid = movie.imdbID;
    movieCard.classList.add("center__movie-card-poster-and-title");
    movieCard.innerHTML = `
    <img src="${posterSrc}" alt="Poster på filmen ${movie.Title}" class="center__movie-card-poster">
    <p class="center__movie-card-title">${movie.Title}</p>`;
    return movieCard;
}

// Exportera till domUtils.js (för rendering)
