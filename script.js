
let characterTxt = document.getElementById("character");
let chosePlayer = document.getElementById("chosePlayer");
let choseMachine = document.getElementById("choseMachine");
let options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
let result = document.getElementById("result");
let play = document.getElementById("play");
let playerPoints = 0;
let machinePoints = 0;
let playerPointsTxt = document.getElementById("playerPoints");
let machinePointsTxt = document.getElementById("machinePoints");
let gameFinal = document.getElementById("gameFinal");

play.onclick = function () {
    console.log(chosePlayer.textContent);
    playgame(chosePlayer.textContent, randomOption(options));
    playerPointsTxt.innerHTML = `${playerPoints} <small class=\"text-muted\">points</small>`;
    machinePointsTxt.innerHTML = `${machinePoints} <small class=\"text-muted\">points</small>`;
    if (playerPoints > 4) {
        gameFinal.innerHTML = "You are the winner!"
        playerPoints = 0;
        machinePoints = 0;
    } else if (machinePoints > 4) {
        gameFinal.innerHTML = "Game Over!"
        playerPoints = 0;
        machinePoints = 0;
    } else {
        gameFinal.innerHTML = "Results"
    }
};

function randomOption(options) {
    let random = options[Math.floor(Math.random() * 5)];
    choseMachine.innerHTML = random;
    console.log(random);
    return random;
}

function changeOption(option) {
    chosePlayer.innerHTML = option;
}

function changeCharacter(character) {
    characterTxt.innerHTML = character;
}

function playgame(player, machine) {
    if (player === "Rock") {
        if (machine === "Paper") {
            result.innerHTML = "You lost!";
            machinePoints++;
        } else if (machine === "Spock") {
            result.innerHTML = "You lost!";
            machinePoints++;
        } else if (machine === "Scissors") {
            result.innerHTML = "You won!";
            playerPoints++;
        } else if (machine === "Lizard") {
            result.innerHTML = "You won!";
            playerPoints++;
        } else {
            result.innerHTML = "It's a tie!";
        }
    } else if (player === "Paper") {
        if (machine === "Rock") {
            result.innerHTML = "You won!";
            playerPoints++;
        } else if (machine === "Spock") {
            result.innerHTML = "You won!";
            playerPoints++;
        } else if (machine === "Scissors") {
            result.innerHTML = "You lost!";
            machinePoints++;
        } else if (machine === "Lizard") {
            result.innerHTML = "You lost!";
            machinePoints++;
        } else {
            result.innerHTML = "It's a tie!";
        }
    } else if (player === "Scissors") {
        if (machine === "Rock") {
            result.innerHTML = "You lost!";
            machinePoints++;
        } else if (machine === "Spock") {
            result.innerHTML = "You lost!";
            machinePoints++;
        } else if (machine === "Paper") {
            result.innerHTML = "You won!";
            playerPoints++;
        } else if (machine === "Lizard") {
            result.innerHTML = "You won!";
            playerPoints++;
        } else {
            result.innerHTML = "It's a tie!";
        }
    } else if (player === "Lizard") {
        if (machine === "Rock") {
            result.innerHTML = "You lost!";
            machinePoints++;
        } else if (machine === "Spock") {
            result.innerHTML = "You won!";
            playerPoints++;
        } else if (machine === "Paper") {
            result.innerHTML = "You won!";
            playerPoints++;
        } else if (machine === "Scissors") {
            result.innerHTML = "You lost!";
            machinePoints++;
        } else {
            result.innerHTML = "It's a tie!";
        }
    } else if (player === "Spock") {
        if (machine === "Rock") {
            result.innerHTML = "You won!";
            playerPoints++;
        } else if (machine === "Lizard") {
            result.innerHTML = "You lost!";
            machinePoints++;
        } else if (machine === "Paper") {
            result.innerHTML = "You lost!";
            machinePoints++;
        } else if (machine === "Scissors") {
            result.innerHTML = "You won!";
            playerPoints++;
        } else {
            result.innerHTML = "It's a tie!";
        }
    }
}

let rock = document.getElementById("Rock");
rock.onclick = function () {
    changeOption(this.id);
};

let paper = document.getElementById("Paper");
paper.onclick = function () {
    changeOption(this.id);
};

let scissors = document.getElementById("Scissors");
scissors.onclick = function () {
    changeOption(this.id);
};

let lizard = document.getElementById("Lizard");
lizard.onclick = function () {
    changeOption(this.id);
};

let spock = document.getElementById("Spock");
spock.onclick = function () {
    changeOption(this.id);
};

let sheldon = document.getElementById("Sheldon");
sheldon.onclick = function () {
    changeCharacter(this.id);
    playerPoints = 0;
    machinePoints = 0;
    playerPointsTxt.innerHTML = `${playerPoints} <small class=\"text-muted\">points</small>`;
    machinePointsTxt.innerHTML = `${machinePoints} <small class=\"text-muted\">points</small>`;
};

let rajesh = document.getElementById("Rajesh");
rajesh.onclick = function () {
    changeCharacter(this.id);
    playerPoints = 0;
    machinePoints = 0;
    playerPointsTxt.innerHTML = `${playerPoints} <small class=\"text-muted\">points</small>`;
    machinePointsTxt.innerHTML = `${machinePoints} <small class=\"text-muted\">points</small>`;
};

let leonard = document.getElementById("Leonard");
leonard.onclick = function () {
    changeCharacter(this.id);
    playerPoints = 0;
    machinePoints = 0;
    playerPointsTxt.innerHTML = `${playerPoints} <small class=\"text-muted\">points</small>`;
    machinePointsTxt.innerHTML = `${machinePoints} <small class=\"text-muted\">points</small>`;
};

let howard = document.getElementById("Howard");
howard.onclick = function () {
    changeCharacter(this.id);
    playerPoints = 0;
    machinePoints = 0;
    playerPointsTxt.innerHTML = `${playerPoints} <small class=\"text-muted\">points</small>`;
    machinePointsTxt.innerHTML = `${machinePoints} <small class=\"text-muted\">points</small>`;
};

let penny = document.getElementById("Penny");
penny.onclick = function () {
    changeCharacter(this.id);
    playerPoints = 0;
    machinePoints = 0;
    playerPointsTxt.innerHTML = `${playerPoints} <small class=\"text-muted\">points</small>`;
    machinePointsTxt.innerHTML = `${machinePoints} <small class=\"text-muted\">points</small>`;
};
