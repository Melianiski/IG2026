let bienvenida = confirm("¿Deseas continuar?");

function saludar(nombre) {
  let mensaje = "¡Hola, " + nombre + "! Bienvenido/a";
  alert(mensaje);
  let user = document.getElementById("usuario");
  user.textContent = mensaje;
}

if (bienvenida) {

  let nombre = prompt("¿Cuál es tu nombre?");

  saludar(nombre);

  let estilos = confirm("¿Deseas cambiar el estilo de la página?");

  if (estilos) {

    document.body.style.backgroundColor = "#e0f7fa";
    document.body.style.color = "#006064";
    document.body.style.fontFamily = "Verdana, sans-serif";

  } else {

    alert("Ok");

  }

} else {

  alert("Hasta luego y no vuelvas!");

  let instrucciones = document.getElementById("instrucciones");
  instrucciones.style.display = "none";

  let pasos = document.getElementById("pasos");
  pasos.innerHTML = "No puedes ver las instrucciones si no deseas continuar :)";

}


let hora = prompt("Que hora es? (formato 24 horas)");
if (hora >= 0 && hora < 7) {
  alert("¡Buenas noches!");
} else if (hora >= 7 && hora < 16) {
  alert("¡Buenas días!");
}   else if (hora >= 16 && hora < 20) {
  alert("¡Buenas tardes!");
}
    else if (hora >= 20 && hora <= 23) {
  alert("¡Buenas noches!");
} 
else {
  alert("Hora no valida, donde vivis, en marte?");
}




