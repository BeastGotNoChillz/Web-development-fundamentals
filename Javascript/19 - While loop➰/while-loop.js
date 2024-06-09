// While loop = repeat some code WHILE some condition is true.

/*
let username;

while(username === ""){ 
    window.prompt(`Enter your username`);
}

console.log(`Hello ${username}`);
*/

/*
let rizz = Number;

do{
    rizz = window.prompt(`Enter your rizz level`);
}while(rizz >= 10)
    console.log(`${rizz} level means you are a rizz lord and get all the b*****s`);
*/

let loggedIn = false;
let username; 
let password;

while(!loggedIn){
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "username" && password === "password"){
        console.log(`You're logged in!`)
    }
    else{
        console.log(`Invalid username or password! Please try again.`)
    }
}