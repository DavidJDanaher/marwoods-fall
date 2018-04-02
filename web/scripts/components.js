$(document).ready(function() {
    $('.navbar-default').load('http://marwoodsfall.com/web/components/nav.html');
});

$(document).ready(function() {
    $('.footer').load('http://marwoodsfall.com/web/components/footer.html');

    var date = new Date()
    $('.copy-year').text(date.getFullYear())
});
