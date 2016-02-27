var logo = document.getElementsByClassName('logo');
var bandName = document.getElementsByClassName('banner');

fadeIn(logo, 6);
fadeIn(bandName, 3);
reSize(logo, 5);

function fadeIn(tag, time) {
    TweenMax.to(tag, time, {opacity: 1, ease:Power1.easeIn});
}

function reSize(tag, time) {
  TweenMax.to(tag, time, {width: '400px', height: '350px', margin: '200px auto'});
}

function moveHeader() {
  TweenMax.to(bandName, 3, {height: '100px'});
}



//http://stackoverflow.com/questions/9419263/playing-audio-with-javascript
var audio = new Audio('../resources/sounds/intro3.mp3');
audio.play();
