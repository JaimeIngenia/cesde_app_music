const audioPlayer = document.getElementById("audioPlayer");
const audioSource = document.getElementById("audioSource");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const songNameElement = document.getElementById("songName");
const artistNameElement = document.getElementById("artistName");
const songImgElement = document.getElementById("songImg")

let currentSongIndex = 0;
let songs;

async function loadSongs() {
    const response = await fetch("songs.json");
    songs = await response.json();
}

function displaySongInfo(index) {
    songNameElement.textContent = songs[index].name;
    artistNameElement.textContent = songs[index].artist;
    songImgElement.src = songs[index].image
}

async function loadSong(index) {
    if (index >= 0 && index < songs.length) {
        audioSource.src = songs[index].url;
        audioPlayer.load();
        audioPlayer.play();
        currentSongIndex = index;
        displaySongInfo(index);
    }
}

prevButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
});

nextButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
});

(async () => {
    await loadSongs();
    loadSong(currentSongIndex);
})();





