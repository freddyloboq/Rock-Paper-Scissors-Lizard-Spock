let random1 = ["rock", "paper", "scissors", "lizard", "spock"];

//Funcion random para jugar contra la computadora.
const gameRandom = () => {
  let rulet = Math.floor(Math.random() * random1.length);
  return rulet;
};

// let randomGame = gameRandom();
let buttonRock = document.getElementById("rock");
let buttonPaper = document.getElementById("paper");
let buttonScissors = document.getElementById("scissors");
let buttonLizard = document.getElementById("lizard");
let buttonSpock = document.getElementById("spock");
let text = document.getElementById("textResult");
let value = 0;

function result(value) {
  alert("Great! You played with rock " + value + "! Now try trying another.");
}

buttonRock.addEventListener("click", (evento) => {
  // console.log(evento.target.name)
  if (gameRandom() === 0) {
    text.innerHTML = "This is a tie";
  } else if (gameRandom() === 2 || gameRandom() === 3) {
    text.innerHTML = "Congratulations!! You won this round";
  } else {
    text.innerHTML = "Sorry Keep Trying";
  }
  value += 1;
  if (value === 7) {
    result(value);
  }
});

buttonPaper.addEventListener("click", (evento) => {
  // console.log(evento.target.name)
  if (gameRandom() === 1) {
    text.innerHTML = "This is a tie";
  } else if (gameRandom() === 0 || gameRandom() === 4) {
    text.innerHTML = "Congratulations!! You won this round";
  } else {
    text.innerHTML = "Sorry Keep Trying";
  }
  value += 1;
  if (value === 7) {
    result(value);
  }
});

buttonScissors.addEventListener("click", (evento) => {
  // console.log(evento.target.name)
  if (gameRandom() === 2) {
    text.innerHTML = "This is a tie";
  } else if (gameRandom() === 1 || gameRandom() === 3) {
    text.innerHTML = "Congratulations!! You won this round";
  } else {
    text.innerHTML = "Sorry Keep Trying";
  }
  value += 1;
  if (value === 7) {
    result(value);
  }
});

buttonLizard.addEventListener("click", (evento) => {
  // console.log(evento.target.name)
  if (gameRandom() === 3) {
    text.innerHTML = "This is a tie";
  } else if (gameRandom() === 1 || gameRandom() === 4) {
    text.innerHTML = "Congratulations!! You won this round";
  } else {
    text.innerHTML = "Sorry Keep Trying";
  }
  value += 1;
  if (value === 7) {
    result(value);
  }
});

buttonSpock.addEventListener("click", (evento) => {
  // console.log(evento.target.name)
  if (gameRandom() === 4) {
    text.innerHTML = "This is a tie";
  } else if (gameRandom() === 0 || gameRandom() === 2) {
    text.innerHTML = "Congratulations!! You won this round";
  } else {
    text.innerHTML = "Sorry Keep Trying";
  }
  value += 1;
  if (value === 7) {
    result(value);
  }
});
