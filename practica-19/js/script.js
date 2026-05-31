let titulo = document.querySelector("h1");
titulo.addEventListener("click", function() {
    titulo.style.color = "red";
});

let subtitulo = document.querySelector("h2");
subtitulo.addEventListener("click", function() {
    subtitulo.style.fontSize = "30px";
    subtitulo.style.fontWeight = "bold";   
    subtitulo.style.color = "red";
    subtitulo.innerHTML = "cREES QUE EL AMOR ES LA SOLUCION";
});


let parrafos = document.querySelectorAll("p");
parrafos.forEach(function(parrafo) {
    parrafo.addEventListener("click", function() {
        parrafo.style.fontSize = "20px";
        parrafo.style.fontWeight = "bold";
        parrafo.style.color = "red";
    });
});

let imagen = document.querySelector("img");
imagen.addEventListener("click", function() {
    imagen.style.display = "none";
});


console.log("moriresvivirmorirvivirmorirvivirmoriresvivirmorirvivirmorirvivirmoriresvivirmorirvivirmorirvivirmoriresvivirmorirvivirmorirvivirmoriresvivirmorirvivirmorirvivirmoriresvivirmorirvivirmorirvivirmoriresvivirmorirvivirmorirvivirmoriresvivirmorirvivirmorirvivirmoriresvivirmorirvivirmorirvivirmoriresvivirmorirvivirmorirvivirmoriresvivirmorirvivirmorirvivirmoriresvivirmorirvivirmorirvivirmoriresvivirmorirvivirmorirvivirmoriresvivirmorirvivirmorirvivirmoriresvivirmorirvivirmorirvivirmoriresvivirmorirvivirmorirvivir");
