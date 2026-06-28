let preguntas = ["Como se llama el cantante de Bring me the Horizon?",
                 "Como se llama el cantante de Bad Omens?",
                 "Quien canta la cancion 'The Cure'?",
                 "Como se llama la nueva cantante de Linkin Park?",
                 "Como se llama el cantante de 'The Plot in You'?",
                 "A que banda pertence la cantante Elena Tonra?",
                 "Como se llama el album que saco BMTH en 2013?",
                 "Que cantante colaboro en V.A.N junto a Bad Omens",
                 "Que banda compuso 'Wonderwall'?",
                 "Como se llamaba la banda a la cual pertenecia Kurt Cobain?",
                ]

let respuestas = ["Oliver Sykes",
                  "Noah Sebastian",
                  "Olivia Rodrigo",
                  "Emily Armstrong",
                  "Landon Tewers",
                  "Daughter",
                  "Sempiternal",
                  "Poppy",
                  "Oasis",
                  "Nirvana",]


let aciertos = 0;
let respuestaUsuario;
let resultado = document.getElementById("resultado")


for (let i = 0; i < preguntas.length; i++) {

   respuestaUsuario = prompt(preguntas[i])

   if (respuestaUsuario === respuestas[i]) {
      aciertos++
      alert("Correcto")
   } else {
      alert("Incorrecto")
   }
   
}

resultado.textContent = "Acertaste un total de " + aciertos + " preguntas";

