const energiaTexto = document.querySelector("#energia");
const rondasTexto = document.querySelector("#rondas");
const resultadoTexto = document.querySelector("#resultado");
const explorarBtn = document.querySelector("#explorar");
const descansarBtn = document.querySelector("#descansar");
const arriesgarBtn = document.querySelector("#arriesgar");
const reiniciarBtn = document.querySelector("#reiniciar");

let energia = 10;
let rondas = 0;


function tirarDado(){
    return Math.floor(Math.random() * 6) + 1;
}


// let dado = tirarDado();

function finalizarJuego() {

    if (energia <= 0) {

        resultadoTexto.textContent =
            "¡Te quedaste sin energía! Energía final: " + energia + ". Rondas jugadas: " + rondas;

        explorarBtn.disabled = true;
        descansarBtn.disabled = true;
        arriesgarBtn.disabled = true;

        reiniciarBtn.style.display = "block";

    } else if (energia >= 15) {

        resultadoTexto.textContent =
            "¡Ganaste! Energía final: " + energia + ". Rondas jugadas: " + rondas;

        explorarBtn.disabled = true;
        descansarBtn.disabled = true;
        arriesgarBtn.disabled = true;

        reiniciarBtn.style.display = "block";
    }
}

explorarBtn.addEventListener("click", () => {

    rondas += 1;

    const dado = tirarDado();

    if (dado % 2 === 0) {

        energia += 1;

        resultadoTexto.textContent = "Sacaste un " + dado + ". ganaste energia.";

    } else {

        energia -= 1;

        resultadoTexto.textContent = "Sacaste un " + dado + ". perdiste energia.";

    }

    energiaTexto.textContent = energia;
    rondasTexto.textContent = rondas;
    finalizarJuego();

});


descansarBtn.addEventListener("click", () => {

    rondas += 1;
    energia += 2;
    if (energia > 10) {
        energia = 10;
    }
    resultadoTexto.textContent = "Descansaste. ganaste 2 de energia.";
    energiaTexto.textContent = energia;
    rondasTexto.textContent = rondas;
    finalizarJuego();

});

arriesgarBtn.addEventListener("click", () => {
    rondas += 1
    const dado = tirarDado();
    
    if (dado >= 4) {
        energia += 3;
        resultadoTexto.textContent = "Sacaste un " + dado + ". ganaste 3 de energia.";
    } else {
        energia -= 3;
        resultadoTexto.textContent = "Sacaste un " + dado + ". perdiste 3 de energia.";
    }
    energiaTexto.textContent = energia;
    rondasTexto.textContent = rondas;
    finalizarJuego();
})

reiniciarBtn.addEventListener("click", () => {
    location.reload();
})