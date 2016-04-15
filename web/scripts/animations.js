var row1 = document.getElementsByClassName('row-1');
var logo = document.getElementsByClassName('logo-img');
var bandName = document.getElementsByClassName('band-name');
var album = document.getElementsByClassName('album');
var judge = document.getElementsByClassName('word-1');
var is = document.getElementsByClassName('word-2');
var coming = document.getElementsByClassName('word-3');
var release = document.getElementsByClassName('release');
var hiddenElements = document.getElementsByClassName('hide-this');
var footer = document.getElementsByClassName('footer');
var page = document.getElementsByClassName('page-container');
var releaseRow = document.getElementsByClassName('release-row');

var logoNameTL = new TimelineMax();
var textTL = new TimelineMax();
var t = 0;

init();

function init() {
    TweenMax.set(logo, {opacity: 0})
    TweenMax.set(bandName, {opacity: 0})
    TweenMax.set(judge, {opacity:0})
    TweenMax.set(is, {opacity:0});
    TweenMax.set(coming, {opacity:0});
    TweenMax.set(hiddenElements, {display: 'none'});
    TweenMax.set(release, {height: 0, opacity: 0})
    TweenMax.set(row1, {height: '700px'});
    playMusic();
}

logoNameTL.to(logo, 5, {opacity: 1, ease:Power1.easeIn}, t)
            .to(bandName, 4, {opacity:1, ease:Power1.easeIn}, t+=3);

textTL.to(judge, 2, {opacity: 1}, t+=4)
        .to(is, 2, {opacity: 1}, t+=1)
        .to(coming, 2, {opacity: 1}, t+=1)
        .to(album, 1, {opacity:0}, t+=1)
        .set(album, {height: 0}, t+=1)
        .set(release, {height: 'auto'}, t)
        .to(release, 2, {opacity:1}, t)
        .to(release, 1, {opacity:0}, t+=2)
        .set(row1, {height: '500px'}, t+=1)
        .set(releaseRow, {display: 'none'}, t)
        .set(hiddenElements, {display: 'block'}, t);


//http://stackoverflow.com/questions/9419263/playing-audio-with-javascript
function playMusic() {
var audio = new Audio('../resources/sounds/intro3.mp3');
audio.play();
}
