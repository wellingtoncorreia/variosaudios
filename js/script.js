const playlist = [
    {
        title: "Vícios e Virtudes (Ao Vivo)",
        artist: "Charlie Brown Jr.",
        src: "./img/Charlie Brown Jr - Vícios E Virtudes.mp3",
        cover: "img/vv.png"
    },
    {
        title: "Céu Azul",
        artist: "Charlie Brown Jr.",
        src: "./img/Charlie Brown Jr - Céu Azul.mp3",
        cover: "img/ceu.png"
    },
    {
        title: "Só Os Loucos Sabem",
        artist: "Charlie Brown Jr.",
        src: "./img/Charlie Brown Jr - Só Os Loucos Sabem.mp3",
        cover: "img/louco.png"
    }
    {
        title: "dias de luta",
        artist: "Charlie Brown Jr.",
        src: "./img/Charlie Brown Jr - Dias de luta dias de glória.mp3",
        cover: "img/image.png"
    }
];
// Elementos do player
const audio = document.getElementById("audio");
const audioSource = document.getElementById("audio-source");
const albumCover = document.getElementById("album-cover");
const audioTitle = document.getElementById("audio-title");
const audioArtist = document.getElementById("audio-artist");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

let currentTrack = 0;

// Função para carregar música
function loadTrack(index) {
    const track = playlist[index];
    audioSource.src = track.src;
    albumCover.src = track.cover;
    audioTitle.textContent = track.title;
    audioArtist.textContent = track.artist;
    audio.load(); // Recarrega o elemento de áudio
}

// Próxima música
nextBtn.addEventListener("click", () => {
    currentTrack = (currentTrack + 1) % playlist.length; // Loop na playlist
    loadTrack(currentTrack);
    audio.play();
});

// Música anterior
prevBtn.addEventListener("click", () => {
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length; // Loop reverso na playlist
    loadTrack(currentTrack);
    audio.play();
});

// Carregar a primeira música
loadTrack(currentTrack);