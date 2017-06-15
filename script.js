$(document).ready(function(){
  
    var magic8Ball = {};
  
    magic8Ball.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Reply hazy try again", "Better not tell you now", "Do not count on it", "My sources say no"];

    magic8Ball.askQuestion = function(question){
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];

        $("#8ball").effect( "shake" );
        $("#answer").text( answer );
        $("#answer").fadeIn(4000);
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");

        console.log(question);
        console.log(answer);
    };
        $("#answer").hide();

    var onClick = function() {
      
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

        var question = prompt("What do you want to know?");
        magic8Ball.askQuestion(question);
    };

    $("#questionButton").click( onClick );

  
});

