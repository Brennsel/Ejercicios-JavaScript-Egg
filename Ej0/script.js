
/* var persona = {
    apellido : "Argañaraz",
    nombre : "Brenda",
    edad : 22,
    mascota : {
            nombre : "Nina",
            numeroId: 123456,
            nacmiento: new Date(2019, 10, 10),
        }

}

//var mascota = {
//    nombre : "Nina",
//   numeroId: 123456,
//    nacmiento: new Date(2019, 10, 10),

console.log(persona); */

/* var numeros = [1,2,3,4,5,6,7,8,9,10];

var personas = [
    {
        nombre: "Brenda",
        apellido: "Argañaraz",
    },
    {
        nombre: "Juan",
        apellido: "Perez",
    },
    {
        nombre: "Maria",
        apellido: "Gomez",
    },
]; */

/* window.onload = saludar;

document.getElementById("123").onmouseover = function(){
    retar("soy un input");
}

document.getElementById("btn").onclick = meHicisteClick;



function saludar(){
    console.log("Bienvenido!!");
}

function retar(tipo){
    console.log(tipo);
    console.log("epa! sali de arriba mio");
}

function meHicisteClick(){
    console.log("Me hiciste click <3");
}
 */

let titulos = document.getElementsByName("titulo");
let pes = document.getElementsByTagName("p");
let input = document.getElementsById("123");
let boton = document.getElementsById("btn");

boton.onclick = function(){

    titulos.forEach(e => {
        e.style.color = "red";
    });

    for(const e of pes) {
        e.innerHTML = "Hola";
    }

    input.value = "Chiquito";
}

input.onkeydown = function(){
    if(input.value.length > 10){
        input.value = "Chiquito";
    }
}