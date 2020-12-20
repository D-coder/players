music_name = "files/adeeth24.mp3" //That's my Original Song, Make sure you check out my music on Spotify
//under artist name - Adeeth :) https://spoti.fi/3iVB7TW
let play_btn = document.querySelector("#play");
let prev_btn = document.querySelector("#pre");
let next_btn = document.querySelector("#next");
let range = document.querySelector("#range");
let play_img = document.querySelector("#play_img")
let total_time = 0;
let currentTime = 0;
let isPlaying = false;
let song = new Audio();

function playSong(){
    song.src = music_name;
    console.log(song)
    play_btn.addEventListener('click',function(){
        if(!isPlaying){
            song.play();
            isPlaying = true;
            total_time = song.duration;
            range.max = total_time;
            play_img.src = "img/pause.png";
        }else{
            song.pause();
            isPlaying = false;
            play_img.src = "img/play.png";
        }
       song.addEventListener('ended',function(){
            song.currentTime = 0
            song.pause();
            isPlaying = false;
            range.value = 0;
            play_img.src = "img/play.png";
        })
        song.addEventListener('timeupdate',function(){
            range.value = song.currentTime;
        })
        range.addEventListener('change',function(){
            song.currentTime = range.value;
        })
       
    })
}
window.onload = playSong;
