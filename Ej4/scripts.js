/* Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. 
Si el usuario ingresa alguno de esos dos caracteres se deberá de imprimir 
un mensaje por pantalla que diga “CORRECTO”, 
en caso contrario, se deberá imprimir “INCORRECTO”.  */

var caracter = prompt("Ingrese un caracter: ").toUpperCase();

if (caracter == "S" || caracter == "N") {
    console.log("CORRECTO");
    } else {
        console.log("INCORRECTO");
    }