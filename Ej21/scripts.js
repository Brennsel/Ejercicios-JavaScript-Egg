// Escribir un programa para obtener un array de las propiedades de un 
// objeto Persona. Las propiedades son nombre, edad, 
// sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura. 

var persona = {
    nombre: '',
    edad: 0,
    sexo: '',
    peso: 0,
    altura: 0
};

function cargarDatos() {
    persona.nombre = prompt('Ingrese su nombre');
    persona.edad = parseInt(prompt('Ingrese su edad'));
    do{
        persona.sexo = prompt('Ingrese su sexo (H, M, O)').toUpperCase();
    } while(persona.sexo != 'H' && persona.sexo != 'M' && persona.sexo != 'O')
    persona.peso = parseInt(prompt('Ingrese su peso'));
    persona.altura = parseFloat(prompt('Ingrese su altura'));
}

cargarDatos();

//una resolucion

var array = [];

let i = 0;
for (let clave in persona){
    array[i] = persona[clave];
    i++;
}

console.log(array);

//otra resolucion

let array1 = [];

for (let clave in persona){
    array1.push(persona[clave]); 
}

console.log(array1);