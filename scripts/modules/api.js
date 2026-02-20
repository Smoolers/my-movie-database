export async function fetchRecommendedMovies() {
    try {
        const response = await fetch(
            "https://santosnr6.github.io/Data/favoritemovies.json",
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export async function fetchSearch(query) {
    try {
        const response = await fetch(
            `http://www.omdbapi.com/?apikey=428d2381&s=${query}`,
        );
        const data = await response.json();
        return data.Search;
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export async function fetchDetails(id) {
    try {
        const response = await fetch(
            `http://www.omdbapi.com/?apikey=428d2381&plot=full&i=${id}`,
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

// Exportera för import i script.js
