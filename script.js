let i = 0, j = 0;
function fun() {
    let human, computer;
    let obj = ["ROCK", "PAPER", "SCISSORS"];
    human = event.target.value;
    computer = obj[Math.floor(Math.random() * (4 - 1))];
    if ((human == "ROCK" && computer == "SCISSORS") || ((human == "PAPER" && computer == "ROCK") || (human == "SCISSORS" && computer == "PAPER"))) {
        i++;
    }
    else if ((computer == "ROCK" && human == "SCISSORS") || ((computer == "PAPER" && human == "ROCK") || (computer == "SCISSORS" && human == "PAPER"))) {
        j++;
    }
    else {
        i, j;
    }
    console.log(human, computer, i, j);
    if (i == 5 || j == 5) {
        if (i > j) {
            i = 0;
            j = 0;
            alert("you won the match");
        }
        else {
            i = 0;
            j = 0;
            alert("computer won the match");
        }
    }
    if (computer == "ROCK") {
        document.getElementById("computer_option").innerHTML = "🪨";
    }
    else if (computer == "PAPER") {
        document.getElementById("computer_option").innerHTML = "📄";
    }
    else {
        document.getElementById("computer_option").innerHTML = "✂️";
    }
    if (human == "ROCK") {
        document.getElementById("human_option").innerHTML = "🪨";
    }
    else if (human == "PAPER") {
        document.getElementById("human_option").innerHTML = "📄";
    }
    else {
        document.getElementById("human_option").innerHTML = "✂️";
    }
    document.getElementById("human_SCORE").innerHTML = i;
    document.getElementById("computer_SCORE").innerHTML = j;
}