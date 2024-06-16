const textbox = document.getElementById("textbox");
const toCelsius = document.getElementById("toCelsius");
const toFahrenheit = document.getElementById("toFahrenheit");
const result = document.getElementById("result");
let temp;

function convert(){
    if(toCelsius.checked){
        temp = Number(textbox.value)
        temp = (temp - 32) * 5 / 9;
        temp = Math.round(temp * 100) / 100;
        result.textContent = temp + "°C";
    }
    else if(toFahrenheit.checked){
        temp = Number(textbox.value)
        temp = (9 / 5 * temp) + 32;
        temp = Math.round(temp * 100) / 100;
        result.textContent = temp + "°F";
    }
    else{
        result.textContent = "Please select a unit.";
    }   
}