var logo = document.getElementsByClassName('logo');
var bandName = document.getElementsByClassName('banner');
var column = document.getElementsByClassName('col-md-4');

fadeIn(logo, 3);
fadeIn(bandName, 3);
border(column, 3);

function fadeIn(tag, time) {
    TweenMax.to(tag, time, {opacity: 1, ease:Power1.easeIn});
}

function border(tag, time) {
    TweenMax.to(tag, time, {
        border: '2px',
        border: 'solid',
        border: 'white'
    });
}

//http://stackoverflow.com/questions/9419263/playing-audio-with-javascript
// var audio = new Audio('');
// audio.play();
