var myImage = [];
var counter = 1;

myImage[0] = "images/tron.jpg";
myImage[1] = "images/z.jpg";
myImage[2] = "images/peoplecar.jpg";
myImage[3] = "images/bmw.jpg";

function nextCamero() {
	counter++;
	if(counter > 3)
		counter = 0;
	document.getElementById("camero").src = myImage[counter];

}

function prevCamero() {
	counter--;
	if(counter < 0)
		counter = 3;
	document.getElementById("camero").src = myImage[counter];

}

