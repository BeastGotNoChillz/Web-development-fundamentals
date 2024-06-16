// let randomNum = Math.trunc(Math.random() * 6) + 1;
// console.log(randomNum);

/*
const max = 100;
const min = 50;

let randomNum = Math.trunc(Math.random() * (max - min)) + min;

console.log(randomNum);
*/

const roll = document.getElementById("roll");
const label = document.getElementById("label");
const min = 1;
const max = 6;
let randomNum;

roll.onlick = function(){
    randomNum = Math.trunc(Math.random * (max - min)) + min;
    label.textContent = randomNum;
}