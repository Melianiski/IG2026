let menu = ["pasta", "pollo", "ensalada"];
let cantidadPasta = 0;
let cantidadPollo = 0;
let cantidadEnsalada = 0;
let orden;
let porcentajePasta, porcentajePollo, porcentajeEnsalada;
let menuGanador;

let resultado = document.getElementById("resultado");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

for (let i = 1; i <= 12; i++) {

    do {
    orden = prompt("Que vas a pedir? " + menu + "  ingrese solo las palabras claves (pasta, ensalada o pollo)");
    } while (orden !== "pasta" && orden !== "pollo" && orden !== "ensalada")

    if (orden === "pasta") {
        cantidadPasta++
    } if (orden === "pollo") {
        cantidadPollo++
    } if (orden === "ensalada") {
        cantidadEnsalada++
    }
}


porcentajePasta = (cantidadPasta / 12) * 100;
porcentajePollo = (cantidadPollo / 12) * 100;
porcentajeEnsalada = (cantidadEnsalada / 12) * 100;




    menuGanador = menu[0]

    if (cantidadPasta > cantidadPollo && cantidadPasta > cantidadEnsalada) {
        menuGanador = menu[0] 
}
      if (cantidadPollo > cantidadPasta && cantidadPollo > cantidadEnsalada) {
        menuGanador = menu[1] 
}
    if (cantidadEnsalada > cantidadPasta && cantidadEnsalada > cantidadPollo) {
        menuGanador = menu[2] 
}


resultado.textContent = "El porcentaje de pedidos para pollo es de " + porcentajePollo + " para Pastas es " + porcentajePasta + " para Ensaladas es " + porcentajeEnsalada + " .El menu ganador fue " + menuGanador;



