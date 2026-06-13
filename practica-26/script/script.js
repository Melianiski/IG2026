let costoProyectores = 45000;
let costoComputadoras = 50000;
let costoPantallas = 35000;
let totalProyectores, totalComputadoras, totalPantallas;
let resultadoTotal;
let descuento;
let resultado;

let calcular = document.getElementById("calcular");
calcular.addEventListener("click", function() {


let proyectores = Number(document.getElementById("proyectores").value);
totalProyectores =  Number(proyectores) * costoProyectores;



let computadoras = Number(document.getElementById("computadoras").value);
totalComputadoras = Number(computadoras) * costoComputadoras;



let pantallas = Number(document.getElementById("pantallas").value);
totalPantallas = Number(pantallas) * costoPantallas;




let dias = Number(document.getElementById("dias").value);

resultadoTotal = (totalProyectores + totalComputadoras + totalPantallas) * Number(dias)

if (resultadoTotal <= 500000) {
    resultado = document.getElementById("resultado")
    resultado.textContent = "En total es " + resultadoTotal

} else if (resultadoTotal > 500000) {
    
    descuento = resultadoTotal * 0.10;
    let totalFinal = resultadoTotal - descuento;

    resultado.textContent =
    "Al superar los $500.000 tenés un descuento del 10%. Total final: $" + totalFinal;
}


console.log(proyectores);
console.log(computadoras);
console.log(pantallas);
console.log(dias);

console.log(resultadoTotal)

});

