/*
 * Grab the images
 */
var pics = document.getElementsByTagName('img');

/*
 * Iterate through the images and set event listeners
 */
for(var i=0; i<pics.length; i++) {
    console.log("pic src:" + pics[i].src);
    var originalHeight = pics[i].height;
    var originalWidth = pics[i].width;

    // Adds a mouseover event listner to expand the height and width
    pics[i].addEventListener('mouseover', function () {
        this.height = 100;
        this.width = 120;
    });

    // Adds a mouseout event listner to return image to original size
    pics[i].addEventListener('mouseout', function () {
        this.height = originalHeight;
        this.width = originalWidth;
    });

    /*
     * Adds a click event listner to set the clicked image to the hidden div.
     * Notice the use of the 'this' keyword
     */
    pics[i].addEventListener('click', function () {
        var imageDiv = document.getElementById('imageDiv');
        imageDiv.innerHTML = "";
        imageDiv.innerHTML += "<img src=" + this.src + " height=400 width=600><br>";
        imageDiv.innerHTML += "<span style:'position: relative; left: 260px; top: " +
            "-390px;'> <a href='javascript:dowork2()'>Close</a></span> ";

        imageDiv.style.visibility = "visible";
    });
}

function dowork2(theImage) {
    var imageDiv =document.getElementById('imageDiv');
    imageDiv.innerHTML = "";
    imageDiv.style.visibility = "hidden";
}