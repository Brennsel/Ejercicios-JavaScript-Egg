// Escribir una función flecha de JavaScript que reciba un argumento 
// y retorne el tipo de dato

const tipoDeDato = (dato) => {
    return typeof(dato);
}

let dato = prompt("Ingrese un dato");

console.log(tipoDeDato(dato));