$(document).ready(function() {
	var qaArray, right, wrong, unanswered, currentIndex, timeIsUp;

	var questionTimer = {
		time: 30,

		reset: function () {
        	questionTimer.time = 30;
    	},
   		start: function(){
   			$('#time').html("Time Remaining: " + questionTimer.time).css("color", "#BCFEFF");;
        	counter = setInterval(questionTimer.count, 1000);
    	},
    	stop: function(){
        	clearInterval(counter);
    	},
    	count: function(){
   	        questionTimer.time--;
	        $('#time').html("Time Remaining: " + questionTimer.time);

	        if(questionTimer.time < 6) {	//At 5 text will start flashing
	        	if(questionTimer.time % 2 == 0) {
	        		$('#time').css("color", "#EBFFE3");	//Whiteyellow
	        	} else {
	        		$('#time').css("color", "#E8867D");	//Redpink
	        	}
	        }
    	},
	}

	function varSet() {
		qaArray = [{
			question: "What was Joss Whedon's first writing job?",
			answers: ["Growing Pains", "Clarissa Explains It All", "Roseanne", "The Wonder Years"],
			picright: 'assets/images/roseanneright.gif',
			picwrong: 'assets/images/roseannewrong.gif',
			correctanswer: 2
		}, {
			question: "Which is NOT a potential monster on the <em>Cabin in the Woods</em> whiteboard?",
			answers: ["Kevin", "Sugarplum Fairy", "Vampires", "Giant Spiders"],
			picright: 'assets/images/cabininthewoodsright.gif',
			picwrong: 'assets/images/cabininthewoodswrong.gif',
			correctanswer: 3
		}, {
			question: "What is the standard length of a Doll's contract in <em>Dollhouse</em>?",
			answers: ["10 years", "5 years", "2 years", "1 year"],
			picright: 'assets/images/dollhouseright.gif',
			picwrong: 'assets/images/dollhousewrong.gif',
			correctanswer: 1
		}, {
			question: "Which of Joss Whedon’s works garnered him his first-ever Emmy win?",
			answers: ["Buffy the Vampire Slayer", "Firefly", "Dollhouse", "Dr. Horrible’s Sing-Along Blog"],
			picright: 'assets/images/drhorribleright.gif',
			picwrong: 'assets/images/drhorriblewrong.gif',
			correctanswer: 3
		}, {
			question: "Which Pixar movie did Joss Whedon rewrite?",
			answers: ["Toy Story", "Finding Nemo", "Monsters, Inc", "A Bug’s Life"],
			picright: 'assets/images/toystoryright.gif',
			picwrong: 'assets/images/toystorywrong.gif',
			correctanswer: 0
		}, {
			question: "At the series conclusion, how old is Angel in <em>Angel</em>?",
			answers: ["32 years old", "188 years old", "251 years old", "363 years old"],
			picright: 'assets/images/angelright.gif',
			picwrong: 'assets/images/angelwrong.gif',
			correctanswer: 2
		}, {
			question: "Which founding Avenger member was not in <em>The Avengers</em> (2012)?",
			answers: ["Thor", "Ant-Man", "Hawkeye", "Black Widow"],
			picright: 'assets/images/avengersright.gif',
			picwrong: 'assets/images/avengerswrong.gif',
			correctanswer: 1
		}, {
			question: "What is the <q>documented</q> reason Fox cancelled <em>Firefly</em>?",
			answers: ["Mal shot too many people", "It was too dark", "It’s ratings", "Fox executives don’t know<br>what a good show is"],
			picright: 'assets/images/fireflyright.gif',
			picwrong: 'assets/images/fireflywrong.gif',
			correctanswer: 1
		}, {
			question: "Which Shakespeare play did Joss Whedon direct and produce in 2012?",
			answers: ["Much Ado About Nothing", "A Midsummer Night’s Dream", "Twelfth Night", "The Taming of the Shrew"],
			picright: 'assets/images/muchadoaboutnothingright.gif',
			picwrong: 'assets/images/muchadoaboutnothingwrong.gif',
			correctanswer: 0
		}, {
			question: "How many times did Buffy die in <em>Buffy the Vampire Slayer</em>?",
			answers: ["Never", "Once", "Twice", "Three Times"],
			picright: 'assets/images/buffyright.gif',
			picwrong: 'assets/images/buffywrong.gif',
			correctanswer: 2
		}]

		right = 0;
		wrong = 0;
		unanswered = 0;

		currentIndex = -1;	//Starts at -1 because advance automatically increases it by 1 so it will start at 0

		$('#question').html("<button class='btn' id='start'>Start</button>")
		$('#answer0, #answer1, #answer2, #answer3').hide().off('click');

		$('#start').on("click", function() {
			advance();
		});
	}

	function askQuestions() {
		questionTimer.start();
		$('#question').html(qaArray[currentIndex].question);
		$('#answer0').show().html(qaArray[currentIndex].answers[0]);
		$('#answer1').show().html(qaArray[currentIndex].answers[1]);
		$('#answer2').show().html(qaArray[currentIndex].answers[2]);
		$('#answer3').show().html(qaArray[currentIndex].answers[3]);
		$('#gifHolder').hide().off('click');

		onClickAnswer();
	}

	function onClickAnswer() {
		$('.btn').on("click", function() {
			var buttonClick = parseInt($(this).attr('value'));
			if(buttonClick === qaArray[currentIndex].correctanswer) {
				rightAnswer();
			}
			else {
				wrongAnswer();
			}
		});
	}

	function rightAnswer() {
		clearTimeout(timeIsUp);
		right++;
		questionTimer.stop();
		questionTimer.reset();
		$('#time').empty();
		$('#question').html("<h2>Correct!</h2>");
		$('#answer0, #answer1, #answer2, #answer3').hide().off('click');
		$('#gifHolder').show().html("<img class='gifs' src=" + qaArray[currentIndex].picright + ">");

		timeIsUp = setTimeout(advance, 4 * 1000);
	}

	function wrongAnswer() {
		clearTimeout(timeIsUp);
		wrong++;
		questionTimer.stop();
		questionTimer.reset();
		$('#time').empty();
		$('#question').html("<h2>Nope!</h2>");
		$('#answer0, #answer1, #answer2, #answer3').hide().off('click');
		$('#gifHolder').show().html("The correct answer was: " + qaArray[currentIndex].answers[qaArray[currentIndex].correctanswer] +
			"<br><img class='gifs' src=" + qaArray[currentIndex].picwrong + ">");

		timeIsUp = setTimeout(advance, 4 * 1000);
	}

	function timesUp() {
		clearTimeout(timeIsUp);
		unanswered++;
		questionTimer.stop();
		questionTimer.reset();
		$('#time').empty();
		$('#question').html("<h2>Time's Up!</h2>");
		$('#answer0, #answer1, #answer2, #answer3').hide().off('click');
		$('#gifHolder').show().html("The correct answer was: " + qaArray[currentIndex].answers[qaArray[currentIndex].correctanswer] +
			"<br><img class='gifs' src=" + qaArray[currentIndex].picwrong + ">");

		timeIsUp = setTimeout(advance, 4 * 1000);
	}

	function endScreen() {
		$('#time').html("<h2>Good job!</h2>");
		$('#question').html("Your results <br><br>Right: " + right + "<br>Wrong: " + wrong + "<br>Not Answered: " + unanswered);

		$('#gifHolder').html("<button class='btn' id='playagain'>Play again?</button>")

		$('#playagain').on("click", function() {
			varSet();
			advance();
		});
	}

	function advance() {
		currentIndex++;

		if(currentIndex < qaArray.length) {
			askQuestions();
			timeIsUp = setTimeout(timesUp, 30 * 1000);
		} else {
			endScreen();
		}
	}


	varSet();

});