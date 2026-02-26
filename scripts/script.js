import { renderTrailer } from "./modules/caroussel.js";
import { renderMovieCards, renderDetailedMovieCard } from "./utils/domUtils.js";
import {
    fetchRecommendedMovies,
    fetchSearch,
    fetchDetails,
} from "./modules/api.js";
import { randomize } from "./utils/utils.js";
import { readLocalStorage } from "./modules/localstorage.js";
import {
    toggleFavoriteButtonText,
    favoriteButtonClickListener,
    searchListener,
    posterClickListener,
} from "./modules/gui.js";

if (
    window.location.pathname === "/" ||
    window.location.pathname.includes("index.html")
) {
    console.log("index.html");
    startPageSetup();
} else if (window.location.pathname.includes("search.html")) {
    console.log("search.html");
    searchPageSetup();
} else if (window.location.pathname.includes("movie.html")) {
    console.log("movie.html");
    moviePageSetup();
} else if (window.location.pathname.includes("favorites.html")) {
    console.log("favorites.html");
    favoritePageSetup();
}

async function startPageSetup() {
    let allRecommendedMoviesArray = [];
    const allRecommendedMovies = await fetchRecommendedMovies();
    allRecommendedMoviesArray.push(...allRecommendedMovies);
    const allMoviesRandomized = randomize(allRecommendedMoviesArray);
    const twentyRandomMovies = allMoviesRandomized.slice(0, 20);
    await renderMovieCards(twentyRandomMovies);
    const fiveRandomMovies = allMoviesRandomized.slice(20, 25);
    fiveRandomMovies.forEach((movie, i) => {
        renderTrailer(movie, i + 1);
    });
    searchListener();
    posterClickListener();
}

async function searchPageSetup() {
    const params = new URLSearchParams(window.location.search);
    const value = params.get("query");
    const searchResults = await fetchSearch(value);
    await renderMovieCards(searchResults);
    posterClickListener();
}

async function moviePageSetup() {
    const params = new URLSearchParams(window.location.search);
    const value = params.get("query");
    const movieDetails = await fetchDetails(value);
    await renderDetailedMovieCard(movieDetails);
    favoriteButtonClickListener(movieDetails);
    toggleFavoriteButtonText(movieDetails);
}

async function favoritePageSetup() {
    const favorites = readLocalStorage();
    await renderMovieCards(favorites);
    posterClickListener();
}
