// let randomNum = Math.trunc(Math.random() * 6) + 1;
// console.log(randomNum);

/*
const max = 100;
const min = 50;

let randomNum = Math.trunc(Math.random() * (max - min)) + min;

console.log(randomNum);
*/

const roll = document.getElementById("roll");
const result = document.getElementById("result");
const min = 1;
const max = 6;
let randomNum;

roll.onclick = function(){
    randomNum = Math.floor(Math.random()* (max - min + 1)) + min ;
    result.textContent = `You got ${randomNum}`;
}
