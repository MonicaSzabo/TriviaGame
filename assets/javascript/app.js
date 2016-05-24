$(document).ready(function() {
	var qaArray, right, wrong, unanswered, currentIndex;

	// var questionTimer = {
	// 	time: 30,

	// 	reset: function () {
 //        	questionTimer.time = 30;
 //    	},
 //   		start: function(){
 //        	counter = setInterval(questionTimer.count, 1000);
 //    	},
 //    	stop: function(){
 //        	clearInterval(counter);
 //    	},
 //    	count: function(){
	//         questionTimer.time--;
	//         $('#time').html("Time Remaining: " + questionTimer.time);

	//         if(questionTimer.time == 0) {
	//         	questionTimer.stop();
	//         }
 //    	},
	// }

	function varSet() {
		qaArray = [{
			question: "What was Joss Whedon's first writing job?",
			answers: ["Growing Pains", "Clarissa Explains It All", "Roseanne", "The Wonder Years"],
			pic: 'assets/images/roseanne.gif',
			correctanswer: 2
		}, {
			question: "Which is NOT a potential monster on the <em>Cabin in the Woods</em> whiteboard?",
			answers: ["Kevin", "Sugarplum Fairy", "Vampires", "Giant Spiders"],
			pic: 'assets/images/cabininthewoods.gif',
			correctanswer: 3
		}, {
			question: "What is the standard length of a Doll's contract in <em>Dollhouse</em>?",
			answers: ["10 years", "5 years", "2 years", "1 year"],
			pic: 'assets/images/dollhouse.gif',
			correctanswer: 1
		}, {
			question: "Which of Joss Whedon’s works garnered him his first-ever Emmy win?",
			answers: ["Buffy the Vampire Slayer", "Firefly", "Dollhouse", "Dr. Horrible’s Sing-Along Blog"],
			pic: 'assets/images/drhorrible.gif',
			correctanswer: 3
		}, {
			question: "Which Pixar movie did Joss Whedon completely rewrite?",
			answers: ["Toy Story", "Finding Nemo", "Monsters, Inc", "A Bug’s Life"],
			pic: 'assets/images/toystory.gif',
			correctanswer: 0
		}, {
			question: "At the series conclusion, how old is Angel in <em>Angel</em>?",
			answers: ["32 years old", "188 years old", "251 years old", "363 years old"],
			pic: 'assets/images/angel.gif',
			correctanswer: 2
		}, {
			question: "Which founding Avenger member was not in <em>The Avengers</em> (2012)?",
			answers: ["Thor", "Ant-Man", "Hawkeye", "Black Widow"],
			pic: 'assets/images/avengers.gif',
			correctanswer: 1
		}, {
			question: "What is the <q>documented</q> reason Fox cancelled <em>Firefly</em>?",
			answers: ["Mal shot too many people", "It was too dark", "It’s ratings", "Fox executives don’t know good shows when they see them"],
			pic: 'assets/images/firefly.gif',
			correctanswer: 1
		}, {
			question: "Which Shakespeare play did Joss Whedon direct and produce in 2012?",
			answers: ["Much Ado About Nothing", "A Midsummer Night’s Dream", "Twelfth Night", "The Taming of the Shrew"],
			pic: 'assets/images/muchadoaboutnothing.gif',
			correctanswer: 0
		}, {
			question: "How many times did Buffy die in <em>Buffy the Vampire Slayer</em>?",
			answers: ["Never", "Once", "Twice", "Three Times"],
			pic: 'assets/images/buffy.gif',
			correctanswer: 2
		}]

		right = 0;
		wrong = 0;
		unanswered = 0;

		currentIndex = 0;

		$('#question').html("<button class='btn' id='start'>Start the game</button>")
		$('#answer0').hide();
		$('#answer1').hide();
		$('#answer2').hide();
		$('#answer3').hide();

		$('#start').on("click", function() {
			advance();
		});
	}

	function askQuestions(currentIndex) {
		$('#question').html(qaArray[currentIndex].question);
		$('#answer0').show().html(qaArray[currentIndex].answers[0]);
		$('#answer1').show().html(qaArray[currentIndex].answers[1]);
		$('#answer2').show().html(qaArray[currentIndex].answers[2]);
		$('#answer3').show().html(qaArray[currentIndex].answers[3]);

		$('.btn').on("click", function() {
			if($(this).attr('value') == qaArray[currentIndex].correctanswer) {
				right++;
				rightAnswer(currentIndex);
			}
			else {
				wrong++;
				wrongAnswer(currentIndex);
			}
		});

	}

	function rightAnswer(currentIndex) {
		$('#question').html("<h2>Correct!</h2>");
		$('#answer0').hide();
		$('#answer1').hide();
		$('#answer2').hide();
		$('#answer3').hide();
		$('#gifHolder').html("<img src=" + qaArray[currentIndex].pic + ">");
	}

	function wrongAnswer(currentIndex) {
		$('#question').html("<h2>Nope!</h2>");
		$('#answer0').hide();
		$('#answer1').hide();
		$('#answer2').hide();
		$('#answer3').hide();
		$('#gifHolder').html("The correct answer was: " + qaArray[currentIndex].answers[qaArray[currentIndex].correctanswer] +
			"<br><img src=" + qaArray[currentIndex].pic + ">");
	}

	function advance() {
		askQuestions(0);
	}



	varSet();

	var thirty = setTimeout(function() {
		askQuestions(0);
	}, 30 * 1000);

	function testing() {
        alert("testing");
    }

});