let total = 0;
let precios = [];
let precio;

let libros;


// Estructura do - while para verificar datos correctos
do {
    libros = Number(prompt("Cuantos libros compraste?"));
}   while (isNaN(libros) || libros <= 0);




// Carga de precios
for (let i = 1; i <= libros; i++) {

    // un do while dentro del for x.x
    do {
    precio = Number(prompt("Precio del libro " + i));
    } while (isNaN(precio) || precio <= 0);

    precios.push(precio);

}


// Calcula el total
for (let i = 0; i < precios.length; i++) {
    total = total + precios[i];
}


// Busca el libro más caro
let masCaro = precios[0];

for (let i = 0; i < precios.length; i++) {

    if (precios[i] > masCaro) {
        masCaro = precios[i];
    }

}


// Buscar libro más barato
let masBarato = precios[0];

for (let i = 0; i < precios.length; i++) {

    if (precios[i] < masBarato) {
        masBarato = precios[i];
    }

}


// Suma total y promedio
let sumaTotal = 0;

for (let i = 0; i < precios.length; i++) {
    sumaTotal += precios[i];
}


let resultado = document.getElementById("resultado");
let promedio = sumaTotal / precios.length;


// resultados
resultado.textContent =
    "El libro mas caro que compraste vale " + masCaro +
    ", Y el libro mas barato vale " + masBarato +
    ", en total gastaste " + sumaTotal +
    ". El promedio del precio de todos los libros es " + promedio;