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
}

function cargarLibro() {
    libro.ISBN = prompt("Ingrese el ISBN del libro");
    libro.Titulo = prompt("Ingrese el título del libro");
    libro.Autor = prompt("Ingrese el autor del libro");
    libro.NumeroDePaginas = prompt("Ingrese el número de páginas del libro");
}

cargarLibro();

console.log(libro);