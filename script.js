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

    var semFotos;
    var pasta = imagens;
    console.log(pasta.length)
    var nImagens = [] 
    for(let i = 0; i < pasta.length;i++){
        nImagens[i] = pasta[i].replace(`fotos/`, ``)
    }
    


    
var img = document.getElementById("randomImg");
img.src = "fotos/4lan.jpg";
semFotos = "4lan.jpg"

var jaFoi = [];

var intervalId = setInterval(trocarImagem, 200000);

var indice;

function trocarImagem() {
  indice = Math.floor(Math.random() * imagens.length);
  img.src = imagens[indice];
  semFotos = nImagens[indice];

  if (jaFoi.includes(imagens[indice])) {
    trocarImagem();
  } else {
    jaFoi.push(imagens[indice]);
  }

  if(jaFoi.length == imagens.length){
    jaFoi = ["fotos/4lan.jpg"]
  }
}

function pararIntervalo() {
  clearInterval(intervalId);
}
var decremento = 5;
let blurAtual = 25;
let inputValue = document.getElementById("tentativa").value;
let count = 0;

function enviar(){
  count++
    let inputValue = document.getElementById("tentativa").value;
  
      if(!verificarString(inputValue, nImagens)){
  
          var novoBlur = blurAtual - decremento;
          blurAtual = novoBlur;
  
          if (novoBlur < 0) {
              blurAtual = 50;
          }
      img.style.filter = `blur(${novoBlur}px)`;
  }
  else{
    document.getElementById("enviar").style.display = "none";
    document.querySelector('.certo').style.display = "block";
    img.style.filter = `blur(0px)`;
  }

  
  if(count == 5){
    console.log("Entrou")
    document.getElementById("enviar").style.display = "none";
    document.querySelector('.errado').style.display = "block";
  }
  else{
    console.log("Passou")
  }
}

  function verificarString(inputValue, nImagens) {
    var count = 0;
    var imgSrc = semFotos;
    for (let i = 0; i < imgSrc.length; i++) {

      if (inputValue.includes(imgSrc[i])) {

        for (let j = 0; j < inputValue.length; j++) {

          if (inputValue[j] == imgSrc[i]) {
            count++;
          }
        }
      }
    }
    if (count >= 3) {
      return true;
    } else {
      return false;
    }
  }

  
  