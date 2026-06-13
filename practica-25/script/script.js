let responder = document.getElementById("responder");
let recomendacion = document.querySelector("#recomendacion");


responder.addEventListener("click", function() {

    let genero = document.getElementById("genero").value
    let nombre = document.getElementById("nombre").value
    let edad = document.getElementById("edad").value

    let serie;

    if (genero === "comedia") {

        if (edad < 18) {

        serie = " Mickey"
        

        } else {

        serie = " The Office"

        }

        recomendacion.textContent = "Hola " + nombre + ", si te gusta la comedia te recomendamos " + serie
    }

    else if (genero === "accion") {


        if (edad < 18) {

        serie = " Los increibles"
        

        } else {

        serie = " La caida del halcon negro"

        }

       recomendacion.textContent = "Hola " + nombre + ", si te gusta la accion te recomendamos" + serie
}

    else if (genero === "romantica") {

          if (edad < 18) {

        serie = " La bella y la bestia"
        

        } else {

        serie = " Titanic"

        }

        recomendacion.textContent = "Hola " + nombre + ", si te gusta el genero romantico te recomendamos" + serie
}

    else if (genero === "suspenso") {

        
          if (edad < 18) {

        serie = " Detective conan"
        

        } else {

        serie = " Zodiaco"

        }


        recomendacion.textContent = "Hola " + nombre + ", si te gusta el suspenso te recomendamos" + serie
}


});
