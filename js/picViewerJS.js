//initial declarations
var pic = document.getElementByTagName('img');
var originalHeight = pics[0].height;
var originalWidth = pics[0].width;

for(var i=0; i<pic.length; i++) { //start for loop
    console.log("pic src:" + pic[i].src);

    //mouseover event listener for changing height and width
    pic[i].addEventListener('mouseover', function () { //[i] refers to length of var pic, whatever it may be
        this.height = 100; //"this" refers to elements tagged img (contents of var pic)
        this.width = 120; //see previous comment
        }); //end mouseover

    //mouseout event listener for returning height and width
    pic[i].addEventListener('mouseout', function () {
        this.height = originalHeight;
        this.width = originalWidth;
    }); //end mouseout

    //click event listener for setting clicked image to hidden div
    pic[i].addEventListener('click', function () {
        var picDiv = document.getElementById('picDiv');
        picDiv.innerHTML = "";
        picDiv.innerHTML += "<img src=" + this.src + "height=400 width=600><br>"; //"this" refers to var picDiv
        picDiv.innerHTML += "<span style= 'position: relative; left:260px; top: -390px;'> <a href='javascript:finalfunction()'>Close</a></span>";
        picDiv.style.visibility = "visible";
    }); //end click

} //end for loop

function finalfunction(theImage) {
    var picDiv = document.getElementById('picDiv');
    picDiv.innerHTML = "";
    picDiv.style.visibility = "hidden";
}