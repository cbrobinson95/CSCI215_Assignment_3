//Elements from HTML file
var input = document.getElementById('input');
var output = document.getElementById('output');

//event listener for keyup
input.addEventListener('keyup', function () {
    var charRemaining = 50 - input.value.length;
    output.innerHTML = charRemaining;

    if(charRemaining < 0) {
        output.style.color = 'red';
    }

    if(charRemaining >= 0) {
        output.style.color = '';
    }
});