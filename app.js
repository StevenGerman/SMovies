const form = document.querySelector('#form');

console.log(form);

form.addEventListener('submit', async (event)=>{
    event.preventDefault();
    //alert('Hola');

    const resultado = await fetchData();

    console.log(resultado);
    if(resultado){
        console.log('exito');
    }

    const output = document.querySelector('#output');
    output.innerHTML = '';
    
    for (let i = 0; i < resultado.results.length; i++) {
        //Captura de atributos de las peliculas
        const title = resultado.results[i].original_title;
        const overview = resultado.results[i].overview;
        const poster = resultado.results[i].backdrop_path;
        //Muestra de datos
        output.innerHTML += `
        <article  class="article"> <div><img src=https://image.tmdb.org/t/p/w500${poster} ></div> <h3>${title}</h3>
        <p>${overview}</p> </article>`;




    }



})

async function fetchData(){
    //Declaracion de parametros
    let page = document.querySelector('#page');
    console.log(page);
    const language = document.querySelector('#language');
    const account_id = '6913a37df22d89e5ac29bb9cd3c0014b';

    //Setero parametros
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${account_id}&language=${language.value}&page=${page.value}`;
    console.log(url);
    //peticion
    const response = await fetch(url);
    const json = await response.json();
    return json; 


}