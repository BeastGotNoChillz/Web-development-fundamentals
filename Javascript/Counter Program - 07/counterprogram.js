const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const counterTimer = document.getElementById("counterTimer");
let count = 0;

increase.onclick = function(){
    count++;
    counterTimer.textContent = count;
}
decrease.onclick = function(){
    count--;
    counterTimer.textContent = count;
}
reset.onclick = function(){
    count = 0;
    counterTimer.textContent = count;
}