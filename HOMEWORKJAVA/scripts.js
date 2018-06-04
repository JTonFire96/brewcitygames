var modal = document.getElementById('id01');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var x = document.getElementById("myAudio");

function enableAutoplay() {
    x.autoplay = true;
    x.load();
}

function disableAutoplay() {
    x.autoplay = false;
    x.load();
}

function checkAutoplay() {
    alert(x.autoplay);
}
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var y = document.getElementsByClassName("mySlides");
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > y.length) {
        myIndex = 1
    }
    y[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 2 seconds
}
var modal = document.getElementById('id02');

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}