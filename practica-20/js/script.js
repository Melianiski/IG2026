let contenedor = document.querySelector("#contenedor");

contenedor.addEventListener("click", function() {

    contenedor.style.backgroundColor = "#2c1a4d";
    contenedor.style.boxShadow = "0 0 40px purple";

});

let titulo = document.querySelector("h2");

titulo.addEventListener("click", function() {

    titulo.style.color = "#ff66ff";
    titulo.style.letterSpacing = "5px";
    titulo.style.textTransform = "uppercase";

});

let historia = document.querySelector("p");

historia.addEventListener("click", function() {

    historia.style.color = "#ffffff";
    historia.style.fontSize = "22px";
    historia.style.backgroundColor = "#111";
    historia.style.padding = "20px";
    historia.style.borderRadius = "10px";

});