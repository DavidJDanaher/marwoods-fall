var logo = document.getElementsByClassName('logo');
var bandName = document.getElementsByClassName('banner');
var back = document.getElementsByClassName('container-fluid');

init(logo);
init(bandName);
fadeIn(logo, 6);
fadeIn(bandName, 7);
reSizeLogo(logo, 5);
reSizeName(bandName, 6);
// moveHeader();
// fade(back);

function init(tag) {
    TweenMax.set(tag, {opacity: 0});
    playMusic();
}

function fadeIn(tag, time) {
    TweenMax.to(tag, time, {opacity: 1, ease:Power1.easeIn});
}

function reSizeLogo(tag, time) {
  TweenMax.from(tag, time, {width: '1200px', height: '1100px'});
}

function reSizeName(tag, time) {
    TweenMax.from(tag, time, {width: '1200px', height: '120px'})
}

function moveHeader() {
  TweenMax.to(bandName, 7, {height: '50px'});
}

// function fade(tag) {
//   TweenMax.to(tag, 4, {color: rgba(0, 0, 0, 0.75), ease:Power2.easeIn});
// }


//http://stackoverflow.com/questions/9419263/playing-audio-with-javascript

function playMusic() {
var audio = new Audio('../resources/sounds/intro3.mp3');
audio.play();
}
