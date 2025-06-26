const chiffre = document.getElementById("chiffre");
const indicator = document.getElementById("indicator");
const newhs = document.getElementById("newhs");
const validateBtn = document.getElementById("validate");
const restartBtn = document.getElementById("restart");
let scoreSpan = document.getElementById("score");
let highscoreSpan = document.getElementById("highscore");
let random = Math.floor(Math.random() * 100) + 1;
let score = 0;
let highscore = 0;

const visible = "inline-block";
const invisible = "none";

restartBtn.style.display = invisible;
indicator.style.color = "#fff";
indicator.style.textShadow = invisible;
chiffre.value = "";

chiffre.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkNumber();
    }
});

function checkNumber() {
    if (chiffre.value == "") {
        indicator.textContent = "Veuillez choisir un nombre.";
        indicator.style.color = "yellow";
        indicator.style.textShadow = "0 0 20px yellow, 0 0 40px yellow";
        score--;
    } else if (isNaN(parseInt(chiffre.value))) {
        indicator.textContent = "Veuillez choisir un nombre valide.";
        indicator.style.color = "yellow";
        indicator.style.textShadow = "0 0 20px yellow, 0 0 40px yellow";
        score--;
    } else {
        if (1 <= parseInt(chiffre.value) && parseInt(chiffre.value) <= 100) {
            check();
        } else {
            indicator.textContent = "Veuillez choisir un nombre entre 1-100.";
            indicator.style.color = "yellow";
            indicator.style.textShadow = "0 0 20px yellow, 0 0 40px yellow";
            score--;
        }
    }
    
    chiffre.value = "";
    score++;
    scoreSpan.textContent = score;
}

function recordUpdate() {
    if (highscore == 0) {
        highscore = score+1;
        newhs.textContent = "Nouveau record !"
    } else {
        if (score < highscore) {
            highscore = score+1;
            newhs.textContent = "Nouveau record !"
        }
    }
    highscoreSpan.textContent = highscore;
}

function check() {
    if (chiffre.value > random) {
        indicator.textContent = "Le nombre est plus petit...";
        indicator.style.color = "red";
        indicator.style.textShadow = "0 0 20px red, 0 0 40px red";
    } else if (chiffre.value < random) {
        indicator.textContent = "Le nombre est plus grand...";
        indicator.style.color = "red";
        indicator.style.textShadow = "0 0 20px red, 0 0 40px red";
    } else if (chiffre.value == random) {
        indicator.textContent = "Felicitations, vous avez reussi, c'était bien " + chiffre.value + " !!!";
        indicator.style.color = "rgb(51, 255, 0)";
        indicator.style.textShadow = "0 0 20px rgb(51, 255, 0), 0 0 40px rgb(51, 255, 0)";
        restartBtn.style.display = visible;
        validateBtn.style.display = invisible;
        recordUpdate();
    }
}

function restart() {
    chiffre.value = "";
    restartBtn.style.display = invisible;
    validateBtn.style.display = visible;
    score = 0;
    scoreSpan.textContent = score;
    indicator.textContent = "Choisissez votre nombre. :)";
    indicator.style.color = "#fff";
    indicator.style.textShadow = invisible;
    newhs.textContent = "";
    random = Math.floor(Math.random() * 100) + 1;
}
