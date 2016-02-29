var logo = document.getElementsByClassName('logo');
var bandName = document.getElementsByClassName('banner');
var back = document.getElementsByClassName('container-fluid');

fadeIn(logo, 6);
fadeIn(bandName, 7);
reSize(logo, 5);
moveHeader();
fade(back);

function fadeIn(tag, time) {
    TweenMax.to(tag, time, {opacity: 1, ease:Power1.easeIn});
}

function reSize(tag, time) {
  TweenMax.to(tag, time, {width: '400px', height: '350px', margin: '200px auto'});
}

function moveHeader() {
  TweenMax.to(bandName, 7, {height: '50px'});
}

function fade(tag) {
  TweenMax.to(tag, 4, {color: rgba(0, 0, 0, 0.75), ease:Power2.easeIn});
}



//http://stackoverflow.com/questions/9419263/playing-audio-with-javascript
var audio = new Audio('../resources/sounds/intro3.mp3');
// audio.play();
