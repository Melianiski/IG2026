let apuesta = 0; 
let aciertos = 0;
let boton;
let dado;
let colores = ["rojo", "verde", "azul"]





colores.push("amarillo");
console.log(colores[4]);

function juego() {

    aciertos = 0;

    for (let i = 0; i < 5; i++) {

        dado = Math.floor(Math.random() * 6) + 1;

        if (dado === apuesta) {
            aciertos++;
        }
        //console.log("Dado:", dado);
    }
}


for (let i = 1; i <= 6; i++) {

    boton = document.querySelector("#btn" + i);

    boton.addEventListener("click", function() {

        apuesta = i

        juego();

        console.log("Apuesta:", apuesta);
        console.log("Aciertos:", aciertos);
    });

}



























/*let boton1 = document.querySelector("#btn1");
let boton2 = document.querySelector("#btn2");
let boton3 = document.querySelector("#btn3");
let boton4 = document.querySelector("#btn4");
let boton5 = document.querySelector("#btn5");
let boton6 = document.querySelector("#btn6");

let apuesta = 0;
let dado = 0;

boton1.addEventListener("click", function() {

    apuesta = 1;
    dado = Math.floor(Math.random() * 6) + 1;

    if (apuesta === dado){
        console.log("Ganaste");
    } else {
        console.log("Perdiste XD")
    }


});


boton2.addEventListener("click", function() {

    apuesta = 2;
    dado = Math.floor(Math.random() * 6) + 1;

    if (apuesta === dado) {
        console.log("Ganaste");
    } else {
        console.log("Perdiste")
    }



});


boton3.addEventListener("click", function() {

    apuesta = 3;
    dado = Math.floor(Math.random() * 6) + 1;

    if (apuesta === dado) {
        console.log("Ganaste");
    } else {
        console.log("Perdiste XD");
    }


});

boton4.addEventListener("click", function() {

    apuesta = 4;
    dado = Math.floor(Math.random() * 6) + 1;

    if (apuesta === dado) {
        console.log("Ganaste");
    } else {
        console.log("Perdiste XD");
    }


});

boton5.addEventListener("click", function() {

    apuesta = 5;
    dado = Math.floor(Math.random() * 6) + 1
    if (apuesta === dado) {
        console.log("Ganaste");
    } else {
        console.log("Perdiste XD");
    }
});

boton6.addEventListener("click", function() {

    apuesta = 6;
    dado = Math.floor(Math.random() * 6) + 1

    if (apuesta === dado) {
        console.log("Ganaste");
    } else {
        console.log("Perdiste XD")
    }
}); */