/*
 * Grab the images
 */
var pics = $('img');

var originalHeight = pics[0].height;
var originalWidth = pics[0].width;

// Add listeners for all the img tags. Notice we can chain them
pics
    .mouseover( function () {
        $(this).height(100).width(120);
    })
    .mouseout( function () {
        $(this).height(originalHeight).width(originalWidth);
    })
    .click( function (event) {
        var imageDiv = $('#imageDiv');
        var source = this.src;

        var text = "";
        text += "<img src=" + source + " height=400 width=600><br>";
        text += "<span style:'position: relative; left: 260px; top: " +
            "-390px;'> <a href='javascript:dowork2()'>Close</a></span> ";

        imageDiv.html(text).css("visibility","visible");
    }); // END listeners



function dowork2() {
    var imageDiv =$('#imageDiv');
    imageDiv.html("<div></div>").css({"visibility": "hidden"});
}