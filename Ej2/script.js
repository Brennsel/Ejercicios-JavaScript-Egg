/* Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio 
de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que 
para calcular el área y el perímetro se utilizan las siguientes fórmulas: 
area = PI * radio2 
perimetro = 2 * PI * radio  */

var radio = prompt("Ingrese el radio de la circunferencia:");

var area = Math.PI * Math.pow(radio, 2);

var perimetro = 2 * Math.PI * radio;

console.log(`El area de la circunferencia es de ${area}`);
console.log(`El perimetro de la circunferencia es de ${perimetro}`);

document.write(`El area de la circunferencia es de ${area} y El perimetro de la circunferencia es de ${perimetro}`);