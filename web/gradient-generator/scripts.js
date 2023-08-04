var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementsByTagName("body")[0];
var css = document.getElementsByTagName("h3")[0];

color1.addEventListener("input", function(){
	body.style.background = "linear-gradient(to right, "
									+color1.value
									+", "
									+color2.value
									+")";
	console.log(color1.value);
	css.textContent = body.style.background+";";

});

color2.addEventListener("input", function(){
	body.style.background = "linear-gradient(to right, "
									+color1.value
									+", "
									+color2.value
									+")";
	console.log(color2.value);
	css.textContent = body.style.background+";";
});