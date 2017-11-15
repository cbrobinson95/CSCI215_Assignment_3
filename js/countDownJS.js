
// Set an event listener for keyup to adjust the output text
$('#inputBox').keyup ( function () {
    var charRemaining = 50 - $(this).val().length;
    $('#output').text(charRemaining);

    if(charRemaining < 0) {
        $('#output').css('color','red');
    }
});