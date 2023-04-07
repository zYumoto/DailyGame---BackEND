 // Lista de URLs das imagens
 var imagens = [
    "fotos/4lan.jpg",
    "fotos/Adolfz.jpg",
    "fotos/Axtlol.jpg",
    "fotos/Ayel.jpg",
    "fotos/Bianquinha.jpg",
    "fotos/BlackOutz.jpg",
    "fotos/Boo.jpg",
    "fotos/BRTT.jpg",
    "fotos/Bueirinho.jpg",
    "fotos/Cellbit.jpg",
    "fotos/Cerol.jpg",
    "fotos/Chris Paiva.jpg",
    "fotos/CSR.jpg",
    "fotos/Daniels.jpg",
    "fotos/Defante.jpg",
    "fotos/DMenor11.jpg",
    "fotos/Fir3zera.jpg",
    "fotos/Fnx.jpg",
    "fotos/gragolandia2.jpg",
    "fotos/Gratis150ml.jpg",
    "fotos/Hastaad.jpg",
    "fotos/Hayshii.jpg",
    "fotos/hudisonamorim.jpg",
    "fotos/IShowSpeed.jpg",
    "fotos/JeanMago.jpg",
    "fotos/jovirone.jpg",
    "fotos/kami.jpg",
    "fotos/Kant.jpg",
    "fotos/Kenzy.jpg",
    "fotos/Kinechan.jpg",
    "fotos/Krikor.jpg",
    "fotos/Lffreitas.jpg",
    "fotos/Liminha.jpg",
    "fotos/Loud Mi.jpg",
    "fotos/Loud Voltan.jpg",
    "fotos/Luba.jpg",
    "fotos/Maitê.jpg",
    "fotos/Mch.jpg",
    "fotos/mucalol.jpg",
    "fotos/nicklink.jpg",
    "fotos/Nicole diretora.jpg",
    "fotos/NineXT.jpg",
    "fotos/Ninja Poderosos.jpg",
    "fotos/Ninja.jpg",
    "fotos/Okina.jpg",
    "fotos/Paivinha.jpg",
    "fotos/Patife.jpg",
    "fotos/PATO PAPAO.jpg",
    "fotos/Patriota.jpg",
    "fotos/pijack.jpg",
    "fotos/Pulga.jpg",
    "fotos/Rakin.jpg",
    "fotos/Rbiana.jpg",
    "fotos/Seven.jpg",
    "fotos/Skipinho.jpg",
    "fotos/Snopey.jpg",
    "fotos/Souzasoul.jpg",
    "fotos/Tecnosh.jpg",
    "fotos/Thurzin.jpg",
    "fotos/TonyBOY.jpg",
    "fotos/VelhoVamp.jpg",
    "fotos/VikingofSouth.jpg",
    "fotos/WendelLira.jpg",
    "fotos/XandãoOGOD.jpg",
    "fotos/YasmimYassini.jpg",
    "fotos/yayahuz.jpg",
    "fotos/Yetz.jpg",
    "fotos/yulla.jpg",
    ];

    
var img = document.getElementById("random-img");
img.src = "fotos/4lan.jpg";

var jaFoi = [];

var intervalId = setInterval(trocarImagem, 2000);

function trocarImagem() {
  var indice = Math.floor(Math.random() * imagens.length);
  img.src = imagens[indice];

  if (jaFoi.includes(imagens[indice])) {
    trocarImagem();
  } else {
    jaFoi.push(imagens[indice]);
  }

  console.log(jaFoi);

  if(jaFoi.length == imagens.length){
    jaFoi = ["fotos/4lan.jpg"]
  }
}

function pararIntervalo() {
  clearInterval(intervalId);
}
  
  
  