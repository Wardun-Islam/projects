var player1Number = Math.ceil(Math.random()*6);
var player2Number = Math.ceil(Math.random()*6);
console.log(document.getElementById("pl1-img"));
document.querySelector("#pl1-img").setAttribute("src","./images/inverted-dice-"+player1Number+".png");
document.querySelector("#pl2-img").setAttribute("src","./images/inverted-dice-"+player2Number+".png");
document.querySelector("body h1").textContent = player1Number>player2Number ? "Player 1 Wins!" : player1Number===player2Number ? "Draw!" : "Player 2 Wins!";
if(player1Number<player2Number){
	document.querySelector(".winner-disp").classList.remove("winner-disp-1");
	document.querySelector(".winner-disp").classList.add("winner-disp-2");
}else if(player1Number===player2Number){
	document.querySelector("#win-img").classList.toggle("winner-trophy-hidden");
}else{
	document.querySelector(".winner-disp").classList.remove("winner-disp-2");
	document.querySelector(".winner-disp").classList.add("winner-disp-1");
}
