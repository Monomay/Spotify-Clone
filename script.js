console.log("Welcome to spotify"); 

let audioElement = new Audio('Pal Do Pal.mp3');
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar= document.getElementById('masterPlay');
let gif= document.getElementById('gif');


let song = [
    {songName:"Pal pal", filepath: "song/Pal Do Pal.MP3", coverpath: "covers/1.jpg"},
    {songName:"Pal pal", filepath: "song/Pal Do Pal.MP3", coverpath: "covers/1.jpg"},
    {songName:"Pal pal", filepath: "song/Pal Do Pal.MP3", coverpath: "covers/1.jpg"},
    {songName:"Pal pal", filepath: "song/Pal Do Pal.MP3", coverpath: "covers/1.jpg"},
    {songName:"Pal pal", filepath: "song/Pal Do Pal.MP3", coverpath: "covers/1.jpg"},
    {songName:"Pal pal", filepath: "song/Pal Do Pal.MP3", coverpath: "covers/1.jpg"},
]

// */audioElements.play();/*

//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
     else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
// listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
    myProgressBar.value = progress;
})

// myProgress.addEventListener('change', ()=>{
//     audioElement.currentTime = myProgress.value * audioElement.duration/100;
// })
