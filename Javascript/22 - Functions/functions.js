/*
function happyBirthday(){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear you!");
    console.log("Happy birthday to you!");
}
happyBirthday();
*/

/*
function birthdayMessage(name, age){
    console.log(`Happy birthday dear ${name}!`);
    console.log(`You are now ${age} years old!`);
}
birthdayMessage("Aditya", 17);
birthdayMessage("Ram", 20);
*/

/*
function add(x, y){
    return x + y;
}
function multiply(x, y){
    return x * y;
}
function isEven(x){
    if(x % 2 === 0){
        return true;
    } 
    else{
        return false;
    }
}

console.log(add(2, 7));z
console.log(multiply(2, 7));
console.log(isEven(6));
*/

function isValidEmail(email){
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}
console.log(isValidEmail("aditya@gmail.com"));
console.log(isValidEmail("Sigmamale"));