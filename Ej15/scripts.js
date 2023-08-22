// Escribe un programa JavaScript para calcular el área y el perímetro 
// de un objeto Círculo con la propiedad radio. 
// Nota: Cree dos métodos para calcular el área y el perímetro. El radio 
// del círculo lo proporcionará el usuario

function Circle(radius) {
    this.radius = radius;

    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };

    this.perimeter = function () {
        return 2 * Math.PI * this.radius;
    };
}

var circle = prompt("Ingrese el radio del círculo");

circle = new Circle(circle);

console.log("area:" + circle.area());

console.log("perimetro:" + circle.perimetro());