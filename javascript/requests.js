

// Definimos la clave de API que se utilizará para realizar las solicitudes a la API de The Movie DB
export const apiKey = '6913a37df22d89e5ac29bb9cd3c0014b';

// Función asincrónica para obtener películas populares
export async function fetchPopularMovies(language, page) {
    // Construimos la URL de la solicitud utilizando la clave de API, el idioma y el número de página especificados
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=${language}&page=${page}`;
    
    // Realizamos la solicitud a la API y retornamos el resultado
    return await fetchFromAPI(url);
}

// Función asincrónica para buscar películas por consulta
export async function searchMovies(query, language, page) {
    // Construimos la URL de la solicitud utilizando la clave de API, la consulta de búsqueda, el idioma y el número de página especificados
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=${language}&page=${page}`;
    
    // Realizamos la solicitud a la API y retornamos el resultado
    return await fetchFromAPI(url);
}

// Función asincrónica para realizar solicitudes a la API
export async function fetchFromAPI(url) {
    try {
        // Realizamos la solicitud a la URL especificada
        const response = await fetch(url);
        
        // Verificamos si la solicitud fue exitosa (código de estado 200)
        if (!response.ok) {
            // Si la solicitud no fue exitosa, lanzamos un error con el código de estado
            throw new Error(`Error: ${response.status}`);
        }
        
        // Retornamos el resultado de la solicitud como un objeto JSON
        return await response.json();
    } catch (error) {
        // Si se produce un error durante la solicitud, lo capturamos y lo manejamos
        console.error('Error al hacer la solicitud a la API:', error);
        
        // Lanzamos un nuevo error con un mensaje descriptivo
        throw new Error(`Error al buscar películas: ${error.message}`);
    }
}
