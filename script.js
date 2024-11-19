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

let correctWord = addWordToDom();

let score = 0;
let time = 30;


function addWordToDom() {
  const randomIndex = Math.floor(Math.random() * (words.length));

  
  const word = words[randomIndex];

  document.getElementById("word").innerHTML = word;
  return word;
}

function updateTime() {
  time --;
  timeElement.innerHTML =  `Time: ${time}`;


  if (time === 0) {
    clearInterval(timeInterval);
    gameover();
  }
}


input.addEventListener("keypress", function(event){
  if (event.key === "Enter") {
if (this.value === correctWord) {
  score++;
  scoreElement.innerHTML= `Score: ${score}`;

  correctWord = addWordToDom();

  time += 5;
  timeElement.innerHTML = `Time: ${time}`;

 } else {
    console.log("try again!");
  
}


this.value = "";
  }
})

function gameover() {
  document.querySelector("h2").innerText = `Game Over!`;
}










