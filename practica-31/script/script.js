let clientes = [];
let pedidos = [];

let nombre = document.querySelector("#nombre");
let monto = document.querySelector("#monto");
let formCliente = document.querySelector("#formCliente");

let lista = document.querySelector("#lista");

function agregarCliente() {
    clientes.push(nombre.value);
    pedidos.push(Number(monto.value));

    console.log(clientes);
    console.log(pedidos);

    lista.innerHTML += `
        <p>Cliente: ${nombre.value}</p>
        <p>Compra: $${monto.value}</p>
    `;
}

formCliente.addEventListener("submit", function(event) {
    event.preventDefault();
    agregarCliente();
});


document.querySelector("#calcular");