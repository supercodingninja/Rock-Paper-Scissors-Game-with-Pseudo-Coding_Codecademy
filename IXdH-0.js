//Rock destroys scissors.//
//Scissors cut paper.//
//Paper covers rock.//
//Here lies the conundrum: The Circle of Life.//


/*This code will break the game into 3 phases:
a. User makes a choice
b. Computer makes a choice
c. A compare function will determine who wins*/
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

// Use console.log() to print "computerChoice"
console.log (computerChoice);


//I now have computerChoice; but it now equals a random number between 0 and 1. I need to somehow translate this random number into a random choice of rock, paper, or scissors. How do we do this?!//

/*If computerChoice is between 0 and 0.33, I need to make computerChoice equal to "rock".

if (computerChoice 0 > 0.33) {
	// Use console.log() to prompt "computerChoice"
console.log ("computerChoice");
}*/


/*If computerChoice is between 0.34 and 0.66, I need to make computerChoice equal to "paper".

else (computerChoice 0.34 > 0.66) {
	// Use console.log() to prompt "computerChoice"
console.log ("computerChoice");
}*/


/*If computerChoice is between 0.67 and 1, I need to make computerChoice equal to "scissors".

else (computerChoice 0.67 > 1) {
	// Use console.log() to prompt "computerChoice"
console.log ("computerChoice");
}*/

//But there are three outcomes! Using if / else only lets us have two outcomes. What now?! I need to use if / else if / else, Right?!//
if (computerChoice >= 0 && computerChoice <= 0.33) {
    // Use console.log() to prompt "computerChoice"
    console.log ("Rock");
}

else if (computerChoice > 0.33 && computerChoice <= 0.67) {
    // Use console.log() to prompt "computerChoice"
    console.log ("Paper");
}

else if (computerChoice > 0.67 && computerChoice <= 1) {
    // Use console.log() to prompt "computerChoice"
    console.log ("Scissors");
}
