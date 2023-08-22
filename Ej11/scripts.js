// Escribir una función que reciba un String 
// y devuelva la palabra más larga. 
// String Ejemplo: “Guia de JavaScript”
// Resultado esperado : “JavaScript”

function palabraMasLarga(frase) {
    var palabras = frase.split(" ");
    var masLarga = palabras[0];
    for (var i = 1; i < palabras.length; i++) {
        if (palabras[i].length > masLarga.length) {
            masLarga = palabras[i];
        }
    }
    return masLarga;
}

var frase = prompt("Ingrese una frase");
alert("La palabra mas larga es: " + palabraMasLarga(frase));