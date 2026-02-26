import { checkImageExists } from "../utils/utils.js";

// Skapa de detaljerade Movie Card-objekten

export async function createDetailedMovieCard(movie) {
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
    movieCard.classList.add("center__detailed-movie-card");
    movieCard.innerHTML = `
    <div class="center__detailed-movie-card-container-title-button">
        <h2 class="center__detailed-movie-card-title">${movie.Title}</h2>
        <button type="button" class="center__detailed-movie-card-button"></button>
    </div>
    <div class="center__detailed-movie-card-container-poster-and-info">
        <div class="center__detailed-movie-card-container-poster">
            <img src="${posterSrc}" alt="Poster på filmen ${movie.Title}" class="center__detailed-movie-card-poster">
        </div>
        <div class="center__detailed-movie-card-container-info">
            <div class="center__detailed-movie-card-container-rgrrr">
                <div class="center__detailed-movie-card-container-rated">
                    <h4 class="center__detailed-movie-card-rated-1">Rated</h4>
                    <p class="center__detailed-movie-card-rated-2">${movie.Rated}</p>
                </div>
                <div class="center__detailed-movie-card-container-genre">
                    <h4 class="center__detailed-movie-card-genre-1">Genre</h4>
                    <p class="center__detailed-movie-card-genre-2">${movie.Genre}</p>
                </div>
                <div class="center__detailed-movie-card-container-runtime">
                    <h4 class="center__detailed-movie-card-runtime-1">Runtime</h4>
                    <p class="center__detailed-movie-card-runtime-2">${movie.Runtime}</p>
                </div>
                <div class="center__detailed-movie-card-container-released">
                    <h4 class="center__detailed-movie-card-released-1">Released</h4>
                    <p class="center__detailed-movie-card-released-2">${movie.Released}</p>
                </div>
                <div class="center__detailed-movie-card-container-ratings">
                    <h4 class="center__detailed-movie-card-ratings-1">Ratings</h4>
                    <p class="center__detailed-movie-card-ratings-2">${movie.imdbRating} / 10</p>
                </div>
            </div>
            <div class="center__detailed-movie-card-container-plot">
                <h3 class="center__detailed-movie-card-plot-title">Plot</h3>
                <p class="center__detailed-movie-card-plot-text">${movie.Plot}</p>
            </div>
            <div class="center__detailed-movie-card-container-dwa">
                <div class="center__detailed-movie-card-container-director">
                    <h4 class="center__detailed-movie-card-director-title">Director</h4>
                    <p class="center__detailed-movie-card-director-text">${movie.Director}</p>
                </div>
                <div class="center__detailed-movie-card-container-writer">
                    <h4 class="center__detailed-movie-card-writer-title">Writer</h4>
                    <p class="center__detailed-movie-card-writer-text">${movie.Writer}</p>
                </div>
                <div class="center__detailed-movie-card-container-actors">
                    <h4 class="center__detailed-movie-card-actors-title">Actors</h4>
                    <p class="center__detailed-movie-card-actors-text">${movie.Actors}</p>
                </div>
            </div>
        </div>
    </div>`;
    return movieCard;
}

// Exportera till domUtils.js (för rendering)
