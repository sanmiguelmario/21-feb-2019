function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
	var a = 12
var b =12
hipoC= hipotenusa(a,b);
	console.log (hipoC);
}
	
function hipotenusa (a,b){
		var hipoC;
	hipoC = sqrt((b*b)+(a*a))
	return hipoC;
}
