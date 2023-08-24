// Realizar un programa que obtenga la siguiente matriz 
// [[3], [6], [9], [12], [15]] y 
// devuelve y muestre el siguiente array [6, 9, 12, 15, 18].

var matriz = [[3], [6], [9], [12], [15]];

var array = [];

for (var i = 0; i < matriz.length; i++) {
    array.push(matriz[i][0] +3);
}

console.log(array);