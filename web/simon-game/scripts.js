var arrayOfCurrentQuestion = [];
var arrayOfCurrentAnswer = [];
var newGame = true;
$("body").keypress(function(){
	if(newGame){
		newGame = false;
		giveChoice();
	}
});

function giveChoice(){
	buttonNumber = Math.ceil(Math.random()*4);
	var audio = new Audio();
	arrayOfCurrentQuestion[arrayOfCurrentQuestion.length] = buttonNumber;
	arrayOfCurrentAnswer = arrayOfCurrentQuestion.concat([]);
	$("#level-title").text("Level "+arrayOfCurrentQuestion.length);
	switch(buttonNumber){
		case 1:
			$("#green").fadeIn(100).fadeOut(100).fadeIn(100);
			audio.src = "sounds/green.mp3";
			audio.play();
			break;
		case 2:
			$("#red").fadeIn(100).fadeOut(100).fadeIn(100);
			audio.src = "sounds/red.mp3";
			audio.play();
			break;
		case 3:
			$("#yellow").fadeIn(100).fadeOut(100).fadeIn(100);
			audio.src = "sounds/yellow.mp3";
			audio.play();
			break;
		case 4:
			$("#blue").fadeIn(100).fadeOut(100).fadeIn(100);
			audio.src = "sounds/blue.mp3";
			audio.play();
			break;
	}
}

$(".btn").click(function(event){
	checkResult(event.target.className.slice(4,event.target.className.length));
});

function checkResult(btn_name){
	var audio = new Audio();
	if(arrayOfCurrentAnswer.length){
		switch(btn_name){
			case 'green':
				audio.src = "sounds/green.mp3";
				audio.play();
				$("#green").toggleClass("pressed");
				setTimeout(function(){
					$("#green").toggleClass("pressed");
				},100);
				if(arrayOfCurrentAnswer.shift() === 1){
					if(!arrayOfCurrentAnswer.length){
						setTimeout(giveChoice,700);
					}
				}else{
					gameOver();
				}
			break;
			case 'red':
				audio.src = "sounds/red.mp3";
				audio.play();
				$("#red").toggleClass("pressed");
				setTimeout(function(){
					$("#red").toggleClass("pressed");
				},100);
				if(arrayOfCurrentAnswer.shift() === 2){
					if(!arrayOfCurrentAnswer.length){
						setTimeout(giveChoice,700);
					}
				}else{
					gameOver();
				}
			break;
			case 'yellow':
				audio.src = "sounds/yellow.mp3";
				audio.play();
				$("#yellow").toggleClass("pressed");
				setTimeout(function(){
					$("#yellow").toggleClass("pressed");
				},100);
				if(arrayOfCurrentAnswer.shift() === 3){
					if(!arrayOfCurrentAnswer.length){
						setTimeout(giveChoice,700);
					}
				}else{
					gameOver();
				}
			break;
			case 'blue':
				audio.src = "sounds/blue.mp3";
				audio.play();
				$("#blue").toggleClass("pressed");
				setTimeout(function(){
					$("#blue").toggleClass("pressed");
				},100);
				if(arrayOfCurrentAnswer.shift() === 4){
					if(!arrayOfCurrentAnswer.length){
						setTimeout(giveChoice,700);
					}
				}else{
					gameOver();
				}
			break;
		}
	}
}
function gameOver(){
	$("h1").text("Game Over! Press Any Key To Try Again");
	$("body").toggleClass("game-over");
	setTimeout(function(){
		$("body").toggleClass("game-over");
	},500);
	arrayOfCurrentAnswer = [];
	arrayOfCurrentQuestion = [];
	newGame = true;
}