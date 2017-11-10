// Grab the elements from the HTML file
var inputBox = document.getElementById('inputBox');
var output = document.getElementById('output');

// Set an event listener for keyup to adjust the output text
inputBox.addEventListener('keyup', function () {
    var charRemaining = 50 - inputBox.value.length;
    output.innerHTML = charRemaining;

    if(charRemaining < 0) {
        output.style.color = 'red';
    }
});