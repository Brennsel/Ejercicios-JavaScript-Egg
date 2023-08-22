// Escribir una función flecha que reciba una palabra y la devuelva al revés.

const alReves = (palabra) => { 
    let palabraAlReves = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
        palabraAlReves += palabra.substring(i, i + 1);
    }
    return palabraAlReves;
}

let palabra = prompt("Ingrese una palabra");

console.log(alReves(palabra));