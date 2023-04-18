let startBtn = document.getElementById("startBtn");
let gameStart = document.querySelector(".gameStart");
let question = document.getElementById("question");
let word = document.getElementById("word");
let userInput = document.getElementById("userInput");
let guessBtn = document.getElementById("guessBtn");
let playAgainBtn = document.getElementById("playAgainBtn");
let shuffle;
let questionArray = [
  "javascript",
  "java",
  "python",
  "word",
  "programming",
  "coding",
  "computer",
  "php",
  "developer",
  "internet",
  "website",
  "software",
];

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  gameStart.style.display = "flex";
  shuffle = randomword();
  word.innerText = shuffleWord(shuffle);
});

guessBtn.addEventListener("click", () => {
  let input = userInput.value.toLowerCase();
  if (input == shuffle) {
    question.innerText = "Wow Cool Your Answer is Correct";
    guessBtn.style.display = "none";
    playAgainBtn.style.display = "block";
    word.innerText = "";
    userInput.disabled = true;
  } else {
    userInput.focus();
    guessBtn.innerHTML = "Guess Again";
    question.innerText = "Your Answer is Wrong :";
  }

  playAgainBtn.addEventListener("click", () => {
    userInput.disabled = false;
    userInput.focus();
    userInput.value = "";
    guessBtn.innerHTML = "Guess";
    guessBtn.style.display = "block";
    playAgainBtn.style.display = "none";
    question.innerText = "Guess Word :";
    shuffle = randomword();
    word.innerText = shuffleWord(shuffle);
  });
});

function randomword() {
  let random = Math.floor(Math.random() * questionArray.length);
  let randomwords = questionArray[random];
  return randomwords;
}

function shuffleWord(word) {
  var shuffledWord = "";
  word = word.split("");
  while (word.length > 0) {
    shuffledWord += word.splice((word.length * Math.random()) << 0, 1);
  }
  return shuffledWord;
}
