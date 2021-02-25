// "Hitchhiker's Guide to the Galaxy"

let message = prompt("Are you ready to play the game? (yes/no)");
let = "yes";
let = "no";
if (message == "yes") {
    alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.")
}
else {
    alert("Thank you! Come again sometime");
}

let direction = prompt("Which direction would you like to head (please enter forward, left,  or right).")

switch(direction) {
     case "left":
     alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!");
    break;

    case "forward": 
    alert("You walk 100 yards and safely make your way out of the cave.");
        break;

    case "right":
    alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!");
    break;

    default:
        alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.")

}

let theEnd = prompt("Please, rate the game between 1 and 10");

if (theEnd < 1 && theEnd > 10 ) {
    alert("Thank you for playing the game!");
} else if (theEnd >=  6 &&  theEnd <= 10 ) {
    prompt("Thank you! Would you like to play again? (yes/no)");
 } else if (theEnd >= 1 && theEnd <= 5 ) {
    alert("Thank you! We are working hard to improve the game");
}
 






