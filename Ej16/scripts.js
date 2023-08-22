//Realizar un programa que rellene dos vectores al mismo tiempo, 
// con 5 valores aleatorios 
// y los muestre por pantalla. 

var vector1 = [];
var vector2 = [];

for (var i = 0; i < 5; i++) {
    vector1[i] = Math.floor(Math.random() * 10);
    vector2[i] = Math.floor(Math.random() * 10);
}

console.log(vector1);
console.log(vector2);