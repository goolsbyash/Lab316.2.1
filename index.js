// Create your game here!

let guessCounter = 0;
let guessMax = 4;
let numOfJars = 6;
let mainDiv = document.getElementById("app");
let bodyRef = document.body;

let cookiePosition = getRandomInt(1, 7);
let title = document.createElement("h1");
title.textContent = "Can you find the cookie?";
title.style.textAlign = "center";
title.style.paddingTop = "30%";
bodyRef.prepend(title);

for (let i = 0; i < numOfJars; i++) {
  let jar = document.createElement("img");
  jar.setAttribute(
    "src",
    "https://banner2.cleanpng.com/20180207/exq/kisspng-cookie-jar-black-and-white-cookie-clip-art-cookie-jar-picture-5a7b55112c1b28.3659680115180321451807.jpg"
  );
  jar.style.height = "10vh";
  mainDiv.appendChild(jar);
}

mainDiv.style.textAlign = "center";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function promptUser() {
  let userGuess = window.prompt(
    "Which jar is hiding the cookie? Enter as number 1-6."
  );
  return Number(userGuess);
}

function checkAnswer(guess, answer) {
  console.log(answer);
  console.log(guess);
  if (guess === answer) {
    correctAnswer();
    return true;
  } else {
    incorrectAnswer(guess, answer);
    return false;
  }
}

function incorrectAnswer(guest, answer) {
  if (guest < answer) {
    return alert(`Sorry! Try a jar higher than ${guest}.`);
  } else if (guest > answer) {
    return alert(`Sorry! Try a jar lower than ${guest}.`);
  }
}

function correctAnswer() {
  let correct = alert("Congrats! You found the cookie!");
  return correct;
}



console.log(cookiePosition);

setTimeout(function(){
    while (guessCounter < guessMax) {
      let results = checkAnswer(promptUser(), cookiePosition);
      if (results) {
        break;
      }
      guessCounter++;
    }
} ,500);