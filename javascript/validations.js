// Define una función llamada validateInput que recibe un argumento llamado input
export function validateInput(input) {
    // Utiliza una expresión regular para verificar si el input contiene solo letras, números o espacios
    // La expresión /^[a-zA-Z0-9 ]*$/ verifica que la cadena contenga solo letras (mayúsculas y minúsculas), números o espacios
    // El método test() de la expresión regular devuelve true si la cadena cumple con el patrón, y false si no lo hace
    return /^[a-zA-Z0-9 ]*$/.test(input);
}
