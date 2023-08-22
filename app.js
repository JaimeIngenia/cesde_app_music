let array_sandra=[
    {
        "name": "Song 1",
        "url": "./audios/song1.mp3",
        "artist": "Artist 1",
        "image": "./images/caratula1.svg"
    },
    {
        "name": "Song 2",
        "url": "./audios/song2.mp3",
        "artist": "Artist 2",
        "image": "./images/caratula2.svg"
    },
    {
        "name": "Song 3",
        "url": "./audios/song3.mp3",
        "artist": "Artist 3",
        "image": "./images/caratula3.svg"
    },
    {
        "name": "Song 4",
        "url": "./audios/song4.mp3",
        "artist": "Artist 4",
        "image": "./images/caratula4.svg"
    }
]

const audioPlayer = document.getElementById("audioPlayer");
const audioSource = document.getElementById("audioSource");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const songNameElement = document.getElementById("songName");
const artistNameElement = document.getElementById("artistName");
const songImgElement = document.getElementById("songImg")

document.getElementById('menu_padre').style.display='none'

function menu(){
    alert('menu presionado')
    document.getElementById('menu_padre').style.display='flex'

}

function span_reproducir(){
  alert('span presionado')
}
