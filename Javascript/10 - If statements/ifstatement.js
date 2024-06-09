/*
let age = 16;

if(age >= 18){
    console.log("You are eligible to vote.");
}
else{
    console.log("You shall not vote.");
}
*/

/*
let isStudent = true;

if (isStudent){
    console.log("You are a student.");
}
else{
    console.log("You are NOT a student.");
}
*/

/*
let age = 88;
let owningLicense = false;

if (age >= 18){
    console.log("You're old enough to drive.");

        if(owningLicense){
            console.log("You have your licnese!");
        }
        else{
            console.log("You don't have your license.");
        }
}
else{
    console.log("You're not old enough to drive.");
}
*/

const text = document.getElementById("text");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
let age;

submit.onclick = function(){
    age = text.value;
    age = Number(age);

    if(age >= 18 && age < 100){
        result.textContent = `You can drink alcohol.`;
    }
    else if(age <= 0){
        result.textContent = `Your age cannot be 0 or less.`;
    }
    else if(age >= 120){
        result.textContent = `You're too old to drink alcohol.`;
    }
    else{
        result.textContent = `You can't drink alcohol.`;
    }
}





