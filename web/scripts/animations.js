var logo = document.getElementsByClassName('logo-img');
var bandName = document.getElementsByClassName('band-name');
var back = document.getElementsByClassName('container-fluid');
var album = document.getElementsByClassName('album');
var judge = document.getElementsByClassName('word-1');
var is = document.getElementsByClassName('word-2');
var coming = document.getElementsByClassName('word-3');
var releaseDate = 'May 14, 2016';

var intro = new TimelineMax();

init();

intro.add(
    TweenMax.to(logo, 6, {opacity: 1}),
    TweenMax.to(bandName, 6, {opacity:1, delay: 2}),
    TweenMax.to(judge, 3, {opacity: 1, delay: 4}),
    TweenMax.to(is, 3, {opacity: 1, delay: 6}),
    TweenMax.to(coming, 3, {opacity: 1, delay: 8}),
    TweenMax.to(album, 2, {opacity:0, delay: 10}),
    TweenMax.set(album, {text: releaseDate, delay: 12}),
    TweenMax.to(album, 2, {opacity:1, delay:12})
);

function init() {
    TweenMax.set(logo, {opacity: 0});
    TweenMax.set(bandName, {opacity: 0});
    TweenMax.set(judge, {opacity:0});
    TweenMax.set(is, {opacity:0});
    TweenMax.set(coming, {opacity:0});
    // playMusic();
}

//http://stackoverflow.com/questions/9419263/playing-audio-with-javascript
function playMusic() {
var audio = new Audio('../resources/sounds/intro3.mp3');
audio.play();
}
