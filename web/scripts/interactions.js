var modal = document.getElementById('modal');
var openLink = document.getElementById('modal-open');
var closeBtn = document.getElementById('modal-close');

openLink.onclick = function() {
    showModal();
}

closeBtn.onclick = function() {
    hideModal();
}

window.onclick = function (event) {
    if (event.target == modal) {
        hideModal();
    }
}

function showModal() {
    modal.style.display = "block";
}

function hideModal() {
    modal.style.display = "none";
}
