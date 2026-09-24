// Anropa rekommenderade filmer

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

// Anropa filmdatabasen för bred filmsökning

export async function fetchSearch(query) {
    try {
        const response = await fetch(
            `https://www.omdbapi.com/?apikey=428d2381&s=${query}`,
        );
        const data = await response.json();
        return data.Search;
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

// Anropa filmdatabasen för detaljerad sökning på specifik film

export async function fetchDetails(id) {
    try {
        const response = await fetch(
            `https://www.omdbapi.com/?apikey=428d2381&plot=full&i=${id}`,
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

// Exportera till script.js
