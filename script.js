// Variables for the DOM elements

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

const input = document.getElementById("text");

const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const timeInterval = setInterval (updateTime, 1000);
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

let difficulty = 'medium';

let correctWord = addWordToDom();

let score = 0;
let time = 30;

//Adding word to DOM
function addWordToDom() {
  const randomIndex = Math.floor(Math.random() * (words.length));

  
  const word = words[randomIndex];

  document.getElementById("word").innerHTML = word;
  return word;
}


//Updating Time
function updateTime() {
  time --;
  timeElement.innerHTML =  `Time: ${time}`;


  if (time === 0) {
    clearInterval(timeInterval);
    gameover();
  }
}

//Input
input.addEventListener("keypress", function(event){
  if (event.key === "Enter") {
if (this.value === correctWord) {
  score++;
  scoreElement.innerHTML= `Score: ${score}`;

  correctWord = addWordToDom();


  //Increase or decrease time based on difficulty
  if (difficulty === 'easy') {
    time += 5;
  } else if (difficulty === 'medium') {
    time += 3;
  } else if (difficulty === 'hard') {
    time += 2;
  }
  timeElement.innerHTML = `Time: ${time}`;
} else {
  console.log("try again!");
}
this.value = "";
}
});


//Game Over 
function gameover() {
  document.querySelector("h2").innerText = `Game Over!`;

}


//Toggle- Setting Visibility
settingsBtn.addEventListener("click", () => {
  const settings = document.getElementById("settings");
  settings.classList.toggle("hidden");
});


//Changing Difficulty
settingsForm.addEventListener("change", (e) => {
  if (e.target.id === "difficulty") {
    difficulty = e.target.value;
  }
});












