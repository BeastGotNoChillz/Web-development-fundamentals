// let username = window.prompt("What's your username?");
// console.log(username); (Easy way of accepting user input)


let username; // dont use '=' here

document.getElementById("submit").onclick = function(){  
    username = document.getElementById("input").value;
    // console.log(username);
    document.getElementById("h1id").textContent = `Welcome ${username}!`;
}
