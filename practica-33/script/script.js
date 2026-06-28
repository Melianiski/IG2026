let corredores = [];
let ganador = {}


let formIngresoDatos = document.querySelector("#ingresoDatos");
let btnIngresar = document.querySelector("#ingresar");
let lista = document.querySelector(".listado");


btnIngresar.addEventListener('click', function(e) {
    // Uso preventDefault para que no se recargue la página
    e.preventDefault();
    ingresarDatos();
});


function ingresarDatos() {

let nombreCorredor = document.querySelector("#nombre").value;

if (nombreCorredor === "") {
    alert("El nombre no puede estar vacio");
    return false;
}

let apellidoCorredor = document.querySelector("#apellido").value;

if (apellidoCorredor === "") {
    alert("El apellido no puede estar vacio")
    return false;
}



let numeroParticipante = Number(document.querySelector("#participante").value);

if (isNaN(numeroParticipante)) {
    alert("Ingrese numero de participante valido");
    return false;
}


let numeroTiempo = Number(document.querySelector("#tiempo").value);

if (isNaN(numeroTiempo)) {
    alert("Ingrese numero de tiempo valido");
    return false;
}



let nuevoCorredor = {
    nombre: nombreCorredor,
    apellido: apellidoCorredor,
    participante: numeroParticipante,
    tiempo: numeroTiempo,
}


corredores.push(nuevoCorredor);

    let promedioTiempo = calcularPromedioTiempo();

    let promedio = document.querySelector("#promedio");

    promedio.textContent = "El promedio de tiempo fue de: " + promedioTiempo;


// Buscar ganador
ganador = buscarGanador();

// Mostrar ganador
let ganadorPrimero = document.querySelector("#ganadorPrimero");
ganadorPrimero.textContent = "Ganador : " + ganador.nombre + " " + ganador.apellido + " con un tiempo de " + ganador.tiempo; + " minutos"

alert("Datos ingresados correctamente");

vaciarDatosFormulario();




}


function vaciarDatosFormulario() {
    document.querySelector("#nombre").value = "";
    document.querySelector("#apellido").value = "";
    document.querySelector("#participante").value = "";
    document.querySelector("#tiempo").value = "";
}



function buscarGanador (){

    let ganador1 = corredores[0];

        for (let i = 0; i < corredores.length; i++){
            
            if (corredores[i].tiempo < ganador1.tiempo){
            ganador1 = corredores[i];
            }

        }

        return ganador1;

    }


    function calcularPromedioTiempo() {
        let sumaTiempo = 0;
        for (let i = 0; i < corredores.length; i++) {
            sumaTiempo += corredores[i].tiempo
        }

        let promedioTotal = sumaTiempo / corredores.length;
        return promedioTotal;
    }

