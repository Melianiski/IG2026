let aplicarDescuento = document.querySelector("#aplicar");

aplicarDescuento.addEventListener("click", function() {

    let cantidad = document.querySelector("#cantidad").value;
    let descuento = document.querySelector("#descuento").value;

    console.log("cantidad:", cantidad);
    console.log("descuento:", descuento);

    let resultado = Number(cantidad) - (Number(cantidad) * Number(descuento) / 100);

    console.log("resultado:", resultado);

    document.querySelector("#resultado").value = resultado;

});