// Escriba un programa en el cual se ingrese un valor límite positivo, 
// y a continuación solicite números al usuario hasta que la suma de 
// los números introducidos supere el límite inicial. 

var limite = parseInt(prompt("Ingrese un numero limite"));
var suma = 0;

while (suma < limite) {
    var num = parseInt(prompt("Ingrese un numero"));
    suma += num;
}

alert("La suma de los numeros ingresados es: " + suma);