// Variable for Starting Games Button
const startGame = document.getElementById('openQuestions');
// Variable for content of Results  Page
const results = document.getElementById('seeResults');
//Varialbe for Results Page
const showResults = document.getElementById('finalResults');
//Variable for button exiting game/ Restarting Game
const exitPage = document.getElementById('exit');
// Variable for the Answer Choices/questions
const answer = document.getElementById('questions');
// Variable for the result text
const theResult = document.querySelector(".theResults");
// variable for the last question
const last = document.querySelector('#lastQuestion');

//Function to open or display modal where questions sit
const openQuestions = () => {
  questions.style.display = 'block'
}
//Function to display Results in results modal and a result for each out come!
const seeResults = () => {
  if (score === 0) {
      theResult.innerHTML = "You scored 0 of 10!" + " You are a jerry..."
  } else if (score === 1) {
    theResult.innerHTML = "You scored 1 of 10!" + " Ski Patrol brought had to bring you down"
  } else if (score === 2) {
    theResult.innerHTML = "You scored 2 of 10!" + " At least you tried."
  } else if (score === 3) {
    theResult.innerHTML = "You scored 3 of 10!" + " You should stick to the green slopes pal."
  } else if (score === 4) {
    theResult.innerHTML = "You scored 4 of 10!" + " You're still learning, but I see potential!"
  } else if (score === 5) {
    theResult.innerHTML = "You scored 5 of 10!" + " I think you're ready for the blue slopes."
  } else if (score === 6) {
    theResult.innerHTML = "You scored 6 of 10!" + " Alright lets try skiing a little faster next time."
  } else if (score === 7) {
    theResult.innerHTML = "You scored 7 of 10!" + " I think you're ready to try your first BLACK DIAMOND!"
  } else if (score === 8) {
    theResult.innerHTML = "You scored 8 of 10!" + " Alright you are on your way to becoming a sender!!"
  } else if (score === 9) {
    theResult.innerHTML = "You scored 9 of 10!" + " DOUBLE BLACK DIAMONDS here we come!!!"
  } else if (score === 10) {
    theResult.innerHTML = "You scored 10 of 10!" + " You are a pro skier? That's funny because I am so much better then you!"
  }
}

//Function to scroll to top of page
const scrollTop = () => {
    answer.scrollTo(0,0); 
    }
//Function to scroll stop displaying results modal
const exitGame = () => {
    
    finalResults.style.display = 'none';
}
//Function to scroll to next question, Question length is 750 in browser
const scrollD = () => {
answer.scrollBy(0, 750); 
}
//Variable for the score
let score = 0;
// Variable for updating score by incrementing by 1
const updateScore = () => {
    score++;
    console.log(score);
}
// Event Listeners each click to start game or see result
startGame.addEventListener('click', openQuestions);results.addEventListener('click', seeResults);
// event lister for clicks in the results exit button to reset game, exit modal
exitPage.addEventListener('click', 
function () {
exitGame();
score = 0;
console.log("Score is " + score);
})
// event listener for each answer of quiz selected
answer.addEventListener('click', 
function (e) {
    console.log(e.target)
    if (e.target.classList.contains("answer1")) {
        console.log("yay!");
        updateScore();  
        scrollD();
        
    } else if (e.target.classList.contains("wrong")) {
        scrollD();
        console.log("wrong");
    } else {
    
        console.log("nada");   
    }
})
// Event listener for the last question to move on to finals page
last.addEventListener('click',
function (e) {
    if (e.target.classList.contains("answer1")) {
        updateScore();
    };
scrollTop();
seeResults();
questions.style.display = 'none';
finalResults.style.display = 'block';
});


/*
Goals
Step One Home Page
    Button used to start game
    button opens questions
Step 2
    questions opens with question 1
    question 1 has 2-4 buttons with different answers
        if coorect answer is chosen Score increases by 1
            move on to next question
        if wrong answer is chosen move on to next question
Step 3 Build More Questions
        next question same actions(questoions 2)
        continued to question 10
Step 4
    After question 10 button brings you to a Results page 
        depending on score get a response for how good or bad you are
    On results page a button to try again...(refreshes page )

*/