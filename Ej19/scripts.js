// Realizar un programa en Javascript donde se creen dos arreglos: 
// el primero será un arreglo A de 50 números reales, 
// y el segundo B, un arreglo de 20 números, también reales
// El programa deberá inicializar el arreglo A con números aleatorios
// y mostrarlo por pantalla. 
// Luego, el arreglo A se debe ordenar de menor a mayor y 
// copiar los primeros 10 números ordenados al arreglo B 
// de 20 elementos, y rellenar los 10 últimos elementos con el valor 0.5. 
// Mostrar los dos arreglos resultantes: el ordenado de 50 elementos 
// y el combinado de 20.

var arrayA = [];
var arrayB = [];

for (var i = 0; i < 50; i++) {
    arrayA[i] = Math.random();
}

console.log("Array A inicializado: " + arrayA);

arrayA.sort(function (a, b) {
    return a - b;
});

for (var i = 0; i < 10; i++) {
    arrayB[i] = arrayA[i];
}

for (var i = 10; i < 20; i++) {
    arrayB[i] = 0.5;
}

console.log("Array A ordenado: " + arrayA);
console.log("Array B: " + arrayB);