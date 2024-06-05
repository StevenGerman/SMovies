import { fetchPopularMovies, searchMovies } from "./javascript/requests.js";
import { showMovies } from "./javascript/html.js";
import { validateInput } from "./javascript/validations.js";


//CONSTANTES
const form = document.querySelector('#form');
const searchInput = document.querySelector('#search');
const output = document.querySelector('#output');
const language = document.querySelector('#language');
const page = document.querySelector('#page');



document.addEventListener('DOMContentLoaded', async () => {
    // Obtiene el valor actual del idioma seleccionado por el usuario.
    const languageValue = language.value;

    // Obtiene el valor actual de la página seleccionada por el usuario.
    const pageValue = page.value;

    // Realiza la solicitud para obtener las películas populares utilizando los valores del idioma y la página.
    const popularMovies = await fetchPopularMovies(languageValue, pageValue);

    // Verifica si se encontraron películas populares y muestra el resultado o un mensaje de error en función de ello.
    if (popularMovies && popularMovies.results.length > 0) {
        showMovies(popularMovies.results, output);
    } else {
        showError('No se encontraron películas populares.', output);
    }
});

// Escucha el evento 'keyup' en el campo de búsqueda
searchInput.addEventListener('keyup', async (event) => {
    // Obtiene el valor actual del campo de búsqueda y elimina los espacios en blanco del inicio y el final
    const query = event.target.value.trim();
    
    // Verifica si el valor de entrada no pasa la validación
    if (!validateInput(query)) {
        // Muestra un mensaje de error si el valor de entrada no es válido y devuelve
        showError('Por favor, escribe solo letras, números o espacios.', output);
        return;
    }
    
    // Verifica si el campo de búsqueda está vacío
    if (!query) {
        // Muestra un mensaje de error si el campo de búsqueda está vacío y devuelve
        showError('Por favor, escribe un término de búsqueda.', output);
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
        showError('No se encontraron películas.', output);
    }
});

// Escucha el evento 'submit' en el formulario
form.addEventListener('submit', async (event) => {
    // Previene el comportamiento por defecto de enviar el formulario y recargar la página
    event.preventDefault();
    
    // Obtiene el valor actual del campo de búsqueda y elimina los espacios en blanco del inicio y el final
    const query = searchInput.value.trim();
    
    // Verifica si el valor de entrada no pasa la validación
    if (!validateInput(query)) {
        // Muestra un mensaje de error si el valor de entrada no es válido y devuelve
        showError('Por favor, escribe solo letras, números o espacios.', output);
        return;
    }
    
    // Verifica si el campo de búsqueda está vacío
    if (!query) {
        // Muestra un mensaje de error si el campo de búsqueda está vacío y devuelve
        showError('Por favor, escribe un término de búsqueda.', output);
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
        showError('No se encontraron películas.', output);
    }
});






