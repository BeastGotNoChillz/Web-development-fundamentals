// NUMBER GUESSING GAME


const minimum = 1;
const maximum = 100;
const answer = Math.floor(Math.random() * (maximum - minimum + 1)); 

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt("Guess a number between 1 and 100");
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minimum || guess > maximum){
        window.alert(`You can't guess numbers that are lower or greater than 1 and 100 respectively`)
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("Too low! Try again");
        }
        else if(guess > answer){
            window.alert("Too high! Try again");
        }
        else{
            window.alert(`Congratulations! You guessed the number in ${attempts} attempts`);
            !running;
        }
    }
   
}