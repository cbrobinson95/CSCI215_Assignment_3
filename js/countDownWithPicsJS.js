//Elements from HTML file
var input = document.getElementById('input');
var output = document.getElementById('output');


//event listener for keyup
input.addEventListener('keyup', function () {
    var charRemaining = 50 - input.value.length;
    output.innerHTML = charRemaining;

    if(charRemaining = 9) {
        output.style.backgroundImage = "url('imgs/09.png')";
    }

    else if(charRemaining = 8) {
        output.style.backgroundImage = "url('imgs/08.png')";
    }

    else if(charRemaining = 7) {
        output.style.backgroundImage = "url('imgs/07.png')";
    }

    else if(charRemaining = 6) {
        output.style.backgroundImage = "url('imgs/06.png')";
    }

    else if(charRemaining = 5) {
        output.style.backgroundImage = "url('imgs/05.png')";
    }

    else if(charRemaining = 4) {
        output.style.backgroundImage = "url('imgs/04.png')";
    }

    else if(charRemaining = 3) {
        output.style.backgroundImage = "url('imgs/03.png')";
    }

    else if(charRemaining = 2) {
        output.style.backgroundImage = "url('imgs/02.png')";
    }

    else if(charRemaining = 1) {
        output.style.backgroundImage = "url('imgs/01.png')";
    }

    else if(charRemaining = 0) {
        output.style.backgroundImage = "url('imgs/00.png')";
    }
});