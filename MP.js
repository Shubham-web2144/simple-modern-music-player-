
//0song array for music app
let songs = [
    {
        songName: 'Abaad Barbaad',
        songArtist: 'Arijit Singh',
        songPath: '/musics/Mp2.mp3',
        songImg: '/Imges/Abaad.jpg'
    },
    {
        songName: 'Tula Bagun Bagun',
        songArtist: 'Aanand Shinde',
        songPath: '/musics/Mp1.mp3',
        songImg : '/Imges/Bagun.jpg'
    },
    {
        songName: 'Tose Naina',
        songArtist: 'Arijit Singh', 
        songPath: '/musics/Mp5.mp3',
        songImg: '/Imges/Naina.jpeg'
    },
    {
        songName: 'No 1 yaari',
        songArtist: 'Mohit Chauvan',
        songPath: '/musics/Mp4.mp3',
        songImg: '/Imges/No1.jpg'
    },
    {
        songName: 'Mujhe Ab koi gum',
        songArtist: 'Jubin Nautiyal',
        songPath: '/musics/Mp6.mp3',
        songImg: '/Imges/bhuladu.jpeg'
    }
    ];
const musicSong = document.querySelector('.musicName');
let audio = document.querySelector('.audio');
const prev = document.querySelector('.prev');
const playPause = document.querySelector('.playPause');
const next = document.querySelector('.next');
let songArtist = document.getElementById('artist');
let songImg = document.querySelector('.img');
let songTitle = document.getElementById('songTitle');

let songPlaying = false;

//0play pause function 
playPause.addEventListener("click",()=>(songPlaying ? pauseSong() : playSong()));

//pause song when clicked 
function pauseSong(){
    songPlaying = false;
    audio.pause();
    playPause.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
}

//play song when clicked 
function playSong() {
    songPlaying = true;
    audio.play();
    playPause.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
    
}

//load song 
function loadSong(songs){
    audio.src = songs.songPath;
    songImg.src = songs.songImg;
    songTitle.textContent = songs.songName;
    songArtist.textContent = songs.songArtist;
}

let i = 0;

//previous song when clicked 
function prevSong(){
    i--;
    if(i < 0){
        i = songs.length - 1;
    }
    loadSong(songs[i]);
    playSong();
}
prev.addEventListener("click",prevSong);

//next song when clicked 
function nextSong() {
    i++;
    if (i > songs.length - 1) {
        i = 0;
    }
    loadSong(songs[i]);
    playSong();
}
next.addEventListener("click",nextSong);

//auto play song when previous song finished 
audio.addEventListener("ended",()=>{
    nextSong();
})