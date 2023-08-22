/*Construir un programa que simule un menú de opciones para realizar las cuatro 
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores 
numéricos enteros. El usuario, además, debe especificar la operación con el primer 
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’ 
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.  */

var num1 = parseInt(prompt("Ingrese el primer numero"));
var num2 = parseInt(prompt("Ingrese el segundo numero"));
var operacion = prompt("Ingrese la operacion que desea realizar: S para sumar, R para restar, M para multiplicar y D para dividir");

switch (operacion) {
    case "S":
    case "s":
        alert("La suma de los numeros es: " + (num1 + num2));
        break;

    case "R":
    case "r":
        alert("La resta de los numeros es: " + (num1 - num2));
        break;

    case "M":
    case "m":

        alert("La multiplicacion de los numeros es: " + (num1 * num2));
        break;

    case "D":
    case "d":
        alert("La division de los numeros es: " + (num1 / num2));
        break;

    default:
        alert("La operacion ingresada no es valida");
        break;
}