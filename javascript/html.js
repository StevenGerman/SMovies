/* export function showMovies(movies, output) {
    output.innerHTML = '';
    movies.forEach(movie => {
        const { title, overview, backdrop_path } = movie;
        const movieDiv = document.createElement('div');
        movieDiv.className = 'col-12 card col-md-4';

        const movieTitleContainer = document.createElement('div');
        movieTitleContainer.className = 'row';
        const movieTitle = document.createElement('h3');
        movieTitle.textContent = title;
        movieTitle.className = 'col';
        movieTitleContainer.appendChild(movieTitle);
        
        const movieOverview = document.createElement('p');
        movieOverview.textContent = overview;

        const moviePosterContainer = document.createElement('div');
        moviePosterContainer.className = 'row';
        
        const moviePoster = document.createElement('img');
        moviePoster.src = backdrop_path ? `https://image.tmdb.org/t/p/w500${backdrop_path}` : 'https://via.placeholder.com/500x281?text=No+Image';
        moviePoster.alt = title;
        moviePoster.className = 'col';
        moviePosterContainer.appendChild(moviePoster);
        movieDiv.appendChild(moviePosterContainer);
        movieDiv.appendChild(movieTitleContainer);
        movieDiv.appendChild(movieOverview);

        output.appendChild(movieDiv);
    });
} */

export function showMovies(movies, output) {
    output.innerHTML = '';
    // ... (resto del código)
    movies.forEach(movie => {
        const {title, overview, backdrop_path} = movie;
        const movieDiv = document.createElement('div');
        movieDiv.className = 'col col-12 col-lg-3 mt-1 mb-1'; 
        
        const movieTitle = document.createElement('h3');
        movieTitle.textContent = title;
        movieTitle.className = 'col text-center h5 p-3';

        const movieOverview = document.createElement('p');
        const shortOverview = movie.overview.slice(0, 144) + '...'; // Cortar los primeros 50 caracteres
        movieOverview.textContent = shortOverview;
        //movieOverview.textContent = movie.overview;
        movieOverview.className = 'card-text p-3 lh-sm';

        const moviePoster = document.createElement('img');
        moviePoster.src = backdrop_path ? `https://image.tmdb.org/t/p/w500${backdrop_path}` : 'https://via.placeholder.com/500x281?text=No+Image';
        moviePoster.alt = title;
        moviePoster.className = 'col';
        moviePoster.className = 'card-img-top';

        const movieCard = document.createElement('div');
        movieCard.className = 'card';
        movieCard.appendChild(moviePoster);
        movieCard.appendChild(movieTitle);
        movieCard.appendChild(movieOverview);
        movieDiv.appendChild(movieCard);
        output.appendChild(movieDiv);
    });

    
}

export function showError(message, output) {
    output.innerHTML = `<p style="color: red;">${message}</p>`;
}