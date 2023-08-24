// A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:

var valores = [true, 5, false, "hola", "adios", 2];

// a) Determinar cual de los dos elementos de texto es mayor

if (valores[3] > valores[4]) {
    console.log("La palabra " + valores[3] + " es mayor que " + valores[4]);
} else if (valores[3] < valores[4]) {
    console.log("La palabra " + valores[4] + " es mayor que " + valores[3]);
} else {
    console.log("Las palabras son iguales");
}

// b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
// operadores necesarios para obtener un resultado true y otro resultado false

if (valores[0] == true && valores[2] == false) {
    console.log("El resultado es true");
} else {
    console.log("El resultado es false");
}

// c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
// dos elementos numéricos

console.log("Suma: " + (valores[1] + valores[5]));
console.log("Resta: " + (valores[1] - valores[5]));
console.log("Multiplicación: " + (valores[1] * valores[5]));
console.log("División: " + (valores[1] / valores[5]));
console.log("Módulo: " + (valores[1] % valores[5]));