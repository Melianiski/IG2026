const numero = document.querySelector("#numero")
const botonMayor = document.querySelector("#mayor")
const botonMenor = document.querySelector("#menor")
const puntaje = document.querySelector("#puntaje")
const reiniciar = document.querySelector("#reiniciar")


let numeroActual = Math.floor(Math.random() * 10) + 1;
numero.textContent = numeroActual;

function nuevoNumero() {
   
    let numeroNuevo = Math.floor(Math.random() * 10) + 1;

    return numeroNuevo;
    
}


botonMayor.addEventListener("click", () => {

    const numeroSiguiente = nuevoNumero();

    if (numeroSiguiente > numeroActual) {
        puntaje.textContent = parseInt(puntaje.textContent) + 1;
    } else {
        alert("Perdiste");
        puntaje.textContent = 0;
    }

    numeroActual = numeroSiguiente;
    numero.textContent = numeroActual;
})


botonMenor.addEventListener("click", () => {

    const numeroSiguiente = nuevoNumero();

    if (numeroSiguiente < numeroActual) {
        puntaje.textContent = parseInt(puntaje.textContent) + 1;
    } else {
        alert("Perdiste");
        puntaje.textContent = 0;
    }

    numeroActual = numeroSiguiente;
    numero.textContent = numeroActual;
})


reiniciar.addEventListener("click", () => {
    location.reload();
})
