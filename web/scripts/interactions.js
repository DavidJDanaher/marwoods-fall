var modal = document.getElementById('modal');
var openLink = document.getElementById('modal-open');
var closeBtn = document.getElementById('modal-close');

console.log('Before I was clicked ::' + modal );


openLink.onclick = function() {
    modalDisplay("block");
}

closeBtn.onclick = function() {
    modalDisplay("none");
}
//
// window.onclick = function (event) {
//     if (event.target !== modal) {
//         modalDisplay('none');
//     }
// }
//
function modalDisplay(display) {
    modal.style.display = display;
}
