var row1 = document.getElementsByClassName('row-1');
var logo = document.getElementsByClassName('logo-img');
var bandName = document.getElementsByClassName('band-name');
var album = document.getElementsByClassName('album');
var judge = document.getElementsByClassName('word-1');
var is = document.getElementsByClassName('word-2');
var coming = document.getElementsByClassName('word-3');
var release = document.getElementsByClassName('release');
var row2 = document.getElementsByClassName('row-2');
var footer = document.getElementsByClassName('footer');

var tL = new TimelineMax();
var t = 0;

init();

tL.to(logo, 5, {opacity: 1, ease:Power1.easeIn}, t)
    .to(bandName, 4, {opacity:1, ease:Power1.easeIn}, t+=3)
    .to(judge, 2, {opacity: 1}, t+=4)
    .to(is, 2, {opacity: 1}, t+=1)
    .to(coming, 2, {opacity: 1}, t+=1)
    .to(album, 1, {opacity:0}, t+=1)
    .set(album, {height: 0}, t+=1)
    .set(release, {height: 'auto'}, t)
    .to(release, 2, {opacity:1}, t)
    .to(release, 1, {opacity:0}, t+=2)
    .set(row1, {height: '600px'}, t+=1)
    .set(row2, {visibility: 'visible'}, t);




function init() {
    TweenMax.set(logo, {opacity: 0});
    TweenMax.set(bandName, {opacity: 0});
    TweenMax.set(judge, {opacity:0});
    TweenMax.set(is, {opacity:0});
    TweenMax.set(coming, {opacity:0});
    TweenMax.set(row2, {visibility: 'hidden'});
    TweenMax.set(release, {height: 0, opacity: 0});
    playMusic();
}

//http://stackoverflow.com/questions/9419263/playing-audio-with-javascript
function playMusic() {
var audio = new Audio('../resources/sounds/intro3.mp3');
audio.play();
}
