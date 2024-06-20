// Array = a variable like structure that can hold
//         more than one value

/*
let array = ["value1", "value2", "value3", "value 4", "so on.."];
    console.log(array);
*/

/*
let alphabet = ["A", "B", "C", "D"];
    console.log(alphabet[0]);
    console.log(alphabet[3]);
*/

/*
let fruits = ["banana", "apple", "lemon"];
fruits[0] = "rice";
fruits[2] = "wiski";

    console.log(fruits[0]);
    console.log(fruits[2]);
*/

/*
let alphabet = ["A", "B", "C", "D"];
// alphabet.push("coconut");
// alphabet.pop();
// alphabet.unshift("car");
// alphabet.shift();

    console.log(alphabet[0]);
    console.log(alphabet[1]);
    console.log(alphabet[2]);
    console.log(alphabet[3]);
*/

/*
let fruits = ["banana", "apple", "lemon", "blueberries"];
// let fruitsNum = fruits.length;
// let index = fruits.indexOf("apple");

    console.log(index);
*/

// let fruits = ["banana", "apple", "lemon", "blueberries"];
/*
for(i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
*/

/*
for(i = 0; i < fruits.length; i+=2){
    console.log(fruits[i]);
}
*/

/*
for(i = fruits.length -1; i >= 0; i--){
    console.log(fruits[i]);
}
*/

         
                        /* SHORT-CUT */

let examples = ["eg1", "eg2", "eg3", "eg4"];

examples.sort().reverse();

for(example of examples){
    console.log(example);
}