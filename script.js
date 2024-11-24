// Variables for the DOM elements
const words = [
  "dependent", "dog", "superficial", "admit", "juice", 
  "javascript", "developer", "airplane", "great", "fun", 
  "manipulate", "cat", "transition", "school", "computer", 
  "programming", "drag", "loving", "north"
];

const input = document.getElementById("text");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

let difficulty = "medium";
let correctWord = addWordToDom();
let score = 0;
let time = 30;

// Start the timer
const timeInterval = setInterval(updateTime, 1000);

// Function to add a random word to the DOM
function addWordToDom() {
  const randomIndex = Math.floor(Math.random() * words.length);
  const word = words[randomIndex];
  document.getElementById("word").innerHTML = word;
  return word;
}

// Function to update the timer
function updateTime() {
  time--;
  timeElement.innerHTML = `Time: ${time}`;

  if (time === 0) {
    clearInterval(timeInterval);
    gameover();
  }
}

// Input event listener for checking typed words
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    if (this.value === correctWord) {
      score++;
      scoreElement.innerHTML = `Score: ${score}`;
      correctWord = addWordToDom();

      // Adjust time based on difficulty
      if (difficulty === "easy") {
        time += 5;
      } else if (difficulty === "medium") {
        time += 3;
      } else if (difficulty === "hard") {
        time += 2;
      }
      timeElement.innerHTML = `Time: ${time}`;
    } else {
      console.log("Try again!");
    }
    this.value = ""; // Clear input field
  }
});

// Function to handle game over
function gameover() {
  document.querySelector("h2").innerText = "Game Over!";
}

// Toggle visibility of the settings menu
settingsBtn.addEventListener("click", () => {
  const settings = document.getElementById("settings");
  settings.classList.toggle("hidden");
});

// Update difficulty based on selection
difficultySelect.addEventListener("change", (e) => {
  difficulty = e.target.value;
});
