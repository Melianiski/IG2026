let aula001 = document.getElementById('aula001');
let aula101 = document.getElementById('aula101');
let aula201 = document.getElementById('aula201');
let aula301 = document.getElementById('aula301');
let aula501 = document.getElementById('aula501');

let resultado = document.getElementById('resultado');
let calcular = document.getElementById('calcular');

calcular.addEventListener('click', function() {

    let cantidadAula001 = Number(aula001.value);
    let cantidadAula101 = Number(aula101.value);
    let cantidadAula201 = Number(aula201.value);
    let cantidadAula301 = Number(aula301.value);
    let cantidadAula501 = Number(aula501.value);

    let totalCantidad = cantidadAula001 + cantidadAula101 + cantidadAula201 + cantidadAula301 + cantidadAula501;

    resultado.value = totalCantidad;


    let mayor = cantidadAula001;
    let aulaMayor = 'aula001';

if (cantidadAula001 > mayor) {
    mayor = cantidadAula001;
    aulaMayor = 'aula001';
}
if (cantidadAula101 > mayor) {
    mayor = cantidadAula101;
    aulaMayor = 'aula101';
}
if (cantidadAula201 > mayor) {
    mayor = cantidadAula201;
    aulaMayor = 'aula201';
}
if (cantidadAula301 > mayor) {  
    mayor = cantidadAula301;
    aulaMayor = 'aula301';
}   
if (cantidadAula501 > mayor) {
    mayor = cantidadAula501;
    aulaMayor = 'aula501';
}       

document.getElementById('mayor').textContent = 'Hay mas pupitres en el aula: ' + aulaMayor;


let menor = cantidadAula001;
    let aulaMenor = 'aula001';

if (cantidadAula001 < menor) {
    menor = cantidadAula001;
    aulaMenor = 'aula001';
}
if (cantidadAula101 < menor) {
    menor = cantidadAula101;
    aulaMenor = 'aula101';
}
if (cantidadAula201 < menor) {
    menor = cantidadAula201;
    aulaMenor = 'aula201';
}
if (cantidadAula301 < menor) {  
    menor = cantidadAula301;
    aulaMenor = 'aula301';
}   
if (cantidadAula501 < menor) {
    menor = cantidadAula501;
    aulaMenor = 'aula501';
}       

document.getElementById('menor').textContent = 'Hay menos pupitres en el aula: ' + aulaMenor;

}); 


    