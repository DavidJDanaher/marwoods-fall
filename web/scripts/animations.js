var logo = document.getElementsByClassName('logo-img');
var bandName = document.getElementsByClassName('band-name');
var back = document.getElementsByClassName('container-fluid');
var album = document.getElementsByClassName('album');

init();
fadeIn(logo, 6);
fadeIn(bandName, 7);
fadeIn(album, 9);
reSizeLogo(logo, 4);
reSizeName(bandName, 5);
text(album, 6);


function init() {
    TweenMax.set(logo, {opacity: 0});
    TweenMax.set(bandName, {opacity: 0});
    TweenMax.set(album, {text: '', opacity: 0.4});
    playMusic();
}

function fadeIn(tag, time) {
    TweenMax.to(tag, time, {opacity: 1, ease:Power1.easeOut});
}

function reSizeLogo(tag, time) {
  TweenMax.from(tag, time, {width: '1200px', height: '1100px', ease:Power1.easeOut});
}

function reSizeName(tag, time) {
    TweenMax.from(tag, time, {width: '1200px', height: '120px', ease:Power1.easeOut});
}

function text(tag, time) {
    TweenMax.to(tag, time, {text:'Judgement is coming', ease:Linear.easeNone});
}

//http://stackoverflow.com/questions/9419263/playing-audio-with-javascript
function playMusic() {
var audio = new Audio('../resources/sounds/intro3.mp3');
audio.play();
}
