// Fisher Yates Shuffle

export function randomize(movies) {
    for (let i = movies.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = movies[i];
        movies[i] = movies[j];
        movies[j] = temp;
    }
    return movies;
}

// Felhantering vid "Ingen filmposter"
// Exportera till movieCard.js och movieDetails.js

export async function checkImageExists(movie) {
    try {
        const response = await fetch(movie.Poster, { method: "HEAD" });
        if (!response.ok) {
            throw new Error("Image does not exist on " + movie.Title);
        }
        return true;
    } catch (error) {
        console.log(error.message);
        return false;
    }
}
