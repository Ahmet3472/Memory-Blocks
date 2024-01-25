var buttonList = [
    document.getElementById("b1"),
    document.getElementById("b2"),
    document.getElementById("b3"),
    document.getElementById("b4"),
    document.getElementById("b5"),
    document.getElementById("b6"),
    document.getElementById("b7"),
    document.getElementById("b8"),
    document.getElementById("b9")
];

var currentNumber;
var streak = 0;
document.getElementById("streak").innerText = "Winning Streak: " + streak; 

function startGame() {
    currentNumber = 1;

    buttonList.forEach(function(button) {
        button.style.backgroundColor = 'white';
    });

    buttonList.forEach(function(button) {
        button.removeEventListener('click', checkButton);
    });

    shuffleNumbers();
    showNumbers();

    setTimeout(function(){
        for(let i = 0; i < buttonList.length; i++){
            buttonList[i].innerText = "";
        }

        buttonList.forEach(function(button) {
            button.addEventListener('click', checkButton);
        });
    
    }, 3000);
}

function checkButton() {
    if (parseInt(this.value) == currentNumber) {
        this.style.backgroundColor = 'green';
        this.innerText = this.value;

        if (currentNumber == 9) {
            alert("Gewonnen!");
            streak++;
            document.getElementById("streak").innerText = "Winning Streak: " + streak; 
        }

        currentNumber++;
    } 
    else {
        alert("Verloren!");
        
        this.style.backgroundColor = 'red';
        streak = 0;
        document.getElementById("streak").innerText = "Winning Streak: " + streak; 

        buttonList.forEach(function(button) {
            button.removeEventListener('click', checkButton);
        });

        showNumbers();
    }
}

function showNumbers(){
    buttonList.forEach(function(button) {
        button.innerText = button.value;
    });
}

function shuffleNumbers(){
    let usedNumbers = [];

    for(let i = 0; i < buttonList.length; i++){
        while(true){
            var randomNumber = Math.floor(Math.random() * 9) + 1;

           if(!usedNumbers.includes(randomNumber)){
              buttonList[i].value = randomNumber;
              usedNumbers.push(randomNumber);
              break;
            }
        }
    }
}

document.getElementById("start").addEventListener('click', startGame);
