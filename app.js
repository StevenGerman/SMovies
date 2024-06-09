import { fetchPopularMovies, searchMovies,fetchFromAPI } from "./javascript/requests.js";
import { showMovies } from "./javascript/html.js";
import { validateInput } from "./javascript/validations.js";












//CONSTANTES
/* const form = document.querySelector('#form');
console.log(form); */
const searchInput = document.querySelector('#search');
console.log(searchInput);
const output = document.querySelector('#output');
console.log(output);
const language = document.querySelector('#language');
console.log(language);
const idioma = document.querySelector('#idioma');
console.log(idioma);
const page = document.querySelector('#page');
console.log(page);

const btnBuscar = document.querySelector('#btnBuscar');
console.log(btnBuscar);


document.addEventListener('DOMContentLoaded', async () => {
    // Obtiene el valor actual del idioma seleccionado por el usuario.
    const languageValue = language.value;

    // Obtiene el valor actual de la página seleccionada por el usuario.
    const pageValue = page.value;

    // Realiza la solicitud para obtener las películas populares utilizando los valores del idioma y la página.
    const popularMovies = await fetchPopularMovies(languageValue, pageValue);
    
    // Verifica si se encontraron películas populares y muestra el resultado o un mensaje de error en función de ello.
    if (popularMovies) {
        showMovies(popularMovies.results, output);
        /* showMoviesSlider(popularMovies.results,slider); */    

    } else {
        console.log('No se encontraron películas populares.', output);
    }
});

// Escucha el evento 'keyup' en el campo de búsqueda
searchInput.addEventListener('keyup', async (event) => {
    // Obtiene el valor actual del campo de búsqueda y elimina los espacios en blanco del inicio y el final
    const query = event.target.value.trim();
    
    // Verifica si el valor de entrada no pasa la validación
    if (!validateInput(query)) {
        // Muestra un mensaje de error si el valor de entrada no es válido y devuelve
        console.log('Por favor, escribe solo letras, números o espacios.', output);
        return;
    }
    
    // Verifica si el campo de búsqueda está vacío
    if (!query) {
        // Muestra un mensaje de error si el campo de búsqueda está vacío y devuelve
        console.log('Por favor, escribe un término de búsqueda.', output);
        return;
    }

    // Realiza una búsqueda de películas utilizando el término de búsqueda, el idioma y la página actual
    const movies = await searchMovies(query, language.value, page.value);

    // Verifica si se encontraron películas y si hay resultados
    if (movies && movies.results.length > 0) {
        // Muestra las películas encontradas si hay resultados
        showMovies(movies.results, output);
        
    } else {
        // Muestra un mensaje de error si no se encontraron películas y no hay resultados
        console.log('No se encontraron películas.', output);
    }
});

language.addEventListener('click', async (event) => {
    event.preventDefault();
    
    // Obtiene el valor actual del campo de búsqueda y elimina los espacios en blanco del inicio y el final
    const query = searchInput.value.trim();
    
    // Verifica si el valor de entrada no pasa la validación
    if (!validateInput(query)) {
        // Muestra un mensaje de error si el valor de entrada no es válido y devuelve
        console.log('Por favor, escribe solo letras, números o espacios.');
        return;
    }
    
    // Verifica si el campo de búsqueda está vacío
    if (!query) {
        // Muestra un mensaje de error si el campo de búsqueda está vacío y devuelve
        console.log('Por favor, escribe un término de búsqueda.');
        return;
    } 

    // Realiza una búsqueda de películas utilizando el término de búsqueda, el idioma y la página actual
    const movies = await searchMovies(query, language.value, page.value);

    // Verifica si se encontraron películas y si hay resultados
    if (movies && movies.results.length > 0) {
        // Muestra las películas encontradas si hay resultados
        showMovies(movies.results, output);
    } else {
        // Muestra un mensaje de error si no se encontraron películas y no hay resultados
        console.log('No se encontraron películas.', output);
    }
})
page.addEventListener('click', async (event) => {
    event.preventDefault();
    
    // Obtiene el valor actual del campo de búsqueda y elimina los espacios en blanco del inicio y el final
    const query = searchInput.value.trim();
    
    // Verifica si el valor de entrada no pasa la validación
    if (!validateInput(query)) {
        // Muestra un mensaje de error si el valor de entrada no es válido y devuelve
        console.log('Por favor, escribe solo letras, números o espacios.');
        return;
    }
    
    // Verifica si el campo de búsqueda está vacío
    if (!query) {
        // Muestra un mensaje de error si el campo de búsqueda está vacío y devuelve
        console.log('Por favor, escribe un término de búsqueda.');
        return;
    } 

    // Realiza una búsqueda de películas utilizando el término de búsqueda, el idioma y la página actual
    const movies = await searchMovies(query, language.value, page.value);

    // Verifica si se encontraron películas y si hay resultados
    if (movies && movies.results.length > 0) {
        // Muestra las películas encontradas si hay resultados
        showMovies(movies.results, output);
    } else {
        // Muestra un mensaje de error si no se encontraron películas y no hay resultados
        console.log('No se encontraron películas.', output);
    }
})
// Escucha el evento 'submit' en el formulario
/* btnBuscar.addEventListener('click', async (event) => {
    // Previene el comportamiento por defecto de enviar el formulario y recargar la página
    
});




 */

