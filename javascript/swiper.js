export function showMoviesSlider(movies,slider){
    //slider.innerHTML = '';
    //const slider = document.querySelector('.swiper-wrapper')
    movies.forEach(movie => {

        swiperSlide = document.createElement('div');
        swiperSlide.className = 'swiper-slide';
         

        const {backdrop_path} = movie;
        const moviePoster = document.createElement('img');
        moviePoster.src = backdrop_path ? `https://image.tmdb.org/t/p/w500${backdrop_path}` : `https://via.placeholder.com/500x281?text=No+Image`;
        
        swiperSlide.appendChild(moviePoster);
        slider.appendChild(swiperSlide);
    })

}