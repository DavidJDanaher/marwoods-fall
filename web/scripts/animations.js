var logo = document.getElementsByClassName('logo-img');
var bandName = document.getElementsByClassName('band-name');
var back = document.getElementsByClassName('container-fluid');
var album = document.getElementsByClassName('album');
var judge = document.getElementsByClassName('word-1');
var is = document.getElementsByClassName('word-2');
var coming = document.getElementsByClassName('word-3');

var intro = new TimelineMax();

init();
// fadeIn(logo, 6);
// fadeIn(bandName, 7);
// fadeIn(album, 9);
// reSizeLogo(logo, 4);
// reSizeName(bandName, 5);
// text(album, 6);

intro.add(TweenMax.to(logo, 8, {opacity: 1}),
TweenMax.to(bandName, 8, {opacity:1, delay: 2}),
TweenMax.to(judge, 3, {opacity: 1, delay: 5}),
TweenMax.to(is, 3, {opacity: 1, delay: 7}),
TweenMax.to(coming, 3, {opacity: 1, delay: 9}));
// TweenMax.to(album, 3, {opacity: 1,text:{value:'Judgement is coming', delimiter:' '}, delay: 3, ease:Linear.easeNone}));


function init() {
    TweenMax.set(logo, {opacity: 0});
    TweenMax.set(bandName, {opacity: 0});
    // TweenMax.set(album, {text: '', opacity: 0.4});
    TweenMax.set(judge, {opacity:0});
    TweenMax.set(is, {opacity:0});
    TweenMax.set(coming, {opacity:0});
    playMusic();
}

function fadeIn(tag, time, delay) {
    TweenMax.to(tag, time, {opacity: 1, delay: delay, ease:Power1.easeOut});
}


function reSizeLogo(time) {
  TweenMax.from(logo, time, {width: '1200px', height: '1100px', ease:Power1.easeOut});
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
