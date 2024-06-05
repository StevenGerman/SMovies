export function showMovies(movies, output) {
    output.innerHTML = '';
    movies.forEach(movie => {
        const { title, overview, backdrop_path } = movie;
        const movieDiv = document.createElement('article');
        movieDiv.className = 'article';

        const movieTitle = document.createElement('h3');
        movieTitle.textContent = title;

        const movieOverview = document.createElement('p');
        movieOverview.textContent = overview;

        const moviePoster = document.createElement('img');
        moviePoster.src = backdrop_path ? `https://image.tmdb.org/t/p/w500${backdrop_path}` : 'https://via.placeholder.com/500x281?text=No+Image';
        moviePoster.alt = title;

        movieDiv.appendChild(moviePoster);
        movieDiv.appendChild(movieTitle);
        movieDiv.appendChild(movieOverview);

        output.appendChild(movieDiv);
    });
}

export function showError(message, output) {
    output.innerHTML = `<p style="color: red;">${message}</p>`;
}