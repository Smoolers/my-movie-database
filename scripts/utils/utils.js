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

// Sök-funktion startsida

export function searchListener() {
    const searchBtn = document.querySelector("#searchBtn");
    const searchInput = document.querySelector("#searchInput");
    searchBtn.addEventListener("click", (event) => {
        event.preventDefault();
        const searchText = searchInput.value.toLowerCase().trim();
        // "?" i url:en nedan visar att det som kommer efter är en querystringparameter
        // Först i den kommer nyckeln (här query), sen värdet (här searchText)
        // Man kan lägga till flera querystringparametrar med "&" emellan
        location.href = `/search.html?query=${searchText}`;
        // Obs! Nu dirigeras man alltså om! Så fortsätt där dirigeringen skett till (skriver du nåt mer här kommer det inte hända ett skvatt med det 😉)
    });
}

// Vid filmposter-klick

export function posterClickListener() {
    const poster = document.querySelectorAll(".center__movie-card");
    poster.forEach((poster) => {
        poster.addEventListener("click", (event) => {
            console.log(poster);
            console.log(poster.dataset);
            location.href = `/movie.html?query=${poster.dataset.imdbid}`;
        });
    });
}
