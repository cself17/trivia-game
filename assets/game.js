$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;
var q1 = {
	question : 'What is the first sign of the zodiac?',
	possibleAnswers : ['A. Aries',
				 'B. Capricorn',
				 'C. Leo',
				 'D. Pisces'],
	flags : [true, false, false, false],
	answer : 'A. Aries'
};

var q2 = {
	question: 'What are the Earth signs?',
	possibleAnswers: ['A. Aries, Leo, Sagittarius',
				 'B. Taurus, Virgo, Capricorn',
				 'C. Gemini, Libra, Aquarius',
				 'D. Cancer, Scorpio, Pisces'],
	flags : [false, true, false, false],
	answer : 'B. Taurus, Virgo, Capricorn'
};

var q3 = {
	question : 'What are the fire signs?',
	possibleAnswers : ['A. Aries, Leo, Sagittarius',
				 'B. Taurus, Virgo, Capricorn',
				 'C. Gemini, Libra, Aquarius',
				 'D. Cancer, Scorpio, Pisces'],
	flags : [true, false, false, false],
	answer : 'A. Aries, Leo, Sagittarius'
};

var q4 = {
	question : 'What are the water signs?',
	possibleAnswers : ['A. Aries, Leo, Sagittarius',
				 'B. Taurus, Virgo, Capricorn',
				 'C. Gemini, Libra, Aquarius',
				 'D. Cancer, Scorpio, Pisces'],
	flags : [false, false, false, true],
	answer : 'D. Cancer, Scorpio, Pisces'
};

var q5 = {
	question : 'What are the air signs?',
	possibleAnswers : ['A. Aries, Leo, Sagittarius',
				 'B. Taurus, Virgo, Capricorn',
				 'C. Gemini, Libra, Aquarius',
				 'D. Cancer, Scorpio, Pisces'],
	flags : [false, false, true, false],
	answer : 'D. Cancer, Scorpio, Pisces'
};

var q6 = {
	question : 'Which sign is a cardinal sign?',
	possibleAnswers : ['A. Scorpio',
				 'B. Pisces',
				 'C. Sagittarius',
				 'D. Capricorn'],
	flags : [false, false, false, true],
	answer : 'D. Capricorn'
};

var q7 = {
	question : 'Which sign is ruled by the Sun?',
	possibleAnswers : ['A. Aquarius',
				 'B. Capricorn',
				 'C. Virgo',
				 'D. Leo'],
	flags : [false, false, false, true],
	answer : 'D. Leo'
};

var q8 = {
	question : 'Which sign is ruled by Neptune?',
	possibleAnswers : ['A. Taurus',
				 'B. Libra',
				 'C. Pisces',
				 'D. Gemini'],
	flags : [false, false, true, false],
	answer : 'C. Pisces'
};

var q9 = {
	question : 'Which two signs are opposite of each other?',
	possibleAnswers : ['A. Leo and Virgo',
				 'B. Taurus and Scorpio',
				 'C. Aries and Taurus',
				 'D. Gemini and Cancer'],
	flags : [false, true, false, false],
	answer : 'B. Taurus and Scorpio'
};

var q10 = {
	question : 'Which two signs are square to each other?',
	possibleAnswers : ['A. Cancer and Capricorn',
				  'B. Aquarius and Virgo',
				  'C. Leo and Taurus',
				  'D. Aries and Libra'],
	flags : [false, false, true, false],
	answer : 'C. Leo and Taurus'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
}


function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});

});