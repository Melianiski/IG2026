let precio = 200;
console.log("precio sin descuento: $" + precio);



let descuento = 30;
console.log("El descuento es: " + descuento + " %");

let montoDescuento = (precio * descuento) / 100;



let precioFinal = precio - montoDescuento;
console.log("precio con descuento: $" + precioFinal);