/*
 * Grab the images
 */
var pics = $('img');

var originalHeight = pics[0].height;
var originalWidth = pics[0].width;

// Adds a mouseover event listner to expand the height and width
$('img').mouseover( function () {
    $(this).height(100).width(120);
}); // END mouseover listener

// Adds a mouseout event listner to return image to original size
pics.mouseout( function () {
    $(this).height(originalHeight).width(originalWidth);
}); // END mouseout listener

/*
 * Adds a click event listner to set the clicked image to the hidden div.
 * Notice the use of the 'this' keyword
 */
pics.click( function (event) {
    var imageDiv = $('#imageDiv');
    var source = this.src;

    var text = "";
    text += "<img src=" + source + " height=400 width=600><br>";
    text += "<span style:'position: relative; left: 260px; top: " +
        "-390px;'> <a href='javascript:dowork2()'>Close</a></span> ";

    imageDiv.html(text).css("visibility","visible");
}); // END click listener


function dowork2() {
    var imageDiv =$('#imageDiv');
    imageDiv.html("<div></div>").css("visibility", "hidden");
}