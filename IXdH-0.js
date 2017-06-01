// Rock destroys scissors. //
// Scissors cut paper. //
// Paper covers rock. //
// Here lies the conundrum: The Circle of Life. //


/*This code will break the game into 3 phases:
a. User makes a choice (user is prompted to make a choice)
b. Computer makes a choice (by a random function)
c. A compare function will determine who wins*/
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

// Use console.log() to show "computerChoice" //
console.log (computerChoice);


// I now have computerChoice; but it now equals a random number between 0 and 1. I need to somehow translate this random number into a random choice of rock, paper, or scissors. How do we do this?! //

/*If computerChoice is between 0 and 0.33, I need to make computerChoice equal to "rock".

if (computerChoice >= 0 && computerChoice <= 0.33) {
    // Use console.log() to show "computerChoice" //
    console.log ("Rock");
}*/


/*If computerChoice is between 0.34 and 0.66, I need to make computerChoice equal to "paper".

else if (computerChoice > 0.33 && computerChoice <= 0.67) {
    // Use console.log() to show "computerChoice" //
    console.log ("Paper");
}*/


/*If computerChoice is between 0.67 and 1, I need to make computerChoice equal to "scissors".

else if (computerChoice > 0.67 && computerChoice <= 1) {
    // Use console.log() to show "computerChoice" //
    console.log ("Scissors");
}*/

//But there are three outcomes! Using if / else only lets us have two outcomes. What now?! I need to use if / else if / else, Right?!//
if (computerChoice >= 0 && computerChoice <= 0.33) {
    // Use console.log() to show "computerChoice" //
    console.log ("Rock");
}

else if (computerChoice > 0.33 && computerChoice <= 0.67) {
    // Use console.log() to show "computerChoice" //
    console.log ("Paper");
}

else if (computerChoice > 0.67 && computerChoice <= 1) {
    // Use console.log() to show "computerChoice" //
    console.log ("Scissors");
}

// Now comes the fun part! I need to create a function. It will take two parameters (ie. the two choices made) and then return the winning choice. When programming a game like this, I have to first figure out all the various outcomes. One outcome is that the choice the user makes is equal to the choice the computer makes: Both choices are the same! //
function compare (choice1, choice2) {
    
    var userChoice = choice1;
    var computerChoice = choice2;
    
    if (choice1 > choice2) {
        // Show "Outcome" //
       // return ("You Win"); //
    }
    
    else if (choice1 < choice2) {
        // Show "Outcome" //
       // return ("You Lost; but try again."); //
    }
    
    else if (choice1 == choice2) {
        // Show "Outcome" //
        return ("The result is a tie!");
    }
        
    /*Now, I must consider the other scenarios. I need to break the problem down a little. What if choice1 is "rock"? Given choice1 is "rock",

a. if choice2 === "scissors", then "rock" wins.
b. if choice2 === "paper", then "paper" wins.

How do I structure this? It's a bit different from what I have already seen, in my earlier code. I will first, need an if statement; and then another code inside that if statement; which will be... another if statement!*/
    else if (choice1 === "Rock") {
        
        if (choice2 === "Scissors") {
            // Show "Outcome" //
            return ("Rock Wins");
        }
        
        else if (choice2 === "Paper") {
            // Show "Outcome" //
            return ("Paper Wins");
        }
    }
    
    else if (choice1 === "Paper") {
        
        if (choice2 === "Rock") {
            // Show "Outcome" //
            return ("Paper Wins");
        }
        
        else if (choice2 === "Scissors") {
            // Show "Outcome" //
            return ("Scissors Wins");
        }
    }
    
    else if (choice1 === "Scissors") {
        
        if (choice2 === "Rock") {
            // Show "Outcome" //
            return ("Rock Wins");
        }
        
        else if (choice2 === "Scissors") {
            // Show "Outcome" //
            return ("Scissors Wins");
        }
    }
    
    // What if a user makes an inappropriate choice like 'dog'? How can I extend the function to handle that? //
    else if (choice1 != "Rock", "Paper", "Scissors") {
            // Show "Outcome" //
            return ("Really?!  Rock, Paper, or Scissors: make a choice of these three; or you automatically lose.");
    }
        if (choice1 != "Rock", "Paper", "Scissors") {
            // Show "Outcome" //
            return ("Game Over: you don't want to play, your lost.");
        }
        
        else if (choice2 === "Scissors") {
            // Show "Outcome" //
            return ("Scissors Wins");
        }
        
        else if (choice1 === "Rock") {
        
            if (choice2 === "Scissors") {
                // Show "Outcome" //
                return ("Rock Wins");
            }
        
            else if (choice2 === "Paper") {
                // Show "Outcome" //
                return ("Paper Wins");
            }
        }
    
    else if (choice1 === "Paper") {
        
        if (choice2 === "Rock") {
            // Show "Outcome" //
            return ("Paper Wins");
        }
        
        else if (choice2 === "Scissors") {
            // Show "Outcome" //
            return ("Scissors Wins");
        }
    }
    
    else if (choice1 === "Scissors") {
        
        if (choice2 === "Rock") {
            // Show "Outcome" //
            return ("Rock Wins");
        }
        
        else if (choice2 === "Scissors") {
            // Show "Outcome" //
            return ("Scissors Wins");
        }
    }
}
