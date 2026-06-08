
/// Con esto tengo que actualizar la pagina para volver a usar el dado.

//const dado = Math.floor(Math.random() * 6) + 1;
//let rollButton = document.getElementById('rollButton');
//let resultado = document.getElementById('resultado');
//rollButton.addEventListener('click', function() {
    //resultado.textContent = 'El resultado del dado es: ' + dado;
//});




let rollButton = document.getElementById('rollButton');
let resultado = document.getElementById('resultado');

rollButton.addEventListener('click', function() {

    let dado = Math.floor(Math.random() * 6) + 1;
    resultado.textContent = 'El resultado del dado es: ' + dado;

    let imagen = document.getElementById('glitch');
    imagen.src = 'img/gif' + dado + '.gif';
});


