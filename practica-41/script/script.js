const botonRojo = document.getElementById("rojo");
const botonAzul = document.getElementById("azul");
const botonVerde = document.getElementById("verde");
const botonNegro = document.getElementById("negro");
const botonBorrar = document.getElementById("borrar");
const cuadro = document.getElementById("cuadro");


botonRojo.addEventListener("click",() => {
    const nuevoCuadrado = document.createElement("div")
    nuevoCuadrado.className = "cuadrado"
    nuevoCuadrado.style.backgroundColor = "red"
    cuadro.append(nuevoCuadrado);
});

botonAzul.addEventListener("click",() => {
    const nuevoCuadrado = document.createElement("div")
    nuevoCuadrado.className = "cuadrado"
    nuevoCuadrado.style.backgroundColor = "blue"
    cuadro.append(nuevoCuadrado)
})

botonVerde.addEventListener("click",()=>{
    const nuevoCuadrado = document.createElement("div")
    nuevoCuadrado.className = "cuadrado"
    nuevoCuadrado.style.backgroundColor = "green"
    cuadro.append(nuevoCuadrado)
})



botonNegro.addEventListener("click",() => {
    const todosLosCuadrados = document.querySelectorAll(".cuadrado") /////////// Puedo usar un forEach para esto.
    for (let i = 0; i < todosLosCuadrados.length ; i++){
        todosLosCuadrados[i].style.backgroundColor = "black"
    }
})


botonBorrar.addEventListener("click", () => {
    cuadro.replaceChildren()
})