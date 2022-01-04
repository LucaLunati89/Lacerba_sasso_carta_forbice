//definisco variabili di partenza
var score = {
    userScore: 0,
    cpuScore: 0
}

var userPick;
var cpuPick;

var sasso = "sasso";
var carta = "carta";
var forbice = "forbice";

var allOptions = [
    {
        name: sasso,
        image: "assets/sasso.png"
    },
    {
        name: carta,
        image: "assets/carta.png"
    },
    {
        name: forbice,
        image: "assets/forbice.png"
    }
]

//ritorna un array di tutti gli elementi che hanno come attributo classe quel nome
var possibleUserPicks = document.getElementsByClassName("user-choice");

//aggiunge un event listener per ogni elemento dell array 
for(var i = 0; i < possibleUserPicks.length; i++){
    possibleUserPicks[i].addEventListener('click', onUserPick);
}

//funzione passata all'interno degli event listener
function onUserPick(){
    
        userPick = this.dataset.name;
        generateCpuPick();
        var cpuPickImage = "<img src='" + cpuPick.image + "' />";
        var cpuPickText = "<h3>" + cpuPick.name + "</h3>";
        document.getElementById("computer-choice").innerHTML = cpuPickImage + cpuPickText;
        document.getElementById("result").innerHTML = checkWhoWon();
        document.getElementById("player-score").innerHTML = score.userScore;
        document.getElementById("cpu-score").innerHTML = score.cpuScore;

}
//genera una scelta casuale del computer tra le varie opzioni
function generateCpuPick(){
    cpuPick = allOptions[Math.floor(Math.random() * allOptions.length)];
}

//controlla chi ha vinto
function checkWhoWon() {

    if(userPick == cpuPick.name){
        return "hai pareggiato!";
    } else {
        if(userPick == sasso){
            if(cpuPick.name == forbice){
                score.userScore++;
                return "hai vinto!";
            } else{
                score.cpuScore++;
                return "hai perso!";
            }
        } 
        if(userPick == carta){
            if(cpuPick.name == sasso){
                score.userScore++;
                return "hai vinto!";
            } else{
                score.cpuScore++;
                return "hai perso!";
            }
        } 
        if(userPick == forbice){
            if(cpuPick.name == carta){
                score.userScore++;
                return "hai vinto!";
            } else{
                score.cpuScore++;
                return "hai perso!";
            }
        }
    }

}

