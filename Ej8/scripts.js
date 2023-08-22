// Escribir un programa que lea números enteros hasta teclear 0 (cero). 
// Al finalizar el programa se debe mostrar el máximo número ingresado, 
// el mínimo, y el promedio de todos ellos. 

var num = parseInt(prompt("Ingrese un numero"));
var max = num;
var min = num;
var suma = num;
var cant = 1;

while (num != 0) {
    num = parseInt(prompt("Ingrese un numero"));
    if (num > max) {
        max = num;
    }
    if (num < min) {
        min = num;
    }
    suma += num;
    cant++;
}

alert("El maximo numero ingresado es: " + max);
alert("El minimo numero ingresado es: " + min);
alert("El promedio de los numeros ingresados es: " + (suma / cant));