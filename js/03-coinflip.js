// Coin Flip Game


let coinFlip = Math.round(Math.random());
    

let choice = prompt("Heads or Tails?");

if (coinFlip < 1 && choice == "Heads") {
    alert("The flip was heads and you chose heads ... You Win!!!!");
} 
else if (coinFlip < 1 && choice == "Tails") {
    alert("The flip was heads and you chose tails ... you lose"); 
        
    }
if (coinFlip > 0 && choice == "Heads") {
    alert("The flip was tails but you chose heads...you lose!");
} else if (coinFlip > 0 && choice == "Tails") {
        alert("The flip was tails and you chose tails...you win!");

}


