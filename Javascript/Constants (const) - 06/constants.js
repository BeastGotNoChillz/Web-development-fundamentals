// Constants (Const) = A variable that can't be changed.

const PI = 3.14159;
let radius;
let circumference;

// PI = 22 (won't work because of const)

// radius = Number(window.prompt("enter any radius of a circle"));

document.getElementById('button').onclick = function() {
    radius = document.getElementById("inputid").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    console.log(circumference);
    document.getElementById("h3id").textContent = `The circumference according to your information is ${circumference}`;
}    