import {
    fetchRecommendedMovies,
    fetchSearch,
    fetchDetails,
} from "./modules/api.js";
import { renderMovieCards } from "./utils/domUtils.js";
import {
    randomize,
    searchListener,
    posterClickListener,
} from "./utils/utils.js";
import { renderTrailer } from "./modules/caroussel.js";

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
}

let allRecommendedMoviesArray = [];

async function startPageSetup() {
    const allRecommendedMovies = await fetchRecommendedMovies();
    allRecommendedMoviesArray.push(...allRecommendedMovies);
    const allMoviesRandomized = randomize(allRecommendedMoviesArray);
    const twentyRandomMovies = allMoviesRandomized.slice(0, 20);
    renderMovieCards(twentyRandomMovies);
    const fiveRandomMovies = allMoviesRandomized.slice(20, 25);
    fiveRandomMovies.forEach((movie, i) => {
        renderTrailer(movie, i + 1);
    });
    searchListener();
}

async function searchPageSetup() {
    const params = new URLSearchParams(window.location.search);
    const value = params.get("query");
    const searchResults = await fetchSearch(value);
    renderMovieCards(searchResults);
    posterClickListener();
}

async function moviePageSetup() {
    const params = new URLSearchParams(window.location.search);
    const value = params.get("query");
    const movieDetails = await fetchDetails(value);
    renderMovieCards(movieDetails);
}
