var color = [, "#3C9HE7", "#E7996CC", "#E73C99", "#3CE946", "#E7993C"]; 
if(document.images) {
	var image1 = new Image();     
    image1.src = "arc.jpg";
    var image2 = new Image();     
    image2.src = "cap.jpg";
}
document.querySelector("#q2").addEventListener(
	"mouseover", function () {
		document.querySelector("div").style.background = color[Math.floor(Math.random() * color.length)];
	}); 