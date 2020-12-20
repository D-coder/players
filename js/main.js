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