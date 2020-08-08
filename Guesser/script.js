console.log("%c[ H e l l o ,  y o u  c h e a t e r . ]", "color: darkred;font-weight:bolder");

// Store random number so we can reuse later for comparisons
let numberToGuess = Math.floor((Math.random() * 100) + 1);
let promptUser = document.querySelector('p');
let lives = 5;
let userGuessBox = document.querySelector("#userGuess");
let userGuess = userGuessBox.value;

setInterval(function(){
    userGuess = document.querySelector('#userGuess').value;

    if(userGuess.length > 3) {
        console.log('im a good boy');
        userGuess = userGuess.substring(0, 3);
        document.querySelector("#userGuess").value = userGuess;
    }
 }, 1);


    

// Populate hearts in the lives span tag once without requiring a keypress
for(i = 0; i < lives; i++) {
    document.querySelector('#hearts').innerHTML += '&hearts;';
}

document.addEventListener("keypress", function(event) {
    // Store user guess box in a variable and store the value of that 
    // in a different variable so we can reuse both later
    userGuess = document.querySelector("#userGuess").value;

    // Only run game logic if they press enter and they have typed something
    if(event.key === 'Enter' && userGuess.length > 0) {
        promptUser.style.color = "black";
        if(userGuess > numberToGuess) {
            promptUser.innerHTML = 'Guess lower.';
            userGuessBox.style.borderColor = "red";
            lives--;
        }
        else if(userGuess < numberToGuess) {
            promptUser.innerHTML = 'Guess higher.';
            userGuessBox.style.borderColor = "red";
            lives--;
        }
        else if(userGuess == numberToGuess) {
            promptUser.innerHTML = 'You win!';
            userGuessBox.style.borderColor = "lime";
        }

        // Makes heart bigger when at one life
        if(lives < 2) {
            document.querySelector('#hearts').style.fontSize = '100px';
        }

        // Reset hearts so we can repopulate them
        document.querySelector('#hearts').innerHTML = '';

        // Append the same number of hearts in the HTML as how many
        // lives the user has
        for(let i = 0; i < lives; i++) {
            document.querySelector('#hearts').innerHTML += '&hearts;';
        }

        // Resets input so they don't have to backspace
        document.querySelector('#userGuess').value = '';

    }
    
});
