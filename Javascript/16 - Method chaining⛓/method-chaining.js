// Method Chaining = Calling one method after another in
//                   one line continuous line of code.     

// --- NO METHOD CHAINING ---

    /*
let username = window.prompt("Enter your username");
username = username.trim();
let letter = username.charAt(0);
    letter = letter.toUpperCase();

let extraletters = username.slice(1);
    extraletters = extraletters.toLowerCase();
username = letter + extraletters;

console.log(username);
    */


// --- METHOD CHAINING ---
let username = window.prompt("Enter your username");
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
    console.log(username);
