// declares the starting scores
let botScore = 0;
let yourScore = 0;

// picks a random number 1, 2, or 3 for rock paper scissors for the bot
function botPick(){
	return Math.floor(Math.random() * 3) + 1  
}
function addToYourScore(){
	yourScore++;
}
function addToBotScore(){
	botScore++;
}
//checks to see is player or bot have 5 points and resets the game
function checkWinner(){
	if (botScore == 5) {
		$('#bot-win').show('fast');
		resetScore();
		
	}
	if (yourScore == 5) {
		$('#you-win').show('fast');
		resetScore();
	}
}
function resetScore() {
	botScore = 0;
	yourScore = 0;
}

$(document).ready(() => {
	// when the rock was selected
	$("#rock").click(function() {
		// clears the winner if this is not the first game
		$('.win').hide();
		// shows the text at the bottom
  	$('.after-click').show('fast');
		// add your choice
		$('#your-choice').text('You Chose: Rock');

		// add robots choice and add the score
		let botNum = botPick();
		if (botNum == 1) {
			//WIN
			$('#bot-choice').text('The RPS Bot Chose: Scissors');
			addToYourScore();
		} else if (botNum == 2) {
			//LOSE
			$('#bot-choice').text('The RPS Bot Chose: Paper');
			addToBotScore();
		} else {
			// TIE
			$('#bot-choice').text('The RPS Bot Chose: Rock');
		}

		// update the score
		$('#score').text('Score: You-' + yourScore + ' Bot-' + botScore);

		// check winner
		checkWinner();
	});

	// when the paper is selected
	$('#paper').click(function() {
		// clears the winner if this is not the first game
		$('.win').hide();
		// shows the text at the bottom
		$('.after-click').show('fast');
		// add your choice
		$('#your-choice').text('You Chose: Paper');

		// add robots choice and add the score
		let botNum = botPick();
		if (botNum == 1) {
			//WIN
			$('#bot-choice').text('The RPS Bot Chose: Rock');
			addToYourScore();
		} else if (botNum == 2) {
			//LOSE
			$('#bot-choice').text('The RPS Bot Chose: Scissors');
			addToBotScore();
		} else {
			// TIE
			$('#bot-choice').text('The RPS Bot Chose: Paper');
		}

		// update the score
		$('#score').text('Score: You-' + yourScore + ' Bot-' + botScore);

		// check winner
		checkWinner();
	});

	// when the sissors are selected
	$('#scissors').click(function() {
		// clears the winner if this is not the first game
		$('.win').hide();
		// shows the text at the bottom
		$('.after-click').show('fast');
		// add your choice
		$('#your-choice').text('You Chose: Scissors');

		// add robots choice and add the score
		let botNum = botPick();
		if (botNum == 1) {
			//WIN
			$('#bot-choice').text('The RPS Bot Chose: Paper');
			addToYourScore();
		} else if (botNum == 2) {
			//LOSE
			$('#bot-choice').text('The RPS Bot Chose: Rock');
			addToBotScore();
		} else {
			// TIE
			$('#bot-choice').text('The RPS Bot Chose: Scissors');
		}

		// update the score
		$('#score').text('Score: You-' + yourScore + ' Bot-' + botScore);

		// check winner
		checkWinner();
	});
});