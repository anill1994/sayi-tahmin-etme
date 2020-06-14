var guessSubmit = document.getElementById("guessSubmit")
guessSubmit.addEventListener("click",guessIt)
var randomize =Math.round(Math.random()*100)
var guessField = document.getElementById("inputValue")
var guessCount = 1;
var values = [];

function resetGame(){
    guessCount = 1;
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    randomize = Math.floor(Math.random() * 100) + 1;
    resetButton.remove();
    }

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
  }

function guessIt(){
if(guessCount === 5){
    setGameOver();
}

let para = document.querySelector("#para")
let guessNumber = document.querySelector("#inputValue");
let previousGuesses = document.getElementById("previousGuesses")
console.log(randomize)
values.push(guessNumber.value)
for(var i =0; i<values.length; i++){
}
previousGuesses.textContent = values

console.log(values)
let userGuess = Number(guessNumber.value)
 if(randomize === userGuess){
    para.style.color = "white"
    para.style.width = 25+"%";
    para.style.backgroundColor = "green"
    para.innerHTML = "Tebrikler Bildiniz"
    setGameOver();
 }else{
    para.style.backgroundColor = "red"
    para.style.color = "white"
    para.style.width = 25+"%";
     if(userGuess > 100 || userGuess<0){
        para.innerHTML = "0 ve 100 arasında bir tahmin yapın"
     }else if(randomize > userGuess){
        para.innerHTML = "Deger cok kucuk"
     }else if(randomize < userGuess){
        para.innerHTML = "Deger cok buyuk"
     }else{
         para.innerHTML = "Hatalı Değer"
     }
 }
 guessCount++;
 guessNumber.value = ""
 guessNumber.focus();
}
