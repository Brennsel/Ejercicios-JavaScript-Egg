// Crear un objeto libro que contenga las siguientes 
// propiedades: ISBN, Título, Autor, Número de páginas. 
// Crear un método para cargar un libro pidiendo los datos al usuario 
// y luego informar mediante otro método 
// el número de ISBN, el título, el autor del libro y el numero de páginas.

var libro = {
    ISBN: "",
    Titulo: "",
    Autor: "",
    NumeroDePaginas: 0,
    cargarLibro: function() {
        this.ISBN = prompt("Ingrese el ISBN del libro");
        this.Titulo = prompt("Ingrese el título del libro");
        this.Autor = prompt("Ingrese el autor del libro");
        this.NumeroDePaginas = prompt("Ingrese el número de páginas del libro");
    }
}

libro.cargarLibro();

console.log(libro);