

const botonAnterior = document.getElementById("prevButton");
const botonSiguiente = document.getElementById("nextButton");

const botonReproducirPausa = document.getElementById("btn-reproducir-pausa");
const imagenReproducirYPausa = document.getElementById("reproducir-pausa");//Preguntasandra


const imagenCancion = document.getElementById("imagenCancion");
const tituloCancion = document.getElementById("tituloCancion");
const nombreArtista = document.getElementById("nombreArtista");
const imagenFondo = document.getElementById("imagenFondo");



const reproductor = document.getElementById("reproductor");

const canciones = [
  {
    name: "Normal",
    url: "./audios/Feid - Normal (Official Video).mp3",
    artist: "Feid",
    image: "./gift/feid.gif",
    imagenFondo: "./images/caratula1.svg"

  },
  {
    name: "Negro",
    url: "./audios/J. Balvin - Negro (Animated Video).mp3",
    artist: "Balvin",
    image: "./gift/jBalvin.gif",
    imagenFondo:"./images/caratula2.svg"
  },
  {
    name: "MIENTRAS ME CURO DEL CORA",
    url: "./audios/KAROL G - MIENTRAS ME CURO DEL CORA.mp3",
    artist: "KAROL G",
    image: "./gift/karolG.webp",
    imagenFondo:"./images/caratula3.svg"
  },
  {
    name: "Instagram",
    url: "./audios/bless.mp3",
    artist: "bless",
    image:  "./gift/bless.gif",
    imagenFondo:"./images/caratula4.svg"
  },
];


// ***********************



const setCancion = () => {
  imagenCancion.src = canciones[cancionSeleccionada].image;
  // imagenFondo.src = canciones[cancionSeleccionada].imagenFondo;
  reproductor.src = canciones[cancionSeleccionada].url;
  nombreArtista.innerHTML = nombreArtista.src =
  canciones[cancionSeleccionada].artist;
  tituloCancion.innerHTML = nombreArtista.src =
  canciones[cancionSeleccionada].name;


};

let cancionSeleccionada = 0;
setCancion();


botonSiguiente.addEventListener("click", () => {
  if(cancionSeleccionada>= canciones.length-1){
      cancionSeleccionada = 0;
  } else{

      cancionSeleccionada++;
  }
setCancion();
});

botonAnterior.addEventListener("click", () => {
if (cancionSeleccionada <= 0) {
  cancionSeleccionada = canciones.length - 1;
} else {
  cancionSeleccionada--;
}
setCancion();
});

botonReproducirPausa.addEventListener("click", ()=> {
  if(reproductor.paused){

      reproductor.play();
      imagenReproducirYPausa.src = "./images/btn-pausa.svg";    
  }else{
      reproductor.pause();
      imagenReproducirYPausa.src = "./images/btn-reproducir.svg";
  }
});


//************************* */





document.getElementById('menu_padre').style.display='none'

function menu(){
    // alert('menu presionado')
    document.getElementById('menu_padre').style.display='flex'

}

const span_reproducir = (idx)  => {
  cancionSeleccionada = idx;
  setCancion();
  // alert('span presionado')
  // reproductor.src = canciones[valorSapn].url;
}

// const seleccionarCancion = (idx) => {
//   cancionSeleccionada = idx;
//   setCancion();
// }
