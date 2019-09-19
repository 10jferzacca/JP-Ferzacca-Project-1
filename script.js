
const startGame = document.getElementById('openQuestions');
const results = document.getElementById('seeResults');
const showResults = document.getElementById('finalResults');
const exitPage = document.getElementById('exit');
const answer = document.getElementById('questions');
const theResult = document.querySelector(".theResults");
const last = document.querySelector('#lastQuestion');

const openQuestions = () => {
  questions.style.display = 'block'
}
const seeResults = () => {
//   questions.style.display = 'none';
//   finalResults.style.display = 'block';
  if (score === 0) {
      theResult.innerHTML = "You scored 0 of 10!" + " You are a jerry..."
  } else if (score === 1) {
    theResult.innerHTML = "You scored 1 of 10!" + " Ski Patrol brought had to bring you down"
  } else if (score === 2) {
    theResult.innerHTML = "You scored 2 of 10!" + " At least you tried."
  } else if (score === 3) {
    theResult.innerHTML = "You scored 3 of 10!" + " You should stick to the green slopes pal."
  } else if (score === 4) {
    theResult.innerHTML = "You scored 4 of 10!" + " Your still learning, but I see potential!"
  } else if (score === 5) {
    theResult.innerHTML = "You scored 5 of 10!" + " I think your ready for the blue slopes."
  } else if (score === 6) {
    theResult.innerHTML = "You scored 6 of 10!" + " Alright lets try skiing a little faster next time."
  } else if (score === 7) {
    theResult.innerHTML = "You scored 7 of 10!" + " I think your ready to try your first BLACK DIAMOND!"
  } else if (score === 8) {
    theResult.innerHTML = "You scored 8 of 10!" + " Alright your on your way to becoming a sender!!"
  } else if (score === 9) {
    theResult.innerHTML = "You scored 9 of 10!" + " DOUBLE BLACK DIAMONDS here we come!!!"
  } else if (score === 10) {
    theResult.innerHTML = "You scored 1 of 10!" + " Your a pro skier? That's funny because I am so much better then you!"
  }
}
const scrollTop = () => {
    answer.scrollTo(0,0); 
    }
const exitGame = () => {
    
    finalResults.style.display = 'none';
}

const scrollD = () => {
answer.scrollBy(0, 750); 
}


let score = 0;
const updateScore = () => {
    score++;
    console.log(score);
}


 

startGame.addEventListener('click', openQuestions);results.addEventListener('click', seeResults);
exitPage.addEventListener('click', 
function () {
exitGame();
score = 0;
console.log("Score is " + score);
})

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

// const checkScore = () => {
//    score;
// }
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





// Goal 
// when I click on the anwnser change score to 1 




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