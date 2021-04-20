const quizContainer = document.getElementById('quiz');

const resultsContainer = document.getElementById('results');

const submitButton = document.getElementById('submit');


const quizQuestions = [
    {
        question: "Souleymane Coulibaly is currently a tutor in:",

        answers: {

          a: "Digital platforms",

          b: "Social media management",

          c: "Visual content design",

          d: "Technology-based health promotion"

        },

        correctAnswer: "a"

      },

      {

        question: "Souleymane works closely with:",

        answers: {

          a: "Undergraduate Students",

          b: "Honours students",

          c: "Higher Degree Research Students",

          d: "All of the above"

        },

        correctAnswer: "a"

      },

      {

        question: "Souleymane’s digital design skills include:",

        answers: {

          a: "Website design",

          b: "Applying basic digital media metrics",

          c: "Executing usability and navigability testing for public health apps",

          d: "All of the above"

        },

        correctAnswer: "d"

      },

      {

        question: "Souleymane is super passionate about:",

        answers: {

          a: "People",

          b: "Innovation",

          c: "Human-centred design",

          d: "All of the above and more!"

        },

        correctAnswer: "d"

      }

]

function buildQuiz() {
  // variable to store the HTML output
  const output = [];
  
  for(i=0; i<quizQuestions.length; i++){
  // variable to store the list of possible answers
  const answers = [];

  // for each available answer to this question add a html radio button
  for(letter in quizQuestions[i].answers){

  answers.push(
  
      '<label>'
  
      + '<input type="radio" name="question'+i+'" value="'+letter+'">'
  
      + letter + ': '
  
      + quizQuestions[i].answers[letter]
  
      + '</label>'
  
      );
  }

  // add this question and its answers to the output
  output.push(

  '<div class="question">' + quizQuestions[i].question + '</div>'

  + '<div class="answers">' + answers.join('') + '</div>'

  );

}

// combine our output list into one string of HTML and put it on the page
quizContainer.innerHTML = output.join('');
}

function showResults() {

    // gather answer containers from our quiz
  
    var answerContainers = quizContainer.querySelectorAll('.answers');
  
    // keep track of user's answers 
  
    var numCorrect = 0;
  
    // for each question find the selected answer
  
    for(i=0; i<quizQuestions.length; i++){
  
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
  
          // if answer is correct add to the number of correct answers
  
          if(userAnswer===quizQuestions[i].correctAnswer){
  
            numCorrect++;
  
            // and colour the answers green
  
            answerContainers[i].style.color = 'lightgreen';
  
          }
  
          // if answer is wrong or blank
  
          else{
  
            // colour the answers red
  
            answerContainers[i].style.color = 'red';
  
          }
  
        }
  
   
  
        // show number of correct answers out of total
  
        if (numCorrect === 0) { 
  
        resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";
  
      }
  
      if (numCorrect === 1) { 
  
          resultsContainer.innerHTML = "There's room for improvement there! You only got one correct answer.";
  
        }
  
        if (numCorrect === 2) { 
  
          resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
  
        }
  
        if (numCorrect === 3) { 
  
          resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Tara pretty well!";
  
        }
  
        if (numCorrect === 4) { 
  
          resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Tara so well!";
  
        }
  
  }


  //load quiz

  buildQuiz();

  submitButton.onclick = function() {

    showResults();


}
