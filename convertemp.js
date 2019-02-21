function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
	var tempMtyF =  55.4;
	tempMtyC = fahrToC(tempMtyF);
	console.log(tempMtyC);
}

function fahrToC(tempF){
	var tempC;
	tempC = 5/9* (tempF - 32);
	return tempC;
}
